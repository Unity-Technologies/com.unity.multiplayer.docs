/*
* This file creates the left navigation table of contents for the site.
* types: category (section of content), doc (markdown file), ref (markdown page, no navigation), link (webpage)
* id: id of the markdown file, includes subdirectory names
*/

module.exports = {
  mlapi: [
    {
      "type": "doc",
      "id": "getting-started/about-mlapi"
    },
    {
      "type": "doc",
      "id": "migration/install"
    },
  {
    "collapsed": true,
    "type": "category",
    "label": "Migrating to MLAPI",
    "items": [
          {
        "type": "doc",
        "id": "migration/migratingtomlapi"
      },
      {
        "type": "doc",
        "id": "migration/migratingfrommlapi"
      },
    ],
  },
  {
    "collapsed": true,
    "type": "category",
    "label": "First Steps with MLAPI",
    "items": [
      {
        "type": "doc",
        "id": "tutorials/helloworldintro"
      },
      {
        "type": "doc",
        "id": "tutorials/helloworldtwo"
      },
    ],
  },
  {
    "collapsed": true,
    "type": "category",
    "label": "MLAPI Basics",
    "items": [
      {
        "type": "doc",
        "id": "getting-started/connection-approval"
      },
      {
        "type": "doc",
        "id": "mlapi-basics/networkobject"
      },
      {
        "type": "doc",
        "id": "mlapi-basics/networkbehavior"
      },
      {
        "type": "doc",
        "id": "mlapi-basics/object-spawning"
      },
      {
        "type": "doc",
        "id": "mlapi-basics/modularity"
      },
      {
        "type": "doc",
        "id": "mlapi-basics/networkvariable"
      },
      {
        "type": "doc",
        "id": "mlapi-basics/scene-management"
      },
      {
        "type": "doc",
        "id": "mlapi-basics/object-visibility"
      },
      {
        "type": "doc",
        "id": "mlapi-basics/logging"
      }
    ]
  },
  {
    "collapsed": true,
    "type": "category",
    "label": "Components",
    "items": [
      {
        "type": "doc",
        "id": "components/networkmanager"
      },
      {
        "type": "doc",
        "id": "components/networktransform"
      },
      {
        "type": "doc",
        "id": "components/networkanimator"
      },
      {
        "type": "doc",
        "id": "components/networknavmeshagent"
      }
    ]
  },
  {
    "collapsed": true,
    "type": "category",
    "label": "Advanced Topics",
    "items": [
      {
        "collapsed": true,
        "type": "category",
        "label": "Messaging System",
        "items": [
          {
            "type": "doc",
            "id": "advanced-topics/messaging-system"
          },
          {
            "collapsed": true,
            "type": "category",
            "label": "RPC Remote Procedure Call",
            "items": [
              {
                "type": "doc",
                "id": "advanced-topics/message-system/clientrpc"
              },
              {
                "type": "doc",
                "id": "advanced-topics/message-system/serverrpc"
              },
              {
                "type": "doc",
                "id": "advanced-topics/message-system/reliability"
              },
              {
                "type": "doc",
                "id": "advanced-topics/message-system/execution-table"
              },
              {
                "type": "doc",
                "id": "advanced-topics/message-system/rpc-params"
              },
              {
                "type": "doc",
                "id": "advanced-topics/message-system/serialization"
              },

              {
                "type": "doc",
                "id": "advanced-topics/message-system/rpc-compatibility"
              },
            ]
          },
          {
            "collapsed": true,
            "type": "category",
            "label": "Network Update Loop",
            "items": [
              {
                "type": "doc",
                "id": "advanced-topics/network-update-loop-system/about-network-update-loop"
              },
              {
                "type": "doc",
                "id": "advanced-topics/network-update-loop-system/network-update-loop-reference"
              },
            ]
          },
        ]
      },
      {
        "collapsed": true,
        "type": "category",
        "label": "Serialization",
        "items": [
          {
            "type": "doc",
            "id": "advanced-topics/serialization/serialization-intro"
          },
          {
            "type": "doc",
            "id": "advanced-topics/serialization/cprimitives"
          },
          {
            "type": "doc",
            "id": "advanced-topics/serialization/unity-primitives"
          },   {
            "type": "doc",
            "id": "advanced-topics/serialization/enum_types"
          },
          {
            "type": "doc",
            "id": "advanced-topics/serialization/static-arrays"
          },  
          { 
            "type": "doc",
            "id": "advanced-topics/serialization/inetworkserializable-networkserializer"

          },
        ]
        },
      {
        "type": "doc",
        "id": "advanced-topics/object-pooling"
      },
      {
        "type": "doc",
        "id": "advanced-topics/bitwriter-bitreader-networkbuffer"
      },
      {
        "type": "doc",
        "id": "advanced-topics/custom-transports"
      },
      {
        "type": "doc",
        "id": "advanced-topics/networkprofiler-window"
      },
      {
        "type": "doc",
        "id": "advanced-topics/custom-serialization"
      } 
    ]
  },
  {
    "collapsed": true,
    "type": "category",
    "label": "Troubleshooting",
    "items": [
      {
        "type": "doc",
        "id": "troubleshooting/troubleshooting"
      },
      {
        "type": "doc",
        "id": "troubleshooting/errormessages"
      }
    ]
  },
  {
    "collapsed": true,
    "type": "category",
    "label": "Glossary",
    "items": [

      {
        "type": "doc",
        "id": "reference/glossary/high-level-terminology"
      },
      {
        "type": "doc",
        "id": "reference/glossary/network-latency-management"
      },
      {
        "type": "doc",
        "id": "reference/glossary/network-topologies"
      },
      {
        "type": "doc",
        "id": "reference/glossary/network-terms"
      },
      {
        "type": "doc",
        "id": "reference/glossary/prioritization"
      },
      {
        "type": "doc",
        "id": "reference/glossary/relevancy"
      },
    ]
  }
],
transport: [
  {
    "collapsed": true,
    "type": "category",
    "label": "Overview",
    "items": [
      {
        "type": "doc",
        "id": "transport/introduction"
      },
      {
        "type": "doc",
        "id": "transport/install"
      },
    ]
  },
  {
    "collapsed": true,
    "type": "category",
    "label": "Workflows",
    "items": [
      {
        "type": "doc",
        "id": "transport/minimal-workflow"
      },
      {
        "type": "doc",
        "id": "transport/jobs"
      },
      {
        "type": "doc",
        "id": "transport/pipelines"
      },
    ]
  },
  {
    "collapsed": true,
    "type": "category",
    "label": "Additional information",
    "items": [
      {
        "type": "doc",
        "id": "transport/update"
      },
      {
        "type": "doc",
        "id": "transport/connection-state"
      },
      {
        "type": "doc",
        "id": "transport/events"
      },
    ]
  },
  {
    "collapsed": true,
    "type": "category",
    "label": "Sample code",
    "items": [
      {
        "type": "doc",
        "id": "transport/samples/clientbehavior"
      },
      {
        "type": "doc",
        "id": "transport/samples/serverbehavior"
      },
      {
        "type": "doc",
        "id": "transport/samples/jobifiedclientbehavior"
      },
      {
        "type": "doc",
        "id": "transport/samples/jobifiedserverbehavior"
      },
            ]
  },
],
  learn:
  [ 
    { 
      "type": "doc",
      "id": "learn/introduction",
      }, 
    {
      "collapsed": true,
      "type": "category",
      "label": "What are RPCs and when to use them",
      "items": [  
        {
          "type": "doc",
          "id": "learn/rpcvnetvar",
        },
        {
          "type": "doc",
          "id": "learn/rpcnetvarexamples",
        },
      ],
    },  
    {
      "type": "doc",
       "id": "learn/faq"
    },
    {
    "collapsed": true,
    "type": "category",
    "label": "Managing Lag with Unity",
    "items": [
        {
        "type": "doc",
        "id": "learn/lagandpacketloss"
        },
    ]
    },
    {
      "collapsed": true,
      "type": "category",
      "label": "Multiplayer Game Architecture",
      "items": [
  
        {
          "type": "doc",
          "id": "learn/multiplayergamearhitectureintroduction"
          },
          {
          "type": "doc",
          "id": "learn/listenserverhostarchitecture"
          },
      ]
    },
  ],
  releasenotes: [
    {
      "type": "doc",
      "id": "release-notes/introduction"
    },
    {
      "type": "doc",
      "id": "release-notes/multiplayer/mlapi-0-1-0"
    },
    {
      "type": "doc",
      "id": "release-notes/doc-changelog"
    },
  ],
  api: [
    {
      "type": "doc",
      "id": "mlapi-api/introduction"
    },
    {
      "collapsed": true,
      "type": "category",
      "label": "MLAPI",
      "items": [
        {
          "type": "doc",
          "id": "mlapi-api/MLAPI"
        },
        {
          "type": "doc",
          "id": "mlapi-api/MLAPI.INetworkUpdateSystem"
        },
        {
          "type": "doc",
          "id": "mlapi-api/MLAPI.NetworkBehaviour"
        },
        {
          "type": "doc",
          "id": "mlapi-api/MLAPI.NetworkManager"
        },
        {
          "type": "doc",
          "id": "mlapi-api/MLAPI.NetworkManager.ConnectionApprovedDelegate"
        },
        {
          "type": "doc",
          "id": "mlapi-api/MLAPI.NetworkManager.PerformanceDataEventHandler"
        },
        {
          "type": "doc",
          "id": "mlapi-api/MLAPI.NetworkObject"
        },
        {
          "type": "doc",
          "id": "mlapi-api/MLAPI.NetworkObject.SpawnDelegate"
        },
        {
          "type": "doc",
          "id": "mlapi-api/MLAPI.NetworkObject.VisibilityDelegate"
        },
        {
          "type": "doc",
          "id": "mlapi-api/MLAPI.NetworkTickSystem"
        },
        {
          "type": "doc",
          "id": "mlapi-api/MLAPI.NetworkUpdateLoop"
        },
        {
          "type": "doc",
          "id": "mlapi-api/MLAPI.NetworkUpdateStage"
        },
      ]
    },
      
     {
        "collapsed": true,
        "type": "category",
        "label": "MLAPI.Collections",
        "items": [
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Collections"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Collections.FixedQueue-1"
          },
        ]
      },
       {
        "collapsed": true,
        "type": "category",
        "label": "MLAPI.Configuration",
        "items": [
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Configuration"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Configuration.HashSize"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Configuration.NetworkConfig"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Configuration.NetworkPrefab"
          },
        ]
      },
      {
        "collapsed": true,
        "type": "category",
        "label": "MLAPI.Connection",
        "items": [
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Connection"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Connection.NetworkClient"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Connection.PendingClient"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Connection.PendingClient.State"
          },
        ]
      },
      {
        "collapsed": true,
        "type": "category",
        "label": "MLAPI.Exceptions",
        "items": [
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Exceptions"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Exceptions.InvalidChannelException"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Exceptions.NetworkConfigurationException"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Exceptions.NotListeningException"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Exceptions.NotServerException"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Exceptions.SpawnStateException"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Exceptions.VisibilityChangeException"
          },
        ]
      },
      {
        "collapsed": true,
        "type": "category",
        "label": "MLAPI.Logging",
        "items": [
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Logging"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Logging.LogLevel"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Logging.NetworkLog"
          },
        ]
      },
      {
        "collapsed": true,
        "type": "category",
        "label": "MLAPI.Messaging",
        "items": [
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Messaging"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Messaging.ClientRpcAttribute"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Messaging.ClientRpcParams"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Messaging.ClientRpcReceiveParams"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Messaging.ClientRpcSendParams"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Messaging.CustomMessagingManager"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Messaging.CustomMessagingManager.HandleNamedMessageDelegate"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Messaging.CustomMessagingManager.UnnamedMessageDelegate"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Messaging.RpcAttribute"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Messaging.RpcParams"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Messaging.RpcDelivery"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Messaging.RpcQueueHistoryFrame"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Messaging.RpcQueueHistoryFrame.QueueFrameType"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Messaging.ServerRpcAttribute"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Messaging.ServerRpcParams"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Messaging.ServerRpcReceiveParams"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Messaging.ServerRpcSendParams"
          },
        ]
      },
      {
        "collapsed": true,
        "type": "category",
        "label": "MLAPI.NetworkManager",
        "items": [
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkManager"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkManager.ConnectionApprovedDelegate"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkManager.PerformanceDataEventHandler"
          },
        ]
      },
      {
        "collapsed": true,
        "type": "category",
        "label": "MLAPI.NetworkVariable",
        "items": [
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.INetworkVariable"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.NetworkVariable-1"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.NetworkVariable-1.OnValueChangedDelegate"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.NetworkVariableBool"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.NetworkVariableByte"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.NetworkVariableColor"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.NetworkVariableColor32"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.NetworkVariableDouble"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.NetworkVariableFloat"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.NetworkVariableInt"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.NetworkVariableLong"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.NetworkVariablePermission"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.NetworkVariablePermissionsDelegate"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.NetworkVariableQuaternion"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.NetworkVariableRay"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.NetworkVariableSByte"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.NetworkVariableSettings"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.NetworkVariableShort"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.NetworkVariableString"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.NetworkVariableUInt"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.NetworkVariableULong"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.NetworkVariableUShort"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.NetworkVariableVector2"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.NetworkVariableVector3"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.NetworkVariableVector4"
          },
        ]
      },
      {
        "collapsed": true,
        "type": "category",
        "label": "MLAPI.NetworkVariable.Collections",
        "items": [
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.Collections"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.Collections.NetworkDictionary-2"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.Collections.NetworkDictionary-2.OnDictionaryChangedDelegate"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.Collections.NetworkDictionaryEvent-2.EventType"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.Collections.NetworkDictionaryEvent-2"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.Collections.NetworkList-1"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.Collections.NetworkList-1.OnListChangedDelegate"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.Collections.NetworkListEvent-1.EventType"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.Collections.NetworkListEvent-1"
          },
        ]
      },
      {
        "collapsed": true,
        "type": "category",
        "label": "MLAPI.Profiling",
        "items": [
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Profiling"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Profiling.PerformanceTickData"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Profiling.ProfilerConstants"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Profiling.ProfilerIncStat"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Profiling.NetworkProfiler"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Profiling.ProfilerTick"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Profiling.ProfilerStat"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Profiling.ProfilerStat"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Profiling.ProfilerStatManager"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Profiling.ProfilingDataStore"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Profiling.Sample"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Profiling.TickEvent"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Profiling.TickType"
          },
        ]
      },
      {
        "collapsed": true,
        "type": "category",
        "label": "MLAPI.Prototyping",
        "items": [
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Prototyping"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Prototyping.NetworkAnimator"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Prototyping.NetworkNavMeshAgent"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Prototyping.NetworkTransform"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Prototyping.NetworkTransform.MoveValidationDelegate"
          },
        ]
      },
      {
        "collapsed": true,
        "type": "category",
        "label": "MLAPI.SceneManagement",
        "items": [
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.SceneManagement"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.SceneManagement.NetworkSceneManager"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.SceneManagement.NetworkSceneManager.SceneSwitchedDelegate"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.SceneManagement.NetworkSceneManager.SceneSwitchStartedDelegate"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.SceneManagement.SceneSwitchProgress.OnClientLoadedSceneDelegate"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.SceneManagement.SceneSwitchProgress.OnCompletedDelegate"
          },
        ]
      },
      {
        "collapsed": true,
        "type": "category",
        "label": "MLAPI.Serialization",
        "items": [
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Serialization"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Serialization.Arithmetic"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Serialization.AutoNetworkSerializable"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Serialization.INetworkSerializable"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Serialization.NetworkBuffer"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Serialization.NetworkReader"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Serialization.NetworkSerializer"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Serialization.NetworkWriter"
          },
          {
            "collapsed": true,
            "type": "category",
            "label": "MLAPI.Serialization.Pooled",
            "items": [
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Serialization.Pooled"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Serialization.Pooled.NetworkBufferPool"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Serialization.Pooled.NetworkReaderPool"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Serialization.Pooled.NetworkWriterPool"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Serialization.Pooled.PooledNetworkBuffer"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Serialization.Pooled.PooledNetworkReader"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Serialization.Pooled.PooledNetworkWriter"
              },
            ]
          },
          {
            "collapsed": true,
            "type": "category",
            "label": "MLAPI.Serialization.SerializationManager",
            "items": [
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Serialization.SerializationManager"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Serialization.SerializationManager.CustomDeserializationDelegate-1"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Serialization.SerializationManager.CustomSerializationDelegate-1"
              },
            ]
          },
        ]
      },
      {
        "collapsed": true,
        "type": "category",
        "label": "MLAPI.Spawning",
        "items": [
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Spawning"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Spawning.NetworkSpawnManager"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Spawning.NetworkSpawnManager.DestroyHandlerDelegate"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Spawning.NetworkSpawnManager.SpawnHandlerDelegate"
          },
        ]
      },
      {
        "collapsed": true,
        "type": "category",
        "label": "MLAPI.Transports",
        "items": [
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Transports"
          },
          {
            "collapsed": true,
            "type": "category",
            "label": "MLAPI.Transports.Multiplex",
            "items": [
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Transports.Multiplex"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Transports.Multiplex.MultiplexTransportAdapter.ConnectionIdSpreadMethod"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Transports.Multiplex.MultiplexTransportAdapter"
              },
            ]
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Transports.NetworkChannel"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Transports.NetworkDelivery"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Transports.NetworkEvent"
          },
          {
            "collapsed": true,
            "type": "category",
            "label": "MLAPI.Transports.NetworkTransport",
            "items": [
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Transports.NetworkTransport"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Transports.NetworkTransport.RequestChannelsDelegate"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Transports.NetworkTransport.TransportEventDelegate"
              },
            ]
          },
          {
            "collapsed": true,
            "type": "category",
            "label": "MLAPI.Transports.Tasks",
            "items": [
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Transports.Tasks"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Transports.Tasks.SocketTask"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Transports.Tasks.SocketTasks"
              },
            ]
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Transports.TransportChannel"
          },
          {
            "collapsed": true,
            "type": "category",
            "label": "MLAPI.Transports.UNET",
            "items": [
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Transports.UNET"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Transports.UNET.InvalidConfigException"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Transports.UNET.ProfilerConstants"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Transports.UNET.UNetTransport.SendMode"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Transports.UNET.UNetTransport"
              },
            ]
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Transports.UNetChannel"
          },
        ]
      },
  ] 
}
