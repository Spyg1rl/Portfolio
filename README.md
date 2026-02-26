# Portfolio

Portfolio migrado para React + Tamagui com Vite.

## Requisitos

- Node.js 18+
- Yarn 1.x

## Como rodar localmente

1. Instale as dependências:

```bash
yarn
```

2. Inicie em modo desenvolvimento:

```bash
yarn dev
```

3. Build de produção:

```bash
yarn build
```

## Deploy no GitHub Pages

Este projeto está configurado com `base: '/Portfolio/'` para funcionar no repositório `Spyg1rl/Portfolio`.

Para publicar corretamente (sem erro de `src/main.jsx` 404):

```bash
yarn deploy
```

Isso gera o build e publica a pasta `dist` na branch `gh-pages`.

Depois, no GitHub:

1. Vá em **Settings > Pages**.
2. Em **Source**, selecione **Deploy from a branch**.
3. Escolha a branch **gh-pages** e pasta **/(root)**.