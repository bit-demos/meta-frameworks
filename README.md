# Meta Frameworks and Bit

Meta frameworks are great ways to abstract away some of the configurations and faff that are sometimes required to create functional apps with modern javascript frameworks such as React or Angular. Every framework has it's foibles, making things like routing, content management, server-side rendering and others more complicated than we would like.

Hence the rise of meta-frameworks, such as Gatsby or NextJs, which aim to remove that layer of configuration management from users and present a better app-building UX to the developer.

However, that process of abstracting away the configs inherently means that these meta-frameworks themselves often contain their own configurations, such as webpack rules or use of the global state, which mean they dont necessarily work straight out of the box with frameworks like Bit.

## Config for the configs

And so, there can be complications and/or gotchas with marrying components which use, or are destined for, these meta-frameworks which we at Bit want to provide components (as you would expect from Bit) to deal with and provide smooth support for users of these meta-frameworks.

## Using the components in this repo

Every component in this repo (and indeed potentially any Bit component) comes with in-component documentation, describing how to utilise the component to pre-configure your Bit workspace to work with the meta-framework of your choice. For instance, the gatsby webpack transformer component comes with instructions of how and where to use it to add gatsby support to a Bit env.