---
id: secure-connection
title: Create secure client and server
---
The unity transport protocol can be configure to encrypt the connection between the server and the client while ensuring the server's/client's authenticity.
This secure connection relies on UnityTLS and is available with the following editor versions:
`2020.3 (2020.3.34 minimum and above),  2021.3 (2021.3.1f1 minimum and above) and 2022.1 (2022.1.0b16 minimum and above)`

## Server authentication

:::warning Warning
Be sure private keys are not included in your code base or client builds.
:::

### High level authentication process
In this configuration, the server will provide a certificate to the client (`certificate`) containing the server host name.
The client will compare the server hostname to the one it knows (`serverName`) and will then validate the provided certificate against its own root certificate (`caCertificate`) confirming the server identity.

:::note
Root certificate is also sometimes referred as CA Certificate.
:::

Once its identity confirmed, the server will then use the private key (`privateKey`) to establish the secure communication.

### Requirements
To use the client server secure workflow, you need a `valid certificate` and the `root certificate` it has been generated from. You also need the `private key` that has been used to create the certificate.
If you don't have these, they can be generated using OpenSSL. The procedure is detailed hereafter. 

### Generating the required keys and certificates with OpenSSL

It is assumed that you have [OpenSSL](https://www.openssl.org/) installed on your machine.

#### Generate the Certification Authority root certificate. 
First thing first is to generate a private key. We will use it later on to generate the Certification Authority root certificate. 
```shell
openssl genrsa -out clientPrivateKeyForRootCA.pem 2048
```
Now that you have a private key, you can now generate the root certificate.

```shell
openssl req -x509 -new -nodes -key clientPrivateKeyForRootCA.pem -sha256 -days 1095 -out myGameClientCA.pem
```
You will be prompted to answer several questions. Most of the answers are not that important within the present context. 
It is however useful to use a `common name` that makes sense for you to identify this certificate amongst others.
Ideally, you would want to use your domain name if you have one.


#### Generate the CA-signed certificate to use with the server
Create now a private key for the server. 
```shell
openssl genrsa -out myGameServerPrivate.pem 2048
```
From this private key, you can generate a certificate signing request. 
```shell
openssl req -new -key myGameServerPrivate.pem -out myGameServerCertificateSigningRequest.pem
```
You'll be prompted with the same questions as for generating the root certificate.
The answers are no more important, except for the `common name` : use the host name of your server if you have one. This common name 
will appear in the generated certificate and will be compare by the Client against the common name it received as parameter (`serverName`).

Finally, using the different files generated, we can create the certificate file the server will use to authenticate itself : 
```shell
openssl.exe x509 -req -in myGameServerCertificateSigningRequest.pem -CA myGameClientCA.pem -CAkey clientPrivateKeyForRootCA.pem -CAcreateserial -out myGameServerCertificate.pem -days 365 -sha256
```
You should have now generated a total of five files. Out of these, only three will be used later on : 
* The content of the `myGameClientCA.pem` file, will be used client side as the `caCertificate` parameter.
* On the server end, `myGameServerPrivate.pem` file content will be used for the `privateKey` parameter.
* `myGameServerCertificate.pem` will be used by the `certificate` parameter on the server end. 

### Boiler Plate file holding the secure parameters
Create a `SecureParameters.cs` script file to hold your certificates and the private key. Place it in the same folder as the minimal server and minimal client scripts.
Add the following dependencies: 
```cs
using Unity.Collections;
using Unity.Networking.Transport.TLS;
```
Then declare the secureParameters class and the boilerplate code that will hold your secure information:
```cs
public static class SecureParameters
{
        public static FixedString32Bytes ServerCommonName = new FixedString32Bytes("server_certificate_host_name");  // Use the common name you used to define the server certificate. 
        public static FixedString4096Bytes MyGameClientCA = new FixedString4096Bytes(
@"-----BEGIN CERTIFICATE-----
            ***   
-----END CERTIFICATE-----"); // This should contain the content of myGameClientCA.pem 
 
        public static FixedString4096Bytes MyGameServerCertificate = new FixedString4096Bytes(
@"-----BEGIN CERTIFICATE-----     
            ***   
-----END CERTIFICATE-----");; // This should contain the content of myGameServerCertificate.pem  

        public static FixedString4096Bytes MyGameServerPrivate = new FixedString4096Bytes(
@"-----BEGIN RSA PRIVATE KEY----- 
                ***  
-----END RSA PRIVATE KEY-----"); // This should contain the content of myGameServerPrivate.pem  
}
```  

### Creating the Secure Server


Starting from the minimal server sample code, create a `NetworkSettings` object.

```cs
private NetworkSettings settings = new NetworkSettings();
```

Within the `start()` method, configure this `NetworkSettings` as following: 
```cs
void Start ()
    {
        settings.WithSecureServerParameters(
            certificate: ref SecureParameters.MyGameServerCertificate,            // The content of the `myGameServerCertificate.pem`           
            privateKey: ref SecureParameters.MyGameServerPrivate                  // The content of `myGameServerPrivate.pem`
        );
```
Call create method of the network driver but this time, integrate the `NetworkSettings` object.
```cs 
m_Driver = NetworkDriver.Create(settings); 
```
That's it for the server !

### Creating a Secure Client

The secure client is very similar to the secure server. Starting from the minimal client sample code, create `NetworkSettings` object.
```cs
private NetworkSettings settings = new NetworkSettings();
```

The difference between client and server lies with the parameters that will be provided to the NetworkSettings object.
Within the `start()` method, configure this `NetworkSettings` object as following : 
```cs
void Start ()
    {
        settings.WithSecureClientParameters(
            serverName: ref SecureParameters.ServerCommonName,       
            caCertificate: ref SecureParameters.MyGameClientCA,  // Use the content of myGameClientCA.pem
        );
```
Finally, call the `create` method of the network driver but this time, integrate the `NetworkSettings` object.
```cs 
m_Driver = NetworkDriver.Create(settings); 
``` 
and that's it !
You should now have a secure connection between the server and its clients.

:::note 
If you create clients for multiple platform, it is important for all of these to use the same Root Certificate if they communicate with the same server.
:::
