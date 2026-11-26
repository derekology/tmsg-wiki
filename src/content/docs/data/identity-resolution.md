---
title: Identity Resolution and Identity Stitching
description: How marketing systems connect identifiers and records while managing uncertainty, latency, and privacy.
---

Identity resolution, often called identity stitching, is the process of deciding whether different identifiers or records refer to the same person, account, or other entity, and associating related interactions. It can help a system connect a web interaction to a known customer record, but a match is only as reliable as its evidence and rules.

Identity resolution is related to, but distinct from, profile creation. An identity graph or similar structure represents links among identifiers; a profile combines selected attributes and events according to rules. Product designs and terminology vary, so a connected profile should not be assumed to be a complete or error-free record of a person.

## What can be matched

Systems may encounter account IDs, login IDs, email addresses, phone numbers, cookie or device IDs, and identifiers created by analytics or messaging platforms. These identifiers have different scopes: a device or browser identifier describes an environment, while an account ID may represent an organization rather than an individual. Identifiers can be shared, changed, reused, or unavailable on some channels.

Two broad matching approaches are:

- **Deterministic matching:** Links records when specified identifiers or rules match, such as a known account ID. Exact agreement is evidence for a rule, not proof that the data was collected or assigned correctly.
- **Probabilistic matching:** Estimates whether records relate using patterns or similarities across several attributes. It can connect records without an exact shared identifier, but introduces uncertainty and requires careful review of the signals and thresholds.

Some systems combine approaches. The specific methods and meaning of a confidence score differ by product; a score should not be treated as certainty without understanding how it is produced and validated.

## Anonymous-to-known transitions

A common case begins with an anonymous browser or device identifier and later receives a known identifier after a person signs in, submits a form, or otherwise identifies themselves. A system may then associate earlier interactions with the known profile, according to its identity rules.

This transition should be scoped deliberately. A browser or device may be shared, and a person may use several devices. Avoid assuming that an identifier represents one person across all contexts. Document what event permits a link, which past events are eligible to be associated, and how the association can be corrected or removed.

## Identity in real-time systems

Identity resolution can happen in a scheduled batch, as part of an event-driven flow, or through a combination of both. For example, an event may arrive with an anonymous ID, a later login may connect that ID to a known account, and a downstream journey may then recalculate eligibility. A low-latency identity update can make the result available sooner; it does not make the match more certain.

The end-to-end delay includes event collection, matching, profile or audience updates, and activation in the receiving channel. Events can arrive late or out of order, and downstream systems may cache older results. Define what the workflow does while identity is unresolved and how it handles a later merge, correction, or split. See [marketing data flows](/concepts/marketing-data-flows/) for batch, event-driven, and hybrid patterns.

## Manage false matches and fragmented records

An incorrect merge can attach one person's activity or preferences to another person's profile. A missed match can leave relevant records disconnected. Both can affect segmentation, measurement, customer communications, and downstream decisions.

For important uses, document the entity being resolved (person, account, device, or another type), accepted identifiers, matching rules, source provenance, and conflict-handling policy. Preserve enough evidence to investigate a link, and define how authorized operators can correct or reverse it. Test shared contact details, changed identifiers, household or account relationships, duplicate events, and anonymous-to-known transitions.

Identity links also affect how observable and linkable data becomes. Establish the purpose, access, retention, and review controls for identity data, and account for applicable organizational policies and legal requirements. This is general operational information, not legal advice; requirements vary by jurisdiction and context.

## How to evaluate an identity design

- **Scope:** Decide whether the workflow needs to resolve people, accounts, devices, or relationships among them.
- **Evidence:** Record which identifiers and signals can create a link, and distinguish exact rules from inferred matches.
- **Freshness:** Set an acceptable resolution delay for each workflow instead of assuming every use needs real-time updates.
- **Profile rules:** Specify how conflicting attributes are selected and which system owns each value.
- **Correction:** Define how to review, split, or remove a link and propagate the change to destinations.
- **Quality:** Monitor unresolved identifiers, duplicate or conflicting profiles, correction volume, and delays against the workflow's requirements.

Identity resolution is one capability in the wider [marketing system](/concepts/marketing-systems/), not a substitute for clear data definitions or governance. A [customer data platform](/data/customer-data-platform/) may provide identity-related capabilities, but the platform's matching behavior and responsibilities should be evaluated against the actual use case.

## Sources

- [Adobe Experience Platform: Identity Service and Real-Time Customer Profile](https://experienceleague.adobe.com/en/docs/experience-platform/identity/identity-and-profile)
- [AWS Entity Resolution: Creating a rule-based matching workflow with the Advanced rule type](https://docs.aws.amazon.com/entityresolution/latest/userguide/rule-based-mw-advanced.html)
- [NIST Privacy Framework](https://www.nist.gov/privacy-framework)
