---
title: How working on Developer Experience (DX) improved knowledge sharing and enabled more developers to contribute to a project
tags: programming
---

A four-year old Android app installed on thousands of transit buses needed some serious improvements to usability and reliability. The product team proposed a bold vision for improving the user experience for bus operators, but the development team was mired in a codebase that was hard to understand, difficult to change, and to which few could meaningfully contribute. By focusing on a few key elements of developer experience, we were able to make the code easier to understand and contribute to by every member of the development team. With everyone contributing, we were able to deliver on the vision to improve bus operators' experience with the app.

---

This post is adapted from a "design lunch" presentation I gave for a fantastically friendly group of UX and developer folks at [NASA JPL][jpl].

---

![Three cats laying on a bed staring at an open laptop under the title, "How working on Developer Experience (DX) improved knowledge sharing and enabled more developers to contribute to a project"](/assets/how-working-on-developer-experience-dx-improved-knowledge-sharing-and-enabled-more-developers-to-contribute-to-a-project/dx-talk.001.png)

I'm going to share a story from last year of how a project to improve the user experience (UX) of an app was hindered by poor developer experience (DX), how we addressed it, and what we learned coming out of it.

## Opportunity and challenges

On thousands of transit buses across the US, bus operators (drivers) use our Android app to help manage activities on the bus, stay in contact with their dispatch team, and get immediate feedback on their schedule and timeliness.

![photo of a bus operator and a tablet computer (mobile data terminal) onboard a transit bus](/assets/how-working-on-developer-experience-dx-improved-knowledge-sharing-and-enabled-more-developers-to-contribute-to-a-project/dx-talk.004.png)

The Driver App had been in use for about four years without a significant update to its user experience, and in those four years, we had lots of feedback from which to draw inspiration for improvements. The product team launched an initiative to improve the experience for bus operators: applying feedback from years of use while carefully managing changes to a system that humans use while operating heavy machinery.

But the part of the development team that maintained the code had been slowly dwindling and important knowledge of the complex codebase and its workings were going stale. The rest of the development team avoided the codebase because it was hard to work with. It was difficult to set up the tools correctly to build and run the app. It was hard to configure the app to work like it does in a bus. And it included coding patterns that permitted lots of hard-to-diagnose problems at runtime.

The product team shared a bold, new vision for the bus operator's experience with the app:

- Relevant information where operators needed it
- Useful and satisfying microinteractions
- A visually-appealing user interface (UI)
- Strong, consistent visual cueing

A lot of this required development within the UI framework: knowledge of which was always a particular weakness among the development team, but was further intensified by the dwindling cohort of maintainers.

We had an exciting vision, but too few hands ready to make it possible.

I worked with an incredible team, each of whom were intelligent, capable, and experienced developers. Why was working on this codebase harder and more error-prone than working on others?

Throughout the project, we discovered several things:

**We had missing documentation.** We needed answers to:

- How do I get the code and run it?
- How does it run on the bus?
- How can I make changes to it and see the result?

![photo of a cat using a laptop to participate in a video call with other cats. The other cats have speech bubbles with the questions asked about missing documentation.](/assets/how-working-on-developer-experience-dx-improved-knowledge-sharing-and-enabled-more-developers-to-contribute-to-a-project/dx-talk.008.png)

**Our tooling was insufficient for our needs**, especially around building the app. Dependencies for building the app weren't explicitly documented and were difficult to configure correctly. (Developers had slightly different configurations from one another, etc.) And building the app was slow, which meant iteration was slow.

And **we had several bad coding patterns (or antipatterns)** left over from early work while developers were still learning the Android libraries and app lifecycles. Some of these antipatterns were incompatible with the proposed UI improvements. Others were very difficult to reason about and required a lot more intense focus than would be necessary by accomplishing the same outcome with a different pattern. And some of the implementation contained errors that were difficult to spot simply because they didn't look like errors.

The overall _experience_ of the _developers_ was that it felt bad and repelled interest—by no means a joyful experience.

## Developer Experience (DX)

Speaking of "Developer Experience," there's not an industry-wide accepted definition of DX,
but [Norman and Neilsen's definition of UX][nn-ux] is a great place from which to hang a working definition.

![illustration showing the derivation of the definition of DX from the definition of UX](/assets/how-working-on-developer-experience-dx-improved-knowledge-sharing-and-enabled-more-developers-to-contribute-to-a-project/dx-talk.013.png)

> "Developer experience" encompasses all aspects of the developer's interaction with a system's implementation, reference material, and people & processes.

The familiar UX requirements are adapted here:

- Meet the exact needs of the developer without fuss or bother
- Focus on simplicity and elegance that results in systems that are a joy to build and use

I firmly believe that DX is a subset of UX where the users are practitioners of tools and logic to create things. These users also typically have some agency to affect their own–and others’–interaction with a system. And a lot of the body of knowledge around UX and usability is directly applicable to DX. For example:

- Asking the same kinds of questions about a developer's interactions with a system as you'd ask a user of a product
- ["Usability's" 5 typical components of quality][nn-usability]: Learnability, Efficiency, Memorability, [occurrence and effects of] Errors, and Satisfaction
- Many of the [principles of interaction design][bt-interactiondesign]

Let’s put some context around "implementation," "reference material," and "people & processes."

### Implementation

This includes the code and patterns used, and all of the thought, focus, or effort required to work on it.

### Reference material

These are collections of information that support a developer working on a system, but are impractical to keep in working memory at all times.

This includes:

- Documentation
- Code examples
- Videos
- Communities (both online and "in real life")
- Vendor support contracts

When thinking of reference material, I’m looking for answers to "Where can I go to find answers?" or "Where can I go to learn how to find answers?"

### People and processes

This covers the people a developer interacts with while working on a system, ways of coordinating with others, and the tools they use to affect change.

When thinking about people and process, I am looking for answers to:

- Who is working alongside me now?
- Who will come after me to work on this system?
- What is helping me accomplish my work?
- What does this work demand of me or my time?

## DX in practice

With our developer experience woes known, we knew we had a barrier to overcome.

It made sense for us to prioritize **ramping up** developers to get started with the codebase because once the team was able to get the code and run it, they could make contributions toward improving the antipatterns. The first thing we did was to actually document exactly which development tools were required, how to configure hardware and emulators, how to run and debug the app, and included a simple animated GIF screenshot of the app in use. (This helped to set some very basic expectations for developers to see a working app.)

Once the details of exactly which tools were documented, we worked on satisfying a very important step of a popular development checklist called "[The Joel Test][joeltest]:"

> Step 2: "Can you make a build in one step?"

We wanted to reduce the startup effort for this project such that a developer could run `git clone` and then `make` and end up with a fully-functional app. I did the work of combing through all the dependencies, build tools, etc. to assemble a comprehensive makefile that used a Docker container with every requirement wrapped into it. Along with this work, I updated the continuous integration (CI) server to use the exact same build process. This gave us an extremely repeatable build process that could produce functionally-identical results between a developer’s computer and the CI server.

With the team now able to easily clear the hurdle of getting ramped-up, we turned our attention together to improving patterns within the code. We refactored UI implementations to follow a more readable pattern for handling user interactions. We removed code that had become disused over years. We changed the patterns for passing messages between logical components of the app. And we rewrote code to make erroneous logical states actually look like errors.

Overall, we reduced the number of things a dev needed to think about in order to actually work on intended functionality—we lowered cognitive load.

![photo of a a cat bursting through paper; beside are the titles "A really good README," "git clone && make," "Better patterns," and "Lower cognitive load."](/assets/how-working-on-developer-experience-dx-improved-knowledge-sharing-and-enabled-more-developers-to-contribute-to-a-project/dx-talk.022.png)

With these key changes to DX, we were able to get every member of the development team to contribute code changes to the app, including members of the team that had joined the company after the UX project kicked off. We deployed the new version of the app in June 2021 and received a lot of positive feedback. The codebase now feels like it has many more years of value to provide.

## In summary

To summarize the developer experience work we did throughout this project, it started with open communication among the development team. In this case, we didn’t explicitly set out to research particular aspects of developer experience, but we did have a foundation of an Agile development process that included retrospectives where problems could be surfaced and mitigated.

With open communication, we identified a problem codebase by answering questions like:

- Where is there "fuss or bother?"
- What systems are NOT a joy to work on?
- What projects are slow or stalled by difficult code?
- Is the project hard to build and run?
- Does it require a deep well of knowledge?

By this line of questioning, we learned about the places where we needed extra attention.

When working in a team that’s in a good "groove," it can be easy to rely too heavily on knowledge that’s directly communicated between teammates and never explicitly written down for reference. Make sure that required knowledge is written down somewhere and that it's able to be found.

A codebase's build process is a great place to look for DX gains. Continuous integration (CI) servers (i.e., "build servers") help make repeatable builds, which is useful for reliable developer feedback. Further, reduce labor and cognitive load by scripting everything that can reasonably be scripted – work toward that ideal of `git clone && make` or "make a build in one step."

Tools that do forms of static code analysis (linters, code formatters, etc.) are valuable for providing fast feedback to developers while they’re writing code – and they also help lower cognitive load.

Finally, write code that makes it hard(er) to do the wrong thing. Tools are helpful, but developers are great at creatively working around them. Well-defined coding patterns for solving problems help reduce cognitive load and improve recall for using a particular pattern. (In this way, effectively using the [Gang of Four’s Design Patterns][designpatterns]–like the iterator/observer/visitor patterns, etc.–also makes for good developer experience.)

Write code that tells a story with the structures of the coding language. Comments are useful in specific, targeted ways **but** well-named variables and functions that read in sequence are **great**. Giving human-relatable names to elements enables other parts of brain to aid in reading and understanding code.

[![my avatar next to, "Questions? Find me online at thzinc.com"](/assets/how-working-on-developer-experience-dx-improved-knowledge-sharing-and-enabled-more-developers-to-contribute-to-a-project/dx-talk.029.png)][find-me]

[jpl]: https://www.jpl.nasa.gov/
[nn-ux]: https://www.nngroup.com/articles/definition-user-experience/
[nn-usability]: https://www.nngroup.com/articles/usability-101-introduction-to-usability/
[bt-interactiondesign]: https://asktog.com/atc/principles-of-interaction-design/
[joeltest]: https://www.joelonsoftware.com/2000/08/09/the-joel-test-12-steps-to-better-code/
[designpatterns]: https://en.wikipedia.org/wiki/Design_Patterns
[find-me]: /find-me
