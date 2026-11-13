---
title: SMS Messaging
description: How SMS works as a marketing channel, including long codes and short codes.
---

Short Message Service (SMS) delivers text messages through mobile networks. Organizations use it for conversational, transactional, and marketing communications. Because messages reach a personal device and are difficult to ignore, SMS should have a clear purpose, an appropriate audience, and a reliable way for recipients to manage their preferences.

## Long codes and short codes

The sender address affects how a messaging program is registered and operated. Two common number types are long codes and short codes; their availability and rules vary by country, carrier, and provider.

- **Long code:** A standard telephone number. In the United States, a 10-digit long code used for application-to-person messaging is called 10DLC. US carrier registration requirements apply to A2P traffic sent over 10DLC numbers. A familiar local number can support two-way conversations, but the permitted use, throughput, and registration requirements depend on the market and provider.
- **Short code:** A short number, commonly five or six digits in North America, used for business messaging. Short codes are provisioned for messaging use and are often selected for programs that need a recognizable sender or higher message volumes. Their capabilities, costs, and approval process vary; they are not available in every market.

These are not interchangeable global categories, and a number type alone does not guarantee delivery or performance. For example, US 10DLC registration is specific to US messaging over 10-digit long-code numbers; short codes and toll-free numbers follow different frameworks.

## Plan the program

- Document the sender, message purpose, audience, and how people sign up, get help, and opt out.
- Follow the laws, carrier rules, and provider policies that apply in each market. Treat consent and suppression as operational requirements, not just form copy.
- Keep message frequency appropriate, identify the organization clearly, and make links and calls to action useful on mobile.
- Test inbound replies, opt-out handling, link destinations, and failure paths before launch.
- Measure delivery and meaningful outcomes alongside opt-outs and complaints. A delivered message is not evidence that the recipient found it useful.

SMS can complement [email marketing](/email/email-marketing/) or an automated journey, but it should not duplicate every touch across channels. Coordinate eligibility, preferences, and suppression with the systems that manage the wider customer relationship. See [marketing automation](/concepts/marketing-automation/) and [GDPR](/privacy/gdpr/) for related considerations.

## Sources

- [Twilio: Programmable Messaging and A2P 10DLC](https://www.twilio.com/docs/messaging/compliance/a2p-10dlc) — reviewed 2026-11-13. Defines A2P 10DLC and describes US registration requirements for traffic sent over 10-digit long-code numbers.
- [Twilio: Comparison of SMS messaging in the US and Canada](https://help.twilio.com/hc/en-us/articles/360038173654-Comparison-of-SMS-messaging-in-the-US-and-Canada-for-long-codes-short-codes-and-toll-free-phone-numbers) — reviewed 2026-11-13. Compares number types and provider-specific requirements in those markets.
- [CTIA: Messaging Principles and Best Practices](https://api.ctia.org/wp-content/uploads/2023/05/230523-CTIA-Messaging-Principles-and-Best-Practices-FINAL.pdf) — reviewed 2026-11-13. Describes wireless messaging, short codes, and responsible messaging practices.
