---
title: "micro-lc: the new open-source project for micro frontend orchestration"
description: micro-lc version 2.0 is out now! Take a look at all the new features and improvements.
slug: micro-lc-the-new-open-source-micro-fronted-orchestrator
---

<head>
    <link rel="canonical" href="https://blog.mia-platform.eu/en/micro-lc-the-new-open-source-micro-fronted-orchestrator" />
</head>

_Post originally published on [Mia-Platform’s blog](https://blog.mia-platform.eu/en/micro-lc-the-new-open-source-micro-fronted-orchestrator)._

:::info
This blog post refers to [<micro-lc></micro-lc> v1.x](/1.x/docs/introduction) and some information are outdated.

**<micro-lc></micro-lc> v2.0 is out now**: read the [updated documentation](/docs/) and the [presentation blog post](/blog/welcome-micro-lc-v2).
:::

We are happy to announce the release of <micro-lc></micro-lc>, the new **micro frontend orchestrator** developed by [Mia‑Platform](https://mia-platform.eu).

This project stems from our experience of recent years with micro frontend development. We know the challenges and needs of those who work with micro frontends and we want to give a concrete contribution to the developers who use them. For this reason, we have released the project in **open‑source** mode: it is already available on [GitHub](https://github.com/micro-lc/micro-lc) and all the community can freely contribute.

What is micro frontend orchestration? And, what are the benefits of <micro-lc></micro-lc>? Read the article below to discover everything you need to know about it.

![micro-lc architecture](/img/blog/microlc_architecture.png)

## Micro frontends: what are they and what do you need them for?

In the last decades, developers have been used to breaking down the most complex elements into small, independent, standardized components and therefore more easily manageable and reusable.

The microservices architectural pattern has become popular as it allows to simplify and speed up the development of applications; in the same way **micro frontends** were born and they **apply to the frontend the same decoupling logic that microservices perform for the backend**. The goal is to unpack a frontend application into a series of reusable and modular components. This also allows you to improve the agility of new frontend features releases.

## micro-lc: characteristics and benefits

<micro-lc></micro-lc> is the component for micro frontend orchestration created by [Mia‑Platform](https://mia-platform.eu), which allows you **to make the development experience consistent**. <micro-lc></micro-lc> simplifies the management of micro frontends through an application. It includes all the backend and frontend parts, and allows their extension via plugins, which is necessary to develop frontend applications, thus speeding up the time-to-market of new solutions.

<micro-lc></micro-lc> is composed of two releasable entities: a frontend part and a backend part.

The **frontend part** consists of a container that provides a series of cross-application functionalities that can be used to configure each connected frontend.

Among the features you can find:

- The basic elements of the layout, namely the top bar and the menu (of three types: sidebar menu, collapsible sidebar menu and top bar menu);
- Application colors;
- Logo and Favicon;
- Window title;
- Darkmode / lightmode;
- User data;
- Google analytics;
- Plugin Management.

Mia‑Platform also provides a series of core and open‑source plugins for <micro-lc></micro-lc>.  
`microlc-element-composer`, for example, allows you to compose the UI of the page dynamically, to create horizontal micro frontends.

From the **backend** section you can **manage the configurations that define the elements of the frontend**, the user authentication, and configurations in general.
<micro-lc></micro-lc> does not manage or authenticate users directly, but allows you to configure authentication endpoints, which will then be managed by an Authentication Provider.

The frontends are designed with **Qiankun**, a framework that injects the frontends into the DOM. In this way it is as if they are organically inside your application and integrated with each other (as opposed to what happens with iframes, where the frontends are isolated).

<micro-lc></micro-lc> is integrated with [Mia‑Platform Console](https://mia-platform.eu/platform/console/): if you already use Mia‑Platform Console you can select the Plugin from the [Marketplace](https://mia-platform.eu/platform/mia-platform-marketplace/) and start a frontend application in a few clicks.

![micro-lc communication](/img/blog/microlc-communication.png)

## The benefits of micro frontend orchestration with micro-lc

As anticipated, the use of a micro frontend orchestrator like <micro-lc></micro-lc> allows you to **improve the micro frontend development experience**, simplifying the orchestration and abstracting the language used.

<micro-lc></micro-lc> is a component integrated **into the Runtime phase**.  
Unlike the Buildtime integration - which requires you to release all the elements every time a change is made - the Runtime integration allows you to **simplify the release**.  
Once a new configuration has been released from the backend section, you need to simply reload the page to see the changes of the individual components, without releasing all the elements individually.

<micro-lc></micro-lc> is so **flexible** that allows you not only to create new frontend applications, but also to migrate from a monolith frontend to a micro frontend architecture, which will be faster and more agile.

<micro-lc></micro-lc> **is extremely configurable**: the layout can be modified by inserting the brand's graphic assets, thus offering a personalized user experience.

<micro-lc></micro-lc> is an open‑source project: this means that anyone who is part of the community can give feedback and contribute to the evolution of the product. Try <micro-lc></micro-lc>, let us know what you think and contribute with your ideas!

Go to the [GitHub](https://github.com/micro-lc/micro-lc) project or to the [documentation](https://micro-lc.io/docs).

If you want to learn more about **all Mia‑Platform open‑source software**, take a look at [this page](https://mia-platform.eu/dev/open-source-projects-software/) on our website. Here you can find the full description of our culture, a brief overview of each project, and the link to their websites.
