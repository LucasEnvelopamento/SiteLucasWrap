# 🏎️ Levantamento Completo — Lucas Envelopamento

## 1. Visão Geral do Projeto

**O que é:** Site institucional/landing page para a oficina de estética automotiva **Lucas Envelopamento**, localizada em São Paulo-SP. Focado em conversão via WhatsApp e showcase de trabalhos realizados.

**Stack tecnológica:**
| Camada | Tecnologia | Versão |
|:---|:---|:---|
| Frontend | React + JSX | 18.2 |
| Build Tool | Vite | 5.1 |
| CSS | Tailwind CSS | 3.4 |
| Animações | Framer Motion | 11.0 |
| Ícones | Lucide React | 0.359 |
| BaaS | Supabase | 2.103 |
| Hosting | Vercel | — |
| Fontes | Inter + Outfit (Google Fonts) | — |

**Deploy:** Vercel (estático com SPA)

---

## 2. Estrutura de Arquivos

```
SiteLucas/
├── _skills/                    ← Pipeline de desenvolvimento (6 skills lean)
├── skills/                     ← Skills de design/código do projeto
│   ├── code-maturity-assessor/
│   ├── dashboard-layout/
│   ├── responsive-design/
│   └── ui-design-system/
├── scripts/
│   └── optimize-images.mjs     ← Otimização WebP via sharp
├── src/
│   ├── assets/                 ← 6 imagens PNG + 6 WebP (hero/gallery)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx      ← Navbar fixa com scroll effect + mobile
│   │   │   └── Footer.jsx      ← Footer 4 colunas + redes sociais
│   │   ├── sections/
│   │   │   ├── HeroCarousel.jsx    ← Hero fullscreen com 3 slides
│   │   │   ├── ServicesGrid.jsx    ← 6 cards de serviços
│   │   │   ├── WorkGallery.jsx     ← Galeria dinâmica via Supabase
│   │   │   ├── AboutSection.jsx    ← Sobre nós com badge +15 anos
│   │   │   └── ContactSection.jsx  ← Formulário + mapa + WhatsApp
│   │   └── ui/
│   │       └── SectionTitle.jsx    ← Componente reutilizável de título
│   ├── lib/
│   │   └── supabase.js         ← Client Supabase (anon key via env)
│   ├── App.jsx                 ← Composição principal + CTA + WhatsApp float
│   ├── main.jsx                ← Entry point React
│   └── index.css               ← Design tokens + componentes CSS
├── fase.md                     ← Controle de fases (9 completas)
├── estrutura_db.md             ← Documentação do banco Supabase
├── package.json
├── tailwind.config.js
├── vite.config.js
├── postcss.config.js
└── index.html                  ← SEO + OG tags + fonts
```

---

## 3. Banco de Dados (Supabase)

### Tabelas
| Tabela | Finalidade |
|:---|:---|
| `trabalhos_recentes` | Metadados das fotos (titulo, url, storage_path, created_at) |
| `leads_contato` | Solicitações de orçamento (**não implementada no frontend**) |

### Storage
| Bucket | Tipo | Uso |
|:---|:---|:---|
| `trabalhos-recentes` | Público | Fotos dos veículos finalizados |

### Políticas (RLS)
- ✅ SELECT público para visualização
- ✅ INSERT/DELETE restrito a usuários autenticados
- ⚠️ Tabela `trabalhos_recentes` precisa validação de RLS (não documentado se tem RLS ativo)

---

## 4. Paleta de Cores (Design System)

| Token | Hex | Uso |
|:---|:---|:---|
| Primary | `#0A0A0A` | Preto Carbono (fundo) |
| Secondary | `#E79E00` | Dourado Âmbar (CTA, destaques) |
| Accent | `#94A3B8` | Prata Metálico (texto secundário) |

**Fontes:** Inter (body) + Outfit (display/títulos)

---

## 5. Análise dos Componentes Atuais

### ✅ Pontos Fortes
- **Design coeso** — Paleta dark/gold consistente em todo o site
- **Animações com Framer Motion** — Transições suaves e profissionais
- **Tipografia fluida** — 8 escalas com `clamp()` no CSS
- **Imagens otimizadas** — PNG → WebP (-86% de tamanho)
- **SEO básico** — Metatags OG, Twitter Cards, `lang="pt-BR"`
- **Responsividade** — Mobile-first com breakpoint `xs:480px`
- **Textura carbon fiber** — Background personalizado CSS
- **Integração WhatsApp** — Formulário + botão flutuante + CTA final
- **Galeria dinâmica** — Dados vêm do Supabase em tempo real
- **Scrollbar customizado** — Detalhe premium

### ⚠️ Pontos Fracos / Oportunidades de Melhoria

#### Design & UX
1. **Sem logo real** — Usa ícone Zap genérico; precisa da logo da empresa
2. **Hero carousel com imagens genéricas** — Parecem stock; precisa fotos reais da oficina
3. **Sem lightbox na galeria** — Clicar nas fotos não abre modal de visualização ampliada
4. **Sem filtro na galeria** — Não há categorização dos trabalhos (PPF, Envelopamento, etc.)
5. **Sem seção de depoimentos** — Prova social inexistente
6. **Sem FAQ** — Perguntas frequentes não abordadas
7. **Footer links "Política de Privacidade" e "Termos"** — São `href="#"` mortos
8. **Componente SectionTitle criado mas não usado** — Os títulos são duplicados manualmente
9. **Sem animação de scroll indicator** no hero (seta para baixo)
10. **Sem contagem de projetos realizados** — Estatísticas de impacto

#### Técnico / Código
1. **STORE_PHONE hardcoded em múltiplos arquivos** — App.jsx e ContactSection.jsx usam variáveis diferentes
2. **Sem .env.example** — Novo dev não sabe quais variáveis precisa
3. **Imagens PNG ainda no bundle** — 6 PNGs (3.97MB) desnecessários se já tem WebP
4. **Sem tratamento de erro no Supabase client** — Se env vars faltam, crash silencioso
5. **Sem lazy loading no hero** — Imagens do carrossel carregam todas de uma vez
6. **Sem preload da imagem do primeiro slide**
7. **Formulário não salva no Supabase** — Só redireciona para WhatsApp; tabela `leads_contato` não usada
8. **Sem sitemap.xml e robots.txt**
9. **Favicon é `vite.svg` padrão** — Precisa favicon personalizado
10. **Sem PWA/manifest** — Não instalável
11. **Sem analytics** — Sem Google Analytics / GTM

#### Segurança (conforme _skills/01-baas-security)
1. ✅ Anon key via `import.meta.env` (seguro)
2. ⚠️ RLS da tabela `trabalhos_recentes` — precisa confirmar que está ativa
3. ⚠️ Sem validação server-side do formulário (só client)
4. ✅ Sem service_role exposta

#### Performance
1. ⚠️ Framer Motion bundle (~40KB gzip) — considerar alternativas mais leves para um site simples
2. ⚠️ Google Maps iframe carrega pesado — considerar lazy load mais agressivo
3. ✅ WebP otimizado
4. ✅ Lazy loading nas imagens da galeria

---

## 6. Pipeline de Skills (_skills)

As 6 skills lean definem o pipeline obrigatório:

| # | Skill | Propósito |
|:---|:---|:---|
| 00 | **Lean Orchestrator** | Controle do ciclo de vida completo |
| 01 | **BaaS Security Constitution** | Segurança Supabase/Vercel |
| 02 | **Lean Product + PRP** | Validação de requisitos e PRP |
| 03 | **Supabase Architecture Review** | Validação de arquitetura/RLS |
| 04 | **QA + Production Review** | Validação pre-release |
| 05 | **Lean Refactor Specialist** | Refatoração e débito técnico |

---

## 7. Estado Atual das Fases

| Fase | Status | Entregas |
|:---|:---|:---|
| 1. Fundação + Design System | ✅ CONCLUÍDA | Tailwind config, tokens, componentes base |
| 2. Estrutura + Hero | ✅ CONCLUÍDA | Navbar, Hero, Footer, WhatsApp float |
| 3. Vitrine + Portfólio | ✅ CONCLUÍDA | ServicesGrid, WorkGallery, AboutSection |
| 4. Conversão + Contato | ✅ CONCLUÍDA | Formulário, Mapa, WhatsApp CTA |
| 5. Refinamento + Performance | ✅ CONCLUÍDA | Fluid type, WebP, lazy loading |
| 6. Rebranding | ✅ CONCLUÍDA | "LucasWrap" → "Lucas Envelopamento", +15 anos |
| 7. Galeria Dinâmica | ✅ CONCLUÍDA | Supabase bucket integration |
| 8. Metadados Galeria via DB | ✅ CONCLUÍDA | Tabela `trabalhos_recentes` |
| 9. Ajustes Finos | ✅ CONCLUÍDA | PPF simplificado, TikTok @lucaswrap |

> **Todas as 9 fases anteriores estão concluídas.**

---

## 8. Roadmap Proposto — Fase 10: Site Incrível

Para transformar o site atual num site **verdadeiramente incrível e impactante**, proponho as seguintes frentes:

### 🎨 A. Design Premium & UX (Visual WOW)
1. **Redesign visual completo** — Elevar a estética com glassmorphism refinado, gradientes mais sofisticados, micro-animações em cada interação
2. **Logo real da empresa** — Substituir ícone Zap por logo profissional
3. **Hero com vídeo de fundo** — Substituir imagens estáticas por vídeo cinematográfico da oficina
4. **Parallax effects** nas seções
5. **Lightbox modal** na galeria com navegação, zoom e swipe
6. **Seção de Depoimentos** — Carousel de reviews de clientes reais
7. **Seção de Estatísticas animadas** — "+1500 veículos transformados", "+15 anos", "99% satisfação"
8. **Seção FAQ** — Accordion animado com perguntas frequentes
9. **Scroll progress bar** + scroll indicator no hero
10. **Antes/Depois interativo** — Slider comparativo de transformações

### 🔧 B. Técnico & Código
1. **Centralizar constantes** (STORE_PHONE, links WhatsApp) em config única
2. **Usar SectionTitle** em todas as seções (eliminar duplicação)
3. **Remover imagens PNG** do bundle (manter só WebP)
4. **Criar .env.example**
5. **Favicon e manifest** personalizados
6. **Sitemap.xml + robots.txt** para SEO
7. **Meta tags dinâmicas** (se necessário multi-page no futuro)

### 📊 C. Conversão & Analytics
1. **Salvar leads no Supabase** — Ativar tabela `leads_contato` com RPC segura
2. **Google Analytics 4** — Integrar tracking de eventos
3. **Pixel Meta (Facebook/Instagram)** — Para campanhas
4. **Schema.org JSON-LD** — Rich snippets para busca local

### 🔒 D. Segurança
1. **Validar RLS** em todas as tabelas
2. **Rate limiting** no formulário (anti-spam)
3. **Content Security Policy** headers via Vercel

---

## 9. Perguntas para Alinhar (Responda antes de implementar)

1. Você tem a **logo real** da empresa (PNG/SVG) para substituir o ícone Zap?
2. Tem **vídeos da oficina** para o hero, ou preferimos manter carrossel de imagens?
3. Tem **fotos de antes/depois** de transformações?
4. Tem **depoimentos reais** de clientes para usar?
5. Quer integrar **Google Analytics** e **Pixel Meta**?
6. Quer que o formulário **salve os leads no Supabase** além de redirecionar pro WhatsApp?
7. Tem alguma referência visual de sites que considera "incrível" para se inspirar?
