"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, CheckCircle2 } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/site/Section";
import { CTAButton } from "@/components/site/CTAButton";
import { Reveal } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/PageHeader";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { BRAND, WA_DEFAULT } from "@/lib/site";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let&apos;s create something{" "}
            <span className="italic text-gold">beautiful</span>.
          </>
        }
        description="Send us a message or chat on WhatsApp. We reply within a few hours."
      >
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <CTAButton href={WA_DEFAULT} isWhatsApp size="lg" variant="gold" showArrow>
            Chat on WhatsApp
          </CTAButton>
        </div>
      </PageHeader>

      <Section tone="light">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left — contact info */}
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>Direct contact</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-6 font-display text-3xl font-light tracking-tight text-ink sm:text-4xl">
                  Reach us directly.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 text-lg leading-relaxed text-ink/55">
                  WhatsApp is the fastest way. Email works too.
                </p>
              </Reveal>

              <div className="mt-8 space-y-4">
                <ContactRow
                  icon={<WhatsAppIcon className="h-5 w-5" />}
                  label="WhatsApp"
                  value={BRAND.phoneDisplay}
                  href={WA_DEFAULT}
                  external
                  accent="gold"
                />
                <ContactRow
                  icon={<Mail className="h-5 w-5" />}
                  label="Email"
                  value={BRAND.email}
                  href={`mailto:${BRAND.email}`}
                  accent="blue"
                />
              </div>

              {/* WhatsApp banner */}
              <Reveal delay={0.2}>
                <div className="mt-8 overflow-hidden rounded-2xl border border-[#25D366]/20 bg-gradient-to-br from-[#25D366]/5 to-transparent p-7">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
                      <WhatsAppIcon className="h-7 w-7" />
                    </span>
                    <div className="flex-1">
                      <p className="font-display text-xl font-medium tracking-tight text-ink">Prefer to chat?</p>
                      <p className="mt-2 text-base text-ink/60">Tap below to open WhatsApp.</p>
                      <div className="mt-5">
                        <CTAButton href={WA_DEFAULT} isWhatsApp variant="whatsapp" showArrow size="md">
                          Chat on WhatsApp
                        </CTAButton>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right — contact form */}
            <div className="lg:col-span-7">
              <Reveal delay={0.15}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

function ContactRow({ icon, label, value, href, external, accent }: {
  icon: React.ReactNode; label: string; value: string; href: string; external?: boolean; accent: "gold" | "blue";
}) {
  const accentBg = accent === "gold" ? "bg-gold text-ink" : "bg-sky-deep text-white";
  const content = (
    <div className="group flex items-center gap-4 rounded-xl border border-ink/10 bg-white p-5 transition-all duration-300 hover:border-gold/30">
      <span className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${accentBg}`}>{icon}</span>
      <div className="min-w-0">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink/45">{label}</p>
        <p className="mt-1.5 truncate text-base font-semibold text-ink">{value}</p>
      </div>
    </div>
  );
  if (external) return <a href={href} target="_blank" rel="noopener noreferrer" className="block">{content}</a>;
  return <a href={href} className="block">{content}</a>;
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get("name") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const need = (formData.get("need") as string)?.trim();
    const message = (formData.get("message") as string)?.trim();
    const waMessage = `Hello Aldeora Creative!\n\nName: ${name}\nBusiness: ${formData.get("business") || "—"}\nEmail: ${email}\nWhat I need: ${need}\n\nMessage: ${message}`;
    const waUrl = `${WA_DEFAULT.split("?")[0]}?text=${encodeURIComponent(waMessage)}`;
    setTimeout(() => {
      setStatus("success");
      window.open(waUrl, "_blank", "noopener,noreferrer");
      setTimeout(() => { form.reset(); setStatus("idle"); }, 2500);
    }, 700);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-ink/10 bg-white p-8 shadow-sm sm:p-10">
      <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-deep via-gold to-sky-deep" />

      <div className="flex items-center justify-between gap-4">
        <div>
          <Eyebrow>Send a message</Eyebrow>
          <h3 className="mt-4 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            Start a Project
          </h3>
        </div>
      </div>

      <form onSubmit={onSubmit} className="mt-8 space-y-6">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Name" name="name" required placeholder="Your name" />
          <Field label="Business" name="business" placeholder="Your business" />
        </div>
        <Field label="Email" name="email" type="email" required placeholder="you@brand.com" />

        <div className="space-y-2">
          <Label htmlFor="need" className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/60">
            What do you need? <span className="text-sky-deep">*</span>
          </Label>
          <select
            id="need" name="need" required defaultValue=""
            className="h-14 w-full rounded-lg border border-ink/10 bg-paper-soft px-4 text-base text-ink transition-colors focus:border-sky-deep focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky/20"
          >
            <option value="" disabled>Select a service…</option>
            <option>AI Video Creation</option>
            <option>Product & Brand Video</option>
            <option>Social Media Content</option>
            <option>Beauty & Wellness Content</option>
            <option>Not sure yet</option>
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/60">
            Message <span className="text-sky-deep">*</span>
          </Label>
          <Textarea
            id="message" name="message" required
            placeholder="Tell us about your brand and what you're looking for…"
            className="min-h-[160px] resize-none border-ink/10 bg-paper-soft text-base focus:border-sky-deep focus:bg-white"
          />
        </div>

        <div className="flex flex-col items-start gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink/50">Submitting opens WhatsApp with your message pre-filled.</p>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="btn-shine group inline-flex h-13 items-center justify-center gap-2 rounded-full bg-gold px-8 text-sm font-semibold uppercase tracking-[0.14em] text-ink transition-all duration-300 hover:bg-gold-deep active:scale-[0.98] disabled:opacity-60"
          >
            {status === "submitting" && <span className="h-4 w-4 animate-spin rounded-full border-2 border-ink/30 border-t-ink" />}
            {status === "success" && <CheckCircle2 className="h-4 w-4" />}
            {status === "idle" && <Send className="h-4 w-4" />}
            <span>
              {status === "submitting" ? "Sending…" : status === "success" ? "Opening WhatsApp…" : "Start a Project"}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}

function Field({ label, name, type = "text", required, placeholder }: {
  label: string; name: string; type?: string; required?: boolean; placeholder?: string;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/60">
        {label} {required && <span className="text-sky-deep">*</span>}
      </Label>
      <Input
        id={name} name={name} type={type} required={required} placeholder={placeholder}
        className="h-14 border-ink/10 bg-paper-soft text-base focus:border-sky-deep focus:bg-white"
      />
    </div>
  );
}
