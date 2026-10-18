---
title: Contributing
description: Add or improve AgentReady assessments with official sources and clear evidence.
---

Help improve AgentReady by correcting an assessment, updating stale evidence, or adding an app or service. Propose changes to the repository with a short explanation of what changed and the sources supporting it.

## Add or update an entry

Read the [assessment method](/assessment/), then use [GitHub](/apps/github/), [Notion](/apps/notion/), or [Slack](/apps/slack/) as a structural example.

Edit or add a Markdown file in `src/content/docs/apps/`. For a new entry, use a short kebab-case filename and include:

- A title, description, neutral introduction, category link, and official documentation link.
- The actual **Sources reviewed** date and an **Assessment basis** distinguishing documentation review from live testing.
- All seven capability checklist rows defined in the assessment method, each with a status, evidence or reason for uncertainty, and a claim-specific official-source footnote.
- Documentation-backed examples of a read and a write workflow, their authorization requirements, and service-specific constraints and unknowns. Say when a workflow is not verified and whether browser automation was evaluated.
- A Sources section with descriptive links to the reviewed official pages.

Link new entries from the alphabetical directory in `src/content/docs/apps/index.md` and the appropriate category page. Add new categories to the category index and keep navigation in `astro.config.mjs` current. In article text, use site routes such as `/apps/github/` and `/categories/` for internal links.

## Evidence requirements

- Use the [four capability statuses](/assessment/#capability-status-definitions), not an overall score or tier. Missing or conflicting evidence stays **Not verified** with a reason; **Not supported** requires an explicit official statement.
- Cite first-party documentation supporting the precise claim, including relevant permissions, account or plan restrictions, and transport requirements. Third-party MCP servers do not establish official MCP support; API limits do not establish MCP limits.
- Record the date you actually reviewed sources. Do not imply an integration was exercised because its documentation describes a capability. Any live-test claim must include the date, interface, environment, authorization scope, observed outcome, and limitations, separate from documentation-derived claims.
- Keep workflow examples hypothetical unless tested. Attribute human confirmation before externally visible writes to AgentReady guidance, not to the provider unless documented. Never publish credentials.

Before submitting, check that evidence supports each status, links and footnotes resolve, and directory and category listings include any new entry. Explain remaining unknowns or contradictory sources in the proposed change.
