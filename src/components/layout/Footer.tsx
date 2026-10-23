import { Brand } from './Brand';
import { ui } from '@/content/interface';
import { contato } from '@/content/contato';
import Link from 'next/link';
export function Footer() { return <footer className="footer"><div className="container"><div className="footer-top"><Brand /><p>{ui.rodape.descricao}</p><a href={`mailto:${contato.email}`}>{contato.email}</a></div><nav aria-label={ui.menu}>{ui.nav.map(n => <Link href={`/#${n.id}`} key={n.id}>{n.label}</Link>)}<Link href="/#contato">{contato.telefone}</Link></nav><p className="footer-note">{ui.rodape.aviso}</p><div className="footer-bottom"><span>{ui.rodape.direitos}</span><Link href="/privacidade">{ui.rodape.privacidade}</Link><Link href="/creditos">{ui.rodape.creditos}</Link><a href="#inicio">{ui.rodape.topo} ↑</a></div></div></footer>; }
