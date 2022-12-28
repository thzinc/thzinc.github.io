---
title: Guidelines for backlog refinement sessions
tags: programming sdlc
excerpt: |
  Formerly referred to as "backlog grooming," backlog refinement is the process of defining pieces of work and estimating the amount of effort required to complete them. Backlog refinement requires buy-in from developers, testers, and stakeholders (product managers, business folks, etc.). Doing this refinement work results in a clearer understanding of the work to be done.
---

## What is "backlog refinement?"

Formerly referred to as "backlog grooming," [backlog refinement][refinement] is the process of defining pieces of work and estimating the amount of effort required to complete them. Backlog refinement requires buy-in from developers, testers, and stakeholders (product managers, business folks, etc.). Doing this refinement work results in a clearer understanding of the work to be done.

Therein lies a problem: backlog refinement is a prediction of the future. Estimations are a statement of imagined effort.

Humans, generally, are bad at anticipating things that are not at the forefront of their minds. Building software systems often requires a staggering number of variables and it is difficult to hold many variables in mind at one time. Humans making estimations are fully susceptible to the "availability heuristic" and will intuitively resort to "what you see is all there is."

One tool to help overcome these limiting psychological heuristics is to develop a checklist for use in a backlog refinement session. This checklist should incorporate input from people in different disciplines involved in or affected by the work. A well-written checklist helps to augment the "remembering" part of the estimators' minds, effectively helping them see more when "what \[they] see is all there is."

## Making a checklist for backlog refinement

While it's in the forefront of your mind, think of the questions you frequently have to answer when work is underway on a piece of work. (Use the availability heuristic to its maximum benefit!) Questions that arose out of ambiguity, missing information, or incorrect definitions are useful for developing checklist items to look for. Since each person will have different things in the forefront of their mind, it is useful to gather input from a wide group of people. It may be necessary to allow for asynchronous work on this part to avoid a group of people from developing a bias toward a set of questions or a blindness to others.

One such checklist item we used at [GMV] arose from the question, "are there changes to monitoring or alerting?" We strived to develop software systems that were observable and had reasonably well-defined criteria for success and failure. By including a checklist item mentioning monitoring and alerting, everyone participating in the refinement session was reminded of the kinds of things that go into monitoring and alerting:

- What are the metrics used to define success or failure?
- What actions can someone take to change the outcome from a failure to a success?
- What kind of alerts are needed to enable a person to take action before a failure occurs?

The checklist's most significant power is to methodically "remember" important concepts for you. Sometimes the remembering will be specifically what is written on the checklist, but other times it will be a tangent to what is written.

However, ultimately it is still a checklist and you should be able to assert the item is completed. At [GMV], we wrote the items in the form of questions and possible answers, each designed to encourage conversation:

> - Are there changes to monitoring and alerting?
>   - ☐ Yes, the changes are described in the issue
>   - ☐ No, no changes are anticipated

## Using the checklist

For each item in the backlog, have an open discussion about the issue. There will likely be discussion and questions that immediately come up without any additional stimulus. When the discussion has wound down, pull out the checklist.

It's important to methodically visit each item on the checklist every time. The checklist is "remembering" things for you, even if each remembered thing is not immediately relevant. Acknowledge it and move on.

Checklist items should usually invite discussion. Hold space for that discussion and make note of decisions in the backlog item. Check items off the checklist as you progress. When you reach the end of the checklist, wrap up any discussions on the backlog item and move to the next one.

## Example checklist

This is an example checklist for backlog refinement based on the work I did with the team at [GMV]. These questions arose out of working together for several years. As alluded to earlier, when we developed these questions we were also subject to "what you see is all there is." What is not encoded in this list are all the ways we worked together on developing software that _just worked_, whether by process or intuitive interactions. Your checklist will be different, but this might bring some ideas to mind as you develop yours.

The questions are generally divided into these broad groupings, where "it" is the subject of the backlog item. (i.e. a new feature, a bug fix, etc.)

- What is it?
- How will we know it's done?
- What else needs to be done?
- How is it going to be done?
- How will it be validated?
- When will it be usable?
- Has everyone been heard?

### What is it?

- Is the reason for doing this work understood?
  - ☐ Yes
  - ☐ No (_probably requires more discussion_)
- Is there user experience or design work to do?
  - ☐ Yes, and the work is described in the issue
  - ☐ No, no user experience or design work is anticipated
- If the issue is a bug, can it be reproduced reliably?
  - ☐ Yes, the reproduction steps are included in the issue
  - ☐ No, the reproduction work is included in the estimate of this issue
- Are there unusual constraints around the bug? (Time, environment, data, etc.)
  - ☐ Yes, and the constraints are described in the issue
  - ☐ No, there are no unusual constraints
- Are there test cases?
  - ☐ Yes, the test cases exist and are linked in the issue
  - ☐ No, it is expected that test cases will be developed while working on this issue
  - ☐ No, no test cases are anticipated for this work (_probably requires more discussion_)
- Is there new documentation?
  - ☐ Yes, the documentation exists and is linked in the issue
  - ☐ Yes, the criteria for documentation is described in the issue
  - ☐ No, no new documentation is anticipated

### How will we know it's done?

- Are the roles of the people who will accept this issue understood?
  - ☐ Yes, the people in each role understand how they will review and accept this work
  - ☐ No (_probably requires more discussion_)
- Is the acceptance criteria understood?
  - ☐ Yes, the acceptance criteria is understood and agreed upon by all contributors and stakeholders
  - ☐ No (_probably requires more discussion_)
- Is there a viable way to accept the issue? (e.g., given software, hardware, data, or environment constraints)
  - ☐ Yes, the details for how to accept the issue are described in the issue
  - ☐ Yes, but the specific steps will be developed while working on this issue
  - ☐ No (_probably requires more discussion_)

### What else needs to be done?

- Is the work spread across multiple systems?
  - ☐ Yes, the systems are described in the issue
  - ☐ No, it is anticipated that this work is confined to a single system
- Is there other work that must be completed first?
  - ☐ Yes, and the other work is described and linked in the issue
  - ☐ No, this issue is not dependent on other work
- Are there subject matter experts (SMEs) for this work?
  - ☐ Yes, and they are described in the issue
  - ☐ No, no SME has been identified for this work
- Does the environment need changing?
  - ☐ Yes, and the changes are described in the issue
  - ☐ Yes, but the details will be developed while working on this issue
  - ☐ No, no changes to the environment are anticipated
- Does this work change how data is stored or used? (i.e., backwards/forwards compatibility)
  - ☐ Yes, and the changes are described in the issue
  - ☐ No, no changes to how data is stored or used is anticipated

### How is it going to be done?

- Is the development path understood?
  - ☐ Yes
  - ☐ No (_probably requires more discussion_)
- Is there refactoring that needs to be done while doing this work?
  - ☐ Yes, the refactoring work is described in the issue
  - ☐ No, no refactoring is anticipated
- Are there changes to monitoring and alerting?
  - ☐ Yes, the changes are described in the issue
  - ☐ No, no changes are anticipated

### How will it be validated?

- Is the testing path understood?
  - ☐ Yes
  - ☐ No (_probably requires more discussion_)
- Does this work change data-driven behavior?
  - ☐ Yes, the changes are described in the issue
  - ☐ No, no changes to data-driven behavior are anticipated

### When will it be usable?

- Is the issue properly represented in release planning?
  - ☐ Yes
  - ☐ No (_probably requires more discussion_)
- Does this work require unusual coordination to release to production?
  - ☐ Yes, the release steps are described in the issue
  - ☐ No, there are no unusual release activities anticipated

### Has everyone been heard?

- Has everyone shared comments, concerns, and questions?
  - ☐ Yes
  - ☐ No (_probably requires more discussion_)
- Is this issue understandable to all parties?
  - ☐ Yes
  - ☐ No (_probably requires more discussion_)
- Can this be made more understandable to all parties?
  - ☐ Yes
  - ☐ No (_probably requires more discussion_)

[gmv]: https://gmvsyncromatics.com/
[refinement]: https://www.agilealliance.org/glossary/backlog-refinement/
