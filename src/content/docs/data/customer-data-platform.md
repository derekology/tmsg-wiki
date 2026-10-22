---
title: Customer Data Platform
description: How a CDP creates governed customer context that can be used by other systems.
---

A customer data platform (CDP) is software for assembling customer data from multiple sources, resolving or managing identity, and making a persistent customer record available to other systems. The CDP Institute's current definition emphasizes ongoing responsibility for the unified customer record, identity, structure, governance, and downstream use. Vendors may use the term differently, so examine the architecture rather than relying on a category label.

## CDP, CRM, warehouse, or integration platform?

- A **CRM** supports people and processes for managing relationships, often centering on sales, service, or account records.
- A **data warehouse** provides general-purpose storage and analysis for organizational data.
- An **integration platform** moves or transforms data between systems.
- A **CDP** is focused on maintaining customer context and making it usable across systems; implementations may own storage or work with warehouse-held data.

These categories can overlap. Some vendors bundle functions or use composable architectures, and a company may combine several systems.

## Questions to ask before adoption

Map sources, identifiers, consent and preference data, destinations, and desired use cases. Decide how identity is resolved, how conflicting values are handled, which events are retained, and how deletion or access requests propagate. Evaluate schema governance, data quality, latency, destination controls, and the engineering work required.

A CDP is not automatically a “single source of truth.” It can unify records according to its own rules, but those rules need ownership and validation. Poor identity logic can combine different people or split one person into duplicate records.

## Related tools

[Twilio Segment](/tools/segment/) is one product in the CDP and customer-data tooling landscape. Compare it with your CRM, warehouse, and integration approach to identify what capability is actually missing.

## Sources

- [CDP Institute: What is a Customer Data Platform?](https://www.cdpinstitute.org/what-is-a-cdp/)
- [Twilio Segment documentation](https://www.twilio.com/docs/segment)
