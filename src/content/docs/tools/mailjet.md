---
title: Mailjet
description: An overview of Mailjet for marketing email, transactional sending, and email APIs.
---

Mailjet provides email products and developer interfaces for sending and managing email. Its developer documentation covers sending through APIs and related integration workflows. Teams should verify the specific marketing, transactional, template, and account capabilities available to them directly in current vendor documentation and configuration.

## Where it may fit

An organization may consider Mailjet for campaign email, application-triggered email, or a combination of both. These use cases have different operational needs: marketing campaigns require audience, consent, and suppression controls, while transactional messages need reliable application integration, event handling, and appropriate content boundaries. A shared provider does not remove the need to distinguish these streams.

## Evaluation considerations

Assess Mailjet against both sending streams, rather than assuming a shared provider gives them the same operating model:

- For marketing campaigns, check the available template, approval, audience, unsubscribe, and suppression workflows in the proposed account.
- For application-triggered messages, test the required API or SMTP integration, event or webhook handling, bounce response, and failure recovery.
- Determine how domains, authentication, access, and deliverability monitoring will be managed across the two streams, and what work remains in the surrounding [marketing system](/concepts/marketing-systems/).

Mailjet is not interchangeable with an email-authoring framework such as [MJML](/email/mjml/); the former is a sending and email platform, while MJML is used to author and compile responsive email markup.

## Sources

- [Mailjet Developer Documentation](https://dev.mailjet.com/)
- [Mailjet Email API](https://dev.mailjet.com/docs/email-api)
