# ZYRON

Empresa de crescimento premium do **Grupo ZYRON** — tráfego pago, landing pages estratégicas e sistemas de aquisição para negócios tradicionais que querem modernizar e escalar.

Stack: [Next.js](https://nextjs.org), React 19, Tailwind CSS 4, motion. Identidade: **Inter** (corpo) + **Space Grotesk** (títulos), paleta Deep Black / Graphite / Electric Blue / Silver (ver `src/lib/brand-tokens.ts`).

```bash
npm install
npm run dev
```

**Cloudflare Workers (OpenNext):** no painel de deploy, o comando de **build** tem de ser `npm run cf:build` (gera `.open-next/`). `npm run build` é só Next.js e não chega para o Wrangler. Depois: `npx wrangler deploy` (ou `npm run deploy` para build + deploy num só comando local).

Site em produção: [https://grupozyron.com.br](https://grupozyron.com.br) · Instagram [@grupozyron](https://www.instagram.com/grupozyron/).

Abrir [http://localhost:3000](http://localhost:3000). Variáveis opcionais em `.env.local`: Resend (`RESEND_API_KEY`), **WhatsApp** (`NEXT_PUBLIC_WHATSAPP_NUMBER` com DDI 55…), site, Instagram.
