---
title: Welcome to micro-lc v2.0
description: micro-lc version 2.0 is out now! Take a look at all the new features and improvements.
slug: welcome-micro-lc-v2
authors: paolomartinoli
---

Micro-frontends are very powerful, but you need to orchestrate them to provide a consistent experience. This is exactly the reason why we at [Mia-Platform](https://mia-platform.eu/) developed <micro-lc></micro-lc> and released it as open-source.  
If you are not familiar with it, in a nutshell, **<micro-lc></micro-lc> is an open-source micro-frontends orchestrator**: you can find further information in the [documentation introduction](/docs), or you can read this [blog post](https://blog.mia-platform.eu/en/micro-lc-the-new-open-source-micro-fronted-orchestrator) to get a more discursive overview.

We are proud to announce <micro-lc></micro-lc> **v2.0**! A lot of new features have been implemented and optimized, making the tool more powerful than ever. Micro-frontends keep evolving, and so does <micro-lc></micro-lc>.

Let's take a closer look to what has changed.

## A new live playground

One of the main news is the **new [playground](/playground/) available on the website**. Here you can try <micro-lc></micro-lc> live, without the need to install anything: in the box on the right you will directly see the result. You are free to do all the experiments you like and test the full potential of <micro-lc></micro-lc>.

What are you waiting for? Unleash your creativity!

## <micro-lc></micro-lc> has never been lighter

If you are familiar with <micro-lc></micro-lc> and you have already used it, you will love this new feature. If you are a new user, you will love it too, don't worry.

<micro-lc></micro-lc> can now be used **through a [CDN](/docs/getting-started#import-from-cdn)**: this means that the download will be much lighter and the interface will be easier. This because <micro-lc></micro-lc> and `microlc-element-composer` (which used to be a separated core plugin) are now tightened together.  
The bundle size is very low and so pages load faster, ensuring higher performances to your micro-frontends.

In addition, the code that makes <micro-lc></micro-lc> run is available as a standalone library that you can download via `npm`. Just run the following command:

```shell
npm i @micro-lc/orchestrator
```

## New YAML integration

Besides the already supported JSON, we introduced the possibility to **write [configuration](/api/micro-lc-web-component#configuration) in YAML**. Since YAML syntax is far more easily understandable for humans, this feature will boost you building your micro-frontends.

But, if you are a JSON lover, you can continue to use it as you have been doing until now. You can also use the converter available in the [Playground section](/playground/) to easily convert your YAML to JSON, and viceversa.

## ... and a lot of other cool stuff

Besides all the above, other new features and improvements have been added:

- New [communication](/docs/concepts/communication) method between applications;
- <micro-lc></micro-lc> now supports centralized states from plugin;
- <micro-lc></micro-lc> is embeddable everywhere, so you can use it without downloading it;
- You can have custom [layouts](/docs/guides/layout) by default.
- The documentation has been updated and fully restyled!

That's it for now, but we will keep updating and improving <micro-lc></micro-lc>.

If you want to **contribute** to the project, take a look at the [open issues](https://github.com/micro-lc/micro-lc/issues), and feel free to open a new one if you don't find what you are looking for.  
Moreover, the [blog section](/blog) has been introduced on the website, so consider writing a post for sharing your experience building awesome micro-frontends!
