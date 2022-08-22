---
id: Unity.Netcode.FastBufferWriter.ForPrimitives
title: Unity.Netcode.FastBufferWriter.ForPrimitives
---

# Struct FastBufferWriter.ForPrimitives


This empty struct exists to allow overloading WriteValue based on
generic constraints. At the bytecode level, constraints aren't included
in the method signature, so if multiple methods exist with the same
signature, it causes a compile error because they would end up being
emitted as the same method, even if the constraints are different.
Adding an empty struct with a default value gives them different
signatures in the bytecode, which then allows the compiler to do
overload resolution based on the generic constraints without the user
having to pass the struct in themselves.







##### Inherited Members



System.ValueType.Equals(System.Object)





System.ValueType.GetHashCode()





System.ValueType.ToString()





System.Object.Equals(System.Object, System.Object)





System.Object.GetType()





System.Object.ReferenceEquals(System.Object, System.Object)





###### **Namespace**: Unity.Netcode

###### **Assembly**: MLAPI.dll

##### Syntax


``` lang-csharp
public struct ForPrimitives
```





