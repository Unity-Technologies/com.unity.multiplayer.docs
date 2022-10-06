---
id: network-settings
title: network settings
---

The configuration of the `NetworkDriver` is defined using the `NetworkSettings` API. It might be required to change some of the default values of the parameters, that can be done as in the following example.
```markdown title="NetworkSettings example"
var settings = new NetworkSettings();
settings.WithNetworkConfigParameters(disconnectTimeoutMS: 1000);
var driver = NetworkDriver.Create(settings);
```
## Extending the NetworkSettings
When extending Unity Transport it is often useful to add custom parameters or settings that users can set to define the configuration of the `NetworkDriver`.
That can be done by extending the `NetworkSettings` API so the custom Network Interfaces or Pipelines can capture the parameter values inside the Initialization method as detailed in the following sections.

### INetworkParameter
By implementing the `INetworkParameter` interface, any unmanaged struct can be identified as a network parameter that can be assigned to the `NetworkDriver` settings.

The `NetworkSettings` will automatically call the `Validate()` method and will throw an exception if `false` is returned.

```markdown title="INetworkParameter example"
public struct MyCustomParameter : INetworkParameter
{
    public int MyCustomInt;
    public float MyCustomFloat;

    public bool Validate()
    {
        if (MyCustomInt <= 0)
        {
            UnityEngine.Debug.LogError($"{nameof(MyCustomInt)} value ({MyCustomInt}) must be greater than 0");
            return false;
        }

        return true;
    }
}
```

### NetworkSettings extension methods
Every new custom `INetworkParameter` requires of at least one extension method to the `NetworkSettings` API. These extension methods must receive and return a `ref NetworkSettings` to ensure the proper functioning of the fluent interface.

Those constraints are checked by the Roslyn Analyzers provided in the Unity Transport package.

```markdown title="NetworkSettings extension methods example"
public static class MyCustomParameterExtensions
{
    private const int k_MyCustomIntDefault = 1024;
    private const float k_MyCustomFloatDefault = 1.0f;

    public static ref NetworkSettings WithMyCustomParameters(
        ref this NetworkSettings settings,
        int myCustomInt = k_MyCustomIntDefault,
        float myCustomFloat = k_MyCustomFloatDefault
    )
    {
        var parameter = new MyCustomParameter
        {
            MyCustomInt = myCustomInt,
            myCustomFloat = myCustomFloat,
        };

        settings.AddRawParameterStruct(ref parameter);

        return ref settings;
    }

    public static MyCustomParameter GetMyCustomParameters(ref this NetworkSettings settings)
    {
        if (!settings.TryGet<MyCustomParameter>(out var parameter))
        {
            parameter.MyCustomInt = k_MyCustomIntDefault;
            parameter.MyCustomFloat = k_MyCustomFloatDefault;
        }

        return parameter;
    }
}
```