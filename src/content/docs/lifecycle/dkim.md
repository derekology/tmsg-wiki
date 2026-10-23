---
title: DKIM
description: How DomainKeys Identified Mail adds verifiable signatures to email.
---

DomainKeys Identified Mail (DKIM) lets a sending system add a cryptographic signature to an email. A receiving system can use the public key published in DNS to check whether the signed content and headers match the signature and whether the signing domain controlled the corresponding key. DKIM is specified in [RFC 6376](https://www.rfc-editor.org/rfc/rfc6376).

## How it works

The sender signs selected message headers and a body hash using a private key. The message includes a `DKIM-Signature` header with a signing domain (`d=`) and selector (`s=`); the receiver looks up the public key at a DNS name based on those values. A valid signature supports message integrity and domain authentication, but does not mean the message is wanted or safe.

For [DMARC](/lifecycle/dmarc/) to pass through DKIM, the DKIM signing domain must align with the domain in the visible `From` header under the selected alignment mode. A message can have a valid DKIM signature that does not align.

## Operational considerations

Enable DKIM for each legitimate sending service using its instructions, and confirm the signing domain and selector before publishing the DNS key. Protect private keys, rotate them according to a documented process, and test messages from every stream. Forwarding or message modification can affect authentication outcomes; monitor real receiver results rather than relying only on a vendor dashboard.

DKIM complements [SPF](/lifecycle/spf/) and [DMARC](/lifecycle/dmarc/). Check the current [Gmail sender guidelines](https://support.google.com/mail/answer/81126?hl=en) and [Yahoo sender best practices](https://senders.yahooinc.com/best-practices/) for provider-specific requirements.

## Sources

- [RFC 6376: DomainKeys Identified Mail](https://www.rfc-editor.org/rfc/rfc6376)
- [Google: Email sender guidelines](https://support.google.com/mail/answer/81126?hl=en)
- [Yahoo: Sender best practices](https://senders.yahooinc.com/best-practices/)
