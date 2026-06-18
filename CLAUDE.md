# CLAUDE.md — Regras de Desenvolvimento

## Stack obrigatória
- **Next.js 15** com **App Router** (pasta `src/app/`)
- **TypeScript** — sem arquivos `.js` em `src/`
- **Tailwind CSS** — sem CSS modules, sem styled-components, sem CSS inline arbitrário
- **React** com hooks (`useState`, `useEffect`, `useRef`) para toda interatividade

## Estrutura de arquivos
```
src/
  app/
    layout.tsx       ← root layout (fontes, metadata, CDN links)
    page.tsx         ← monta todas as seções em ordem
    globals.css      ← @tailwind directives + keyframes do legado
  components/
    layout/          ← Navbar.tsx, MobileNav.tsx
    sections/        ← Hero.tsx, About.tsx, Experience.tsx, Skills.tsx, Projects.tsx, Contacts.tsx, Footer.tsx
    ui/              ← SkillCard.tsx, ProjectCard.tsx, ProjectModal.tsx, ScrollReveal.tsx
  data/              ← projects.ts, experiences.ts, skills.ts (dados tipados, sem lógica)
  hooks/             ← useIntersectionObserver.ts
public/
  images/            ← todos os assets de imagem (NUNCA altere os nomes dos arquivos)
  videos/            ← todos os vídeos dos projetos (NUNCA altere os nomes dos arquivos)
```

## Copy e assets — INTOCÁVEIS
- **Nunca altere** nenhum texto (copy) do portfólio: nomes, descrições de projetos, textos de experiência, bio, URLs de contato
- **Nunca renomeie** arquivos em `public/images/` ou `public/videos/`
- **Nunca altere** os caminhos de referência aos assets (ex: `/images/perfil-blue3-Photoroom.jpg`)
- O CV deve sempre apontar para `/images/cv_CARLOS-EDUARDO.pdf`

## Design System (Tailwind config)
Use as cores definidas em `tailwind.config.ts` — nunca use hex arbitrário:
```
navy        → #0b2545  (azul escuro — cor primária)
blue        → #3c87dc  (azul claro — destaque)
blue-mid    → #276ebe  (azul médio)
blue-dark2  → #13315C  (azul escuro 2)
blue-light0 → #8DA9C4  (azul claro 0)
mint        → #EEF4ED  (fundo claro / texto em fundo escuro)
grey        → #dadada  (fundo do body)
```
Fontes: `font-poppins` (base) e `font-nunito` (hero h1).

## Componentes client-side

### `'use client'` obrigatório em:
- Qualquer componente que use `useState`, `useEffect`, `useRef`, ou event handlers do browser
- `Hero.tsx` (particles), `Navbar.tsx` (menu), `Projects.tsx` (modal), `Experience.tsx` (tabs)

### Particles (`Hero.tsx`)
- Use `react-tsparticles` com `loadSlim` engine
- Config idêntica ao legado: 80 partículas, cor `#0b2545`, repulse on hover, push on click

### Scroll Reveal (`ScrollReveal.tsx`)
- Wrapper `'use client'` que usa `useIntersectionObserver` hook
- Aplica `opacity-0 blur-sm` → `opacity-100 blur-none` com transição

### Modal de Projetos (`ProjectModal.tsx`)
- Estado controlado pelo pai `Projects.tsx` via `selectedProject: Project | null`
- Overlay escurece o fundo e bloqueia scroll (`overflow-hidden` no body)
- Suporta imagem OU vídeo (não ambos simultaneamente)
- Setas de navegação prev/next entre projetos (apenas em desktop ≥1000px)

### Tabs de Experiência (`Experience.tsx`)
- Estado `activeTab: string` controlado localmente
- Borda esquerda azul-escuro na tab ativa (`border-l-[3px] border-navy`)

## Proibições
- ❌ Não use `<style>` tags inline nos componentes
- ❌ Não crie novos arquivos de configuração sem necessidade
- ❌ Não use bibliotecas de animação (Framer Motion, GSAP) — use apenas CSS keyframes do `globals.css`
- ❌ Não altere `public/images/` ou `public/videos/` (só leitura durante desenvolvimento)
- ❌ Não use `any` em TypeScript sem comentário justificando
- ❌ Não quebre responsividade: mobile-first, breakpoints principais em `md:` (768px) e `lg:` (1000px)
