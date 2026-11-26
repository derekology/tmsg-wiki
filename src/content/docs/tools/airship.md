---
title: Airship
description: Airship coordinates customer messaging and in-app experiences across supported channels.
---

Airship is a customer engagement platform with tools for messaging, in-app experiences, and campaign orchestration. Its documentation covers push notifications, SMS, email, in-app messaging, web experiences, audience segmentation, and developer integrations.

## Where it fits

Teams can use Airship to coordinate customer communications across supported channels. Its Journeys feature supports multi-step, cross-channel messaging workflows, while Scenes are used to create native in-app and web experiences. Airship also documents mobile and web SDKs, REST APIs, audience tools, and preference centers.

## Evaluation considerations

Assess whether Journeys and Scenes can support the intended combination of push, in-app, and web experiences. For a representative use case, trace how an app or web event and a person's identifiers reach an audience, trigger an experience, and respect channel preferences across devices.

Compare the SDK and API work, experience authoring, and channel availability with alternatives such as [Braze](/tools/braze/) and [Bloomreach](/tools/bloomreach/); confirm the required Airship products and configuration.

## Implementation considerations

Implementation depends on the quality of audience data, the identifiers used to recognize people across devices and systems, and the integration work needed for the relevant apps and channels. Map how permissions and preferences reach each campaign, test behavior across devices and channels, and define ownership for SDK and API maintenance. A platform's preference or opt-in features do not determine whether an organization's data collection or messaging meets its obligations.

Related topics: [in-app messaging](/channels/in-app-messaging/), [SMS messaging](/channels/sms-messaging/), and [marketing automation](/concepts/marketing-automation/).

## Sources

- [Airship documentation overview](https://www.airship.com/docs/index.html)
- [Airship Journeys](https://www.airship.com/docs/guides/features/orchestration-experimentation/journeys/)
- [Airship Scenes](https://www.airship.com/docs/guides/features/messaging/scenes/about/)
- [Airship Preference Centers](https://www.airship.com/docs/guides/messaging/features/preference-centers/)
- [Airship SDK integration documentation](https://www.airship.com/docs/developer/sdk-integration/)
