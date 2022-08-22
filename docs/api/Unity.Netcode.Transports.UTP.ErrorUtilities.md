---
id: Unity.Netcode.Transports.UTP.ErrorUtilities
title: Unity.Netcode.Transports.UTP.ErrorUtilities
---

# Class ErrorUtilities


Helper utility class to convert error codes to human readable error
messages.







##### Inheritance


System.Object




ErrorUtilities






##### Inherited Members



System.Object.Equals(System.Object)





System.Object.Equals(System.Object, System.Object)





System.Object.GetHashCode()





System.Object.GetType()





System.Object.MemberwiseClone()





System.Object.ReferenceEquals(System.Object, System.Object)





System.Object.ToString()





###### **Namespace**: Unity.Netcode.Transports.UTP

###### **Assembly**: MLAPI.dll

##### Syntax


``` lang-csharp
public static class ErrorUtilities
```



### Methods

#### ErrorToString(Networking.Transport.Error.StatusCode, UInt64)


Convert error code to human readable error message.






##### Declaration


``` lang-csharp
public static string ErrorToString(Networking.Transport.Error.StatusCode error, ulong connectionId)
```



##### Parameters

| Type                                  | Name         | Description                        |
|---------------------------------------|--------------|------------------------------------|
| Networking.Transport.Error.StatusCode | error        | Status code of the error           |
| System.UInt64                         | connectionId | Subject connection ID of the error |

##### Returns

| Type          | Description                   |
|---------------|-------------------------------|
| System.String | Human readable error message. |



