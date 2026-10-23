import { projeto } from '@/content/projeto';
import { ui } from '@/content/interface';
import Link from 'next/link';
export function Brand() { return <Link className="brand" href="/#inicio" aria-label={ui.inicio}><span className="brand-sun" aria-hidden="true">✳</span><span>axé<span className="brand-bottom">na orla</span></span><span className="brand-caption">{projeto.assinatura}</span></Link>; }
