---
id: template
title: Markdown Guide and Code
---

This guide details how to use Markdown and custom features available for this site. You can review Markdown code in this [GitHub file](https://github.com/Unity-Technologies/com.unity.multiplayer.docs/blob/master/reference/template.md) or in local cloned files in the */reference/template.md* file. You can write content using [GitHub-flavored Markdown syntax](https://github.github.com/gfm/). See the [Contributions Guide](https://github.com/Unity-Technologies/com.unity.multiplayer.docs/wiki) for details on creating and updating documentation.

## Markdown Syntax

To serve as an example page when styling markdown based Docusaurus sites.

:::important About File Names
The doc site requires all file names in lowercase, no spaces, with dashes used as needed. This includes Markdown, images, videos, and downloadable files.
:::

## Simple Template

If you need a simple template to start a new page, see the [*/reference/templates/markdown.md*](https://github.com/Unity-Technologies/com.unity.multiplayer.docs/blob/master/reference/templates/markdown.md) file in your local cloned files. This file gives you simple Markdown to get started. For more Markdown formats, see this page's code.

## Markdown Frontmatter

All Markdown files require some information at the top of every file indicating the title, id, and other attributes as needed.

Copy, paste, and fill out the following in the first lines of your Markdown file:

```markdown
---
id: installation
title: Installation
---
```

See the following options for frontmatter fields:

|Frontmatter Fields | Description |
| -- | -- |
| `id:` | Used for the navigation. Recommend only using lowercase and dashes.
| `title:` | Displays as the page name and as the H1. |
| `description:` | Metadata description for the page for search engines. By default, search engines will pull the first X amount of words from the page as a description.|
| `sidebar_label:` | Shorter name for the side nav for the page, if the title is very long this can help for viewing and formatting. |

## Headers

Use hashtags `#` to indicate the heading level. You should not use H1, this is automatically used for the page title when building the site. Link anchors automatically also generate.

## H2 - Create the best documentation

### H3 - Create the best documentation

#### H4 - Create the best documentation

##### H5 - Create the best documentation

###### H6 - Create the best documentation

## Emphasis

Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

## Lists

For numbered lists, always start with `1.`. The generator will automatically number the list correctly when building the site:

```markdown title="Markdown Ordered List"
1. First ordered list item
1. Another item
   - Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
   1. Ordered sub-list
1. And another item.
```

1. First ordered list item
1. Another item
   - Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
   1. Ordered sub-list
1. And another item.

* Use asterisks `*` for unordered lists.

You can configure your editor to always use this format for lists. For Visual Studio Code, configure the following settings:

* **Ordered List: Marker** set to *one*.
* **Unordered List: Marker** set to *.

## Links

See the following example code for Markdown links.

```markdown title="Markdown Link Examples"
See [Page Name](filename.md) to link to Markdown site pages.

See [Page Name](filename.md#header-name) to link to a section in the Markdown site pages.

[I'm an inline-style link](https://www.google.com/)

[I'm an inline-style link with title](https://www.google.com/ "Google's Homepage")

[I'm a reference-style link][arbitrary case-insensitive reference text]
```

URLs and URLs in angle brackets will automatically get turned into links. http://www.example.com/ or <http://www.example.com/> and sometimes example.com (but not on GitHub, for example).

Some text to show that the reference links can be added at the bottom:

```markdown title="Markdown Reference Links"
[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

[1]: http://slashdot.org/
[link text itself]: http://www.reddit.com/
```

## Images

To include images, save PNG (.png) files to the `/static/img` folder. Add an image to a markdown file using the following format:

```markdown title="Markdown for displaying images"
![alt text](/img/filename.png)
```

```markdown title="Markdown for website image"
[alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 1')
```

See the following examples:

Inline-style: [alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 1')

Reference-style: [alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 2'

Images from any folder can be used by providing path to file. Path should be relative to markdown file.

![img](/img/example-img.png)

### Images for Dark and Light Mode

You can save diagrams, animations, and images for dark and light mode to provide the best look for all users. 

At the bottom of your markdown file, add this code:

```javascript
import ImageSwitcher from '@site/src/ImageSwitcher.js';
```

:::note
Depending on the location of your Markdown file, you may need more or less `../`.
:::

Save your light image with a background color of white (`#ffffff`) or charcoal (`#18191a`). Save your images to the */static/img* folder and add the image using the following code:

```javascript
<ImageSwitcher 
lightImageSrc="/img/ping-animation-light.gif?text=LightMode"
darkImageSrc="/img/ping-animation-dark.gif?text=DarkMode"/>
```

For example:

<ImageSwitcher 
lightImageSrc="/img/ping-animation-light.gif?text=LightMode"
darkImageSrc="/img/ping-animation-dark.gif?text=DarkMode"/>

## Tabs

Use the following code to create tabbed content. You can use Markdown in these tabs, including text, code content, images, and more.

At the bottom of the Markdown file, add the following code:

```markdown
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

For each set of tabs, use the following code:

```markdown
<Tabs
  className="unique-tabs"
  defaultValue="tab1"
  values={[
    {label: 'Tab 1', value: 'tab1'},
    {label: 'Tab 2', value: 'tab2'},
  ]}>

<TabItem value="tab1">

Add content here for first tab.

</TabItem>
<TabItem value="tab2">

Add content here for second tab.

</TabItem>
</Tabs>
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

See the following tabbed code examples:

<Tabs
  className="unique-tabs"
  defaultValue="unet"
  values={[
    {label: 'UNet Example', value: 'unet'},
    {label: 'MLAPI Example', value: 'mlapi'},
  ]}>

<TabItem value="unet">

```csharp
   public class MyUnetClass : NetworkBehaviour
   {
      [SyncVar]
      public float MySyncFloat;
      public void Start()
      {
         if (isClient)
         {
               CmdExample(10f);
         }
         else if (isServer)
         {
               RpcExample(10f);
         }
      }
      [Command]
      public void CmdExample(float x)
      {
         Debug.Log(“Runs on server”);
      }
      [ClientRpc]
      public void RpcExample(float x)
      {
         Debug.Log(“Runs on clients”);
      }
   }
```

  </TabItem>
  <TabItem value="mlapi">

```csharp
  public class MyMLAPIExample : NetworkBehaviour
   {
      public NetworkVariable<float> MyNetworkVariable;
      public override void NetworkedStart()
      {
         InvokeClientRpcOnEveryone(ClientRpcExample, 10f);
         InvokeServerRpc(ServerRpcExample, 10f);
      }
      [ServerRPC]
      public void ServerRpcExample(float x)
      {
         Debug.Log(“Runs on server”);
      }
      [ClientRPC]
      public void ClientRpcExample(float x)
      {
         Debug.Log(“Runs on clients”);
      }
   }
```

  </TabItem>
</Tabs>

## Code

:::important
All code samples should meet coding standard guidelines and requirements for Unity. They should be tested, functioning, and provide live examples that developers can reuse easily.
:::

To add code inline, use single ticks:

```markdown title="Markdown Inline Example"
Use the `npm update` command to check and update packages for Docusaurus.
```

To add code sample blocks, use three ticks and the programming language. Optionally, you can add a `title="name"` to describe the example.

```javascript title="Javascript Example"
var s = 'JavaScript syntax highlighting';
alert(s);
```

```python
s = "Python syntax highlighting"
print(s)
```

To highlight a line of code, add `{#}` with the line number in the brackets.

```js {2} title="Example with line {2} highlighted"
function highlightMe() {
  console.log('This line can be highlighted!');
}
```
### Embedding Code from a Repository

To embed a code sample from a file in a GitHub repositiory, use `reference` in the code block with a link to the file. The code sample is embedded using the language with a link to the original file. 

This code references a JavaScript file: ` ```js reference`, for example:

```js reference
https://github.com/saucelabs/docusaurus-theme-github-codeblock/blob/main/src/theme/ReferenceCodeBlock/index.tsx#L105-L108
```

You can use a link to a file embedding the entire file, or embed a range of code lines using `#L` and a line range at the end of the link, such as `#L105-108`.

## Tables

Tables can have one header at the top, with a line indiciting the header and alignment, and rows surrounded by pipes (|). 

```markdown title="Markdown Table"
| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned |  $1600 |
| col 2 is      |   centered    |    $12 |
| zebra stripes |   are neat    |     $1 |
```

| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned |  $1600 |
| col 2 is      |   centered    |    $12 |
| zebra stripes |   are neat    |     $1 |

There must be at least 3 dashes separating each header cell. You can also use inline Markdown.

| Markdown | Less      | Pretty     |
| -------- | --------- | ---------- |
| _Still_  | `renders` | **nicely** |
| 1        | 2         | 3          |

Custom styles are available for tables, added using `<div>` tags around the markdown table. 

`<div class="table-rows">`

<div class="table-rows"> supports up to 5 columns with differing shades.

| Tables        |      Are      |   Cool | Check | It | Out |
| ------------- | :-----------: | -----: | --- | --- | --- | 
| col 3 is      | right-aligned |  $1600 | $1 | .003 | *finals* |
| col 2 is      |   centered    |    $12 | | | |
| zebra stripes |   are neat    |     $1 | | | |
</div>

`<div class="table-columns">` supports up to 5 columns with differing shades and highlights a column on hover.

<div class="table-columns">

| Tables        |      Are      |   Cool | Check | It | Out |
| ------------- | :-----------: | -----: | --- | --- | --- | 
| col 3 is      | right-aligned |  $1600 | $1 | .003 | *finals* |
| col 2 is      |   centered    |    $12 | | | |
| zebra stripes |   are neat    |     $1 | | | |
</div>

## Blockquotes

```markdown title="Markdown Code"
> Blockquotes are very handy in email to emulate reply text. This line is part of the same quote.
```

> Blockquotes are very handy in email to emulate reply text. This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can _put_ **Markdown** into a blockquote.

## Embed Files

We support embedding using the [react-iframe](https://github.com/svenanders/react-iframe) plugin. You can use this feature for YouTube videos, Google Slides and Docs, and much more.

Add the following code once in the Markdown file:

```javascript
import Iframe from 'react-iframe'
```

### Embedding Youtube

To embed a YouTube, use the following code with a YouTube link:

```html title="YouTube Embed"
<Iframe url="YOUTUBE LINK HERE"
        width="854px"
        height="480px"
        id="myId"
        className="video-container"
        display="initial"
        position="relative"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
        />
```

## Admonitions

Add an admonition using three colons, the type, and closing content with colons:

```markdown title="Markdown Code"
:::note
This is a note.
:::
```

:::note
This is a note.
:::

:::tip
This is a tip.
:::

:::important
This is important.
:::

:::caution
This is a caution.
:::

:::warning
This is a warning.
:::

:::contribution Community Contribution
Thank you to [Unity](https://unity3d.com/) for this tutorial! This contribution is a great help to the community.
:::

:::funfact Fun Fact
Use for helpful facts and info.
:::

:::bestpractice Best Practice
Highlight best practices and recommendations.
:::

:::unity
Information specific to Unity, for example license information.
:::

## Mermaid Charts

Mermaid provides sequence diagrams, charts, and more. Use these charts to detail processes, workflows, inheritance, and more. See the [Mermaid guide](https://mermaid-js.github.io/mermaid/#/) for specifics and examples, and use the [live editor](https://mermaid-js.github.io/mermaid-live-editor/) to generate code.

See the following example code for adding Mermaid charts. You need to include the import line once per page.

```markdown title="Mermaid Example Code"
<Mermaid chart={`
	graph LR;
		A-->B;
		B-->C;
		B-->D[Example Label];
`}/>
import Mermaid from '@theme/Mermaid';
```

<Mermaid chart={`
	graph LR;
		A-->B;
		B-->C;
		B-->D[Example Label];
`}/>

## MDX

You can write JSX and use React components within your Markdown thanks to [MDX](https://mdxjs.com/).

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );

<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">Facebook blue</Highlight> are my favorite colors.

I can write **Markdown** alongside my _JSX_!

### Import Markdown Files

Using MDX, you can create markdown files with a section of content that can be imported to multiple files. For example, you may have the same notation or install instructions across multiple files. 

Save your files with a file name starting with an underscore (_) in a shared folder (available in each version folder). These files will be included in generated versions.

Currently, any headings will not build in the on-page navigation (on the right). You can add a heading to the page then import the file.

Use the following code with an absolute path to the shared folder file.

```markdown

## Heading

import Alias from '../shared/_file-name.md';

<Alias/>

```

<!-- On page code -->
import Mermaid from '@theme/Mermaid';
import ImageSwitcher from '@site/src/ImageSwitcher.js';