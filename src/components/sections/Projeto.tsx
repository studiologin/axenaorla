import { projeto } from '@/content/projeto';
import { StatusBadge } from '../ui/StatusBadge';
import { Reveal } from '../motion/Reveal';
export function Projeto() { const p = projeto.introducao; return <><div className="culture-strip" aria-hidden="true">{projeto.faixa.map(t => <span key={t}>{t}<b>✳</b></span>)}</div><section className="section container" id="projeto" aria-labelledby="projeto-title"><Reveal className="intro-grid"><div><span className="eyebrow">{p.indice}</span><h2 id="projeto-title">{p.titulo}<br /><em>{p.destaque}</em></h2><StatusBadge item={p} /></div><div className="intro-copy"><span className="small-sun" aria-hidden="true">✳</span><p className="lead">{p.descricao}</p><p>{p.complemento}</p></div></Reveal></section></>; }
