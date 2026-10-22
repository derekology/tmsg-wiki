---
title: Retention and Net Revenue Retention
description: Measure whether customers stay and how recurring revenue from existing customers changes.
---

**Customer retention** describes the continuation of customer relationships over a defined period. The metric must specify what counts as a retained customer and the time window. **Net revenue retention (NRR)** measures recurring revenue change from a starting group of existing customers, including expansion and contraction, while excluding revenue from newly acquired customers.

A common period-based calculation is:

```text
NRR = (starting recurring revenue
       - churned recurring revenue
       - downgrade revenue
       + expansion revenue)
      / starting recurring revenue
```

Specify the starting cohort, period, revenue type, treatment of currency changes, and whether the measure is monthly, quarterly, or annual. NRR can exceed 100% when expansion from existing customers is greater than churn and contraction. Gross revenue retention (GRR) excludes expansion, so it answers a different question about how much starting revenue was retained before upsell.

## Why definitions matter

A rising NRR can coexist with losing many smaller customers if expansion in a few large accounts outweighs churn. Pair it with customer retention, GRR, cohort trends, and customer feedback. Do not compare benchmarks without matching the calculation and customer segment.

Retention analysis is useful beyond subscription businesses, but the revenue formula is specific to recurring-revenue models. For other business models, define a behavior or repeat-purchase measure appropriate to the relationship.

## Related concepts

See [CAC and customer lifetime value](/measurement/cac-and-customer-lifetime-value/), [revenue operations](/concepts/revenue-operations/), and [customer data platforms](/data/customer-data-platform/).

## Sources

- [Stripe: Net revenue retention](https://stripe.com/resources/more/net-revenue-retention)
