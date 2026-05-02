import { defineCloudflareConfig } from "@opennextjs/cloudflare";

/**
 * Crítico para CI: o default é `npm run build`. Se esse script for `opennextjs-cloudflare build`,
 * haveria recursão infinita. Com `npx next build`, o pipeline OpenNext compila o Next sem voltar ao npm script.
 */
export default {
  ...defineCloudflareConfig(),
  buildCommand: "npx next build",
};
