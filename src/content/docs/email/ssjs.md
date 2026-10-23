---
title: Server-Side JavaScript (SSJS)
description: Where server-side JavaScript fits in Salesforce Marketing Cloud Engagement.
---

Server-Side JavaScript (SSJS) is JavaScript executed in supported Salesforce Marketing Cloud Engagement contexts. Salesforce documents its syntax and platform libraries for uses such as dynamic content and programmatic operations within Marketing Cloud. Its runtime and available APIs are platform-specific; code should not be assumed to have the same browser or Node.js capabilities.

## When teams use it

SSJS can be useful when a supported Marketing Cloud activity benefits from JavaScript syntax or a platform library. It can be used alongside AMPscript in some implementations, but mixing languages can make a template harder to review, test, and maintain. Favor the smallest amount of logic that satisfies the requirement, and keep business rules consistent across messages and automations.

## Operational safeguards

- Follow Salesforce's current syntax and context-specific documentation; supported behavior can vary by execution location.
- Validate inputs and check for absent or unexpected data before acting on it.
- Handle failures explicitly, and avoid returning success-shaped content when an operation fails.
- Keep secrets and sensitive values out of message output and logs.
- Test execution limits, data edge cases, permissions, and error paths in a safe environment before production use.
- Document dependencies and ownership so future maintainers can understand the code and its side effects.

Do not copy examples from standard JavaScript environments without checking whether the language features, libraries, and APIs are supported in the target Marketing Cloud context.

See [AMPscript](/email/ampscript/), [Salesforce Marketing Cloud Engagement](/tools/salesforce-marketing-cloud/), and [email rendering](/email/email-rendering/).

## Sources

- [Salesforce Developers: Server-Side JavaScript](https://developer.salesforce.com/docs/marketing/marketing-cloud/guide/ssjs_serverSideJavaScript.html)
- [Salesforce Developers: SSJS syntax guide](https://developer.salesforce.com/docs/marketing/marketing-cloud/guide/ssjs_syntaxGuide.html)
