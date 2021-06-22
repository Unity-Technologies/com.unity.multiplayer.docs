---
id: network-update-loop-reference
title: Network Update Loop Reference 
sidebar_label: Network Update Loop Reference  
---

Injecting NetworkUpdateLoop Systems Into PlayerLoop

![Injecting NetworkUpdateLoop Systems Into PlayerLoop](/img/injecting-networkupdatesloop.svg)

<details>
  <summary>UML Source</summary>

```
skinparam Style strictuml
skinparam monochrome true
skinparam defaultFontSize 14

note over PlayerLoop: Unity 2019.4 LTS
note over NetworkUpdateLoop: RuntimeInitializeOnLoadMethod
NetworkUpdateLoop -> NetworkUpdateLoop: Initialize
NetworkUpdateLoop -> PlayerLoop: GetCurrentPlayerLoop
NetworkUpdateLoop <-- PlayerLoop
NetworkUpdateLoop -> NetworkUpdateLoop: Initialization.Add(NetworkInitialization)
NetworkUpdateLoop -> NetworkUpdateLoop: EarlyUpdate.Insert(0, NetworkEarlyUpdate)
NetworkUpdateLoop -> NetworkUpdateLoop: FixedUpdate.Insert(0, NetworkFixedUpdate)
NetworkUpdateLoop -> NetworkUpdateLoop: PreUpdate.Insert(0, NetworkPreUpdate)
NetworkUpdateLoop -> NetworkUpdateLoop: Update.Insert(0, NetworkUpdate)
NetworkUpdateLoop -> NetworkUpdateLoop: PreLateUpdate.Insert(0, NetworkPreLateUpdate)
NetworkUpdateLoop -> NetworkUpdateLoop: PostLateUpdate.Add(NetworkPostLateUpdate)
NetworkUpdateLoop -> PlayerLoop: SetPlayerLoop
NetworkUpdateLoop <-- PlayerLoop
group Initialization
    PlayerLoop -> PlayerLoop: PlayerUpdateTime
    PlayerLoop -> PlayerLoop: DirectorSampleTime
    PlayerLoop -> PlayerLoop: AsyncUploadTimeSlicedUpdate
    PlayerLoop -> PlayerLoop: SynchronizeInputs
    PlayerLoop -> PlayerLoop: SynchronizeState
    PlayerLoop -> PlayerLoop: XREarlyUpdate
    PlayerLoop -> NetworkUpdateLoop: RunNetworkInitialization
    NetworkUpdateLoop -> NetworkUpdateLoop: AdvanceFrame
    NetworkUpdateLoop -> NetworkUpdateLoop: ++FrameCount
    NetworkUpdateLoop -> NetworkUpdateLoop: UpdateStage = Initialization
    loop m_Initialization_Array
        NetworkUpdateLoop -> INetworkUpdateSystem: NetworkUpdate
        NetworkUpdateLoop <-- INetworkUpdateSystem
    end
    PlayerLoop <-- NetworkUpdateLoop
end
group EarlyUpdate
    PlayerLoop -> NetworkUpdateLoop: RunNetworkEarlyUpdate
    NetworkUpdateLoop -> NetworkUpdateLoop: UpdateStage = EarlyUpdate
    loop m_EarlyUpdate_Array
        NetworkUpdateLoop -> INetworkUpdateSystem: NetworkUpdate
        NetworkUpdateLoop <-- INetworkUpdateSystem
    end
    PlayerLoop <-- NetworkUpdateLoop
    PlayerLoop -> PlayerLoop: PollPlayerConnection
    PlayerLoop -> PlayerLoop: ProfilerStartFrame
    PlayerLoop -> PlayerLoop: GpuTimestamp
    PlayerLoop -> PlayerLoop: AnalyticsCoreStatsUpdate
    PlayerLoop -> PlayerLoop: UnityWebRequestUpdate
    PlayerLoop -> PlayerLoop: ExecuteMainThreadJobs
    PlayerLoop -> PlayerLoop: ProcessMouseInWindow
    PlayerLoop -> PlayerLoop: ClearIntermediateRenderers
    PlayerLoop -> PlayerLoop: ClearLines
    PlayerLoop -> PlayerLoop: PresentBeforeUpdate
    PlayerLoop -> PlayerLoop: ResetFrameStatsAfterPresent
    PlayerLoop -> PlayerLoop: UpdateAsyncReadbackManager
    PlayerLoop -> PlayerLoop: UpdateStreamingManager
    PlayerLoop -> PlayerLoop: UpdateTextureStreamingManager
    PlayerLoop -> PlayerLoop: UpdatePreloading
    PlayerLoop -> PlayerLoop: RendererNotifyInvisible
    PlayerLoop -> PlayerLoop: PlayerCleanupCachedData
    PlayerLoop -> PlayerLoop: UpdateMainGameViewRect
    PlayerLoop -> PlayerLoop: UpdateCanvasRectTransform
    PlayerLoop -> PlayerLoop: XRUpdate
    PlayerLoop -> PlayerLoop: UpdateInputManager
    PlayerLoop -> PlayerLoop: ProcessRemoteInput
    PlayerLoop -> PlayerLoop: ScriptRunDelayedStartupFrame
    PlayerLoop -> PlayerLoop: UpdateKinect
    PlayerLoop -> PlayerLoop: DeliverIosPlatformEvents
    PlayerLoop -> PlayerLoop: TangoUpdate
    PlayerLoop -> PlayerLoop: DispatchEventQueueEvents
    PlayerLoop -> PlayerLoop: PhysicsResetInterpolatedTransformPosition
    PlayerLoop -> PlayerLoop: SpriteAtlasManagerUpdate
    PlayerLoop -> PlayerLoop: PerformanceAnalyticsUpdate
end
group FixedUpdate
    PlayerLoop -> NetworkUpdateLoop: RunNetworkFixedUpdate
    NetworkUpdateLoop -> NetworkUpdateLoop: UpdateStage = FixedUpdate
    loop m_FixedUpdate_Array
        NetworkUpdateLoop -> INetworkUpdateSystem: NetworkUpdate
        NetworkUpdateLoop <-- INetworkUpdateSystem
    end
    PlayerLoop <-- NetworkUpdateLoop
    PlayerLoop -> PlayerLoop: ClearLines
    PlayerLoop -> PlayerLoop: NewInputFixedUpdate
    PlayerLoop -> PlayerLoop: DirectorFixedSampleTime
    PlayerLoop -> PlayerLoop: AudioFixedUpdate
    PlayerLoop -> PlayerLoop: ScriptRunBehaviourFixedUpdate
    PlayerLoop -> PlayerLoop: DirectorFixedUpdate
    PlayerLoop -> PlayerLoop: LegacyFixedAnimationUpdate
    PlayerLoop -> PlayerLoop: XRFixedUpdate
    PlayerLoop -> PlayerLoop: PhysicsFixedUpdate
    PlayerLoop -> PlayerLoop: Physics2DFixedUpdate
    PlayerLoop -> PlayerLoop: PhysicsClothFixedUpdate
    PlayerLoop -> PlayerLoop: DirectorFixedUpdatePostPhysics
    PlayerLoop -> PlayerLoop: ScriptRunDelayedFixedFrameRate
end
group PreUpdate
    PlayerLoop -> NetworkUpdateLoop: RunNetworkPreUpdate
    NetworkUpdateLoop -> NetworkUpdateLoop: UpdateStage = PreUpdate
    loop m_PreUpdate_Array
        NetworkUpdateLoop -> INetworkUpdateSystem: NetworkUpdate
        NetworkUpdateLoop <-- INetworkUpdateSystem
    end
    PlayerLoop <-- NetworkUpdateLoop
    PlayerLoop -> PlayerLoop: PhysicsUpdate
    PlayerLoop -> PlayerLoop: Physics2DUpdate
    PlayerLoop -> PlayerLoop: CheckTexFieldInput
    PlayerLoop -> PlayerLoop: IMGUISendQueuedEvents
    PlayerLoop -> PlayerLoop: NewInputUpdate
    PlayerLoop -> PlayerLoop: SendMouseEvents
    PlayerLoop -> PlayerLoop: AIUpdate
    PlayerLoop -> PlayerLoop: WindUpdate
    PlayerLoop -> PlayerLoop: UpdateVideo
end
group Update
    PlayerLoop -> NetworkUpdateLoop: RunNetworkUpdate
    NetworkUpdateLoop -> NetworkUpdateLoop: UpdateStage = Update
    loop m_Update_Array
        NetworkUpdateLoop -> INetworkUpdateSystem: NetworkUpdate
        NetworkUpdateLoop <-- INetworkUpdateSystem
    end
    PlayerLoop <-- NetworkUpdateLoop
    PlayerLoop -> PlayerLoop: ScriptRunBehaviourUpdate
    PlayerLoop -> PlayerLoop: ScriptRunDelayedDynamicFrameRate
    PlayerLoop -> PlayerLoop: ScriptRunDelayedTasks
    PlayerLoop -> PlayerLoop: DirectorUpdate
end
group PreLateUpdate
    PlayerLoop -> NetworkUpdateLoop: RunNetworkPreLateUpdate
    NetworkUpdateLoop -> NetworkUpdateLoop: UpdateStage = PreLateUpdate
    loop m_PreLateUpdate_Array
        NetworkUpdateLoop -> INetworkUpdateSystem: NetworkUpdate
        NetworkUpdateLoop <-- INetworkUpdateSystem
    end
    PlayerLoop <-- NetworkUpdateLoop
    PlayerLoop -> PlayerLoop: AIUpdatePostScript
    PlayerLoop -> PlayerLoop: DirectorUpdateAnimationBegin
    PlayerLoop -> PlayerLoop: LegacyAnimationUpdate
    PlayerLoop -> PlayerLoop: DirectorUpdateAnimationEnd
    PlayerLoop -> PlayerLoop: DirectorDeferredEvaluate
    PlayerLoop -> PlayerLoop: EndGraphicsJobsAfterScriptUpdate
    PlayerLoop -> PlayerLoop: ConstraintManagerUpdate
    PlayerLoop -> PlayerLoop: ParticleSystemBeginUpdateAll
    PlayerLoop -> PlayerLoop: ScriptRunBehaviourLateUpdate
end
group PostLateUpdate
    PlayerLoop -> PlayerLoop: PlayerSendFrameStarted
    PlayerLoop -> PlayerLoop: DirectorLateUpdate
    PlayerLoop -> PlayerLoop: ScriptRunDelayedDynamicFrameRate
    PlayerLoop -> PlayerLoop: PhysicsSkinnedClothBeginUpdate
    PlayerLoop -> PlayerLoop: UpdateRectTransform
    PlayerLoop -> PlayerLoop: PlayerUpdateCanvases
    PlayerLoop -> PlayerLoop: UpdateAudio
    PlayerLoop -> PlayerLoop: VFXUpdate
    PlayerLoop -> PlayerLoop: ParticleSystemEndUpdateAll
    PlayerLoop -> PlayerLoop: EndGraphicsJobsAfterScriptLateUpdate
    PlayerLoop -> PlayerLoop: UpdateCustomRenderTextures
    PlayerLoop -> PlayerLoop: UpdateAllRenderers
    PlayerLoop -> PlayerLoop: EnlightenRuntimeUpdate
    PlayerLoop -> PlayerLoop: UpdateAllSkinnedMeshes
    PlayerLoop -> PlayerLoop: ProcessWebSendMessages
    PlayerLoop -> PlayerLoop: SortingGroupsUpdate
    PlayerLoop -> PlayerLoop: UpdateVideoTextures
    PlayerLoop -> PlayerLoop: UpdateVideo
    PlayerLoop -> PlayerLoop: DirectorRenderImage
    PlayerLoop -> PlayerLoop: PlayerEmitCanvasGeometry
    PlayerLoop -> PlayerLoop: PhysicsSkinnedClothFinishUpdate
    PlayerLoop -> PlayerLoop: FinishFrameRendering
    PlayerLoop -> PlayerLoop: BatchModeUpdate
    PlayerLoop -> PlayerLoop: PlayerSendFrameComplete
    PlayerLoop -> PlayerLoop: UpdateCaptureScreenshot
    PlayerLoop -> PlayerLoop: PresentAfterDraw
    PlayerLoop -> PlayerLoop: ClearImmediateRenderers
    PlayerLoop -> PlayerLoop: PlayerSendFramePostPresent
    PlayerLoop -> PlayerLoop: UpdateResolution
    PlayerLoop -> PlayerLoop: InputEndFrame
    PlayerLoop -> PlayerLoop: TriggerEndOfFrameCallbacks
    PlayerLoop -> PlayerLoop: GUIClearEvents
    PlayerLoop -> PlayerLoop: ShaderHandleErrors
    PlayerLoop -> PlayerLoop: ResetInputAxis
    PlayerLoop -> PlayerLoop: ThreadedLoadingDebug
    PlayerLoop -> PlayerLoop: ProfilerSynchronizeStats
    PlayerLoop -> PlayerLoop: MemoryFrameMaintenance
    PlayerLoop -> PlayerLoop: ExecuteGameCenterCallbacks
    PlayerLoop -> PlayerLoop: ProfilerEndFrame
    PlayerLoop -> NetworkUpdateLoop: RunNetworkPostLateUpdate
    NetworkUpdateLoop -> NetworkUpdateLoop: UpdateStage = PostLateUpdate
    loop m_PostLateUpdate_Array
        NetworkUpdateLoop -> INetworkUpdateSystem: NetworkUpdate
        NetworkUpdateLoop <-- INetworkUpdateSystem
    end
    PlayerLoop <-- NetworkUpdateLoop
ends
```
</details>

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

![NetworkUpdateLoop Running INetworkUpdateSystem Updates](/img/runninginetworkupdatesystemupdates.svg)

<details>
  <summary>UML Source</summary>

```
skinparam Style strictuml
skinparam monochrome true
skinparam defaultFontSize 14

note over MyPlainScript: IDisposable
note over MyPlainScript: INetworkUpdateSystem
note over MyGameScript: MonoBehaviour
note over MyGameScript: INetworkUpdateSystem
group MyPlainScript.Initialize
    MyPlainScript -> NetworkUpdateLoop: RegisterNetworkUpdate(EarlyUpdate)
    MyPlainScript <-- NetworkUpdateLoop
    MyPlainScript -> NetworkUpdateLoop: RegisterNetworkUpdate(FixedUpdate)
    MyPlainScript <-- NetworkUpdateLoop
    MyPlainScript -> NetworkUpdateLoop: RegisterNetworkUpdate(Update)
    MyPlainScript <-- NetworkUpdateLoop
end
group MonoBehaviour.OnEnable
    MyGameScript -> NetworkUpdateLoop: RegisterNetworkUpdate(EarlyUpdate)
    MyGameScript <-- NetworkUpdateLoop
    MyGameScript -> NetworkUpdateLoop: RegisterNetworkUpdate(FixedUpdate)
    MyGameScript <-- NetworkUpdateLoop
    MyGameScript -> NetworkUpdateLoop: RegisterNetworkUpdate(Update)
    MyGameScript <-- NetworkUpdateLoop
end
group PlayerLoop.EarlyUpdate
    PlayerLoop -> NetworkUpdateLoop: RunNetworkEarlyUpdate
    NetworkUpdateLoop -> NetworkUpdateLoop: UpdateStage = EarlyUpdate
    loop m_EarlyUpdate_Array
        NetworkUpdateLoop -> MyPlainScript: NetworkUpdate
        NetworkUpdateLoop <-- MyPlainScript
        NetworkUpdateLoop -> MyGameScript: NetworkUpdate
        NetworkUpdateLoop <-- MyGameScript
    end
    PlayerLoop <-- NetworkUpdateLoop
    PlayerLoop -> PlayerLoop: // ...
end
group PlayerLoop.FixedUpdate
    PlayerLoop -> NetworkUpdateLoop: RunNetworkFixedUpdate
    NetworkUpdateLoop -> NetworkUpdateLoop: UpdateStage = FixedUpdate
    loop m_FixedUpdate_Array
        NetworkUpdateLoop -> MyPlainScript: NetworkUpdate
        NetworkUpdateLoop <-- MyPlainScript
        NetworkUpdateLoop -> MyGameScript: NetworkUpdate
        NetworkUpdateLoop <-- MyGameScript
    end
    PlayerLoop -> PlayerLoop: // ...
    PlayerLoop -> PlayerLoop: ScriptRunBehaviourFixedUpdate
    group MonoBehaviour.FixedUpdate
        PlayerLoop -> MyGameScript: FixedUpdate
        MyGameScript -> MyGameScript: // ...
        PlayerLoop <-- MyGameScript
    end
    PlayerLoop -> PlayerLoop: // ...
end
group PlayerLoop.Update
    PlayerLoop -> NetworkUpdateLoop: RunNetworkUpdate
    NetworkUpdateLoop -> NetworkUpdateLoop: UpdateStage = Update
    loop m_Update_Array
        NetworkUpdateLoop -> MyPlainScript: NetworkUpdate
        NetworkUpdateLoop <-- MyPlainScript
        NetworkUpdateLoop -> MyGameScript: NetworkUpdate
        NetworkUpdateLoop <-- MyGameScript
    end
    PlayerLoop <-- NetworkUpdateLoop
    PlayerLoop -> PlayerLoop: ScriptRunBehaviourUpdate
    group MonoBehaviour.Update
        PlayerLoop -> MyGameScript: Update
        MyGameScript -> MyGameScript: // ...
        PlayerLoop <-- MyGameScript
    end
    PlayerLoop -> PlayerLoop: // ...
end
group MonoBehaviour.OnDisable
    MyGameScript -> NetworkUpdateLoop: UnregisterAllNetworkUpdates
    MyGameScript <-- NetworkUpdateLoop
end
group IDisposable.Dispose
    MyPlainScript -> NetworkUpdateLoop: UnregisterAllNetworkUpdates
    MyPlainScript <-- NetworkUpdateLoop
end
```
</details>

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


