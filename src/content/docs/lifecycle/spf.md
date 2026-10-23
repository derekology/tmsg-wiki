---
title: SPF
description: How Sender Policy Framework DNS records authorize email sending hosts.
---

Sender Policy Framework (SPF) lets a domain publish which sending hosts are authorized to send mail using that domain in the SMTP envelope identity. Receiving systems can retrieve the policy from DNS and evaluate a sending host against it. SPF is specified in [RFC 7208](https://www.rfc-editor.org/rfc/rfc7208).

## What SPF does—and does not do

SPF checks an SMTP identity, commonly the envelope sender domain, not necessarily the visible address in the message's `From` header. SPF alone does not sign message content or prove that the visible From domain is aligned. [DMARC](/lifecycle/dmarc/) evaluates alignment between SPF or DKIM authentication and the visible From domain.

An SPF policy is published as a DNS TXT record for the relevant domain. A domain should have one SPF policy record; consolidate authorized sending services rather than publishing competing SPF records. Each service's include or redirect mechanisms can add DNS lookups, so account for the RFC's lookup limit and test the complete record.

## Practical use

Inventory every legitimate sender—including marketing platforms, CRM notifications, support systems, and internal infrastructure—before publishing or changing the policy. Use the vendor's current setup instructions and coordinate DNS changes with the domain owner. Removing a source that still sends mail can cause SPF failures; authorizing a broad source can grant more sending authority than intended.

SPF is one layer of email authentication, alongside [DKIM](/lifecycle/dkim/) and [DMARC](/lifecycle/dmarc/). For provider-specific sending requirements, consult the current [Gmail sender guidelines](https://support.google.com/mail/answer/81126?hl=en) and [Yahoo sender best practices](https://senders.yahooinc.com/best-practices/).

## Sources

- [RFC 7208: Sender Policy Framework](https://www.rfc-editor.org/rfc/rfc7208)
- [Google: Email sender guidelines](https://support.google.com/mail/answer/81126?hl=en)
- [Yahoo: Sender best practices](https://senders.yahooinc.com/best-practices/)
