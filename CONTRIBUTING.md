# Contributing

Thank you for your interest in contributing to Unity Multiplayer documentation!

Here are our guidlines for contributing:

* [Contributing](#contributing)
  * [<a name="coc"></a> Code of Conduct](#-code-of-conduct)
  * [<a name="ways"></a> Ways to Contribute](#-ways-to-contribute)
  * [<a name="cla"></a> Contributor License Agreements](#-contributor-license-agreements)
  * [<a name="submit-pr"></a> Pull Request Submission Guidelines](#-pull-request-submission-guidelines)
    * [Commit Message Guidelines](#commit-message-guidelines)
  * [Contributing Guide](#contributing-guide)

## <a name="coc"></a> Code of Conduct

Please help us keep Netcode for GameObjects open and inclusive. Read and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## <a name="ways"></a> Ways to Contribute

There are many ways in which you can contribute to Multiplayer content:

* **Submit Issues and Bugs**: If you find a bug in documentation or site tools, you can help us by [submitting an issue](https://github.com/Unity-Technologies/com.unity.multiplayer.docs/issues/new?assignees=&labels=type%3Abug&template=bug_report.md&title=) to our GitHub Repository. You can enter an issue through GitHub or from any page on the documentation site (link at bottom of each page). Even better, you can submit a Pull Request with a fix.
* **Feature Requests**: You can request a new feature by [submitting an issue](https://github.com/Unity-Technologies/com.unity.multiplayer.docs/issues/new?assignees=&labels=type%3Afeature&template=feature_request.md&title=) to our GitHub Repository. 
* **Edit Pages**: As you review content on the [Multiplayer Documentation site](https://docs-multiplayer.unity3d.com/), you can click *Edit this page* at the bottom to commit changes through GitHub directly.

If you would like to implement a new section or tutorial, then consider what kind of change it is:

* **New Learn Content** of tutorials and sample code can be discussed with the documentation team in Discord and through submitted issues. We can work with you on the project.

* **Major Changes** that you wish to contribute can be discussed with the documentation team in Discord, through submitted issues, and in pull requests. These include rewriting content, changing flow, adding a new topic or section, and deprecating content.

* **Small Changes** can be directly submitted to the GitHub Repository as a Pull Request. These include typos, updated code samples, troubleshooting, added guide steps, terms, and more. See the section about [Pull Request Submission Guidelines](#submit-pr).

## <a name="cla"></a> Contributor License Agreements

When you open a pull request, you will be asked to acknowledge our Contributor License Agreement. We allow both individual contributions and contributions made on behalf of companies. We use an open source tool called CLA assistant. If you have any questions on our CLA, please submit an issue.

## <a name="submit-pr"></a> Pull Request Submission Guidelines

We currently cut branches from **master branch** for accepting documentation. As our processes refine and work expands, we may use the [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) for development content.

The following branches are strictly for the Unity doc team to test content:

* The **staging branch** is used internally as a pre-release for production. When approved content is ready to merge, the team tests on this branch, approves, and merges that PR to master.
* The **sandbox branch** is used for development site and content work previews. The team uses this branch strictly for testing new features.

### Commit Message Guidelines

Use descriptive commit messages detailing the content updates you are entering for content. Mention issue or ticket numbers as relevant for work.

Always write a clear log message for your commits. One-line messages are fine for small changes, but bigger changes should look like this:

    $ git commit -m "A brief summary of the commit
    > 
    > A paragraph describing what changed and its impact."

For example: `$ git commit -m "Updating code sample for UNet Migration"`

## Contributing Guide

For a complete guide to contributing, creating branches, using Markdown, and more, see the [Contributing Guide](https://github.com/Unity-Technologies/com.unity.multiplayer.docs/wiki).
