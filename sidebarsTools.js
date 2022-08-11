module.exports = {
    "tools": [
       /*/ {
            "type": "doc",
            "id": "about"
        }, /*/
        {
            "type": "doc",
            "id": "install-tools"
        },
        {
            "type": "doc",
            "id": "profiler"
        },
        {
            "type": "doc",
            "id": "RNSM"
        },
    ],

        "api": [
            {
                "type": "doc",
                "id": "api/introduction"
            },
            {
                "collapsed": true,
                "type": "category",
                "label": "Adapters",
                "items": [
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.Adapters",
                    },
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.Adapters.UnsubscribeFromAllAdapters",
                    },
                ],
            },
            {
                "collapsed": true,
                "type": "category",
                "label": "Common",
                "items": [
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.Common",
                    },
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.Common.VisualElementExtensions",
                    },
                ]
            },
            {
                "collapsed": true,
                "type": "category",
                "label": "Common Tests",
                "items": [
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.Common.Tests",
                    },
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.Common.Tests.ExponentialMovingAverageTests",
                    },
                ]
            },
            {
                "collapsed": true,
                "type": "category",
                "label": "Editor",
                "items": [
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.Editor",
                    },
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.Editor.NetStatsMonitorBuildSettings",
                    },
                ],
            },
            {
                "collapesd": true,
                "type": "category",
                "label": "Editor.NetworkSimulator",
                "items": [
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.Editor.NetworkSimulator",
                    },
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.Editor.NetworkSimulator.NetworkSimulatorBuildSettings",
                    },
                ],
            },
        ],
}
