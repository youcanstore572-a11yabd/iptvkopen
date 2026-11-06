import { MetadataRoute } from 'next';
import { CONSTANTS } from '@/lib/seo';
import { blogPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${CONSTANTS.DOMAIN}`;

  // Core static pages
  const staticPages = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/pakketten`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
        {
      url: `${baseUrl}/installatie`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kennisbank`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
        {
      url: `${baseUrl}/ervaringen`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
        {
      url: `${baseUrl}/veelgestelde-vragen`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
        {
      url: `${baseUrl}/zenders/sport`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
            {
      url: `${baseUrl}/zenders/internationaal`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
            {
      url: `${baseUrl}/zenders/nederland`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
            {
      url: `${baseUrl}/zenders/belgie`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
                {
      url: `${baseUrl}/zenders/films-series`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];
  // Dynamic blog posts
  const dynamicBlogPosts = blogPosts.map((post) => ({
    url: `${baseUrl}/kennisbank/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...dynamicBlogPosts];
}
