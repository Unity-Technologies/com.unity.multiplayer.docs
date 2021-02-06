---

id: MLAPI.NetworkingManager.ConnectionApprovedDelegate

title: MLAPI.NetworkingManager.ConnectionApprovedDelegate

---

Delegate NetworkingManager.ConnectionApprovedDelegate

<div class="markdown level0 summary" markdown="1">

Delegate type called when connection has been approved. This only has to
be set on the server.

</div>

<div class="markdown level0 conceptual" markdown="1">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax [MLAPI_NetworkingManager_ConnectionApprovedDelegate_syntax]

    public delegate void ConnectionApprovedDelegate(bool createPlayerObject, ulong? playerPrefabHash, bool approved, Vector3? position, Quaternion? rotation);

##### Parameters [parameters]

| Type                                                                                          | Name                 | Description                                                                                                                                            |
|-----------------------------------------------------------------------------------------------|----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| <span class="xref">System.Boolean</span>                                                      | \*createPlayerObject | If true, a player object will be created. Otherwise the client will have no object.                                                                    |
| <span class="xref">System.Nullable</span>\<<span class="xref">System.UInt64</span>\>          | \*playerPrefabHash   | The prefabHash to use for the client. If createPlayerObject is false, this is ignored. If playerPrefabHash is null, the default player prefab is used. |
| <span class="xref">System.Boolean</span>                                                      | \*approved           | Whether or not the client was approved                                                                                                                 |
| <span class="xref">System.Nullable</span>\<<span class="xref">UnityEngine.Vector3</span>\>    | \*position           | The position to spawn the client at. If null, the prefab position is used.                                                                             |
| <span class="xref">System.Nullable</span>\<<span class="xref">UnityEngine.Quaternion</span>\> | \*rotation           | The rotation to spawn the client with. If null, the prefab position is used.                                                                           |
