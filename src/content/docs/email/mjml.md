---
title: MJML
description: A responsive email markup framework that compiles to email-oriented HTML.
---

MJML is an open-source markup framework for building responsive email layouts. Developers write MJML components and compile them into HTML intended to work across email clients. MJML can reduce the amount of client-specific layout markup authors write, but it does not make every client render every feature identically.

## A typical workflow

1. Create an MJML document using semantic components such as sections, columns, text, images, and buttons.
2. Compile it with the MJML toolchain into HTML.
3. Inspect and test the generated HTML in the target email clients.
4. Send through the chosen email platform, then monitor the actual message and feedback.

MJML is a content-authoring and compilation tool, not an email service, audience database, or deliverability guarantee. Generated HTML still needs to be checked for accessibility, links, image behavior, dark mode, client-specific layout issues, and the final message's plain-text alternative.

## Include it in a maintainable process

Keep source MJML under version control, use repeatable builds, and review changes to compiled output when upgrading tooling. Test components in the clients important to the audience, including difficult cases such as narrow screens and older Outlook desktop versions if they are in scope. Consider whether a shared component should be a reusable partial and document any custom styles or client-specific fallbacks.

See [email rendering](/email/email-rendering/), [VML](/email/vml/), and the [Mailjet profile](/tools/mailjet/).

## Sources

- [MJML documentation](https://mjml.io/documentation/)
- [MJML project on GitHub](https://github.com/mjmlio/mjml)
