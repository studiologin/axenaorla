import type { MediaItem } from './types';
const base = { status: 'referencia' as const, fonte: 'Pexels · licença consultada em 23/10/2026', natureza: 'conceitual' as const };
export const media: MediaItem[] = [
  { ...base, id: 'musica', src: '/images/experiencias/festival-de-musica.png', alt: 'Show e festival de música ao ar livre ao entardecer', legenda: 'A energia de cantar junto. Festival e música ao vivo.', credito: 'Axé na Orla · Projeto', origem: '#', categoria: 'bandas', focoDesktop: '50% 50%', focoMobile: '50% 50%', largura: 1536, altura: 1024, ordem: 1 },
  { ...base, id: 'salvador', src: '/images/experiencias/fitas-entrada.png', alt: 'Recepção com baianas, fitinhas do Bonfim e pórtico de entrada', legenda: 'Fitinhas, acolhimento e a energia de Salvador.', credito: 'Axé na Orla · Projeto', origem: '#', categoria: 'experiencias', focoDesktop: '50% 50%', focoMobile: '50% 50%', largura: 1672, altura: 941, ordem: 2 },
  { ...base, id: 'acaraje', src: '/images/experiencias/gastronomica.png', alt: 'Área gastronômica com barracas, culinária típica baiana e visitantes', legenda: 'Sabores de tabuleiro. Gastronomia baiana ao ar livre.', credito: 'Axé na Orla · Projeto', origem: '#', categoria: 'gastronomia', focoDesktop: '50% 50%', focoMobile: '50% 50%', largura: 1448, altura: 1086, ordem: 3 },
  { ...base, id: 'coco', src: '/images/gastronomia/coco.jpg', alt: 'Bebida servida em coco em uma praia ao entardecer', legenda: 'Uma pausa entre os encontros. Referência visual de bebida, sem vínculo com o local pretendido.', credito: 'Edu Raw / Pexels', origem: 'https://www.pexels.com/photo/close-up-of-a-drink-20944085/', categoria: 'gastronomia', focoDesktop: '50% 50%', focoMobile: '50% 50%', largura: 900, altura: 1350, ordem: 4 },
];
export function getMedia(id: string): MediaItem {
  const item = media.find((m) => m.id === id);
  if (!item) throw new Error(`Mídia não cadastrada: ${id}`);
  return item;
}
