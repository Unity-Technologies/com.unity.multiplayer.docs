---

id: MLAPI.Security.CryptographyHelper

title: MLAPI.Security.CryptographyHelper

---

Class CryptographyHelper

<div class="markdown level0 summary" markdown="1">

Helper class for encryption purposes

</div>

<div class="markdown level0 conceptual" markdown="1">

</div>

<div class="inheritance" markdown="1">

##### Inheritance

<div class="level0" markdown="1">

System.Dynamic.ExpandoObject

</div>

<div class="level1" markdown="1">

System.Dynamic.ExpandoObject

</div>

</div>

<div class="inheritedMembers" markdown="1">

##### Inherited Members

<div markdown="1">

Object.Equals(Object)

</div>

<div markdown="1">

Object.Equals(Object, Object)

</div>

<div markdown="1">

Object.GetHashCode()

</div>

<div markdown="1">

Object.GetType()

</div>

<div markdown="1">

Object.MemberwiseClone()

</div>

<div markdown="1">

Object.ReferenceEquals(Object, Object)

</div>

<div markdown="1">

Object.ToString()

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax [MLAPI_Security_CryptographyHelper_syntax]

    public static class CryptographyHelper

## Fields

### OnValidateCertificateCallback [MLAPI_Security_CryptographyHelper_OnValidateCertificateCallback]

<div class="markdown level1 summary" markdown="1">

The delegate to invoke to validate the certificates

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public static CryptographyHelper.VerifyCertificateDelegate OnValidateCertificateCallback

#### Field Value [field-value]

| Type                                         | Description |
|----------------------------------------------|-------------|
| CryptographyHelper.VerifyCertificateDelegate |             |

## Methods 

### GetClientKey(UInt64) [MLAPI_Security_CryptographyHelper_GetClientKey_System_UInt64_]

<div class="markdown level1 summary" markdown="1">

Gets the aes key for any given clientId

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public static byte[] GetClientKey(ulong clientId)

#### Parameters [parameters]

| Type          | Name     | Description                                      |
|---------------|----------|--------------------------------------------------|
| System.UInt64 | clientId | The clientId of the client whose aes key we want |

#### Returns [returns]

| Type            | Description           |
|-----------------|-----------------------|
| System.Byte\[\] | The aes key in binary |

### GetServerKey() [MLAPI_Security_CryptographyHelper_GetServerKey]

<div class="markdown level1 summary" markdown="1">

Gets the aes key for the server

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-2]

    public static byte[] GetServerKey()

#### Returns [returns-1]

| Type            | Description         |
|-----------------|---------------------|
| System.Byte\[\] | The servers aes key |

### VerifyCertificate(X509Certificate2, String) [MLAPI_Security_CryptographyHelper_VerifyCertificate_System_Security_Cryptography_X509Certificates_X509Certificate2_System_String_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-3]

    public static bool VerifyCertificate(X509Certificate2 certificate, string hostname)

#### Parameters [parameters-1]

| Type                                                           | Name        | Description                                    |
|----------------------------------------------------------------|-------------|------------------------------------------------|
| System.Security.Cryptography.X509Certificates.X509Certificate2 | certificate | The certificate to validate                    |
| System.String                                                  | hostname    | The hostname the certificate is claiming to be |

#### Returns [returns-2]

| Type           | Description                                        |
|----------------|----------------------------------------------------|
| System.Boolean | Whether or not the certificate is considered valid |
