---
id: jobs
title: Create jobified client and server
---
The unity transport protocol can be configure to encrypt the connection between the server and the client and therefeore preventung eavesdropping and tampering. 

## Requirements
Before reading this tutorial you should be familiar with how to generate a CA certificate and RSA private and public key. 
Samples CA certificate key , RSA private and public key are provided. Feel free to use these for prototyping but keep in mind that these should never been used in production as they would bring a significant security vulnerability. 

## Create a Secure Server


Starting from the minimal server sample code, create a `NetworkSettings` object.

```cs
private NetworkSettings settings = new NetworkSettings();
```

Within the `start()` method, configure this `NetworkSettings` object with the hostname
```cs
void Start ()
    {
        settings.WithSecureParameters(
            hostname: ref SecureParameters.host,
            sslHandshakeTimeoutMin: 500,    // Duration in ms
            sslHandshakeTimeoutMax: 2000,   // Duration in ms
            pem: ref SecureParameters.Pem,          // Expects the PEM Key
            rsa: ref SecureParameters.ServerRsa,
            rsaKey: ref SecureParameters.ServerRsaKey
        );
```