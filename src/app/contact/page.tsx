"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2 } from "lucide-react";
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
        title={<>Let's create something <span className="italic text-gold">beautiful</span>.</>}
      >
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <CTAButton href={WA_DEFAULT} isWhatsApp size="lg" variant="gold" showArrow>Chat on WhatsApp</CTAButton>
        </div>
      </PageHeader>

      <Section tone="light">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            {/* Left: contact info */}
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>Direct contact</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-6 font-display text-4xl font-light leading-tight tracking-tight text-ink sm:text-5xl">
                  Reach us directly.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 text-lg leading-relaxed text-ink/55">
                  WhatsApp is the fastest way to reach us. We respond within a few hours.
                </p>
              </Reveal>

              <div className="mt-8 space-y-4">
                {/* WhatsApp */}
                <Reveal delay={0.15}>
                  <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-[#25D366]/20 bg-[#25D366]/5 p-5 transition-all duration-300 hover:border-[#25D366]/40">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
                      <WhatsAppIcon className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.22em] text-ink/45">WhatsApp</p>
                      <p className="mt-1 text-lg font-semibold text-ink">{BRAND.phoneDisplay}</p>
                    </div>
                  </a>
                </Reveal>
                {/* Email */}
                <Reveal delay={0.2}>
                  <a href={`mailto:${BRAND.email}`}
                    className="group flex items-center gap-4 rounded-2xl border border-black/[0.06] bg-white p-5 transition-all duration-300 hover:border-gold/30">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold text-ink">
                      <Mail className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.22em] text-ink/45">Email</p>
                      <p className="mt-1 text-lg font-semibold text-ink">{BRAND.email}</p>
                    </div>
                  </a>
                </Reveal>
              </div>
            </div>

            {/* Right: contact form */}
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
      setTimeout(() => {
        form.reset();
        setStatus("idle");
      }, 2500);
    }, 700);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-black/[0.06] bg-white p-7 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.2)] sm:p-9">
      <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-royal via-gold to-royal" />
      <div>
        <Eyebrow>Start a Project</Eyebrow>
        <h3 className="mt-4 font-display text-3xl font-light tracking-tight text-ink sm:text-4xl">
          Tell us about your project.
        </h3>
      </div>

      <form onSubmit={onSubmit} className="mt-8 space-y-6">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Name" name="name" required placeholder="Your name" />
          <Field label="Business" name="business" placeholder="Your business" />
        </div>
        <Field label="Email" name="email" type="email" required placeholder="you@brand.com" />

        <div className="space-y-2">
          <Label htmlFor="need" className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/60">
            What do you need? <span className="text-royal">*</span>
          </Label>
          <select id="need" name="need" required defaultValue=""
            className="h-14 w-full rounded-lg border border-black/10 bg-paper-soft px-4 text-base text-ink transition-colors focus:border-royal focus:bg-white focus:outline-none focus:ring-2 focus:ring-royal/20">
            <option value="" disabled>Select a service…</option>
            <option>AI Video Creation</option>
            <option>Product & Brand Videos</option>
            <option>Social Media Content</option>
            <option>Beauty & Wellness Content</option>
            <option>Not sure yet</option>
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/60">
            Message <span className="text-royal">*</span>
          </Label>
          <Textarea id="message" name="message" required placeholder="Tell us about your brand…"
            className="min-h-[160px] resize-none border-black/10 bg-paper-soft text-base focus:border-royal focus:bg-white" />
        </div>

        <div className="flex flex-col items-start gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink/50">Submitting opens WhatsApp with your message pre-filled.</p>
          <button type="submit" disabled={status === "submitting"}
            className="btn-shine group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-gold px-8 text-sm font-semibold uppercase tracking-[0.14em] text-ink transition-all duration-300 hover:bg-gold-deep active:scale-[0.98] disabled:opacity-60">
            {status === "submitting" ? <span className="h-5 w-5 animate-spin rounded-full border-2 border-ink/30 border-t-ink" /> : <Send className="h-5 w-5" />}
            {status === "success" ? "Opening WhatsApp…" : status === "submitting" ? "Sending…" : "Start a Project"}
          </button>
        </div>

        {status === "success" && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            className="flex items-start gap-3 rounded-xl border border-[#25D366]/30 bg-[#25D366]/5 p-4">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#1ebe57]" />
            <div className="text-sm">
              <p className="font-semibold text-ink">Message prepared!</p>
              <p className="mt-0.5 text-ink/65">WhatsApp should have opened with your message ready to send.</p>
            </div>
          </motion.div>
        )}
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
        {label} {required && <span className="text-royal">*</span>}
      </Label>
      <Input id={name} name={name} type={type} required={required} placeholder={placeholder}
        className="h-14 border-black/10 bg-paper-soft text-base focus:border-royal focus:bg-white" />
    </div>
  );
}
