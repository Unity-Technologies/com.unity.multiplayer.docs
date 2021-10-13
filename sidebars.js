/*
* This file creates the left navigation table of contents for the site.
* types: category (section of content), doc (markdown file), ref (markdown page, no navigation), link (webpage)
* id: id of the markdown file, includes subdirectory names
*/

module.exports = {
  mlapi: [
    {
      "type": "doc",
      "id": "getting-started/about"
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
      {
        "collapsed": true,
        "type": "category",
        "label": "Hello World",
        "items": [
          {
            "type": "doc",
            "id": "tutorials/helloworld/helloworldintro"
          },
          {
            "type": "doc",
            "id": "tutorials/helloworld/helloworldtwo"
          }     
        ]
      },

    ],
  },
  {
    "collapsed": true,
    "type": "category",
    "label": "Learning with Goldenpath",
    "items": [
      {
        "type": "doc",
        "id": "tutorials/goldenpath_series/starting_out"
      },       
      {
        "type": "doc",
        "id": "tutorials/goldenpath_series/goldenpath_foundation_module"
      },
       {
        "type": "doc",
        "id": "tutorials/goldenpath_series/goldenpath_one"
      },    
      {
        "type": "doc",
        "id": "tutorials/goldenpath_series/goldenpath_two"
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
        "id": "basics/networkobject"
      },
      {
        "type": "doc",
        "id": "basics/networkbehavior"
      },
      {
        "type": "doc",
        "id": "basics/modularity"
      },
      {
        "type": "doc",
        "id": "basics/networkvariable"
      },
      {
        "type": "doc",
        "id": "basics/object-visibility"
      },
      {
        "type": "doc",
        "id": "advanced-topics/networkwriter-networkreader-networkbuffer"
      },
      {
        "collapsed": true,
        "type": "category",
        "label": "Transports",
        "items": [
          {
            "type": "doc",
            "id": "advanced-topics/custom-transports"
          },
          {
            "type": "doc",
            "id": "transport-utp/about-transport-utp"
          },
          {
            "type": "doc",
            "id": "transport-utp/install"
          }
        ]
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
        "id": "basics/object-spawning"
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
            "id": "advanced-topics/message-system/rpc-compatibility"
          },
        ]
      },
      { 
        "type": "doc",
        "id": "advanced-topics/ways-synchronize"
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
        "id": "basics/scene-management"
      },
    ]
  },
  {
    "collapsed": true,
    "type": "category",
    "label": "Debugging",
    "items": [
      {
        "type":"doc",
        "id": "basics/logging"
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
  Multiplayer :
  [ 
    { 
      "type": "doc",
      "id": "learn/introduction",
    },
    {
      "collapsed": true,
      "type": "category",
      "label": "Reference Material",
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
              
                "collapsed": true,
                "type": "category",
                "label": "Latency Management",
                "items": [
                  {
                  "type": "doc",
              "id": "reference/glossary/network-latency-management"
            },
            {
              "type": "doc",
              "id": "learn/lagandpacketloss"
                },
            {
              "type": "doc",
              "id": "learn/clientside_interpolation"
                },
              ],
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
          ],
      
        },
        {
          "collapsed": true,
          "type": "category",
          "label": "Multiplayer Game Architecture",
          "items": [
            {
              "type": "doc",
              "id": "learn/multiplayer-game-arhitecture"
            },
            {
              "type": "doc",
              "id": "reference/glossary/network-topologies"
            },

            {
              "type": "doc",
              "id": "learn/listen-server-host-architecture"
            }
          ]
        },
    
        
      ],
    },
    {
      "collapsed": true,
      "type": "category",
      "label": "Educational Material",
      "items": [
          {
            "collapsed": true,
            "type": "category",
            "label": "Boss Room",
            "items": [
              {
                "type": "doc",
                "id": "learn/bossroom"
              },
              {
                "collapsed": true,
                "type": "category",
                "label": "Boss Room and RPCs",
                "items": [  
                  {
                    "type": "doc",
                    "id": "learn/rpcvnetvar"
                  },
                  {
                    "type": "doc",
                    "id": "learn/rpcnetvarexamples"
                  },
                ],
              }, 
            ],
          },
      {
      "collapsed": true,
      "type": "category",
      "label": "Bitesize Samples",
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
    ],
    },
    {
      "collapsed": true,
      "type": "category",
      "label": "Community Contributions",
      "items": [
        {
        "collapsed": true,
        "type": "category",
        "label": "Dapper Dino Tutorials",
        "items": [
          {
          "type": "doc",
          "id": "learn/dapper/dapper-video"
          },
          {
          "type": "doc",
          "id": "learn/dapper/makeamultiplayergame"
          },
          {
          "type": "doc",
          "id": "learn/dapper/lobbypassword"
          },
          {
          "type": "doc",
          "id": "learn/dapper/bossroomsample"
          },
          {
          "type": "doc",
          "id": "learn/dapper/dapper-rpcs"
          },
          {
          "type": "doc",
          "id": "learn/dapper/dapper-networkvariables"
          },
          {
          "type": "doc",
          "id": "learn/dapper/dapper-objectspawning"
          },
          {
          "type": "doc",
          "id": "learn/dapper/dapper-playernames"
          },
          {
          "type": "doc",
          "id": "learn/dapper/lobbycreation"
            },


                ]
        },
              ],
    },
    {
      "type": "doc",
       "id": "learn/faq"
    },
  ],

  
  api :
  [
    {
      "type": "doc",
      "id": "api/introduction"
    },
    {
      "collapsed": true,
      "type": "category",
      "label": "MLAPI",
      "items": [
        {
          "type": "doc",
          "id": "api/MLAPI",
          "label": "MLAPI APIs",
        },
        {
          "type": "doc",
          "id": "api/MLAPI.INetworkUpdateSystem",
          "label": "INetworkUpdateSystem"
        },
        {
          "type": "doc",
          "id": "api/MLAPI.NetworkBehaviour",
          "label": "NetworkBehaviour"
        },
        {
          "type": "doc",
          "id": "api/MLAPI.NetworkObject",
          "label": "NetworkObject"
        },
        {
          "type": "doc",
          "id": "api/MLAPI.NetworkObject.SpawnDelegate",
          "label": "SpawnDelegate"
        },
        {
          "type": "doc",
          "id": "api/MLAPI.NetworkObject.VisibilityDelegate",
          "label": "VisibilityDelegate"
        },
        {
          "type": "doc",
          "id": "api/MLAPI.NetworkTickSystem",
          "label": "NetworkTickSystem"
        },
        {
          "type": "doc",
          "id": "api/MLAPI.NetworkUpdateLoop",
          "label": "NetworkUpdateLoop"
        },
        {
          "type": "doc",
          "id": "api/MLAPI.NetworkUpdateStage",
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
            "id": "api/MLAPI.Collections",
            "label": "Collections"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Collections.FixedQueue-1",
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
            "id": "api/MLAPI.Configuration",
            "label": "Configuration"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Configuration.HashSize",
            "label": "HashSize"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Configuration.NetworkConfig",
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
            "id": "api/MLAPI.Connection",
            "label": "Connection"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Connection.NetworkClient",
            "label": "NetworkClientNetworkClient"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Connection.PendingClient",
            "label": "PendingClient"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Connection.PendingClient.State",
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
            "id": "api/MLAPI.Exceptions",
            "label": "Exceptions"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Exceptions.InvalidChannelException",
            "label": "InvalidChannelException"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Exceptions.NetworkConfigurationException",
            "label": "NetworkConfigurationException"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Exceptions.NotListeningException",
            "label": "NotListeningException"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Exceptions.NotServerException",
            "label": "NotServerException"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Exceptions.SpawnStateException",
            "label": "SpawnStateException"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Exceptions.VisibilityChangeException",
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
            "id": "api/MLAPI.Logging",
            "label": "Logging"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Logging.LogLevel",
            "label": "LogLevel"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Logging.NetworkLog",
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
            "id": "api/MLAPI.Messaging",
            "label": "Messaging"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Messaging.ClientRpcAttribute",
            "label": "ClientRpcAttribute"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Messaging.ClientRpcParams",
            "label": "ClientRpcParams"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Messaging.ClientRpcReceiveParams",
            "label": "ClientRpcReceiveParams"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Messaging.ClientRpcSendParams",
            "label": "ClientRpcSendParams"
          },
          {
            "collapsed": true,
            "type": "category",
            "label": "CustomMessagingManager",
            "items": [
              {
                "type": "doc",
                "id": "api/MLAPI.Messaging.CustomMessagingManager",
                "label": "CustomMessagingManager"
              },
              {
                "type": "doc",
                "id": "api/MLAPI.Messaging.CustomMessagingManager.HandleNamedMessageDelegate",
                "label": "HandleNamedMessageDelegate"
              },
              {
                "type": "doc",
                "id": "api/MLAPI.Messaging.CustomMessagingManager.UnnamedMessageDelegate",
                "label": "UnnamedMessageDelegate"
              }
            ]
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Messaging.RpcAttribute",
            "label": "RpcAttribute"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Messaging.RpcParams",
            "label": "RpcParams"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Messaging.RpcDelivery",
            "label": "RpcDelivery"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Messaging.RpcQueueHistoryFrame",
            "label": "RpcQueueHistoryFrame"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Messaging.RpcQueueHistoryFrame.QueueFrameType",
            "label": "QueueFrameType"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Messaging.ServerRpcAttribute",
            "label": "ServerRpcAttribute"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Messaging.ServerRpcParams",
            "label": "ServerRpcParams"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Messaging.ServerRpcReceiveParams",
            "label": "ServerRpcReceiveParams"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Messaging.ServerRpcSendParams",
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
            "id": "api/MLAPI.NetworkManager",
            "label": "NetworkManager"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.NetworkManager.ConnectionApprovedDelegate",
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
            "id": "api/MLAPI.NetworkVariable",
            "label": "NetworkVariable"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.NetworkVariable.INetworkVariable",
            "label": "INetworkVariable"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.NetworkVariable.NetworkVariable-1",
            "label": "NetworkVariable-1"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.NetworkVariable.NetworkVariable-1.OnValueChangedDelegate",
            "label": "OnValueChangedDelegate"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.NetworkVariable.NetworkVariableBool",
            "label": "NetworkVariableBool"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.NetworkVariable.NetworkVariableByte",
            "label": "NetworkVariableByte"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.NetworkVariable.NetworkVariableColor",
            "label": "NetworkVariableColor"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.NetworkVariable.NetworkVariableColor32",
            "label": "NetworkVariableColor32"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.NetworkVariable.NetworkVariableDouble",
            "label": "NetworkVariableDouble"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.NetworkVariable.NetworkVariableFloat",
            "label": "NetworkVariableFloat"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.NetworkVariable.NetworkVariableInt",
            "label": "NetworkVariableInt"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.NetworkVariable.NetworkVariableLong",
            "label": "NetworkVariableLong"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.NetworkVariable.NetworkVariablePermission",
            "label": "NetworkVariablePermission"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.NetworkVariable.NetworkVariablePermissionsDelegate",
            "label": "NetworkVariablePermissionsDelegate"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.NetworkVariable.NetworkVariableQuaternion",
            "label": "NetworkVariableQuaternion"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.NetworkVariable.NetworkVariableRay",
            "label": "NetworkVariableRay"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.NetworkVariable.NetworkVariableSByte",
            "label": "NetworkVariableSByte"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.NetworkVariable.NetworkVariableSettings",
            "label": "NetworkVariableSettings"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.NetworkVariable.NetworkVariableShort",
            "label": "NetworkVariableShort"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.NetworkVariable.NetworkVariableString",
            "label": "NetworkVariableString"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.NetworkVariable.NetworkVariableUInt",
            "label": "NetworkVariableUInt"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.NetworkVariable.NetworkVariableULong",
            "label": "NetworkVariableULong"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.NetworkVariable.NetworkVariableUShort",
            "label": "NetworkVariableUShort"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.NetworkVariable.NetworkVariableVector2",
            "label": "NetworkVariableVector2"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.NetworkVariable.NetworkVariableVector3",
            "label": "NetworkVariableVector3"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.NetworkVariable.NetworkVariableVector4",
            "label": "NetworkVariableVector4"
          },
          {
            "collapsed": true,
            "type": "category",
            "label": "NetworkVariable.Collections",
            "items": [
              {
                "type": "doc",
                "id": "api/MLAPI.NetworkVariable.Collections",
                "label": "Collections"
              },
              {
                "type": "doc",
                "id": "api/MLAPI.NetworkVariable.Collections.NetworkDictionary-2",
                "label": "NetworkDictionary-2"
              },
              {
                "type": "doc",
                "id": "api/MLAPI.NetworkVariable.Collections.NetworkDictionary-2.OnDictionaryChangedDelegate",
                "label": "OnDictionaryChangedDelegate"
              },
              {
                "collapsed": true,
                "type": "category",
                "label": "NetworkDictionaryEvent-2",
                "items": [
                {
                  "type": "doc",
                  "id": "api/MLAPI.NetworkVariable.Collections.NetworkDictionaryEvent-2",
                  "label": "NetworkDictionaryEvent-2"
                },
                {
                  "type": "doc",
                  "id": "api/MLAPI.NetworkVariable.Collections.NetworkDictionaryEvent-2.EventType",
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
                  "id": "api/MLAPI.NetworkVariable.Collections.NetworkList-1",
                  "label": "NetworkList-1"
                },
                {
                  "type": "doc",
                  "id": "api/MLAPI.NetworkVariable.Collections.NetworkList-1.OnListChangedDelegate",
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
                    "id": "api/MLAPI.NetworkVariable.Collections.NetworkListEvent-1",
                    "label": "NetworkListEvent-1"
                  },
                  {
                    "type": "doc",
                    "id": "api/MLAPI.NetworkVariable.Collections.NetworkListEvent-1.EventType",
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
            "id": "api/MLAPI.Profiling",
            "label": "Profiling"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Profiling.IProfilableTransportProvider",
            "label": "IProfilableTransportProvider"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Profiling.NetworkProfiler",
            "label": "NetworkProfiler"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Profiling.PerformanceTickData",
            "label": "PerformanceTickData"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Profiling.ProfilerConstants",
            "label": "ProfilerConstants"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Profiling.ProfilerIncStat",
            "label": "ProfilerIncStat"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Profiling.ProfilerTick",
            "label": "ProfilerTick"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Profiling.ProfilerStat",
            "label": "ProfilerStat"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Profiling.ProfilerStatManager",
            "label": "ProfilerStatManager"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Profiling.ProfilingDataStore",
            "label": "ProfilingDataStore"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Profiling.TickEvent",
            "label": "TickEvent"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Profiling.TickType",
            "label": "TickType"
          },
          {
            "collapsed": true,
            "type": "category",
            "label": "ProfilerNotifier",
            "items": [
              {
                "type": "doc",
                "id": "api/MLAPI.Profiling.ProfilerNotifier",
                "label": "ProfilerNotifier"
              },
              {
                "type": "doc",
                "id": "api/MLAPI.Profiling.ProfilerNotifier.NoTickDataHandler",
                "label": "NoTickDataHandler"
              },
              {
                "type": "doc",
                "id": "api/MLAPI.Profiling.ProfilerNotifier.PerformanceDataEventHandler",
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
            "id": "api/MLAPI.SceneManagement",
            "label": "SceneManagement"
          },
          {
            "collapsed": true,
            "type": "category",
            "label": "NetworkSceneManager",
            "items": [
              {
                "type": "doc",
                "id": "api/MLAPI.SceneManagement.NetworkSceneManager",
                "label": "NetworkSceneManager"
              },
              {
                "type": "doc",
                "id": "api/MLAPI.SceneManagement.NetworkSceneManager.NotifyClientAllClientsLoadedSceneDelegate",
                "label": "NotifyClientAllClientsLoadedSceneDelegate"
              },
              {
                "type": "doc",
                "id": "api/MLAPI.SceneManagement.NetworkSceneManager.NotifyServerAllClientsLoadedSceneDelegate",
                "label": "NotifyServerAllClientsLoadedSceneDelegate"
              },
              {
                "type": "doc",
                "id": "api/MLAPI.SceneManagement.NetworkSceneManager.NotifyServerClientLoadedSceneDelegate",
                "label": "NotifyServerAllClientsLoadedSceneDelegate"
              },
            ]
          },
          {
            "type": "doc",
            "id": "api/MLAPI.SceneManagement.NetworkSceneManager.SceneSwitchedDelegate",
            "label": "SceneSwitchedDelegate"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.SceneManagement.NetworkSceneManager.SceneSwitchStartedDelegate",
            "label": "SceneSwitchStartedDelegate"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.SceneManagement.SceneSwitchProgress.OnClientLoadedSceneDelegate",
            "label": "OnClientLoadedSceneDelegate"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.SceneManagement.SceneSwitchProgress.OnCompletedDelegate",
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
            "id": "api/MLAPI.Serialization",
            "label": "Serialization"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Serialization.Arithmetic",
            "label": "Arithmetic"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Serialization.AutoNetworkSerializable",
            "label": "AutoNetworkSerializable"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Serialization.INetworkSerializable",
            "label": "INetworkSerializable"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Serialization.NetworkBuffer",
            "label": "NetworkBuffer"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Serialization.NetworkReader",
            "label": "NetworkReader"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Serialization.NetworkSerializer",
            "label": "NetworkSerializer"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Serialization.NetworkWriter",
            "label": "NetworkWriter"
          },
          {
            "collapsed": true,
            "type": "category",
            "label": "Serialization.Pooled",
            "items": [
              {
                "type": "doc",
                "id": "api/MLAPI.Serialization.Pooled",
                "label": "Pooled"
              },
              {
                "type": "doc",
                "id": "api/MLAPI.Serialization.Pooled.NetworkBufferPool",
                "label": "NetworkBufferPool"
              },
              {
                "type": "doc",
                "id": "api/MLAPI.Serialization.Pooled.NetworkReaderPool",
                "label": "NetworkReaderPool"
              },
              {
                "type": "doc",
                "id": "api/MLAPI.Serialization.Pooled.NetworkWriterPool",
                "label": "NetworkWriterPool"
              },
              {
                "type": "doc",
                "id": "api/MLAPI.Serialization.Pooled.PooledNetworkBuffer",
                "label": "PooledNetworkBuffer"
              },
              {
                "type": "doc",
                "id": "api/MLAPI.Serialization.Pooled.PooledNetworkReader",
                "label": "PooledNetworkReader"
              },
              {
                "type": "doc",
                "id": "api/MLAPI.Serialization.Pooled.PooledNetworkWriter",
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
                "id": "api/MLAPI.Serialization.SerializationManager",
                "label": "SerializationManager"
              },
              {
                "type": "doc",
                "id": "api/MLAPI.Serialization.SerializationManager.CustomDeserializationDelegate-1",
                "label": "CustomDeserializationDelegate-1"
              },
              {
                "type": "doc",
                "id": "api/MLAPI.Serialization.SerializationManager.CustomSerializationDelegate-1",
                "label": "CustomSerializationDelegate-1"
              }
            ]
          },
        ]
      },
      {
        "type": "doc",
        "id": "api/MLAPI.SnapshotSystem",
        "label": "SnapshotSystem"
      },
      {
        "collapsed": true,
        "type": "category",
        "label": "Spawning",
        "items": [
          {
            "type": "doc",
            "id": "api/MLAPI.Spawning",
            "label": "Spawning"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Spawning.NetworkSpawnManager",
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
            "id": "api/MLAPI.Transports",
            "label": "Transports"
          },
          {
            "collapsed": true,
            "type": "category",
            "label": "Transports.Multiplex",
            "items": [
              {
                "type": "doc",
                "id": "api/MLAPI.Transports.Multiplex",
                "label": "Multiplex"
              },
              {
                "type": "doc",
                "id": "api/MLAPI.Transports.Multiplex.MultiplexTransportAdapter",
                "label": "MultiplexTransportAdapter"
              },
              {
                "type": "doc",
                "id": "api/MLAPI.Transports.Multiplex.MultiplexTransportAdapter.ConnectionIdSpreadMethod",
                "label": "ConnectionIdSpreadMethod"
              }
            ]
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Transports.NetworkChannel",
            "label": "NetworkChannel"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Transports.NetworkDelivery",
            "label": "NetworkDelivery"
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Transports.NetworkEvent",
            "label": "NetworkEvent"
          },
          {
            "collapsed": true,
            "type": "category",
            "label": "Transports.NetworkTransport",
            "items": [
              {
                "type": "doc",
                "id": "api/MLAPI.Transports.NetworkTransport",
                "label": "NetworkTransport"
              },
              {
                "type": "doc",
                "id": "api/MLAPI.Transports.NetworkTransport.RequestChannelsDelegate",
                "label": "RequestChannelsDelegate"
              },
              {
                "type": "doc",
                "id": "api/MLAPI.Transports.NetworkTransport.TransportEventDelegate",
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
                "id": "api/MLAPI.Transports.Tasks",
                "label": "Tasks"
              },
              {
                "type": "doc",
                "id": "api/MLAPI.Transports.Tasks.SocketTask",
                "label": "SocketTask"
              },
              {
                "type": "doc",
                "id": "api/MLAPI.Transports.Tasks.SocketTasks",
                "label": "SocketTasks"
              }
            ]
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Transports.TransportChannel",
            "label": "TransportChannel"
          },
          {
            "collapsed": true,
            "type": "category",
            "label": "Transports.UNET",
            "items": [
              {
                "type": "doc",
                "id": "api/MLAPI.Transports.UNET",
                "label": "UNET"
              },
              {
                "type": "doc",
                "id": "api/MLAPI.Transports.UNET.InvalidConfigException",
                "label": "InvalidConfigException"
              },
              {
                "type": "doc",
                "id": "api/MLAPI.Transports.UNET.ProfilerConstants",
                "label": "ProfilerConstants"
              },
              {
                "type": "doc",
                "id": "api/MLAPI.Transports.UNET.UNetTransport.SendMode",
                "label": "SendMode"
              },
              {
                "type": "doc",
                "id": "api/MLAPI.Transports.UNET.UNetTransport",
                "label": "UNetTransport"
              }
            ]
          },
          {
            "type": "doc",
            "id": "api/MLAPI.Transports.UNetChannel",
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
