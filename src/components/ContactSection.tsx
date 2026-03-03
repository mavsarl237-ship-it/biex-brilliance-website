import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import LazyMap from "@/components/LazyMap";

export default function ContactSection() {
  const { t } = useLang();
  const { ref, isVisible } = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitted(true);
    setLoading(false);
  };

  const inputClass =
    "w-full px-4 py-3.5 rounded-xl bg-background text-foreground font-body text-sm outline-none transition-all duration-300";

  return (
    <section id="contact" className="section-padding" style={{ background: "hsl(220 25% 95%)" }} ref={ref}>
      <div className="container-biex">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="font-subheading font-semibold text-sm uppercase tracking-[0.2em]" style={{ color: "hsl(214 65% 52%)" }}>
            {t("Contactez-nous", "Contact us")}
          </span>
          <h2 className="section-title mt-3 mb-4">
            {t("Parlons de votre projet", "Let's discuss your project")}
          </h2>
          <div className="red-separator w-16 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="space-y-6">
              {[
                { icon: Phone, label: t("Téléphone", "Phone"), value: "+237 622 169 546 / 672 741 295" },
                { icon: Mail, label: "Email", value: "biexadvisor@gmail.com" },
                { icon: MapPin, label: t("Localisation", "Location"), value: "Bld de l'URSS, Bastos, Yaoundé - Cameroun" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(59,130,220,0.08)",
                      border: "1px solid rgba(220,53,69,0.1)",
                    }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: "hsl(358 73% 52%)" }} />
                  </div>
                  <div>
                    <div className="font-subheading font-semibold text-sm text-muted-foreground">{item.label}</div>
                    <div className="font-body text-foreground mt-0.5">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Google Map - lazy loaded */}
            <LazyMap
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.705!2d11.504!3d3.885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNTMnMDYuMCJOIDExwrAzMCcxNC40IkU!5e0!3m2!1sfr!2scm!4v1"
              title={t("Localisation Biex Conseils", "Biex Conseils location")}
              height="h-48 sm:h-64"
            />
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div
                className="rounded-2xl p-12 text-center"
                style={{
                  background: "hsl(var(--card))",
                  border: "1px solid rgba(220,53,69,0.15)",
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: "rgba(59,130,220,0.1)" }}
                >
                  <CheckCircle className="w-8 h-8" style={{ color: "hsl(214 65% 52%)" }} />
                </div>
                <h3 className="font-heading font-bold text-2xl text-foreground mb-2">
                  {t("Message envoye !", "Message sent!")}
                </h3>
                <p className="text-muted-foreground font-body">
                  {t(
                    "Nous vous repondrons dans les plus brefs delais.",
                    "We will get back to you as soon as possible."
                  )}
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-8 space-y-5"
                style={{
                  background: "hsl(var(--card))",
                  border: "1px solid rgba(220,53,69,0.1)",
                  boxShadow: "0 10px 40px -10px rgba(59,130,220,0.08)",
                }}
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-subheading text-sm font-medium text-foreground mb-1.5">
                      {t("Nom complet", "Full name")} *
                    </label>
                    <input
                      required
                      type="text"
                      maxLength={100}
                      className={inputClass}
                      style={{ border: "1px solid hsl(var(--border))" }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "rgba(59,130,220,0.4)";
                        e.currentTarget.style.boxShadow = "0 0 0 3px rgba(59,130,220,0.08)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "hsl(var(--border))";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                      placeholder={t("Votre nom", "Your name")}
                    />
                  </div>
                  <div>
                    <label className="block font-subheading text-sm font-medium text-foreground mb-1.5">
                      {t("Entreprise", "Company")}
                    </label>
                    <input
                      type="text"
                      maxLength={100}
                      className={inputClass}
                      style={{ border: "1px solid hsl(var(--border))" }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "rgba(59,130,220,0.4)";
                        e.currentTarget.style.boxShadow = "0 0 0 3px rgba(59,130,220,0.08)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "hsl(var(--border))";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                      placeholder={t("Nom de l'entreprise", "Company name")}
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-subheading text-sm font-medium text-foreground mb-1.5">
                      {t("Telephone", "Phone")} *
                    </label>
                    <input
                      required
                      type="tel"
                      maxLength={20}
                      className={inputClass}
                      style={{ border: "1px solid hsl(var(--border))" }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "rgba(59,130,220,0.4)";
                        e.currentTarget.style.boxShadow = "0 0 0 3px rgba(59,130,220,0.08)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "hsl(var(--border))";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                      placeholder="+237 6XX XXX XXX"
                    />
                  </div>
                  <div>
                    <label className="block font-subheading text-sm font-medium text-foreground mb-1.5">Email *</label>
                    <input
                      required
                      type="email"
                      maxLength={255}
                      className={inputClass}
                      style={{ border: "1px solid hsl(var(--border))" }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "rgba(59,130,220,0.4)";
                        e.currentTarget.style.boxShadow = "0 0 0 3px rgba(59,130,220,0.08)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "hsl(var(--border))";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-subheading text-sm font-medium text-foreground mb-1.5">
                    {t("Sujet", "Subject")} *
                  </label>
                  <select
                    required
                    className={inputClass}
                    style={{ border: "1px solid hsl(var(--border))" }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "rgba(59,130,220,0.4)";
                      e.currentTarget.style.boxShadow = "0 0 0 3px rgba(59,130,220,0.08)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "hsl(var(--border))";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <option value="">{t("Choisir un sujet", "Choose a subject")}</option>
                    <option value="audit">{t("Demande d'audit", "Audit request")}</option>
                    <option value="conseil">{t("Conseil en gestion", "Management consulting")}</option>
                    <option value="fiscal">{t("Fiscalite", "Taxation")}</option>
                    <option value="formation">{t("Formation", "Training")}</option>
                    <option value="autre">{t("Autre", "Other")}</option>
                  </select>
                </div>
                <div>
                  <label className="block font-subheading text-sm font-medium text-foreground mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    maxLength={1000}
                    className={`${inputClass} resize-none`}
                    style={{ border: "1px solid hsl(var(--border))" }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "rgba(59,130,220,0.4)";
                      e.currentTarget.style.boxShadow = "0 0 0 3px rgba(59,130,220,0.08)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "hsl(var(--border))";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                    placeholder={t("Décrivez votre besoin...", "Describe your needs...")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {loading ? (
                    <div
                      className="w-5 h-5 border-2 rounded-full animate-spin"
                      style={{
                        borderColor: "rgba(255,255,255,0.3)",
                        borderTopColor: "#fff",
                      }}
                    />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      {t("Envoyer le message", "Send message")}
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
