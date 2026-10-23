import { proposta, fonteProjeto, type ContentItem } from './types';
export const musica = { ...proposta, indice: 'Música e curadoria', titulo: 'Do trio à raiz.', descricao: 'A curadoria propõe uma crescente de energia: revelação, atração de meio e grande encerramento. DJ e percussão conectam os intervalos.', aviso: 'Nomes de referência do planejamento. Nenhuma atração contratada ou participação confirmada.', dias: [
  { ...proposta, titulo: 'Dia do Trio', descricao: 'Sábado proposto · Axé pop e a memória dos grandes trios.' },
  { ...proposta, titulo: 'Dia da Raiz', descricao: 'Domingo proposto · Percussão afro-baiana e samba-reggae.' },
] };
export const atracoes: (ContentItem & { categoria: string; situacao: 'confirmado' | 'em negociação' | 'referência' })[] = [
  { status: 'referencia', fonte: fonteProjeto, titulo: 'Beto Baiano', categoria: 'Revelação · referência para sábado', descricao: 'Nome indicado no planejamento para a abertura. Material artístico e disponibilidade a verificar.', situacao: 'referência' },
  { status: 'referencia', fonte: fonteProjeto, titulo: 'Banda Eva', categoria: 'Axé pop · referência para sábado', descricao: 'Referência de encerramento no Dia do Trio, sujeita a disponibilidade e contratação.', situacao: 'referência' },
  { status: 'referencia', fonte: fonteProjeto, titulo: 'Olodum · Timbalada · Saulo', categoria: 'Alternativas de curadoria · domingo', descricao: 'Referências para cotação do encerramento do Dia da Raiz. Não representam um line-up conjunto.', situacao: 'referência' },
];
