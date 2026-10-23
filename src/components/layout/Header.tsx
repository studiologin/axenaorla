'use client';
import { useEffect, useRef, useState } from 'react';
import { Brand } from './Brand';
import { ui } from '@/content/interface';
import { Arrow } from '../ui/Arrow';
import Link from 'next/link';
import { trapDialogFocus } from '@/lib/dialog';
export function Header() {
  const [active, setActive] = useState('');
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  function close() { dialog.current?.close(); }
  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 36);
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
    const sections = ui.nav.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => { for (const e of entries) if (e.isIntersecting) setActive(e.target.id); }, { rootMargin: '-15% 0px -55% 0px' });
    sections.forEach((s) => observer.observe(s));
    const mq = matchMedia('(min-width: 900px)'); const change = () => { if (mq.matches) dialog.current?.close(); }; mq.addEventListener('change', change);
    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect(); mq.removeEventListener('change', change); };
  }, []);
  useEffect(() => { if (!open) return; const prior = document.body.style.overflow; document.body.style.overflow = 'hidden'; return () => { document.body.style.overflow = prior; }; }, [open]);
  return <header className={`header ${compact ? 'compact' : ''}`}>
    <a className="skip-link" href="#conteudo">{ui.pular}</a><div className="header-inner"><Brand />
    <nav className="desktop-nav" aria-label={ui.menu}>{ui.nav.map((n) => <a key={n.id} href={`/#${n.id}`} aria-current={active === n.id ? 'location' : undefined}>{n.label}</a>)}</nav>
    <Link className="button button-small header-cta" href="/#contato">{ui.parceria}<Arrow diagonal /></Link>
    <button ref={trigger} className="menu-button" aria-label={ui.abrirMenu} aria-expanded={open} aria-controls="mobile-menu" onClick={() => { dialog.current?.showModal(); setOpen(true); }}><span /><span /></button>
    <dialog ref={dialog} id="mobile-menu" className="mobile-menu" aria-label={ui.menu} onKeyDown={trapDialogFocus} onClose={() => { setOpen(false); trigger.current?.focus(); }}>
      <div className="menu-top"><Brand /><button className="icon-button" aria-label={ui.fecharMenu} onClick={close}>×</button></div>
      <nav aria-label={ui.menu}>{ui.nav.map((n, i) => <Link key={n.id} href={`/#${n.id}`} onClick={close}><small>0{i + 1}</small>{n.label}<Arrow /></Link>)}<Link href="/#contato" onClick={close}>{ui.parceria}<Arrow diagonal /></Link></nav>
    </dialog></div>
    <noscript><nav className="nojs-nav" aria-label={ui.menu}>{ui.nav.map((n) => <a key={n.id} href={`/#${n.id}`}>{n.label}</a>)}</nav></noscript>
  </header>;
}
