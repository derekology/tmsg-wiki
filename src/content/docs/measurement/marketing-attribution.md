---
title: Marketing Attribution
description: What attribution models can and cannot tell you about marketing touchpoints.
---

Marketing attribution assigns credit for a defined outcome to marketing touchpoints or channels observed along a customer path. Models may apply a simple rule—such as crediting the last eligible interaction—or use a data-driven method. The model answers “how should recorded credit be distributed under these rules?” It does not automatically answer “what would have happened without this marketing?”

## Common approaches

- **Single-touch:** Gives all tracked credit to one selected touchpoint, often first or last.
- **Rule-based multi-touch:** Distributes credit according to a chosen rule, such as evenly across eligible interactions or weighting recent ones.
- **Data-driven:** Estimates contribution using data and a model specified by the analytics provider.
- **Incrementality testing:** Uses a control or holdout design to estimate the additional effect of an activity, rather than relying only on observed path credit.

Each approach has assumptions. Tracking gaps, privacy choices, cross-device behavior, long buying cycles, and offline interactions can make observed journeys incomplete. Different systems can also use different lookback windows and outcome definitions.

## Use attribution carefully

Define the outcome, eligible touchpoints, reporting window, and model before comparing channels. Use attribution for consistent operational reporting, then triangulate with experiments, customer research, and financial outcomes when reallocating budget. Avoid treating attributed revenue as a causal guarantee or comparing figures produced under different settings.

Google Analytics documents multiple models in its attribution reports. The options and scope can change; check current product documentation rather than assuming every model covers every channel.

## Related concepts

For a comparison of common model choices and when to use them, see [attribution strategies](/measurement/attribution-strategies/). Also see [buyer journey and funnel](/concepts/buyer-journey-and-funnel/), [UTM parameters](/measurement/utm-parameters/), [customer acquisition cost and lifetime value](/measurement/cac-and-customer-lifetime-value/), and [experimentation](/measurement/experimentation-and-ab-testing/).

## Sources

- [Google Analytics: Get started with attribution](https://support.google.com/analytics/answer/10596866?hl=en)
