---
id: serializable-reference
title: Advanced Reference Informtion
sidebar_label: Advanced Reference Informtion
---

## INetworkSerializable

`INetworkSerializable` interface will not enforce anything other than `NetworkSerialize(BitSerializer)` method.

```csharp

interface INetworkSerializable
{
    void NetworkSerialize(BitSerializer serializer);
}

```
## BitSerializer

`BitSerializer` is the main aggregator that implements serialization code for built-in supported types and holds `BitReader` and `BitWriter` instances internally.

```csharp
class BitSerializer
{
    BitReader m_Reader;
    BitWriter m_Writer;

    bool IsReading { get; }

    BitSerializer(BitReader reader)
    {
        IsReading = true;
        m_Reader = reader;
    }

    BitSerializer(BitWriter writer)
    {
        IsReading = false;
        m_Writer = writer;
    }

    void Serialize(ref int value)
    {
        if (IsReading) value = m_Reader.ReadInt32Packed();
        else m_Writer.WriteInt32Packed(value);
    }

    void Serialize(ref Vector3 value)
    {
        if (IsReading) value = m_Reader.ReadVector3Packed();
        else m_Writer.WriteVector3Packed(value);
    }

    unsafe void Serialize<TEnum>(ref TEnum value) where TEnum : unmanaged, Enum
    {
        if (sizeof(TEnum) == sizeof(int))
        {
            if (IsReading)
            {
                int intValue = m_Reader.ReadInt32Packed();
                value = *(TEnum*)&intValue;
            }
            else
            {
                TEnum enumValue = value;
                m_Writer.WriteInt32Packed(*(int*)&enumValue);
            }
        }
        else if (sizeof(TEnum) == sizeof(byte))
        {
            // ...
        }

        // ...
    }

    // ...
}

```
## RPC & ILPP Changes

Currently `NetworkBehaviour.__beginSendServerRpc` and other internal RPC methods are returning and consuming `BitWriter` instances but  it is intended that they should return and consume `BitSerializer` instances constructed with `BitWriter` and `BitReader` instead. IL injected into RPC method bodies should change and use BitSerializer instead of BitWriter and generated static RPC handler methods should also use `BitSerializer` instead of `BitReader`.