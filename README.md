# renanbotasse.github.io

Personal portfolio — [renanbotasse.github.io](https://renanbotasse.github.io)

## Stack

- **Next.js 15** — App Router, static export
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — page and section animations
- **react-icons** — icon set

## Structure

```
src/
├── app/
│   ├── layout.tsx       # Shared layout: Navbar + footer
│   ├── page.tsx         # Redirects to /work
│   ├── work/            # Home — hero + projects
│   ├── about/           # About, timeline, values
│   ├── stack/           # Tools and technologies
│   └── notes/           # Writing and articles
└── components/
    ├── sections/        # Page sections
    └── ui/              # Navbar
```

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Building

```bash
npm run build
```
