---
id: jobs
title: Create jobified client and server
---
The unity transport protocol can be configure to encrypt the connection between the server and the client while ensuring the server's/client's authenticity.
This secure connection relies on UnityTLS and is available with the following editor versions:
`2020.3.24f1+, 2021.2+, 2022.1+`

## Server authentication

### High level authentication process
In this configuration, the server will provide a certificate to the client (`rsa`)
The client will then validate the provided certificate against its own root certificate (`pem`) which confirms the server identity.
:::note
Root certificate is also sometimes referred as CA certificate.
:::
Once its identity confirmed, the server will then use the private key (`rsaKey`) to establish the secure communication.

### Requirements
To use the client server secure workflow, you need a valid certificate and the root certificate it has been generated from. You also need the private key that has been used to create the certificate.
* Samples root certificate, private key and certificate are provided with the sample project. Please do not use them for production. 
* It is of the upmost importance for you to have your own certificates. The procedure to generate them using OpenSSL is detailed hereafter. 



### Generating the required keys and certificates with OpenSSL

It is assumed to you have openSSL installed on your machine.

#### Generate the Certification Authority root certificate. 
First thing first is to generate a private key for that will help to generate the certification authority root certificate. 
```shell
openssl genrsa -out clientPrivateKeyForRootCA.key 2048
```
You will have to provide a passphrase. Remember it as you will need it later on.

Now that you have a private key, you can now generate the root certificate.

```shell
openssl req -x509 -new -nodes -key clientPrivateKeyForRootCA.key -sha256 days 1095 -out myGameClientCA.pem
```
You will be prompted to answer several questions. Most of the answers are not that important within the present context. 
It is however useful to use a `common name` that makes sense for you as it is useful to identify the certificate amongst others.
Ideally, you would want to use your domain name if you have one.


#### Generate the CA-signed certificate to use with the server
Create now a private key for the server. 
```shell
openssl genrsa -out myGameServerPrivate.key 2048
```
From this private key, you can generate a certificate signing request (csr). 
```shell
openssl req -new -key myGameServerPrivate.key -out myGameServerCertificateSigningRequest.csr
```
You'll be prompted with the same questions as for generating the root certificate.
The answers are no more important. Make sure to use a proper `common name` though as it might be useful in case you need to debug the certificate.

Finally, using the different files generated, we can create the certificate file the server will use to authenticate itself : 
```shell
openssl.exe x509 -req -in myGameServerCertificateSigningRequest.csr -CA myGameClientCA.pem -CAkey clientPrivateKeyForRootCA.key -CAcreateserial -out myGameServerCertificate.crt -days 365 -sha256
```
You should have now generated a total of five files. Out of these, only will be used later on : 
* The content of the `myGameClientCA.pem` file, will be used client side as the `pem` parameter.
* On the server end, `myGameServerPrivate.key` file content will be used for the `rsaKey` parameter.
* `myGameServerCertificate.crt` will be used by the `rsa` parameter on the server end. 

### Boiler Plate file holding the secure parameters
Create a `SecureParameters.cs` script file to hold your the certificates and the private key. Place it in the same folder as the minimal server and minimal client scripts.
Add the following dependencies: 
```cs
using Unity.Collections;
using Unity.Networking.Transport.TLS;
```
Then declare the secureParameters class and the boilerplate code that will hold your secure information:
```cs
public static class SecureParameters
{
        public static FixedString32Bytes CommonName = new FixedString32Bytes("common-name");  // Use the common name you used to define the server certificate. 
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
-----END RSA PRIVATE KEY-----"); // This should contain the content of myGameServerPrivate.key  
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
        settings.WithSecureParameters(
            hostname: ref SecureParameters.CommonName,                    // Use the common name you used to generate `myGameServerCertificate.crt`
            pem:null,
            rsa: ref SecureParameters.MyGameServerCertificate,      // The content of the `myGameServerCertificate.crt`           
            rsaKey: ref SecureParameters.MyGameServerPrivate // The content of `myGameServerPrivate.key`
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
        settings.WithSecureParameters(
            hostname: null,       
            pem: ref SecureParameters.MyGameClientCA,  // Use the content of myGameClientCA.pem
        );
```
Finally, call the `create` method of the network driver but this time, integrate the `NetworkSettings` object.
```cs 
m_Driver = NetworkDriver.Create(settings); 
``` 
and that's it !
You should now have a secure connection between the server and its clients.

:::note 
If you create clients for multiple platform, it is important for all of these to use the same Root certificate to communicate with the same server.
:::