---
title: UTM Parameters
description: Standardize campaign URL tags so analytics can identify referred campaign traffic.
---

UTM parameters are query-string values added to a destination URL to label campaign traffic in analytics. The commonly used fields are `utm_source` (the source sending traffic), `utm_medium` (the channel or medium), and `utm_campaign` (the campaign). Additional fields such as `utm_content` can distinguish links or creative variants, and `utm_term` is often used for paid search terms. Consult current analytics documentation for supported fields and reporting behavior.

Example:

```text
https://example.com/guide?utm_source=newsletter&utm_medium=email&utm_campaign=product_launch
```

The values should follow a shared naming convention. If one team uses `paid-social`, another uses `social-paid`, and a third uses `Social`, reports may split equivalent traffic into separate rows. Maintain a campaign-tagging guide, define who can create values, and encode URLs safely when values contain spaces or punctuation.

## What UTM tags do not do

UTM tags label a clicked link; they do not prove that the campaign caused a conversion. They can also be lost or overwritten by redirects, copied links, or inconsistent analytics settings. Avoid tagging internal links because this can replace the original acquisition context. Do not put personal or sensitive information in URLs: URLs may be logged, shared, or exposed to other systems.

## Related concepts

UTM conventions support [marketing attribution](/measurement/marketing-attribution/) and reporting in tools such as [Google Analytics 4](/tools/google-analytics-4/).

## Sources

- [Google Analytics: URL builders and campaign parameters](https://support.google.com/analytics/answer/10917952?hl=en)
- [Google Analytics: Collect campaign data with custom URLs](https://support.google.com/analytics/answer/1033863?hl=en)
