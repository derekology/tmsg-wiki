---
title: Email Rendering
description: Why email appearance varies across clients, platforms, and rendering engines.
---

Email rendering is the process by which a mail client interprets an email's HTML, CSS, images, and text to display a message. Email does not render in one universal browser environment: clients differ in supported markup, sanitization, default styles, image handling, viewport behavior, and account or device settings.

## Clients and engines are not interchangeable

The same message can look different in Gmail, Apple Mail, Yahoo Mail, Outlook on the web, Outlook for Mac, Outlook mobile, and desktop Outlook for Windows. Even a client brand can include distinct applications and rendering paths. Classic Outlook for Windows has historically used Microsoft Word technology to render HTML email, while other Outlook products and newer applications use different implementations. Treat exact behavior as product- and version-dependent; do not assume one Outlook preview represents every Outlook user.

Webmail clients may rewrite or sanitize markup and styles. Mobile applications add differences in viewport, scaling, dark mode, and image handling. A feature that is supported by a browser may still be removed, altered, or unsupported in a particular email client.

## Build for graceful variation

- Use simple, semantic HTML and resilient layout patterns; provide useful content when styling is unavailable.
- Use inline or otherwise client-compatible CSS according to the sending platform and target clients.
- Keep text readable when images are blocked, and provide meaningful alternative text for informative images.
- Design links, calls to action, and hierarchy to work with keyboard and assistive technology.
- Check dark-mode behavior, long content, narrow screens, zoom, and font fallback.
- Use conditional markup or [VML](/email/vml/) only when a specific client limitation justifies the added complexity.
- Send and inspect the actual message, including the final HTML after the email platform processes it.

## Test against the audience

Prioritize clients using audience and business evidence rather than attempting to test every possible environment. Combine rendered previews with real-device or inbox checks for critical messages. Validate links, images, personalization, plain-text alternatives, and fallback behavior in addition to visual layout. Re-test when templates, content, sending platforms, or important client behaviors change.

Related pages: [MJML](/email/mjml/), [VML](/email/vml/), [AMPscript](/email/ampscript/), [SSJS](/email/ssjs/), and [Velocity Script](/email/velocity-script/).

## Sources

- [Litmus: A guide to rendering differences in Microsoft Outlook clients](https://www.litmus.com/blog/a-guide-to-rendering-differences-in-microsoft-outlook-clients)
- [Gmail: CSS support](https://developers.google.com/gmail/design/css)
