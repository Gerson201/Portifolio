# Gerson Santos — Curated Projects for Recruiters

**Software Engineer · ML Engineer · IoT Systems**

> This document highlights the most relevant projects for Software Engineering, AI/ML, and Full Stack roles.
> Private repositories are documented with technical depth but code access requires NDA agreement.

---

## Core Skills

| Category | Technologies |
|----------|-------------|
| **Languages** | Python · TypeScript · C++ |
| **ML / AI** | PyTorch · ONNX Runtime · OpenCV · MediaPipe · Scikit-learn · LLMs |
| **Backend** | FastAPI · NestJS · Django · Flask · Node.js |
| **Frontend** | React 19 · Next.js 14 · Electron · Tailwind CSS |
| **Databases** | PostgreSQL · SQLite · Firebase Realtime Database |
| **DevOps / Cloud** | Docker · GitHub Actions · Firebase · Alembic |
| **Architectures** | Clean Architecture · Monorepo (Turborepo) · Multi-Tenant SaaS · Edge Computing |

---

## Featured Projects — Software Engineering

### 1. Sistema de Day Trading com IA (Producao)
**Stack:** Python · PyTorch · LSTM · PPO (RL) · GARCH · MetaTrader 5 · Flask · WebSocket  
**Repo:** Private (core proprietary) — `Gerson201/IA-para-Mercado-Financeiro`  
**Status:** Production-grade, under active use

Algorithmic trading system built on **Clean Architecture (4 layers)** with 86+ modules. Implements:
- LSTM with Self-Attention for price prediction (95.5% test coverage)
- Hybrid GARCH + LSTM for volatility forecasting (97.56% test coverage)
- Reinforcement Learning agent (PPO) trained for 1M timesteps
- Dynamic risk management: Kelly Criterion + ATR-based position sizing
- Circuit breakers, drawdown monitoring, real-time WebSocket dashboard

**Why it matters for recruiters:** Demonstrates production ML engineering, not just notebooks. 93–97% test coverage per module. Equivalent to institutional-grade quant systems.

---

### 2. Deteccao de Quedas e HAR em Edge (Vision AI)
**Stack:** Python · ONNX Runtime · OpenCV · MediaPipe · EfficientNet · TCN · Docker  
**Repo:** Private — `Gerson201/Sistema_deteccao_de_atividades` / `Sistema_deteccao_atividade_Raspberry`  
**Status:** Working prototype, edge-deployable

Real-time Computer Vision system for fall detection and Human Activity Recognition:
- Dual-architecture: TCN (keypoint sequences) + EfficientNet + MediaPipe (hybrid visual+pose)
- Multi-object tracking with Re-Identification across occlusion
- Full ONNX pipeline — runs on Raspberry Pi, Jetson Nano (CPU/GPU/NPU)
- 15–30 FPS on edge hardware

---

### 3. Plataforma SaaS Multi-Tenant E-commerce
**Stack:** NestJS · Next.js 14 · PostgreSQL · Prisma · TypeScript · Turborepo · JWT · Docker  
**Repo:** Private — `Gerson201/SaaS`  
**Status:** MVP complete

Full-stack SaaS with complete multi-tenancy:
- Monorepo (Turborepo + pnpm) with shared packages
- RBAC (3 levels), JWT refresh tokens, per-tenant data isolation
- Visual drag-and-drop page builder (`@dnd-kit`)
- 4 payment gateways: Pagar.me, Stripe, Mercado Pago, Asaas
- 18+ architecture documents

---

### 4. ScrapBid — Plataforma Desktop B2B/B2G
**Stack:** Electron · React · TypeScript · FastAPI · SQLite · Alembic · Python  
**Repo:** Private — `Gerson201/scrapbid`  
**Status:** Production, used by engineering firm

Desktop all-in-one for B2B companies in public procurement (licitacoes):
- Automated PNCP portal scraping for public contract data
- Bid calculator with margin + tax simulation
- ERP Bling bidirectional sync via official API
- Works offline — local SQLite + FastAPI backend

---

### 5. MCP Context Hub — AI Developer Tool
**Stack:** TypeScript · Node.js · Model Context Protocol · ripgrep · Git  
**Repo:** Private — `Gerson201/mcp-context-hub`  
**Status:** In use daily

Local MCP server exposing code search, documentation reading, and Git history tools to LLM agents (Claude, Cursor):
- Zero data leakage: 100% local, secret/env exclusion by glob
- ripgrep-backed text search (10x faster than grep fallback)
- Windows installer (.exe) bundled with Node.js — no dev environment required
- Compatible with any MCP client

---

### 6. Sistema ColmeIA — IoT Monitoring Platform
**Stack:** React 19 · Django 5.2 · Firebase · Chart.js · ESP32 · Python  
**Repo:** **Public** — [github.com/Gerson201/Sistema-ColmeIA](https://github.com/Gerson201/Sistema-ColmeIA)  
**Status:** Public demo

End-to-end IoT system for beehive monitoring:
- ESP32 firmware (temperature, humidity, weight, sound sensors) + solar power
- Firebase Realtime Database for sensor streaming + FCM push alerts
- Django REST API + React 19 dashboard with live Chart.js graphs
- Smart alert rules: critical temperature, weight anomalies, humidity thresholds

---

### 7. GWR Intelligence Suite — AI Agents
**Stack:** TypeScript · Gemini AI · Playwright · Node.js  
**Repos:** Private — `gwr-tracking-intelligence` / `gwr-marketing-intelligence`  
**Status:** Production for client

Two production AI agent systems:
- **Tracking Intelligence**: Automated audit of analytics tracking on landing pages via Playwright + Gemini AI + PDF reports
- **Marketing Intelligence**: Multi-agent marketing campaign analysis and correction using Gemini models

---

## Open Source Contributions / Forks Used in Production

| Repo | Purpose |
|------|---------|
| `doclingChucnking` | Document chunking pipeline for GenAI/RAG workflows |
| `segformer` | SegFormer (semantic segmentation) used in CV research |

---

## Education

| Degree | Institution | Expected Completion |
|--------|-------------|---------------------|
| B.Eng. Software Engineering | — | July 2027 |
| M.Sc. Computational Modeling | — | December 2026 |
| Post-grad. Data Science | — | July 2026 |
| B.Eng. Electrical Engineering | — | Completed |

---

## Notes for Recruiters

- **Private repos**: Code access available under NDA for serious opportunities. Architecture documents and test coverage reports can be shared on request.
- **Public demo**: [github.com/Gerson201](https://github.com/Gerson201)
- **Contact**: [LinkedIn](https://linkedin.com/in/gerson-santos-dev) · [GitHub](https://github.com/Gerson201)
