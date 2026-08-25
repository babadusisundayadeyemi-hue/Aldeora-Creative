"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
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
            Let&apos;s create{" "}
            <span className="text-gold-gradient italic">something great</span>.
          </>
        }
        description="Send us a message and we'll get back to you within a few hours. For the fastest response, use WhatsApp."
      >
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <CTAButton href={WA_DEFAULT} isWhatsApp size="lg" variant="gold" showArrow>
            Chat With Us on WhatsApp
          </CTAButton>
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
                <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
                  Reach us directly.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-4 text-base leading-relaxed text-ink/65">
                  WhatsApp is the fastest way to reach us. We typically respond
                  within a few hours during business days.
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
                  icon={<Phone className="h-5 w-5" />}
                  label="Phone"
                  value={BRAND.phoneDisplay}
                  href={`tel:${BRAND.phoneRaw}`}
                  accent="blue"
                />
                <ContactRow
                  icon={<Mail className="h-5 w-5" />}
                  label="Email"
                  value={BRAND.email}
                  href={`mailto:${BRAND.email}`}
                  accent="ink"
                />
                <ContactRow
                  icon={<MapPin className="h-5 w-5" />}
                  label="Studio"
                  value="Remote · Worldwide"
                  href="#"
                  accent="ink"
                />
              </div>

              {/* WhatsApp banner */}
              <Reveal delay={0.2}>
                <div className="mt-8 overflow-hidden rounded-2xl border border-[#25D366]/20 bg-gradient-to-br from-[#25D366]/5 to-transparent p-6">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
                      <WhatsAppIcon className="h-6 w-6" />
                    </span>
                    <div className="flex-1">
                      <p className="font-display text-lg font-bold tracking-tight text-ink">
                        Prefer to chat?
                      </p>
                      <p className="mt-1 text-sm text-ink/60">
                        Tap below to open WhatsApp with a message ready to send.
                      </p>
                      <div className="mt-4">
                        <CTAButton href={WA_DEFAULT} isWhatsApp variant="whatsapp" showArrow size="md">
                          Chat With Us on WhatsApp
                        </CTAButton>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
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

function ContactRow({
  icon,
  label,
  value,
  href,
  external,
  accent,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
  accent: "gold" | "blue" | "ink";
}) {
  const accentBg = accent === "gold" ? "bg-gold text-ink" : accent === "blue" ? "bg-royal text-white" : "bg-ink text-gold";

  const content = (
    <div className="group flex items-center gap-4 rounded-xl border border-black/5 bg-white p-4 transition-all duration-300 hover:border-gold/30 hover:shadow-[0_15px_40px_-20px_rgba(0,0,0,0.2)]">
      <span className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${accentBg}`}>
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/40">
          {label}
        </p>
        <p className="mt-0.5 truncate text-sm font-semibold text-ink">{value}</p>
      </div>
    </div>
  );

  if (href === "#") return content;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }
  return <a href={href} className="block">{content}</a>;
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get("name") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const need = (formData.get("need") as string)?.trim();
    const message = (formData.get("message") as string)?.trim();

    // Build a WhatsApp message from the form submission
    const waMessage = `Hello Aldeora Creative!\n\nName: ${name}\nBusiness: ${formData.get("business") || "—"}\nEmail: ${email}\nWhat I need: ${need}\n\nMessage: ${message}`;
    const waUrl = `${WA_DEFAULT.split("?")[0]}?text=${encodeURIComponent(waMessage)}`;

    // Simulate brief processing then redirect to WhatsApp
    setTimeout(() => {
      setStatus("success");
      // Open WhatsApp in a new tab with the pre-filled message
      window.open(waUrl, "_blank", "noopener,noreferrer");
      // Reset form after a moment
      setTimeout(() => {
        form.reset();
        setStatus("idle");
      }, 2500);
    }, 700);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-white p-7 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.25)] sm:p-9">
      {/* Top accent */}
      <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-royal via-gold to-royal" />

      <div className="flex items-center justify-between gap-4">
        <div>
          <Eyebrow>Send a message</Eyebrow>
          <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink">
            Tell us about your project.
          </h3>
        </div>
      </div>

      <form onSubmit={onSubmit} className="mt-7 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Name" name="name" required placeholder="Your name" />
          <Field label="Business Name" name="business" placeholder="Your business" />
        </div>

        <Field label="Email" name="email" type="email" required placeholder="you@brand.com" />

        <div className="space-y-2">
          <Label htmlFor="need" className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/60">
            What do you need? <span className="text-royal">*</span>
          </Label>
          <select
            id="need"
            name="need"
            required
            defaultValue=""
            className="h-12 w-full rounded-lg border border-black/10 bg-paper-soft px-4 text-sm text-ink transition-colors focus:border-royal focus:bg-white focus:outline-none focus:ring-2 focus:ring-royal/20"
          >
            <option value="" disabled>Select a service…</option>
            <option>AI Video Content</option>
            <option>Web Design</option>
            <option>Digital Solutions</option>
            <option>Starter Glow Package</option>
            <option>Glow Growth Package</option>
            <option>Brand Dominance Package</option>
            <option>Not sure yet</option>
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/60">
            Message <span className="text-royal">*</span>
          </Label>
          <Textarea
            id="message"
            name="message"
            required
            placeholder="Tell us a bit about your brand and what you're looking for…"
            className="min-h-[140px] resize-none border-black/10 bg-paper-soft focus:border-royal focus:bg-white"
          />
        </div>

        {/* Submit */}
        <div className="flex flex-col items-start gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink/45">
            Submitting opens WhatsApp with your message pre-filled.
          </p>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="btn-shine group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gold px-7 text-sm font-semibold uppercase tracking-[0.12em] text-ink shadow-[0_8px_24px_-12px_rgba(201,162,39,0.6)] transition-all duration-300 hover:bg-gold-deep active:scale-[0.98] disabled:opacity-60"
          >
            {status === "submitting" && (
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-ink/30 border-t-ink" />
            )}
            {status === "success" && <CheckCircle2 className="h-4 w-4" />}
            {status === "error" && <AlertCircle className="h-4 w-4" />}
            {status === "idle" && <Send className="h-4 w-4" />}
            <span>
              {status === "submitting"
                ? "Sending…"
                : status === "success"
                ? "Opening WhatsApp…"
                : status === "error"
                ? "Try again"
                : "Send Message"}
            </span>
          </button>
        </div>

        {/* Success state */}
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 flex items-start gap-3 rounded-xl border border-[#25D366]/30 bg-[#25D366]/5 p-4"
          >
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#1ebe57]" />
            <div className="text-sm">
              <p className="font-semibold text-ink">Message prepared!</p>
              <p className="mt-0.5 text-ink/65">
                WhatsApp should have opened in a new tab with your message ready to send. If not, tap below.
              </p>
              <a
                href={WA_DEFAULT}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#1ebe57]"
              >
                <WhatsAppIcon className="h-3.5 w-3.5" />
                Open WhatsApp manually
              </a>
            </div>
          </motion.div>
        )}

        {/* Integration note */}
        <p className="border-t border-black/5 pt-4 text-[11px] leading-relaxed text-ink/40">
          <strong className="text-ink/60">Note:</strong> Form submissions open WhatsApp with your message pre-filled. To connect this form to email or a CRM, integrate an API route at <code className="rounded bg-paper-mute px-1.5 py-0.5 text-ink/60">/api/contact</code>.
        </p>
      </form>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/60">
        {label} {required && <span className="text-royal">*</span>}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-12 border-black/10 bg-paper-soft focus:border-royal focus:bg-white"
      />
    </div>
  );
}
