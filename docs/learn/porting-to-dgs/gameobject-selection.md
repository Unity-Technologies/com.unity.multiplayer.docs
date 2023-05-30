---
id: gameobject-selection
title: GameObject Selection
---

Very often, the exact valid content of a scene differs between client and server versions. As an example,  cameras, rendering and UI components might not be required on the server side, while server related managers should not be included in clients.

Setting up a project with such a requirement, implies pushing the boundaries of the built-in tools provided by the Unity Editor. Creating duplicated scenes, using prefabs and variant patterns, and implementing custom scripts are some of the techniques that developers have to implement in order to achieve the desired result.

This represents a gap in the Server-Client workflow that negatively impacts the iteration time and development experience in general. This problem can be summarized in the following story:

As a user I want to be able to author my scenes and prefabs selecting which game objects and components should be present only in the server or client version with none to minimal duplicated content so that I save time and reduce the maintenance overhead.

selecting the content of a scene –game objects and components– and mark it as server/client only.

As a developer building a dedicated games server, I want to be able to find game objects and allocate them to either the client or the server from this UI.


As a developer building a dedicated games server, I want to be able to select which game objects and components I should keep for my server so that I can optimize my build. 

What is the user requesting and why is it useful to him ? 
Workflow

Go to Project Settings > Dedicated Server
Find the section “automatic selection” and add the type of components that needs to be always server/client only.
Details

Every time a scene is saved, the Editor will automatically mark the specified type of objects as server/client only.

As a dedicated server user, I want to be able to simultaneously select multiple game objects and place them on either the server or the client so that I can be more efficient. 
 
Definition of done

users can select multiple objects in the hierarchy and send them to either the server or the client by right clicking on them. 

As a developer building a dedicated games server, I want to be able to select which game objects and components I should keep for my server so that I can optimize my build. 

 

What is the user requesting and why is it useful to him ? 
Workflow
Open edit mode for a prefab.
Same process as described before for game object selection.
 
Details

When building or entering playmode, Unity will automatically strip the corresponding game objects and components from the prefab.

Referenced assets will also be automatically stripped from the final build.

Unity developer creating  an optimized dedicated server 

What is the user requesting and why is it useful to him ? 
The feature is to be able to remove the "client/selection" for all the items in the scene, the workflow is the following:

Open a scene.
In the hierarchy window, click the scene context menu button.
Select the option “Clear all Server-Client selection”.
All game objects and components selection data will be cleared for the scene. I.e. All objects will be restored to be included in all targets.
 

What are the boundaries and limits of the features that customers will receive ?
Addition of a sub-menu in the scene context menu the customer will be able to select either all the game objects, the components or the prefabs from the scene, user will also be able to remove all the selections in a single click.

As a developer building a dedicated games server, I want to be able to select which game objects and components I should keep for my server so that I can optimize my build. 

As a user, I don't want to have restrict an element to the server or the client if I need it to be present on both for my game to work as expected.

 

What is the user requesting and why is it useful to him ? 
  Workflow
Select and mark a game object or component as Server/Client only, that needs to be present and matched in both server and client (such as some NGO elements).
Details
The Editor provides visual feedback about the stripped object that will cause compatibility issues with NGO.
The Editor can also constraint and gray out NGO objects that should not be stripped. 
 

What are the boundaries and limits of the features that customers will receive ?
The Editor provides visual feedback that the element cannot be restricted to either the server or the client.

Workflow

Open a scene.
In the hierarchy window, select one or more game objects (could be prefab instances).
In the inspector window, find the “Multiplayer role” drop down and pick one of the options: Any, Server, Client.
When building or entering playmode, Unity will automatically strip the corresponding game objects (and all its children).

Referenced assets will also be automatically stripped from the final build.

As a developer building a dedicated games server, I want to be able to select which components I should keep for my server so that I can optimize my build. 

 

What is the user requesting and why is it useful to him ? 
Workflow 
Open a scene.
In the hierarchy window, select one or more game objects (could be prefab instances).
In the inspector window, in the component section, find the “Multiplayer type” drop down and pick one of the options: Server and Client, Server only, Client only.
Details
When building or entering playmode, Unity will automatically strip the corresponding components.

Referenced assets will also be automatically stripped from the final build.|

What are the boundaries and limits of the features that customers will receive ?
Works exactly the same way as the game Object Selection.