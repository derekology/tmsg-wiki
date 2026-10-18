---
title: Notion
description: Documentation-reviewed Notion API and official MCP capabilities, content access, webhooks, and operational constraints.
---

Notion is a workspace for pages, project information, and structured content. Its developer API and hosted MCP server provide programmable access to authorized workspace content.

Category: [Knowledge management](/categories/knowledge-management/)

Official documentation: [Notion developer documentation](https://developers.notion.com/reference/intro)

Sources reviewed: 2026-10-17

Assessment basis: Documentation review; integrations not live-tested.

## Capability checklist

| Capability | Status | Evidence and constraints |
| --- | --- | --- |
| Developer API | Documented | A JSON, HTTPS API exposes page, database, and other workspace operations.[^api] |
| Read operations | Documented with constraints | Official MCP can search and read content accessible to the authorizing user; API connections need access to the intended content.[^read] |
| Write operations | Documented with constraints | Official MCP can create and update content, including pages, within the user's accessible workspace content. Authorization is not blanket access to all workspace content.[^write] |
| Authentication and permissions | Documented with constraints | API requests use bearer authorization; credential type determines identity and access. Internal connections need content shared with them; public connections use OAuth and selected content. Hosted MCP uses OAuth.[^auth] |
| Official MCP | Documented with constraints | Notion hosts a remote MCP server. Clients authorize via OAuth; accessible content and workspace client controls constrain use.[^mcp] |
| Webhooks and events | Documented with constraints | Connection webhooks require a subscription and reachable secure endpoint. Notion documents signed payload validation and recommends it for production. This does not establish MCP event support.[^events] |
| Rate limits and pagination | Documented with constraints | API request-rate and size constraints apply; follow returned Retry-After guidance. Supported list endpoints use opaque cursors. Do not treat API request budgets as MCP tool quotas.[^limits] |

## Example agent workflows

- **Retrieve project context:** an OAuth-authorized MCP client could search for a project and read relevant pages to assemble a summary. Results are bounded by the user's access in the selected workspace; the documented tools support search and retrieval.[^read]
- **Create or update a project page:** an OAuth-authorized MCP client could propose a new project page or update an accessible page after the user reviews its target and text. Creation and updates are documented possibilities, not workflows exercised by AgentReady.[^write] **AgentReady guidance:** obtain human confirmation before changing shared content; this is not a claimed Notion confirmation requirement.

## Constraints and unknowns

API token choices and hosted MCP authorization are different paths. An internal API connection needs the intended page shared with it; a public connection's OAuth flow includes content selection, while personal access tokens act as their creator. Choose the identity and least-privilege access appropriate to the task rather than assuming all bearer tokens have the same permissions.[^auth]

The hosted MCP endpoint is `https://mcp.notion.com/mcp`; use a compatible client and its documented OAuth setup. Workspace owners manage MCP client access, and restricting which clients members can connect requires the Enterprise plan. Current client and policy guidance should be checked before deployment.[^mcp]

Webhook events describe workspace activity for a connection, not a guarantee of full content in the event or MCP event delivery. The documentation's example retrieves updated content through the API after receiving metadata. Validate the signed payload as recommended before using an event to trigger work.[^events]

Limits can depend on workspace plan, connection, and endpoint, with request-size constraints separate from workspace plan limits. The current limits page distinguishes MCP tool throttling from other rate-limit reasons; do not substitute an API budget for an MCP quota. This entry does not verify end-to-end event handling, client compatibility, or live read/write behavior.[^limits]

Browser automation was not evaluated.

## Sources

1. [Notion API introduction and cursor pagination](https://developers.notion.com/reference/intro)
2. [API authentication with bearer tokens](https://developers.notion.com/reference/authentication)
3. [Authorization flows and content access](https://developers.notion.com/guides/get-started/authorization)
4. [Notion MCP overview, supported capabilities, and admin controls](https://developers.notion.com/guides/mcp/overview)
5. [Connect to Notion MCP with an OAuth-capable client](https://developers.notion.com/guides/mcp/get-started-with-mcp)
6. [Connection webhook subscriptions and signed payload validation](https://developers.notion.com/reference/webhooks)
7. [Current request-rate and size limits](https://developers.notion.com/reference/request-limits)

[^api]: [API introduction](https://developers.notion.com/reference/intro) describes HTTPS, JSON, resources, and request methods.
[^read]: [MCP capabilities](https://developers.notion.com/guides/mcp/overview) include search and reading; [API authorization](https://developers.notion.com/guides/get-started/authorization) explains content-access boundaries.
[^write]: [MCP overview](https://developers.notion.com/guides/mcp/overview) documents creating and updating content; [connection setup](https://developers.notion.com/guides/mcp/get-started-with-mcp) bounds operations to accessible content in the selected workspace.
[^auth]: [Authentication](https://developers.notion.com/reference/authentication) documents bearer token types; [authorization](https://developers.notion.com/guides/get-started/authorization) distinguishes content sharing, public OAuth, and user-scoped tokens; [MCP overview](https://developers.notion.com/guides/mcp/overview) specifies OAuth.
[^mcp]: [Hosted MCP and admin controls](https://developers.notion.com/guides/mcp/overview) and [client setup](https://developers.notion.com/guides/mcp/get-started-with-mcp) document hosting, endpoint, OAuth, and client access controls.
[^events]: [Webhooks](https://developers.notion.com/reference/webhooks) documents subscription verification, secure public endpoints, metadata-driven retrieval, and HMAC-SHA256 signature validation.
[^limits]: [Request limits](https://developers.notion.com/reference/request-limits) describes throttling, Retry-After, MCP-specific rate-limit reasons, and size constraints; [API pagination](https://developers.notion.com/reference/intro#pagination) describes supported endpoints and cursors.
