import { projeto } from '@/content/projeto';
import { Reveal } from '../motion/Reveal';
import { StatusBadge } from '../ui/StatusBadge';
export function Publico() { const p = projeto.publico; return <section className="section container audience" id="publico" aria-labelledby="publico-title"><div><span className="eyebrow">{p.indice}</span><h2 id="publico-title">{p.titulo}<br /><em>{p.destaque}</em></h2><p>{p.descricao}</p><StatusBadge item={p} always /></div><div>{p.itens.map((i, n) => <Reveal key={i.titulo}><article><span>0{n + 1}</span><div><h3>{i.titulo}</h3><p>{i.descricao}</p></div></article></Reveal>)}</div></section>; }
