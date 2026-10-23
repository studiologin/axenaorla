import { paginas } from '@/content/interface';
import { contato } from '@/content/contato';
import { siteUrl } from '@/lib/site';
import Link from 'next/link';
export const metadata = { title: paginas.privacidade.titulo, alternates: siteUrl ? { canonical: `${siteUrl}/privacidade` } : undefined };
export default function Privacidade() { const p = paginas.privacidade; return <main id="conteudo" className="container legal section"><Link className="back-link" href="/">← {paginas.voltar}</Link><h1>{p.titulo}</h1><p className="lead">{p.descricao}</p>{p.blocos.map(b => <section key={b.titulo}><h2>{b.titulo}</h2><p>{b.texto}</p></section>)}<a href={`mailto:${contato.email}`}>{contato.email}</a></main>; }
