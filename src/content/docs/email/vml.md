---
title: VML
description: How Vector Markup Language is used as a legacy fallback in some HTML emails for Outlook.
---

Vector Markup Language (VML) is a legacy XML-based format for describing vector graphics and shapes. In email development, VML is chiefly encountered as a compatibility technique for certain classic Outlook for Windows rendering cases, such as background images or button shapes that are difficult to reproduce with CSS alone.

VML is not a general replacement for HTML and CSS, nor is it supported uniformly across email clients. It is usually paired with a conventional HTML/CSS version, often enclosed in Microsoft conditional comments so that the special markup is presented only to clients that need it. The exact behavior depends on the Outlook product and rendering version.

## Use it as a progressive enhancement

- Start with a usable HTML/CSS design and content that remain understandable without VML.
- Add VML only for a specific, tested rendering gap; avoid making critical information available only inside the VML branch.
- Ensure the VML and normal markup have matching text, links, and destination behavior.
- Test the final sent email in relevant Outlook versions and non-Outlook clients.
- Keep dimensions, colors, and text fallbacks aligned so a future template change does not create inconsistent variants.

VML adds markup and maintenance cost. If the design works acceptably without it, a simpler fallback may be more robust. See [email rendering](/email/email-rendering/) for testing guidance.

## Sources

- [Microsoft Learn: Vector Markup Language](https://learn.microsoft.com/en-us/windows/win32/vml/web-workshop---specs---standards----introduction-to-vector-markup-language--vml-)
- [Litmus: A guide to rendering differences in Microsoft Outlook clients](https://www.litmus.com/blog/a-guide-to-rendering-differences-in-microsoft-outlook-clients)
