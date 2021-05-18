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
    "collapsed": true,
    "type": "category",
    "label": "Installation and Migration",
    "items": [
      {
        "type": "doc",
        "id": "migration/install"
      },
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
      {
        "type": "doc",
        "id": "tutorials/goldenpath"
      },
    ],
  },
  {
    "collapsed": true,
    "type": "category",
    "label": "Networking",
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
        "id": "mlapi-basics/modularity"
      },
      {
        "type": "doc",
        "id": "mlapi-basics/networkvariable"
      },
      {
        "type": "doc",
        "id": "mlapi-basics/object-visibility"
      },
      {
        "type": "doc",
        "id": "advanced-topics/networkwriter-networkreader-networkbuffer"
      },
      {
        "type": "doc",
        "id": "advanced-topics/custom-transports"
      },
      {
        "type": "doc",
        "id": "advanced-topics/networkprofiler-window"
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
    "label": "Objects",
    "items": [
      {
        "type": "doc",
        "id": "mlapi-basics/object-spawning"
      },
      {
        "type": "doc",
        "id": "advanced-topics/object-pooling"
      }
    ]
  },
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
        "type": "doc",
        "id": "advanced-topics/ways-synchronize"
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
      { 
        "type": "doc",
        "id": "advanced-topics/message-system/custom-messages"
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
      },   
      {
        "type": "doc",
        "id": "advanced-topics/serialization/enum_types"
      },
      {
        "type": "doc",
        "id": "advanced-topics/serialization/static-arrays"
      },  
      { 
        "type": "doc",
        "id": "advanced-topics/serialization/inetworkserializable"
      },
      {
        "type": "doc",
        "id": "advanced-topics/custom-serialization"
      }, 
    ]
    },
  {
    "collapsed": true,
    "type": "category",
    "label": "Scenes",
    "items": [
      {
        "type": "doc",
        "id": "mlapi-basics/scene-management"
      },
    ]
  },
  {
    "collapsed": true,
    "type": "category",
    "label": "Debugging",
    "items": [
      {
        "type": "doc",
        "id": "mlapi-basics/logging"
      },
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
      "label": "Multiplayer Networking",
      "items": [
        {
          "collapsed": true,
          "type": "category",
          "label": "Multiplayer Networking Concepts",
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
        {
          "type": "doc",
          "id": "learn/lagandpacketloss"
        },
        {
          "type": "doc",
          "id": "learn/clientside_interpolation"
        },
      ]
    },
    {
      "collapsed": true,
      "type": "category",
      "label": "Unity MLAPI",
      "items": [
        {
          "collapsed": true,
          "type": "category",
          "label": "RPCs",
          "items": [  
            {
              "type": "doc",
              "id": "learn/rpcvnetvar"
            },
            {
              "type": "doc",
              "id": "learn/rpcnetvarexamples"
            }
          ],
        }
      ]
    },
    {
      "type": "doc",
      "id": "learn/bossroom"
    },
    {
      "collapsed": true,
      "type": "category",
      "label": "Using Bitesize Samples",
      "items": [
          {
          "type": "doc",
          "id": "learn/bitesize-introduction"
          },
          {
            "type": "doc",
            "id": "learn/bitesize-invaders"
            },
          {
          "type": "doc",
          "id": "learn/bitesize-spaceshooter"
          }
      ]
      },
    {
      "collapsed": true,
      "type": "category",
      "label": "Community Contributions",
      "items": [
        {
          "type": "doc",
          "id": "learn/dapper-video"
        }
      ]
    },
    {
      "type": "doc",
       "id": "learn/faq"
    }
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
          "id": "mlapi-api/MLAPI",
          "label": "MLAPI APIs",
        },
        {
          "type": "doc",
          "id": "mlapi-api/MLAPI.INetworkUpdateSystem",
          "label": "INetworkUpdateSystem"
        },
        {
          "type": "doc",
          "id": "mlapi-api/MLAPI.NetworkBehaviour",
          "label": "NetworkBehaviour"
        },
        {
          "type": "doc",
          "id": "mlapi-api/MLAPI.NetworkObject",
          "label": "NetworkObject"
        },
        {
          "type": "doc",
          "id": "mlapi-api/MLAPI.NetworkObject.SpawnDelegate",
          "label": "SpawnDelegate"
        },
        {
          "type": "doc",
          "id": "mlapi-api/MLAPI.NetworkObject.VisibilityDelegate",
          "label": "VisibilityDelegate"
        },
        {
          "type": "doc",
          "id": "mlapi-api/MLAPI.NetworkTickSystem",
          "label": "NetworkTickSystem"
        },
        {
          "type": "doc",
          "id": "mlapi-api/MLAPI.NetworkUpdateLoop",
          "label": "NetworkUpdateLoop"
        },
        {
          "type": "doc",
          "id": "mlapi-api/MLAPI.NetworkUpdateStage",
          "label": "NetworkUpdateStage"
        }
      ]
    },
      
     {
        "collapsed": true,
        "type": "category",
        "label": "Collections",
        "items": [
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Collections",
            "label": "Collections"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Collections.FixedQueue-1",
            "label": "FixedQueue-1"
          },
        ]
      },
       {
        "collapsed": true,
        "type": "category",
        "label": "Configuration",
        "items": [
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Configuration",
            "label": "Configuration"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Configuration.HashSize",
            "label": "HashSize"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Configuration.NetworkConfig",
            "label": "NetworkConfig"
          }
        ]
      },
      {
        "collapsed": true,
        "type": "category",
        "label": "Connection",
        "items": [
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Connection",
            "label": "Connection"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Connection.NetworkClient",
            "label": "NetworkClientNetworkClient"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Connection.PendingClient",
            "label": "PendingClient"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Connection.PendingClient.State",
            "label": "PendingClient.State"
          }
        ]
      },
      {
        "collapsed": true,
        "type": "category",
        "label": "Exceptions",
        "items": [
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Exceptions",
            "label": "Exceptions"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Exceptions.InvalidChannelException",
            "label": "InvalidChannelException"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Exceptions.NetworkConfigurationException",
            "label": "NetworkConfigurationException"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Exceptions.NotListeningException",
            "label": "NotListeningException"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Exceptions.NotServerException",
            "label": "NotServerException"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Exceptions.SpawnStateException",
            "label": "SpawnStateException"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Exceptions.VisibilityChangeException",
            "label": "VisibilityChangeException"
          }
        ]
      },
      {
        "collapsed": true,
        "type": "category",
        "label": "Logging",
        "items": [
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Logging",
            "label": "Logging"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Logging.LogLevel",
            "label": "LogLevel"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Logging.NetworkLog",
            "label": "NetworkLog"
          }
        ]
      },
      {
        "collapsed": true,
        "type": "category",
        "label": "Messaging",
        "items": [
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Messaging",
            "label": "Messaging"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Messaging.ClientRpcAttribute",
            "label": "ClientRpcAttribute"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Messaging.ClientRpcParams",
            "label": "ClientRpcParams"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Messaging.ClientRpcReceiveParams",
            "label": "ClientRpcReceiveParams"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Messaging.ClientRpcSendParams",
            "label": "ClientRpcSendParams"
          },
          {
            "collapsed": true,
            "type": "category",
            "label": "CustomMessagingManager",
            "items": [
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Messaging.CustomMessagingManager",
                "label": "CustomMessagingManager"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Messaging.CustomMessagingManager.HandleNamedMessageDelegate",
                "label": "HandleNamedMessageDelegate"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Messaging.CustomMessagingManager.UnnamedMessageDelegate",
                "label": "UnnamedMessageDelegate"
              }
            ]
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Messaging.RpcAttribute",
            "label": "RpcAttribute"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Messaging.RpcParams",
            "label": "RpcParams"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Messaging.RpcDelivery",
            "label": "RpcDelivery"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Messaging.RpcQueueHistoryFrame",
            "label": "RpcQueueHistoryFrame"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Messaging.RpcQueueHistoryFrame.QueueFrameType",
            "label": "QueueFrameType"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Messaging.ServerRpcAttribute",
            "label": "ServerRpcAttribute"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Messaging.ServerRpcParams",
            "label": "ServerRpcParams"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Messaging.ServerRpcReceiveParams",
            "label": "ServerRpcReceiveParams"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Messaging.ServerRpcSendParams",
            "label": "ServerRpcSendParams"
          }
        ]
      },
      {
        "collapsed": true,
        "type": "category",
        "label": "NetworkManager",
        "items": [
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkManager",
            "label": "NetworkManager"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkManager.ConnectionApprovedDelegate",
            "label": "ConnectionApprovedDelegate"
          }
        ]
      },
      {
        "collapsed": true,
        "type": "category",
        "label": "NetworkVariable",
        "items": [
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable",
            "label": "NetworkVariable"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.INetworkVariable",
            "label": "INetworkVariable"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.NetworkVariable-1",
            "label": "NetworkVariable-1"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.NetworkVariable-1.OnValueChangedDelegate",
            "label": "OnValueChangedDelegate"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.NetworkVariableBool",
            "label": "NetworkVariableBool"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.NetworkVariableByte",
            "label": "NetworkVariableByte"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.NetworkVariableColor",
            "label": "NetworkVariableColor"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.NetworkVariableColor32",
            "label": "NetworkVariableColor32"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.NetworkVariableDouble",
            "label": "NetworkVariableDouble"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.NetworkVariableFloat",
            "label": "NetworkVariableFloat"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.NetworkVariableInt",
            "label": "NetworkVariableInt"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.NetworkVariableLong",
            "label": "NetworkVariableLong"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.NetworkVariablePermission",
            "label": "NetworkVariablePermission"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.NetworkVariablePermissionsDelegate",
            "label": "NetworkVariablePermissionsDelegate"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.NetworkVariableQuaternion",
            "label": "NetworkVariableQuaternion"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.NetworkVariableRay",
            "label": "NetworkVariableRay"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.NetworkVariableSByte",
            "label": "NetworkVariableSByte"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.NetworkVariableSettings",
            "label": "NetworkVariableSettings"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.NetworkVariableShort",
            "label": "NetworkVariableShort"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.NetworkVariableString",
            "label": "NetworkVariableString"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.NetworkVariableUInt",
            "label": "NetworkVariableUInt"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.NetworkVariableULong",
            "label": "NetworkVariableULong"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.NetworkVariableUShort",
            "label": "NetworkVariableUShort"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.NetworkVariableVector2",
            "label": "NetworkVariableVector2"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.NetworkVariableVector3",
            "label": "NetworkVariableVector3"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkVariable.NetworkVariableVector4",
            "label": "NetworkVariableVector4"
          },
          {
            "collapsed": true,
            "type": "category",
            "label": "NetworkVariable.Collections",
            "items": [
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkVariable.Collections",
                "label": "Collections"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkVariable.Collections.NetworkDictionary-2",
                "label": "NetworkDictionary-2"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkVariable.Collections.NetworkDictionary-2.OnDictionaryChangedDelegate",
                "label": "OnDictionaryChangedDelegate"
              },
              {
                "collapsed": true,
                "type": "category",
                "label": "NetworkDictionaryEvent-2",
                "items": [
                {
                  "type": "doc",
                  "id": "mlapi-api/MLAPI.NetworkVariable.Collections.NetworkDictionaryEvent-2",
                  "label": "NetworkDictionaryEvent-2"
                },
                {
                  "type": "doc",
                  "id": "mlapi-api/MLAPI.NetworkVariable.Collections.NetworkDictionaryEvent-2.EventType",
                  "label": "EventType"
                }
                ]
              },
              {
                "collapsed": true,
                "type": "category",
                "label": "NetworkList-1",
                "items": [
                {
                  "type": "doc",
                  "id": "mlapi-api/MLAPI.NetworkVariable.Collections.NetworkList-1",
                  "label": "NetworkList-1"
                },
                {
                  "type": "doc",
                  "id": "mlapi-api/MLAPI.NetworkVariable.Collections.NetworkList-1.OnListChangedDelegate",
                  "label": "OnListChangedDelegate"
                }
                ]
              },
              {
                "collapsed": true,
                "type": "category",
                "label": "NetworkListEvent-1",
                "items": [
                  {
                    "type": "doc",
                    "id": "mlapi-api/MLAPI.NetworkVariable.Collections.NetworkListEvent-1",
                    "label": "NetworkListEvent-1"
                  },
                  {
                    "type": "doc",
                    "id": "mlapi-api/MLAPI.NetworkVariable.Collections.NetworkListEvent-1.EventType",
                    "label": "EventType"
                  }
                ]
              }
            ]
          },
        ]
      },
      {
        "collapsed": true,
        "type": "category",
        "label": "Profiling",
        "items": [
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Profiling",
            "label": "Profiling"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Profiling.IProfilableTransportProvider",
            "label": "IProfilableTransportProvider"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Profiling.NetworkProfiler",
            "label": "NetworkProfiler"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Profiling.PerformanceTickData",
            "label": "PerformanceTickData"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Profiling.ProfilerConstants",
            "label": "ProfilerConstants"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Profiling.ProfilerIncStat",
            "label": "ProfilerIncStat"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Profiling.ProfilerTick",
            "label": "ProfilerTick"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Profiling.ProfilerStat",
            "label": "ProfilerStat"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Profiling.ProfilerStatManager",
            "label": "ProfilerStatManager"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Profiling.ProfilingDataStore",
            "label": "ProfilingDataStore"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Profiling.TickEvent",
            "label": "TickEvent"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Profiling.TickType",
            "label": "TickType"
          },
          {
            "collapsed": true,
            "type": "category",
            "label": "ProfilerNotifier",
            "items": [
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Profiling.ProfilerNotifier",
                "label": "ProfilerNotifier"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Profiling.ProfilerNotifier.NoTickDataHandler",
                "label": "NoTickDataHandler"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Profiling.ProfilerNotifier.PerformanceDataEventHandler",
                "label": "PerformanceDataEventHandler"
              },
            ]
          }
        ]
      },
      {
        "collapsed": true,
        "type": "category",
        "label": "SceneManagement",
        "items": [
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.SceneManagement",
            "label": "SceneManagement"
          },
          {
            "collapsed": true,
            "type": "category",
            "label": "NetworkSceneManager",
            "items": [
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.SceneManagement.NetworkSceneManager",
                "label": "NetworkSceneManager"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.SceneManagement.NetworkSceneManager.NotifyClientAllClientsLoadedSceneDelegate",
                "label": "NotifyClientAllClientsLoadedSceneDelegate"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.SceneManagement.NetworkSceneManager.NotifyServerAllClientsLoadedSceneDelegate",
                "label": "NotifyServerAllClientsLoadedSceneDelegate"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.SceneManagement.NetworkSceneManager.NotifyServerClientLoadedSceneDelegate",
                "label": "NotifyServerAllClientsLoadedSceneDelegate"
              },
            ]
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.SceneManagement.NetworkSceneManager.SceneSwitchedDelegate",
            "label": "SceneSwitchedDelegate"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.SceneManagement.NetworkSceneManager.SceneSwitchStartedDelegate",
            "label": "SceneSwitchStartedDelegate"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.SceneManagement.SceneSwitchProgress.OnClientLoadedSceneDelegate",
            "label": "OnClientLoadedSceneDelegate"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.SceneManagement.SceneSwitchProgress.OnCompletedDelegate",
            "label": "OnCompletedDelegate"
          }
        ]
      },
      {
        "collapsed": true,
        "type": "category",
        "label": "Serialization",
        "items": [
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Serialization",
            "label": "Serialization"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Serialization.Arithmetic",
            "label": "Arithmetic"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Serialization.AutoNetworkSerializable",
            "label": "AutoNetworkSerializable"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Serialization.INetworkSerializable",
            "label": "INetworkSerializable"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Serialization.NetworkBuffer",
            "label": "NetworkBuffer"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Serialization.NetworkReader",
            "label": "NetworkReader"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Serialization.NetworkSerializer",
            "label": "NetworkSerializer"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Serialization.NetworkWriter",
            "label": "NetworkWriter"
          },
          {
            "collapsed": true,
            "type": "category",
            "label": "Serialization.Pooled",
            "items": [
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Serialization.Pooled",
                "label": "Pooled"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Serialization.Pooled.NetworkBufferPool",
                "label": "NetworkBufferPool"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Serialization.Pooled.NetworkReaderPool",
                "label": "NetworkReaderPool"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Serialization.Pooled.NetworkWriterPool",
                "label": "NetworkWriterPool"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Serialization.Pooled.PooledNetworkBuffer",
                "label": "PooledNetworkBuffer"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Serialization.Pooled.PooledNetworkReader",
                "label": "PooledNetworkReader"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Serialization.Pooled.PooledNetworkWriter",
                "label": "PooledNetworkWriter"
              }
            ]
          },
          {
            "collapsed": true,
            "type": "category",
            "label": "Serialization.SerializationManager",
            "items": [
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Serialization.SerializationManager",
                "label": "SerializationManager"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Serialization.SerializationManager.CustomDeserializationDelegate-1",
                "label": "CustomDeserializationDelegate-1"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Serialization.SerializationManager.CustomSerializationDelegate-1",
                "label": "CustomSerializationDelegate-1"
              }
            ]
          },
        ]
      },
      {
        "type": "doc",
        "id": "mlapi-api/MLAPI.SnapshotSystem",
        "label": "SnapshotSystem"
      },
      {
        "collapsed": true,
        "type": "category",
        "label": "Spawning",
        "items": [
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Spawning",
            "label": "Spawning"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Spawning.NetworkSpawnManager",
            "label": "NetworkSpawnManager"
          }
        ]
      },
      {
        "collapsed": true,
        "type": "category",
        "label": "Transports",
        "items": [
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Transports",
            "label": "Transports"
          },
          {
            "collapsed": true,
            "type": "category",
            "label": "Transports.Multiplex",
            "items": [
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Transports.Multiplex",
                "label": "Multiplex"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Transports.Multiplex.MultiplexTransportAdapter",
                "label": "MultiplexTransportAdapter"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Transports.Multiplex.MultiplexTransportAdapter.ConnectionIdSpreadMethod",
                "label": "ConnectionIdSpreadMethod"
              }
            ]
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Transports.NetworkChannel",
            "label": "NetworkChannel"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Transports.NetworkDelivery",
            "label": "NetworkDelivery"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Transports.NetworkEvent",
            "label": "NetworkEvent"
          },
          {
            "collapsed": true,
            "type": "category",
            "label": "Transports.NetworkTransport",
            "items": [
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Transports.NetworkTransport",
                "label": "NetworkTransport"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Transports.NetworkTransport.RequestChannelsDelegate",
                "label": "RequestChannelsDelegate"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Transports.NetworkTransport.TransportEventDelegate",
                "label": "TransportEventDelegate"
              }
            ]
          },
          {
            "collapsed": true,
            "type": "category",
            "label": "Transports.Tasks",
            "items": [
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Transports.Tasks",
                "label": "Tasks"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Transports.Tasks.SocketTask",
                "label": "SocketTask"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Transports.Tasks.SocketTasks",
                "label": "SocketTasks"
              }
            ]
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Transports.TransportChannel",
            "label": "TransportChannel"
          },
          {
            "collapsed": true,
            "type": "category",
            "label": "Transports.UNET",
            "items": [
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Transports.UNET",
                "label": "UNET"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Transports.UNET.InvalidConfigException",
                "label": "InvalidConfigException"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Transports.UNET.ProfilerConstants",
                "label": "ProfilerConstants"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Transports.UNET.UNetTransport.SendMode",
                "label": "SendMode"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Transports.UNET.UNetTransport",
                "label": "UNetTransport"
              }
            ]
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Transports.UNetChannel",
            "label": "UNetChannel"
          }
        ]
      },
      {
        "collapsed": true,
        "type": "category",
        "label": "Transport UTP Wrapper",
        "items": [
          {
            "type": "doc",
            "id": "transport-api/introduction"
          },
          {
            "type": "doc",
            "id": "transport-api/Assets.Scripts.Transport"
          },
          {
            "type": "doc",
            "id": "transport-api/Assets.Scripts.Transport.Utilities"
          }
        ]
      }
  ]
}
