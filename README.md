# ZYRON

Empresa de crescimento premium do **Grupo ZYRON** — tráfego pago, landing pages estratégicas e sistemas de aquisição para negócios tradicionais que querem modernizar e escalar.

Stack: [Next.js](https://nextjs.org), React 19, Tailwind CSS 4, motion. Identidade: **Inter** (corpo) + **Space Grotesk** (títulos), paleta Deep Black / Graphite / Electric Blue / Silver (ver `src/lib/brand-tokens.ts`).

```bash
npm install
npm run dev
```

**Cloudflare Workers (OpenNext):** o `wrangler.jsonc` inclui `build.command` → `npm run cf:build`, por isso **`npx wrangler deploy`** corre o OpenNext antes de publicar (gera `.open-next/`). No painel podes manter **Build:** `npm run build` e **Deploy:** `npx wrangler deploy`, ou usar só **`npm run cf:build`** no build e o mesmo deploy. Localmente: **`npm run deploy`** faz build OpenNext + deploy.

Site em produção: [https://grupozyron.com.br](https://grupozyron.com.br) · Instagram [@grupozyron](https://www.instagram.com/grupozyron/).

Abrir [http://localhost:3000](http://localhost:3000). Variáveis opcionais em `.env.local`: Resend (`RESEND_API_KEY`), **WhatsApp** (`NEXT_PUBLIC_WHATSAPP_NUMBER` com DDI 55…), site, Instagram.
