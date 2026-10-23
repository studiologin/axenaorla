import { cronograma as c } from '@/content/cronograma';
import { StatusBadge } from '../ui/StatusBadge';
export function Cronograma() { return <section className="section container timeline" id="cronograma" aria-labelledby="cronograma-title"><span className="eyebrow">{c.indice}</span><h2 id="cronograma-title">{c.titulo}</h2><p className="section-description">{c.descricao}</p><ol>{c.etapas.map(e => <li key={e.data}><span className="timeline-date">{e.data}</span><h3>{e.titulo}</h3><p>{e.descricao}</p><StatusBadge item={e} always /></li>)}</ol></section>; }
