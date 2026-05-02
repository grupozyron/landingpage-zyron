# Favicon e ícones — medidas para export (ZYRON)

Coloca nesta pasta (`public/favicon/`) os ficheiros **com estes nomes exatos** para o site e os browsers reconhecerem sem alterar código.

## Ficheiros obrigatórios (recomendado)

| Ficheiro | Medidas | Formato | Uso |
|----------|---------|---------|-----|
| `favicon.ico` | **16×16** e **32×32** no mesmo `.ico` (multi-size) | ICO | Separador do browser, bookmarks antigos |
| `favicon-16x16.png` | **16 × 16 px** | PNG | `link rel="icon"` |
| `favicon-32x32.png` | **32 × 32 px** | PNG | Retina / separador HD |
| `apple-touch-icon.png` | **180 × 180 px** | PNG | Ecrã inicial iOS / “Adicionar ao ecrã inicial” |
| `android-chrome-192x192.png` | **192 × 192 px** | PNG | Android Chrome, atalhos |
| `android-chrome-512x512.png` | **512 × 512 px** | PNG | Splash / PWA / instalação |

## Opcional

| Ficheiro | Medidas | Notas |
|----------|---------|--------|
| `icon.svg` | vectorial (já existe) | Favicon escalável; alguns browsers preferem PNG/ICO |
| `mask-icon.svg` | monocromático para Safari pinned tab | Só se precisares do pin no Safari |

## Arte recomendada

- **Favicon quadrado:** usar só o **ícone** (mark), não o logotipo horizontal completo — lê-se melhor em 16px.
- Fundo: **#0A0A0A** (Deep Black da marca) ou transparente, conforme o teu manual.
- Exportar no Illustrator/Figma em **PNG 24** ou **ICO** com fundo sólido se evitares halo em tabs claros.

## Gerar `.ico` a partir dos PNG

Podes usar [RealFaviconGenerator](https://realfavicongenerator.net/) ou export direto do Illustrator com plugin ICO, desde que inclua **16** e **32** px.

## Depois de colares os originais

1. Coloca nesta pasta (`public/favicon/`) os ficheiros com os nomes da tabela.
2. No `src/app/layout.tsx`, dentro de `export const metadata`, substitui o bloco `icons` por:

```ts
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
```

(O projeto já usa só `icon.svg` até existirem os PNG/ICO — evita erros 404.)

### `site.webmanifest` (opcional, PWA)

Se quiseres **512** e **192** para “Instalar app”, podes acrescentar `public/favicon/site.webmanifest` e um link no layout; as medidas estão na tabela acima.
