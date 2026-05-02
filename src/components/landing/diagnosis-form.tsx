"use client";

import { useMemo, useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Label } from "@/components/ui/label";
import { MagicCard } from "@/components/ui/magic-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { ctaDiagnosisBlock } from "@/lib/cta-styles";
import { trackLeadConversion } from "@/lib/track-conversion";
import {
  isValidBrazilMobileWhatsApp,
  isValidCity,
  isValidCompanyName,
  isValidFullName,
} from "@/lib/diagnosis-validation";

const segments = [
  "Esquadrias / alumínio",
  "Marcenaria / móveis planejados",
  "Arquitetura",
  "Engenharia",
  "Clínica",
  "Construção civil",
  "Negócio familiar tradicional",
  "Serviço local premium",
  "Outro",
] as const;

export function DiagnosisForm() {
  const [step, setStep] = useState<1 | 2>(1);

  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [company, setCompany] = useState("");
  const [segment, setSegment] = useState<string>("");
  const [city, setCity] = useState("");
  const [challenge, setChallenge] = useState("");

  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const canStep1 = useMemo(
    () => isValidBrazilMobileWhatsApp(whatsapp) && segment.trim().length > 0,
    [whatsapp, segment],
  );

  const canSubmit = useMemo(() => {
    return (
      isValidFullName(name) &&
      isValidBrazilMobileWhatsApp(whatsapp) &&
      isValidCompanyName(company) &&
      segment.trim().length > 0 &&
      isValidCity(city)
    );
  }, [name, whatsapp, company, segment, city]);

  const field = cn(
    "h-11 border-white/[0.12] bg-[#0A0A0A]/85 text-foreground shadow-inner",
    "placeholder:text-muted-foreground/55",
    "focus-visible:border-[#2563FF]/50 focus-visible:ring-[#2563FF]/25",
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!canSubmit || status === "sent" || isSubmitting) return;

    setError(null);
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/diagnosis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          whatsapp,
          company: company.trim(),
          segment,
          city: city.trim(),
          challenge: challenge.trim() || undefined,
        }),
      });

      const data: unknown = await res.json().catch(() => null);
      const message =
        data &&
        typeof data === "object" &&
        "error" in data &&
        typeof (data as { error: unknown }).error === "string"
          ? (data as { error: string }).error
          : null;

      if (!res.ok) {
        setError(message ?? "Não foi possível enviar. Tente novamente.");
        return;
      }

      trackLeadConversion();
      setStatus("sent");
    } catch {
      setError("Falha de conexão. Verifique a internet e tente de novo.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const submitDisabled = !canSubmit || status === "sent" || isSubmitting;

  return (
    <Card className="w-full overflow-visible rounded-2xl border-none bg-transparent p-0 shadow-none ring-0">
      <MagicCard
        className="rounded-2xl p-0"
        gradientFrom="#2563FF"
        gradientTo="#3d5c99"
        gradientColor="#1e2340"
        gradientOpacity={0.72}
        gradientSize={420}
      >
        <form
          onSubmit={handleSubmit}
          className="flex flex-col"
          noValidate
          aria-busy={isSubmitting}
        >
          <CardHeader className="border-b border-white/[0.08] bg-[#1C1C1C]/35 px-5 py-5 backdrop-blur-md sm:px-6 sm:py-6 [.border-b]:pb-5">
            <CardTitle className="font-heading text-lg font-semibold tracking-tight text-foreground sm:text-xl">
              {step === 1 ? "Comece pelo WhatsApp" : "Quase lá — seus dados"}
            </CardTitle>
            <CardDescription className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {step === 1
                ? "WhatsApp e segmento primeiro. Depois completamos nome, empresa e cidade."
                : "Retornamos com próximos passos objetivos — sem compromisso na primeira conversa."}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6 bg-transparent px-5 py-6 sm:px-6">
            {step === 1 ? (
              <div className="grid gap-6">
                <div className="space-y-2">
                  <Label htmlFor="whatsapp" className="text-[#C8C8D4]">
                    WhatsApp
                  </Label>
                  <Input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="(00) 00000-0000"
                    value={whatsapp}
                    onChange={(ev) => setWhatsapp(ev.target.value)}
                    aria-invalid={
                      whatsapp.length > 0 &&
                      !isValidBrazilMobileWhatsApp(whatsapp)
                    }
                    className={field}
                  />
                  {whatsapp.length > 0 &&
                    !isValidBrazilMobileWhatsApp(whatsapp) && (
                      <p className="text-xs text-[#A8A8B3]" role="status">
                        Celular com DDD e 9 dígitos (ex.: 11987654321).
                      </p>
                    )}
                </div>
                <div className="space-y-2">
                  <Label className="text-[#C8C8D4]">Segmento</Label>
                  <Select
                    value={segment}
                    onValueChange={(v) => {
                      setSegment(v ?? "");
                      setError(null);
                    }}
                  >
                    <SelectTrigger className={cn(field, "w-full")}>
                      <SelectValue placeholder="Selecione o segmento" />
                    </SelectTrigger>
                    <SelectContent className="border-white/[0.12] bg-[#14141c] text-foreground">
                      {segments.map((t) => (
                        <SelectItem key={t} value={t}>
                          {t}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2 sm:col-span-1">
                  <Label htmlFor="name" className="text-[#C8C8D4]">
                    Nome
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    autoComplete="name"
                    placeholder="Nome e sobrenome"
                    value={name}
                    onChange={(ev) => setName(ev.target.value)}
                    aria-invalid={name.length > 0 && !isValidFullName(name)}
                    className={field}
                  />
                  {name.length > 0 && !isValidFullName(name) && (
                    <p className="text-xs text-[#A8A8B3]" role="status">
                      Use nome e sobrenome (cada parte com pelo menos 2 letras).
                    </p>
                  )}
                </div>
                <div className="space-y-2 sm:col-span-1">
                  <Label htmlFor="whatsapp-ro" className="text-[#C8C8D4]">
                    WhatsApp
                  </Label>
                  <Input
                    id="whatsapp-ro"
                    readOnly
                    value={whatsapp}
                    className={cn(field, "cursor-default opacity-90")}
                  />
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="company" className="text-[#C8C8D4]">
                    Empresa
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    autoComplete="organization"
                    placeholder="Marca ou razão social"
                    value={company}
                    onChange={(ev) => setCompany(ev.target.value)}
                    aria-invalid={
                      company.length > 0 && !isValidCompanyName(company)
                    }
                    className={field}
                  />
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <Label className="text-[#C8C8D4]">Segmento</Label>
                  <Select
                    value={segment}
                    onValueChange={(v) => {
                      setSegment(v ?? "");
                      setError(null);
                    }}
                  >
                    <SelectTrigger className={cn(field, "w-full")}>
                      <SelectValue placeholder="Selecione o segmento" />
                    </SelectTrigger>
                    <SelectContent className="border-white/[0.12] bg-[#14141c] text-foreground">
                      {segments.map((t) => (
                        <SelectItem key={t} value={t}>
                          {t}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="city" className="text-[#C8C8D4]">
                    Cidade
                  </Label>
                  <Input
                    id="city"
                    name="city"
                    autoComplete="address-level2"
                    placeholder="Cidade / região de atuação"
                    value={city}
                    onChange={(ev) => setCity(ev.target.value)}
                    aria-invalid={city.length > 0 && !isValidCity(city)}
                    className={field}
                  />
                  {city.length > 0 && !isValidCity(city) && (
                    <p className="text-xs text-[#A8A8B3]" role="status">
                      Informe a cidade (apenas letras e caracteres válidos).
                    </p>
                  )}
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <Label
                    htmlFor="challenge"
                    className="flex flex-wrap items-center gap-2 text-[#C8C8D4]"
                  >
                    Maior desafio hoje
                    <span className="rounded bg-[#0A0A0A]/80 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[#B8BDC9] ring-1 ring-[#B8BDC9]/30">
                      opcional
                    </span>
                  </Label>
                  <Textarea
                    id="challenge"
                    name="challenge"
                    rows={4}
                    placeholder="Ex.: só indicados, site parado, concorrente no digital…"
                    value={challenge}
                    onChange={(ev) => setChallenge(ev.target.value)}
                    className={cn("min-h-[120px] resize-y", field)}
                  />
                </div>
              </div>
            )}

            {error && (
              <p className="text-sm text-red-400" role="alert">
                {error}
              </p>
            )}
          </CardContent>

          <CardFooter className="flex flex-col items-stretch gap-4 border-t border-white/[0.08] bg-[#1C1C1C]/40 px-5 py-5 backdrop-blur-md sm:px-6 [.border-t]:pt-5">
            <div aria-live="polite" aria-atomic="true" className="contents">
              {step === 1 ? (
                <InteractiveHoverButton
                  type="button"
                  disabled={!canStep1 || status === "sent"}
                  className={cn(
                    ctaDiagnosisBlock,
                    "disabled:pointer-events-none disabled:opacity-45",
                  )}
                  onClick={() => setStep(2)}
                >
                  Continuar →
                </InteractiveHoverButton>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-center text-sm font-medium text-muted-foreground underline decoration-white/15 underline-offset-4 transition-colors hover:text-foreground"
                  >
                    ← Voltar
                  </button>
                  <InteractiveHoverButton
                    type="submit"
                    disabled={submitDisabled}
                    className={cn(
                      ctaDiagnosisBlock,
                      "disabled:pointer-events-none disabled:opacity-45",
                    )}
                  >
                    {status === "sent"
                      ? "Recebido"
                      : isSubmitting
                        ? "Enviando…"
                        : "Receber análise gratuita →"}
                  </InteractiveHoverButton>
                </>
              )}
              {status === "sent" && (
                <p
                  id="diagnosis-form-success"
                  className="text-center text-sm leading-relaxed text-muted-foreground"
                >
                  Recebemos sua solicitação. Retornamos em até dois dias úteis com o
                  próximo passo.
                </p>
              )}
            </div>
          </CardFooter>
        </form>
      </MagicCard>
    </Card>
  );
}
