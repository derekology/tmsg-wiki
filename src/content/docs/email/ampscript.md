---
title: AMPscript
description: Personalizing and scripting content in Salesforce Marketing Cloud Engagement.
---

AMPscript is Salesforce Marketing Cloud Engagement's scripting language for working with data and personalizing marketing content. It can be used in supported Marketing Cloud contexts such as email and landing-page content. Common uses include substituting subscriber data, conditional content, formatting values, and looking up information through documented functions.

## How AMPscript works

AMPscript expressions and blocks are evaluated by Marketing Cloud when content is rendered or processed in a supported context. The language provides built-in functions and data access patterns documented by Salesforce. A value or function that works in one context should not be assumed to behave identically in every other execution context.

Keep content logic understandable: establish what data is expected, check for missing or invalid values, and provide a useful fallback. Separate business rules from presentation where possible, and coordinate changes with the owners of subscriber data and message templates.

## Test for real data conditions

- Preview using representative records, not only a single ideal example.
- Cover blank fields, unexpected values, encoding, date and locale variations, and lookup failures.
- Confirm that generated links and output are valid and appropriate for the recipient.
- Test the final rendered message and its plain-text or fallback experience.
- Avoid exposing sensitive data in message output or debug content.

AMPscript and [Server-Side JavaScript (SSJS)](/email/ssjs/) are distinct tools available in Salesforce Marketing Cloud. Choose the simplest language that fits the use case and execution context. The platform context matters; AMPscript is not a drop-in substitute for JavaScript in a browser or a general server application.

See [Salesforce Marketing Cloud Engagement](/tools/salesforce-marketing-cloud/) and [email rendering](/email/email-rendering/).

## Sources

- [Salesforce Developers: AMPscript for Marketing Cloud](https://developer.salesforce.com/docs/marketing/marketing-cloud-ampscript/guide/mc-ampscript-get-started.html)
- [Salesforce Developers: AMPscript reference](https://developer.salesforce.com/docs/marketing/marketing-cloud/guide/ampscript.html)
