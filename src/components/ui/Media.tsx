import Image from 'next/image';
import type { CSSProperties } from 'react';
import { getMedia } from '@/content/media';
import { ui } from '@/content/interface';
export function Media({ id, className = '', priority = false, sizes = '(max-width: 767px) 90vw, 45vw' }: { id: string; className?: string; priority?: boolean; sizes?: string }) {
  const m = getMedia(id);
  return <figure className={`media ${className}`} style={{ '--focus': m.focoDesktop, '--focus-mobile': m.focoMobile ?? m.focoDesktop } as CSSProperties}>
    <Image src={m.src} alt={m.alt} width={m.largura} height={m.altura} sizes={sizes} priority={priority} />
    <figcaption>{m.natureza === 'conceitual' ? ui.conceitual : m.natureza === 'provisoria' ? ui.provisoria : m.legenda}<span>{m.credito}</span></figcaption>
  </figure>;
}
