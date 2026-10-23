import { proposta, type ContentItem } from './types';
export const projeto = {
  ...proposta, nome: 'Axé na Orla', assinatura: 'Salvador em São Paulo',
  selo: 'Um projeto cultural em movimento',
  hero: { ...proposta, linha1: 'A Bahia', linha2: 'encontra', linha3: 'São Paulo.', descricao: 'O ritmo, os sabores e o jeito de celebrar de Salvador. Uma proposta de encontro em São Paulo.', acao: 'Conhecer o projeto', rolar: 'Sinta essa energia', nota: 'Datas e local propostos · sujeitos a confirmação', data: '23 & 24 JAN 2027', local: 'Orla TotalPass · Parque Villa-Lobos' },
  introducao: { ...proposta, indice: '01 / O projeto', titulo: 'Mais que um show.', destaque: 'Um encontro de culturas.', descricao: 'Axé na Orla nasce da vontade de trazer a vivência de Salvador para São Paulo: música ao vivo, comida de tabuleiro e um jeito acolhedor de chegar e ficar.', complemento: 'Um festival de dois dias pensado para conectar gerações, abrir espaço para novos artistas e valorizar a culinária baiana feita em São Paulo.' },
  experiencia: { ...proposta, indice: '02 / A experiência', titulo: 'O som chama.', destaque: 'O sabor aproxima.', descricao: 'Três maneiras de viver a mesma energia. Uma programação proposta para ouvir, provar e compartilhar.' },
  pilares: [
    { ...proposta, titulo: 'Música que atravessa gerações', descricao: 'Do axé pop dos trios às raízes do samba-reggae. Novas vozes e nomes de referência no mesmo projeto.', imagem: 'musica', numero: '01', ancora: '#musica' },
    { ...proposta, titulo: 'Bahia no tabuleiro', descricao: 'Finger food baiana, sabores de dendê e receitas para descobrir entre uma música e outra.', imagem: 'acaraje', numero: '02', ancora: '#gastronomia' },
    { ...proposta, titulo: 'Um jeito de estar junto', descricao: 'Fitinhas, coreografias e percussão: experiências inspiradas na chegada e na convivência em Salvador.', imagem: 'salvador', numero: '03', ancora: '#jornada' },
  ],
  jornada: { ...proposta, indice: '05 / Jornada do visitante', titulo: 'Chegar. Sentir. Ficar.', descricao: 'Experiências previstas para se conectar ao longo do encontro. O roteiro final depende da definição da operação.', etapas: [
    { ...proposta, titulo: 'Ser recebido', descricao: 'Baianas, fitinhas do Bonfim e pintura corporal na proposta de acolhimento.' },
    { ...proposta, titulo: 'Descobrir sabores', descricao: 'Circular pela Rua do Tabuleiro e conhecer a culinária dos convidados.' },
    { ...proposta, titulo: 'Entrar no ritmo', descricao: 'Shows, percussão e aulas de coreografias conectando públicos e gerações.' },
    { ...proposta, titulo: 'Levar a lembrança', descricao: 'Fotos, encontros e o mural “De SP para Salvador” como memória compartilhada.' },
  ] },
  publico: { ...proposta, indice: '06 / Público e posicionamento', titulo: 'Várias histórias.', destaque: 'Um mesmo refrão.', descricao: 'O planejamento parte de afinidades culturais. Estes perfis são hipóteses de público, ainda sem pesquisa de demanda.', itens: [
    { ...proposta, titulo: 'Quem viveu o axé', descricao: 'Memórias dos anos 1990 e 2000 e vontade de cantar junto novamente.' },
    { ...proposta, titulo: 'Quem está descobrindo', descricao: 'Novas gerações, novos artistas e o encontro com o pré-Carnaval.' },
    { ...proposta, titulo: 'Quem quer estar junto', descricao: 'Famílias e frequentadores do parque em busca de convivência cultural.' },
    { ...proposta, titulo: 'Quem carrega a Bahia', descricao: 'Comunidades baiana e nordestina em São Paulo e suas conexões de pertencimento.' },
  ] satisfies ContentItem[] },
  faixa: ['AXÉ', 'ENCONTRO', 'SABOR', 'CULTURA', 'SALVADOR EM SÃO PAULO'],
};
