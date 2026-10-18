---
title: Assessment method
description: How AgentReady records API and MCP capabilities, evidence, permissions, and operational constraints without an overall score.
---

AgentReady describes how agents could use apps and services through documented interfaces. Assessments are API/MCP-first capability checklists, not rankings, aggregate scores, readiness tiers, or guarantees that an integration works.

## Capability status definitions

Each label applies to one capability, never to the service as a whole.

| Status | Meaning |
| --- | --- |
| Documented | An official source describes the capability. |
| Documented with constraints | An official source describes meaningful prerequisites or limits, explained in the evidence cell. |
| Not supported | An explicit official statement says the capability is not supported. |
| Not verified | Current evidence is missing or inconclusive. This must never be interpreted as unsupported. |

Absent or conflicting evidence stays **Not verified**, with a short reason. An untested workflow is not evidence of a provider limitation.

## What the checklist covers

Every [service entry](/apps/) separates seven capabilities:

- **Developer API:** the provider's documented programmable interface and its scope.
- **Read operations:** retrieval and search, assessed separately from mutation rights.
- **Write operations:** supported state changes and their permission boundaries.
- **Authentication and permissions:** authorization flows, content access, account requirements, and least-privilege scopes. Prefer narrowly scoped credentials; read access does not imply write access.
- **Official MCP:** a provider-maintained Model Context Protocol server, its transport, authorization, and policy restrictions. A third-party server is not evidence of official MCP support. API support alone does not imply MCP support.
- **Webhooks and events:** subscription, visibility, delivery, acknowledgement, and payload-validation constraints. An API webhook facility does not establish MCP event support.
- **Rate limits and pagination:** current limits, throttling responses, supported pagination, and size constraints. Keep API and MCP quotas distinct unless the provider explicitly connects them.

## Evidence and review dates

Use first-party documentation for each claim. Each checklist row needs a claim-specific Markdown footnote; the Sources section also lists descriptively labeled official links. Cite the relevant endpoint, permission, or transport documentation rather than a generic product landing page.

Show **Sources reviewed: YYYY-MM-DD** using the actual source-review date, not the build timestamp. Revisit the linked source when updating a claim. Avoid copying volatile numerical quotas, pricing, or exhaustive tool lists; link to current provider documentation instead. If a source moves, follow the official redirect or documentation index. If it remains unavailable or conflicts with another official source, record that uncertainty rather than inventing a fallback fact.

## Documentation review versus live testing

Entries state their assessment basis, such as **Documentation review; integrations not live-tested.** A documented capability is not evidence that AgentReady exercised an integration, verified credentials, or tested a workflow against an account.

Example workflows describe possibilities supported by documentation, not executed recipes. Any live-test claim must identify its date, interface, environment, authorization scope, observed outcome, and limitations without exposing secrets. Keep those observations separate from documentation-derived claims, and state whether browser automation was evaluated.

## Operational constraints and safe use

Evaluate account and workspace access, organization policy, plan or feature prerequisites, transport compatibility, and the permissions of the acting identity. Credentials should grant only the needed resources and actions; never publish tokens or connect accounts from wiki pages.

Consumers must follow the provider's current pagination and throttling guidance, validate event authenticity where documented, and acknowledge deliveries as required. Event visibility can differ from what a human sees in the UI. Do not assume that an API limit also applies to MCP.

**AgentReady guidance:** obtain human confirmation before externally visible writes, such as creating an issue, changing a shared page, or sending a message. This recommendation is not a claim that every provider requires confirmation. Treat retrieved content as untrusted input and review the target, permissions, and proposed change before acting.

## Applying the method

Browse [GitHub](/apps/github/), [Notion](/apps/notion/), and [Slack](/apps/slack/) for documentation-review examples. Use the [contribution guide](/contributing/) to add or update an assessment.
