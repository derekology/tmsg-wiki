---
title: Tracking Pixel
description: What tracking pixels measure, why their signals are incomplete, and how to assess privacy implications.
---

A tracking pixel is a small remote resource—often a transparent image or a script-loaded endpoint—used to record that a message or page caused a request to a measurement service. In email, a unique image URL can associate a request with a recipient and message. On websites, a pixel or tag can send events and identifiers to another system.

## What a pixel can and cannot tell you

An email open pixel records a resource request, not a person's confirmed attention. Image blocking can prevent a request; privacy protections, caching, image proxies, and automated security scanners can alter whether or when it happens. As a result, opens may be missing, automated, or attributed to the wrong moment. They are a noisy signal and should not be treated as equivalent to a human reading an email.

Website pixels can support event measurement, campaign attribution, or advertising workflows, depending on their configuration. A request may transmit identifiers, URLs, event details, or other information. The data collected and destinations involved depend on the implementation—not merely on the pixel's label.

## Design and govern tracking deliberately

- Document what events and identifiers are collected, their purpose, recipients, and retention.
- Check applicable privacy, marketing, and communications rules for the jurisdictions and use cases involved; do not assume one consent rule applies everywhere.
- Limit collection and sharing to what is necessary, configure consent and preference signals, and honor user choices throughout the data flow.
- Review what the tag actually sends, including URL parameters and page context; use test environments and network inspection.
- Use stronger outcome measures—such as clicks with context, conversions, revenue, or controlled experiments—where an open signal is not adequate.

The U.S. Federal Trade Commission has discussed privacy risks associated with tracking pixels, including the possibility of sensitive information being exposed through pixel-based data sharing. The UK Information Commissioner's Office also addresses tracking technologies in its direct-marketing email guidance. These sources do not replace a jurisdiction-specific legal assessment.

See [marketing attribution](/measurement/marketing-attribution/), [attribution strategies](/measurement/attribution-strategies/), [UTM parameters](/measurement/utm-parameters/), and [GDPR](/privacy/gdpr/).

## Sources

- [U.S. Federal Trade Commission: Lurking Beneath the Surface: Hidden Impacts of Pixel Tracking](https://www.ftc.gov/policy/advocacy-research/tech-at-ftc/2023/03/lurking-beneath-surface-hidden-impacts-pixel-tracking)
- [UK Information Commissioner's Office: Direct marketing using electronic mail—what else do we need to consider?](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-direct-marketing-using-electronic-mail/what-else-do-we-need-to-consider/)
