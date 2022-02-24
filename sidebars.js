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
        "id": "tools/install-tools",
      },
      {
        "type": "doc",
        "id": "migration/upgrade-guide",
      },
      {
        "type": "doc",
        "id": "migration/migratingtonetcode"
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
        "id": "advanced-topics/fastbufferwriter-fastbufferreader"
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
        "type": "doc",
        "id": "transport-utp/about-transport-utp"
      },
      {
        "collapsed": true,
        "type": "category",
        "label": "Transport UTP Wrapper APIs",
        "items": [
          {
            "type": "doc",
            "id": "transport-api/introduction"
          },
          {
            "type": "doc",
            "id": "transport-api/Assets.Scripts.Transport",
            "label": "Assets.Scripts.Transport",
          },
          {
            "type": "doc",
            "id": "transport-api/Assets.Scripts.Transport.Utilities",
            "label": "Assets.Scripts.Transport.Utilities",
          },
          {
            type: 'link',
            label: 'Unity Transport for Netcode APIs', // The link label
            href: 'https://docs.unity3d.com/Packages/com.unity.netcode.adapter.utp@1.0/api/Unity.Netcode.html', // The external URL
          },
        ]
      },
      {
        "collapsed": true,
        "type": "category",
        "label": "Relay",
        "items": [
          {
            "type": "doc",
            "id": "relay/relay"
          },
        ]
      },
      {
        "type": "doc",
        "id": "advanced-topics/session-management"
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
            "collapsed": true,
            "type": "category",
            "label": "RPCs vs NetworkVariables",
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
        "id": "advanced-topics/serialization/arrays"
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
        "id": "basics/scene-management"
      },
    ]
  },
    {
    "collapsed": true,
    "type": "category",
    "label": "Testing ",
    "items": [
      {
        "type": "doc",
        "id": "tutorials/testing/testing_locally"
      },
      {
        "type": "doc",
        "id": "tutorials/testing/testing_with_artificial_conditions"
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
        "id": "basics/logging"
      },
      {
        "type": "doc",
        "id": "basics/profiling"
      },
      {
        "type": "doc",
        "id": "tutorials/testing/techniques_and_tricks_for_debugging_multiplayer_games"
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
  "label": "Tutorials",
  "items": [
              {
                "collapsed": true,
                "type": "category",
                "label": "Learning Netcode with Goldenpath",
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
              "label": "Lag",
              "items": [
                  {
                    "type": "doc",
                    "id": "reference/glossary/ticks-and-update-rates"
                  },
                  {
                    "type": "doc",
                    "id": "learn/lagandpacketloss"
                      },
                  {
                    "type": "doc",
                    "id": "learn/clientside_interpolation"
                      },
                  {
                    "type": "doc",
                    "id": "learn/dealing-with-latency"
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
              "type": "doc",
              "id": "learn/bossroom-examples/bossroom-actions"
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
              "label": "Dilmer Tutorials",
              "items": [
                {
                  "type": "doc",
                  "id": "learn/dilmer/dilmer-video"
                },
                {
                  "type": "doc",
                  "id": "learn/dilmer/project-setup"
                },
                {
                  "type": "doc",
                  "id": "learn/dilmer/corefeatures"
                },
                {
                  "type": "doc",
                  "id": "learn/dilmer/networkanimator"
                },
                {
                  "type": "doc",
                  "id": "learn/dilmer/relay-service-setup"
                }
              ]
            },
            {
      
              "collapsed": true,
              "type": "category",
              "label": "Dapper Tutorials",
              "items": [
                {
                  "type": "doc",
                  "id": "learn/dapper/dapper-video"
                },
                {
                  "type": "doc",
                  "id": "learn/dapper/dapper-upgrade"
                },
              
              ]
            }
          ]
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
      "label": "Netcode",
      "items": [
        {
          "type": "doc",
          "id": "api/Unity.Netcode",
          "label": "Netcode APIs",
        },
        {
          "type": "doc",
          "id": "api/Unity.Netcode.INetworkUpdateSystem",
          "label": "INetworkUpdateSystem"
        },
        {
          "type": "doc",
          "id": "api/Unity.Netcode.NetworkBehaviour",
          "label": "NetworkBehaviour"
        },
        {
          "type": "doc",
          "id": "api/Unity.Netcode.NetworkBehaviourUpdater",
          "label": "NetworkBehaviourUpdater"
        },
        {
          "type": "doc",
          "id": "api/Unity.Netcode.NetworkObjectReference",
          "label": "NetworkObjectReference"
        },

        {
          "type": "doc",
          "id": "api/Unity.Netcode.NetworkObject.SpawnDelegate",
          "label": "SpawnDelegate"
        },
        {
          "type": "doc",
          "id": "api/Unity.Netcode.NetworkObject.VisibilityDelegate",
          "label": "VisibilityDelegate"
        },
        {
          "type": "doc",
          "id": "api/Unity.Netcode.NetworkTickSystem",
          "label": "NetworkTickSystem"
        },
        {
          "type": "doc",
          "id": "api/Unity.Netcode.NetworkUpdateLoop",
          "label": "NetworkUpdateLoop"
        },
        {
          "type": "doc",
          "id": "api/Unity.Netcode.NetworkUpdateStage",
          "label": "NetworkUpdateStage"
        },

        {
          "type": "doc",
          "id": "api/Unity.Netcode.INetworkPrefabInstanceHandler",
          "label": "INetworkPrefabInstanceHandler"
        },

        {
          "type": "doc",
          "id": "api/Unity.Netcode.INetworkStreamDriverConstructor",
          "label": "INetworkStreamDriverConstructor"
        },
        {
          "type": "doc",
          "id": "api/Unity.Netcode.NetworkDelivery",
          "label": "NetworkDelivery"
        },
        {
          "type": "doc",
          "id": "api/Unity.Netcode.NetworkEvent",
          "label": "NetworkEvent"
        },
        {
          "type": "doc",
          "id": "api/Unity.Netcode.NetworkPrefabHandler",
          "label": "NetworkPrefabHandler"
        },
        {
          "type": "doc",
          "id": "api/Unity.Netcode.StreamExtensions",
          "label": "StreamExtensions"
        },
        {
          "type": "doc",
          "id": "api/Unity.Netcode.BitCounter",
          "label": "BitCounter"
        },
        {
          "type": "doc",
          "id": "api/Unity.Netcode.BitReader",
          "label": "BitReader"
        },
        {
          "type": "doc",
          "id": "api/Unity.Netcode.BitWriter",
          "label": "BitWriter"
        },
        {
          "type": "doc",
          "id": "api/Unity.Netcode.BufferSerializer-1",
          "label": "BufferSerializer-1"
        },
        {
          "type": "doc",
          "id": "api/Unity.Netcode.BytePacker",
          "label": "BytePacker"
        },
        {
          "type": "doc",
          "id": "api/Unity.Netcode.ByteUnpacker",
          "label": "ByteUnpacker"
        },
        {
          "type": "doc",
          "id": "api/Unity.Netcode.ErrorUtilities",
          "label": "ErrorUtilities"
        },
        {
          "type": "doc",
          "id": "api/Unity.Netcode.FastBufferReader",
          "label": "FastBufferReader"
        },
        {
          "type": "doc",
          "id": "api/Unity.Netcode.FastBufferWriter",
          "label": "ByteUnpFastBufferWriteracker"
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
            "id": "api/Unity.Netcode.NetworkTime",
            "label": "NetworkTime"
          },
          {
            "type": "doc",
            "id": "api/Unity.Netcode.NetworkTimeSystem",
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
            "id": "api/Unity.Netcode.FixedQueue-1",
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
            "id": "api/Unity.Netcode.HashSize",
            "label": "HashSize"
          },
          {
            "type": "doc",
            "id": "api/Unity.Netcode.NetworkConfig",
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
            "id": "api/Unity.Netcode.NetworkClient",
            "label": "NetworkClient"
          },
          {
            "type": "doc",
            "id": "api/Unity.Netcode.PendingClient",
            "label": "PendingClient"
          },
          {
            "type": "doc",
            "id": "api/Unity.Netcode.PendingClient.State",
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
            "id": "api/Unity.Netcode.InvalidChannelException",
            "label": "InvalidChannelException"
          },
          {
            "type": "doc",
            "id": "api/Unity.Netcode.InvalidParentException",
            "label": "InvalidParentException"
          },
          {
            "type": "doc",
            "id": "api/Unity.Netcode.NetworkConfigurationException",
            "label": "NetworkConfigurationException"
          },
          {
            "type": "doc",
            "id": "api/Unity.Netcode.NotListeningException",
            "label": "NotListeningException"
          },
          {
            "type": "doc",
            "id": "api/Unity.Netcode.NotServerException",
            "label": "NotServerException"
          },
          {
            "type": "doc",
            "id": "api/Unity.Netcode.SpawnStateException",
            "label": "SpawnStateException"
          },
          {
            "type": "doc",
            "id": "api/Unity.Netcode.VisibilityChangeException",
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
            "id": "api/Unity.Netcode.LogLevel",
            "label": "LogLevel"
          },
          {
            "type": "doc",
            "id": "api/Unity.Netcode.NetworkLog",
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
            "id": "api/Unity.Netcode.ClientRpcAttribute",
            "label": "ClientRpcAttribute"
          },
          {
            "type": "doc",
            "id": "api/Unity.Netcode.ClientRpcParams",
            "label": "ClientRpcParams"
          },
          {
            "type": "doc",
            "id": "api/Unity.Netcode.ClientRpcReceiveParams",
            "label": "ClientRpcReceiveParams"
          },
          {
            "type": "doc",
            "id": "api/Unity.Netcode.ClientRpcSendParams",
            "label": "ClientRpcSendParams"
          },
          {
            "collapsed": true,
            "type": "category",
            "label": "CustomMessagingManager",
            "items": [
              {
                "type": "doc",
                "id": "api/Unity.Netcode.CustomMessagingManager",
                "label": "CustomMessagingManager"
              },
              {
                "type": "doc",
                "id": "api/Unity.Netcode.CustomMessagingManager.HandleNamedMessageDelegate",
                "label": "HandleNamedMessageDelegate"
              },
              {
                "type": "doc",
                "id": "api/Unity.Netcode.CustomMessagingManager.UnnamedMessageDelegate",
                "label": "UnnamedMessageDelegate"
              }
            ]
          },
          {
            "type": "doc",
            "id": "api/Unity.Netcode.RpcAttribute",
            "label": "RpcAttribute"
          },
               {
            "type": "doc",
            "id": "api/Unity.Netcode.RpcDelivery",
            "label": "RpcDelivery"
          },
          {
            "type": "doc",
            "id": "api/Unity.Netcode.ServerRpcAttribute",
            "label": "ServerRpcAttribute"
          },
          {
            "type": "doc",
            "id": "api/Unity.Netcode.ServerRpcParams",
            "label": "ServerRpcParams"
          },
          {
            "type": "doc",
            "id": "api/Unity.Netcode.ServerRpcReceiveParams",
            "label": "ServerRpcReceiveParams"
          },
          {
            "type": "doc",
            "id": "api/Unity.Netcode.ServerRpcSendParams",
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
            "id": "api/Unity.Netcode.NetworkManager",
            "label": "NetworkManager"
          },
          {
            "type": "doc",
            "id": "api/Unity.Netcode.NetworkManager.ConnectionApprovedDelegate",
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
            "id": "api/Unity.Netcode.NetworkVariableBase",
            "label": "NetworkVariableBase"
          },

          {
            "type": "doc",
            "id": "api/Unity.Netcode.NetworkVariable-1",
            "label": "NetworkVariable-1"
          },
          {
            "type": "doc",
            "id": "api/Unity.Netcode.NetworkVariable-1.OnValueChangedDelegate",
            "label": "OnValueChangedDelegate"
          },
                {
            "type": "doc",
            "id": "api/Unity.Netcode.NetworkVariableReadPermission",
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
                  "id": "api/Unity.Netcode.NetworkList-1",
                  "label": "NetworkList-1"
                },
                {
                  "type": "doc",
                  "id": "api/Unity.Netcode.NetworkList-1.OnListChangedDelegate",
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
                    "id": "api/Unity.Netcode.NetworkListEvent-1",
                    "label": "NetworkListEvent-1"
                  },
                  {
                    "type": "doc",
                    "id": "api/Unity.Netcode.NetworkListEvent-1.EventType",
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
                "id": "api/Unity.Netcode.SceneEvent",
                "label": "SceneEvent"
              },
              {
                "type": "doc",
                "id": "api/Unity.Netcode.SceneEventProgressStatus",
                "label": "SceneEventProgressStatus"
              },
              {
                "type": "doc",
                "id": "api/Unity.Netcode.SceneEventType",
                "label": "SceneEventType"
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
                "id": "api/Unity.Netcode.NetworkSceneManager",
                "label": "NetworkSceneManager"
              },
              {
                "type": "doc",
                "id": "api/Unity.Netcode.NetworkSceneManager.SceneEventDelegate",
                "label": "SceneEventDelegate"
              },
              {
                "type": "doc",
                "id": "api/Unity.Netcode.NetworkSceneManager.VerifySceneBeforeLoadingDelegateHandler",
                "label": "VerifySceneBeforeLoadingDelegateHandler"
              },
              {
                "type": "doc",
                "id": "api/Unity.Netcode.NetworkSceneManager.OnEventCompletedDelegateHandler",
                "label": "OnEventCompletedDelegateHandler"
              },
              {
                "type": "doc",
                "id": "api/Unity.Netcode.NetworkSceneManager.OnLoadCompleteDelegateHandler",
                "label": "OnLoadCompleteDelegateHandler"
              },
              {
                "type": "doc",
                "id": "api/Unity.Netcode.NetworkSceneManager.OnLoadDelegateHandler",
                "label": "OnLoadDelegateHandler"
              },
              {
                "type": "doc",
                "id": "api/Unity.Netcode.NetworkSceneManager.OnSynchronizeCompleteDelegateHandler",
                "label": "OnSynchronizeCompleteDelegateHandler"
              },
              {
                "type": "doc",
                "id": "api/Unity.Netcode.NetworkSceneManager.OnSynchronizeDelegateHandler",
                "label": "OnSynchronizeDelegateHandler"
              },
              {
                "type": "doc",
                "id": "api/Unity.Netcode.NetworkSceneManager.OnUnloadCompleteDelegateHandler",
                "label": "OnUnloadCompleteDelegateHandler"
              },
              {
                "type": "doc",
                "id": "api/Unity.Netcode.NetworkSceneManager.OnUnloadDelegateHandler",
                "label": "OnUnloadDelegateHandler"
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
            "id": "api/Unity.Netcode.Arithmetic",
            "label": "Arithmetic"
          },

          {
            "type": "doc",
            "id": "api/Unity.Netcode.INetworkSerializable",
            "label": "INetworkSerializable"
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
            "id": "api/Unity.Netcode.NetworkSpawnManager",
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
            "id": "api/Unity.Netcode.NetworkTransport",
            "label": "NetworkTransport"
          },
          {
            "type": "doc",
            "id": "api/Unity.Netcode.UnityTransport.ProtocolType",
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
            "id": "api/Unity.Netcode.UnityTransport",
            "label": "UnityTransport"
          },
          {
            "type": "doc",
            "id": "api/Unity.Netcode.UnityTransport.ProtocolType",
            "label": "ProtocolType"
          },

          {
            "collapsed": true,
            "type": "category",
            "label": "Transports.UNET",
            "items": [
              {
                "type": "doc",
                "id": "api/Unity.Netcode.Transports.UNET",
                "label": "UNET"
              },

              {
                "type": "doc",
                "id": "api/Unity.Netcode.Transports.UNET.UNetChannel",
                "label": "UNetChannel"
              },
              {
                "type": "doc",
                "id": "api/Unity.Netcode.Transports.UNET.UNetTransport",
                "label": "UNetTransport"
              },
              {
                "type": "doc",
                "id": "api/Unity.Netcode.Transports.UNET.UNetTransport.SendMode",
                "label": "UNetTransport.SendMode"
              },
            ],
          }
        ]
      }

  ]
}
