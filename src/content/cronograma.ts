import { proposta } from './types';
export const cronograma = { ...proposta, indice: '08 / Implantação', titulo: 'Da ideia ao encontro.', descricao: 'Marcos propostos no documento de planejamento. Datas não indicam contratação nem etapa concluída.', etapas: [
  { ...proposta, data: 'OUT 2026', titulo: 'Alinhamento do projeto', descricao: 'Conversas com operadores, definição de nome, data e modelo.' },
  { ...proposta, data: 'NOV 2026', titulo: 'Curadoria e parcerias', descricao: 'Cotações de artistas, visita técnica, patrocínio e negociação do espaço.' },
  { ...proposta, data: 'DEZ 2026', titulo: 'Preparação da edição', descricao: 'Restaurantes, fornecedores, licenças e comunicação, após aprovações.' },
  { ...proposta, data: 'JAN 2027', titulo: 'Encontro proposto', descricao: 'Preparação técnica e realização pretendida nos dias 23 e 24, condicionada às etapas anteriores.' },
] };
