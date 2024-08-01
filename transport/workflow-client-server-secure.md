---
id: secure-connection
title: Create a secure client and server
---
<!-- Called "Encrypted communications" in UTP package docs -->

You can configure the Unity Transport package to encrypt the connection between the server and clients while ensuring the authenticity of both.

:::note
Secure connections are available in Unity Editor versions 2020.3 (starting at 2020.3.34), 2021.3, and 2022.1 and above.
:::

## Server authentication

This section shows using encrypted communications with Unity Transport.

:::warning
This example uses hardcoded certificates to make understanding the process easier. In a real deployment, you should keep the server certificates separate from client builds. You can separate server and client certificates by using separate assemblies or loading them from a file on the server.
:::

### High-level authentication process

In this configuration, the server provides a certificate to the client (certificate) to prove its identity. The client compares the server’s certificate against its own root certificate (`caCertificate`) to validate the server’s identity.

:::note
Root certificates are also sometimes referred to as CA certificates.
:::

After the client confirms the server's identity, the server uses the private key (`privateKey`) to establish a secure communication channel.

### Requirements

To use the secure communication workflow, you need the following:

- A valid certificate
- The root certificate used to sign the certificate
- The private key used to create the certificate

If you don't have these, you can use OpenSSL to generate them. The following section explains how to use OpenSSL to generate certificates.

### Generate keys and certificates

This section explains how to use OpenSSL to generate a valid certificate (a requirement for using encrypted connections). Before continuing, ensure you have [OpenSSL](https://www.openssl.org/) installed on your machine.

#### Generate the root certificate

Generate a root private key. You need the root private key to generate the root certificate.

```csharp
openssl genrsa -out clientPrivateKeyForRootCA.pem 2048
```

Use the root private key to generate the root certificate.

```csharp
openssl req -x509 -new -nodes -key clientPrivateKeyForRootCA.pem -sha256 -days 1095 -out myGameClientCA.pem
```

OpenSSL will prompt you to answer several questions. Most of the answers aren't that important within the present context. It's useful to use a common name that makes sense for you to identify this certificate, amongst others. Ideally, you want to use a domain name you own (if you have one).

#### Generate the root-signed certificate to use with the server

Create a private key for the server.

```csharp
openssl genrsa -out myGameServerPrivateKey.pem 2048
```

Use the private key to generate a certificate signing request.

```csharp
openssl req -new -key myGameServerPrivateKey.pem -out myGameServerCertificateSigningRequest.pem
```

OpenSSL will prompt you with the same questions you answered when you generated the root certificate. The answers are no more important. However, we recommend you use the server's hostname.

Using the different files generated, create the certificate file the server will use to authenticate itself:

```csharp
openssl.exe x509 -req -in myGameServerCertificateSigningRequest.pem -CA myGameClientCA.pem -CAkey clientPrivateKeyForRootCA.pem -CAcreateserial -out myGameServerCertificate.pem -days 365 -sha256
```

You should now have five generated files. Out of these, you only need the following three:

- `myGameClientCA.pem` - You need the content of the client CA to use client-side as the `caCertificate` parameter.
- `myGameServerCertificate.pem` - You need the server certificate to use server-side for the certificate parameter.
- `myGameServerPrivateKey.pem` - You need the server private key to use server-side for the `privateKey` parameter.

### Boilerplate file holding the secure parameters

When you have all the requirements, create a `SecureParameters.cs` script file to hold your certificates and the private key. Place it in the same folder as the minimal server and minimal client scripts. Then declare the `SecureParameters` static class and the boilerplate code to hold the secure information:

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

### Create a secure server

This section shows creating a secure server. It uses the simple server code example as a starting point.

Start by creating a `NetworkSettings` object in the `Start` method and configure it as follows:

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

That’s all you need to do to enable secure communication server-side.

### Create a secure client

This section shows creating a secure client. It uses the simple client code example as a starting point.

The secure client is similar to the secure server. The only difference is in how you configure the NetworkSettings object.

```csharp
void Start ()
{
    var settings = new NetworkSettings();
    settings.WithSecureClientParameters(
        serverName: SecureParameters.ServerCommonName,     
        caCertificate: SecureParameters.MyGameClientCA);
    m_Driver = NetworkDriver.Create(settings);

    // ...
}
```

You should now have a secure connection between the server and its clients!

:::warning
If you create clients for multiple platforms, all clients must use the same root certificate if they communicate with the same server.
:::
