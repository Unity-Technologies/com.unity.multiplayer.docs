---  
id: MLAPI.Security.CryptographyHelper  
title: MLAPI.Security.CryptographyHelper  
---

<div class="markdown level0 summary">

Helper class for encryption purposes

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

##### Inheritance

<div class="level0">

System.Dynamic.ExpandoObject

</div>

<div class="level1">

System.Dynamic.ExpandoObject

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

Object.Equals(Object)

</div>

<div>

Object.Equals(Object, Object)

</div>

<div>

Object.GetHashCode()

</div>

<div>

Object.GetType()

</div>

<div>

Object.MemberwiseClone()

</div>

<div>

Object.ReferenceEquals(Object, Object)

</div>

<div>

Object.ToString()

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

    public static class CryptographyHelper

## Fields

### OnValidateCertificateCallback

<div class="markdown level1 summary">

The delegate to invoke to validate the certificates

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static CryptographyHelper.VerifyCertificateDelegate OnValidateCertificateCallback

#### Field Value

| Type                                         | Description |
|----------------------------------------------|-------------|
| CryptographyHelper.VerifyCertificateDelegate |             |

## Methods 

### GetClientKey(UInt64)

<div class="markdown level1 summary">

Gets the aes key for any given clientId

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static byte[] GetClientKey(ulong clientId)

#### Parameters

| Type          | Name     | Description                                      |
|---------------|----------|--------------------------------------------------|
| System.UInt64 | clientId | The clientId of the client whose aes key we want |

#### Returns

| Type            | Description           |
|-----------------|-----------------------|
| System.Byte\[\] | The aes key in binary |

### GetServerKey()

<div class="markdown level1 summary">

Gets the aes key for the server

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static byte[] GetServerKey()

#### Returns

| Type            | Description         |
|-----------------|---------------------|
| System.Byte\[\] | The servers aes key |

### VerifyCertificate(X509Certificate2, String)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static bool VerifyCertificate(X509Certificate2 certificate, string hostname)

#### Parameters

| Type                                                           | Name        | Description                                    |
|----------------------------------------------------------------|-------------|------------------------------------------------|
| System.Security.Cryptography.X509Certificates.X509Certificate2 | certificate | The certificate to validate                    |
| System.String                                                  | hostname    | The hostname the certificate is claiming to be |

#### Returns

| Type           | Description                                        |
|----------------|----------------------------------------------------|
| System.Boolean | Whether or not the certificate is considered valid |
