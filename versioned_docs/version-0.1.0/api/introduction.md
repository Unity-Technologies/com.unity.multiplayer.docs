---
id: introduction
title: API Overview
---

The MLAPI API reference provides information for availble classes, methods, delegates, and more. All content is generated from [source code](https://github.com/Unity-Technologies/com.unity.multiplayer.mlapi) using tools including [DocFX](https://dotnet.github.io/docfx/) and custom filters with [Pandoc](https://pandoc.org/) to convert to Markdown.

:::unity Content Licenses
All MLAPI code and documentation is covered by MIT license. See [Licenses](/reference/license) for more information.
:::

:::note
See [Document your code with XML comments](https://docs.microsoft.com/en-us/dotnet/csharp/codedoc) for guidance and examples. DocFX generates documentation using these comments.
:::

To document APIs, developers should add comments in code. For example:

```csharp
namespace MLAPI.Collections
{
    /// <summary>
    /// Queue with a fixed size
    /// </summary>
    /// <typeparam name="T">The type of the queue</typeparam>
    public sealed class FixedQueue<T>
    {
        private readonly T[] queue;
        private int queueCount = 0;
        private int queueStart;

        /// <summary>
        /// The amount of enqueued objects
        /// </summary>
        public int Count { get => queueCount; }

        /// <summary>
        /// Gets the element at a given virtual index
        /// </summary>
        /// <param name="index">The virtual index to get the item from</param>
        /// <returns>The element at the virtual index</returns>
        public T this[int index]

        ...
```