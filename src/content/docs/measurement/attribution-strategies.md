---
title: Attribution Strategies
description: How to choose and interpret marketing attribution approaches alongside causal measurement.
---

Attribution strategies are different ways of assigning recorded credit to marketing interactions associated with an outcome. They are useful for consistent reporting, but an observed journey is not the same as a controlled estimate of what marketing caused. For the broader definition and cautions, see [marketing attribution](/measurement/marketing-attribution/).

## Common strategies

- **First-touch:** Assigns credit to the first eligible recorded interaction. It can describe how a tracked journey began, but it may overstate the role of discovery and miss untracked prior exposure.
- **Last-touch:** Assigns credit to the last eligible recorded interaction. It is easy to interpret for conversion-path reporting, but may understate earlier demand creation and other influences.
- **Single-touch variants:** Apply all credit to another selected event, such as lead creation or opportunity creation. The event definition must be stable and meaningful.
- **Linear:** Divides credit evenly across eligible interactions. Equal shares are a chosen convention, not proof that each interaction had equal influence.
- **Position-based:** Gives selected positions—often the first and last—larger shares and distributes the rest. The weighting is a policy choice that should be disclosed.
- **Time-decay:** Gives interactions nearer to a defined outcome more credit. The lookback period and decay rule affect the result.
- **Algorithmic or data-driven:** Uses a model to assign credit based on observed data and a provider's assumptions. Model inputs, eligible channels, identity resolution, and validation matter; “data-driven” does not itself mean causal.
- **Marketing mix modeling (MMM):** Uses aggregated time-series and other inputs to estimate channel contributions and support budget planning. Its results depend on input quality, model assumptions, and how external factors are handled.
- **Incrementality experiments:** Compare an exposed group with a valid control or holdout to estimate the additional effect of an activity. Experimental design and contamination controls determine how credible the estimate is.

These approaches answer different questions. Touchpoint models describe how credit is distributed within recorded paths; MMM estimates relationships at an aggregated level; experiments test incremental effect under a defined design. They can complement one another rather than compete for a single “true” number.

## Choose based on the decision

Before selecting a method, agree on:

- The outcome (for example, qualified opportunity, purchase, or retained revenue).
- Which channels and touchpoints are eligible, and how they are observed.
- Identity rules, lookback window, attribution unit, and reporting period.
- Whether the decision needs operational path reporting, budget planning, or causal evidence.
- How the model will be checked against experiments, financial outcomes, and known tracking gaps.

Use the same definitions when comparing periods or channels. Report assumptions and uncertainty, and avoid comparing credit values from models with different windows, conversions, or data coverage. For budget changes, pair attribution with [experimentation and A/B testing](/measurement/experimentation-and-ab-testing/) where a suitable design is possible. [UTM parameters](/measurement/utm-parameters/) can improve campaign labeling but do not fix identity gaps or establish causality.

## Related concepts

See [marketing attribution](/measurement/marketing-attribution/) for the fundamentals and limitations, plus [customer acquisition cost and lifetime value](/measurement/cac-and-customer-lifetime-value/) for related financial measures.

## Sources

- [Google Analytics: Get started with attribution](https://support.google.com/analytics/answer/10596866?hl=en)
- [Google Meridian: Marketing mix modeling](https://developers.google.com/meridian)
- [Google Ads: Conversion lift experiments](https://support.google.com/google-ads/answer/12003020?hl=en)
