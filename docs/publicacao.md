# Publicação com GitHub e Vercel

Esta entrega está preparada localmente. Não foi publicado um domínio externo. Não há repositório remoto definido para o projeto nem sessão Vercel autenticada disponível. Um arquivo de associação Vercel encontrado fora do projeto não foi usado: pertence a outro contexto.

## 1. Validar o conteúdo

O responsável pelo projeto deve revisar `conteudo-pendente.md`. A aplicação permite apresentar a proposta como proposta, sem afirmar contratação. Não publique o Word original, planilhas ou projeções financeiras. `docs/fontes/` está no `.gitignore` e fora de `public/`.

## 2. Criar um repositório

Na conta GitHub do titular, crie um repositório privado para o projeto. Não adicione README remoto se for enviar o histórico local. A pasta `Codex` deve ser a raiz do código enviado. Abra PowerShell nessa pasta:

```powershell
cd 'C:\Users\mneto\Downloads\Axé na Orla\Codex'
npm.cmd ci
npm.cmd run check
git init
git add .
git commit -m "Implementa site institucional Axé na Orla"
git branch -M main
```

Depois copie a URL exata do repositório que você criou e execute `git remote add origin URL_DO_REPOSITORIO`, seguido de `git push -u origin main`. A URL é um valor a ser fornecido pelo titular; não existe um remoto criado nesta entrega. Antes de `git add`, confira se não incluiu originais, credenciais, `.env`, evidências de testes ou informações comerciais sensíveis.

## 3. Importar na Vercel

1. Entre na conta/equipe Vercel responsável.
2. Selecione **Add New → Project** e autorize o repositório GitHub correto.
3. Framework: **Next.js**. Node: uma versão compatível >= 22 (validado aqui com 24.11.1).
4. Se o repositório contém somente os arquivos de `Codex/`, mantenha **Root Directory = .**. Se enviou a pasta superior, use **Root Directory = Codex**.
5. Build command: `npm run build`. Instalação: `npm ci`. Output Directory: padrão do Next.js.
6. Configure as variáveis abaixo por ambiente antes do deploy.

| Variável | Preview | Production |
|---|---|---|
| `NEXT_PUBLIC_SITE_MODE` | `revisao` | `publico` |
| `NEXT_PUBLIC_SITE_URL` | URL canônica da produção, se já definida | URL HTTPS real de produção, sem barra final |

As variáveis `NEXT_PUBLIC_*` são incorporadas no build. Mudança de valor exige novo deploy. Em Preview, `VERCEL_ENV=preview` também força `noindex`. A revisão não é área autenticada: não inserir informações confidenciais, mesmo em preview privado.

Enquanto o domínio não estiver configurado, o site mantém `noindex`, `robots.txt` bloqueia indexação e o sitemap não lista URLs inventadas. Isso é proposital. Preencha o domínio e publique novamente para habilitar SEO em produção. Configure proteção de preview na Vercel conforme a política da equipe.

## 4. Validar a URL publicada

Depois que a Vercel concluir o deploy, abra a URL retornada e confira:

- Abertura, carregamento de todas as fotos e fontes; ausência de conteúdo sensível.
- Âncoras, menu móvel, filtros, lightbox e FAQ.
- WhatsApp e e-mail corretos (não é necessário enviar mensagem para testar os destinos).
- `/privacidade`, `/creditos`, `/robots.txt`, `/sitemap.xml` e metadados Open Graph.
- Modo público em produção; selos de revisão e `noindex` em previews.
- Celular, teclado e movimento reduzido. Repita Lighthouse na URL real para observar rede/CDN.

Somente após essa conferência considere a publicação verificada. Os testes locais não comprovam a integração GitHub/Vercel.

## 5. Fluxo de manutenção

`main` publica em produção; branches/PRs geram previews. Edite textos em `src/content/`, substitua mídia conforme o guia, execute `npm.cmd run check`, faça commit e push. A Vercel cria uma nova publicação. Revise o preview antes de integrar na branch principal. Para rollback, use uma publicação anterior na Vercel e reverta o commit quando apropriado.

## Pendências de acesso e responsáveis

- **Titular GitHub:** criar/selecionar o repositório e autorizar o envio.
- **Titular Vercel:** importar, configurar variáveis e realizar o deploy na equipe correta.
- **Titular do domínio:** fornecer o endereço final e configurar DNS conforme os valores da Vercel.
- **Produção:** aprovar conteúdo e identidade antes de anunciar o projeto.

Referências oficiais consultadas: https://nextjs.org/docs/app e https://vercel.com/docs/deployments/git .
