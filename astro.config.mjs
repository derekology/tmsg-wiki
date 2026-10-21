// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'TMSG Wiki',
			description: 'The Marketing Systems Wiki is under construction.',
			customCss: ['./src/styles/wikipedia.css'],
			components: {
				PageFrame: './src/components/PageFrame.astro',
				SiteTitle: './src/components/SiteTitle.astro',
				TwoColumnContent: './src/components/TwoColumnContent.astro',
			},
			sidebar: [
				{ label: 'Back to Main Site', link: 'https://themarketingsystemsguy.com/' },
				{ label: 'Main page', link: '/' },
				{
					label: 'About TMSG Wiki', items: [
						{ label: 'Contributing', slug: 'contributing' },
					]
				},
			],
		}),
	],
});
