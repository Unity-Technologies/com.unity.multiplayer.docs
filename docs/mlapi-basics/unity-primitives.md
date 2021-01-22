---
id: unity-primitives
title: Unity Primitives 
sidebar_label: Unity Primitives
---




`Color`, `Color32`, `Vector2`, `Vector3`, `Vector4`, `Quaternion`, `Ray`, `Ray2D` types will be serialized by built-in serialization code.

```csharp
[ClientRpc]
void BarClientRpc(Color somecolor) { /* ... */ }

void Update()
{
    if (Input.GetKeyDown(KeyCode.P))
    {
        BarClientRpc(Color.red); // Server -> Client
    }
}
```