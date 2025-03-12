---
id: debug-mppm
title: Debug Multiplayer Play Mode
description: Learn how to test a player running in Multiplayer Play Mode
---

Use the Test Runner included in the [Unity Test Framework (UTF)](https://docs.unity3d.com/Packages/com.unity.test-framework@2.0/manual/index.html) to test players in a multiplayer project.

:::note: 
Multiplayer Play Mode version 1.1.0 is compatible with Unity Editor versions 6000.0.3f1 or later. Multiplayer Play mode versions 1.0.0 and earlier are compatible with Unity version 2023.1 or later.
:::

## Test a player
To open the Test Runner window go to **Window** > **General** > **Test Runner**.

To learn how to run a test in Unity, refer to [Running Play Mode tests in a player](https://docs.unity3d.com/Packages/com.unity.test-framework@2.0/manual/workflow-run-playmode-test-standalone.html).

When you run a test with Multiplayer Play Mode installed the test runner indicates which player passed or failed a test. To learn more about test results in the test runner, use the [TestStatus enum](https://docs.unity3d.com/Packages/com.unity.test-framework@2.0/api/UnityEditor.TestTools.TestRunner.Api.TestStatus.html).
