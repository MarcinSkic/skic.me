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

I should clarify that I don't use automatic time tracking (that detects what site you visit for example), I gave it a try and it produces data that isn't useful in any way. Also it contradicts usefulness of time tracking as tool in mindful decision taking.

## The Problem

After 2 months of getting used to it I decided to track my whole day: work, relaxation, and everything in between (except for night sleep). However, with that comes **the problem**:
you can't track every little detail, otherwise time tracking will become more important than action itself, distracting you from things that really matter and becoming unbearable chore. Still, as a first instinct you want to do it, because if you like to time track you probably also like statistics and you don't want to miss any detail of your life. As with everything in life you have to strike balance, data must be detailed enough to allow for generation of useful reports but also easy to track and structured in a way that prevents confusion (e.g. same action under different labels).

Another aspect that makes time tracking difficult at the beginning is amount of options that most tools give you when it comes to how you describe your actions. Including but not limited to: team, category, project, tags, description and status (billable/non-billable). During almost 3 years of my time tracking I changed my system of _taxonomy_ (classification structure) multiple times, ironing out the details. **That's why I would like to share here my thoughts and tips on how to organize actions to match your desired level of detail while not being cumbersome to track.**

## Basics

My choice for time tracking is [Clockify](https://clockify.me/), as it has very generous free tier and all features that I need. All examples will be based on this application but these ideas should apply to other solutions as well.

Okay, so, before discussing taxonomy let's set some ground rules:

- Decide on one language

I made a mistake of using English everywhere except for descriptions which later led to confusion.

- Pick color scheme

Having an intuitive color system helps immensely while reading charts, it allows to quickly asses what type of activities time was spent on. If you lack idea where to start, my system uses hue scale to assign meaning to entries: colder colors mean desired activities (work, programming, hobbies, etc.) while warmer mean suboptimal ones (gaming, browsing internet, etc.).

- Start small

At the beggining track only your most productive time, work, side projects, etc. For many people that will be all they need to see positive change that time tracking can bring to their lives.

## Taxonomy

When designing classification structure you should focus on 2 things: have enough data to create summaries you wish to see but simple enough for your app to autocomplete it as much as possible to remove friction from tracking time.

### Category

Depending on workspace settings can be also called Client or Department.

### Project

Depending on workspace settings can be also called Location or Job.

### Description

Freeform field where you can write anything. Because of that it's most common place to introduce same action under different labels, e.g.

```yaml
category: personal
project: personal
description: meditation
```

and

```yaml
category: personal
project: personal
description: thinking
```

in reality were the same thing! This happens rarely if that activity is done at least once per week (in Clockify that is the limit of autocomplete memory) but you should consider changing it into project if it is reocurring entry:

```yaml
category: personal
project: meditation
```

### Tags

These are in my opinion the most difficult to use, they allow for great granularity and can express almost any idea but they quickly become annoying to add to your entries. Same as `description` they can be shared between activities from different `categories` and `projects` but they have one unique feature: one entry can have multiple `tags` simultaneously. However this freedom makes them challenging to use, it's easy to forget them or add by accident with applications autocomplete.

#### Antipatterns

- Using one `tag` per entry for given `category`

For example

```yaml
category: entartainment
project: entartainment
tags: movie
```

and

```yaml
category: entartainment
project: entartainment
tags: series
```

could be replaced with

```yaml
category: entartainment
project: movie
```

and

```yaml
category: entartainment
project: series
```

- Using same `tags` for given `project`

Given such entry

```yaml
category: programming
project: portfolio page
tags: svelte, js, scss
```

doesn't data about used technologies exist already somewhere else? If they never change for given `project` and you can check this information in other app they are only unnecessary clutter.

PS. If you are a programmer and wish to have detailed and **automatic** tracking of time spent on programming check out [Wakatime](https://wakatime.com)

## Summary
