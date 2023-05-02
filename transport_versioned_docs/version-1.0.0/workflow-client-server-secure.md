---
id: secure-connection
title: Create secure client and server
---

You can configure the Unity Transport package to encrypt the server-client connection while ensuring the authenticity of both the server and the client.

Secure connections are available with Editor versions 2020.3 (starting at 2020.3.34), 2021.3, and 2022.1 and above.

## Server authentication

:::warning Warning
This example uses hardcoded certificates to illustrate the process better. However, in an actual deployment, you should keep the server certificates separate from the client builds. You can do this by keeping the server certificates on a separate assembly or by loading the server certificates from a file on the server.
:::

### High level authentication process

In this configuration, the server provides a certificate to the client (`certificate`) to prove its identity. The client uses its own root certificate (`caCertificate`) to validate the certificate from the server.

:::note
Root certificates are also sometimes referred to as CA certificates.
:::

After confirming its identity, the server uses the private key (`privateKey`) to establish a secure communication channel.

### Requirements

You need the following before you can use the client-server secure workflow:

- A valid certificate
- The root certificate used to sign the certificate
- The private key used to create the certificate

You can use OpenSSL to generate these if you don't have them. The procedure is detailed hereafter.

### Generating the required keys and certificates with OpenSSL

It is assumed that you have [OpenSSL](https://www.openssl.org/) installed on your machine.

#### Generate the root certificate

First, generate a root private key. You will need it later to generate the root certificate.

```shell
openssl genrsa -out clientPrivateKeyForRootCA.pem 2048
```

Now that you have a root private key, you can generate the root certificate.

```shell
openssl req -x509 -new -nodes -key clientPrivateKeyForRootCA.pem -sha256 -days 1095 -out myGameClientCA.pem
```

You will be prompted to answer several questions. Most of the answers aren't that important within the present context. It is, however, useful to use a common name that makes sense for you to identify this certificate amongst others. Ideally, you would want to use your domain name if you have one.

#### Generate the root-signed certificate to use with the server

Now, create a private key for the server.

```shell
openssl genrsa -out myGameServerPrivateKey.pem 2048
```

You can use this private key to generate a certificate signing request.

```shell
openssl req -new -key myGameServerPrivateKey.pem -out myGameServerCertificateSigningRequest.pem
```

You'll be prompted with the same questions you answered when generating the root certificate. The answers are no more important (except for the common name: it's recommended to use the server's hostname).

Finally, you can create the certificate file the server will use to authenticate itself using the generated files:

```shell
openssl.exe x509 -req -in myGameServerCertificateSigningRequest.pem -CA myGameClientCA.pem -CAkey clientPrivateKeyForRootCA.pem -CAcreateserial -out myGameServerCertificate.pem -days 365 -sha256
```

You should have now generated a total of five files. You only need to use the following three: `myGameClientCA.pem`, `myGameServerCertificate.pem`, and `myGameServerPrivateKey.pem`.

- On the client side, you need the content of the `myGameClientCA.pem` for the `caCertificate` parameter.
- On the server end, you need the contents of `myGameServerCertificate.pem` for the `certificate` parameter.
- On the server end, you need the contents of `myGameServerPrivateKey.pem` for the `privateKey` parameter.

### Boilerplate file holding the secure parameters

Create a `SecureParameters.cs` script file to hold your certificates and the private key. Place it in the same folder as the minimal server and minimal client scripts. Then, declare the `SecureParameters` static class and the boilerplate code that will hold your secure information:

```csharp
public static class SecureParameters
{
    // Use the common name you used to create the server certificate.
    public static readonly string ServerCommonName = "localserver";

    public static readonly string MyGameClientCA =
@"-----BEGIN CERTIFICATE-----
*** Contents of myGameClientCA.pem ***
-----END CERTIFICATE-----";

    public static readonly string MyGameServerCertificate =
@"-----BEGIN CERTIFICATE-----
*** Contents of myGameServerCertificate.pem ***
-----END CERTIFICATE-----";

    public static readonly string MyGameServerPrivateKey =
@"-----BEGIN RSA PRIVATE KEY-----
*** Contents of myGameServerPrivateKey.pem ***
-----END RSA PRIVATE KEY-----";
}
```  

### Creating the secure server

Starting from the minimal server sample code, create a `NetworkSettings` object in the `Start` method and configure it as follows:

```csharp
void Start ()
{
    var settings = new NetworkSettings();
    settings.WithSecureServerParameters(
        certificate: SecureParameters.MyGameServerCertificate,     
        privateKey: SecureParameters.myGameServerPrivateKey);

    // ...
}
```

When creating the `NetworkDriver`, pass in this `NetworkSettings` object:

```csharp
m_Driver = NetworkDriver.Create(settings); 
```

That's it for the server!

### Creating a secure client

The secure client is similar to the secure server. The only difference is in how the `NetworkSettings` object is configured.

```csharp
void Start ()
{
    var settings = new NetworkSettings();
    settings.WithSecureServerParameters(
        serverName: SecureParameters.ServerCommonName,     
        caCertificate: SecureParameters.MyGameClientCA);
    m_Driver = NetworkDriver.Create(settings);

    // ...
}
```

You should now have a secure connection between the server and its clients!

:::note 
If you create clients for multiple platforms, it's important for all clients to continue using the same root certificate if they communicate with the same server.
:::
