# Gerson Santos — Portfólio

Portfólio empresarial com duas trilhas:
- Engenharia de Software / Ciência de Dados / ML / Visão Computacional / LLMs
- Engenharia Elétrica

Destaque para o padrão **Demonstração Pública + Núcleo Privado**, garantindo provas públicas com preservação de IP.

## Tecnologias
- Next.js (App Router) + TypeScript
- TailwindCSS + Typography
- MDX via filesystem + gray-matter
- Fuse.js (busca local)
- framer-motion (animações leves)
- GitHub Pages (export estático)

## Rodar localmente
```
npm install
npm run dev
```

## Build e export
```
npm run build
```
O build gera `/out` para GitHub Pages.

## Publicação no GitHub Pages
- O workflow em `.github/workflows/pages.yml` publica automaticamente em `main`.
- Se o repositório não for `Gerson201.github.io`, o `basePath` é configurado automaticamente.

## Conteúdo em MDX
Veja `docs/CONTENT_GUIDE.md` para adicionar projetos e posts.

## Estratégia de privacidade e IP
Veja `docs/PRIVACY_IP_STRATEGY.md`.

## Sanitização de imagens
Veja `docs/IMAGE_SANITIZATION.md`.

## Templates Demonstração Pública + Núcleo Privado
- `docs/README_PUBLIC_DEMO_TEMPLATE.md`
- `docs/LICENSE_PRIVATE_CORE_TEMPLATE.md`


