---
id: scene-management-overview
title: Scene Management Overview
sidebar_label: Scene Management Overview
---
## Netcode Scene Management
Generally speaking, scene management complexity can vary depending upon your project's needs and goals. Netcode for GameObjects (Netcode) provides you with two potential paths:

### Integrated Scene Management:  
- The scene management solution that comes with Netcode for GameObjects.
  - This is enabled by default and provides you with a fully functional netcode scene management solution. We
  - [Learn More About Integrated Scene Management](using-networkscenemanager.md)

### Custom Scene Management: 
  - If your project has needs that go beyond the scope of the Netcode integrated scene management solution, you can disable scene management in the `NetworkManager`'s properties.  _We highly recommend giving the integrated scene management a try before diving into writing your own scene management solution_. 
    - [Learn More About Custom Scene Management](custom-management.md)

  :::Caution
    _Writing your own scene management can be time consuming and complex.  We highly recommend that only advanced users already familiar with Netcode for GameObjects take this path_
  :::



