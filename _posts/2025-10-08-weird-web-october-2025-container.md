---
title: Weird Web October 2025 – Container
tags: programming
octothorpes:
  - weirdweboctober
  - Containers
---

I heard about [Weird Web October](https://weirdweboctober.website/) from [Stephen](https://stefanbohacek.com/) at [Botmakers](https://botmakers.discourse.group/) and decided to give today's challenge, "Container", a try with a little click-and-drag game.

Drag the smaller container into the larger one. Do it enough times and you'll win—but the container will shrink over time, so you'll need to be quick!

<div id="container"></div>
<style type="text/css">
    #container {
        width: 100%;
        min-height: 50vh;
        overflow: hidden;
    }
    #container progress {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }
    .draggable {
        cursor: grab;
        background: linear-gradient(#333333, #111111);
        border-radius: 15px;
        box-shadow: 0 0 15px #FFFF99;
        padding: 1rem;
    }
    .draggable.dragging {
        cursor: grabbing;
    }
    .dropping {
        background: linear-gradient(#555, #333);
    }
    .stim {
        pointer-events: none;
        transition: all 1s;
        margin: 0;
        opacity: 0;
    }
    .stim.active {
        margin-top: 3rem;
        opacity: 1;
    }
</style>
<script src="/assets/weird-web-october-2025/container.js"></script>
<script type="text/javascript">
    configureContainer("container");
</script>
