import { projeto } from '@/content/projeto';
import { Reveal } from '../motion/Reveal';
import { StatusBadge } from '../ui/StatusBadge';
export function Jornada() { const j = projeto.jornada; return <section id="jornada" className="section journey" aria-labelledby="jornada-title"><div className="container"><span className="eyebrow">{j.indice}</span><h2 id="jornada-title">{j.titulo}</h2><p className="section-description">{j.descricao}</p><StatusBadge item={j} /><div className="journey-grid">{j.etapas.map((e, i) => <Reveal key={e.titulo}><article><span className="journey-number">0{i + 1}</span><h3>{e.titulo}</h3><p>{e.descricao}</p><StatusBadge item={e} /></article></Reveal>)}</div></div></section>; }
