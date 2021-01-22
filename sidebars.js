/*
* This file creates the left navigation table of contents for the site.
* types: category (section of content), doc (markdown file), ref (markdown page, no navigation), link (webpage)
* id: id of the markdown file, includes subdirectory names
*/
module.exports = {
  mlapi: [
    {
      "collapsed": true,
      "type": "category",
      "label": "Migration",
      "items": [
                {
          "type": "doc",
          "id": "migration/introduction"
        },
        {
          "collapsed": true,
          "type": "category",
          "label": "Project Settings ",
          "items": [
            {
              "type": "doc",
              "id": "migration/unet-mlapi/networkmanager-networkingmanager"
            },
            {
              "type": "doc",
              "id": "migration/unet-mlapi/networkmanagerhud"
            },
            {
              "type": "doc",
              "id": "migration/unet-mlapi/networkidentity-networkedobject"
            },
            {
              "type": "doc",
              "id": "migration/unet-mlapi/unetnetworktransform-networkedtransform"
            },
            {
              "type": "doc",
              "id": "migration/unet-mlapi/unetnetworkanimator-networkedanimator"
            },
          ]
        },
      ]
    },
  {
    "collapsed": true,
    "type": "category",
    "label": "Getting Started",
    "items": [
      {
        "type": "doc",
        "id": "about-mlapi"
      },
      {
        "type": "doc",
        "id": "getting-started/installation"
      },
      {
        "type": "doc",
        "id": "getting-started/library-initialization"
      },
      {
        "type": "doc",
        "id": "getting-started/connection-approval"
      }
    ]
  },
  {
    "collapsed": true,
    "type": "category",
    "label": "MLAPI Basics",
    "items": [
      {
        "type": "doc",
        "id": "mlapi-basics/messaging-system"
      },
      {
        "type": "doc",
        "id": "mlapi-basics/object-spawning"
      },
      {
        "type": "doc",
        "id": "mlapi-basics/object-behavior-relation"
      },
      {
        "type": "doc",
        "id": "mlapi-basics/modularity"
      },
      {
        "type": "doc",
        "id": "mlapi-basics/networkedvar"
      },
      {
        "type": "doc",
        "id": "mlapi-basics/syncedvar"
      },
      {
        "type": "doc",
        "id": "mlapi-basics/scene-management"
      },
      {
        "type": "doc",
        "id": "mlapi-basics/object-ownership"
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
        "id": "core-components/networkingmanager"
      },
      {
        "type": "doc",
        "id": "core-components/trackedobject"
      },
      {
        "type": "doc",
        "id": "core-components/networkedobject"
      },
      {
        "type": "doc",
        "id": "core-components/networkedbehavior"
      }
    ]
  },
  {
    "collapsed": true,
    "type": "category",
    "label": "Advanced Topics",
    "items": [
      {
        "type": "doc",
        "id": "advanced-topics/message-encryption"
      },
      {
        "type": "doc",
        "id": "advanced-topics/object-pooling"
      },
      {
        "type": "doc",
        "id": "advanced-topics/lag-compensation"
      },
      {
        "type": "doc",
        "id": "advanced-topics/bitwriter-bitreader-bitstream"
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
      },
      {
        "type": "doc",
        "id": "advanced-topics/boxing-systems"
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
      }
    ]
  }
],
  tools: [
    {
      "type": "doc",
      "id": "tools/introduction"
    },
  ],
  tutorials: [
    {
      "type": "doc",
      "id": "tutorials/introduction"
    },
  ],
  releasenotes: [
    {
      "type": "doc",
      "id": "release-notes/introduction"
    },
  ]
};
