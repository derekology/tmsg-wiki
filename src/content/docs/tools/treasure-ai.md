---
title: Treasure AI
description: Treasure AI's customer data platform and agentic experience platform positioning.
---

Treasure AI is the current name for the company formerly known as Treasure Data. In April 2026, the company announced the name change and a broader focus on an agentic experience platform. Its announcement describes this direction as building on its customer data platform rather than simply renaming the previous product. Product positioning and capabilities are vendor-described and may evolve.

In October 2026, Treasure AI announced a headless direction: alongside its visual workspace, it is making platform capabilities available through agent-oriented interfaces. The company describes Treasure Code, integrations for supported AI development tools, and an Agent Gateway with Slack and Teams connectors and a remote MCP server rolling out. Its MCP documentation also describes a separate server for searching product documentation and API references. These are different uses: one is for platform operations, the other for documentation lookup. Availability and supported actions depend on the integration and account setup.

Its [Treasure AI Studio](/tools/treasure-ai-studio/) product provides an AI-assisted chat interface for querying data, building audiences, orchestrating journeys, and generating reports across web, desktop, and mobile.

Headless access does not mean the visual workspace is going away. It adds ways for people and agents to reach supported platform capabilities. When evaluating agent access, confirm its permissions, approval requirements, audit trail, data boundaries, and which actions are available in your environment. See [headless marketing platforms](/concepts/headless-marketing-platform/) for the general architecture and [the glossary](/glossary/) for terms such as MCP and agent.

## Where it fits

The platform is aimed at organizations that need to bring customer data together and use it for segmentation, activation, and customer experiences. Its CDP foundation makes data quality, identity resolution, consent and preference handling, and integrations central evaluation topics. The announced AI direction adds questions about what agents can access or change, what approvals are required, how actions are logged, and how generated content or decisions are reviewed.

Treasure AI describes Activation as AI-powered engagement and personalization using unified customer data, including omnichannel campaigns and real-time web personalization. Its product overview lists email, SMS, mobile push, in-app messaging, and LINE among supported channels; channel availability depends on account setup and product access. See [Treasure AI Personalization Studio](/tools/treasure-ai-personalization-studio/) and [Treasure AI Engage Studio](/tools/treasure-ai-engage-studio/) for two product profiles from this broader activation portfolio.

Treat claims about automation or business outcomes as vendor positioning until tested against a defined use case.

## Evaluation considerations

Trace source data through the CDP into a customer profile, audience, and the intended Engage or Personalization Studio workflow. Check identity rules, update timing, consent handling, and which activation channels and product entitlements are available in the proposed account. Compare the ownership of data and audiences with [Hightouch](/tools/hightouch/) and [Twilio Segment](/tools/segment/).

For headless or agent-assisted use, distinguish the documentation-search MCP server from interfaces that can operate on platform resources. Confirm which actions are available, what data they can access, and how permissions, approvals, and logs apply. Evaluate migration and integration work against the existing warehouse and CRM.

## Implementation considerations

Establish human approval boundaries and ensure data access follows the same privacy and governance rules as other marketing systems.

## Sources

- [Treasure AI: Why We're Becoming Treasure AI](https://www.treasure.ai/blog/treasure-ai-announcement)
- [Treasure AI Goes Headless: A CDP Built for AI Agents](https://www.treasure.ai/blog/treasure-ai-goes-headless) (published October 14, 2026)
- [Treasure AI product overview](https://docs.treasure.ai/products)
- [Treasure AI Personalization Studio documentation](https://docs.treasure.ai/products/marketing-cloud/personalization-studio)
- [Treasure AI Engage Studio documentation](https://docs.treasure.ai/products/marketing-cloud/engage-studio)
- [Treasure AI MCP Server documentation](https://docs.treasure.ai/getting-started/ai/mcp-server-docs)
- [Treasure AI](https://www.treasure.ai/)
