---  
id: Unity.Networking.Transport.NetworkPipelineStage  
title: Unity.Networking.Transport.NetworkPipelineStage  
---

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

ValueType.Equals(Object)

</div>

<div>

ValueType.GetHashCode()

</div>

<div>

ValueType.ToString()

</div>

<div>

Object.Equals(Object, Object)

</div>

<div>

Object.GetType()

</div>

<div>

Object.ReferenceEquals(Object, Object)

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: transport.dll

##### Syntax

``` lang-csharp
public struct NetworkPipelineStage
```

## 

### NetworkPipelineStage(TransportFunctionPointer&lt;NetworkPipelineStage.ReceiveDelegate&gt; , TransportFunctionPointer&lt;NetworkPipelineStage.SendDelegate&gt; , TransportFunctionPointerlt;NetworkPipelineStage.InitializeConnectionDelegate&gt;

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkPipelineStage(TransportFunctionPointer<NetworkPipelineStage.ReceiveDelegate> Receive, TransportFunctionPointer<NetworkPipelineStage.SendDelegate> Send, TransportFunctionPointer<NetworkPipelineStage.InitializeConnectionDelegate> InitializeConnection, int ReceiveCapacity, int SendCapacity, int HeaderCapacity, int SharedStateCapacity, int PayloadCapacity = 0)
```

#### Parameters

| Type                                                                          | Name                 | Description |
|-------------------------------------------------------------------------------|----------------------|-------------|
| TransportFunctionPointer&lt;NetworkPipelineStage.ReceiveDelegate&gt;              | Receive              |             |
| TransportFunctionPointer&lt;NetworkPipelineStage.SendDelegate&gt;                  | Send                 |             |
| TransportFunctionPointer&lt;NetworkPipelineStage.InitializeConnectionDelegate&gt; | InitializeConnection |             |
| System.Int32                                                                  | ReceiveCapacity      |             |
| System.Int32                                                                  | SendCapacity         |             |
| System.Int32                                                                  | HeaderCapacity       |             |
| System.Int32                                                                  | SharedStateCapacity  |             |
| System.Int32                                                                  | PayloadCapacity      |             |

## 

### HeaderCapacity

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly int HeaderCapacity
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### InitializeConnection

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public TransportFunctionPointer<NetworkPipelineStage.InitializeConnectionDelegate> InitializeConnection
```

#### Field Value

| Type                                                                          | Description |
|-------------------------------------------------------------------------------|-------------|
| TransportFunctionPointer\&lt;NetworkPipelineStage.InitializeConnectionDelegate&gt;  |             |

### PayloadCapacity

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly int PayloadCapacity
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Receive

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public TransportFunctionPointer<NetworkPipelineStage.ReceiveDelegate> Receive
```

#### Field Value

| Type                                                             | Description |
|------------------------------------------------------------------|-------------|
| TransportFunctionPointer\&lt;NetworkPipelineStage.ReceiveDelegate&gt;|             |

### ReceiveCapacity

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly int ReceiveCapacity
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Send

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public TransportFunctionPointer<NetworkPipelineStage.SendDelegate> Send
```

#### Field Value

| Type                                                          | Description |
|---------------------------------------------------------------|-------------|
| TransportFunctionPointer\&lt;NetworkPipelineStage.SendDelegate&gt; |             |

### SendCapacity

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly int SendCapacity
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### SharedStateCapacity

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly int SharedStateCapacity
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |
