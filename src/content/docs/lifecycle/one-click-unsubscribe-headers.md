---
title: One-Click Unsubscribe Headers
description: RFC 8058 headers that let compatible mail clients submit an unsubscribe request.
---

One-click unsubscribe headers let a compatible mail client offer a direct unsubscribe action for a mailing list. [RFC 8058](https://www.rfc-editor.org/rfc/rfc8058) defines the `List-Unsubscribe-Post` header and how it works with an HTTPS `List-Unsubscribe` URL.

## Header pattern

A message that supports RFC 8058 includes headers such as:

```text
List-Unsubscribe: <https://example.com/unsubscribe/token>
List-Unsubscribe-Post: List-Unsubscribe=One-Click
```

The URL above is illustrative only. A receiving client that supports the mechanism sends an HTTPS POST to the endpoint to request the unsubscribe. The endpoint should process the request without requiring sign-in, confirmation, or another action from the recipient. The message must also have a valid DKIM signature that covers both unsubscribe headers, as described in the RFC.

## Implementation safeguards

Use a per-recipient, purpose-limited URL that cannot expose account data or authorize unrelated actions. Make the endpoint idempotent, avoid requiring cookies or an authenticated session, and record the resulting suppression promptly. Test the exact headers on a delivered message and verify that a POST updates the correct subscription.

One-click headers do not replace a visible unsubscribe link in the message body, nor do they define the full legal basis for sending. Google and Yahoo publish separate sender requirements, including which messages need one-click functionality and timing for processing requests; check their current guidance for your sending volume and recipient base.

## Sources

- [RFC 8058: Signaling One-Click Functionality for List Email Headers](https://www.rfc-editor.org/rfc/rfc8058)
- [Google: Email sender guidelines](https://support.google.com/mail/answer/81126?hl=en)
- [Yahoo: Sender best practices](https://senders.yahooinc.com/best-practices/)
