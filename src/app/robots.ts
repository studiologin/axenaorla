import type { MetadataRoute } from 'next';
import { noIndex, siteUrl } from '@/lib/site';
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: '*', ...(noIndex ? { disallow: '/' } : { allow: '/' }) }, ...(!noIndex && siteUrl ? { sitemap: `${siteUrl}/sitemap.xml` } : {}) }; }
