---
title: How to push back on text marketing in 2024
see_also:
  - title: CTIA's "Protecting yourself from spam text messages"
    url: https://www.ctia.org/consumer-resources/protecting-yourself-from-spam-text-messages
  - title: FCC Consumer Inquiries and Complaints Center - Phone Issues
    url: https://consumercomplaints.fcc.gov/hc/en-us/articles/360001201223-Phone-Form-Descriptions-of-Complaint-Issues
  - title: CarrierLookup.com
    url: https://www.carrierlookup.com/
---

It's only a few weeks away from elections in the United States and–like most folks here–I am deluged in spam texts every day. Most of them are annoying, but easy enough to ignore. The obvious "USPS customs" scams are easy to spot and block as junk. But occasionally I'll get a text from someone who spent their marketing budget to share an especially noxious message with me.

![Screenshot of spam text with SPAM watermark; a graphic says "No! measures EE+R MEASURES EE + R DON'T ADD UP" and the following excerpt is visible: "Measures EE and R will increase the PUSD tax debt on your home located at [REDACTED]. Los Angeles County can seize and sell your home if you can't pay."](/assets/text-spam-example.png)

# The players

I've learned a few things about the industry players in my work on SaaS marketing platforms. The text marketing industry has been going through a number of changes since early 2024.

In the US, the major telephone carriers have effectively lobbied against nearly all attempts to regulate consumer control over the phone calls and text messages a person receives. Their answer has been to "self-regulate" through a couple of industry organizations. While it is my opinion that the self regulation is weaker than nearly any other option, there are a few tools we have available as consumers to protect ourselves.

## CTIA

The [CTIA][ctia-about] is a trade organization that represents wireless carriers.

Right now, the carriers set the rules for anyone who wants to use automated systems to send text messages to people. These kind of messages are referred to as "A2P" (application to person) messages, and an A2P message can be sent from a shortcode (5-7 digit number) or from a "10DLC" (10-digit "long code"). The carriers control the messages they allow to be sent to their subscribers (the "P" in "A2P"), and the carriers have required that senders register themselves with a private entity called [The Campaign Registry][tcr]. CTIA also publishes their [Messaging Principles and Best Practices][ctia-mpbp] that each of the carriers implement to require senders to follow certain rules or risk getting blocked.

The carriers (through CTIA) have published details on [how to report spam directly to them][ctia-spam-help]. Reporting unwanted messages to the carriers has a reasonable chance of making it harder for senders to send to you or others, so it's a fairly low-effort way to push back on noxious senders.

## The Campaign Registry

Senders need to pay to register their brand and also pay to register a "campaign" before they can start sending A2P messages. Carriers use this registry to keep track of which phone numbers are used to send A2P messages, and also nominally track individual opt-out requests against specific campaigns. TCR requires that all campaigns demonstrate how a recipient can opt-out. Replying `STOP` to an A2P message will–in very many cases–successfully add you to that campaign's "do not send" list, and this is often managed by services that the sender themselves cannot circumvent without risking access to their marketing tools.

It's also worth noting that TCR campaigns may be associated to multiple phone numbers, and opt-outs are recorded against campaigns. Opting out of campaign by replying `STOP` may have the beneficial effect of stopping messages from other numbers the sender may be using.

TCR is not a consumer-facing company, and they aren't directly involved in any filtering or sending actions. They're solely an expensive database of senders that the carriers get to access.

## FCC

The FCC is also important to note here. Reporting spam will not have a short-term effect or reduce your spam, but it will contribute to the growing pile of consumer complaints that may someday help meaningful regulatory efforts. The [FCC complaint form][fcc-complaints] is somewhat long, but pretty easy to fill out.

# The game

If the message is an obvious scam or phishing attempt, block and delete it. Marketers aren't spending their budgets trying to get you to believe they have a package at the post office for you.

If it's the first time you've seen a message from this sender, make a note of the sender and the date of the message, then reply `STOP`. Also report it to the carriers by forwarding the message to `7726`. If you ever get another message from the same sender, report the original and subsequent messages to the FCC.

If you get a message that appears to be the same content or from the same sender, but with a different phone number, report it to the carriers and the FCC.

Bonus points if you want to get technical: Look up the sender's carrier using a tool like [CarrierLookup.com][carrierlookup] and use this information to search for the carrier's reporting form. For example, in the example spam message I received, the sender was using a phone number through Bandwidth (a large business-to-business reseller of telephone services). They have a [reporting form][bandwidth-report] and responsive support folks that make sure their business partners handle your out-out requests. _Through discussion with the carrier, you may also learn which marketing services your sender is using and contact them to report the spammy behavior as well._

# The outcome

Will any of this help? I don't know. There's a lot of money exchanging hands in this system and very strong economic incentive to protect that money. But the entities in power are generally not the ones sending spam, and the ones sending spam are generally not as flush with cash as you might assume.

Use the tools you have to push back where you can.

[ctia-about]: https://www.ctia.org/about-ctia/our-mission
[ctia-spam-help]: https://www.ctia.org/consumer-resources/protecting-yourself-from-spam-text-messages
[ctia-mpbp]: https://www.ctia.org/the-wireless-industry/industry-commitments/messaging-interoperability-sms-mms
[tcr]: https://www.campaignregistry.com/
[fcc-complaints]: https://consumercomplaints.fcc.gov/hc/en-us/articles/360001201223-Phone-Form-Descriptions-of-Complaint-Issues
[carrierlookup]: https://www.carrierlookup.com/
[bandwidth-report]: https://www.bandwidth.com/legal/us-canada-report-a-phone-number/
