import { projeto } from '@/content/projeto';
import { Media } from '../ui/Media';
import { Arrow } from '../ui/Arrow';
import { StatusBadge } from '../ui/StatusBadge';
import { Parallax } from '../motion/Parallax';
import { Reveal } from '../motion/Reveal';
export function Experiencia() { const p = projeto.experiencia; return <section className="section experience" id="experiencia" aria-labelledby="experiencia-title"><div className="container"><Reveal className="section-heading"><span className="eyebrow">{p.indice}</span><h2 id="experiencia-title">{p.titulo}<br /><em>{p.destaque}</em></h2><p>{p.descricao}</p><StatusBadge item={p} /></Reveal><div className="experience-grid">{projeto.pilares.map((item, i) => <article key={item.numero} className={`experience-item experience-${i}`}><Parallax distance={i === 1 ? -22 : 22}><Media id={item.imagem} /><div className="experience-label"><span>{item.numero}</span><h3><a href={item.ancora}>{item.titulo}<Arrow diagonal /></a></h3></div><p>{item.descricao}</p><StatusBadge item={item} /></Parallax></article>)}</div></div></section>; }
