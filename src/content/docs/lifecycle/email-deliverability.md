---
title: Email Deliverability
description: The practices that help legitimate marketing messages reach recipients reliably.
---

Email deliverability concerns whether messages are accepted and placed where recipients can find them. It is affected by technical authentication, sender reputation, recipient expectations and engagement, list quality, message practices, and mailbox-provider filtering. No vendor or single configuration can guarantee inbox placement.

## Technical foundations

Set up sender authentication for the domains used to send mail. [SPF](/lifecycle/spf/) authorizes sending hosts, [DKIM](/lifecycle/dkim/) signs messages, and [DMARC](/lifecycle/dmarc/) checks alignment with the visible From domain and publishes policy and reporting preferences. Google and Yahoo publish sender requirements that include authentication, DMARC alignment, and [one-click unsubscribe headers](/lifecycle/one-click-unsubscribe-headers/) for applicable bulk mail. Requirements vary by provider and may change; consult the provider's current guidance rather than treating one checklist as universal.

Also configure a clear unsubscribe experience, honor requests promptly, and monitor complaint, bounce, and delivery signals. [BIMI](/lifecycle/bimi/) may allow participating mailbox providers to show a verified brand logo, but it does not replace authentication or guarantee display. Use a sending domain that your organization controls and ensure DNS changes are reviewed by the responsible technical team.

## List and message practices

Send to people who have an appropriate basis to receive the messages. Set expectations at signup, use relevant segmentation, maintain suppression lists, and remove or investigate invalid addresses. A sudden drop in engagement or rise in complaints can indicate mismatched expectations, data problems, or sending changes. Do not solve this by repeatedly mailing inactive people.

Open rates are an unreliable standalone measure because some mail clients may prefetch or block tracking. Evaluate delivery alongside clicks, conversions, complaints, unsubscribes, and the actual customer outcome.

## Related concepts

See [marketing automation](/concepts/marketing-automation/), [first-party data](/data/first-party-and-intent-data/), [GDPR](/privacy/gdpr/), [SpamAssassin](/lifecycle/spamassassin/), and the [Marketo Engage](/tools/marketo-engage/) and [Mailchimp](/tools/mailchimp/) profiles.

## Sources

- [Google: Email sender guidelines](https://support.google.com/mail/answer/81126?hl=en)
- [Yahoo: Sender best practices](https://senders.yahooinc.com/best-practices/)
- [RFC 8058: Signaling one-click functionality for list email headers](https://www.rfc-editor.org/rfc/rfc8058)
