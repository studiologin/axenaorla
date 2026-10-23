'use client';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { local } from '@/content/local';
import { Media } from '../ui/Media';
export function VisionScene() {
  const ref = useRef<HTMLDivElement>(null); const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start center', 'end center'] });
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.6, 1], [0, 0, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  return <div ref={ref} className="vision-scene"><div className="vision-visual"><motion.div className="vision-base" style={reduced ? undefined : { scale }}><Media id="salvador" /></motion.div><motion.div className="vision-overlay" style={{ opacity: reduced ? 0 : opacity }}><Media id="musica" /></motion.div><span className="vision-stamp" aria-hidden="true">SSA<br /><span>↗</span><br />SP</span></div><div className="vision-steps">{local.visoes.map((step, i) => <article key={step.titulo}><span className="eyebrow">0{i + 1} / {step.etiqueta}</span><h3>{step.titulo}</h3><p>{step.descricao}</p></article>)}</div></div>;
}
