# Como atualizar as imagens

As fotografias atuais são referências conceituais. Elas não registram o evento nem o local pretendido. O cadastro que controla o que aparece é `src/content/media.ts`.

| Pasta em `public/images/` | Conteúdo | Proporção recomendada |
|---|---|---|
| `marca` | Identidade e imagem de compartilhamento | OG: 1200 × 630 |
| `hero` | Abertura | Foto ampla 3:2 ou 16:9; assunto central seguro para recorte 4:5 no celular |
| `bandas` | Atrações realmente contratadas, com autorização | 4:5 |
| `gastronomia` | Pratos e bebidas | 4:5 ou 3:2 |
| `local` | Fotografias autorizadas do local | 3:2 |
| `experiencias` | Ambiente e referências culturais | 4:5 |
| `estrutura` | Plantas e renders fornecidos | Preservar proporção original |
| `parceiros` | Logos com vínculo documentado | Preservar proporção |
| `galeria` | Imagens adicionais | Livre; a miniatura será recortada |

JPG, PNG, WebP e AVIF são aceitos. Use nomes minúsculos, sem espaços e sem acentos. Para fotos, até 2560 px no lado maior e cerca de 500 KB é uma boa meta. MP4/WebM são formatos indicados para uma futura abertura em vídeo; esta entrega utiliza fotografia e não tem player de vídeo.

Evite colocar rostos, pratos ou informação essencial nos 15% externos da imagem: o recorte varia conforme a tela. Não coloque texto dentro da fotografia. O título da abertura fica em uma área sólida; legenda e crédito têm área reservada.

## Substituir uma imagem

1. Guarde uma cópia local do arquivo anterior dentro de `docs/fontes/`, se for necessário preservá-lo.
2. Coloque a nova imagem na mesma pasta, com exatamente o mesmo nome e extensão. Exemplo: `public/images/gastronomia/acaraje.jpg`.
3. Em `src/content/media.ts`, atualize descrição, crédito, origem, licença, natureza e dimensões se mudaram. Não é preciso editar componentes.
4. Rode `npm.cmd run check` e veja o resultado em desktop e celular. Teste a galeria.
5. Faça commit e push: a mudança publicada só aparece depois do novo deploy. Se uma imagem otimizada antiga continuar no cache, invalide o cache de imagem do provedor e recarregue; em ambiente local, reinicie com o cache de imagens do Next limpo. Não apague outras pastas.

O procedimento foi exercitado durante a entrega: a foto de acarajé foi substituída no mesmo caminho por uma imagem do Wikimedia Commons; a nova mídia foi conferida visualmente. O cadastro recebeu as novas dimensões e licença, sem alterar os componentes consumidores.

## Incluir uma imagem

Copie o arquivo para a pasta correspondente e acrescente uma entrada em `media.ts`:

```ts
{
  id: 'experiencia-nova',
  src: '/images/experiencias/experiencia-nova.jpg',
  alt: 'Descreva o que é visível na imagem',
  legenda: 'Explique o contexto e se é apenas uma referência',
  credito: 'Nome de quem fotografou',
  origem: 'https://endereco-da-fonte-ou-autorizacao',
  categoria: 'experiencias',
  natureza: 'conceitual',
  focoDesktop: '50% 40%',
  focoMobile: '60% 40%',
  largura: 1600,
  altura: 1200,
  ordem: 5,
  status: 'referencia',
  fonte: 'Identificação da autorização de uso',
}
```

Esse exemplo é um modelo, não um registro pronto para publicação. Cadastre apenas mídia existente, licenciada e verificada. O arquivo só entra na galeria quando cadastrado. A ordem controla a posição. A categoria controla o filtro. Para trocar o papel de uma imagem nas cenas, preserve os IDs `musica`, `acaraje` e `salvador`, ou atualize a associação em `projeto.ts` e nas cenas correspondentes.

## Enquadramento e natureza

- `focoDesktop` / `focoMobile`: primeiro valor move o foco horizontal; segundo, vertical. `50% 50%` é o centro. Confira nos tamanhos 375, 768, 1024 e 1440 px.
- `real`: registro efetivo, com autorização e contexto comprovados. Não use para foto genérica de banco como se fosse o empreendimento.
- `conceitual`: inspiração e referência. Exibe identificação também na versão pública.
- `provisoria`: mídia temporária explicitamente identificada.
- `alt` descreve o conteúdo para leitores de tela; legenda explica o contexto. Não inclua toda a legenda no `alt`.
- Fontes e créditos ficam na página `/creditos`. A foto de acarajé e suas adaptações usam CC BY-SA 4.0; preserve a atribuição, link da licença e indicação de recorte/redimensionamento. Demais fotos usam licença Pexels.

## Imagem de compartilhamento

`public/images/marca/og.jpg` é usada no Open Graph quando o domínio está configurado. Substitua mantendo 1200 × 630. O favicon fica em `src/app/icon.svg`. A identidade atual é proposta tipográfica; valide antes do lançamento público.
