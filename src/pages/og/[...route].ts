import { getCollection } from 'astro:content';
import { OGImageRoute } from 'astro-og-canvas';

const allBlogs = await getCollection('blog', ({ data }) => {
  return data.draft !== true;
});

const pages = Object.fromEntries(
  allBlogs.map(({ id, slug, data }) => [id, { data, slug }])
);

export const { getStaticPaths, GET } = OGImageRoute({
  param: 'route',
  pages,

  getImageOptions: async (_, { data }: (typeof pages)[string]) => {
    return {
      title: data.title,
      description: data.description,
      bgImage: {
        path: 'https://the-boy-246.sirv.com/Other%20images/Og%20image-blog.png',
      },
      padding: 120,
      font: {
        title: {
          size: 72,
          lineHeight: 1.25,
          families: ['Pangaia'],
          weight: 'Bold',
        },
        description: {
          size: 38,
          lineHeight: 1.25,
          families: ['Neue Montreal'],
          weight: 'Normal',
        },
        },
        fonts: [
          "./src/fonts/PPPangaia-Bold.woff", "./src/fonts/PPNeueMontreal-Book.woff"
      ]
    };
  },
});
