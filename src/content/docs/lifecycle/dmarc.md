---
title: DMARC
description: How DMARC aligns SPF or DKIM authentication with the visible From domain.
---

Domain-based Message Authentication, Reporting, and Conformance (DMARC) lets a domain owner publish a policy for mail using its domain in the visible `From` header. A receiving system evaluates whether SPF or DKIM passes with the required alignment, then can apply the published policy and send aggregate reports where supported.

## Authentication and alignment

DMARC can pass when at least one of SPF or DKIM both passes and aligns with the visible From domain. Alignment can be relaxed or strict according to the DMARC policy. This distinction matters: a message can pass SPF or DKIM checks for a domain that is not aligned with the From domain, and therefore fail DMARC.

The DMARC record is published in DNS at `_dmarc` for the domain. Policy tags describe how receivers are asked to handle messages that fail and where reports may be sent. A policy is a request to receivers, not a guarantee that every receiver will handle failures identically. Begin by inventorying legitimate senders and analyzing reports; move to enforcement only when authorized mail streams are understood.

## Current specification and rollout

The DMARC standards were updated in 2026: [RFC 9989](https://www.rfc-editor.org/rfc/rfc9989.html) defines the core protocol, [RFC 9990](https://www.rfc-editor.org/rfc/rfc9990.html) covers aggregate reporting, and [RFC 9991](https://www.rfc-editor.org/rfc/rfc9991.html) covers failure reporting. DNS records and receiving behavior still need to be evaluated against the actual systems in use; provider guidance may lag or refer to earlier specifications.

DMARC works with [SPF](/lifecycle/spf/) and [DKIM](/lifecycle/dkim/). Follow the current [Gmail sender guidelines](https://support.google.com/mail/answer/81126?hl=en) and [Yahoo sender best practices](https://senders.yahooinc.com/best-practices/) for requirements that apply to your sending volume and audience.

## Sources

- [RFC 9989: DMARC core protocol](https://www.rfc-editor.org/rfc/rfc9989.html)
- [RFC 9990: DMARC aggregate reporting](https://www.rfc-editor.org/rfc/rfc9990.html)
- [RFC 9991: DMARC failure reporting](https://www.rfc-editor.org/rfc/rfc9991.html)
- [Google: Email sender guidelines](https://support.google.com/mail/answer/81126?hl=en)
- [Yahoo: Sender best practices](https://senders.yahooinc.com/best-practices/)
