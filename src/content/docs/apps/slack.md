---
title: Slack
description: Documentation-based assessment of Slack APIs, official MCP access, permissions, events, and operational constraints for agents.
---

Slack is a communication service organized around channels, direct messages, and shared workspace discussions. Its Web API and official hosted MCP server document ways for authorized applications to retrieve context and take actions.

Category: [Communication](/categories/communication/)  
Official documentation: [Slack developer documentation](https://docs.slack.dev/apis/web-api/)  
Sources reviewed: 2026-10-17  
Assessment basis: Documentation review; integrations not live-tested.

## Capability checklist

Statuses follow the [assessment method](/assessment/). They describe documented capabilities, not an overall readiness score.

| Capability | Status | Evidence and constraints |
| --- | --- | --- |
| Developer API | Documented | The Slack Web API exposes HTTP RPC-style methods for querying information and changing workspace state; it is not a REST API.[^api] |
| Read operations | Documented with constraints | Official MCP tools support searching messages and retrieving channel or thread history. Access depends on the invoking user's authorization and the scopes for the particular search or conversation type.[^read] |
| Write operations | Documented with constraints | MCP supports sending messages on behalf of the authenticated user; the send-message tool requires the `chat:write` user scope. Read authorization alone does not grant write access.[^write] |
| Authentication and permissions | Documented with constraints | MCP clients require a registered Slack app and user authorization through OAuth, with tool-specific user scopes. Slack's development guide describes enabling MCP for the app, configuring OAuth, and installing it for the invoking user.[^auth] |
| Official MCP | Documented with constraints | Slack hosts the server at `https://mcp.slack.com/mcp` using Streamable HTTP. SSE and Dynamic Client Registration are not supported. Only internal or directory/Marketplace-published apps may use MCP; unlisted apps are prohibited.[^mcp] |
| Webhooks and events | Documented with constraints | The Events API delivers subscribed events through HTTP request URLs or Socket Mode, subject to authorization, scopes, and conversation visibility. HTTP deliveries require a timely acknowledgement: HTTP 2xx within three seconds. This is separate from the MCP transport.[^events] |
| Rate limits and pagination | Documented with constraints | Corresponding MCP actions and Web API methods share action-specific limits, not a universal request quota. Slack documents HTTP 429 and `Retry-After` handling. Supported Web API methods use cursor pagination; consult each method's pattern. The MCP overview also explicitly documents pagination for listing user channels, not a universal pagination contract for all tools.[^limits][^pagination][^mcp-pagination] |

## Example agent workflows

- **Retrieve discussion context:** An authorized agent could search for a project's prior decisions, read relevant threads, and summarize the discussion for the requesting user. The registered app needs the applicable search user scopes and, for channel or thread retrieval, the history scopes for the relevant conversation types. Authorization must cover the intended content; this is not workspace-wide access by default.[^read][^auth]
- **Propose and send a message:** An agent could draft a project update for review and then send it to a chosen conversation using Slack's documented MCP messaging capability. The invoking user must authorize the registered app with the `chat:write` user scope.[^write][^auth] **AgentReady guidance:** obtain human confirmation of the destination and final text before sending an externally visible message. This is an editorial safety recommendation, not a claim that Slack mandates that confirmation step.

These are documentation-backed possibilities, not workflows exercised by AgentReady.

## Constraints and unknowns

- **App eligibility and workspace policy:** A custom MCP client must be backed by a registered app with a fixed app ID. Internal and directory/Marketplace-published apps are eligible; unlisted apps are not. Workspace administrators can manage and approve MCP integrations through Slack's app approval process. If the app has an IP allowlist, the MCP client's requests are subject to it.[^mcp]
- **Identity and least privilege:** MCP tools act with user authorization. Select only the user scopes needed for the intended tools; do not assume that a bot token or successful app installation grants every MCP action. Slack's development example distinguishes user scopes for MCP from bot scopes for its in-Slack experience.[^auth]
- **Transport and event delivery:** Use the documented Streamable HTTP endpoint rather than assuming SSE or Dynamic Client Registration compatibility. Events API subscriptions require their own configuration and permissions; their HTTP or Socket Mode delivery options do not establish MCP event-subscription support.[^mcp][^events]
- **Operational limits:** Check the current limits for each action and app distribution type, including the documented rules for conversation history and replies. Respect `Retry-After` on rate-limited HTTP requests and follow the pagination pattern of the specific method or tool. Shared action limits do not imply identical pagination interfaces across MCP and the Web API.[^limits][^pagination][^mcp-pagination]
- **Assessment boundary:** No account, workspace, subscription plan, client, or live integration was tested. Plan-specific access and the behavior of a particular deployment remain unverified by this review; do not interpret this as unsupported functionality. Browser automation was not evaluated.

## Sources

1. [Slack Web API — HTTP methods, authentication, and workspace operations](https://docs.slack.dev/apis/web-api/).
2. [Slack MCP server overview — tools, user scopes, transport, app eligibility, and shared action limits](https://docs.slack.dev/ai/slack-mcp-server/).
3. [Developing a sample app with the Slack MCP Server — app setup, OAuth, and user authorization](https://docs.slack.dev/ai/slack-mcp-server/developing/).
4. [Slack Events API — subscriptions, permission model, delivery, and acknowledgements](https://docs.slack.dev/apis/events-api/).
5. [Slack Web API rate limits — method-specific limits, app distribution rules, and HTTP 429 handling](https://docs.slack.dev/apis/web-api/rate-limits/).
6. [Slack Web API pagination — cursor-based methods and method-specific pagination patterns](https://docs.slack.dev/apis/web-api/pagination/).

[^api]: [Slack Web API: basic overview](https://docs.slack.dev/apis/web-api/#basics) describes querying and changing workspace state through HTTP RPC-style methods.
[^read]: [Slack MCP overview: searching](https://docs.slack.dev/ai/slack-mcp-server/#searching), [retrieving messages](https://docs.slack.dev/ai/slack-mcp-server/#retrieving-sending-messages), and [tool-specific user scopes](https://docs.slack.dev/ai/slack-mcp-server/#oauth-scopes) document search and history access with the appropriate permissions.
[^write]: [Slack MCP overview: retrieving and sending messages](https://docs.slack.dev/ai/slack-mcp-server/#retrieving-sending-messages) and [OAuth scopes](https://docs.slack.dev/ai/slack-mcp-server/#oauth-scopes) document message sending and its `chat:write` user scope.
[^auth]: [Slack MCP overview: app identity](https://docs.slack.dev/ai/slack-mcp-server/#app-identity) and [authentication](https://docs.slack.dev/ai/slack-mcp-server/#authentication), together with [the development guide](https://docs.slack.dev/ai/slack-mcp-server/developing/), describe registered apps, OAuth, user scopes, and installation.
[^mcp]: [Slack MCP overview](https://docs.slack.dev/ai/slack-mcp-server/), especially transport protocol, app identity, and security concerns, documents Slack hosting, Streamable HTTP, the endpoint, excluded protocols, eligible apps, administrator controls, and IP allowlists.
[^events]: [Slack Events API: permission model](https://docs.slack.dev/apis/events-api/#permission-model), [delivery options](https://docs.slack.dev/apis/events-api/), and [responding to events](https://docs.slack.dev/apis/events-api/#responding) document visibility constraints and HTTP acknowledgement requirements.
[^limits]: [Slack MCP overview: rate limits](https://docs.slack.dev/ai/slack-mcp-server/#rate-limits) states that corresponding MCP and Web API actions share limits. [Web API rate limits](https://docs.slack.dev/apis/web-api/rate-limits/), including its response-header guidance, documents method-specific limits and HTTP 429 with `Retry-After`.
[^pagination]: [Slack pagination guide](https://docs.slack.dev/apis/web-api/pagination/) documents supported cursor-based methods and identifies individual method documentation as the source of truth; [rate-limit pagination guidance](https://docs.slack.dev/apis/web-api/rate-limits/#pagination) explains stricter limits when pagination is not used.
[^mcp-pagination]: [Slack MCP overview: searching throughout Slack](https://docs.slack.dev/ai/slack-mcp-server/#searching) explicitly describes pagination for the list-user-channels tool.
