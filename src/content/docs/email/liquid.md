---
title: Liquid
description: An open-source template language for rendering dynamic content in supported applications.
---

Liquid is an open-source template language originally created for Shopify and used by Shopify themes. It combines objects, tags, and filters to insert values, apply logic, and transform output in a template. Other products also implement Liquid or Liquid-like templating, but available objects, filters, and behavior depend on the host application.

## The main building blocks

- **Objects** output data provided by the application.
- **Tags** control template behavior, such as conditionals, iteration, or assigning a value.
- **Filters** transform values, such as formatting text or changing how a value is displayed.

For example, a template can check whether a product attribute exists before showing a section. The exact object path and supported filter are defined by the platform that renders the template. A template fragment copied from a Shopify theme may not work in another Liquid-based email or site builder.

## Use Liquid safely in messages

Treat personalization fields as potentially missing or unsuitable for direct display. Provide fallback content, encode values for their output context, and avoid using template logic to make decisions that should be enforced by the application's data or consent rules. Test with records that cover empty values, special characters, long content, and unexpected types.

Liquid performs rendering; it does not send messages or establish that a communication is permitted. Delivery, audience selection, and data governance remain responsibilities of the host system.

See [email rendering](/email/email-rendering/) and the [marketing systems guide](/concepts/marketing-systems/).

## Sources

- [Shopify Liquid documentation](https://shopify.github.io/liquid/)
- [Shopify theme Liquid reference](https://shopify.dev/docs/api/liquid)
