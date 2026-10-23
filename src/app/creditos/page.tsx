import { paginas } from '@/content/interface';
import { media } from '@/content/media';
import { Media } from '@/components/ui/Media';
import { siteUrl } from '@/lib/site';
import Link from 'next/link';
export const metadata = { title: paginas.creditos.titulo, alternates: siteUrl ? { canonical: `${siteUrl}/creditos` } : undefined };
export default function Creditos() { return <main id="conteudo" className="container legal section"><Link className="back-link" href="/">← {paginas.voltar}</Link><h1>{paginas.creditos.titulo}</h1><p className="lead">{paginas.creditos.descricao}</p><a href="https://www.pexels.com/license/" target="_blank" rel="noopener noreferrer">{paginas.creditos.licenca} ↗</a><div className="credits-grid">{media.map(m => <article key={m.id}><Media id={m.id} /><h2>{m.credito}</h2><p>{m.legenda}</p><a href={m.origem} target="_blank" rel="noopener noreferrer">{paginas.creditos.origem} ↗</a>{m.licencaUrl && <><br /><a href={m.licencaUrl} target="_blank" rel="noopener noreferrer">{m.licenca} ↗</a></>}</article>)}</div></main>; }
