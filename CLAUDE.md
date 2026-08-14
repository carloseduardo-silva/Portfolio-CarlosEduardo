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
    layout/          ← Sidebar.tsx (aside + top bar mobile), ReadingProgress.tsx, icons.tsx
    sections/        ← Hero.tsx, About.tsx, Experience.tsx, Skills.tsx, Projects.tsx, Contacts.tsx
    ui/              ← ProjectCard.tsx, ProjectModal.tsx, ScrollReveal.tsx, SectionLabel.tsx, CardRail.tsx
  data/              ← projects.ts, experiences.ts, skills.ts, portfolio.ts (dados tipados, sem lógica)
  hooks/             ← useIntersectionObserver.ts, useActiveSection.ts
  lib/               ← cn.ts, site.ts
public/
  images/            ← todos os assets de imagem (NUNCA altere os nomes dos arquivos)
  videos/            ← todos os vídeos dos projetos (NUNCA altere os nomes dos arquivos)
```

Não existem `Navbar.tsx`, `Footer.tsx`, `MobileNav.tsx` nem `SkillCard.tsx`:
- o **rodapé** (copyright) vive no fim de `sections/Contacts.tsx`
- a **navegação inteira** (aside desktop + barra de topo mobile + overlay) vive em `layout/Sidebar.tsx`

## Layout — sidebar 25 / conteúdo 75

A partir de `lg:` (1024px) a navegação é uma coluna fixa à esquerda; abaixo disso vira barra de topo de 64px + overlay em tela cheia.

- A largura é a custom property **`--sidebar-w: clamp(280px, 25vw, 360px)`**, declarada em `:root` no `globals.css`. Fonte única: o `<aside>` usa `w-[var(--sidebar-w)]`, o `<main>` compensa com `lg:pl-[var(--sidebar-w)]` e a barra de progresso com `lg:left-[var(--sidebar-w)]`.
  Ela **não** fica no `@theme` porque o namespace `--spacing-*` do Tailwind v4 é só o multiplicador base e não gera utilities nomeadas (`w-sidebar` não existe).
- `section[id] { scroll-margin-top: 4rem }` no `@layer base` impede que as âncoras aterrissem sob a barra de topo; zera em `lg:`, onde não há barra.
- Estados da navegação vêm de `useActiveSection` (scroll-spy por `IntersectionObserver` numa faixa central do viewport), refletidos em `aria-current` + `border-l-[3px] border-accent`.
- Ícones são **SVG inline** em `layout/icons.tsx`, indexados pelas chaves `icon` de `navItems`/`socialLinks` em `data/portfolio.ts`. O legado usava Iconify/Material Symbols por CDN — proibido aqui.

### ⚠️ Grids dentro das seções usam container queries, não breakpoints de viewport

Com a sidebar, o conteúdo é ~300px mais estreito que a tela, então `md:`/`lg:` mentem sobre o espaço disponível. Cada seção marca sua `div.max-w-[1280px].mx-auto` com **`@container/content`** e os grids usam variantes `@xl/content:`, `@3xl/content:`, `@4xl/content:` — que medem a largura útil real.

O container é a div **interna**, nunca o `<main>`, por dois motivos:
1. a largura do container passa a ser exatamente a largura do conteúdo, sem descontar padding;
2. `container-type: inline-size` **cria containing block para descendentes `fixed`** — com o container no `<main>`, o `ProjectModal` (`fixed inset-0`, `w-[90vw]`, `max-h-[85vh]`) deixaria de se posicionar pelo viewport. O modal é renderizado fora dessa div, então permanece um overlay de tela cheia por cima da sidebar.

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

O site é **inteiramente claro**. Os tokens são **semânticos**: o componente pede "tinta forte" ou "superfície", nunca uma cor literal. Isso é o que permitiria um dark mode futuro ser um único `@media (prefers-color-scheme: dark)` redefinindo os tokens, em vez de outra varredura de arquivos.

```
surface          → #FFFFFF  (sidebar, cards elevados)
surface-light    → #FAFBFF  (fundo de todas as seções, body)
surface-muted    → #F2F4FB  (chips, hover, info-cards)

ink              → #0D1829  (títulos e corpo forte)
ink-muted        → #4A5568  (corpo secundário)
ink-subtle       → #5C6B7F  (labels e texto terciário)

accent           → #4B7BE5  (SUPERFÍCIE: fundo, borda, barra, ícone grande)
accent-text      → #3866CE  (TEXTO pequeno sobre claro)
accent-dark      → #3B6BD5  (hover de botão primário)

card-border      → #DDE3EE  (borda de card e hairline entre seções)
card-bg          → #EEF2FB  (fundo dos info-cards do modal)
card-border-blue → #DDE5F5  (borda dos info-cards do modal)
```

### ⚠️ `accent` é superfície, `accent-text` é texto
`accent #4B7BE5` sobre fundo claro dá apenas **3,86:1** e reprova WCAG AA para texto normal. Todo texto abaixo de 18px em azul usa **`accent-text`** (≥4,8:1 nas três superfícies). Use `accent` só onde ele é fundo, borda ou preenchimento — aí o contraste não se aplica.

Os três tons de `ink` passam AA sobre as três superfícies. Não introduza cinzas novos sem medir.

### Escuro remanescente — não é dark mode
Três elementos continuam escuros de propósito, e `navy-900`/`navy-950` existem só para eles:
- gradientes `project.bg` nos cards de projeto (capa/identidade do projeto);
- backdrop do `ProjectModal` (overlay precisa recuar o fundo em qualquer tema);
- pill do filtro ativo em Projects (estado selecionado).

### Cards que empilhariam no mobile usam `CardRail`, não `grid`

`ui/CardRail.tsx` é trilho horizontal com `scroll-snap` abaixo de `@xl/content` e volta a ser grid acima. Usado em Habilidades e Trabalhos Recentes; os cards de categoria de Stack ficam empilhados de propósito (são baixos). Sem JS e sem dependência — `scroll-snap` nativo já dá toque, inércia e encaixe.

Duas regras não óbvias ao mexer nele:
- **O `ScrollReveal` vai por fora do trilho, nunca por card.** Num trilho horizontal os cards fora da tela não intersectam o viewport e ficariam em `opacity-0` — inclusive o que espia na borda, matando a affordance de arrastar.
- **`overflow-x-auto` tira o eixo Y de `visible`** (é a especificação), o que recorta as sombras dos cards. O `py-2 -my-2` do componente existe só para isso; não remova.

As classes de slide (`snap-start`, `shrink-0`, `basis-[86%]`) são aplicadas pelo pai via `[&>*]:`, então o call site não precisa saber que está num carrossel. Cards dentro dele não devem usar `w-full` — conflita com o `basis`.

### Ritmo entre seções
Não há alternância de fundo: todas as seções são `surface-light`, separadas por um hairline aplicado pela regra base `main > section + section` no `globals.css`. Não adicione `border-t` manualmente nas seções.

Fontes (via `next/font/google`, sem CDN):
- `font-sora` — base de todo o site (pesos 300–800)
- `font-mono` — JetBrains Mono, exclusivo para eyebrows/labels em maiúsculas com `tracking` largo

Tracking: `tracking-tightest` (-0.04em) nos títulos grandes.

## Componentes client-side

### `'use client'` obrigatório em:
- Qualquer componente que use `useState`, `useEffect`, `useRef`, ou event handlers do browser
- `Hero.tsx` (typewriter), `Sidebar.tsx` (menu + scroll-spy), `ReadingProgress.tsx`, `Projects.tsx` (filtro + modal), `Experience.tsx` (tabs), `ProjectModal.tsx`, `ScrollReveal.tsx`

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
- ❌ Não quebre responsividade: mobile-first, breakpoints padrão do Tailwind — `sm:` 640px, `md:` 768px, `lg:` 1024px. **Dentro das seções use container queries** (ver acima), não breakpoints de viewport
- ❌ Não coloque `@container` no `<main>` nem em nenhum ancestral do `ProjectModal` — quebra o posicionamento `fixed`
- ❌ Não quebre acessibilidade: elementos clicáveis são `<button>`/`<a>` (nunca `<div onClick>`), ícones decorativos levam `aria-hidden`
