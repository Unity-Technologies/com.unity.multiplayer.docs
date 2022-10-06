---
id: secure-connection
title: Create secure client and server
---
The Unity Transport package can be configure to encrypt the connection between the server and the client while ensuring the server's/client's authenticity.

Secure connections are available with editor versions 2020.3 (starting at 2020.3.34), 2021.3, and 2022.1 and above.

## Server authentication

:::warning Warning
This example uses hardcoded certificates to make understanding the process easier, but in a real deployment the server certificates should be kept separate from client builds. One way to achieve this is to put them on a separate assembly, or load them from a file on the server.
:::

### High level authentication process

In this configuration, the server will provide a certificate to the client (`certificate`) to prove its identity. The client will validate the certificate against its own root certificate (`caCertificate`) to validate its identity.

:::note
Root certificates are also sometimes referred to as CA certificates.
:::

Once its identity confirmed, the server will then use the private key (`privateKey`) to establish the secure communication channel.

### Requirements

To use the client/server secure workflow, you need a valid certificate and the root certificate that was used to sign it. You also need the private key that has been used to create the certificate. If you don't have these, they can be generated using OpenSSL. The procedure is detailed hereafter. 

### Generating the required keys and certificates with OpenSSL

It is assumed that you have [OpenSSL](https://www.openssl.org/) installed on your machine.

#### Generate the root certificate

First thing first is to generate a root private key. We will use it later on to generate the root certificate. 

```shell
openssl genrsa -out clientPrivateKeyForRootCA.pem 2048
```

Now that you have a root private key, you can now generate the root certificate.

```shell
openssl req -x509 -new -nodes -key clientPrivateKeyForRootCA.pem -sha256 -days 1095 -out myGameClientCA.pem
```

You will be prompted to answer several questions. Most of the answers are not that important within the present context. 
It is however useful to use a common name that makes sense for you to identify this certificate amongst others. Ideally, you would want to use your domain name if you have one.

#### Generate the root-signed certificate to use with the server

Create now a private key for the server.

```shell
openssl genrsa -out myGameServerPrivateKey.pem 2048
```

From this private key, you can generate a certificate signing request.

```shell
openssl req -new -key myGameServerPrivateKey.pem -out myGameServerCertificateSigningRequest.pem
```

You'll be prompted with the same questions as for generating the root certificate. The answers are no more important, except for the common name: it is recommended to use the server's hostname.

Finally, using the different files generated, we can create the certificate file the server will use to authenticate itself:

```shell
openssl.exe x509 -req -in myGameServerCertificateSigningRequest.pem -CA myGameClientCA.pem -CAkey clientPrivateKeyForRootCA.pem -CAcreateserial -out myGameServerCertificate.pem -days 365 -sha256
```

You should have now generated a total of five files. Out of these, only three will be used later on: 
* The content of the `myGameClientCA.pem` file will be used client-side as the `caCertificate` parameter.
* On the server end, the contents of `myGameServerCertificate.pem` will be used for the `certificate` parameter. 
* On the server end, the contents of `myGameServerPrivateKey.pem` will be used for the `privateKey` parameter.

### Boilerplate file holding the secure parameters

Create a `SecureParameters.cs` script file to hold your certificates and the private key. Place it in the same folder as the minimal server and minimal client scripts. Then declare the `SecureParameters` static class and the boilerplate code that will hold your secure information:

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

The secure client is very similar to the secure server. The only difference is in how the `NetworkSettings` object is configured.

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
If you create clients for multiple platforms, it is important for all of these to still use the same root certificate if they communicate with the same server.
:::
