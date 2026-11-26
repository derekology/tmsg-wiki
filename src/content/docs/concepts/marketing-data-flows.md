---
title: Marketing Data Flows
description: How customer and campaign information moves between collection points, marketing systems, and measurement.
---

A marketing data flow is the path information takes from where it is collected to where it is used, reported, or removed. Mapping these flows makes it easier to understand which system creates or changes a value, how quickly another system receives it, and what can go wrong between those steps.

A flow may connect a form, website, CRM, marketing automation platform, analytics store, and reporting tool. The tools are only part of the design: identifiers, field meanings, transformations, timing, ownership, and failure handling determine whether the information remains useful as it moves.

## Common stages in a data flow

1. **Collect:** Capture a record, event, preference, or campaign interaction through a form, application, import, or integration.
2. **Validate and transform:** Check required values, normalize formats, apply agreed definitions, and reject or quarantine invalid data where appropriate.
3. **Match and organize:** Associate information with the correct person, account, or other entity, while preserving distinctions the organization needs. This identity resolution may be deterministic, probabilistic, or a combination; see [identity resolution and stitching](/data/identity-resolution/).
4. **Store and synchronize:** Keep information in the system responsible for it and send required updates to other systems.
5. **Activate or analyze:** Use the information to select an audience, trigger an action, support a customer interaction, or report on outcomes.
6. **Correct or remove:** Propagate permitted corrections, preference changes, and deletion or retention actions to relevant destinations.

Not every flow needs a separate platform for each stage. A simple process may move a small file between two systems; another may use event pipelines and data services. The appropriate design depends on the decisions the flow supports, its volume and timing needs, and the effort required to operate it.

## Batch and event-driven updates

“Static” is not a precise opposite of “real-time” for a marketing system. A clearer comparison is between scheduled batch processing and event-driven processing, with many systems using both. “Real-time” is best treated as a workflow-specific latency target: in practice it may mean seconds, minutes, or another agreed interval, rather than zero delay.

| Pattern | How it works | Common tradeoffs |
| --- | --- | --- |
| **Batch or scheduled** | Collects or processes groups of records at set intervals, such as a nightly audience refresh. | Can be simpler to operate when delays are acceptable, but changes may not be available until the next run. |
| **Event-driven or streaming** | Starts processing when an event occurs, such as a signup or purchase. | Can support faster responses, but depends on reliable event delivery, duplicate handling, monitoring, and recovery. |
| **Hybrid** | Uses event-driven updates for time-sensitive actions and scheduled processing for other data or reconciliation. | Can balance freshness and operational effort, but requires clear rules about which path is authoritative and how differences are resolved. |

Choose a pattern based on the customer or operational decision, not on the label “real-time.” A prompt confirmation or timely journey entry may need fresh event data; a periodic planning report may not. Faster data is not automatically more useful if the event is incomplete, identity is uncertain, the action is not appropriate, or the receiving channel cannot act on it.

Measure latency end to end: collection, transport, processing, identity matching, audience or decision updates, and delivery can all add delay. Identity resolution can happen in batch or in a real-time path; fresher identity links do not necessarily mean more certain matches. See [identity resolution and stitching](/data/identity-resolution/) for matching approaches and their implications. Agree on the maximum acceptable delay for the workflow, how to detect when it is exceeded, and what happens when data is late, missing, duplicated, or out of order. A platform's ability to process events quickly does not establish that the overall journey has current data.

## Define the contract between systems

For an important flow, document:

- The source and destination, including which system is authoritative for each field.
- The records or events being transferred, their identifiers, and their agreed meanings.
- Any transformations, filters, deduplication, or identity-matching rules.
- Direction, schedule or latency expectation, and how updates or deletions are handled.
- The owner, access restrictions, monitoring, failure alerts, retry behavior, and recovery steps.

These details help prevent familiar problems: two systems overwrite each other's values, an event is counted twice, a preference change reaches some channels but not others, or a report uses a field whose meaning has shifted.

## Trace a flow before changing it

Start with a customer or operational outcome and trace the data needed to support it. For example, follow a signup from the collection point through identity matching, CRM updates, audience eligibility, message delivery, and outcome reporting. Note manual steps and systems outside the marketing team's direct control.

Use the map to identify dependencies, owners, and gaps before adding an integration or consolidating tools. A [customer data platform](/data/customer-data-platform/) may help unify or activate selected data, but it does not automatically make every source authoritative or every destination consistent. See [marketing technology](/concepts/marketing-technology/) for evaluating the tools involved and [marketing systems](/concepts/marketing-systems/) for the wider operating model.

## Sources

- [Google Cloud: Dataflow overview](https://docs.cloud.google.com/dataflow/docs/overview)
- [NIST Privacy Framework](https://www.nist.gov/privacy-framework)
