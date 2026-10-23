export const isReview = process.env.NEXT_PUBLIC_SITE_MODE === 'revisao';
const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
export const siteUrl = configuredUrl && /^https?:\/\//.test(configuredUrl) ? configuredUrl.replace(/\/$/, '') : undefined;
export const noIndex = isReview || process.env.VERCEL_ENV === 'preview' || !siteUrl;
