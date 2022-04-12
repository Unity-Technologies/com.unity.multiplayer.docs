---
id: secureparameters
title: SecureParameters sample
---

Sample code for `SecureParameters`:

```csharp
using Unity.Collections;
public static class SecureParameters
    { 
        public static FixedString32Bytes ServerCommonName = new FixedString32Bytes("localserver");  // Use the common name you used to define the server certificate.

        public static FixedString4096Bytes MyGameClientCA = new FixedString4096Bytes(
        @"-----BEGIN CERTIFICATE-----
 *** REPLACE BY YOUR OWN CA Certificate ***
-----END CERTIFICATE-----");

#if UNITY_SERVER
        public static FixedString4096Bytes MyGameServerCertificate = new FixedString4096Bytes(
        @"-----BEGIN CERTIFICATE-----
*** REPLACE BY YOUR OWN Server Certificate ***
-----END CERTIFICATE-----");

        public static FixedString4096Bytes MyGameServerPrivate = new FixedString4096Bytes(
        @"-----BEGIN RSA PRIVATE KEY-----
*** REPLACE BY YOUR OWN Private Key ***
-----END RSA PRIVATE KEY-----");
#endif
}

```