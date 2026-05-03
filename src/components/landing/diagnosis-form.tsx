"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Lock } from "lucide-react";
import { useRouter } from "next/navigation";

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
import { SEGMENT_PREFILL_KEY } from "@/lib/diagnosis-prefill";
import {
  isValidBrazilMobileWhatsApp,
  isValidCity,
  isValidCompanyName,
  isValidFullName,
  normalizeBrazilMobileDigits,
} from "@/lib/diagnosis-validation";
import { formatBrazilMobileDisplay } from "@/lib/whatsapp-mask";
import { trackLeadConversion } from "@/lib/track-conversion";
import { ctaForm } from "@/lib/cta-styles";
import { cn } from "@/lib/utils";

const segments = [
  "IA para WhatsApp",
  "Esquadrias / alumínio",
  "Marcenaria / móveis planejados",
  "Arquitetura",
  "Engenharia",
  "Clínica",
  "Construção civil",
  "Serviços B2B",
  "Negócio familiar tradicional",
  "Serviço local premium",
  "Outro",
] as const;

function fieldRing(valid: boolean, touched: boolean) {
  if (!touched) return "";
  return valid
    ? "ring-2 ring-emerald-500/35 border-emerald-500/40"
    : "ring-2 ring-red-500/25 border-red-500/35";
}

export function DiagnosisForm() {
  const router = useRouter();
  const reduce = useReducedMotion();
  const [step, setStep] = useState<1 | 2>(1);

  const [name, setName] = useState("");
  const [phoneDigits, setPhoneDigits] = useState("");
  const [company, setCompany] = useState("");
  const [segment, setSegment] = useState<string>("");
  const [city, setCity] = useState("");
  const [challenge, setChallenge] = useState("");

  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const whatsappDisplay = formatBrazilMobileDisplay(phoneDigits);
  const whatsappRaw = phoneDigits;

  useEffect(() => {
    try {
      const v = sessionStorage.getItem(SEGMENT_PREFILL_KEY);
      const list = segments as readonly string[];
      if (v && list.includes(v)) {
        setSegment(v);
        sessionStorage.removeItem(SEGMENT_PREFILL_KEY);
      }
    } catch {
      /* ignore */
    }
  }, []);

  const nameOk = isValidFullName(name);
  const phoneOk = isValidBrazilMobileWhatsApp(whatsappRaw);
  const segOk = segment.trim().length > 0;

  const canStep1 = nameOk && phoneOk && segOk;

  const canSubmit = useMemo(() => {
    return (
      nameOk &&
      phoneOk &&
      isValidCompanyName(company) &&
      segOk &&
      isValidCity(city)
    );
  }, [nameOk, phoneOk, company, segOk, city]);

  function setPhoneFromInput(raw: string) {
    const d = normalizeBrazilMobileDigits(raw).slice(0, 11);
    setPhoneDigits(d);
  }

  const field = (key: string, valid: boolean) =>
    cn(
      "h-11 border-white/[0.12] bg-[#0A0A0A]/85 text-foreground shadow-inner transition-[box-shadow,border-color] duration-200",
      "placeholder:text-muted-foreground/55",
      "focus-visible:border-[#2563FF]/50 focus-visible:ring-[#2563FF]/25",
      fieldRing(valid, Boolean(touched[key])),
    );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!canSubmit || isSubmitting) return;

    setError(null);
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/diagnosis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          whatsapp: whatsappRaw,
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
      router.push("/obrigado");
    } catch {
      setError("Falha de conexão. Verifique a internet e tente de novo.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const submitDisabled = !canSubmit || isSubmitting;

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
            <div className="mb-4">
              <div className="flex items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                <span>Etapa {step} de 2</span>
                <span>{step === 1 ? "Contato" : "Empresa"}</span>
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[#0A0A0A] ring-1 ring-white/[0.06]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#2563FF]/70 to-[#2563FF] transition-[width] duration-300 ease-out"
                  style={{ width: step === 1 ? "50%" : "100%" }}
                />
              </div>
            </div>
            <CardTitle className="font-heading text-lg font-semibold tracking-tight text-foreground sm:text-xl">
              {step === 1 ? "Comece em 30 segundos" : "Empresa e contexto"}
            </CardTitle>
            <CardDescription className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {step === 1
                ? "Nome, WhatsApp e segmento; depois empresa e cidade."
                : "Quase pronto: onde você atua e qual é o foco agora."}
            </CardDescription>
          </CardHeader>

          <CardContent className="relative min-h-[200px] overflow-hidden bg-transparent px-5 py-6 sm:px-6">
            <AnimatePresence mode="wait" initial={false}>
              {step === 1 ? (
                <motion.div
                  key="s1"
                  initial={reduce ? false : { x: 24, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={reduce ? undefined : { x: -16, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
                  className="grid gap-6"
                >
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#C8C8D4]">
                      Nome completo
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      autoComplete="name"
                      placeholder="Nome e sobrenome"
                      value={name}
                      onChange={(ev) => setName(ev.target.value)}
                      onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                      aria-invalid={touched.name && !nameOk}
                      className={field("name", nameOk)}
                    />
                    {touched.name && !nameOk && (
                      <p className="text-xs text-[#A8A8B3]" role="status">
                        Use nome e sobrenome (cada parte com pelo menos 2 letras).
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="whatsapp" className="text-[#C8C8D4]">
                      WhatsApp
                    </Label>
                    <Input
                      id="whatsapp"
                      name="whatsapp"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel"
                      placeholder="(00) 00000-0000"
                      value={whatsappDisplay}
                      onChange={(ev) => setPhoneFromInput(ev.target.value)}
                      onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
                      aria-invalid={touched.phone && !phoneOk}
                      className={field("phone", phoneOk)}
                    />
                    {touched.phone && !phoneOk && whatsappRaw.length > 0 && (
                      <p className="text-xs text-[#A8A8B3]" role="status">
                        Celular com DDD e 9 dígitos.
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
                        setTouched((t) => ({ ...t, segment: true }));
                      }}
                    >
                      <SelectTrigger
                        className={cn(field("segment", segOk), "w-full")}
                      >
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
                </motion.div>
              ) : (
                <motion.div
                  key="s2"
                  initial={reduce ? false : { x: 24, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={reduce ? undefined : { x: -16, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
                  className="grid gap-6"
                >
                  <div className="space-y-2">
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
                      onBlur={() => setTouched((t) => ({ ...t, company: true }))}
                      aria-invalid={touched.company && !isValidCompanyName(company)}
                      className={field("company", isValidCompanyName(company))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-[#C8C8D4]">
                      Cidade / região de atuação
                    </Label>
                    <Input
                      id="city"
                      name="city"
                      autoComplete="address-level2"
                      placeholder="Ex.: São Paulo / ABC"
                      value={city}
                      onChange={(ev) => setCity(ev.target.value)}
                      onBlur={() => setTouched((t) => ({ ...t, city: true }))}
                      aria-invalid={touched.city && !isValidCity(city)}
                      className={field("city", isValidCity(city))}
                    />
                    {touched.city && !isValidCity(city) && city.length > 0 && (
                      <p className="text-xs text-[#A8A8B3]" role="status">
                        Informe a cidade com caracteres válidos.
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="challenge"
                      className="flex flex-wrap items-center gap-2 text-[#C8C8D4]"
                    >
                      Principal desafio hoje
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
                      className={cn("min-h-[120px] resize-y", field("challenge", true))}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {error && (
              <p className="mt-4 text-sm text-red-400" role="alert">
                {error}
              </p>
            )}
          </CardContent>

          <CardFooter className="flex flex-col items-stretch gap-4 border-t border-white/[0.08] bg-[#1C1C1C]/40 px-5 py-5 backdrop-blur-md sm:px-6 [.border-t]:pt-5">
            <div aria-live="polite" aria-atomic="true" className="contents">
              {step === 1 ? (
                <InteractiveHoverButton
                  type="button"
                  disabled={!canStep1}
                  className={cn(
                    ctaForm,
                    "disabled:pointer-events-none disabled:opacity-45",
                  )}
                  onClick={() => {
                    setTouched({
                      name: true,
                      phone: true,
                      segment: true,
                    });
                    if (canStep1) setStep(2);
                  }}
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
                      ctaForm,
                      "disabled:pointer-events-none disabled:opacity-45",
                    )}
                  >
                    {isSubmitting ? "Enviando…" : "Receber diagnóstico gratuito"}
                  </InteractiveHoverButton>
                </>
              )}
            </div>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground">
              <Lock className="size-3 shrink-0" strokeWidth={2} aria-hidden />
              Seus dados são confidenciais. Retorno em até 2 dias úteis.
            </p>
          </CardFooter>
        </form>
      </MagicCard>
    </Card>
  );
}
