---
id: Unity.Netcode.NetworkSceneManager.OnEventCompletedDelegateHandler
title: Unity.Netcode.NetworkSceneManager.OnEventCompletedDelegateHandler
date created: Tuesday, October 11th 2022, 11:08:26 am
date modified: Wednesday, January 25th 2023, 5:40:43 pm
---

<div class="markdown level0 summary">

Delegate declaration for the OnLoadEventCompleted and OnUnloadEventCompleted events.

See also:

LoadEventCompleted

UnloadEventCompleted

</div>

<div class="markdown level0 conceptual">

</div>

## **Namespace**: System.Dynamic.ExpandoObject

## **Assembly**: Netcode.dll

## Syntax

``` lang-csharp
public delegate void OnEventCompletedDelegateHandler(string sceneName, LoadSceneMode loadSceneMode, List<ulong> clientsCompleted, List<ulong> clientsTimedOut);
```

## Parameters

| Type                                             | Name               | Description                                                  |
|--------------------------------------------------|--------------------|--------------------------------------------------------------|
| System.String                                    | \*sceneName        | scene pertaining to this event                               |
| LoadSceneMode                                    | \*loadSceneMode    | of the associated event completed                            |
| System.Collections.Generic.List\<System.UInt64\> | \*clientsCompleted | the clients that completed the loading event                 |
| System.Collections.Generic.List\<System.UInt64\> | \*clientsTimedOut  | the clients (if any) that timed out during the loading event |
