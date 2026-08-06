# CLAUDE.md — Regras de Desenvolvimento

## Stack obrigatória
- **Next.js 16.2.9** com **App Router** (pasta `src/app/`)
- **React 19.2.4** com hooks (`useState`, `useEffect`, `useRef`) para toda interatividade
- **TypeScript** strict — sem arquivos `.js` em `src/`
- **Tailwind CSS v4** — sem CSS modules, sem styled-components, sem CSS inline arbitrário

> ⚠️ **Não existe `tailwind.config.ts` neste projeto.** Tailwind v4 é configurado em CSS:
> todos os tokens vivem no bloco `@theme inline` de `src/app/globals.css`.
> O único plugin PostCSS é `@tailwindcss/postcss`.

## Estrutura de arquivos
```
src/
  app/
    layout.tsx       ← root layout (next/font, metadata/SEO) — sem <link> externo
    page.tsx         ← monta todas as seções em ordem
    globals.css      ← @import "tailwindcss" + @theme inline + keyframes + utilities
    opengraph-image.tsx ← OG image gerada com next/og
    robots.ts / sitemap.ts
  components/
    layout/          ← Navbar.tsx (inclui a nav mobile)
    sections/        ← Hero.tsx, About.tsx, Experience.tsx, Skills.tsx, Projects.tsx, Contacts.tsx
    ui/              ← ProjectCard.tsx, ProjectModal.tsx, ScrollReveal.tsx, SectionLabel.tsx
  data/              ← projects.ts, experiences.ts, skills.ts, portfolio.ts (dados tipados, sem lógica)
  hooks/             ← useIntersectionObserver.ts
  lib/               ← cn.ts, site.ts
public/
  images/            ← todos os assets de imagem (NUNCA altere os nomes dos arquivos)
  videos/            ← todos os vídeos dos projetos (NUNCA altere os nomes dos arquivos)
```

Não existem `Footer.tsx`, `MobileNav.tsx` nem `SkillCard.tsx` — foram removidos no redesign:
- o **rodapé** (copyright) vive no fim de `sections/Contacts.tsx`
- a **nav mobile** (hambúrguer + overlay) vive dentro de `layout/Navbar.tsx`

### Pastas de referência — não editar
- `_legacy_backup/` — o site original em HTML/CSS/JS vanilla (fonte da verdade para a copy legada)
- `_design_reference/nextjs-export/` — o mock visual de onde o `src/` atual foi portado

Ambas estão fora do `tsconfig.json` (`exclude`). Servem para consulta, nunca para import.

## Copy e dados factuais
- A copy atual em `src/data/` e nas seções está **congelada**: só altere texto mediante pedido explícito do usuário
- **Nunca invente ou estime dados factuais** — anos de experiência, quantidade de projetos, formação, contatos, URLs de projeto, datas. Se um número não está no código ou não foi dado pelo usuário, pergunte
- **Nunca renomeie** arquivos em `public/images/` ou `public/videos/`
- **Nunca altere** os caminhos de referência aos assets (ex: `/images/perfil-blue3-Photoroom.jpg`)
- O CV deve sempre apontar para `/images/cv_CARLOS-EDUARDO.pdf`

## Design System (`@theme inline` em `globals.css`)
Use os tokens definidos — nunca hex arbitrário:
```
navy-950         → #09101F  (fundo escuro — Hero, Experience, Contacts)
navy-900         → #0D1829  (texto principal em fundo claro)
accent           → #4B7BE5  (azul de destaque)
accent-dark      → #3B6BD5  (hover de botão primário)
accent-light     → #7CB8FF  (hover em fundo escuro)
surface-light    → #FAFBFF  (fundo claro padrão — body, About, Skills)
surface-muted    → #F2F4FB  (fundo claro alternado — Projects)
card-border      → #DDE3EE  (borda de card em fundo claro)
card-bg          → #EEF2FB  (fundo dos info-cards do modal)
card-border-blue → #DDE5F5  (borda dos info-cards do modal)
```
Texto sobre fundo escuro usa `#E8ECF4` com opacidade (`/70`, `/40`, `/25`) — padrão já estabelecido.

Fontes (via `next/font/google`, sem CDN):
- `font-sora` — base de todo o site (pesos 300–800)
- `font-mono` — JetBrains Mono, exclusivo para eyebrows/labels em maiúsculas com `tracking` largo

Tracking: `tracking-tightest` (-0.04em) nos títulos grandes.

## Componentes client-side

### `'use client'` obrigatório em:
- Qualquer componente que use `useState`, `useEffect`, `useRef`, ou event handlers do browser
- `Hero.tsx` (typewriter), `Navbar.tsx` (menu), `Projects.tsx` (filtro + modal), `Experience.tsx` (tabs), `ProjectModal.tsx`, `ScrollReveal.tsx`

Tudo o mais é Server Component por padrão — mantenha assim (`About.tsx`, `Skills.tsx`, `Contacts.tsx`, `ProjectCard.tsx`, `SectionLabel.tsx`).

### Typewriter (`Hero.tsx`)
- Implementação própria: um `setInterval` de 88ms com contadores em `useRef` percorrendo `typewriterRoles` (`src/data/portfolio.ts`)
- Só `typeText` é state — os índices ficam em refs para não disparar re-render
- O caret usa a animação `animate-blink` definida no `@theme`
- **Não há particles.** As libs `tsparticles` foram removidas do projeto — não reintroduza

### Scroll Reveal (`ScrollReveal.tsx`)
- Wrapper `'use client'` que consome o hook `useIntersectionObserver` com `once: true`
- Aplica `opacity-0 blur-sm` → `opacity-100 blur-none` com transição, uma única vez
- Toda a lógica de IntersectionObserver mora no hook — não reimplemente inline

### Modal de Projetos (`ProjectModal.tsx`)
- Estado controlado pelo pai `Projects.tsx` via `selected: Project | null`
- Overlay escurece o fundo e bloqueia scroll (`document.body.style.overflow`)
- Suporta imagem OU vídeo (não ambos simultaneamente); imagem usa `next/image`, vídeo usa `poster`
- Setas de navegação prev/next entre projetos (apenas em desktop, `hidden lg:flex`)
- Acessível: `role="dialog"`, `aria-modal`, focus trap, `Esc`/`←`/`→`, foco devolvido ao card de origem

### Tabs de Experiência (`Experience.tsx`)
- Estado `activeId: string` controlado localmente
- Borda esquerda accent na tab ativa (`border-l-[3px]`)
- O painel de detalhe usa `key={active.id}` no `ScrollReveal` para replayar a transição a cada troca

## Proibições
- ❌ Não use `<style>` tags nem `style={{}}` com valores estáticos nos componentes — crie uma utility em `@layer utilities` no `globals.css` (`style` é aceitável apenas para valor vindo de dados, como `project.bg`)
- ❌ Não crie `tailwind.config.ts` — configure via `@theme inline`
- ❌ Não crie novos arquivos de configuração sem necessidade
- ❌ Não use bibliotecas de animação (Framer Motion, GSAP) — use CSS keyframes do `globals.css` e utilities de transição do Tailwind
- ❌ Não adicione `<link>`/`<script>` de CDN externo — fontes via `next/font`, ícones inline
- ❌ Não altere `public/images/` ou `public/videos/` (só leitura durante desenvolvimento)
- ❌ Não use `any` em TypeScript sem comentário justificando
- ❌ Não commite `.next/` (está no `.gitignore`)
- ❌ Não quebre responsividade: mobile-first, breakpoints padrão do Tailwind — `sm:` 640px, `md:` 768px, `lg:` 1024px
- ❌ Não quebre acessibilidade: elementos clicáveis são `<button>`/`<a>` (nunca `<div onClick>`), ícones decorativos levam `aria-hidden`
