---
title: Adobe Marketo Engage
description: An overview of Marketo Engage as a marketing automation and engagement platform.
---

Adobe Marketo Engage is a marketing automation platform for managing programs and customer engagement. Adobe's documentation covers campaign setup, Smart Campaigns, integrations, developer resources, and operational configuration. Its setup guidance also shows that a production implementation can involve CRM synchronization, website tracking, branded links, and email-authentication work—not just building a campaign.

## Typical role in a stack

Marketing teams can use an automation platform to coordinate audiences, messages, and follow-up actions across a customer lifecycle. In Marketo, the setup and data model determine what an audience or campaign means, which records are synchronized, and what activity becomes visible to sales or analytics systems. Campaign names, lifecycle statuses, and handoff rules should therefore be agreed across teams before automation is scaled.

## Evaluation considerations

Trace a lead from a CRM record and website activity into a Marketo Smart Campaign and back to the sales team. Check which records and activities synchronize, how lifecycle and handoff rules are represented, and how errors or delayed updates affect campaign eligibility.

Assess the work required for CRM synchronization, website tracking, branded links, and email authentication against the intended use case. Compare that operating model with [HubSpot](/tools/hubspot/), [Salesforce](/tools/salesforce/), or email-focused tools such as [Klaviyo](/tools/klaviyo/) and [Mailchimp](/tools/mailchimp/).

## Implementation considerations

Adobe's setup material calls out CRM sync, tracking code, and email deliverability configuration. Assign owners for those dependencies, test how records and activities synchronize, and monitor failures after launch. Access to a platform does not itself guarantee good data, compliant consent, or successful email placement.

## Related concepts

Explore [marketing automation](/concepts/marketing-automation/), [lead scoring and qualification](/concepts/lead-scoring-and-qualification/), [email deliverability](/lifecycle/email-deliverability/), and [account-based marketing](/concepts/account-based-marketing/).

## Sources

- [Adobe Marketo Engage documentation](https://experienceleague.adobe.com/en/docs/marketo-engage)
- [Adobe Marketo Engage setup steps](https://experienceleague.adobe.com/en/docs/marketo/using/getting-started/initial-setup/setup-steps)
- [Adobe Marketo Engage product overview](https://business.adobe.com/products/marketo.html)
