---
title: Mailjet
description: An overview of Mailjet for marketing email, transactional sending, and email APIs.
---

Mailjet provides email products and developer interfaces for sending and managing email. Its developer documentation covers sending through APIs and related integration workflows. Teams should verify the specific marketing, transactional, template, and account capabilities available to them directly in current vendor documentation and configuration.

## Where it may fit

An organization may consider Mailjet for campaign email, application-triggered email, or a combination of both. These use cases have different operational needs: marketing campaigns require audience, consent, and suppression controls, while transactional messages need reliable application integration, event handling, and appropriate content boundaries. A shared provider does not remove the need to distinguish these streams.

Evaluation should cover:

- Sending architecture, authentication, domain setup, and integration ownership.
- How templates, approvals, audience data, preferences, and suppression are managed.
- API or SMTP requirements, delivery and bounce handling, event/webhook processing, and failure recovery.
- Deliverability monitoring, access controls, data processing terms, support, and total cost.
- How the service connects to the organization's [marketing system](/concepts/marketing-systems/) and existing [email deliverability](/lifecycle/email-deliverability/) practices.

Mailjet is not interchangeable with an email-authoring framework such as [MJML](/email/mjml/); the former is a sending and email platform, while MJML is used to author and compile responsive email markup.

## Sources

- [Mailjet Developer Documentation](https://dev.mailjet.com/)
- [Mailjet Email API](https://dev.mailjet.com/docs/email-api)
