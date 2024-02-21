module.exports = {
    'mppm': [
        {
            type: 'doc',
            id: 'about'
        },
        {
            type: 'doc',
            id: 'release-notes/mppm-release-notes',
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
            ]

        },
        {
            collapsed: true,
            type: 'category',
            label: 'Player Tags',
            link: {type: 'doc', id: 'player-tags/player-tags'},
            items: [
                {
                    type: 'doc',
                    id: 'player-tags/player-tags-create'
                },
                {
                    collapsed: true,
                    type: 'category',
                    label: 'Configure Player Tags',
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
            }
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
    ],

}
