---
title: In-App Messaging
description: How messages delivered inside an app or website support customer journeys.
---

In-app messaging displays content within a mobile app or web experience, typically while someone is using it. Common formats include a small banner or slide-up, a modal, and a full-screen message. The exact formats and targeting options depend on the platform and its implementation.

Unlike SMS, an in-app message is not sent to a phone number through a mobile carrier. It is also different from a push notification, which is delivered through the device or browser notification system and can appear outside the app or site. In-app messages can be useful for contextual guidance, feature announcements, or an offer tied to an action, without relying on an external inbox.

## Plan the experience

Decide what event, audience, or page state makes the message relevant, and define when it should stop appearing. Coordinate message rules with onboarding, product changes, and other communications so users do not see competing prompts. Use a message format and frequency that fit the task; an interruption may be inappropriate for a routine update or a critical workflow.

In-app messaging usually depends on an app or website integration, such as a platform SDK. Test on supported devices and screen sizes, including what happens when profile data is missing, a user changes accounts, or a message is dismissed. On shared devices, clear or refresh user-specific data at logout so one person's content is not shown to another.

Measure who was eligible and exposed, along with meaningful actions such as dismissals, clicks, or completion of the intended task. Exposure and clicks alone do not show whether the message improved the experience; use an appropriate comparison when evaluating impact.

Related pages: [SMS messaging](/channels/sms-messaging/), [email marketing](/email/email-marketing/), [marketing automation](/concepts/marketing-automation/), and [experimentation and A/B testing](/measurement/experimentation-and-ab-testing/).

## Sources

- [Braze documentation: In-app messages](https://www.braze.com/docs/developer_guide/in_app_messages) — Describes web and mobile in-app message formats, SDK implementation, and clearing user-specific data on logout.
- [Braze: In-app message prep guide](https://www.braze.com/docs/user_guide/channels/in_app_messages/best_practices/prep_guide) — Covers targeting, expiration, app versions, device testing, and message content considerations.
