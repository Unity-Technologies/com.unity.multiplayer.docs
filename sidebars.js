module.exports = {
    "netcode": [
        {
            type: "doc",
            id: "about"
        },
        {
            "collapsed": true,
            "type": "category",
            "label": "Release Notes",
            "items": [
                {
                    type: "doc",
                    id: "release-notes/ngo-changelog",
                    label: "Netcode for GameObjects"
                },
                {
                    type: 'doc',
                    id: 'samples/release-notes/bossroom-changelog',
                    label: "Boss Room"
                },
                {
                    type: 'doc',
                    id: 'samples/release-notes/bitesize-changelog',
                    label: "Bitesize"
                },
            ],
        },
        {
            "type": "link",
            "label": "API Reference",
            "href": "https://docs.unity3d.com/Packages/com.unity.netcode.gameobjects@1.5/api/index.html",
        },
        {
            "collapsed": true,
            "type": "category",
            "label": "Get Started",
            "items": [
                {
                    "type": "doc",
                    "id": "installation/install"
                },
                {
                    "type": "doc",
                    "id": "installation/upgrade_from_mlapi",
                },
                {
                    "type": "doc",
                    "id": "installation/upgrade_from_UNet"
                },
                {
                    "type": "doc",
                    "id": "tutorials/get-started-ngo"
                },
                {
                    "type": "doc",
                    "id": "tutorials/command-line-helper"
                },
            ],
        },
        {
            "collapsed": true,
            "type": "category",
            "label": "Lag Conceptual Knowledge",
            "items": [
                    {
                        "type": "doc",
                        "id": "learn/ticks-and-update-rates",
                    },
                    {
                        "type": "doc",
                        "id": "learn/lagandpacketloss",
                    },
                    {
                        "type": "doc",
                        "id": "learn/clientside_interpolation",
                    },
                    {
                        "type": "doc",
                        "id": "learn/dealing-with-latency",
                    },
                ],
        },
        {
            "collapsed": true,
            "type": "category",
            "label": "Configuration",
            "items": [
                {
                    "type": "doc",
                    "id": "basics/connection-approval"
                },
                {
                    "type": "doc",
                    "id": "basics/max-players"
                },
                {
                    "type": "doc",
                    "id": "terms-concepts/network-topologies"
                },
                {
                    "type": "doc",
                    "id": "learn/listen-server-host-architecture"
                },
                {
                    "type": "doc",
                    "id": "advanced-topics/transports"
                },
                {
                    "type": "doc",
                    "id": "relay/relay"
                },
            ],
        },
        {
            "collapsed": true,
            "type": "category",
            "label": "Networking Components",
            "items": [
                {
                    "type": "doc",
                    "id": "basics/networkobject"
                },
                {
                    "type": "doc",
                    "id": "advanced-topics/networkobject-parenting",
                },
                {
                    "type": "doc",
                    "id": "basics/networkbehavior"
                },
                {
                    "type": "doc",
                    "id": "advanced-topics/physics"
                },
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
                    "label": "NetworkAnimator",
                    "id": "components/networkanimator"
                },
            ]
        },
        {
            "collapsed": true,
            "type": "category",
            "label": "Spawning and Ownership",
            "items": [
                {
                    "type": "doc",
                    "id": "basics/object-spawning"
                },
                {
                    "type": "doc",
                    "id": "advanced-topics/object-pooling"
                },
                {
                    "type": "doc",
                    "id": "basics/object-visibility"
                },
            ]
        },
        {
            "collapsed": true,
            "type": "category",
            "label": "Network Synchronization",
            "items": [
                {
                    "type": "doc",
                    "id": "advanced-topics/ways-synchronize"
                },                   
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
                                    "id": "basics/networkvariable"
                                },
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
                    "id": "advanced-topics/networktime-ticks"
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
                {
                    "type": "doc",
                    "id": "advanced-topics/fastbufferwriter-fastbufferreader"
                },
            ]
        },
        {
            "collapsed": true,
            "type": "category",
            "label": "Scene Management",
            "items": [
                {
                    "type": "doc",
                    "id": "basics/scenemanagement/scene-management-overview"
                },
                {
                    "collapsed": true,
                    "type": "category",
                    "label": "Integrated Management",
                    "items": [                                
                        {
                            "type": "doc",
                            "id": "basics/scenemanagement/using-networkscenemanager"
                        },
                        {
                            "type": "doc",
                            "id": "basics/scenemanagement/scene-events"
                        },
                        {
                            "type": "doc",
                            "id": "basics/scenemanagement/client-synchronization-mode"
                        },
                        {
                            "type": "doc",
                            "id": "basics/scenemanagement/timing-considerations"
                        },
                        {
                            "type": "doc",
                            "id": "basics/scenemanagement/inscene-placed-networkobjects"
                        }, 
                    ]
                },                
                {
                    "type": "doc",
                    "id": "basics/scenemanagement/custom-management"
                },                                                                                                     
            ]
        },
        {
            "collapsed": true,
            "type": "category",
            "label": "Session Management",
            "items": [
                {
                    "type": "doc",
                    "id": "advanced-topics/session-management"
                },
                {
                    "type": "doc",
                    "id": "advanced-topics/reconnecting-mid-game"
                },
            ],
        },
        {
            "collapsed": true,
            "type": "category",
            "label": "Testing and Debugging",
            "items": [
                {
                    "type": "doc",
                    "id": "tutorials/testing/testing_locally"
                },
                {
                    "type": "doc",
                    "id": "tutorials/testing/testing_with_artificial_conditions"
                },
                {
                    "type": "doc",
                    "id": "tutorials/testing/testing_client_connection_management"
                },
                {
                    "type": "doc",
                    "id": "basics/logging"
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
                },
            ]
        },
        {
            "collapsed": true,
            "type": "category",
            "label": "Educational Samples",
            "items": [
                {
                    "collapsed": true,
                    "type": "category",
                    "label": "Boss Room",
                    "items": [
                        {
                            "type": "doc",
                            "id": "learn/bossroom/bossroom"
                        },
                        {
                            "type": "doc",
                            "id": "learn/bossroom/bossroom-architecture"
                        },
                        {
                            "type": "doc",
                            "id": "learn/bossroom/bossroom-actions"
                        },
                        {
                            "type": "doc",
                            "id": "learn/bossroom/networkobject-parenting"
                        },
                        {
                            "type": "doc",
                            "id": "learn/bossroom/optimizing-bossroom"
                        },
                        {
                            "type": "doc",
                            "id": "learn/bossroom/networkrigidbody"
                        },
                        {
                            "type": "doc",
                            "id": "learn/bossroom/spawn-networkobjects"
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
                            "id": "learn/bitesize/bitesize-introduction"
                        },
                        {
                            "type": "doc",
                            "id": "learn/bitesize/bitesize-invaders"
                        },
                        {
                            "type": "doc",
                            "id": "learn/bitesize/bitesize-spaceshooter"
                        },
                        {
                            "type": "doc",
                            "id": "learn/bitesize/bitesize-clientdriven"
                        },
                        {
                            "type": "doc",
                            "id": "learn/bitesize/bitesize-dynamicPrefabs"
                        },
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
                    "type": "doc",
                    "id": "community-contributions/codemonkey"
                },
                {
                    "type": "doc",
                    "id": "community-contributions/dilmer"
                },
                {
                    "type": "doc",
                    "id": "community-contributions/dapper"
                },
            ]
        },
        {
            "type": "doc",
            "id": "learn/faq",
        },
        {
            "type": "doc",
            "id": "terms-concepts/mtt-terms"
        },
    ],
}