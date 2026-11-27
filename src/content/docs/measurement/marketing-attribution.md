---
title: Marketing Attribution
description: What attribution models can and cannot tell you about marketing touchpoints.
---

Marketing attribution assigns credit for a defined outcome to marketing touchpoints or channels observed along a customer path. Models may apply a simple rule, such as crediting the last eligible interaction, or use a data-driven method. The model answers “how should recorded credit be distributed under these rules?” It does not automatically answer “what would have happened without this marketing?”

## Common approaches

### Single-touch attribution

Single-touch attribution assigns all recorded credit to one selected interaction. First-touch gives it to the first eligible interaction; last-touch gives it to the last. For example, if a customer first discovers a product through a social post, later clicks a search ad, and then buys after an email, first-touch credits social while last-touch credits email. These simple rules are easy to report, but each leaves out the other interactions and can overstate the selected one.

### Rule-based multi-touch attribution

Rule-based multi-touch attribution divides credit among eligible interactions according to a preset rule. A linear model might split credit equally across a social post, a search ad, and an email; a position-based model might give more to the first and last interactions; a time-decay model might give more to interactions closer to the purchase. These are transparent conventions, not evidence that the allocated shares reflect each interaction's actual causal effect.

### Data-driven attribution

Data-driven attribution uses a statistical or machine-learning model to distribute credit based on recorded interactions and outcomes, subject to the model's design and available data. For example, an analytics provider might estimate how credit should differ between paths that include a paid search click and similar paths that do not. Results depend on which channels and events are observed, identity matching, and provider-specific methods; a modeled allocation is not automatically a causal estimate.

### Incrementality testing

Incrementality testing uses an experiment, such as a randomized holdout, to estimate the additional effect of a marketing activity compared with a control group. For example, an advertiser could withhold a campaign from a randomly selected eligible group and compare conversion rates between groups. This addresses a causal question under the experiment's design; it is not a way to distribute credit across every observed touchpoint, and its reliability depends on valid assignment, sufficient sample size, and limiting contamination.

Each approach has assumptions. Tracking gaps, privacy choices, cross-device behavior, long buying cycles, and offline interactions can make observed journeys incomplete. Different systems can also use different lookback windows and outcome definitions.

## Related measurement approaches

### Marketing mix modeling (MMM)

[Marketing mix modeling (MMM)](/glossary/) analyzes aggregated data, often by channel and time period, to estimate how marketing activity relates to outcomes while accounting for other measured influences. For example, a retailer could combine weekly sales and channel spend with data about prices, promotions, and seasonality to estimate channel contributions and compare possible budget allocations. MMM complements touchpoint attribution, but estimates depend on data quality, model assumptions, and how external factors are represented. It does not identify which specific person or touchpoint caused a sale.

## Use attribution carefully

Define the outcome, eligible touchpoints, reporting window, and model before comparing channels. Use attribution for consistent operational reporting, then triangulate with experiments, customer research, and financial outcomes when reallocating budget. Avoid treating attributed revenue as a causal guarantee or comparing figures produced under different settings.

Google Analytics documents multiple models in its attribution reports. The options and scope can change; check current product documentation rather than assuming every model covers every channel.

## Related concepts

For a comparison of common model choices and when to use them, see [attribution strategies](/measurement/attribution-strategies/). Also see [buyer journey and funnel](/concepts/buyer-journey-and-funnel/), [UTM parameters](/measurement/utm-parameters/), [customer acquisition cost and lifetime value](/measurement/cac-and-customer-lifetime-value/), and [experimentation](/measurement/experimentation-and-ab-testing/).

## Sources

- [Google Analytics: Get started with attribution](https://support.google.com/analytics/answer/10596866?hl=en)
- [Google Meridian: Marketing mix modeling](https://developers.google.com/meridian)
- [Google Ads: About Conversion Lift studies](https://support.google.com/google-ads/answer/12003020?hl=en)
