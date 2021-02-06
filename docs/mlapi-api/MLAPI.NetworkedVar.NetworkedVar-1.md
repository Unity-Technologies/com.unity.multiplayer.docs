---

id: MLAPI.NetworkedVar.NetworkedVar-1

title: MLAPI.NetworkedVar.NetworkedVar-1

---

Class NetworkedVar\<T\>

<div class="markdown level0 summary" markdown="1">

A variable that can be synchronized over the network.

</div>

<div class="markdown level0 conceptual" markdown="1">

</div>

<div class="inheritance" markdown="1">

##### Inheritance

<div class="level0" markdown="1">

System.Dynamic.ExpandoObject

</div>

<div class="level1" markdown="1">

System.Dynamic.ExpandoObject

</div>

<div class="level2" markdown="1">

System.Dynamic.ExpandoObject

</div>

<div class="level2" markdown="1">

System.Dynamic.ExpandoObject

</div>

<div class="level2" markdown="1">

System.Dynamic.ExpandoObject

</div>

<div class="level2" markdown="1">

System.Dynamic.ExpandoObject

</div>

<div class="level2" markdown="1">

System.Dynamic.ExpandoObject

</div>

<div class="level2" markdown="1">

System.Dynamic.ExpandoObject

</div>

<div class="level2" markdown="1">

System.Dynamic.ExpandoObject

</div>

<div class="level2" markdown="1">

System.Dynamic.ExpandoObject

</div>

<div class="level2" markdown="1">

System.Dynamic.ExpandoObject

</div>

<div class="level2" markdown="1">

System.Dynamic.ExpandoObject

</div>

<div class="level2" markdown="1">

System.Dynamic.ExpandoObject

</div>

<div class="level2" markdown="1">

System.Dynamic.ExpandoObject

</div>

<div class="level2" markdown="1">

System.Dynamic.ExpandoObject

</div>

<div class="level2" markdown="1">

System.Dynamic.ExpandoObject

</div>

<div class="level2" markdown="1">

System.Dynamic.ExpandoObject

</div>

<div class="level2" markdown="1">

System.Dynamic.ExpandoObject

</div>

<div class="level2" markdown="1">

System.Dynamic.ExpandoObject

</div>

<div class="level2" markdown="1">

System.Dynamic.ExpandoObject

</div>

<div class="level2" markdown="1">

System.Dynamic.ExpandoObject

</div>

</div>

<div markdown="1" classs="implements">

##### Implements

<div markdown="1">

INetworkedVar

</div>

</div>

<div class="inheritedMembers" markdown="1">

##### Inherited Members

<div markdown="1">

Object.Equals(Object)

</div>

<div markdown="1">

Object.Equals(Object, Object)

</div>

<div markdown="1">

Object.GetHashCode()

</div>

<div markdown="1">

Object.GetType()

</div>

<div markdown="1">

Object.MemberwiseClone()

</div>

<div markdown="1">

Object.ReferenceEquals(Object, Object)

</div>

<div markdown="1">

Object.ToString()

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax [MLAPI_NetworkedVar_NetworkedVar_1_syntax]

    [Serializable]
    public class NetworkedVar<T> : INetworkedVar

##### Type Parameters [type-parameters]

| Name                                 | Description |
|--------------------------------------|-------------|
| <span class="parametername">T</span> |             |

## Constructors <span id="MLAPI_NetworkedVar_NetworkedVar_1__ctor_"></span>

### NetworkedVar() [MLAPI_NetworkedVar_NetworkedVar_1__ctor]

<div class="markdown level1 summary" markdown="1">

Creates a NetworkedVar with the default value and settings

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public NetworkedVar()

<span id="MLAPI_NetworkedVar_NetworkedVar_1__ctor_"></span>

### NetworkedVar(T) [MLAPI_NetworkedVar_NetworkedVar_1__ctor__0_]

<div class="markdown level1 summary" markdown="1">

Creates a NetworkedVar with a custom value and the default settings

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public NetworkedVar(T value)

#### Parameters [parameters]

| Type                        | Name                                     | Description                                   |
|-----------------------------|------------------------------------------|-----------------------------------------------|
| <span class="xref">T</span> | <span class="parametername">value</span> | The initial value to use for the NetworkedVar |

<span id="MLAPI_NetworkedVar_NetworkedVar_1__ctor_"></span>

### NetworkedVar(NetworkedVarSettings) [MLAPI_NetworkedVar_NetworkedVar_1__ctor_MLAPI_NetworkedVar_NetworkedVarSettings_]

<div class="markdown level1 summary" markdown="1">

Creates a NetworkedVar with the default value and custom settings

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-2]

    public NetworkedVar(NetworkedVarSettings settings)

#### Parameters [parameters-1]

| Type                 | Name                                        | Description                              |
|----------------------|---------------------------------------------|------------------------------------------|
| NetworkedVarSettings | <span class="parametername">settings</span> | The settings to use for the NetworkedVar |

<span id="MLAPI_NetworkedVar_NetworkedVar_1__ctor_"></span>

### NetworkedVar(NetworkedVarSettings, T) [MLAPI_NetworkedVar_NetworkedVar_1__ctor_MLAPI_NetworkedVar_NetworkedVarSettings__0_]

<div class="markdown level1 summary" markdown="1">

Creates a NetworkedVar with a custom value and custom settings

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-3]

    public NetworkedVar(NetworkedVarSettings settings, T value)

#### Parameters [parameters-2]

| Type                        | Name                                        | Description                                   |
|-----------------------------|---------------------------------------------|-----------------------------------------------|
| NetworkedVarSettings        | <span class="parametername">settings</span> | The settings to use for the NetworkedVar      |
| <span class="xref">T</span> | <span class="parametername">value</span>    | The initial value to use for the NetworkedVar |

## Fields

### OnValueChanged [MLAPI_NetworkedVar_NetworkedVar_1_OnValueChanged]

<div class="markdown level1 summary" markdown="1">

The callback to be invoked when the value gets changed

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-4]

    public NetworkedVar<T>.OnValueChangedDelegate OnValueChanged

#### Field Value [field-value]

| Type                                    | Description |
|-----------------------------------------|-------------|
| NetworkedVar.OnValueChangedDelegate\<\> |             |

### Settings [MLAPI_NetworkedVar_NetworkedVar_1_Settings]

<div class="markdown level1 summary" markdown="1">

The settings for this var

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-5]

    public readonly NetworkedVarSettings Settings

#### Field Value [field-value-1]

| Type                 | Description |
|----------------------|-------------|
| NetworkedVarSettings |             |

## Properties <span id="MLAPI_NetworkedVar_NetworkedVar_1_isDirty_"></span>

### isDirty [MLAPI_NetworkedVar_NetworkedVar_1_isDirty]

<div class="markdown level1 summary" markdown="1">

Gets or sets Whether or not the variable needs to be delta synced

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-6]

    public bool isDirty { get; set; }

#### Property Value [property-value]

| Type                                     | Description |
|------------------------------------------|-------------|
| <span class="xref">System.Boolean</span> |             |

<span id="MLAPI_NetworkedVar_NetworkedVar_1_LastSyncedTime_"></span>

### LastSyncedTime [MLAPI_NetworkedVar_NetworkedVar_1_LastSyncedTime]

<div class="markdown level1 summary" markdown="1">

Gets the last time the variable was synced

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-7]

    public float LastSyncedTime { get; }

#### Property Value [property-value-1]

| Type                                    | Description |
|-----------------------------------------|-------------|
| <span class="xref">System.Single</span> |             |

<span id="MLAPI_NetworkedVar_NetworkedVar_1_Value_"></span>

### Value [MLAPI_NetworkedVar_NetworkedVar_1_Value]

<div class="markdown level1 summary" markdown="1">

The value of the NetworkedVar container

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-8]

    public T Value { get; set; }

#### Property Value [property-value-2]

| Type                        | Description |
|-----------------------------|-------------|
| <span class="xref">T</span> |             |

## Methods <span id="MLAPI_NetworkedVar_NetworkedVar_1_CanClientRead_"></span>

### CanClientRead(UInt64) [MLAPI_NetworkedVar_NetworkedVar_1_CanClientRead_System_UInt64_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-9]

    public bool CanClientRead(ulong clientId)

#### Parameters [parameters-3]

| Type                                    | Name                                        | Description |
|-----------------------------------------|---------------------------------------------|-------------|
| <span class="xref">System.UInt64</span> | <span class="parametername">clientId</span> |             |

#### Returns [returns]

| Type                                     | Description |
|------------------------------------------|-------------|
| <span class="xref">System.Boolean</span> |             |

<span id="MLAPI_NetworkedVar_NetworkedVar_1_CanClientWrite_"></span>

### CanClientWrite(UInt64) [MLAPI_NetworkedVar_NetworkedVar_1_CanClientWrite_System_UInt64_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-10]

    public bool CanClientWrite(ulong clientId)

#### Parameters [parameters-4]

| Type                                    | Name                                        | Description |
|-----------------------------------------|---------------------------------------------|-------------|
| <span class="xref">System.UInt64</span> | <span class="parametername">clientId</span> |             |

#### Returns [returns-1]

| Type                                     | Description |
|------------------------------------------|-------------|
| <span class="xref">System.Boolean</span> |             |

<span id="MLAPI_NetworkedVar_NetworkedVar_1_GetChannel_"></span>

### GetChannel() [MLAPI_NetworkedVar_NetworkedVar_1_GetChannel]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-11]

    public string GetChannel()

#### Returns [returns-2]

| Type                                    | Description |
|-----------------------------------------|-------------|
| <span class="xref">System.String</span> |             |

<span id="MLAPI_NetworkedVar_NetworkedVar_1_IsDirty_"></span>

### IsDirty() [MLAPI_NetworkedVar_NetworkedVar_1_IsDirty]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-12]

    public bool IsDirty()

#### Returns [returns-3]

| Type                                     | Description |
|------------------------------------------|-------------|
| <span class="xref">System.Boolean</span> |             |

<span id="MLAPI_NetworkedVar_NetworkedVar_1_ReadDelta_"></span>

### ReadDelta(Stream, Boolean) [MLAPI_NetworkedVar_NetworkedVar_1_ReadDelta_System_IO_Stream_System_Boolean_]

<div class="markdown level1 summary" markdown="1">

Reads value from the reader and applies it

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-13]

    public void ReadDelta(Stream stream, bool keepDirtyDelta)

#### Parameters [parameters-5]

| Type                                       | Name                                              | Description                                                                             |
|--------------------------------------------|---------------------------------------------------|-----------------------------------------------------------------------------------------|
| <span class="xref">System.IO.Stream</span> | <span class="parametername">stream</span>         | The stream to read the value from                                                       |
| <span class="xref">System.Boolean</span>   | <span class="parametername">keepDirtyDelta</span> | Whether or not the container should keep the dirty delta, or mark the delta as consumed |

<span id="MLAPI_NetworkedVar_NetworkedVar_1_ReadField_"></span>

### ReadField(Stream) [MLAPI_NetworkedVar_NetworkedVar_1_ReadField_System_IO_Stream_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-14]

    public void ReadField(Stream stream)

#### Parameters [parameters-6]

| Type                                       | Name                                      | Description |
|--------------------------------------------|-------------------------------------------|-------------|
| <span class="xref">System.IO.Stream</span> | <span class="parametername">stream</span> |             |

<span id="MLAPI_NetworkedVar_NetworkedVar_1_ResetDirty_"></span>

### ResetDirty() [MLAPI_NetworkedVar_NetworkedVar_1_ResetDirty]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-15]

    public void ResetDirty()

<span
id="MLAPI_NetworkedVar_NetworkedVar_1_SetNetworkedBehaviour_"></span>

### SetNetworkedBehaviour(NetworkedBehaviour) [MLAPI_NetworkedVar_NetworkedVar_1_SetNetworkedBehaviour_MLAPI_NetworkedBehaviour_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-16]

    public void SetNetworkedBehaviour(NetworkedBehaviour behaviour)

#### Parameters [parameters-7]

| Type               | Name                                         | Description |
|--------------------|----------------------------------------------|-------------|
| NetworkedBehaviour | <span class="parametername">behaviour</span> |             |

<span id="MLAPI_NetworkedVar_NetworkedVar_1_WriteDelta_"></span>

### WriteDelta(Stream) [MLAPI_NetworkedVar_NetworkedVar_1_WriteDelta_System_IO_Stream_]

<div class="markdown level1 summary" markdown="1">

Writes the variable to the writer

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-17]

    public void WriteDelta(Stream stream)

#### Parameters [parameters-8]

| Type                                       | Name                                      | Description                      |
|--------------------------------------------|-------------------------------------------|----------------------------------|
| <span class="xref">System.IO.Stream</span> | <span class="parametername">stream</span> | The stream to write the value to |

<span id="MLAPI_NetworkedVar_NetworkedVar_1_WriteField_"></span>

### WriteField(Stream) [MLAPI_NetworkedVar_NetworkedVar_1_WriteField_System_IO_Stream_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-18]

    public void WriteField(Stream stream)

#### Parameters [parameters-9]

| Type                                       | Name                                      | Description |
|--------------------------------------------|-------------------------------------------|-------------|
| <span class="xref">System.IO.Stream</span> | <span class="parametername">stream</span> |             |

### Implements [implements]

<div markdown="1">

INetworkedVar

</div>
