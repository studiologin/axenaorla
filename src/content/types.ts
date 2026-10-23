export type Status = 'confirmado' | 'proposta' | 'projecao' | 'referencia' | 'pendente';
export type Fact = { status: Status; fonte: string; premissa?: string };
export type ContentItem = Fact & { titulo: string; descricao: string };
export type MediaItem = Fact & {
  id: string; src: string; alt: string; legenda: string; credito: string; origem: string;
  categoria: 'marca' | 'hero' | 'bandas' | 'gastronomia' | 'local' | 'experiencias' | 'estrutura' | 'parceiros' | 'galeria';
  natureza: 'real' | 'conceitual' | 'provisoria'; focoDesktop: string; focoMobile?: string;
  largura: number; altura: number; ordem: number; licenca?: string; licencaUrl?: string;
};
export const fonteProjeto = 'Projeto Axé na Orla.docx · 23/10/2026';
export const proposta = { status: 'proposta' as const, fonte: fonteProjeto };
