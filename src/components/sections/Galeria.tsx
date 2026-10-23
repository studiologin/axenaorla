'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { media } from '@/content/media';
import { ui } from '@/content/interface';
import { isReview } from '@/lib/site';
import { trapDialogFocus } from '@/lib/dialog';
export function Galeria() {
  const [filter, setFilter] = useState('todos'); const [selected, setSelected] = useState(0); const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null); const opener = useRef<HTMLButtonElement | null>(null);
  const items = [...media].sort((a, b) => a.ordem - b.ordem).filter(m => filter === 'todos' || m.categoria === filter);
  const current = items[selected];
  const filters = ui.galeria.filtros.filter(f => isReview || f.id === 'todos' || media.some(m => m.categoria === f.id));
  function advance(direction: number) { setSelected(v => (v + direction + items.length) % items.length); }
  useEffect(() => { if (!open) return; const prior = document.body.style.overflow; document.body.style.overflow = 'hidden'; return () => { document.body.style.overflow = prior; }; }, [open]);
  return <section className="section gallery" id="galeria" aria-labelledby="galeria-title"><div className="container"><span className="eyebrow">{ui.galeria.indice}</span><div className="gallery-heading"><h2 id="galeria-title">{ui.galeria.titulo}</h2><p>{ui.galeria.descricao}</p></div><div className="filters" aria-label={ui.galeria.titulo}>{filters.map(f => <button key={f.id} aria-pressed={filter === f.id} onClick={() => { setFilter(f.id); setSelected(0); }}>{f.label}</button>)}</div><div className="gallery-grid" aria-live="polite">{items.map((m, i) => <figure key={m.id}><button aria-label={`${ui.galeria.ampliar}: ${m.alt}`} onClick={event => { opener.current = event.currentTarget; setSelected(i); setOpen(true); dialog.current?.showModal(); }}><Image src={m.src} alt={m.alt} width={m.largura} height={m.altura} sizes="(max-width: 600px) 88vw, (max-width: 1023px) 43vw, 23vw" style={{ objectPosition: m.focoDesktop }} /><span className="gallery-zoom" aria-hidden="true">↗</span></button><figcaption>{m.legenda}<small>{m.credito}</small></figcaption></figure>)}{items.length === 0 && <p className="review-placeholder">{ui.galeria.vazio}</p>}</div><dialog className="lightbox" ref={dialog} aria-labelledby="lightbox-caption" onClose={() => { setOpen(false); opener.current?.focus(); }} onKeyDown={e => { trapDialogFocus(e); if (e.key === 'ArrowRight') { e.preventDefault(); advance(1); } if (e.key === 'ArrowLeft') { e.preventDefault(); advance(-1); } }}><button className="lightbox-close icon-button" aria-label={ui.galeria.fechar} onClick={() => dialog.current?.close()}>×</button>{current && <><Image className="lightbox-image" src={current.src} alt={current.alt} width={current.largura} height={current.altura} sizes="90vw" /><div className="lightbox-bottom"><button className="icon-button" aria-label={ui.galeria.anterior} onClick={() => advance(-1)}>←</button><div id="lightbox-caption" aria-live="polite"><p>{current.legenda}</p><small>{current.credito} · {selected + 1} {ui.galeria.contador} {items.length}</small></div><button className="icon-button" aria-label={ui.galeria.proxima} onClick={() => advance(1)}>→</button></div></>}</dialog></div></section>;
}
