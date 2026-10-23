'use client';
import { useEffect, useRef, type ReactNode } from 'react';
import { animate, useReducedMotion } from 'motion/react';
export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null); const reduced = useReducedMotion();
  useEffect(() => { if (reduced || !ref.current) return; const el = ref.current; const observer = new IntersectionObserver((entries) => { if (entries.some(e => e.isIntersecting)) { animate(el, { opacity: [0.55, 1], transform: ['translateY(20px)', 'translateY(0px)'] }, { duration: 0.55, ease: 'easeOut' }); observer.disconnect(); } }, { threshold: 0.08 }); observer.observe(el); return () => observer.disconnect(); }, [reduced]);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}
