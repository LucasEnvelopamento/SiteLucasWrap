# Fases do Projeto: Lucas Envelopamento (V2)

Este documento descreve as etapas de desenvolvimento do site para a oficina automotiva Lucas Envelopamento.

## ✅ Fase 1: Fundação e Design System — CONCLUÍDA
- [x] Configuração do ambiente de desenvolvimento (Vite + React + Tailwind).
- [x] Implementação do Design System baseado nas cores aprovadas.
  - Primary:   #0A0A0A (Preto Carbono)
  - Secondary: #E79E00 (Dourado Âmbar) ← cor aprovada pelo cliente
  - Accent:    #94A3B8 (Prata Metálico)
- [x] Criação de componentes base (btn-primary, btn-outline, glass-card, carbon-bg).
- [x] Configuração de fontes (Google Fonts: Inter + Outfit).
- [x] Breakpoint xs:480px adicionado para melhor controle mobile.

## ✅ Fase 2: Estrutura e Hero Section — CONCLUÍDA
- [x] Cabeçalho (Navbar) com scroll effect e menu mobile animado.
- [x] Hero Section com carrossel dinâmico (3 slides, auto-play 6s).
- [x] Rodapé informativo (4 colunas: brand, links, serviços, contato).
- [x] Botão flutuante WhatsApp com Framer Motion.
- [x] Correção: id="contato" duplicado removido do Footer.
- [x] Correção: classe md:row inválida → md:flex-row.
- [x] Correção: Ícone YouTube correto (Youtube do lucide-react).
- [x] Correção: Botão mobile "Agendar Agora" com href para WhatsApp.

## ✅ Fase 3: Vitrine de Serviços e Portfolio — CONCLUÍDA
- [x] Seção de Serviços (6 cards: Envelopamento, PPF, Insulfilm, Carbono, Anti-vandalismo, Chrome Delete).
- [x] Carrossel de trabalhos realizados (galeria 6 imagens com hover overlay).
- [x] Seção "Sobre Nós" com badge de experiência (+10 ANOS).
- [x] Criação do componente SectionTitle reutilizável em /ui.

## ✅ Fase 4: Conversão e Contato — CONCLUÍDA
- [x] Integração com WhatsApp (botão flutuante + formulário + CTA final).
- [x] Área de redes sociais (Instagram, YouTube, TikTok).
- [x] Mapa de endereço (Google Maps Embed com grayscale hover).
- [x] Formulário de solicitação de orçamento com estado idle/loading/success.
- [x] STORE_PHONE extraído como constante global.
- [x] Validação de número de WhatsApp (10-11 dígitos) com feedback visual.
- [x] Select de serviços com chevron SVG customizado e opções estilizadas.
- [x] Spinner CSS no botão de envio durante loading.

## ✅ Fase 5: Refinamento e Performance — CONCLUÍDA
- [x] Fluid Typography com CSS clamp() em index.css (8 escalas).
- [x] h-[100dvh] no Hero (compatibilidade Safari/iOS corrigida).
- [x] Imagens convertidas PNG → WebP via script sharp (-86.4% tamanho total).
  - blue_wrap:     519 KB → 47 KB  (-91%)
  - carbon_detail: 716 KB → 109 KB (-85%)
  - ppf:           792 KB → 137 KB (-83%)
  - suv_finished:  600 KB → 59 KB  (-90%)
  - tint:          657 KB → 82 KB  (-88%)
  - wrap:          778 KB → 118 KB (-85%)
  - TOTAL: 3.97 MB → 552 KB
- [x] Lazy loading + decoding="async" nas imagens da galeria.
- [x] Spinner CSS animado no botão de envio do formulário.
- [x] Responsividade mobile mobile aprimorada:
  - Hero: h1 com clamp(2.5rem, 8vw, 6rem), botões adaptados.
  - CTA Final: botão full-width no mobile, texto fluido.
  - Padding seguro (pt-24) no hero para não sobrepor a Navbar.
- [x] Paleta de cores do projeto confirmada com o cliente (Dourado #E79E00).
- [x] Homologação final com o cliente (V1).

## ✅ Fase 6: Rebranding e Atualização de Conteúdo — CONCLUÍDA
- [x] Renomear todas as ocorrências de "LucasWrap" para "Lucas Envelopamento".
- [x] Atualizar experiência para "+15 ANOS" em `AboutSection.jsx`.
- [x] Ajustar garantias em `ServicesGrid.jsx` (Envelopamento 5 anos, PPF 7 anos).
- [x] Configurar novos links e CTAs nos slides do `HeroCarousel.jsx`.

## ✅ Fase 7: Galeria Dinâmica (Supabase) — CONCLUÍDA
- [x] Refatorar `WorkGallery.jsx` para carregar fotos do bucket `trabalhos-recentes` no Supabase.
- [x] Criar interface moderna para visualização de fotos.
- [x] Configurar regras de segurança (RLS) no Supabase Storage para acesso público somente-leitura.
- [x] Instruir o cliente sobre o upload manual de imagens via painel Supabase.

## ✅ Fase 8: Metadados da Galeria via Banco de Dados — CONCLUÍDA
- [x] Documentar tabela `trabalhos_recentes` no `estrutura_db.md`.
- [x] Refatorar `WorkGallery.jsx` para buscar dados da tabela em vez do bucket.
- [x] Exibir o campo `titulo` de forma dinâmica na interface.
- [x] Homologação local com o cliente.

## ✅ Fase 9: Ajustes Finos de Conteúdo — CONCLUÍDA
- [x] Simplificar nomenclatura de PPF (remover "Self-Healing" e "High Performance") em:
  - `ServicesGrid.jsx`
  - `ContactSection.jsx`
  - `Footer.jsx`
- [x] Atualizar link do TikTok para `@lucaswrap` no `Footer.jsx`.
- [x] Substituir ícone genérico pelo ícone oficial do TikTok (SVG) no `Footer.jsx`.

---

## 🔄 Fase 10: Design Premium & UX (Visual WOW) — PENDENTE
> **Objetivo:** Elevar o site de "bom" para "incrível". Redesign visual completo com animações premium, novas seções de impacto e experiência de usuário de alto nível.
> **Referência geral:** `documentacao.md` → Seção 5 (Pontos Fracos: Design & UX) + Seção 8A

- [ ] **10.1 — Logo real da empresa**
  - Substituir ícone `Zap` genérico pela logo oficial em `Navbar.jsx` e `Footer.jsx`.
  - 📎 Ref: `documentacao.md` → Seção 5, Design & UX, item 1
  - 📁 Arquivos: `src/components/layout/Navbar.jsx`, `src/components/layout/Footer.jsx`
  - ⚠️ **Depende do cliente fornecer a logo (PNG/SVG)**

- [ ] **10.2 — Hero com vídeo de fundo ou imagens reais**
  - Substituir imagens stock por vídeo cinematográfico ou fotos reais da oficina.
  - Adicionar preload na primeira imagem/frame do vídeo para performance.
  - 📎 Ref: `documentacao.md` → Seção 5, Design & UX, item 2 + Seção 5, Técnico, itens 5-6
  - 📁 Arquivos: `src/components/sections/HeroCarousel.jsx`, `src/assets/`
  - ⚠️ **Depende do cliente fornecer vídeo/fotos reais**

- [x] **10.3 — Lightbox modal na galeria**
  - Implementar modal fullscreen ao clicar nas fotos da galeria com navegação (prev/next), zoom e swipe mobile.
  - 📎 Ref: `documentacao.md` → Seção 5, Design & UX, item 3
  - 📁 Arquivos: `src/components/sections/WorkGallery.jsx` (criar novo componente `src/components/ui/Lightbox.jsx`)

- [ ] **10.4 — Filtro por categoria na galeria**
  - Adicionar filtros (Todos, PPF, Envelopamento, Insulfilm, Carbono) na galeria de trabalhos.
  - Requer campo `categoria` na tabela `trabalhos_recentes` do Supabase.
  - 📎 Ref: `documentacao.md` → Seção 5, Design & UX, item 4 + Seção 3 (Banco de Dados)
  - 📁 Arquivos: `src/components/sections/WorkGallery.jsx`, `estrutura_db.md`

- [ ] **10.5 — Seção de Depoimentos (Prova Social)**
  - Criar carousel de depoimentos com avatar, nome, texto e estrelas.
  - 📎 Ref: `documentacao.md` → Seção 5, Design & UX, item 5
  - 📁 Criar: `src/components/sections/TestimonialsSection.jsx`
  - ⚠️ **Depende do cliente fornecer depoimentos reais**

- [x] **10.6 — Seção de Estatísticas animadas**
  - Contadores animados: "+1500 veículos", "+15 anos", "99% satisfação", "+6 serviços".
  - Animação de contagem ao entrar na viewport (Framer Motion).
  - 📎 Ref: `documentacao.md` → Seção 5, Design & UX, item 10 + Seção 8A, item 7
  - 📁 Criar: `src/components/sections/StatsSection.jsx`

- [x] **10.7 — Seção FAQ (Perguntas Frequentes)**
  - Accordion animado com as perguntas mais frequentes sobre serviços.
  - 📎 Ref: `documentacao.md` → Seção 5, Design & UX, item 6 + Seção 8A, item 8
  - 📁 Criar: `src/components/sections/FAQSection.jsx`

- [ ] **10.8 — Parallax effects e micro-animações**
  - Adicionar efeitos de parallax suaves nas seções com imagens.
  - Micro-animações em hover dos cards de serviço e galeria.
  - Scroll progress bar no topo da página.
  - Scroll indicator (seta animada) no hero.
  - 📎 Ref: `documentacao.md` → Seção 8A, itens 1, 4, 9
  - 📁 Arquivos: `src/App.jsx`, `src/components/sections/HeroCarousel.jsx`, `src/components/sections/ServicesGrid.jsx`

- [ ] **10.9 — Slider Antes/Depois interativo**
  - Componente de comparação visual com slider arrastável.
  - 📎 Ref: `documentacao.md` → Seção 8A, item 10
  - 📁 Criar: `src/components/sections/BeforeAfterSection.jsx`
  - ⚠️ **Depende do cliente fornecer fotos de antes/depois**

- [x] **10.10 — Componente SectionTitle unificado**
  - Refatorar todas as seções para usar o `SectionTitle.jsx` já existente (eliminar títulos duplicados).
  - 📎 Ref: `documentacao.md` → Seção 5, Design & UX, item 8
  - 📁 Arquivos: `src/components/ui/SectionTitle.jsx`, todos os arquivos em `src/components/sections/`

- [x] **10.11 — Corrigir links mortos do Footer**
  - Links "Política de Privacidade" e "Termos de Uso" com `href="#"` devem apontar para conteúdo real ou serem removidos.
  - 📎 Ref: `documentacao.md` → Seção 5, Design & UX, item 7
  - 📁 Arquivos: `src/components/layout/Footer.jsx`

- [ ] **Homologação visual com o cliente (Fase 10)**

---

## 🔧 Fase 11: Refatoração Técnica & Código — PENDENTE
> **Objetivo:** Limpar débito técnico, centralizar configurações, melhorar SEO e preparar o projeto para manutenção futura.
> **Referência geral:** `documentacao.md` → Seção 5 (Pontos Fracos: Técnico) + Seção 8B

- [x] **11.1 — Centralizar constantes globais**
  - Criar `src/lib/constants.js` com STORE_PHONE, WHATSAPP_LINK, endereço, redes sociais.
  - Eliminar hardcoded em `App.jsx`, `ContactSection.jsx`, `Navbar.jsx`, `Footer.jsx`.
  - 📎 Ref: `documentacao.md` → Seção 5, Técnico, item 1 + Seção 8B, item 1
  - 📁 Criar: `src/lib/constants.js`
  - 📁 Atualizar: `src/App.jsx`, `src/components/layout/Navbar.jsx`, `src/components/layout/Footer.jsx`, `src/components/sections/ContactSection.jsx`

- [x] **11.2 — Remover imagens PNG do bundle**
  - Deletar os 6 arquivos .png de `src/assets/` (já existem versões .webp otimizadas).
  - Economia estimada: ~3.97 MB do bundle.
  - 📎 Ref: `documentacao.md` → Seção 5, Técnico, item 3
  - 📁 Arquivos: `src/assets/*.png`

- [x] **11.3 — Criar .env.example**
  - Documentar variáveis de ambiente necessárias para onboarding de novos devs.
  - Variáveis: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`
  - 📎 Ref: `documentacao.md` → Seção 5, Técnico, item 2
  - 📁 Criar: `.env.example`

- [x] **11.4 — Tratamento de erro no Supabase client**
  - Adicionar validação de variáveis de ambiente com mensagem clara se faltarem.
  - 📎 Ref: `documentacao.md` → Seção 5, Técnico, item 4
  - 📁 Arquivos: `src/lib/supabase.js`

- [ ] **11.5 — Favicon e manifest personalizados**
  - Substituir `vite.svg` por favicon da marca (multi-tamanho).
  - Criar `manifest.json` para instalabilidade PWA.
  - 📎 Ref: `documentacao.md` → Seção 5, Técnico, itens 9-10
  - 📁 Arquivos: `index.html`, `public/favicon.ico`, criar `public/manifest.json`
  - ⚠️ **Depende do cliente fornecer a logo para gerar o favicon**

- [x] **11.6 — Sitemap.xml e robots.txt**
  - Criar arquivos estáticos para indexação do Google.
  - 📎 Ref: `documentacao.md` → Seção 5, Técnico, item 8 + Seção 8B, item 6
  - 📁 Criar: `public/sitemap.xml`, `public/robots.txt`

- [x] **11.7 — Schema.org JSON-LD (SEO Local)**
  - Adicionar markup de negócio local (LocalBusiness) no `index.html`.
  - Melhorar posicionamento em buscas locais "envelopamento SP".
  - 📎 Ref: `documentacao.md` → Seção 8C, item 4
  - 📁 Arquivos: `index.html`

- [ ] **Validação técnica e testes de build (Fase 11)**

---

## 📊 Fase 12: Conversão, Analytics & Leads — PENDENTE
> **Objetivo:** Transformar o site em máquina de conversão. Capturar leads no banco, integrar analytics e otimizar para campanhas pagas.
> **Referência geral:** `documentacao.md` → Seção 3 (Banco de Dados) + Seção 5 (Técnico, item 7) + Seção 8C

- [x] **12.1 — Salvar leads no Supabase**
  - Ativar tabela `leads_contato` já documentada no `estrutura_db.md`.
  - Criar RPC segura (ou Edge Function) para inserção de leads.
  - Manter o redirecionamento para WhatsApp após salvar.
  - 📎 Ref: `documentacao.md` → Seção 3 (tabela `leads_contato`) + Seção 5, Técnico, item 7 + Seção 8C, item 1
  - 📎 Ref BD: `estrutura_db.md` → tabela `leads_contato`
  - 📁 Arquivos: `src/components/sections/ContactSection.jsx`, `estrutura_db.md`

- [x] **12.2 — RLS para tabela leads_contato**
  - Criar políticas: INSERT público (anon), SELECT/UPDATE/DELETE apenas para autenticados.
  - 📎 Ref: `documentacao.md` → Seção 3 (RLS) + Seção 8D, item 1
  - 📎 Ref BD: `estrutura_db.md` → Regras de Integridade
  - 📎 Ref Segurança: `_skills/01-baas-security-constitution.md` → Seções 4-5

- [x] **12.3 — Google Analytics 4 (GA4)**

- [x] **12.4 — Pixel Meta (Facebook/Instagram)**

- [ ] **Homologação de conversão com o cliente (Fase 12)**

---

## 🔒 Fase 13: Segurança & Produção — PENDENTE
> **Objetivo:** Garantir que o site esteja seguro, performático e pronto para produção conforme o pipeline de skills lean.
> **Referência geral:** `documentacao.md` → Seção 5 (Segurança) + Seção 6 (Pipeline de Skills) + Seção 8D

- [x] **13.1 — Validação RLS em todas as tabelas**
  - Auditar e confirmar RLS ativo em `trabalhos_recentes` e `leads_contato`.
  - Documentar todas as políticas no `estrutura_db.md`.
  - 📎 Ref: `documentacao.md` → Seção 3 (RLS) + Seção 5, Segurança, item 2
  - 📎 Ref Segurança: `_skills/01-baas-security-constitution.md` → Seções 4-5
  - 📎 Ref BD: `estrutura_db.md`

- [x] **13.2 — Rate limiting no formulário**
  - Implementar anti-spam no frontend (debounce/cooldown) e considerar Edge Function para validação server-side.
  - 📎 Ref: `documentacao.md` → Seção 5, Segurança, item 3 + Seção 8D, item 2
  - 📎 Ref Segurança: `_skills/01-baas-security-constitution.md` → Seção 9
  - 📁 Arquivos: `src/components/sections/ContactSection.jsx`

- [x] **13.3 — Content Security Policy (CSP) via Vercel**
  - Configurar headers de segurança no `vercel.json`.
  - 📎 Ref: `documentacao.md` → Seção 8D, item 3
  - 📎 Ref Segurança: `_skills/01-baas-security-constitution.md` → Seção 12
  - 📁 Criar: `vercel.json`

- [x] **13.4 — QA + Production Review**
  - Executar pipeline completo de validação conforme skill `04-qa-production-review.md`.
  - Validar: fluxos críticos, regressões, performance, build Vercel.
  - 📎 Ref: `_skills/04-qa-production-review.md` (documento completo)
  - 📎 Ref Pipeline: `_skills/00-lean-orchestrator.md` → Step 5

- [x] **13.5 — Code Maturity Assessment**
  - Executar avaliação de maturidade de código conforme skill `code-maturity-assessor`.
  - 📎 Ref: `skills/code-maturity-assessor/SKILL.md`

- [ ] **13.6 — Release Decision**
  - Aprovar ou rejeitar release para produção conforme pipeline lean.
  - Requisitos: Security ✅, PRP ✅, Architecture ✅, QA ✅
  - 📎 Ref Pipeline: `_skills/00-lean-orchestrator.md` → Seções 5-6
  - 📎 Ref: `documentacao.md` → Seção 6 (Pipeline de Skills)

- [ ] **Deploy final em produção (Vercel)**
