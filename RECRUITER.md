# Gerson Santos — Projetos Selecionados para Recrutadores

**Engenheiro de Software · Engenheiro de ML · Sistemas IoT**

> Este documento destaca os projetos mais relevantes para vagas de Engenharia de Software, IA/ML e Full Stack.
> Repositórios privados são documentados com profundidade técnica; acesso ao código requer acordo de NDA.

---

## Competências Principais

| Categoria | Tecnologias |
|-----------|-------------|
| **Linguagens** | Python · TypeScript · C++ |
| **IA & ML** | TensorFlow · PyTorch · ONNX Runtime · OpenCV · XGBoost · LightGBM · MediaPipe · LLMs |
| **Backend** | FastAPI · NestJS · Django · Express · Flask · Node.js |
| **Frontend** | React 19 · Next.js · Electron · Tailwind CSS |
| **Banco de Dados** | PostgreSQL · SQLite · Firebase Realtime Database |
| **DevOps / Cloud** | Docker · GitHub Actions · AWS · Alembic |
| **Arquiteturas** | Clean Architecture · Monorepo (Turborepo) · SaaS Multi-Tenant · Edge Computing |

---

## Projetos em Destaque — Engenharia de Software

### 1. Detecção de Quedas e HAR em Edge (Visão Computacional)
**Stack:** Python · ONNX Runtime · OpenCV · MediaPipe · EfficientNet · TCN · Docker  
**Repositório:** Privado — `Gerson201/Sistema_deteccao_de_atividades` / `Sistema_deteccao_atividade_Raspberry`  
**Status:** Protótipo funcional, pronto para deploy em edge

Sistema de Visão Computacional em tempo real para detecção de quedas e reconhecimento de atividades humanas (HAR):
- Arquitetura dupla: TCN (sequências de keypoints) + EfficientNet + MediaPipe (visual + pose)
- Rastreamento multi-objeto com re-identificação em cenários de oclusão
- Pipeline ONNX completo — roda em Raspberry Pi e Jetson Nano (CPU/GPU/NPU)
- 15–30 FPS em hardware embarcado

---

### 2. Plataforma SaaS Multi-Tenant E-commerce
**Stack:** NestJS · Next.js · PostgreSQL · Prisma · TypeScript · Turborepo · JWT · Docker  
**Repositório:** Privado — `Gerson201/SaaS`  
**Status:** MVP completo

SaaS full-stack com multi-tenancy completo:
- Monorepo (Turborepo + pnpm) com pacotes compartilhados
- RBAC (3 níveis), JWT refresh tokens, isolamento de dados por tenant
- Construtor de páginas visual com drag-and-drop (`@dnd-kit`)
- 4 gateways de pagamento: Pagar.me, Stripe, Mercado Pago, Asaas
- 18+ documentos de arquitetura

---

### 3. ScrapBid — Plataforma Desktop B2B/B2G
**Stack:** Electron · React · TypeScript · FastAPI · SQLite · Alembic · Python  
**Repositório:** Privado — `Gerson201/scrapbid`  
**Status:** Produção, em uso por empresa de engenharia

Desktop all-in-one para empresas B2B em licitações públicas:
- Scraping automatizado do portal PNCP para coleta de editais
- Calculadora de lances com simulação de margem e impostos
- Sincronização bidirecional com ERP Bling via API oficial
- Operação offline — SQLite local + backend FastAPI

---

### 4. MCP Context Hub — Ferramenta para Desenvolvedores com IA
**Stack:** TypeScript · Node.js · Model Context Protocol · ripgrep · Git  
**Repositório:** Privado — `Gerson201/mcp-context-hub`  
**Status:** Em uso diário

Servidor MCP local que expõe busca de código, leitura de documentação e histórico Git para agentes LLM (Claude, Cursor):
- Zero vazamento de dados: 100% local, exclusão de secrets/env por glob
- Busca por texto com ripgrep (10× mais rápido que fallback grep)
- Instalador Windows (.exe) com Node.js embutido — sem necessidade de ambiente de desenvolvimento
- Compatível com qualquer cliente MCP

---

### 5. Intelligence Suite — Agentes de IA para Marketing e Analytics
**Stack:** TypeScript · Express · Gemini AI · Playwright · Google Analytics API · SQLite · JWT · Docker  
**Repositório:** Privado  
**Status:** Produção

Dois sistemas de agentes de IA em produção:
- **Tracking Intelligence**: API Express + automação headless com Playwright para auditar eventos GTM/GA4/pixels em páginas reais. Gemini analisa resultados e gera relatórios PDF com diagnóstico. Auth via JWT, rate-limiting, helmet.
- **Marketing Intelligence**: Sistema Gemini multi-agente integrado à Google Analytics API para análise de performance de campanhas e recomendações automatizadas de copy e segmentação.

---

## Contribuições Open Source

| Repositório | Finalidade |
|-------------|-----------|
| `doclingChucnking` | Pipeline de chunking de documentos para fluxos GenAI/RAG |
| `segformer` | SegFormer (segmentação semântica) usado em pesquisa de Visão Computacional |

---

## Formação

| Grau | Conclusão |
|------|-----------|
| B.Eng. Engenharia de Software | Julho/2027 |
| M.Sc. Modelagem Computacional | Dezembro/2026 |
| Pós-grad. Ciência de Dados | Julho/2026 |
| B.Eng. Engenharia Elétrica | Concluído |

---

## Notas para Recrutadores

- **Repositórios privados**: Acesso ao código disponível sob NDA para oportunidades sérias. Documentos de arquitetura e relatórios de cobertura de testes podem ser compartilhados mediante solicitação.
- **Perfil público**: [github.com/Gerson201](https://github.com/Gerson201)
- **Contato**: [LinkedIn](https://linkedin.com/in/gerson-santos-14a94b24b) · [GitHub](https://github.com/Gerson201)
