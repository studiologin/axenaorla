# Axé na Orla — site institucional

Site funcional em português, baseado no documento de planejamento fornecido e nos contatos aprovados pelo usuário. Todos os arquivos do projeto estão nesta pasta `Codex/`; os materiais originais externos foram preservados.

## Abrir no computador

No PowerShell:

```powershell
cd 'C:\Users\mneto\Downloads\Axé na Orla\Codex'
npm.cmd run dev
```

Abra **http://127.0.0.1:3000**. Este é o site real servido localmente, não uma página de preparação. Se as dependências não estiverem instaladas, execute `npm.cmd ci` antes. Mantenha o terminal aberto; use Ctrl+C para encerrar. Se a porta já estiver ocupada por outro projeto, rode `npm.cmd run dev -- --port 3001` e abra a porta informada.

Alternativa: execute `iniciar-site.cmd` nesta pasta. O arquivo prepara temporários locais e inicia o servidor de desenvolvimento. Não abre serviços externos nem publica o site.

Para testar produção:

```powershell
npm.cmd run check
npm.cmd start
```

## O que foi implementado

- Página editorial responsiva, com navegação por âncoras e seção ativa, menu móvel, três cenas de movimento vinculadas à rolagem e modo de movimento reduzido.
- Projeto, experiências, música, gastronomia, local pretendido, jornada, perfis de público, modelo comercial, parcerias, cronograma, galeria filtrável com lightbox, FAQ e contatos reais.
- Páginas de privacidade e créditos; imagem social, favicon, sitemap e robots.
- Conteúdo tipado e editável em `src/content/`, com status e origem. Fotos locais licenciadas, com indicação de referência conceitual.
- Modos público e revisão. Sem formulário fictício, venda de ingressos, pagamento, analytics, área restrita ou download do Word sensível.

## Stack instalada

Versões estáveis consultadas no registro npm em 23/10/2026 e fixadas no `package-lock.json`:

| Tecnologia | Versão |
|---|---|
| Next.js App Router | 16.4.3 |
| React / React DOM | 19.3.1 |
| TypeScript strict | 6.0.3 |
| Tailwind CSS / PostCSS plugin | 4.3.3 |
| Motion (`motion/react`) | 14.6.0 |
| ESLint / eslint-config-next | 9.39.5 / 16.4.3 |
| Playwright | 1.64.1 |
| axe-core/Playwright | 4.14.0 |
| Lighthouse | 13.5.0 |

Node usado na validação: **24.11.1**, npm **11.6.2**. Recomenda-se Node 24. O compilador é Webpack devido à falha de subprocesso do Turbopack neste ambiente. ESLint 9 foi mantido por compatibilidade dos plugins; veja `docs/decisoes.md`. Fontes Bricolage Grotesque e DM Sans auto-hospedadas por `next/font/local`, com licenças em `docs/licencas/`.

## Estrutura

```text
Codex/
├── src/app/                  página, rotas, metadados, CSS
├── src/components/
│   ├── layout/               cabeçalho, marca, rodapé
│   ├── sections/             seções da narrativa
│   ├── motion/               parallax, revelações e cena visual
│   └── ui/                   mídia, status e ícones
├── src/content/              textos e dados tipados
├── src/lib/                  modo e endereço do site
├── public/images/            fotografias e identidade
├── public/fonts/             fontes locais
├── public/videos/            reservado; sem vídeo fictício
├── public/documents/         reservado; sem documento sensível
├── docs/                     inventário, decisões e guias
│   ├── fontes/               cópias locais privadas, ignoradas no Git
│   ├── licencas/             créditos e permissões
│   └── evidencias/           testes e capturas, ignorados no Git
├── scripts/                  verificações reproduzíveis
├── .env.example
├── package.json
└── package-lock.json
```

## Modos e publicação

Copie `.env.example` para `.env.local`, se precisar configurar o modo. Padrão: `publico`.

```dotenv
NEXT_PUBLIC_SITE_MODE=revisao
NEXT_PUBLIC_SITE_URL=
```

Reinicie o desenvolvimento ou gere um novo build depois de mudar variáveis. `revisao` mostra fontes, pendências e status; `publico` oculta campos incompletos e mantém os avisos que qualificam propostas/referências. Nenhum modo inclui projeções financeiras. Revisão não é autenticação.

Previews Vercel e modo revisão usam `noindex`. Sem domínio definido, o site também fica fora de indexação; configure `NEXT_PUBLIC_SITE_URL` com o endereço real para gerar canonical, imagem Open Graph absoluta e sitemap em produção. Instruções completas e etapas pendentes: **[docs/publicacao.md](docs/publicacao.md)**.

## Editar conteúdo

| Informação | Arquivo |
|---|---|
| Conceito, datas propostas, experiência, público, jornada | `src/content/projeto.ts` |
| Artistas e situação | `src/content/atracoes.ts` |
| Gastronomia | `src/content/gastronomia.ts` |
| Local e estrutura | `src/content/local.ts` |
| Modelo comercial e parcerias | `src/content/oportunidades.ts` |
| Cronograma | `src/content/cronograma.ts` |
| FAQ | `src/content/faq.ts` |
| E-mail e WhatsApp | `src/content/contato.ts` |
| Fotos, foco, legenda, crédito e natureza | `src/content/media.ts` |
| Navegação, rótulos, páginas auxiliares e SEO | `src/content/interface.ts` |

Use `confirmado` apenas com documentação de definição/contratação; `proposta` para planejamento; `referencia` para exemplos; `projecao` exige fonte e premissa; `pendente` não vira informação pública automaticamente. Os artistas desta entrega são referências. Não transforme o Word de planejamento em prova de confirmação.

Guia para quem não desenvolve: **[docs/guia-de-imagens.md](docs/guia-de-imagens.md)**. Novas fotos exigem cadastro; não há descoberta automática. Créditos são publicados em `/creditos`. Informações financeiras e originais não devem ser movidos para `public/` nem importados por componentes.

## Verificar

```powershell
npm.cmd run lint
npm.cmd run typecheck
npm.cmd run build
# Ou execute as três etapas em sequência:
npm.cmd run check
# Com o servidor de produção aberto em outro terminal:
npm.cmd run test:e2e
node scripts/lighthouse.mjs mobile
node scripts/lighthouse.mjs desktop
```

Os scripts usam Chrome instalado em `C:/Program Files/Google/Chrome/Application/chrome.exe`. Em outra máquina, forneça `CHROME_PATH` e, se necessário, `TEST_URL`. Evidências ficam em `docs/evidencias/`. Antes de rodar testes que iniciam navegador, configure TEMP/TMP para `Codex/.tmp`, como faz o lançador. Não use estes scripts para executar envios reais de contato.

Resultados reais e limites da verificação estão em **[docs/validacao.md](docs/validacao.md)**. Medidas locais não substituem medição em campo. Nenhuma URL externa foi publicada nesta entrega.

## Documentação

- `docs/inventario.md`: fontes, destinos e restrições.
- `docs/conteudo-pendente.md`: aprovações e material faltante.
- `docs/direcao-visual.md`: identidade inicial e princípios de motion.
- `docs/decisoes.md`: opções conservadoras adotadas.
- `docs/publicacao.md`: GitHub, Vercel e domínio.

Referências técnicas: [Next.js](https://nextjs.org/docs/app), [Tailwind CSS](https://tailwindcss.com/docs/installation/using-postcss), [Motion](https://motion.dev/docs/react-installation).
