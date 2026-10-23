import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { paginas, ui } from '@/content/interface';
import { isReview, noIndex, siteUrl } from '@/lib/site';
import './globals.css';
const display = localFont({ src: '../../public/fonts/bricolage-grotesque.woff2', variable: '--font-display', display: 'swap', weight: '200 800' });
const sans = localFont({ src: '../../public/fonts/dm-sans.woff2', variable: '--font-body', display: 'swap', weight: '100 1000' });
export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: { default: paginas.metadata.titulo, template: '%s | Axé na Orla' }, description: paginas.metadata.descricao,
  alternates: siteUrl ? { canonical: siteUrl } : undefined,
  robots: { index: !noIndex, follow: !noIndex },
  openGraph: { title: paginas.metadata.titulo, description: paginas.metadata.descricao, locale: 'pt_BR', type: 'website', ...(siteUrl ? { url: siteUrl, images: [{ url: '/images/marca/og.jpg', width: 1200, height: 630, alt: paginas.metadata.titulo }] } : {}) },
  twitter: { card: 'summary_large_image', title: paginas.metadata.titulo, description: paginas.metadata.descricao },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body className={`${display.variable} ${sans.variable}`}><div id="inicio" /><Header />{isReview && <aside className="review-banner">{ui.revisao}</aside>}{children}<Footer /></body></html>; }
