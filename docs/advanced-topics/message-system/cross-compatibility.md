---
id: cross-compatibility
title: Cross-Compatibility
---

In this section, we will be focusing on the Standard RPC API's cross-compatibility only, not the framework as a whole. A method marked as RPC will be statically registered with its assembly-scoped method signature hash.

A typical assembly-scoped method signature sample:

```
Game.dll / System.Void Shooter::PingServerRpc(System.Int32,MLAPI.Messaging.ServerRpcParams)
```

where:

- `Game.dll` is the Assembly
- `/` is a Separator
- `System.Void Shooter::PingServerRpc(System.Int32,MLAPI.Messaging.ServerRpcParams)` is the Method signature:

    - `System.Void` is the Return type
    - `Shooter` is the Enclosing type
    - `::` is the Scope resolution operator
    - `PingServerRpc` is the Method name
    - `(System.Int32,MLAPI.Messaging.ServerRpcParams)` is the Params with types (no param names)

An RPC signature will be turned into a 32-bit integer using [xxHash](https://cyan4973.github.io/xxHash/) (XXH32) non-cryptographic hash algorithm.

As expected, RPC signature therefore its hash will be changed if assembly, return type, enclosing type, method name and/or any method param type changes. Names of method parameters can be changed as they are not a part of the method signature.

A change in the RPC signature will lead into a different send/receive codepath with different serialization code and execute a different method body. Previous versions of the RPC method will not be executed by the new RPC method with the new signature.

| Compatibility | <i class="fp-check"></i> | Description |
| -- | :--: | -- |
| Cross-Build Compatibility | <i class="fp-check"></i> | As long as the RPC method signature is kept the same, it will be compatible between different builds. |
| Cross-Version Compatibility | <i class="fp-check"></i> | As long as the RPC method signature is kept the same, it will be compatible between different versions. |
| Cross-Project Compatibility | <i class="fp-x"></i> | Since project name or any project-specific token is not being a part of RPC signature, it is possible to have the exact same RPC method signature defined in different builds and they are not necessarily going to be compatible with each other. |