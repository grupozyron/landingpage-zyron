/**
 * URL canónica — opcional: `NEXT_PUBLIC_SITE_URL` no `.env.local` (sem barra final).
 */
export const SITE_CANONICAL_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://grupozyron.com.br"
).replace(/\/$/, "");

/**
 * Instagram oficial — opcional: `NEXT_PUBLIC_INSTAGRAM_URL` no `.env.local`.
 */
export const SITE_INSTAGRAM_URL =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL ??
  "https://www.instagram.com/grupozyron/";

/**
 * Landing de demonstração do case Elume.
 * Override: `NEXT_PUBLIC_ELUME_LANDING_DEMO_URL` no `.env.local`.
 */
export const ELUME_LANDING_DEMO_URL =
  process.env.NEXT_PUBLIC_ELUME_LANDING_DEMO_URL?.trim() ||
  "https://elumealuminio.uriel-sampaio2328.workers.dev/";
