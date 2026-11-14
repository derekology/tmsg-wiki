# Editing The Marketing Systems Wiki

## Writing articles

- Write clearly, neutrally, and practically for both learners and practitioners. Explain jargon, distinguish general concepts from vendor-specific details, and avoid promotional language or unsupported recommendations.
- When covering a marketing-system component, explain its role, where it fits among people, processes, data, technology, governance, and measurement, and its key dependencies or boundaries. Keep descriptions vendor-neutral and avoid implying one architecture fits every organization.
- Explain concepts and tradeoffs rather than giving prescriptive business, legal, or compliance advice. Avoid telling readers what to buy or do without clear context and reliable support.
- Give each page frontmatter with a concise `title` and factual `description`. Open with a direct definition or explanation; use descriptive headings to organize longer pages. Include practical context, limitations, and links to relevant wiki pages where useful.
- When an article uses an important specialist marketing, data, or technology term that is not already defined in the glossary, add a concise definition to `src/content/docs/glossary.md` when appropriate and link to it from the article.
- Support factual claims with reliable, claim-specific sources. Prefer primary sources for laws, standards, and product capabilities. Note meaningful differences or uncertainty instead of presenting unverified or conflicting information as fact.
- End sourced articles with a `## Sources` section containing links that support the page's claims. Do not add a “Reviewed on” note to source entries. Do not imply that documentation review involved live product testing.
- For legal or privacy topics, make the jurisdiction clear and state when the page is general information rather than legal advice. Do not present the wiki as a substitute for professional advice.
- Never include credentials, private information, or confidential material.

## Structure and navigation

- Place articles in the existing `src/content/docs/` topic directory that best fits their subject (such as `concepts/`, `tools/`, `privacy/`, or `measurement/`). Avoid creating a new category when an existing one fits.
- Use the established root-relative routes for internal links (for example, `/concepts/marketing-systems/`) and preserve or update links when moving content.
- Add important new articles to the “Explore by topic” table on the main page, `src/content/docs/index.mdx`. Keep the row concise and group the page with related starting points; not every page needs a homepage entry.
- Update relevant cross-links when adding or moving an article, and ensure the title, description, links, and sources are consistent with the page's content.
