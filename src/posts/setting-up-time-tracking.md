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

In 2022 I discovered the concept of time tracking and I fell in love immediately. It allows for an objective measure of productivity and to see where your time is spent. In this post I will assume you are already convinced of benefits time tracking brings, if not then maybe you will be convinced same way I was by [Cortex podcast](https://www.relay.fm/cortex/44).

I should clarify that I don't use automatic time tracking (that detects what site you visit or program you launch), I gave it a try and it produces data that isn't useful in any way. Also it contradicts usefulness of time tracking as tool in mindful decision taking.

## The Problem

After 2 months of getting used to it I decided to track my whole day: work, relaxation, and everything in between (except for night sleep). However, with that comes **the problem**:
you can't track every little detail, otherwise time tracking will become more important than action itself, distracting you from things that really matter and becoming unbearable chore. Still, as a first instinct you want to do it, because if you like to time track you probably also like statistics and you don't want to miss any detail of your life. As with everything in life you have to strike balance, data must be detailed enough to allow for generation of useful reports but also easy to track and structured in a way that prevents confusion (e.g. same action under different labels).

Another aspect that makes time tracking difficult at the beginning is amount of options that most tools give you when it comes to how you describe your actions. Including but not limited to: team, category, project, tags, description and status (billable/non-billable). During almost 3 years of my time tracking I changed my system of _taxonomy_ (classification structure) multiple times, ironing out the details. **That's why I would like to share here my thoughts and tips on how to organize actions to match your desired level of detail while not being cumbersome to track.**

## Basics

My choice for time tracking is [Clockify](https://clockify.me/), as it has very generous free tier and all features that I need. All examples will be based on this application but these ideas should apply to other solutions as well.

Okay, so, before discussing taxonomy let's set some ground rules:

- Decide on one language

I made a mistake of using English everywhere except for some but not all descriptions which later led to confusion. Just stick to one, it will be easier for you.

- Pick color scheme

Having an intuitive color system helps immensely while reading charts, it allows to quickly asses what type of activities time was spent on. If you lack idea where to start, my system uses hue scale to assign meaning to entries: colder colors mean desired activities (work, programming, hobbies, etc.) while warmer mean suboptimal ones (gaming, browsing internet, etc.).

- Start small

At the beggining track only your most productive time: work, side projects, etc. For many people that will be all they need to see positive change that time tracking can bring to their lives. And when you start to feel confident in your habit of time tracking you can easily expand scope.

## Taxonomy

When designing classification structure you should focus on 2 things: have enough data to create summaries you wish to see but simple enough for your app to autocomplete it as much as possible to remove friction from tracking time.

### Project

Depending on workspace settings can be also called Location or Job. This is the most basic attribute for your entries, it sets context of your action. When starting time tracking create projects for your productive activities and track entries only with that information, optionally description if you really need that extra information. Skip `categories` as they can be easily added later and `tags` leave for later due to difficulty of using them correctly.

Moreover this descriptor determines **<span style="color: #ef4444">c</span><span style="color: #f97316">o</span><span style="color: #facc15">l</span><span style="color: #22c55e">o</span><span style="color: #22d3ee">r</span>** of an entries. Unfortunately Clockify doesn't support setting color on `category` level instead of `project` which would fit my setup better but I solved it by setting same color for `projects` in shared `category`.

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

Freeform field where you can write anything. It's best used to represent specific action as in question of "what?" happened. Other taxonomy should describe circumstances like "where?", "why?" or "with whom?". Also `description` is good place to put task identifier if you use such tools.

#### Antipatterns

- Same action under different label

Because you can write anything it's the most common place to introduce same action under different labels, e.g.

```yaml
project: must-do
description: chores
```

and

```yaml
project: must-do
description: cleaning
```

were the same thing! However, this happens rarely if that activity is done at least once per week as that is the memory limit of Clockify's autocomplete. One possible solution is to create `project` with that `description`

```yaml
project: chores
```

and if you want to associate this project with others as "must-do" use `category` for that:

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

I sometimes use this pattern if creating project "companyX" is pointless as it may not show up often but as soon as it starts to repeat I edit existing entries to:

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

Depending on workspace settings can be also called Client or Department. This is broadest descriptor of your actions, as it can contain multiple `projects`. It's useful to mark common domain for example:

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

However, for many aspects of life project and description are sufficient to describe all the details that you need. In such cases you have 2 options, leave project with no category or create category with the same name e.g.:

```yaml
category: programming
project: programming
description: portfolio page
```

I would suggest picking second solution as you never know if in the future you wouldn't want to expand scope of your data by moving `description` to `project` and extending data in its place:

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

These are in my opinion the most difficult to use, they allow for great granularity and can express almost any idea but they quickly become annoying to add to your entries. Same as `description` they can be shared between activities from different `categories` and `projects` but they have one unique feature: one entry can have multiple `tags` simultaneously. However this freedom makes them challenging to use, it's easy to forget them or add by accident with application autocomplete.

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

if one entry can't be movie and series at the same time and these tags are used only for this `project`.

- Using same `tags` for given `project`

Given such entry

```yaml
category: programming
project: portfolio page
tags: svelte, js, scss
```

doesn't data about used technologies exist already somewhere else? If they never change for given `project` and you can check this information in other app they are only unnecessary clutter.

PS. If you are a developer and wish to have detailed and **automatic** tracking of time spent on programming check out [Wakatime](https://wakatime.com)

#### Example usage

There are less examples as I can't justify using `tags` often, they are too annoying to use

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

Think with open/closed principle, easy to add new data without need to edit existing
