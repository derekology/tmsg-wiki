---
title: Google Tag Manager
description: How Google Tag Manager organizes website and app tags, triggers, and variables.
---

Google Tag Manager (GTM) is a tag management system. Google's introduction explains that after installing its code snippets, a team can manage tags through the GTM interface using **tags**, **triggers**, and **variables**. A container groups these configurations for a website or app.

## What marketers use it for

GTM can help deploy analytics and advertising tags without editing application code for every tag change. For example, a trigger may respond to a defined page or event, while a tag sends measurement data to an analytics platform. A data layer can provide structured information for those rules, but it must be implemented and maintained correctly by the site or app team.

GTM is not itself an analytics system, consent-management platform, or guarantee of compliant tracking. Set clear publishing permissions, review changes, use preview and debugging tools, and define consent behavior before tags are allowed to run. Keep sensitive or unnecessary personal data out of the data layer and destination payloads.

## GTM and GA4

[Google Analytics 4](/tools/google-analytics-4/) analyzes collected events; GTM can manage tags that send data to GA4 and other destinations. Keep a documented event plan shared between marketers, analysts, and developers so tag names and business definitions do not drift.

## Sources

- [Google Tag Manager: Introduction to Tag Manager](https://support.google.com/tagmanager/answer/6102821?hl=en)
- [Google Tag Manager Help Center](https://support.google.com/tagmanager/)
