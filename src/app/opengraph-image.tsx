import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "ZYRON — Crescimento digital para empresas sérias";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(145deg, #08080c 0%, #0f1420 46%, #0a1628 100%)",
          color: "#f8f8f8",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial',
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "linear-gradient(135deg, #2563ff 0%, #5a8aff 100%)",
              boxShadow: "0 0 48px rgba(37,99,255,0.45)",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span
              style={{
                fontSize: 22,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(184,189,201,0.95)",
              }}
            >
              Grupo ZYRON
            </span>
            <span style={{ fontSize: 42, fontWeight: 700, letterSpacing: "-0.02em" }}>
              Crescimento digital sério
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 920 }}>
          <p style={{ fontSize: 30, lineHeight: 1.35, color: "rgba(232,232,240,0.92)" }}>
            Tráfego pago, landing pages e IA para WhatsApp — método e previsibilidade.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            {["Aquisição", "Landing", "WhatsApp", "Dados"].map((t) => (
              <span
                key={t}
                style={{
                  padding: "10px 18px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.14)",
                  fontSize: 18,
                  color: "rgba(200,208,220,0.95)",
                  background: "rgba(12,14,22,0.65)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 20,
            color: "rgba(168,173,179,0.9)",
          }}
        >
          <span>zyron · growth & automação</span>
          <span style={{ color: "#2563ff", fontWeight: 600 }}>grupozyron.com.br</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
