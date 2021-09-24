---
id: goldenpath_three
title: Golden Path Module Three
description: Tutorial that explains how to use NetworkAnimator.
---



This  tutorial assumes you already know how to create a new scene equipped with a NetworkManager.
​
Start with a scene that has NetworkManager set up and the scene is added to the list of RegisteredSceneNames and Project scenes.
​
Next set up a networked animated object:
​
 - Create a GameObject with a cube model using `GameObject/3D Object/Cube` menu
 - Open the Animation window and select our gameObject in the Hierarchy
    - Create a new animation clip and name it `Cube_Rotate`
    - Add a keyframe at 0:00, setting the rotation to 0 on all axes
    - Add a keyframe at 1:00, set the rotation to 360 on Y axis
 - Add Animator component
 - Create new AnimatorController in the project and hook it up in the Animator of our gameObject:
    - Create two states: Idle and Rotate
    - Set the value of Motion field in Rotate state to the newly created `Cube_Rotate` animation
    - Create a boolean parameter called Rotate
    - Make a transition from Entry to Idle
    - Make a transition from Idle to Rotate and add a condition: Rotate is True
    - Make a transition from Rotate to Idle and add a condition: Rotate is False
 - Add NetworkObject component
 - Add NetworkAnimator component
    - Set up a reference to the Animator component
    - Select an AnimatorAuthority option, for illustration purposes select Server
 - Make the object a prefab by dragging it into the Project Window
 - Select `NetworkManager`
 - Find the `NetworkPrefabs` list section
 - Click `+` to create a slot
 - Drag this new prefab from above into the new empty slot (take care to drag the prefab from the project window, not the prefab instance left in the scene)
 - In the Project window right-click and choose `Create/C# Script`. Call the script `AnimatedCubeController`
 - Copy the following code into the file:
​
```
using MLAPI;
using MLAPI.Messaging;
using MLAPI.Prototyping;
using UnityEngine;
​
[RequireComponent(typeof(Animator))]
public class AnimatedCubeController : NetworkBehaviour
{
    private Animator m_Animator;
    private NetworkAnimator m_NetworkAnimator;
    
    private void Awake()
    {
        m_Animator = GetComponent<Animator>();
        m_NetworkAnimator = GetComponent<NetworkAnimator>();
    }
​
    public override void OnNetworkSpawn()
    {
        if (!IsOwner)
        {
            enabled = false;
        }
    }
    
    private void Update()
    {
        if (m_NetworkAnimator.IsAuthorityOverAnimator)
        {
            if(Input.GetKeyDown(KeyCode.Space))
            {
                ToggleRotateAnimation();
            }  
        }
    }
​
    private void ToggleRotateAnimation()
    {
        bool isRotating = m_Animator.GetBool("Rotate");
        m_Animator.SetBool("Rotate", !isRotating);
    }
}
```
 - Optional: To do a quick test, click play. Editor will start, and you will see the immobile cube. Now, without stopping the editor's play mode, navigate to the NetworkManager component in the Hierarchy tab (it will be underneath DontDestroyOnLoad). In the NetworkManager inspector scroll down and find the Start Host button. If you click it, no player objects will spawn, as we haven't set them up. However now when you press space, the cube starts and stops rotating. Now stop the player.
 - Choose "Build and run", kill the player and launch the client & server together in a terminal as shown in the previous steps. When pressing space on the Host expect the cube to start spinning and the animation will be replicated on the Client. If you hit space in the client window, nothing will happen.