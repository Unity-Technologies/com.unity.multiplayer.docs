---
id: Unity.Netcode.Transports.UTP.SecretsLoaderHelper
title: Unity.Netcode.Transports.UTP.SecretsLoaderHelper
date created: Wednesday, January 25th 2023, 5:30:22 pm
date modified: Wednesday, January 25th 2023, 5:38:38 pm
---

<div class="markdown level0 summary">

Component to add to a NetworkManager if you want the certificates to be loaded from files. Mostly helpful to ease development and testing, especially with self-signed certificates Shipping code should make the calls to

* SetServerSecrets
* SetClientSecrets directly, instead of relying on this.

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

## Inheritance

<div class="level0">

System.Dynamic.ExpandoObject

</div>

<div class="level1">

System.Dynamic.ExpandoObject

</div>

</div>

## **Namespace**: System.Dynamic.ExpandoObject

## **Assembly**: Netcode.dll

## Syntax

``` lang-csharp
public class SecretsLoaderHelper : MonoBehaviour
```

## Properties

### ClientCA

<div class="markdown level1 summary">

CA certificate used by the client.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public string ClientCA { get; set; }
```

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.String |             |

### ClientCAFilePath

<div class="markdown level1 summary">

Client CA filepath. Useful with self-signed certificates

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public string ClientCAFilePath { get; set; }
```

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.String |             |

### ClientCAOverride

<div class="markdown level1 summary">

Client CA Override. Only useful for development with self-signed certificates. Certificate content, for platforms that lack file access (WebGL)

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public string ClientCAOverride { get; set; }
```

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.String |             |

### ServerCertificate

<div class="markdown level1 summary">

Certificate used by the server.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public string ServerCertificate { get; set; }
```

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.String |             |

### ServerCertificateFilePath

<div class="markdown level1 summary">

Server Certificate filepath

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public string ServerCertificateFilePath { get; set; }
```

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.String |             |

### ServerCommonName

<div class="markdown level1 summary">

Common name of the server (typically its hostname).

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public string ServerCommonName { get; set; }
```

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.String |             |

### ServerPrivate

<div class="markdown level1 summary">

Private key used by the server.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public string ServerPrivate { get; set; }
```

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.String |             |

### ServerPrivateFilePath

<div class="markdown level1 summary">

Server Private Key filepath

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public string ServerPrivateFilePath { get; set; }
```

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.String |             |
