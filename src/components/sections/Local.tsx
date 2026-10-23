import { local } from '@/content/local';
import { isReview } from '@/lib/site';
import { StatusBadge } from '../ui/StatusBadge';
import { VisionScene } from '../motion/VisionScene';
export function Local() { return <section className="section local" id="local" aria-labelledby="local-title"><div className="container"><div className="local-heading"><div><span className="eyebrow">{local.indice}</span><h2 id="local-title">{local.titulo}<br /><em>{local.destaque}</em></h2></div><div className="location-note"><span aria-hidden="true">↗</span><h3>{local.nome}</h3><p>{local.regiao}</p><StatusBadge item={local} always /><p>{local.aviso}</p></div></div><VisionScene /><div className="structure-note"><p>{local.descricao}</p><ul>{local.requisitos.map(r => <li key={r}>{r}</li>)}</ul></div>{isReview && <p className="review-placeholder">{local.pendente}</p>}</div></section>; }
