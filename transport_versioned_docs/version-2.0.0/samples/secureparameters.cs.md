---
id: secureparameters
title: SecureParameters sample
---

Sample code for `SecureParameters`:

```csharp
public static class SecureParameters
{
    // Use the common name you used to create the server certificate.
    public static readonly string ServerCommonName = "localserver";

    public static readonly string MyGameClientCA =
@"-----BEGIN CERTIFICATE-----
*** REPLACE WITH YOUR OWN CA CERTIFICATE ***
-----END CERTIFICATE-----";

#if UNITY_SERVER
    public static readonly string MyGameServerCertificate =
@"-----BEGIN CERTIFICATE-----
*** REPLACE WITH YOUR OWN SERVER CERTIFICATE ***
-----END CERTIFICATE-----";

    public static readonly string MyGameServerPrivateKey =
@"-----BEGIN RSA PRIVATE KEY-----
*** REPLACE WITH YOUR OWN SERVER PRIVATE KEY ***
-----END RSA PRIVATE KEY-----";
#endif
}
```