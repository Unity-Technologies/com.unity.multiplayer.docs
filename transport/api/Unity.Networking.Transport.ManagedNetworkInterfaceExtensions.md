---  
id: Unity.Networking.Transport.ManagedNetworkInterfaceExtensions  
title: Unity.Networking.Transport.ManagedNetworkInterfaceExtensions  
---

<div class="markdown level0 summary">

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

##### **Assembly**: transport.dll

##### Syntax

``` lang-csharp
public static class ManagedNetworkInterfaceExtensions
```

## 

### WrapToUnmanaged\&lt;T&gt;(T)

<div class="markdown level1 summary">

Creates an unmanaged wrapper for a managed INetworkInterface.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static NetworkInterfaceUnmanagedWrapper<T> WrapToUnmanaged<T>(this T networkInterface)
    where T : INetworkInterface
```

#### Parameters

| Type | Name             | Description                             |
|------|------------------|-----------------------------------------|
| T    | networkInterface | The INetworkInterface instance to wrap. |

#### Returns

| Type                                 | Description                                                       |
|--------------------------------------|-------------------------------------------------------------------|
| NetworkInterfaceUnmanagedWrapper\&lt;T&gt; | Returns the unmanaged wrapper instance for the network interface. |

#### Type Parameters

| Name | Description                               |
|------|-------------------------------------------|
| T    | The type of the managed INetworkInterface |

#### Exceptions

| Type                             | Condition                                                                                       |
|----------------------------------|-------------------------------------------------------------------------------------------------|
| System.InvalidOperationException | Throws an InvalidOperationException if the type network interface is already an unamanged type. |
