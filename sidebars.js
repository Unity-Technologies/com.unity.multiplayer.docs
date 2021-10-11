/*
* This file creates the left navigation table of contents for the site.
* types: category (section of content), doc (markdown file), ref (markdown page, no navigation), link (webpage)
* id: id of the markdown file, includes subdirectory names
*/

module.exports = {
  Netcode: [
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
        "id": "migration/migratingtonetcode"
      },
      {
        "type": "doc",
        "id": "migration/migratingfromnetcode"
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
    "label": "Learning Netcode with Goldenpath",
    "items": [
      {
        "type": "doc",
        "id": "tutorials/goldenpath_series/netcode_starting_out"
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
    "label": "Local Iteration ",
    "items": [
      {
        "type": "doc",
        "id": "tutorials/local_iteration_series/testing_locally"
      }
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
        "id": "getting-started/max-players"
      },
      {
        "type": "doc",
        "id": "netcode-basics/networkobject"
      },
      {
        "type": "doc",
        "id": "netcode-basics/networkbehavior"
        
      },

      {
        "type": "doc",
        "id": "advanced-topics/networkobject-parenting"
      },

      {
        "type": "doc",
        "id": "netcode-basics/networkbehavior"
      },
      {
        "type": "doc",
        "id": "netcode-basics/modularity"
      },
      {
        "type": "doc",
        "id": "netcode-basics/networkvariable"
      },
      {
        "type": "doc",
        "id": "netcode-basics/object-visibility"
      },
      {
        "type": "doc",
        "id": "advanced-topics/networkwriter-networkreader-networkbuffer"
      },
      {
        "type": "doc",
        "id": "advanced-topics/networktime-ticks"
      },
      {
        "type": "doc",
        "id": "advanced-topics/physics"
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
        "id": "netcode-basics/object-spawning"
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
      {
        "type": "doc",
        "id": "advanced-topics/serialization/networkobject-serialization"
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
        "id": "netcode-basics/scene-management"
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
        "id": "netcode-basics/logging"
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
    {
      "collapsed": true,
      "type": "category",
      "label": "Solutions",
      "items": [
    {
      "type": "doc",
      "id": "advanced-topics/inscene-parenting-players"
    },
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
          {
          "type": "doc",
          "id": "learn/dapper/dapper-variable-permissions"
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
      "id": "netcode-api/introduction"
    },
    {
      "collapsed": true,
      "type": "category",
      "label": "Netcode",
      "items": [
        {
          "type": "doc",
          "id": "netcode-api/Unity.Netcode",
          "label": "Netcode APIs",
        },
        {
          "type": "doc",
          "id": "netcode-api/Unity.Netcode.INetworkUpdateSystem",
          "label": "INetworkUpdateSystem"
        },
        {
          "type": "doc",
          "id": "netcode-api/Unity.Netcode.NetworkBehaviour",
          "label": "NetworkBehaviour"
        },
        {
          "type": "doc",
          "id": "netcode-api/Unity.Netcode.NetworkBehaviourUpdater",
          "label": "NetworkBehaviourUpdater"
        },
        {
          "type": "doc",
          "id": "netcode-api/Unity.Netcode.NetworkObject",
          "label": "NetworkObject"
        },
        {
          "type": "doc",
          "id": "netcode-api/Unity.Netcode.NetworkObject.SpawnDelegate",
          "label": "SpawnDelegate"
        },
        {
          "type": "doc",
          "id": "netcode-api/Unity.Netcode.NetworkObject.VisibilityDelegate",
          "label": "VisibilityDelegate"
        },
        {
          "type": "doc",
          "id": "netcode-api/Unity.Netcode.NetworkTickSystem",
          "label": "NetworkTickSystem"
        },
        {
          "type": "doc",
          "id": "netcode-api/Unity.Netcode.NetworkUpdateLoop",
          "label": "NetworkUpdateLoop"
        },
        {
          "type": "doc",
          "id": "netcode-api/Unity.Netcode.NetworkUpdateStage",
          "label": "NetworkUpdateStage"
        },
        {
          "type": "doc",
          "id": "netcode-api/Unity.Netcode.IHasUpdateStage",
          "label": "IHasUpdateStage"
        },
        {
          "type": "doc",
          "id": "netcode-api/Unity.Netcode.INetworkPrefabInstanceHandler",
          "label": "INetworkPrefabInstanceHandler"
        },
     
        {
          "type": "doc",
          "id": "netcode-api/Unity.Netcode.INetworkStreamDriverConstructor",
          "label": "INetworkStreamDriverConstructor"
        },
        {
          "type": "doc",
          "id": "netcode-api/Unity.Netcode.NetworkDelivery",
          "label": "NetworkDelivery"
        },
        {
          "type": "doc",
          "id": "netcode-api/Unity.Netcode.NetworkEvent",
          "label": "NetworkEvent"
        },
        {
          "type": "doc",
          "id": "netcode-api/Unity.Netcode.NetworkPrefabHandler",
          "label": "NetworkPrefabHandler"
        },
        {
          "type": "doc",
          "id": "netcode-api/Unity.Netcode.StreamExtensions",
          "label": "StreamExtensions"
        },

        
      ],
    },
    {
    "collapsed": true,
        "type": "category",
        "label": "Time",
        "items": [
       
          {
            "type": "doc",
            "id": "netcode-api/Unity.Netcode.NetworkTime",
            "label": "NetworkTime"
          },
          {
            "type": "doc",
            "id": "netcode-api/Unity.Netcode.NetworkTimeSystem",
            "label": "NetworkTimeSystem"
          },
        ],
    },
     {
        "collapsed": true,
        "type": "category",
        "label": "Collections",
        "items": [
       
          {
            "type": "doc",
            "id": "netcode-api/Unity.Netcode.FixedQueue-1",
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
            "id": "netcode-api/Unity.Netcode.HashSize",
            "label": "HashSize"
          },
          {
            "type": "doc",
            "id": "netcode-api/Unity.Netcode.NetworkConfig",
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
            "id": "netcode-api/Unity.Netcode.NetworkClient",
            "label": "NetworkClient"
          },
          {
            "type": "doc",
            "id": "netcode-api/Unity.Netcode.PendingClient",
            "label": "PendingClient"
          },
          {
            "type": "doc",
            "id": "netcode-api/Unity.Netcode.PendingClient.State",
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
            "id": "netcode-api/Unity.Netcode.InvalidChannelException",
            "label": "InvalidChannelException"
          },
          {
            "type": "doc",
            "id": "netcode-api/Unity.Netcode.InvalidParentException",
            "label": "InvalidParentException"
          },
          {
            "type": "doc",
            "id": "netcode-api/Unity.Netcode.NetworkConfigurationException",
            "label": "NetworkConfigurationException"
          },
          {
            "type": "doc",
            "id": "netcode-api/Unity.Netcode.NotListeningException",
            "label": "NotListeningException"
          },
          {
            "type": "doc",
            "id": "netcode-api/Unity.Netcode.NotServerException",
            "label": "NotServerException"
          },
          {
            "type": "doc",
            "id": "netcode-api/Unity.Netcode.SpawnStateException",
            "label": "SpawnStateException"
          },
          {
            "type": "doc",
            "id": "netcode-api/Unity.Netcode.VisibilityChangeException",
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
            "id": "netcode-api/Unity.Netcode.LogLevel",
            "label": "LogLevel"
          },
          {
            "type": "doc",
            "id": "netcode-api/Unity.Netcode.NetworkLog",
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
            "id": "netcode-api/Unity.Netcode.ClientRpcAttribute",
            "label": "ClientRpcAttribute"
          },
          {
            "type": "doc",
            "id": "netcode-api/Unity.Netcode.ClientRpcParams",
            "label": "ClientRpcParams"
          },
          {
            "type": "doc",
            "id": "netcode-api/Unity.Netcode.ClientRpcReceiveParams",
            "label": "ClientRpcReceiveParams"
          },
          {
            "type": "doc",
            "id": "netcode-api/Unity.Netcode.ClientRpcSendParams",
            "label": "ClientRpcSendParams"
          },
          {
            "collapsed": true,
            "type": "category",
            "label": "CustomMessagingManager",
            "items": [
              {
                "type": "doc",
                "id": "netcode-api/Unity.Netcode.CustomMessagingManager",
                "label": "CustomMessagingManager"
              },
              {
                "type": "doc",
                "id": "netcode-api/Unity.Netcode.CustomMessagingManager.HandleNamedMessageDelegate",
                "label": "HandleNamedMessageDelegate"
              },
              {
                "type": "doc",
                "id": "netcode-api/Unity.Netcode.CustomMessagingManager.UnnamedMessageDelegate",
                "label": "UnnamedMessageDelegate"
              }
            ]
          },
          {
            "type": "doc",
            "id": "netcode-api/Unity.Netcode.RpcAttribute",
            "label": "RpcAttribute"
          },
               {
            "type": "doc",
            "id": "netcode-api/Unity.Netcode.RpcDelivery",
            "label": "RpcDelivery"
          },
          {
            "type": "doc",
            "id": "netcode-api/Unity.Netcode.ServerRpcAttribute",
            "label": "ServerRpcAttribute"
          },
          {
            "type": "doc",
            "id": "netcode-api/Unity.Netcode.ServerRpcParams",
            "label": "ServerRpcParams"
          },
          {
            "type": "doc",
            "id": "netcode-api/Unity.Netcode.ServerRpcReceiveParams",
            "label": "ServerRpcReceiveParams"
          },
          {
            "type": "doc",
            "id": "netcode-api/Unity.Netcode.ServerRpcSendParams",
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
            "id": "netcode-api/Unity.Netcode.NetworkManager",
            "label": "NetworkManager"
          },
          {
            "type": "doc",
            "id": "netcode-api/Unity.Netcode.NetworkManager.ConnectionApprovedDelegate",
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
            "id": "netcode-api/Unity.Netcode.NetworkVariableBase",
            "label": "NetworkVariableBase"
          },
       
          {
            "type": "doc",
            "id": "netcode-api/Unity.Netcode.NetworkVariable-1",
            "label": "NetworkVariable-1"
          },
          {
            "type": "doc",
            "id": "netcode-api/Unity.Netcode.NetworkVariable-1.OnValueChangedDelegate",
            "label": "OnValueChangedDelegate"
          },
                {
            "type": "doc",
            "id": "netcode-api/Unity.Netcode.NetworkVariableReadPermission",
            "label": "NetworkVariableReadPermission"
          },
        ],
      },
       {
            "collapsed": true,
            "type": "category",
            "label": "NetworkList-1",
            "items": [
             
              {
                "collapsed": true,
                "type": "category",
                "label": "NetworkList-1",
                "items": [
                {
                  "type": "doc",
                  "id": "netcode-api/Unity.Netcode.NetworkList-1",
                  "label": "NetworkList-1"
                },
                {
                  "type": "doc",
                  "id": "netcode-api/Unity.Netcode.NetworkList-1.OnListChangedDelegate",
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
                    "id": "netcode-api/Unity.Netcode.NetworkListEvent-1",
                    "label": "NetworkListEvent-1"
                  },
                  {
                    "type": "doc",
                    "id": "netcode-api/Unity.Netcode.NetworkListEvent-1.EventType",
                    "label": "EventType"
                  }
                ]
              }
            ]
          },
        
      {
        "collapsed": true,
        "type": "category",
        "label": "SceneEvent",
        "items": [
                
              {
                "type": "doc",
                "id": "netcode-api/Unity.Netcode.SceneEvent",
                "label": "SceneEvent"
              },
              {
                "type": "doc",
                "id": "netcode-api/Unity.Netcode.SceneEventData",
                "label": "SceneEventData"
              },
              {
                "type": "doc",
                "id": "netcode-api/Unity.Netcode.SceneEventData.SceneEventTypes",
                "label": "SceneEventData.SceneEventTypes"
              },
              {
                "type": "doc",
                "id": "netcode-api/Unity.Netcode.SceneEventProgressStatus",
                "label": "SceneEventProgressStatus"
              },
      ]
      },
      
      {
        "collapsed": true,
        "type": "category",
        "label": "SceneManagement",
        "items": [
               
              {
                "type": "doc",
                "id": "netcode-api/Unity.Netcode.NetworkSceneManager",
                "label": "NetworkSceneManager"
              },
              {
                "type": "doc",
                "id": "netcode-api/Unity.Netcode.NetworkSceneManager.SceneEventDelegate",
                "label": "SceneEventDelegate"
              },
              {
                "type": "doc",
                "id": "netcode-api/Unity.Netcode.NetworkSceneManager.VerifySceneBeforeLoadingDelegateHandler",
                "label": "VerifySceneBeforeLoadingDelegateHandler"
              },
      ]
      },
      {
        "collapsed": true,
        "type": "category",
        "label": "ScoketTask",
        "items": [
               
              {
                "type": "doc",
                "id": "netcode-api/Unity.Netcode.SocketTask",
                "label": "SocketTask"
              },
              {
                "type": "doc",
                "id": "netcode-api/Unity.Netcode.SocketTasks",
                "label": "SocketTasks"
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
            "id": "netcode-api/Unity.Netcode.Arithmetic",
            "label": "Arithmetic"
          },
          {
            "type": "doc",
            "id": "netcode-api/Unity.Netcode.AutoNetworkSerializable",
            "label": "AutoNetworkSerializable"
          },
          {
            "type": "doc",
            "id": "netcode-api/Unity.Netcode.INetworkSerializable",
            "label": "INetworkSerializable"
          },
          {
            "type": "doc",
            "id": "netcode-api/Unity.Netcode.NetworkBuffer",
            "label": "NetworkBuffer"
          },
          {
            "type": "doc",
            "id": "netcode-api/Unity.Netcode.NetworkReader",
            "label": "NetworkReader"
          },
          {
            "type": "doc",
            "id": "netcode-api/Unity.Netcode.NetworkSerializer",
            "label": "NetworkSerializer"
          },
          {
            "type": "doc",
            "id": "netcode-api/Unity.Netcode.NetworkWriter",
            "label": "NetworkWriter"
          },
          {
            "type": "doc",
            "id": "netcode-api/Unity.Netcode.NetworkWriterPool",
            "label": "NetworkWriterPool"
          },
         
          {
            "type": "doc",
            "id": "netcode-api/Unity.Netcode.NetworkBufferPool",
            "label": "NetworkBufferPool"
          },
          {
            "type": "doc",
            "id": "netcode-api/Unity.Netcode.NetworkReaderPool",
            "label": "NetworkReaderPool"
          },
          {
            "type": "doc",
            "id": "netcode-api/Unity.Netcode.PooledNetworkBuffer",
            "label": "PooledNetworkBuffer"
          },  {
            "type": "doc",
            "id": "netcode-api/Unity.Netcode.PooledNetworkReader",
            "label": "PooledNetworkReader"
          },  {
            "type": "doc",
            "id": "netcode-api/Unity.Netcode.PooledNetworkWriter",
            "label": "PooledNetworkWriter"
          },     
         
          {
            "collapsed": true,
            "type": "category",
            "label": "Serialization.SerializationManager",
            "items": [
              {
                "type": "doc",
                "id": "netcode-api/Unity.Netcode.SerializationManager",
                "label": "SerializationManager"
              },
              {
                "type": "doc",
                "id": "netcode-api/Unity.Netcode.SerializationManager.CustomDeserializationDelegate-1",
                "label": "CustomDeserializationDelegate-1"
              },
              {
                "type": "doc",
                "id": "netcode-api/Unity.Netcode.SerializationManager.CustomSerializationDelegate-1",
                "label": "CustomSerializationDelegate-1"
              }
            ]
          },
        ]
      },
      {
        "collapsed": true,
        "type": "category",
        "label": "Spawning",
        "items": [
          {
            "type": "doc",
            "id": "netcode-api/Unity.Netcode.NetworkSpawnManager",
            "label": "NetworkSpawnManager"
          }
        ]
      },
      {
        "collapsed": true,
        "type": "category",
        "label": "NetworkTransport",
        "items": [
          {
            "type": "doc",
            "id": "netcode-api/Unity.Netcode.NetworkTransport",
            "label": "NetworkTransport"
          },
          {
            "type": "doc",
            "id": "netcode-api/Unity.Netcode.UnityTransport.ProtocolType",
            "label": "UnityTransport.ProtocolType"
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
            "id": "netcode-api/Unity.Netcode.UnityTransport",
            "label": "UnityTransport"
          },
          {
            "type": "doc",
            "id": "netcode-api/Unity.Netcode.UnityTransport.ProtocolType",
            "label": "ProtocolType"
          },
         
          {
            "collapsed": true,
            "type": "category",
            "label": "Transports.UNET",
            "items": [
              {
                "type": "doc",
                "id": "netcode-api/Unity.Netcode.Transports.UNET",
                "label": "UNET"
              },
                    
              {
                "type": "doc",
                "id": "netcode-api/Unity.Netcode.Transports.UNET.UNetChannel",
                "label": "UNetChannel"
              },
              {
                "type": "doc",
                "id": "netcode-api/Unity.Netcode.Transports.UNET.UNetTransport",
                "label": "UNetTransport"
              },
              {
                "type": "doc",
                "id": "netcode-api/Unity.Netcode.Transports.UNET.UNetTransport.SendMode",
                "label": "UNetTransport.SendMode"
              },
            ],
          }
        ]
      }
      
  ]
}
