---
title: Let's learn something about signaling (in telecom parlance)
tags: programming sdlc
---

In 2019, I was wrestling with needing to build robust, real-time data processing systems in my role at GMV, so I turned to the industry of telephony for inspiration. I picked up a used copy of the out-of-print book [Signaling System No. 7 (SS7/C7): Protocol, Architecture, and Services][ss7-book] and started reading and posting to Instagram with the bits I enjoyed.

These posts are reproduced here, mostly for my own enjoyment.

[ss7-book]: https://www.ciscopress.com/store/signaling-system-no.-7-ss7-c7-protocol-architecture-9781587050404?w_ptgrevartcl=Signaling+System+No.+7%3a+The+Role+of+SS7_330805

{% capture page0 -%}

# Let's learn something about **signaling** (in telecom parlance)

The cover reads:

> Cisco Systems
>
> [Signaling System No. 7 (SS7/C7): Protocol, Architecture, and Services](https://www.ciscopress.com/store/signaling-system-no.-7-ss7-c7-protocol-architecture-9781587050404?w_ptgrevartcl=Signaling+System+No.+7%3a+The+Role+of+SS7_330805)
>
> A complete, practical guide to the world's most popular signaling system, including SIGTRAN, GSM-MAP, and Intelligent Networks
>
> ciscopress.com
>
> Lee Dryburgh
> Jeff Hewett

{%- endcapture -%}
{% include social_media_story_post.html src="/assets/ss7-in-2019/Page%200.jpg" alt="Photo of book lying on top of my lap" caption=page0 %}

{% capture page8 -%}

# "A" calls "B"

> The calling party is often referred to as the A party. Similarly, the called party is referred to as the B party.

{%- endcapture -%}
{% include social_media_story_post.html src="/assets/ss7-in-2019/Page%208-ish.jpg" alt="Photo of page with fingers highlighting an excerpt" caption=page8 %}

{% capture page9 -%}

# 🔥 Automation as a result of **feuds**

> **Inventing the Strowger Exchange**
>
> Almon B. Strowger was a schoolteacher and part-time undertaker. His reportedly constant feuds with manual switchboard operators inspired him to develop an automatic switching system and the dial telephone so he could bypass manual switchboard operators [102]. One reported feud concerned an alleged business loss resulting from the complete lack of privacy offered by a manual exchange. Strowger claimed that an operator at the new manual exchange in Connecticut had intentionally directed a call to a competitor — an allegation that gave rise to tales that the operator was either married to or was the daughter of a competing under-taker. Strowger moved from Topeka to Kansas City, where he hoped his new, larger funeral home would earn him his fortune. However, he suffered a similar fate there; he believed that the manual operators there were intentionally giving his customers a busy signal. Strowger therefore decided to do away with operators; he hired several electromechanical technicians, who created the first automatic exchange within a year. As a result, the telephone became faster, easier to use, and more private for everyone.
> The first Strowger exchange in the United States opened in La Porte, Indiana in 1892 and had the switching capacity for ninety-nine lines. Lobby groups protested at the automatic exchange, and one lobby group championed the personalized service afforded by manual exchanges. The lobby group did not have much success, however; manual switchboards could not service the dramatic increase in telephone subscribers. By 1900 there were 1.4 million telephones in the United States.
> In Great Britain, the first Strowger exchange opened at Epsom in Surrey in 1912. The last Strowger switch was not removed from the British Telecom (BT) service network until June 23, 1995, when it was removed from Crawford, Scotland.
> Strowger sold his patents to his associates for $1,800 in 1896 and sold his share in the company for $10,000 in 1898. He died in 1902. In 1916, his patents were sold to Bell Systems for $2.5 million dollars.

{%- endcapture -%}
{% include social_media_story_post.html src="/assets/ss7-in-2019/Page%209.jpg" alt="Photo of page with fire emoji near the start of the excerpt" caption=page9 %}

{% capture page14 -%}

# wat?

Things people did before SMS

> If you are one of those people who say that you will call home and let the telephone ring twice when you get to your destination safely, note that you have no guarantee that the telephone will actually ring twice —or even ring at all. You might hear two rings, but that does not mean the called party will hear two, or even any, rings because their power ringing pattern might be in an off period.

{%- endcapture -%}
{% include social_media_story_post.html src="/assets/ss7-in-2019/Page%2014.jpg" alt="Photo of page with excerpt brightly circled" caption=page14 %}

{% capture page18 -%}

# 13-year old me is geeking out over the actual details of 2600 Hz

> Single Frequency (SF) was used for supervisory signaling in analog CAS-based. North America used a frequency of 2600 Hz (1600 Hz was previously used), and \[Britain] used 2280 Hz (as defined in British Telecom's SSACIS signaling specification.
> When in an on-hook state, the tone is present; when in an off-hook state, the tone in dropped.

{%- endcapture -%}
{% include social_media_story_post.html type="video" src="/assets/ss7-in-2019/Page%2018.mov" alt="Photo of excerpt with animated mesmerizing border" caption=page18 %}

{% capture page19 -%}

# ... or a whistle out of a box of \[Cap'n] Crunch!

> SF uses an in-band tone. In-band systems send the signaling information within the user's voice frequency range (300 Hz to 3400 Hz). A major problem with in-band supervisory signaling, however, is its susceptibility to fraud. The hacker quarterly magazine "2600" was named for the infamous 2600 Hz tone, which could be used by the public to trick the phone system into giving out free calls. The subscriber could send supervisory tone sequences down his telephone's mouthpiece using a **handheld tone generator**. This enabled the subscriber to instruct switches and, in doing so, illegally place free telephone calls.

{%- endcapture -%}
{% include social_media_story_post.html src="/assets/ss7-in-2019/Page%2019.jpg" alt="Photo of page with excerpt; the phrase 'handheld tone generator' is highlighted" caption=page19 %}

{% capture page24 -%}

# CCS vs CAS

i.e., doing signaling through the same channels as voice traffic is simpler but limited doing signaling through dedicated channels is more complex but carries risks to a larger group of subscribers

> Summary
>
> CCS has evolved to address the limitations of the CAS signaling method. CCS has the
> following advantages over CAS:
>
> - Much faster call set-up time
> - Greater flexibility
> - Capacity to evolve
> - More cost effective than CAS
> - Greater call control
>
> Most CCS calls can be set up in half the time it takes to set up CAS calls. CCS achieves greater call control because no contention exists between signaling and user traffic as it does with in-band CAS. Because the subscriber cannot generate particular signals intended for inter-switch (core network) signaling, CCS offers a greater degree of protection against fraud than analog CAS methods.
>
> CCS has the following disadvantages in comparison to CAS:
>
> - CCS links can be a single point of failure— a single link can control thousands of voice circuits, so if a link fails and no alternative routes are found, thousands of calls could be lost.
> - There is no inherent testing of speech path by call set-up signaling, so elaborate Continuity Test procedures are required.

{%- endcapture -%}
{% include social_media_story_post.html src="/assets/ss7-in-2019/Page%2024.jpg" alt="Photo of page with excerpt" caption=page24 %}

{% capture page29 -%}

# orly? TIL 🧐

> Membership in the ITU is open to all governments that belong to the UN; these are called member states.

{%- endcapture -%}
{% include social_media_story_post.html src="/assets/ss7-in-2019/Page%2029.jpg" alt="Photo of page with excerpt" caption=page29 %}

{% capture pause -%}

# Done with SS7/C7 for now

{%- endcapture -%}
{% include social_media_story_post.html src="/assets/ss7-in-2019/Page%2029.xxx-pause.jpg" alt="Selfie of me looking playfully contemplative with my finger to my lips" caption=pause %}

{% capture page41 -%}

# Huh, TIL

> The next step is that the RFC changes status from a proposal to a draft standard. For this to happen, there must have been at least two successful implementations of the specification, and interoperability must have been demonstrated.

{%- endcapture -%}
{% include social_media_story_post.html src="/assets/ss7-in-2019/Page%2041.jpg" alt="Photo of page with excerpt" caption=page41 %}

{% capture page47 -%}

# I remember this being sooo cool when I was a tween

> Distinctive ringing-Provides a distinct ringing signal when an incoming call originates from a number on a predefined list. This feature is particularly beneficial to households with teenagers.

{%- endcapture -%}
{% include social_media_story_post.html src="/assets/ss7-in-2019/Page%2047.jpg" alt="Photo of page with excerpt underlined and noted with a graphic of fire that says 'lit'" caption=page47 %}

{% capture page50 -%}

# There IS an enforcement mechanism?

(However weak it might be...)

TIL

> Do-Not-Call Enforcement
>
> In the United States, federal and state laws have already mandated do-not-call lists [108] in over half the states, and all states are expected to follow suit. These laws restrict organizations (typically telemarketers) from cold-calling individuals. To comply with these laws, SS7 can be used to query state and federal do-not-call lists (which are stored on a database) each time a telemarketer makes an outbound call. If the number is on a do-not-call list, the call is automatically blocked and an appropriate announcement is played to the marketer.

{%- endcapture -%}
{% include social_media_story_post.html src="/assets/ss7-in-2019/Page%2050.jpg" alt="Photo of page with excerpt brightly circled " caption=page50 %}

{% capture page68 -%}

# The sacred shapes of signaling

{%- endcapture -%}
{% include social_media_story_post.html type="video" src="/assets/ss7-in-2019/Page%2068.mov" alt="Photo of page depicting a chart where 5 nodes connect to every other node in a polygon that resembles a pentagram with a 5-pointed star encircled; there is an animated crystal ball overlaid for humorous effect" caption=page68 %}

{% capture page70 -%}

# More advanced incantations

{%- endcapture -%}
{% include social_media_story_post.html src="/assets/ss7-in-2019/Page%2070-ish.jpg" alt="Photo of page depicting a chart with 13 nodes connecting with many other nodes in the chart; the nodes are labeled with acronyms and resembles a complex alchemical diagram" caption=page70 %}
