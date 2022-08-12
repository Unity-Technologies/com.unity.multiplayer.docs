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
                "collapsed": true,
                "type": "category",
                "label": "Editor - Network Simulator",
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
            {
                "collapsed": true,
                "type": "category",
                "label": "Metric Types",
                "items": [
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.MetricTypes",
                    },
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.MetricTypes.DirectedMetricType",
                    },
                ],
            },
            {
                "collapsed": true,
                "type": "category",
                "label": "Metric Types - Tests",
                "items": [
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.MetricTypes.Tests",
                    },
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.MetricTypes.Tests.MetricTypeStringTests",
                    },
                ],
            },
            {
                "collapsed": true,
                "type": "category",
                "label": "Net Stats",
                "items": [
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.NetStats",
                    },
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.NetStats.AssemblyRequiresTypeRegistrationAttribute",
                    },
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.NetStats.MetricId",
                    },
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.NetStats.MetricIdTypeLibrary",
                    },
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.NetStats.MetricKind",
                    },
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.NetStats.MetricMetadataAttribute",
                    },
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.NetStats.MetricTypeEnumArttribute",
                    },
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.NetStats.Units",
                    },
                ],
            },
            {
                "collapsed": true,
                "type": "category",
                "label": "Net Stats - Tests",
                "items": [
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.NetStats.Tests",
                    },
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.NetStats.Tests.MetricFactoryTests",
                    },
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.NetStats.Tests.MetricIdTypeLibraryTests",
                    },
                ],
            },
            {
                "collapsed": true,
                "type": "category",
                "label": "Net Stats Monitor",
                "items": [
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.NetStatsMonitor",
                    },
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.NetStatsMonitor.AggregationMethod",
                    },
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.NetStatsMonitor.CounterConfiguration",
                    },
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.NetStatsMonitor.DisplayElementConfiguration",
                    },
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.NetStatsMonitor.DisplayElementType",
                    },
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.NetStatsMonitor.ExponentialMovingAverageParams",
                    },
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.NetStatsMonitor.GraphConfiguration",
                    },
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.NetStatsMonitor.GraphXAxisType",
                    },
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.NetStatsMonitor.LineGraphConfiguration",
                    },
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.NetStatsMonitor.NetStatsMonitorConfiguration",
                    },
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.NetStatsMonitor.PositionConfiguration",
                    },
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.NetStatsMonitor.RuntimeNetStatsMonitor",
                    },
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.NetStatsMonitor.SimpleMovingAverageParams",
                    },
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.NetStatsMonitor.SmoothingMethod",
                    },
                ],
            },
            {
                "collapsed": true,
                "type": "category",
                "label": "Net Stats Monitor - Tests",
                "items": [
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.NetStatsMonitor.Tests",
                    },
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.NetStatsMonitor.Tests.RnsmCustomDataDisplayUpdateTests",
                    },
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.NetStatsMonitor.Tests.RnsmDisplayUpdateStatus",
                    },
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.NetStatsMonitor.Tests.RnsmDisplayUpdateTests",
                    },
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.NetStatsMonitor.Tests.RnsmVisibilityTests",
                    },
                ],
            },
            {
                "collapsed": true,
                "type": "category",
                "label": "Net Stats Monitor - Tests - Interface",
                "items": [
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.NetStatsMonitor.Tests.Interface",
                    },
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.NetStatsMonitor.Tests.Interface.RnsmComponentTests",
                    },
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.NetStatsMonitor.Tests.Interface.RnsmHelper",
                    },
                ],
            },
            {
                "collapsed": true,
                "type": "category",
                "label": "Net Stats Monitor - Tests - Interface - Configuration",
                "items": [
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.NetStatsMonitor.Tests.Interface.Configuration",
                    },
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.NetStatsMonitor.Tests.Interface.Configuration.CounterConfigurationTests",
                    },
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.NetStatsMonitor.Tests.Interface.Configuration.DisplayElementConfigurationTest",
                    },
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.NetStatsMonitor.Tests.Interface.Configuration.GraphConfigurationTests",
                    },
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.NetStatsMonitor.Tests.Interface.Configuration.LineGraphConfigurationTests",
                    },
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.NetStatsMonitor.Tests.Interface.Configuration.PositionConfigurationTests",
                    },
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.NetStatsMonitor.Tests.Interface.Configuration.RuntimeNetStatsMonitorTest",
                    },
                ],
            },
            {
                "collapsed": true,
                "type": "category",
                "label": "Net Stats Monitor - Tests - Stats",
                "items": [
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.NetStatsMonitor.Tests.Stats",
                    },
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.NetStatsMonitor.Tests.Stats.StatHistoryRequirementsTests",
                    },
                ],
            },
            {
                "collapsed": true,
                "type": "category",
                "label": "Tests - Editor",
                "items": [
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.Tests.Editor",
                    },
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.Tests.Editor.BuildSettingsTests",
                    },
                    {
                        "type": "doc",
                        "id": "api/Unity.Multiplayer.Tools.Tests.Editor.BuildSymbolTests",
                    },
                ],
            },
        ],
}
