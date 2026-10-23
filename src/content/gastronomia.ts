import { proposta } from './types';
export const gastronomia = { ...proposta, indice: 'Gastronomia', titulo: 'Rua do Tabuleiro.', descricao: 'Uma rua de sabores baianos, com quiosques de restaurantes de São Paulo e cardápios curtos para comer em pé, no ritmo do festival.', aviso: 'Cardápio sugerido. Operadores, itens e condições ainda sujeitos a definição.', categorias: [
  { ...proposta, titulo: 'Do tabuleiro', descricao: 'Mini acarajé, abará e bolinho de estudante.' },
  { ...proposta, titulo: 'Do mar e do sertão', descricao: 'Moqueca no copo, bolinho de aipim e queijo coalho.' },
  { ...proposta, titulo: 'Para todos os sabores', descricao: 'Opções veganas e vegetarianas previstas no cardápio-guia.' },
  { ...proposta, titulo: 'Doce encontro', descricao: 'Cocadas, queijadinhas e frutas baianas.' },
], bar: 'O planejamento inclui um bar central de drinks, batidas, água de coco e sucos. A operação depende dos acordos de exclusividade do espaço.' };
