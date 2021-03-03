---  
id: MLAPI.Security.CryptographyHelper.VerifyCertificateDelegate  
title: MLAPI.Security.CryptographyHelper.VerifyCertificateDelegate  
---

<div class="markdown level0 summary">

The delegate type used to validate certificates

</div>

<div class="markdown level0 conceptual">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

    public delegate bool VerifyCertificateDelegate(X509Certificate2 certificate, string hostname);

##### Parameters

| Type                                                           | Name          | Description                                    |
|----------------------------------------------------------------|---------------|------------------------------------------------|
| System.Security.Cryptography.X509Certificates.X509Certificate2 | \*certificate | The certificate to validate                    |
| System.String                                                  | \*hostname    | The hostname the certificate is claiming to be |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |
