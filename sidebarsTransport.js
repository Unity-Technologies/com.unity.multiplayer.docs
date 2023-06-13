module.exports = {
    "transport": [
        {
            "type": "doc",
            "id": "about"
        },
        {
            "collapsed": true,
            "type": "category",
            "label": "Release Notes",
            "items": [
                {
                    type: 'doc',
                    id: 'release-notes/transport-2-0-0',
                },
                {
                    type: 'doc',
                    id: 'release-notes/transport-1-0-0',
                },
                {
                    type: 'doc',
                    id: 'release-notes/transport-1-0-0-pre',
                },
                {
                    type: 'doc',
                    id: 'release-notes/transport-0-8-0',
                },
            ]
        },
        {
            "type": "link",
            "label": "API Reference",
            "href": "https://docs.unity3d.com/Packages/com.unity.transport@latest",
        },
        {
            "type": "doc",
            "id": "install"
        },
        {
            "type": "doc",
            "id": "migration",
        },
        {
            "type": "doc",
            "id": "using-sample",
        },
        {
            "collapsed": true,
            "type": "category",
            "label": "Minimum client and server",
            "items": [
                {
                    "type": "doc",
                    "id": "minimal-workflow-udp",
                },
                {
                    "type": "doc",
                    "id": "minimal-workflow-ws",
                }
            ],
        },
        {
            "type": "doc",
            "id": "cross-play",
        },
        {
            "collapsed": true,
            "type": "category",
            "label": "Best practices",
            "items": [
                {
                    "type": "doc",
                    "id": "pipelines",
                },
                {
                    "collapsed": true,
                    "type": "category",
                    "label": "Improved client and server",
                    "items": [
                        {
                            "type": "doc",
                            "id": "jobs",
                        },
                        {
                            "type": "doc",
                            "id": "secure-connection",
                        },
                        {
                            "type": "doc",
                            "id": "integrate-logging",
                        },
                    ],
                },
            ],
        },
        {
            "collapsed": true,
            "type": "category",
            "label": "Extending functionalities",
            "items": [
                {
                    "type": "doc",
                    "id": "network-settings",
                },
            ],
        },
        {
            "type": "doc",
            "id": "utp-2-faq",
        },
        {
            "type": "doc",
            "id": "mtt-terms"
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
            "label": "Transport",
            "items": [
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport",
                    "label": "Transport"
                },
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.NetworkSettings",
                    "label": "NetworkSettings"
                },
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.BaselibNetworkInterface",
                    "label": "BaselibNetworkInterface"
                },
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.BaselibNetworkParameter",
                    "label": "BaselibNetworkParameter"
                },
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.BaselibNetworkParameterExtensions",
                    "label": "BaselibNetworkParameterExtensions"
                },
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.CommonNetworkParametersExtensions",
                    "label": "CommonNetworkParametersExtensions"
                },
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.DataStreamReader",
                    "label": "DataStreamReader"
                },
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.DataStreamWriter",
                    "label": "DataStreamWriter"
                },
                {
                    "collapsed": true,
                    "type": "category",
                    "label": "FragmentationPipelineStage",
                    "items": [
                        {
                            "type": "doc",
                            "id": "api/Unity.Networking.Transport.FragmentationPipelineStage",
                            "label": "FragmentationPipelineStage"
                        },
                        {
                            "type": "doc",
                            "id": "api/Unity.Networking.Transport.FragmentationPipelineStage.FragContext",
                            "label": "FragContext"
                        }
                    ]
                },
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.InboundRecvBuffer",
                    "label": "InboundRecvBuffer"
                },
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.InboundSendBuffer",
                    "label": "InboundSendBuffer"
                },
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.INetworkInterface",
                    "label": "INetworkInterface"
                },
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.INetworkParameter",
                    "label": "INetworkParameter"
                },
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.INetworkPipelineStage",
                    "label": "INetworkPipelineStage"
                },
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.IPCNetworkInterface",
                    "label": "IPCNetworkInterface"
                },
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.NetworkCompressionModel",
                    "label": "NetworkCompressionModel"
                },
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.NetworkConfigParameter",
                    "label": "NetworkConfigParameter"
                },
                {
                    "collapsed": true,
                    "type": "category",
                    "label": "NetworkConnection",
                    "items": [
                        {
                            "type": "doc",
                            "id": "api/Unity.Networking.Transport.NetworkConnection",
                            "label": "NetworkConnection"
                        },
                        {
                            "type": "doc",
                            "id": "api/Unity.Networking.Transport.NetworkConnection.State",
                            "label": "State"
                        }
                    ]
                },
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.NetworkDataStreamParameter",
                    "label": "NetworkDataStreamParameter"
                },
                {
                    "collapsed": true,
                    "type": "category",
                    "label": "NetworkDriver",
                    "items": [
                        {
                            "type": "doc",
                            "id": "api/Unity.Networking.Transport.NetworkDriver",
                            "label": "NetworkDriver"
                        },
                        {
                            "type": "doc",
                            "id": "api/Unity.Networking.Transport.NetworkDriver.Concurrent",
                            "label": "Concurrent"
                        }
                    ]
                },
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.NetworkEndPoint",
                    "label": "NetworkEndPoint"
                },
                {
                    "collapsed": true,
                    "type": "category",
                    "label": "NetworkEvent",
                    "items": [
                        {
                            "type": "doc",
                            "id": "api/Unity.Networking.Transport.NetworkEvent",
                            "label": "NetworkEvent"
                        },
                        {
                            "type": "doc",
                            "id": "api/Unity.Networking.Transport.NetworkEvent.Type",
                            "label": "Type"
                        }
                    ]
                },
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.NetworkFamily",
                    "label": "NetworkFamily"
                },
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.NetworkInterfaceEndPoint",
                    "label": "NetworkInterfaceEndPoint"
                },
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.NetworkInterfaceSendHandle",
                    "label": "NetworkInterfaceSendHandle"
                },
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.NetworkPacketReceiver",
                    "label": "NetworkPacketReceiver"
                },
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.NetworkPacketReceiver.AppendPacketMode",
                    "label": "AppendPacketMode "
                },

                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.NetworkParameterConstants",
                    "label": "NetworkParameterConstants"
                },
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.NetworkPipeline",
                    "label": "NetworkPipeline"
                },
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.NetworkPipelineContext",
                    "label": "NetworkPipelineContext"
                },
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.NetworkPipelineParams",
                    "label": "NetworkPipelineParams"
                },
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.NetworkPipelineParametersExtensions",
                    "label": "NetworkPipelineParametersExtensions"
                },
                {
                    "collapsed": true,
                    "type": "category",
                    "label": "NetworkPipelineStage",
                    "items": [
                        {
                            "type": "doc",
                            "id": "api/Unity.Networking.Transport.NetworkPipelineStage",
                            "label": "NetworkPipelineStage"
                        },
                        {
                            "type": "doc",
                            "id": "api/Unity.Networking.Transport.NetworkPipelineStageCollection",
                            "label": "NetworkPipelineStageCollection"
                        },
                        {
                            "type": "doc",
                            "id": "api/Unity.Networking.Transport.NetworkPipelineStageId",
                            "label": "NetworkPipelineStageId"
                        },
                        {
                            "type": "doc",
                            "id": "api/Unity.Networking.Transport.NetworkPipelineStage.InitializeConnectionDelegate",
                            "label": "InitializeConnectionDelegate"
                        },
                        {
                            "type": "doc",
                            "id": "api/Unity.Networking.Transport.NetworkPipelineStage.ReceiveDelegate",
                            "label": "ReceiveDelegate"
                        },
                        {
                            "type": "doc",
                            "id": "api/Unity.Networking.Transport.NetworkPipelineStage.Requests",
                            "label": "Requests"
                        },
                        {
                            "type": "doc",
                            "id": "api/Unity.Networking.Transport.NetworkPipelineStage.SendDelegate",
                            "label": "SendDelegate"
                        }
                    ]
                },
                {
                    "collapsed": true,
                    "type": "category",
                    "label": "NetworkSendInterface",
                    "items": [
                        {
                            "type": "doc",
                            "id": "api/Unity.Networking.Transport.NetworkSendInterface",
                            "label": "NetworkSendInterface"
                        },
                        {
                            "type": "doc",
                            "id": "api/Unity.Networking.Transport.NetworkSendInterface.AbortSendMessageDelegate",
                            "label": "AbortSendMessageDelegate"
                        },
                        {
                            "type": "doc",
                            "id": "api/Unity.Networking.Transport.NetworkSendInterface.BeginSendMessageDelegate",
                            "label": "BeginSendMessageDelegate"
                        },
                        {
                            "type": "doc",
                            "id": "api/Unity.Networking.Transport.NetworkSendInterface.EndSendMessageDelegate",
                            "label": "EndSendMessageDelegate"
                        }
                    ]
                },
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.NetworkSendQueueHandle",
                    "label": "NetworkSendQueueHandle"
                },
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.NullPipelineStage",
                    "label": "NullPipelineStage"
                },
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.QueuedSendMessage",
                    "label": "QueuedSendMessage"
                },
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.ReliableSequencedPipelineStage",
                    "label": "ReliableSequencedPipelineStage"
                },
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.SendHandleFlags",
                    "label": "SendHandleFlags"
                },
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.SimulatorPipelineStage",
                    "label": "SimulatorPipelineStage"
                },
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.SimulatorPipelineStageInSend",
                    "label": "SimulatorPipelineStageInSend"
                },
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.TransportFunctionPointer-1",
                    "label": "TransportFunctionPointer-1"
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
                    "id": "api/Unity.Networking.Transport.Relay",
                    "label": "Relay"
                },
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.Relay.RelayAllocationId",
                    "label": "RelayAllocationId"
                },
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.Relay.RelayConnectionData",
                    "label": "RelayConnectionData"
                },
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.Relay.RelayHMACKey",
                    "label": "RelayHMACKey"
                },
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.Relay.RelayNetworkParameter",
                    "label": "RelayNetworkParameter"
                },
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.Relay.RelayParameterExtensions",
                    "label": "RelayParameterExtensions"
                },
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.Relay.RelayServerData",
                    "label": "RelayServerData"
                }


            ]
        },
        {
            "collapsed": true,
            "type": "category",
            "label": "Error",
            "items": [
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.Error",
                    "label": "Error"
                },
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.Error.DisconnectReason",
                    "label": "DisconnectReason"
                },
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.Error.StatusCode",
                    "label": "StatusCode"
                }
            ]
        },
        {
            "collapsed": true,
            "type": "category",
            "label": "Utilities",
            "items": [
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.Utilities",
                    "label": "Utilities"
                },
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.Utilities.FixedStringHexExt",
                    "label": "FixedStringHexExt"
                },
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.Utilities.NativeListExt",
                    "label": "NativeListExt"
                },
                {
                    "collapsed": true,
                    "type": "category",
                    "label": "FragmentationUtility",
                    "items": [
                        {
                            "type": "doc",
                            "id": "api/Unity.Networking.Transport.Utilities.FragmentationUtility",
                            "label": "FragmentationUtility"
                        },
                        {
                            "type": "doc",
                            "id": "api/Unity.Networking.Transport.Utilities.FragmentationUtility.Parameters",
                            "label": "Parameters"
                        }
                    ]
                },
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.Utilities.RandomHelpers",
                    "label": "RandomHelpers"
                },
                {
                    "collapsed": true,
                    "type": "category",
                    "label": "ReliableUtility",
                    "items": [
                        {
                            "type": "doc",
                            "id": "api/Unity.Networking.Transport.Utilities.ReliableUtility",
                            "label": "ReliableUtility"
                        },
                        {
                            "type": "doc",
                            "id": "api/Unity.Networking.Transport.Utilities.ReliableUtility.Context",
                            "label": "Context"
                        },
                        {
                            "type": "doc",
                            "id": "api/Unity.Networking.Transport.Utilities.ReliableUtility.ErrorCodes",
                            "label": "ErrorCodes"
                        },
                        {
                            "type": "doc",
                            "id": "api/Unity.Networking.Transport.Utilities.ReliableUtility.Packet",
                            "label": "Packet"
                        }, {
                            "type": "doc",
                            "id": "api/Unity.Networking.Transport.Utilities.ReliableUtility.PacketHeader",
                            "label": "PacketHeader"
                        },
                        {
                            "type": "doc",
                            "id": "api/Unity.Networking.Transport.Utilities.ReliableUtility.PacketInformation",
                            "label": "PacketInformation"
                        },
                        {
                            "type": "doc",
                            "id": "api/Unity.Networking.Transport.Utilities.ReliableUtility.PacketTimers",
                            "label": "PacketTimers"
                        },
                        {
                            "type": "doc",
                            "id": "api/Unity.Networking.Transport.Utilities.ReliableUtility.PacketType",
                            "label": "PacketType"
                        },
                        {
                            "type": "doc",
                            "id": "api/Unity.Networking.Transport.Utilities.ReliableUtility.ParameterConstants",
                            "label": "ParameterConstants"
                        },
                        {
                            "type": "doc",
                            "id": "api/Unity.Networking.Transport.Utilities.ReliableUtility.Parameters",
                            "label": "Parameters"
                        },
                        {
                            "type": "doc",
                            "id": "api/Unity.Networking.Transport.Utilities.ReliableUtility.RTTInfo",
                            "label": "RTTInfo"
                        },
                        {
                            "type": "doc",
                            "id": "api/Unity.Networking.Transport.Utilities.ReliableUtility.SharedContext",
                            "label": "SharedContext"
                        },
                        {
                            "type": "doc",
                            "id": "api/Unity.Networking.Transport.Utilities.ReliableUtility.Statistics",
                            "label": "Statistics"
                        }
                    ]
                },
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.Utilities.SequenceBufferContext",
                    "label": "SequenceBufferContext"
                },
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.Utilities.SequenceHelpers",
                    "label": "SequenceHelpers"
                },
                {
                    "type": "doc",
                    "id": "api/Unity.Networking.Transport.Utilities.ReliableStageParameterExtensions",
                    "label": "ReliableStageParameterExtensions"
                },
                {
                    "type": "category",
                    "label": "Utility",
                    "items": [
                        {
                            "type": "doc",
                            "id": "api/Unity.Networking.Transport.Utilities.SimulatorStageParameterExtensions",
                            "label": "SimulatorStageParameterExtensions"
                        }, {
                            "type": "doc",
                            "id": "api/Unity.Networking.Transport.Utilities.SimulatorUtility",
                            "label": "SimulatorUtility"
                        },
                        {
                            "type": "doc",
                            "id": "api/Unity.Networking.Transport.Utilities.SimulatorUtility.Context",
                            "label": "Context"
                        },
                        {
                            "type": "doc",
                            "id": "api/Unity.Networking.Transport.Utilities.SimulatorUtility.DelayedPacket",
                            "label": "DelayedPacket"
                        },
                        {
                            "type": "doc",
                            "id": "api/Unity.Networking.Transport.Utilities.SimulatorUtility.Parameters",
                            "label": "Parameters"
                        },
                        {
                            "type": "doc",
                            "id": "api/Unity.Networking.Transport.Utilities.FixedStringHexExt",
                            "label": "FixedStringHexExt"
                        },
                        {
                            "type": "doc",
                            "id": "api/Unity.Networking.Transport.Utilities.FragmentationStageParameterExtensions",
                            "label": "FragmentationStageParameterExtensions"
                        },
                        {
                            "type": "doc",
                            "id": "api/Unity.Networking.Transport.Utilities.RandomHelpers",
                            "label": "RandomHelpers"
                        },
                        {
                            "type": "doc",
                            "id": "api/Unity.Networking.Transport.Utilities.SequenceBufferContext",
                            "label": "SequenceBufferContext"
                        },
                        {
                            "type": "doc",
                            "id": "api/Unity.Networking.Transport.Utilities.SequenceHelpers",
                            "label": "SequenceHelpers"
                        },
                        {
                            "type": "doc",
                            "id": "api/Unity.Networking.Transport.Utilities.NativeListExt",
                            "label": "NativeListExt"
                        }
                    ]
                }
            ]
        }
    ]
}
