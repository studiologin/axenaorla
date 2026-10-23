import type { MetadataRoute } from 'next';
import { noIndex, siteUrl } from '@/lib/site';
export default function sitemap(): MetadataRoute.Sitemap { return noIndex || !siteUrl ? [] : ['', '/privacidade', '/creditos'].map(path => ({ url: `${siteUrl}${path}`, changeFrequency: 'monthly', priority: path ? 0.4 : 1 })); }
