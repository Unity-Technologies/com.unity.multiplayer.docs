---

id: MLAPI.Prototyping.NetworkedTransform.MoveValidationDelegate

title: MLAPI.Prototyping.NetworkedTransform.MoveValidationDelegate

---

Delegate NetworkedTransform.MoveValidationDelegate

<div class="markdown level0 summary" markdown="1">

The delegate used to check if a move is valid

</div>

<div class="markdown level0 conceptual" markdown="1">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax [MLAPI_Prototyping_NetworkedTransform_MoveValidationDelegate_syntax]

    public delegate bool MoveValidationDelegate(Vector3 oldPos, Vector3 newPos);

##### Parameters [parameters]

| Type                                          | Name     | Description                |
|-----------------------------------------------|----------|----------------------------|
| <span class="xref">UnityEngine.Vector3</span> | \*oldPos | The previous position      |
| <span class="xref">UnityEngine.Vector3</span> | \*newPos | The new requested position |

##### Returns [returns]

| Type                                     | Description                              |
|------------------------------------------|------------------------------------------|
| <span class="xref">System.Boolean</span> | Returns Whether or not the move is valid |
