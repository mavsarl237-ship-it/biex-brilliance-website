import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Target, Eye, Heart, TrendingUp } from "lucide-react";
import serviceAudit from "@/assets/service-audit.jpg";

const pillars = [
  {
    icon: Eye,
    titleFr: "Notre Vision",
    titleEn: "Our Vision",
    textFr: "Contribuer à la performance, la structuration et la croissance durable des entreprises et organisations au Cameroun et en zone CEMAC.",
    textEn: "Contributing to the performance, structuring and sustainable growth of businesses and organizations in Cameroon and the CEMAC zone.",
    accent: "blue" as const,
  },
  {
    icon: Target,
    titleFr: "Notre Mission",
    titleEn: "Our Mission",
    textFr: "Offrir aux entreprises, institutions et porteurs de projets un accompagnement complet basé sur l'expertise, l'éthique, la rigueur et l'impact durable.",
    textEn: "Providing businesses, institutions and project leaders with comprehensive support based on expertise, ethics, rigor and lasting impact.",
    accent: "blue" as const,
  },
  {
    icon: Heart,
    titleFr: "Nos Valeurs",
    titleEn: "Our Values",
    textFr: "Professionnalisme, Intégrité, Performance, Durabilité, Impact.",
    textEn: "Professionalism, Integrity, Performance, Sustainability, Impact.",
    accent: "red" as const,
  },
  {
    icon: TrendingUp,
    titleFr: "Objectifs",
    titleEn: "Objectives",
    textFr: "Amélioration continue des processus, conformité aux normes et réglementations, gestion proactive des risques.",
    textEn: "Continuous process improvement, regulatory compliance, proactive risk management.",
    accent: "blue" as const,
  },
];

const iconColors = {
  blue: { bg: "rgba(59,130,220,0.08)", color: "hsl(358 73% 52%)" },
  red: { bg: "rgba(200,55,55,0.08)", color: "hsl(358 73% 52%)" },
};

export default function About() {
  const { lang, t } = useLang();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding bg-background pattern-dots relative" ref={ref}>
      {/* Red decorative accent — hidden on mobile to prevent overflow */}
      <div
        className="absolute top-16 right-16 w-24 h-24 rounded-full opacity-[0.04] pointer-events-none hidden sm:block"
        style={{ background: "radial-gradient(circle, hsl(358 73% 52%), transparent 70%)" }}
      />
      <div
        className="absolute bottom-32 left-12 w-3 h-3 rounded-full opacity-[0.12] pointer-events-none"
        style={{ background: "hsl(358 73% 52%)" }}
      />

      <div className="container-biex">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 25px 50px -12px rgba(59,130,220,0.15), 0 0 0 1px rgba(59,130,220,0.1)",
              }}
            >
              <img
                src={serviceAudit}
                alt={t("Expertise comptable", "Accounting expertise")}
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-biex-navy/50 to-transparent" />
            </div>
            {/* CEMAC badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-6 -right-6 rounded-2xl p-6 shadow-xl hidden md:block"
              style={{
                background: "linear-gradient(135deg, hsl(214 65% 55%), hsl(214 70% 42%))",
                color: "#fff",
              }}
            >
              <div className="text-3xl font-heading font-bold">CEMAC</div>
              <div className="text-sm font-body opacity-80">{t("Zone d'intervention", "Area of operation")}</div>
            </motion.div>

            {/* Decorative border */}
            <div
              className="absolute -top-4 -left-4 w-32 h-32 rounded-2xl hidden md:block"
              style={{
                border: "2px solid rgba(220,53,69,0.15)",
              }}
            />
            {/* Red corner accent */}
            <div
              className="absolute -top-4 -left-4 w-8 h-8 hidden md:block"
              style={{
                borderTop: "2px solid rgba(200,55,55,0.3)",
                borderLeft: "2px solid rgba(200,55,55,0.3)",
                borderRadius: "0.75rem 0 0 0",
              }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center sm:text-left"
          >
            <span className="font-subheading font-semibold text-sm uppercase tracking-[0.2em]" style={{ color: "hsl(214 65% 52%)" }}>
              {t("À propos de nous", "About us")}
            </span>
            <h2 className="section-title mt-3 mb-4">
              Biex Conseils
            </h2>
            <p className="font-subheading font-semibold text-lg mb-4" style={{ color: "hsl(220 45% 30%)" }}>
              {t("Expertise Comptable & Commissariat aux Comptes", "Accounting Expertise & Statutory Audit")}
            </p>
            <p className="font-subheading font-medium mb-6 text-gradient-blue text-base">
              Impact -- Performance -- {t("Accompagnement Durable", "Sustainable Support")}
            </p>

            {/* Red + Blue separator */}
            <div className="flex items-center gap-2 mb-6 justify-center sm:justify-start">
              <div className="w-12 h-[2px]" style={{ background: "hsl(358 73% 52%)" }} />
              <div className="w-2 h-2 rounded-full" style={{ background: "hsl(358 73% 52%)" }} />
              <div className="w-8 h-[2px]" style={{ background: "hsl(358 73% 52%)" }} />
            </div>

            <p className="section-subtitle mb-8">
              {lang === "fr" ? (
                <>
                  <strong className="text-foreground">BIEX Conseils</strong> est un cabinet d'expertise multidisciplinaire spécialisé dans l'accompagnement <strong className="text-foreground">comptable</strong>, <strong className="text-foreground">fiscal</strong>, <strong className="text-foreground">administratif</strong>, <strong className="text-foreground">social</strong>, <strong className="text-foreground">audit</strong>, <strong className="text-foreground">entrepreneurial</strong> et <strong className="text-foreground">stratégique</strong> des entreprises, institutions, organisations et porteurs de projets. Notre approche repose sur l'<strong className="text-foreground">investissement intellectuel</strong>, la <strong className="text-foreground">performance</strong>, l'<strong className="text-foreground">éthique professionnelle</strong> et la <strong className="text-foreground">durabilité</strong>.
                </>
              ) : (
                <>
                  <strong className="text-foreground">BIEX Conseils</strong> is a multidisciplinary consulting firm specialized in <strong className="text-foreground">accounting</strong>, <strong className="text-foreground">tax</strong>, <strong className="text-foreground">administrative</strong>, <strong className="text-foreground">social</strong>, <strong className="text-foreground">audit</strong>, <strong className="text-foreground">entrepreneurial</strong> and <strong className="text-foreground">strategic support</strong> for businesses, institutions, organizations and project leaders. Our approach is based on <strong className="text-foreground">intellectual investment</strong>, <strong className="text-foreground">performance</strong>, <strong className="text-foreground">professional ethics</strong> and <strong className="text-foreground">sustainability</strong>.
                </>
              )}
            </p>
          </motion.div>
        </div>

        {/* Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {pillars.map((p, i) => {
            const colors = iconColors[p.accent];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className={`rounded-xl p-6 card-hover group shimmer red-border-top text-center sm:text-left`}
                style={{
                  background: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 mx-auto sm:mx-0"
                  style={{ background: colors.bg }}
                >
                  <p.icon className="w-6 h-6" style={{ color: colors.color }} />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2 text-foreground">
                  {t(p.titleFr, p.titleEn)}
                </h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">
                  {t(p.textFr, p.textEn)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
