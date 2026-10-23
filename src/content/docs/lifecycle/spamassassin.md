---
title: SpamAssassin
description: Apache SpamAssassin's configurable rules-based email spam filter.
---

Apache SpamAssassin is open-source software that evaluates email using configurable tests and scores to help classify spam. Administrators can set a threshold at which a message is marked as spam and adjust rules for their environment. Its behavior is determined by the installed version, configuration, rules, and local environment.

## What a score means

SpamAssassin assigns scores to matching tests and compares the result with a configured threshold. The default threshold documented for SpamAssassin is not a universal definition of spam and can be changed by an administrator. A message's result in one installation is not a prediction of how Gmail, Yahoo, or another provider will filter it.

For a marketing team, a SpamAssassin check can be one useful quality signal during pre-send review. It cannot replace proper [SPF](/lifecycle/spf/), [DKIM](/lifecycle/dkim/), [DMARC](/lifecycle/dmarc/), permission-based sending, reputation monitoring, or testing in the actual receiving environments.

## Practical use

When investigating a flagged message, review the triggered tests and the complete message rather than changing copy to evade an individual rule. Check for authentication errors, malformed headers, unexpected links, and content or list practices that may have caused the result. Ask the mail administrator which SpamAssassin version and rule set generated the score.

## Sources

- [Apache SpamAssassin 4.0 configuration documentation](https://spamassassin.apache.org/full/4.0.x/doc/Mail_SpamAssassin_Conf.html)
- [Apache SpamAssassin: How scores are assigned](https://cwiki.apache.org/confluence/spaces/SPAMASSASSIN/pages/119543481/HowScoresAreAssigned)
