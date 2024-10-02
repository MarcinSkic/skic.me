---
title: How to start time tracking
description: "Overview of how to use metadata like: category, project, tags, etc. to describe your activities in productive and convenient way"
date: "2024-09-25"
tags:
  - productivity
  - clockify
  - time tracking
published: false
---

In 2022, I discovered the concept of time tracking and was immediately sold on it's promise of a tool that objectively measures your productivity and forces your mind to be intentional with actions taken in the moment. In this post, I will assume you are already convinced by the benefits time tracking brings; otherwise, you may listen to [Cortex podcast](https://www.relay.fm/cortex/44) to learn more (that's how I came across this idea).

I should clarify that I don't use automatic time tracking (that detects what site you visit or program you launch). I gave it a try and it produces data that isn't useful. It also contradicts the utility of time tracking as a tool in mindful decision-making.

## Beginner mistakes

After 2 months of getting used to time tracking, I decided to record my whole day: work, relaxation, and everything in between (except for night sleep). However, when doing that, it's easy to overdo:
You can't log every little detail, otherwise time tracking will become more important than the action itself, distracting you from things that matter. Moreover, it will become an unbearable chore that will discourage you from keeping this habbit. Still, as a first instinct you want to do it, because if you are the kind of person that gets interested in time tracking, then you want to record all the information you can. As with everything in life you have to strike a balance, data must be detailed enough to allow for the generation of useful reports but also easy to track and structured in a way that prevents confusion (e.g. same action under different labels).

Another aspect that makes time tracking difficult at the beginning is the amount of options that most tools give you when it comes to how describe your actions. Including but not limited to team, category, project, tags, description, and status (billable/non-billable). During almost 3 years of my time tracking I changed my _taxonomy_ (classification structure) multiple times, ironing out the details. **That's why I would like to share here my thoughts on how to design your system to match desired level of detail while not being cumbersome to track.**

## Basics

My choice for time tracking is [Clockify](https://clockify.me/), as it has a very generous free tier and all the features that I need. All examples will be based on this application but these ideas should apply to other solutions as well.

Okay, so, before discussing taxonomy let's set some ground rules:

- Decide on one language

I made the mistake of using English everywhere TODO: except for some but not all descriptions which later led to confusion. Stick to one language, it will accelerate search by removing pointless questions: "Did I write title for this movie in English or my native language?"

- Pick a color scheme

Having an intuitive color system helps immensely while reading charts TODO: by allowing to quickly asses what type of activities time was spent on. If you lack an idea where to start, my system uses hue scale to assign meaning to entries: colder colors mean desired activities (work, programming, hobbies, etc.) while warmer mean suboptimal ones (gaming, browsing the internet, etc.).

- Start small

At the beginning track only your most productive time: work, side projects, etc. For many people that will be all they need to see positive change that time tracking can bring to their lives. TODO: When you start to feel confident in your habit of time tracking you can easily expand the scope.

## Taxonomy

When designing a classification structure you should focus on 2 things: TODO: word about autocomplete here, with photo in mind have enough data to create summaries you wish to see but simple enough for your app to autocomplete it as much as possible to remove friction from tracking time.

![Example of autocomplete](/src/posts/setting-up-time-tracking/autocomplete.png)

### Project

Depending on workspace settings, `project` can also be called `location` or `job`. This is the most basic attribute for your entries, it sets the context of your action. TODO: When starting time tracking create projects for your productive activities and track entries only with that information, optionally description if you need that extra information. TODO: Skip `categories` as they can be easily added later and `tags` leave for later due to the difficulty of using them correctly.

Moreover this descriptor determines **<span style="color: #ef4444">c</span><span style="color: #f97316">o</span><span style="color: #facc15">l</span><span style="color: #22c55e">o</span><span style="color: #22d3ee">r</span>** of entries. Unfortunately, Clockify doesn't support setting color on the `category` level which would fit my setup better but I solved it by setting the same color for `projects` which share `category`.

#### Example usage

```yaml
project: portfolio page
```

```yaml
project: movie
```

```yaml
project: personal
```

```yaml
project: meeting
```

### Description

A freeform field where you can write anything. It's best used to represent specific action as "what?" happened. Other taxonomy should describe circumstances like "where?", "why?" or "with whom?". Also `description` is a suitable place to put a task identifier if you use a task manager.

#### Antipatterns

- Same action under a different label

Because you can write anything it's the most common place to introduce the same action under different labels, e.g.

```yaml
project: must-do
description: chores
```

and

```yaml
project: must-do
description: cleaning
```

are the same thing! However, this happens rarely if TODO: that activity is performed at least once per week, as that is the constraint of Clockify's autocomplete memory. One possible solution is to create a `project` with that `description`

```yaml
project: chores
```

and if you want to associate this project with others as a "must-do" use `category` for that:

```yaml
category: must-do
project: chores
```

- Grouping with description

Depending on your circumstances you may be tempted to do something like this:

```yaml
category: work
project: job-hunting
description: companyX:interview
```

```yaml
category: work
project: job-hunting
description: companyX:solving test
```

I sometimes use this pattern if creating project "companyX" is pointless TODO: as it may not show up often but as soon as it starts to repeat I edit existing entries to:

```yaml
category: work
project: companyX
description: task-86
```

#### Example usage

```yaml
project: portfolio page
description: task-98
```

```yaml
project: movie
description: WALL-E
```

```yaml
project: personal
description: meditation
```

```yaml
project: meeting
description: pizza
```

### Category

Depending on workspace settings, `category` can also be called `client` or `department`. This is the broadest descriptor of your actions, as it can contain multiple `projects`, useful to mark the common domain, for example:

```yaml
category: entertainment
project: movie
```

```yaml
category: entertainment
project: series
```

```yaml
category: entertainment
project: gaming
```

or

```yaml
category: work
project: company X
```

```yaml
category: work
project: company Y
```

However, for many entries project and description are sufficient to describe all the details that you need. In such cases you have 2 options, leave the project with no category or create a category with the same name e.g.:

```yaml
category: programming
project: programming
description: portfolio page
```

I would suggest picking the second solution as you never know TODO: if in the future you wouldn't want to expand scope of your data by TODO: moving `description` to `project` and extending data in its place:

```yaml
category: programming
project: portfolio page
description: task-418
```

#### Example usage

```yaml
category: programming
project: portfolio page
description: task-98
```

```yaml
category: entertainment
project: movie
description: WALL-E
```

```yaml
category: personal
project: personal
description: meditation
```

```yaml
category: people
project: meeting
description: pizza
```

### Tags

These are in my opinion the most difficult to use, they allow for great granularity and can express almost any idea but quickly become annoying to add to your entries. Same as `description` they can be shared between activities from different `categories` and `projects` but have one unique feature: one entry can have multiple `tags` simultaneously. However this freedom makes them challenging to use, it's easy to forget or add them by accident with the application autocomplete. TODO: describe that autocomplete suggests entries the same as before

#### Antipatterns

- Using one `tag` per entry for given `category`

For example

```yaml
project: entartainment
tags: movie
```

and

```yaml
project: entartainment
tags: series
```

should be replaced with

```yaml
category: entartainment
project: movie
```

and

```yaml
category: entartainment
project: series
```

TODO: new sentence here Reason being if one entry can't be a movie and a series at the same time and these tags are used only for this `project`.

- Using same `tags` for given `project`

Given such entry

```yaml
category: programming
project: portfolio page
tags: svelte, js, scss
```

doesn't data about used technologies exist already on code repository? If these `tags` never change for a given `project` and this information is available somewhere else, they are only unnecessary clutter.

PS. If you are a developer and wish to have detailed and **automatic** tracking of time spent on programming check out [Wakatime](https://wakatime.com)

#### Example usage

There are less examples as I can't justify using `tags` often, TODO: they are too cumbersome to use

```yaml
category: entertainment
project: movie
description: WALL-E
tags: animated
```

If you intend to use many tags, especially from different domains, it's convenient to group them with naming convention for easier search e.g.: `group/name` or `group:name`

```yaml
category: people
project: meeting
description: pizza
tags: people/jack, people/chris, people/eve
```

## Summary

When designing such a system it is useful to think with one SOLID programming rule in mind, open/closed principle, that states:

> software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification

In the context of time tracking, TODO: I understand it as entries should be open for adding more detail, without the need to edit existing entries to match the new standard.

Obviously when beginning you will have to experiment and see what works for you, but hopefully, this article will help you to avoid some mistakes that I made TODO: which made my previous entries incompatible with current ones.
