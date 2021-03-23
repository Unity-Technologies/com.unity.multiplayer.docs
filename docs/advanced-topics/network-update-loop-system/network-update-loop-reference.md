---
id: network-update-loop-reference
title: Network Update Loop Reference 
---

The following diagrams and code provide insight into the Network Update Loop process and APIs.

## Injecting NetworkUpdateLoop Systems Into PlayerLoop

### Diagram

<div class="imgwhite">

![Injecting NetworkUpdateLoop Systems Into PlayerLoop](/img/injecting-networkupdatesloop.svg)

</div>

### Pseudo-code

```cs
public interface INetworkUpdateSystem
{
    void NetworkUpdate();
}

public enum NetworkUpdateStage
{
    Initialization = -4,
    EarlyUpdate = -3,
    FixedUpdate = -2,
    PreUpdate = -1,
    Update = 0,
    PreLateUpdate = 1,
    PostLateUpdate = 2
}

public static class NetworkUpdateLoop
{
    [RuntimeInitializeOnLoadMethod]
    private static void Initialize()
    {
        var customPlayerLoop = PlayerLoop.GetCurrentPlayerLoop();

        for (int i = 0; i < customPlayerLoop.subSystemList.Length; i++)
        {
            var playerLoopSystem = customPlayerLoop.subSystemList[i];

            if (playerLoopSystem.type == typeof(Initialization))
            {
                var subsystems = playerLoopSystem.subSystemList.ToList();
                subsystems.Add(NetworkInitialization.CreateLoopSystem());
                playerLoopSystem.subSystemList = subsystems.ToArray();
            }
            else if (playerLoopSystem.type == typeof(EarlyUpdate))
            {
                var subsystems = playerLoopSystem.subSystemList.ToList();
                subsystems.Insert(0, NetworkEarlyUpdate.CreateLoopSystem());
                playerLoopSystem.subSystemList = subsystems.ToArray();
            }
            // add/insert other loop systems ...

            customPlayerLoop.subSystemList[i] = playerLoopSystem;
        }

        PlayerLoop.SetPlayerLoop(customPlayerLoop);
    }

    private struct NetworkInitialization
    {
        public static PlayerLoopSystem CreateLoopSystem()
        {
            return new PlayerLoopSystem
            {
                type = typeof(NetworkInitialization),
                updateDelegate = RunNetworkInitialization
            };
        }
    }

    private struct NetworkEarlyUpdate
    {
        public static PlayerLoopSystem CreateLoopSystem()
        {
            return new PlayerLoopSystem
            {
                type = typeof(NetworkEarlyUpdate),
                updateDelegate = RunNetworkEarlyUpdate
            };
        }
    }

    // define other loop systems ...

    public static uint FrameCount = 0;
    public static NetworkUpdateStage UpdateStage;

    private static void AdvanceFrame()
    {
        ++FrameCount;
    }

    private static readonly List<INetworkUpdateSystem> m_Initialization_List = new List<INetworkUpdateSystem>();
    private static INetworkUpdateSystem[] m_Initialization_Array = new INetworkUpdateSystem[0];

    private static void RunNetworkInitialization()
    {
        AdvanceFrame();

        UpdateStage = NetworkUpdateStage.Initialization;
        int arrayLength = m_Initialization_Array.Length;
        for (int i = 0; i < arrayLength; i++)
        {
            m_Initialization_Array[i].NetworkUpdate();
        }
    }

    private static readonly List<INetworkUpdateSystem> m_EarlyUpdate_List = new List<INetworkUpdateSystem>();
    private static INetworkUpdateSystem[] m_EarlyUpdate_Array = new INetworkUpdateSystem[0];

    private static void RunNetworkEarlyUpdate()
    {
        UpdateStage = NetworkUpdateStage.EarlyUpdate;
        int arrayLength = m_EarlyUpdate_Array.Length;
        for (int i = 0; i < arrayLength; i++)
        {
            m_EarlyUpdate_Array[i].NetworkUpdate();
        }
    }

    // implement other loop systems ...

    public static void RegisterNetworkUpdate(this INetworkUpdateSystem updateSystem, NetworkUpdateStage updateStage = NetworkUpdateStage.Update)
    {
        switch (updateStage)
        {
            case NetworkUpdateStage.Initialization:
            {
                if (!m_Initialization_List.Contains(updateSystem))
                {
                    m_Initialization_List.Add(updateSystem);
                    m_Initialization_Array = m_Initialization_List.ToArray();
                }

                break;
            }
            case NetworkUpdateStage.EarlyUpdate:
            {
                if (!m_EarlyUpdate_List.Contains(updateSystem))
                {
                    m_EarlyUpdate_List.Add(updateSystem);
                    m_EarlyUpdate_Array = m_EarlyUpdate_List.ToArray();
                }

                break;
            }
            // register other loop systems ...
        }
    }

    public static void UnregisterNetworkUpdate(this INetworkUpdateSystem updateSystem, NetworkUpdateStage updateStage = NetworkUpdateStage.Update)
    {
        switch (updateStage)
        {
            case NetworkUpdateStage.Initialization:
            {
                if (m_Initialization_List.Contains(updateSystem))
                {
                    m_Initialization_List.Remove(updateSystem);
                    m_Initialization_Array = m_Initialization_List.ToArray();
                }

                break;
            }
            case NetworkUpdateStage.EarlyUpdate:
            {
                if (m_EarlyUpdate_List.Contains(updateSystem))
                {
                    m_EarlyUpdate_List.Remove(updateSystem);
                    m_EarlyUpdate_Array = m_EarlyUpdate_List.ToArray();
                }

                break;
            }
            // unregister other loop systems ...
        }
    }
}
```

## NetworkUpdateLoop Running INetworkUpdateSystem Updates

### Diagram

<div class="imgwhite">

![NetworkUpdateLoop Running INetworkUpdateSystem Updates](/img/runninginetworkupdatesystemupdates.svg)

</div>

### Pseudo-code

```cs
public interface INetworkUpdateSystem
{
    void NetworkUpdate();
}

public enum NetworkUpdateStage
{
    Initialization = -4,
    EarlyUpdate = -3,
    FixedUpdate = -2,
    PreUpdate = -1,
    Update = 0,
    PreLateUpdate = 1,
    PostLateUpdate = 2
}

public static class NetworkUpdateLoop
{
    public static uint FrameCount;
    public static NetworkUpdateStage UpdateStage;

    public static void RegisterAllNetworkUpdates(this INetworkUpdateSystem updateSystem);
    public static void RegisterNetworkUpdate(this INetworkUpdateSystem updateSystem, NetworkUpdateStage updateStage);
    public static void UnregisterNetworkUpdate(this INetworkUpdateSystem updateSystem, NetworkUpdateStage updateStage);
    public static void UnregisterAllNetworkUpdates(this INetworkUpdateSystem updateSystem);
}

public class MyPlainScript : IDisposable, INetworkUpdateSystem
{
    public void Initialize()
    {
        this.RegisterNetworkUpdate(NetworkUpdateStage.EarlyUpdate);
        this.RegisterNetworkUpdate(NetworkUpdateStage.FixedUpdate);
        this.RegisterNetworkUpdate(NetworkUpdateStage.Update);
    }

    public void NetworkUpdate()
    {
        Debug.Log($"{nameof(MyPlainScript)}.{nameof(NetworkUpdate)}()");
    }

    public void Dispose()
    {
        this.UnregisterAllNetworkUpdates();
    }
}

public class MyGameScript : MonoBehaviour, INetworkUpdateSystem
{
    private void OnEnable()
    {
        this.RegisterNetworkUpdate(NetworkUpdateStage.EarlyUpdate);
        this.RegisterNetworkUpdate(NetworkUpdateStage.FixedUpdate);
        this.RegisterNetworkUpdate(NetworkUpdateStage.Update);
    }

    public void NetworkUpdate()
    {
        Debug.Log($"{nameof(MyGameScript)}.{nameof(NetworkUpdate)}({NetworkUpdateLoop.UpdateStage})");
    }

    private void FixedUpdate()
    {
        Debug.Log($"{nameof(MyGameScript)}.{nameof(FixedUpdate)}()");
    }

    private void Update()
    {
        Debug.Log($"{nameof(MyGameScript)}.{nameof(Update)}()");
    }

    private void OnDisable()
    {
        this.UnregisterAllNetworkUpdates();
    }
}
```


