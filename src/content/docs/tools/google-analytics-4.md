---
title: Google Analytics 4
description: How GA4 collects web and app events and where it fits in marketing measurement.
---

Google Analytics 4 (GA4) is Google's analytics property for web and app measurement. Google's documentation describes an event-based data model that can collect data from websites and apps. Teams use it to study acquisition, user behavior, and defined outcomes such as purchases or signups.

## How it fits

GA4 is a measurement and analysis layer, not a complete source of truth for every marketing question. It depends on implementation choices: which events are collected, how campaign links are tagged, which events are treated as key outcomes, and what privacy and consent controls apply. Define those rules before relying on reports.

Attribution reports assign credit to advertising touchpoints under a model. Google documents multiple options in GA4, including data-driven attribution and last-click models for the channels covered by the selected report. These models describe credit allocation; they do not establish that an ad caused an outcome. Use experiments or other evidence when the question is causal impact.

## Evaluation considerations

Map the web and app events needed for acquisition and key outcomes to GA4's event-based model. Examine how reporting identity, consent behavior, cross-domain journeys, and the selected attribution report affect the resulting counts and credit allocation.

Reconcile a sample purchase or lead total with its operational source and compare the questions GA4 answers with those suited to [Mixpanel](/tools/mixpanel/). [Google Tag Manager](/tools/google-tag-manager/) manages tags rather than replacing GA4's analysis; [Segment](/tools/segment/) can also supply data to downstream tools.

## Practical checks

Validate the event plan, naming conventions, consent behavior, and cross-domain or app flows. Confirm that reporting identities and time zones suit the analysis. Reconcile important business totals with the systems that record transactions or leads; analytics collection can be incomplete or configured differently from operational systems.

## Sources

- [Google Analytics: Introducing the next generation of Google Analytics](https://support.google.com/analytics/answer/10089681?hl=en)
- [Google Analytics: Get started with attribution](https://support.google.com/analytics/answer/10596866?hl=en)
- [Google Analytics Help Center](https://support.google.com/analytics/)
