---

id: MLAPI.Security.CryptographyHelper.VerifyCertificateDelegate

title: MLAPI.Security.CryptographyHelper.VerifyCertificateDelegate

---

Delegate CryptographyHelper.VerifyCertificateDelegate

<div class="markdown level0 summary" markdown="1">

The delegate type used to validate certificates

</div>

<div class="markdown level0 conceptual" markdown="1">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax [MLAPI_Security_CryptographyHelper_VerifyCertificateDelegate_syntax]

    public delegate bool VerifyCertificateDelegate(X509Certificate2 certificate, string hostname);

##### Parameters [parameters]

| Type                                                                                     | Name          | Description                                    |
|------------------------------------------------------------------------------------------|---------------|------------------------------------------------|
| <span class="xref">System.Security.Cryptography.X509Certificates.X509Certificate2</span> | \*certificate | The certificate to validate                    |
| <span class="xref">System.String</span>                                                  | \*hostname    | The hostname the certificate is claiming to be |

##### Returns [returns]

| Type                                     | Description |
|------------------------------------------|-------------|
| <span class="xref">System.Boolean</span> |             |
