import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getAllPosts } from '@lib/utils';
import sanitizeHtml from 'sanitize-html';
import { TITLE, DESCRIPTION, AUTHOR } from '@src/config';
import MarkdownIt from 'markdown-it';

const parser = new MarkdownIt();

export async function GET(context: APIContext) {
	const blog = await getAllPosts();

	return rss({
		title: TITLE,
		description: DESCRIPTION,
		site: context.site || 'example.com',
		items: blog.map((post) => ({
			title: post.data.title,
			author: AUTHOR,
			pubDate: post.data.date,
			link: `/blog/${post.slug}/`,
			// Note: this will not process components or JSX expressions in MDX files.
			content: sanitizeHtml(parser.render(post.body), {
				allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
			}),
			categories: post.data.tags,
		})),
	});
}
