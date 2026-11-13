---
title: Email Marketing
description: An overview of lifecycle, triggered, and batch email campaigns, plus HTML and plain-text formats.
---

Email marketing uses email to inform, support, and communicate with people who have an appropriate basis to receive those messages. A program may include one-time announcements as well as messages coordinated over a customer relationship. Its effectiveness depends on a clear audience and purpose, relevant timing, accurate data, and responsible sending—not just the email platform.

## Three ways to think about campaigns

Lifecycle, trigger, and batch describe related but different aspects of a campaign. Lifecycle describes the relationship or goal; trigger describes what starts a send; batch describes how an audience is sent a message. They are useful planning categories, not a universal or mutually exclusive taxonomy.

### Lifecycle campaigns

A lifecycle campaign supports people at a stage or transition in their relationship with an organization. Common examples include welcome and onboarding messages, education and adoption, renewal reminders, customer education, and re-engagement. A lifecycle program coordinates these messages over time, including rules for what happens when someone progresses, becomes ineligible, or no longer wants marketing.

Lifecycle describes the program's intent, not its delivery method. An onboarding series might start when a person signs up, while a monthly customer update might go to a selected segment on a schedule. See [retention and net revenue retention](/lifecycle/retention-and-net-revenue-retention/) for related retention measures.

### Triggered campaigns

A triggered campaign starts when a defined event, date, or change in status occurs. Examples include a welcome message after signup, an event reminder before a booked appointment, or a follow-up after a purchase. A trigger may start a single email or a sequence with delays and branching.

Use triggers only when the signal is reliable and the message is useful at that moment. Define who is eligible, how duplicate or late events are handled, how people exit the sequence, and how consent, suppression, and frequency rules apply. These workflows are a form of [marketing automation](/concepts/marketing-automation/); automation should not turn every tracked action into a reason to send.

### Batch campaigns

A batch campaign is a planned send to an audience or segment, typically at a selected time. Newsletters, product announcements, and event invitations are common examples. Recipients can still receive personalized content, but the campaign is organized around a scheduled send to a selected group rather than a separate event for each recipient.

Before sending, confirm the audience and exclusions, timing, message purpose, links, and applicable consent and unsubscribe handling. Use [UTM parameters](/measurement/utm-parameters/) consistently when tracking campaign traffic, and evaluate results against the campaign's goal rather than opens alone. See [email deliverability](/lifecycle/email-deliverability/) for sending practices and technical setup.

## HTML and plain-text email

An HTML email uses markup to structure and style content. It can include headings, links, images, and layout, but supported features and appearance vary between email clients. Build for variation and test the delivered message; see [email rendering](/email/email-rendering/) and [MJML](/email/mjml/) for implementation considerations.

A plain-text email contains text without HTML formatting. It is easy to read in text-only contexts and can be useful when the message itself does not need a designed layout. Some email platforms also offer a **plain-text campaign** as a separate message type; this is different from the plain-text alternative commonly included with an HTML email.

Email can carry both versions as a MIME `multipart/alternative` message. The parts represent alternative renderings of the same content, so a receiving client can choose the format it supports or prefers. The plain-text part is not an unrelated second message: it should preserve the essential information, links, and call to action. HTML may support richer presentation, but it does not replace clear writing, semantic structure, meaningful link text, and appropriate image alternatives.

## Plan and improve the program

- Give every campaign a defined audience, purpose, owner, and success measure.
- Keep lifecycle stages, events, consent, preferences, and suppression rules consistent across connected systems.
- Test links, personalization, both message formats, and the final delivered rendering before scaling a send.
- Monitor delivery, clicks, conversions, complaints, and unsubscribes in context; investigate unexpected changes.
- Review automations and scheduled campaigns as products and customer expectations change, and retire messages that no longer serve a need.

Related pages: [marketing automation](/concepts/marketing-automation/), [email deliverability](/lifecycle/email-deliverability/), [email rendering](/email/email-rendering/), [GDPR](/privacy/gdpr/), and the [Mailchimp](/tools/mailchimp/), [Klaviyo](/tools/klaviyo/), and [Twilio](/tools/twilio/) profiles.

## Sources

- [Mailchimp: Getting Started with Campaigns](https://mailchimp.com/help/getting-started-with-campaigns/) — reviewed 2026-11-13. Mailchimp-specific examples of scheduled and automated email campaign types; campaign names and capabilities vary by platform.
- [Salesforce: What Is Marketing Automation?](https://www.salesforce.com/marketing/automation/guide/) — reviewed 2026-11-13. Background on workflows and actions triggered by schedules and customer behavior.
- [RFC 2046, section 5.1.4: Multipart/Alternative](https://www.rfc-editor.org/rfc/rfc2046#section-5.1.4) — reviewed 2026-11-13. MIME's standard for alternative representations of message content.
