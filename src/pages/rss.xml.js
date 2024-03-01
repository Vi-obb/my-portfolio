import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function get(context) {
  const allBlogs = await getCollection('blog', ({ data }) => {
    return data.draft !== true;
  });
  return {
    status: 200,
    headers: {
      'Content-Type': 'application/rss+xml',
    },
    body: rss({
      stylesheet: '/rss/styles.xsl',
      title: 'Vincent Obbeng’s Articles',
      description:
        'I hope you enjoy reading about my interests and experiences as much as I enjoy writing them.',
      site: context.site,
      items: allBlogs.map((post) => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/blog/${post.slug}/`,
      })),
    }),
  };
}
