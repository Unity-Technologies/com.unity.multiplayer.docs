---  
id: MLAPI.Prototyping.NetworkTransform.MoveValidationDelegate  
title: MLAPI.Prototyping.NetworkTransform.MoveValidationDelegate
---

<div class="markdown level0 summary">

The delegate used to check if a move is valid

</div>

<div class="markdown level0 conceptual">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

    public delegate bool MoveValidationDelegate(ulong clientId, Vector3 oldPos, Vector3 newPos);

##### Parameters

| Type                | Name       | Description                                   |
|---------------------|------------|-----------------------------------------------|
| System.UInt64       | \*clientId | The client id the move is being validated for |
| UnityEngine.Vector3 | \*oldPos   | The previous position                         |
| UnityEngine.Vector3 | \*newPos   | The new requested position                    |

##### Returns

| Type           | Description                              |
|----------------|------------------------------------------|
| System.Boolean | Returns Whether or not the move is valid |
