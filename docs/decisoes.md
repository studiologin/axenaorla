# Decisões

1. Seguir Next.js e GitHub/Vercel especificados no briefing, com entrega local. Não migrar para a hospedagem Sites/Cloudflare.
2. Considerar o Word um plano, não evidência de contratação. Nenhum artista, local, patrocinador, licença ou data de evento é tratado como confirmado.
3. Publicar a data proposta de 23–24/01/2027, sustentada pelo Word, com qualificação clara. Não repetir datas regulatórias ou notícias sobre artistas sem verificação.
4. Não publicar orçamento, cachês, retorno, preços, capacidades ou medidas. O original ficará apenas em `docs/fontes/`, fora do bundle e de `public/`.
5. Usar contato confirmado pelo usuário em 23/10/2026: `manoel@studiologin.com.br`, WhatsApp `5511994196320`.
6. Não enviar mensagens, instalar analytics, criar formulário, vender ingresso ou autenticação. CTAs abrem os canais reais de contato.
7. Fotografias de banco com licença e créditos, sempre identificadas como referências conceituais; nenhuma foto atribuída ao espaço pretendido. Não gerar imagens por IA, evitando também gravações automáticas fora de `Codex/`.
8. Identidade tipográfica inicial sujeita à aprovação. Sem brasões, logos de parceiros ou alegações de endosso.
9. Fontes locais para não depender de serviços externos durante a navegação/build. Dependências travadas no lockfile.
10. SEO canônico/sitemap só com domínio configurado. Revisão e previews Vercel bloqueados para indexação; hospedagem precisa ser autorizada/configurada pelo titular.
11. “Jornada” apresenta experiências planejadas, sem confirmar roteiro operacional. “Estrutura” apresenta frentes de validação, sem planta fictícia.
12. O modo revisão é recurso editorial, não área restrita; dados financeiros ficam excluídos nos dois modos.
13. Turbopack falhou duas vezes neste Windows ao iniciar processo de transformação de fontes/CSS. `dev` e `build` usam o compilador Webpack suportado pelo Next, sem alterar a stack. A primeira tentativa gerou automaticamente um log de falha no temporário do sistema; após isso TEMP/TMP foram direcionados a `Codex/.tmp`. Nenhum original externo foi alterado.
14. ESLint 10.13.0 não satisfaz os peer dependencies dos plugins distribuídos com eslint-config-next 16.4.3. Fixado ESLint 9.39.5, última versão compatível nessa combinação, embora o npm sinalize o encerramento de suporte dessa linha. Revisar a atualização quando os plugins suportarem ESLint 10.
15. A foto de acarajé inicialmente identificada no Pexels foi descartada por ambiguidade visual. Substituída por Melsj / Wikimedia Commons, com CC BY-SA 4.0, crédito e licença públicos. Nenhuma foto representa fornecedor contratado.
