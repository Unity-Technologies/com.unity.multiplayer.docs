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
    "label": "Migrating to MLAPI",
    "items": [
          {
        "type": "doc",
        "id": "getting-started/migratingtomlapi"
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
    "label": "Core Components",
    "items": [
      {
        "type": "doc",
        "id": "core-components/core-components"
      },
      {
        "type": "doc",
        "id": "core-components/networkmanager"
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
                "id": "advanced-topics/message-system/backward-compatibility"
              },
              {
                "type": "doc",
                "id": "advanced-topics/message-system/cross-compatibility"
              },
              {
                "type": "doc",
                "id": "advanced-topics/message-system/deprecation-of-return-values"
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
            "id": "advanced-topics/serialization/inetworkserializable-bitserializer"

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
  learn: [
    {
      "type": "doc",
      "id": "learn/introduction"
    },
    {
      "type": "doc",
      "id": "learn/faq"
    },
  ],
  releasenotes: [
    {
      "type": "doc",
      "id": "release-notes/introduction"
    },
    /*{
      "type": "doc",
      "id": "release-notes/multiplayer/mlapi-0-1-0"
    }, */
    {
      "type": "doc",
      "id": "release-notes/doc-changelog"
    },
  ],
  api: [
    {
      "collapsed": true,
      "type": "category",
      "label": "Overview",
      "items": [
        {
          "type": "doc",
          "id": "mlapi-api/introduction"
        },
        {
          "type": "doc",
          "id": "mlapi-api/MLAPI"
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
            "id": "mlapi-api/MLAPI.Configuration.NetworkedPrefab"
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
            "id": "mlapi-api/MLAPI.Connection.NetworkedClient"
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
        "label": "MLAPI.LagCompensation",
        "items": [
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.LagCompensation"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.LagCompensation.LagCompensationManager"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.LagCompensation.TrackedObject"
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
            "id": "mlapi-api/MLAPI.Messaging.ClientRPCAttribute"
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
            "id": "mlapi-api/MLAPI.Messaging.RPCAttribute"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Messaging.RpcDelegate"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Messaging.RpcResponse-1"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Messaging.ServerRPCAttribute"
          },
        ]
      },
      {
        "collapsed": true,
        "type": "category",
        "label": "MLAPI.NetworkedBehaviour",
        "items": [
          /*Hiding this file in /temp on root for now, 3.5mb
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkedBehaviour"
          },*/
          {
            "collapsed": true,
            "type": "category",
            "label": "MLAPI.NetworkedBehaviour.RpcMethod",
            "items": [
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.RpcMethod"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.RpcMethod-1"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.RpcMethod-2"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.RpcMethod-3"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.RpcMethod-4"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.RpcMethod-5"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.RpcMethod-6"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.RpcMethod-7"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.RpcMethod-8"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.RpcMethod-9"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.RpcMethod-10"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.RpcMethod-11"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.RpcMethod-12"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.RpcMethod-13"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.RpcMethod-14"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.RpcMethod-15"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.RpcMethod-16"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.RpcMethod-17"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.RpcMethod-18"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.RpcMethod-19"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.RpcMethod-20"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.RpcMethod-21"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.RpcMethod-22"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.RpcMethod-23"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.RpcMethod-24"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.RpcMethod-25"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.RpcMethod-26"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.RpcMethod-27"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.RpcMethod-28"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.RpcMethod-29"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.RpcMethod-30"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.RpcMethod-31"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.RpcMethod-32"
              },
            ]
          },
          {
            "collapsed": true,
            "type": "category",
            "label": "MLAPI.NetworkedBehaviour.ResponseRpcMethod",
            "items": [
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.ResponseRpcMethod-1"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.ResponseRpcMethod-2"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.ResponseRpcMethod-3"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.ResponseRpcMethod-4"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.ResponseRpcMethod-5"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.ResponseRpcMethod-6"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.ResponseRpcMethod-7"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.ResponseRpcMethod-8"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.ResponseRpcMethod-9"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.ResponseRpcMethod-10"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.ResponseRpcMethod-11"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.ResponseRpcMethod-12"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.ResponseRpcMethod-13"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.ResponseRpcMethod-14"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.ResponseRpcMethod-15"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.ResponseRpcMethod-16"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.ResponseRpcMethod-17"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.ResponseRpcMethod-18"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.ResponseRpcMethod-19"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.ResponseRpcMethod-20"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.ResponseRpcMethod-21"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.ResponseRpcMethod-22"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.ResponseRpcMethod-23"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.ResponseRpcMethod-24"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.ResponseRpcMethod-25"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.ResponseRpcMethod-26"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.ResponseRpcMethod-27"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.ResponseRpcMethod-28"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.ResponseRpcMethod-29"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.ResponseRpcMethod-30"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.ResponseRpcMethod-31"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.ResponseRpcMethod-32"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.NetworkedBehaviour.ResponseRpcMethod-33"
              },
            ]
          },
        ]
      },
      {
        "collapsed": true,
        "type": "category",
        "label": "MLAPI.NetworkedObject",
        "items": [
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkedObject"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkedObject.SpawnDelegate"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkedObject.VisibilityDelegate"
          },
        ]
      },
      {
        "collapsed": true,
        "type": "category",
        "label": "MLAPI.NetworkedVar.Collections",
        "items": [
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkedVar.Collections"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkedVar.Collections.NetworkedDictionary-2"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkedVar.Collections.NetworkedDictionary-2.OnDictionaryChangedDelegate"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkedVar.Collections.NetworkedDictionaryEvent-2"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkedVar.Collections.NetworkedDictionaryEvent-2.NetworkedListEventType"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkedVar.Collections.NetworkedList-1"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkedVar.Collections.NetworkedList-1.OnListChangedDelegate"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkedVar.Collections.NetworkedListEvent-1.EventType"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkedVar.Collections.NetworkedListEvent-1"
          },
        ]
      },
      {
        "collapsed": true,
        "type": "category",
        "label": "MLAPI.NetworkedVar",
        "items": [
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkedVar"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkedVar.INetworkedVar"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkedVar.NetworkedVar-1"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkedVar.NetworkedVar-1.OnValueChangedDelegate"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkedVar.NetworkedVarBool"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkedVar.NetworkedVarByte"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkedVar.NetworkedVarColor"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkedVar.NetworkedVarColor32"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkedVar.NetworkedVarDouble"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkedVar.NetworkedVarFloat"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkedVar.NetworkedVarInt"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkedVar.NetworkedVarLong"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkedVar.NetworkedVarPermission"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkedVar.NetworkedVarPermissionsDelegate"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkedVar.NetworkedVarQuaternion"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkedVar.NetworkedVarRay"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkedVar.NetworkedVarSByte"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkedVar.NetworkedVarSettings"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkedVar.NetworkedVarShort"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkedVar.NetworkedVarString"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkedVar.NetworkedVarUInt"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkedVar.NetworkedVarULong"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkedVar.NetworkedVarUShort"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkedVar.NetworkedVarVector2"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkedVar.NetworkedVarVector3"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkedVar.NetworkedVarVector4"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkedVar.SyncedVarAttribute"
          },
        ]
      },
      {
        "collapsed": true,
        "type": "category",
        "label": "MLAPI.NetworkingManager",
        "items": [
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkingManager"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.NetworkingManager.ConnectionApprovedDelegate"
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
            "id": "mlapi-api/MLAPI.Profiling.NetworkProfiler"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Profiling.ProfilerTick"
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
            "id": "mlapi-api/MLAPI.Prototyping.NetworkedAnimator"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Prototyping.NetworkedNavMeshAgent"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Prototyping.NetworkedTransform"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Prototyping.NetworkedTransform.MoveValidationDelegate"
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
        "label": "MLAPI.Security",
        "items": [
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Security"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Security.SecuritySendFlags"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Security.CryptographyHelper"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Security.CryptographyHelper.VerifyCertificateDelegate"
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
            "id": "mlapi-api/MLAPI.Serialization.AutoBitWritable"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Serialization.BitReader"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Serialization.BitStream"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Serialization.BitWriter"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Serialization.EndianHelper"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Serialization.IBitWritable"
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
                "id": "mlapi-api/MLAPI.Serialization.Pooled.BitReaderPool"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Serialization.Pooled.BitStreamPool"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Serialization.Pooled.BitWriterPool"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Serialization.Pooled.PooledBitReader"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Serialization.Pooled.PooledBitStream"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Serialization.Pooled.PooledBitWriter"
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
            "id": "mlapi-api/MLAPI.Spawning.SpawnManager"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Spawning.SpawnManager.DestroyHandlerDelegate"
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Spawning.SpawnManager.SpawnHandlerDelegate"
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
            "id": "mlapi-api/MLAPI.Transports.NetEventType"
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
            "collapsed": true,
            "type": "category",
            "label": "MLAPI.Transports.Transport",
            "items": [
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Transports.Transport"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Transports.Transport.RequestChannelsDelegate"
              },
              {
                "type": "doc",
                "id": "mlapi-api/MLAPI.Transports.Transport.TransportEventDelegate"
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
                "id": "mlapi-api/MLAPI.Transports.UNET.UnetTransport"
              },
            ]
          },
          {
            "type": "doc",
            "id": "mlapi-api/MLAPI.Transports.UnetChannel"
          },
        ]
      },
  ] 
}
