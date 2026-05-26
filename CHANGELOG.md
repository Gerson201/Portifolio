# Changelog

## 2026-02-08

### Estrutura e stack
- Projeto em Next.js (App Router) com exportação estática para GitHub Pages.
- Conteúdo dinâmico via MDX em `/content` com frontmatter padronizado.
- Busca local e filtros com Fuse.js.
- Animações leves com framer-motion.

### Layout e navegação
- Home com dois cards verticais (Engenharia de Software e Engenharia Elétrica).
- Fundo dinâmico com transição suave baseado no hover dos cards.
- Menu em português (Início, Engenharia de Software, Elétrica, Projetos, Artigos, Certificados, Contato).

### Conteúdo e cards
- Cards de projetos com imagem, resumo e badges.
- Páginas de projetos com imagem em destaque.
- Tags e textos padronizados em português.

### Certificados
- PDFs convertidos para imagens em `public/Certificados/images`.
- Galeria de certificados em `/about` (menu “Certificados”).
- Proteção visual contra cópia (overlay e bloqueio de contexto).

### Artigos em PDF
- PDFs convertidos para imagens em `public/Artigos/images/<slug>/page-XXX.png`.
- Cards na página Artigos com visualização em modal rolável.

### Atualizações de dependências
- Next.js atualizado para `^16.1.6`.
- React atualizado para `^19.2.4`.
- ESLint atualizado para `^10.0.0`.

---

## Estrutura do projeto

```
/
  app/
    layout.tsx
    page.tsx
    software/page.tsx
    eletrica/page.tsx
    projects/page.tsx
    blog/page.tsx
    about/page.tsx
    contact/page.tsx
    projects/[slug]/page.tsx
    blog/[slug]/page.tsx
  components/
    ArticleGallery.tsx
    Badge.tsx
    CertificateGallery.tsx
    Footer.tsx
    Hero.tsx
    Navbar.tsx
    PostList.tsx
    Prose.tsx
    ProjectCard.tsx
    ProjectGrid.tsx
    SearchBox.tsx
    SectionHeader.tsx
    TagFilter.tsx
    ThemeToggle.tsx
  lib/
    articles.ts
    certificates.ts
    content.ts
    search.ts
    types.ts
    utils.ts
  content/
    software/projects/*.mdx
    software/posts/*.mdx
    eletrica/projects/*.mdx
    eletrica/posts/*.mdx
  public/
    Artigos/
      images/
    Certificados/
      images/
    images/
      Home/
      placeholders/
  docs/
    CONTENT_GUIDE.md
    PRIVACY_IP_STRATEGY.md
    IMAGE_SANITIZATION.md
    README_PUBLIC_DEMO_TEMPLATE.md
    LICENSE_PRIVATE_CORE_TEMPLATE.md
  .github/workflows/pages.yml
  next.config.js
  tailwind.config.ts
  postcss.config.js
  tsconfig.json
  package.json
  README.md
  LICENSE
```
