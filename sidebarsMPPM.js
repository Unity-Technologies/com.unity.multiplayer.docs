module.exports = {
    'mppm': [
        {
            type: 'doc',
            id: 'release-notes/mppm-release-notes',
        },
        {
            type: 'doc',
            id: 'about'
        },
        {
            type: 'doc',
            id: 'sys-req'
        },
        {
            type: 'doc',
            id: 'install'
        },
        {
            collapsed: true,
            type: 'category',
            label: 'Virtual players',
            link: {type: 'doc', id: 'virtual-players/virtual-players'},
            items: [
                {
                    type: 'doc',
                    id: 'virtual-players/virtual-players-enable'
                },
                {
                    type: 'doc',
                    id: 'virtual-players/virtual-players-focus'
                },
                {
                    type: 'doc',
                    id: 'virtual-players/virtual-players-layout'
                },
            ]

        },
        {
            collapsed: true,
            type: 'category',
            label: 'Test live instances locally and remotely',
            link: {type: 'doc', id: 'play-mode-scenario/play-mode-scenario-about'},
            items: [
                {
                    type: 'doc',
                    id: 'play-mode-scenario/play-mode-scenario-req'
                },
                {
                    type: 'doc',
                    id: 'play-mode-scenario/play-mode-scenario-create'
                },
                {
                    type: 'doc',
                    id: 'play-mode-scenario/play-mode-scenario-configure-build'
                },
            ]

        },
        {
            collapsed: true,
            type: 'category',
            label: 'Information about tags',
            link: {type: 'doc', id: 'player-tags/player-tags'},
            items: [
                {
                    type: 'doc',
                    id: 'player-tags/player-tags-create'
                },
                {
                    collapsed: true,
                    type: 'category',
                    label: 'Configure tags',
                    link: {type: 'doc', id: 'player-tags/player-tags-configure'},
                    items: [
                    {
                        type: 'doc',
                        id: 'player-tags/target-instance'
                    },
                    {
                        type: 'doc',
                        id: 'player-tags/target-team'
                    },
                    {
                        type: 'doc',
                        id: 'player-tags/target-network'
                    },
                ]
                },
                {
                    type: 'doc',
                    id: 'player-tags/player-tags-attach'
                },
            ]
        },
        {
            collapsed: true,
            type: 'category',
            label: 'Use Multiplayer Play mode with a Dedicated Server',
            link: {type: 'doc', id: 'dedicated-server/play-mode-dedicated-server'},
            items: [
                {
                    type: 'doc',
                    id: 'dedicated-server/multiplayer-role'
                },
            ]
        },
        {
            type: 'doc',
            id: 'synchronize'
        },
        {
            type: 'doc',
            id: 'mtt-terms'
        },
        {
            collapsed: true,
            type: 'category',
            label: 'Troubleshooting',
            link: {type: 'doc', id: 'troubleshoot/troubleshooting'},
            items: [
                {
                    type: 'doc',
                    id: 'troubleshoot/debug-mppm'
                },
                {
                    type: 'doc',
                    id: 'troubleshoot/play-mode-scenario-troubleshoot'
                },
            ]
        },
        {
            collapsed: true,
            type: 'category',
            label: 'Reference',
            link: {type: 'doc', id: 'mppm-reference/mppm-reference-lp'},
            items: [
                {
                    type: 'doc',
                    id: 'mppm-reference/play-mode-scenario-dropdown-reference'
                },
                {
                    type: 'doc',
                    id: 'mppm-reference/play-mode-scenario-instances-status-reference'
                },
                {
                    type: 'doc',
                    id: 'mppm-reference/play-mode-scenario-window-reference'
                },
                {
                    type: 'doc',
                    id: 'mppm-reference/play-mode-status-window-reference'
                },
            ]
        },
    ]
} 
