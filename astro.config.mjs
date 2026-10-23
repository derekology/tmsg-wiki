// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'TMSG Wiki',
			description: 'A practical guide to marketing platforms, data, measurement, and operating systems.',
			favicon: '/favicon.ico',
			customCss: ['./src/styles/wikipedia.css'],
			components: {
				PageFrame: './src/components/PageFrame.astro',
				SiteTitle: './src/components/SiteTitle.astro',
				TwoColumnContent: './src/components/TwoColumnContent.astro',
			},
			sidebar: [
				{ label: 'Back to Main Site', link: 'https://themarketingsystemsguy.com/' },
				{ label: 'Wiki Home', link: '/' },
				{
					label: 'Strategy & Operations',
					items: [
						{ label: 'Go-to-Market Strategy', slug: 'concepts/go-to-market' },
						{ label: 'Marketing Operations', slug: 'concepts/marketing-operations' },
						{ label: 'Marketing Systems', slug: 'concepts/marketing-systems' },
						{ label: 'Marketing Technology', slug: 'concepts/marketing-technology' },
						{ label: 'Account-Based Marketing', slug: 'concepts/account-based-marketing' },
						{ label: 'Demand Generation and Demand Capture', slug: 'concepts/demand-generation' },
						{ label: 'Product-Led Growth', slug: 'concepts/product-led-growth' },
						{ label: 'Buyer Journey and Marketing Funnel', slug: 'concepts/buyer-journey-and-funnel' },
						{ label: 'Ideal Customer Profile', slug: 'concepts/ideal-customer-profile' },
						{ label: 'Revenue Operations', slug: 'concepts/revenue-operations' },
						{ label: 'Marketing Automation', slug: 'concepts/marketing-automation' },
						{ label: 'Lead Scoring and Qualification', slug: 'concepts/lead-scoring-and-qualification' },
					],
				},
				{
					label: 'Measurement',
					items: [
						{ label: 'Marketing Attribution', slug: 'measurement/marketing-attribution' },
						{ label: 'Attribution Strategies', slug: 'measurement/attribution-strategies' },
						{ label: 'Tracking Pixels', slug: 'measurement/tracking-pixel' },
						{ label: 'CAC and Customer Lifetime Value', slug: 'measurement/cac-and-customer-lifetime-value' },
						{ label: 'UTM Parameters', slug: 'measurement/utm-parameters' },
						{ label: 'Experimentation and A/B Testing', slug: 'measurement/experimentation-and-ab-testing' },
					],
				},
				{
					label: 'Data & Identity',
					items: [
						{ label: 'First-Party and Intent Data', slug: 'data/first-party-and-intent-data' },
						{ label: 'Customer Data Platform', slug: 'data/customer-data-platform' },
					],
				},
				{
					label: 'Email Development',
					items: [
						{ label: 'AMPscript', slug: 'email/ampscript' },
						{ label: 'Server-Side JavaScript (SSJS)', slug: 'email/ssjs' },
						{ label: 'Velocity Script', slug: 'email/velocity-script' },
						{ label: 'Liquid', slug: 'email/liquid' },
						{ label: 'MJML', slug: 'email/mjml' },
						{ label: 'Email Rendering', slug: 'email/email-rendering' },
						{ label: 'VML', slug: 'email/vml' },
					],
				},
				{
					label: 'Privacy & Compliance',
					items: [{ label: 'GDPR', slug: 'privacy/gdpr' }],
				},
				{
					label: 'Customer Lifecycle',
					items: [
						{ label: 'Email Deliverability', slug: 'lifecycle/email-deliverability' },
						{ label: 'SPF', slug: 'lifecycle/spf' },
						{ label: 'DKIM', slug: 'lifecycle/dkim' },
						{ label: 'DMARC', slug: 'lifecycle/dmarc' },
						{ label: 'BIMI', slug: 'lifecycle/bimi' },
						{ label: 'One-Click Unsubscribe Headers', slug: 'lifecycle/one-click-unsubscribe-headers' },
						{ label: 'SpamAssassin', slug: 'lifecycle/spamassassin' },
						{ label: 'Retention and Net Revenue Retention', slug: 'lifecycle/retention-and-net-revenue-retention' },
					],
				},
				{
					label: 'Tools & Platforms',
					items: [
						{ label: 'HubSpot', slug: 'tools/hubspot' },
						{ label: 'Salesforce', slug: 'tools/salesforce' },
						{ label: 'Adobe Marketo Engage', slug: 'tools/marketo-engage' },
						{ label: 'Google Analytics 4', slug: 'tools/google-analytics-4' },
						{ label: 'Twilio Segment', slug: 'tools/segment' },
						{ label: 'Klaviyo', slug: 'tools/klaviyo' },
						{ label: 'Google Tag Manager', slug: 'tools/google-tag-manager' },
						{ label: 'Zapier', slug: 'tools/zapier' },
						{ label: 'Mailchimp', slug: 'tools/mailchimp' },
						{ label: 'MailerLite', slug: 'tools/mailerlite' },
						{ label: 'Mailjet', slug: 'tools/mailjet' },
						{ label: 'Mixpanel', slug: 'tools/mixpanel' },
						{ label: 'Hightouch', slug: 'tools/hightouch' },
						{ label: 'Treasure AI', slug: 'tools/treasure-ai' },
						{ label: 'Salesforce Marketing Cloud Engagement', slug: 'tools/salesforce-marketing-cloud' },
						{ label: 'Salesforce Marketing Cloud Next', slug: 'tools/salesforce-marketing-cloud-next' },
						{ label: 'Braze', slug: 'tools/braze' },
						{ label: 'Acoustic', slug: 'tools/acoustic' },
					],
				},
				{
					label: 'About TMSG Wiki', items: [
						{ label: 'Contributing', slug: 'contributing' },
					]
				},
			],
		}),
	],
});
