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
    "label": "Learning MLAPI with Goldenpath",
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
    "label": "Local Iteration ",
    "items": [
      {
        "type": "doc",
        "id": "tutorials/local_iteration_series/local_iteration_testing_locally"
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
        "type": "doc",
        "id": "advanced-topics/networktime-ticks"
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

}