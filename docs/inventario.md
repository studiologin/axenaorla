# Inventário dos materiais

Concluído em 23/10/2026, antes da estrutura da aplicação. A pasta original estava vazia; não havia AGENTS.md aplicável nem outros materiais nas subpastas.

| Material | Tipo e uso | Status e destino |
|---|---|---|
| `C:/Users/mneto/Downloads/Projeto Axé na Orla.docx` | Documento de planejamento, 23/10/2026. Cópia preservada em `docs/fontes/projeto-axe-na-orla.docx`. Não contém imagens incorporadas. | Fonte primária dos cadastros abaixo. Não é prova de contratos. |
| `C:/Users/mneto/.codex/attachments/c327091b-3ffe-4ad3-899a-531ce32de654/Texto colado.txt` | Especificação de implementação solicitada pelo usuário. Cópia em `docs/fontes/briefing.txt`. | Requisitos de código, conteúdo, motion, validação e entrega. |
| Mensagem do usuário nesta conversa | E-mail `manoel@studiologin.com.br` e WhatsApp `(11) 99419-6320` | `confirmado` pelo responsável; `src/content/contato.ts`. |

## Destino de cada parte do Word

| Seção original | Classificação | Destino / restrição |
|---|---|---|
| Resumo executivo, objetivos | `proposta` | `projeto.ts`: nome de trabalho, dois dias, cultura baiana, edição recorrente como intenção. |
| Público-alvo | `proposta` | `projeto.ts`: hipóteses de segmentos; não tratar como pesquisa de demanda. |
| Justificativa / notícias | `referencia` | Não publicar notícias sobre vocalistas ou alegações históricas sem validação primária. Não necessárias à narrativa. |
| Local / layout | `proposta` | `local.ts`: local pretendido, organização qualitativa e necessidade de visita. Não publicar capacidades, medidas, acessos ou infraestrutura como garantidos. Sem mapa. |
| Data recomendada | `proposta` | `projeto.ts`: 23 e 24 de janeiro de 2027, explicitamente datas propostas. Plano B fica no original. |
| Curadoria / line-up | `referencia` | `atracoes.ts`: Beto Baiano, Banda Eva e referências de domingo; todos sem contratação confirmada. Demais alternativas preservadas no original. Sem retratos. |
| Roteiro | `proposta` | Jornada qualitativa; horários detalhados não publicados antes de validação de operação e artistas. |
| Gastronomia | `proposta` | `gastronomia.ts`: Rua do Tabuleiro, cardápio sugerido e bar. Restaurantes citados são apenas lista interna de convites; sem logos ou associação pública. |
| Ambientação | `proposta` | Experiência e jornada: fitinhas, coreografias, percussão, convivência. |
| Estrutura, operação, segurança | `proposta` | `local.ts`: frentes de planejamento, dependências e validações técnicas. Não é um plano executivo de segurança. |
| Modelo de negócio | `proposta` | `oportunidades.ts`: descrição qualitativa de patrocínio, A&B, premium, ativações e produtos. |
| Orçamentos, receitas, retorno, cachês, cotas e bilheteria | `projecao` | Restritos ao documento local; não importados em módulos do site, não disponíveis em `public/`, nem no modo revisão. Premissas não cotadas e cálculos precisam de revisão financeira. |
| Leis de incentivo | `referencia` | Não publicar prazos, elegibilidade, tetos ou deduções. Avaliação especializada e fontes oficiais atuais necessárias. |
| Cronograma | `proposta` | `cronograma.ts`: marcos datados como planejamento, sem afirmar conclusão. Prazo regulatório não reproduzido. |
| Decisões pendentes | `pendente` | `docs/conteudo-pendente.md`; placeholders no modo revisão quando pertinente. |
| Fontes jornalísticas do Word | `referencia` | Preservadas no original; não usadas como confirmação independente. |

## Imagens e autoria

Não foi fornecida identidade visual, vídeo, planta, render ou fotografia. Será usada assinatura tipográfica provisória e fotos de banco com licença Pexels, crédito individual, URL de origem no cadastro e indicação visível de referência conceitual. Não representam o evento, seus participantes ou o local contratado. Não haverá foto genérica apresentada como Orla TotalPass. Cadastro definitivo: `src/content/media.ts`. Licença consultada: https://www.pexels.com/license/ .

## Integridade

Todos os arquivos gerados, dependências, caches, evidências e build ficam em `Codex/`. Originais externos somente lidos/cop iados, nunca alterados. O Word não será disponibilizado para download público por conter projeções financeiras.
