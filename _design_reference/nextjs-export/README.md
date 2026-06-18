# Portfolio Kadu — Next.js + Tailwind CSS

Pacote de componentes prontos para integrar no seu projeto Next.js.

---

## 📁 Estrutura de arquivos

```
nextjs-export/
├── app/
│   ├── globals.css        ← adicione ao seu globals.css existente
│   ├── layout.tsx         ← referência para configurar as fontes
│   └── page.tsx           ← página principal com todas as seções
├── components/
│   ├── ui/
│   │   └── SectionLabel.tsx   ← componente reutilizável de label de seção
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Technologies.tsx
│   ├── Projects.tsx
│   └── Contact.tsx
├── data/
│   └── portfolio.ts       ← TODA a copy/dados do portfólio aqui
├── lib/
│   └── cn.ts              ← utilitário classNames
└── tailwind.config.ts     ← extensões necessárias no Tailwind
```

---

## 🚀 Como integrar

### 1. Instale as fontes (se ainda não usa next/font)

As fontes já estão configuradas em `app/layout.tsx` usando `next/font/google` — zero bundle extra.

```tsx
// app/layout.tsx
import { Sora, JetBrains_Mono } from 'next/font/google'
```

### 2. Atualize o `tailwind.config.ts`

Copie as extensões de `tailwind.config.ts` para o seu arquivo existente:

```ts
theme: {
  extend: {
    colors: {
      navy:    { 950: '#09101F', 900: '#0D1829' },
      accent:  { DEFAULT: '#4B7BE5', dark: '#3B6BD5', light: '#7CB8FF' },
      surface: { light: '#FAFBFF', muted: '#F2F4FB' },
      card:    { border: '#DDE3EE', bg: '#EEF2FB', 'border-blue': '#DDE5F5' },
    },
    fontFamily: {
      sora: ['var(--font-sora)', 'sans-serif'],
      mono: ['var(--font-mono)', 'monospace'],
    },
    animation: {
      blink: 'blink 1.1s step-end infinite',
    },
    keyframes: {
      blink: {
        '0%, 100%': { opacity: '1' },
        '50%':      { opacity: '0' },
      },
    },
  },
},
```

### 3. Adicione os utilitários CSS ao `globals.css`

Copie o conteúdo de `app/globals.css` para o seu arquivo existente (as classes `.bg-dot-grid`, `.glow-hero` e `.scroll-line`).

### 4. Copie os arquivos para o seu projeto

```bash
# Componentes
cp -r components/ seu-projeto/components/portfolio/

# Dados
cp data/portfolio.ts seu-projeto/data/

# Utilitário cn (se não tiver)
cp lib/cn.ts seu-projeto/lib/
```

### 5. Ajuste os imports

Se você copiar os componentes para uma subpasta (ex: `components/portfolio/`), atualize os imports no `page.tsx`:

```tsx
import { Navbar } from '@/components/portfolio/Navbar'
// ...
```

### 6. Atualize o alias `@/` no tsconfig (se necessário)

```json
// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

---

## ✏️ Customizando o conteúdo

**Todo o conteúdo está centralizado em `data/portfolio.ts`.**  
Edite apenas esse arquivo para atualizar textos, projetos, experiências e tecnologias.

```ts
// Adicionar um projeto
export const projects: Project[] = [
  {
    name: 'Meu Novo Projeto',
    type: 'Web App',
    featured: true,
    bg: 'linear-gradient(135deg, #1A3C70 0%, #0D1829 100%)',
    techs: ['Next.js', 'TypeScript', 'Prisma'],
    href: 'https://meu-projeto.vercel.app',
  },
  // ...
]
```

---

## 🎨 Componentes interativos

| Componente      | Estado                          | Hook usado        |
|----------------|---------------------------------|-------------------|
| `Hero`         | Typewriter (cicla 3 roles)      | `useEffect` + `useRef` |
| `Experience`   | Tab ativa (empresa selecionada) | `useState`        |
| `Projects`     | Filtro Destaques / Todos        | `useState`        |
| `Navbar`       | Scroll suave via `href`         | CSS `scroll-behavior` |

---

## 📦 Dependências

Nenhuma dependência extra necessária além do que já está no seu projeto Next.js + Tailwind.

```json
{
  "dependencies": {
    "next": "^14+",
    "react": "^18+",
    "react-dom": "^18+"
  },
  "devDependencies": {
    "tailwindcss": "^3+",
    "typescript": "^5+"
  }
}
```

---

## 🖼️ Foto de perfil

O componente `Hero` atualmente usa o card de código como elemento decorativo direito. Para adicionar sua foto:

```tsx
// Em Hero.tsx, substitua o "code card" por:
<div className="relative w-[320px] h-[320px] rounded-full overflow-hidden border-4 border-accent/20">
  <Image src="/foto-perfil.jpg" alt="Carlos Eduardo" fill className="object-cover" />
</div>
```

---

_Design por Claude · Portfólio de Carlos Eduardo da Silva · 2025_
