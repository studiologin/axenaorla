import { contato as c } from '@/content/contato';
import { ui } from '@/content/interface';
import { isReview } from '@/lib/site';
import { Arrow } from '../ui/Arrow';
import { StatusBadge } from '../ui/StatusBadge';
export function Contato() { if (!c.email && !c.whatsapp) return isReview ? <section id="contato" className="review-placeholder">{ui.pendente}</section> : null; return <section className="section contact" id="contato" aria-labelledby="contato-title"><div className="container contact-inner"><span className="contact-sun" aria-hidden="true">✳</span><span className="eyebrow">{c.indice}</span><h2 id="contato-title">{c.titulo}</h2><p>{c.descricao}</p><div className="contact-actions">{c.whatsapp && <a className="button" href={`https://wa.me/${c.whatsapp}?text=${encodeURIComponent(c.mensagem)}`} target="_blank" rel="noopener noreferrer">{c.whatsappLabel}<Arrow diagonal /></a>}{c.email && <a className="contact-email" href={`mailto:${c.email}`}>{c.email}<Arrow diagonal /></a>}</div><StatusBadge item={c} />{isReview && <p className="review-placeholder">{ui.documentos}</p>}</div></section>; }
