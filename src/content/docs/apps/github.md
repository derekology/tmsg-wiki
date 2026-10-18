---
title: GitHub
description: A documentation-based checklist of GitHub REST and official MCP capabilities, issue workflows, permissions, webhooks, and operational constraints.
---

GitHub provides repository issue tracking and programmable interfaces for reading and managing issues. This entry focuses on those REST capabilities and GitHub's official Model Context Protocol (MCP) server.[^api][^mcp]

**Category:** [Developer tools](/categories/developer-tools/)

**Official documentation:** [GitHub REST API issue endpoints](https://docs.github.com/en/rest/issues/issues)

**Sources reviewed: 2026-10-17**

**Assessment basis: Documentation review; integrations not live-tested.**

## Capability checklist

Statuses follow the [assessment method](/assessment/) and describe individual documented capabilities, not an overall score.

| Capability | Status | Evidence and constraints |
| --- | --- | --- |
| Developer API | Documented | GitHub documents REST endpoints to list, retrieve, create, and update repository issues.[^api] |
| Read operations | Documented with constraints | Issue endpoints support listing and retrieval within the caller's access. Issue listings can include pull requests; use the `pull_request` key to distinguish them. Fine-grained token permissions for repository issue reads are documented separately from writes.[^reads] |
| Write operations | Documented with constraints | REST endpoints create and update issues. Creating an issue requires repository access and appropriate token permissions; setting labels, milestones, or assignees on a new issue has additional repository-access requirements. Creation triggers notifications and can encounter secondary rate limits.[^writes] |
| Authentication and permissions | Documented with constraints | REST authentication supports personal access tokens, GitHub App tokens, and workflow `GITHUB_TOKEN` credentials. Required permissions depend on the endpoint and token type. GitHub recommends fine-grained personal access tokens where possible and GitHub Apps for organization or delegated-user use.[^auth] |
| Official MCP | Documented with constraints | GitHub provides and maintains an MCP server with remote GitHub-hosted and local configurations. OAuth-approved scopes or PAT permissions, organization policies, client prerequisites, and the underlying feature's access requirements constrain available actions.[^mcp] |
| Webhooks and events | Documented with constraints | Repository webhooks deliver HTTP `POST` event payloads to a configured receiver. Subscriptions are limited to resources available where the webhook is installed; REST webhook management has separate permissions. This does not establish MCP event support.[^events] |
| Rate limits and pagination | Documented with constraints | REST primary limits depend on authentication, and secondary limits also apply. Issue list endpoints document `page` and `per_page` pagination. Follow current response-header and throttling guidance rather than assuming a universal quota; these REST limits are not an assessed MCP quota.[^limits] |

## Example agent workflows

These are documentation-backed possibilities, not workflows executed by AgentReady.

- **Retrieve issue-triage context:** an agent could list open issues in an authorized repository, retrieve selected issue details, and summarize candidates for human triage without changing repository state. For private resources, give its credential the required repository access and endpoint-specific read permissions; a fine-grained token can use the documented Issues read permission. Separate pull requests from issues in returned listings.[^reads]
- **Draft and create an issue:** an agent could prepare an issue title and body for review, then create the approved issue in the intended repository. The acting user needs repository access, and a fine-grained token needs Issues write permission for the create endpoint. Issues must be enabled; adding labels or assignees on creation requires additional access. **AgentReady guidance:** obtain human confirmation of the repository, title, body, and any metadata before the externally visible write. This recommendation is not a GitHub confirmation requirement.[^writes]

## Constraints and unknowns

- **Account and organization access:** a token does not bypass repository visibility or the acting identity's permissions. Organizations using SAML SSO can require token authorization; classic PATs and fine-grained PATs have different authorization steps. Prefer the narrowest credential suitable for the intended endpoints.[^auth]
- **MCP configuration and policy:** use an MCP host compatible with the chosen remote or local configuration and follow its client-specific prerequisites. GitHub documents organization or enterprise controls for MCP use with Copilot, as well as OAuth and PAT restrictions. Enterprise Managed User PAT authentication may be disabled by policy.[^mcp]
- **Feature and plan requirements:** GitHub says the MCP server is available to GitHub users regardless of plan, but individual tools inherit the corresponding feature's access requirements, including paid licenses where applicable. Server availability is distinct from a particular client's prerequisites; it is not evidence that every tool is free or every client requires Copilot.[^mcp]
- **Event handling:** repository webhooks require an external receiver and selected event subscriptions. GitHub documents webhook secrets for delivery signatures and recommends retaining TLS certificate verification. Webhook configuration is separate from configuring an MCP client.[^events]
- **Operational boundaries:** REST callers must handle pagination, authentication-dependent primary limits, and secondary throttling, including the documented `403`/`429` and retry-header behavior. This review does not establish a separate MCP quota or assume that REST quota figures describe MCP traffic.[^limits]
- **Not evaluated:** browser automation was not evaluated. No credentials, live API calls, MCP connections, webhook deliveries, or account-specific policy outcomes were tested; documented support is not evidence of a successful integration.

## Sources

1. [GitHub REST API: issue listing, retrieval, creation, and updates](https://docs.github.com/en/rest/issues/issues)
2. [GitHub REST API: authentication methods and token guidance](https://docs.github.com/en/rest/authentication/authenticating-to-the-rest-api?apiVersion=2022-11-28)
3. [GitHub REST API: permissions required for fine-grained personal access tokens](https://docs.github.com/en/rest/authentication/permissions-required-for-fine-grained-personal-access-tokens)
4. [GitHub MCP server: official setup, hosting options, authentication, and prerequisites](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/customize-copilot/extend-copilot-with-tools-and-context/set-up-the-github-mcp-server)
5. [GitHub webhooks: subscriptions, delivery, and resource boundaries](https://docs.github.com/en/webhooks/about-webhooks)
6. [GitHub REST API: repository webhook configuration and management](https://docs.github.com/en/rest/repos/webhooks)
7. [GitHub REST API: primary and secondary rate limits and throttling responses](https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api?apiVersion=latest)

[^api]: GitHub's [REST API endpoints for issues](https://docs.github.com/en/rest/issues/issues) document list, get, create, and update operations.
[^reads]: GitHub documents [repository issue listing](https://docs.github.com/en/rest/issues/issues#list-repository-issues), including the `pull_request` distinction, and [retrieving an issue](https://docs.github.com/en/rest/issues/issues#get-an-issue). The [Issues permission mapping](https://docs.github.com/en/rest/authentication/permissions-required-for-fine-grained-personal-access-tokens#repository-permissions-for-issues) identifies the corresponding read endpoints.
[^writes]: GitHub's [create-issue documentation](https://docs.github.com/en/rest/issues/issues#create-an-issue) describes repository access, disabled issues, notifications, and metadata restrictions; its [Issues permission mapping](https://docs.github.com/en/rest/authentication/permissions-required-for-fine-grained-personal-access-tokens#repository-permissions-for-issues) lists create and update write permissions. See also [updating an issue](https://docs.github.com/en/rest/issues/issues#update-an-issue).
[^auth]: GitHub's [REST authentication guidance](https://docs.github.com/en/rest/authentication/authenticating-to-the-rest-api?apiVersion=2022-11-28) covers token types, fine-grained token recommendations, app authentication, and SAML SSO. The [fine-grained token permission reference](https://docs.github.com/en/rest/authentication/permissions-required-for-fine-grained-personal-access-tokens) maps permissions to endpoints and explains public-resource exceptions.
[^mcp]: GitHub's [official MCP setup documentation](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/customize-copilot/extend-copilot-with-tools-and-context/set-up-the-github-mcp-server) identifies GitHub as provider and maintainer, describes remote and local configurations, and documents OAuth/PAT access, organization policies, client prerequisites, and feature-specific license requirements.
[^events]: GitHub's [webhook overview](https://docs.github.com/en/webhooks/about-webhooks) describes event subscriptions and installed-resource boundaries. The [repository webhook reference](https://docs.github.com/en/rest/repos/webhooks) documents HTTP payloads, receiver configuration, secrets, and TLS verification; the [Webhooks permission mapping](https://docs.github.com/en/rest/authentication/permissions-required-for-fine-grained-personal-access-tokens#repository-permissions-for-webhooks) distinguishes webhook read and write permissions.
[^limits]: GitHub's [REST rate-limit guidance](https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api?apiVersion=latest) distinguishes primary and secondary limits and explains response headers and retry behavior. The [repository issue list parameters](https://docs.github.com/en/rest/issues/issues#list-repository-issues) document page-based pagination. These are REST sources, not evidence of an MCP-specific quota.
