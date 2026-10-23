---
title: BIMI
description: How Brand Indicators for Message Identification can display a verified brand logo.
---

Brand Indicators for Message Identification (BIMI) is a standard for publishing a domain's brand indicator so participating email clients can display it with authenticated messages. The protocol is defined in [RFC 9495](https://www.rfc-editor.org/rfc/rfc9495). BIMI is a display mechanism layered on top of email authentication; it is not an authentication substitute and does not guarantee that a logo will appear.

## Prerequisites and display

BIMI implementations rely on a domain's email authentication posture, including DMARC. A domain publishes a BIMI assertion record that points to a logo resource and, where required by the receiving provider, certificate material. Mailbox providers differ in their eligibility rules, certificate requirements, and display behavior; check the requirements for each provider before investing in asset creation or certification.

The logo must meet the applicable BIMI profile and provider requirements. A DNS record alone does not ensure display: receivers may independently validate the domain, its DMARC policy, the logo, and any certificate.

## Practical rollout

First stabilize [SPF](/lifecycle/spf/), [DKIM](/lifecycle/dkim/), and [DMARC](/lifecycle/dmarc/) across legitimate mail streams. Then review the current [BIMI Group implementation guidance](https://bimigroup.org/implementation-guide/) and target mailbox-provider requirements. Treat logo display as an enhancement to a sound sending program, not as a deliverability guarantee.

## Sources

- [RFC 9495: Brand Indicators for Message Identification](https://www.rfc-editor.org/rfc/rfc9495)
- [BIMI Group: Implementation guide](https://bimigroup.org/implementation-guide/)
- [BIMI Group: About BIMI](https://bimigroup.org/bimi-about/)
