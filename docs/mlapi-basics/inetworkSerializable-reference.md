---
id: inetworkserializable-bitserializer
title: INetworkSerializable & BitSerializer
sidebar_label: INetworkSerializable & BitSerializer
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
