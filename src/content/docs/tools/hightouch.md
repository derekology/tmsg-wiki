---
title: Hightouch
description: Hightouch data activation, warehouse syncs, and composable customer data workflows.
---

Hightouch is a data activation platform that connects modeled data to operational systems such as CRMs and marketing tools. Its documentation describes a workflow based on data sources, models, destinations, and syncs. Hightouch also presents a composable CDP approach in which warehouse data and modeled audiences can be activated through its tools.

## Where it fits

A data team can define customer or account models in a warehouse, then configure syncs to send selected fields or audiences to destinations. Marketers can use governed customer attributes and audiences for activation without treating the activation platform as the source of every underlying data point. The exact workflow and available destinations depend on a team's configuration and Hightouch's current product offering.

This pattern can suit organizations with a mature warehouse and a need to coordinate activation across multiple tools. It also puts responsibility on the organization to maintain data models, identity rules, consent and suppression signals, destination mappings, and sync monitoring. Moving data out of a warehouse does not itself make the data accurate, permitted, or suitable for a campaign.

## Evaluation questions

Check support for the warehouse and destinations you actually use, sync frequency and failure handling, field-level controls, audience definitions, identity behavior, access controls, auditability, and total operating cost. Test how a changed consent status or deletion request propagates to destinations before relying on a workflow in production.

Compare Hightouch with [Twilio Segment](/tools/segment/) and [Treasure AI](/tools/treasure-ai/) by mapping the data each platform owns, transforms, and activates. The category labels overlap; the useful comparison is the data architecture and operating responsibilities each option creates.

## Sources

- [Hightouch: Data activation concepts](https://hightouch.com/docs/concepts)
- [Hightouch: Syncs overview](https://hightouch.com/docs/syncs/overview)
