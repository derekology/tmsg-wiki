// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'AgentReady',
			description: 'A wiki of apps, services, and their agent-readiness capabilities.',
			customCss: ['./src/styles/wikipedia.css'],
			components: {
				PageFrame: './src/components/PageFrame.astro',
				SiteTitle: './src/components/SiteTitle.astro',
				TwoColumnContent: './src/components/TwoColumnContent.astro',
			},
			sidebar: [
				{ label: 'Main page', link: '/' },
				{ label: 'Browse', items: [
					{ label: 'Apps and services', slug: 'apps' },
					{ label: 'Categories', slug: 'categories' },
				] },
				{ label: 'Service assessments', items: [
					{ slug: 'apps/github' },
					{ slug: 'apps/notion' },
					{ slug: 'apps/slack' },
				] },
				{ label: 'About AgentReady', items: [
					{ label: 'Assessment method', slug: 'assessment' },
					{ label: 'Contributing', slug: 'contributing' },
				] },
			],
		}),
	],
});
