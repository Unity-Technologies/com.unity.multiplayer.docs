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
            type: 'doc',
            id: 'virtual-players'
        },
        {
            collapsed: true,
            type: 'category',
            label: 'Create Player Tags',
            link: {type: 'doc', id: 'player-tags/player-tags'},
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
            id: 'synchronize'
        },
        {
            type: 'doc',
            id: 'mtt-terms'
        },
    ],
}
