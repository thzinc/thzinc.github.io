---
title: Wrapping up my Levoit LV-PUR131S "Dumb" Air Purifier
tags: electronics
---

Following up on my [Dumbing down the Levoit LV-PUR131S Smart Air Purifier][prev-post] work, I received a new Mean Well LRS-35-24 power supply and got to work installing it in the unit. I cut a hole in the side of the box to accommodate a new NEMA C14 socket I had in my stash.

![Photo of new NEMA power socket](/assets/wrapping-up-air-purifier/new-nema-socket.png)

I wired the filter access panel's switch in line with the incoming AC line and ran a cable to supply DC power to my circuit board. I nestled the circuit board in the cavity where the particulate matter sensor once lived, which has the benefit of several holes that let the colored light from the microcontroller to shine through. I drilled a hole through the sensor inspection port cover and hooked up a switch to toggle the fan speed.

![Photo of open filter unit with new power supply and circuit board mounted](/assets/wrapping-up-air-purifier/internals.png)

![Photo of switch installed in sensor inspection port cover](/assets/wrapping-up-air-purifier/new-switch.png)

<video alt="Video of pressing the button with changing lights visible through the existing holes in the case" controls>
  <source src="/assets/wrapping-up-air-purifier/colors.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

My dumbed-down air purifier is working perfectly!

[prev-post]: {% post_url 2024-06-29-dumbing-down-the-levoit-lv-pur131-s-smart-air-purifier %}
