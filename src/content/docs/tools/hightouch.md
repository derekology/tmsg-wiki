---
title: Hightouch
description: Hightouch data activation, warehouse syncs, and composable customer data workflows.
---

Hightouch is a data activation platform that connects modeled data to operational systems such as CRMs and marketing tools. Its documentation describes a workflow based on data sources, models, destinations, and syncs. Hightouch also presents a composable CDP approach in which warehouse data and modeled audiences can be activated through its tools.

In October 2026, Hightouch announced “Headless Hightouch,” which lets supported AI tools connect to its marketing agents through the Hightouch MCP server. Its examples include building and saving audiences, analyzing campaign data, and drafting lifecycle content or ads when the relevant products and agent features are enabled. The Hightouch application remains available for configuration and review; headless access adds another interface. Capabilities, setup, and access depend on workspace configuration and product entitlements.

MCP access can involve actions as well as reading information. Hightouch says operations use the authenticated workspace and its role-based access controls; teams should still review results and maintain approval processes before activating audiences or publishing content. For a platform-neutral explanation, see [headless marketing platforms](/concepts/headless-marketing-platform/); see the [glossary](/glossary/) for MCP and related terms.

## Where it fits

A data team can define customer or account models in a warehouse, then configure syncs to send selected fields or audiences to destinations. Marketers can use governed customer attributes and audiences for activation without treating the activation platform as the source of every underlying data point. The exact workflow and available destinations depend on a team's configuration and Hightouch's current product offering.

This pattern can suit organizations with a mature warehouse and a need to coordinate activation across multiple tools.

## Evaluation considerations

Trace a warehouse model through a Hightouch sync to an actual destination. Check the supported match keys and field mappings, sync timing, failure visibility, and what happens when a person leaves an audience or their consent changes. Confirm how deletions are handled in each destination rather than assuming a sync removes every downstream copy.

If considering headless access, test which audience or campaign actions the relevant workspace role can perform through the MCP server and how those actions are reviewed. Compare the warehouse modeling and activation responsibilities with [Twilio Segment](/tools/segment/) and [Treasure AI](/tools/treasure-ai/).

## Sources

- [Hightouch: Data activation concepts](https://hightouch.com/docs/concepts)
- [Hightouch: Syncs overview](https://hightouch.com/docs/syncs/overview)
- [Headless Hightouch: Marketing in the AI tools you already use](https://hightouch.com/blog/headless-hightouch) (published October 29, 2026)
- [Hightouch MCP server documentation](https://hightouch.com/docs/ai-integrations/mcp-server)
