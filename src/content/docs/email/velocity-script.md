---
title: Velocity Script
description: Using Apache Velocity-based email scripting in Adobe Marketo Engage.
---

Velocity is a template language used in Adobe Marketo Engage email script tokens to generate dynamic email content. A script can read supported lead and related-object data, apply conditional logic, and format output for the recipient. It is intended for personalization and content logic within Marketo's scripting context—not as a general-purpose application runtime.

## How it fits in Marketo

A Marketo email script token contains Velocity code and can be referenced from email content. The script can evaluate fields and, where the supported context provides them, related records such as custom objects. This can support use cases such as rendering a recipient-specific list or selecting content from available data. Data availability depends on Marketo configuration and the object relationships exposed to the script.

Velocity uses directives such as `#if`, `#foreach`, and `#set`, and references variables with a `$` prefix. Apache Velocity itself is a separate open-source project; Marketo's available context, tools, and behavior are determined by Adobe's implementation.

## Safe implementation practices

- Keep script logic focused and move complex data preparation upstream where possible.
- Check for missing, blank, or unexpected values before formatting output.
- Escape values appropriately for their output context, especially when inserting data into HTML or URLs.
- Avoid assuming every record has related-object rows or that a requested object is available to the email.
- Test with representative lead records, including empty and unusual data, using Marketo's preview or sample-send workflow.
- Recheck output after changes to the data model, custom objects, or template.

Scripted personalization can fail in ways that are hard to see in a generic preview. Include fallbacks so missing data does not create broken markup or misleading copy. See [Adobe Marketo Engage](/tools/marketo-engage/) and [email rendering](/email/email-rendering/).

## Sources

- [Adobe Marketo Engage: Email scripting](https://experienceleague.adobe.com/en/docs/marketo-developer/marketo/email-scripting)
- [Adobe Marketo Engage: Email scripting examples](https://experienceleague.adobe.com/en/docs/marketo-developer/marketo/examples)
- [Apache Velocity user guide](https://velocity.apache.org/engine/devel/user-guide.html)
