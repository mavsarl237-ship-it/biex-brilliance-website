import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-meeting.jpg";

const wordsFr = ["Performance", "Croissance", "Conformité", "Transformation", "Structuration", "Rentabilité"];
const wordsEn = ["Performance", "Growth", "Compliance", "Transformation", "Structuring", "Profitability"];

export default function Hero() {
  const { lang, t } = useLang();
  const words = lang === "fr" ? wordsFr : wordsEn;
  const typedText = useTypingEffect(words, 80, 50, 1800);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(135deg, rgba(10,22,40,0.95) 0%, rgba(10,22,40,0.82) 40%, rgba(10,22,40,0.65) 100%)"
        }} />
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(10,22,40,0.4) 100%)"
        }} />
      </div>

      {/* Floating decorative elements — hidden on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        {/* Blue orb */}
        <motion.div
          className="absolute w-72 h-72 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(59,130,220,0.1), transparent 70%)",
            top: "10%", right: "5%",
          }}
          animate={{ y: [-20, 20, -20], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Red accent orb - subtle */}
        <motion.div
          className="absolute w-40 h-40 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(200,55,55,0.07), transparent 70%)",
            top: "60%", right: "15%",
          }}
          animate={{ y: [10, -10, 10], scale: [1, 1.15, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Small red dots */}
        <motion.div
          className="absolute w-2 h-2 rounded-full"
          style={{ background: "hsl(358 73% 52%)", top: "25%", right: "20%", opacity: 0.3 }}
          animate={{ opacity: [0.15, 0.4, 0.15] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{ background: "hsl(358 73% 52%)", bottom: "35%", left: "12%", opacity: 0.2 }}
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        {/* Blue orb bottom */}
        <motion.div
          className="absolute w-48 h-48 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(59,130,220,0.08), transparent 70%)",
            bottom: "20%", left: "8%",
          }}
          animate={{ y: [15, -15, 15], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Geometric shapes */}
        <svg className="absolute top-1/4 right-10 w-32 h-32 opacity-[0.05]" viewBox="0 0 100 100">
          <rect x="10" y="10" width="80" height="80" fill="none" stroke="rgb(59,130,220)" strokeWidth="0.5" />
          <rect x="25" y="25" width="50" height="50" fill="none" stroke="rgb(59,130,220)" strokeWidth="0.5" />
        </svg>
        {/* Red triangle accent */}
        <svg className="absolute bottom-1/3 right-1/4 w-16 h-16 opacity-[0.06]" viewBox="0 0 100 100">
          <polygon points="50,10 90,90 10,90" fill="none" stroke="hsl(358 73% 52%)" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 container-biex section-padding pt-28 md:pt-32">
        <div className="max-w-3xl mx-auto sm:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.5 }}
            className="text-center sm:text-left"
          >
            {/* Badge */}
            <div className="badge-blue mb-8 mx-auto sm:mx-0">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "hsl(214 65% 55%)" }} />
              <span className="text-white/80 text-sm font-medium font-subheading">
                {t("Expertise Comptable & Commissariat aux Comptes", "Accounting Expertise & Statutory Audit")}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight mb-6">
              <span className="text-white">
                {t("Nous accompagnons votre", "We drive your")}
              </span>
              <br />
              <span className="text-gradient-blue">
                {typedText}
                <span className="border-r-2 animate-typing-cursor ml-1">&nbsp;</span>
              </span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl font-body mb-10 max-w-2xl leading-relaxed">
              {lang === "fr" ? (
                <>Cabinet d'expertise <strong className="text-white/80">multidisciplinaire</strong> spécialisé dans l'<strong className="text-white/80">accompagnement comptable</strong>, <strong className="text-white/80">fiscal</strong>, <strong className="text-white/80">administratif</strong> et <strong className="text-white/80">stratégique</strong> des entreprises en <strong className="text-white/80">Afrique</strong>.</>
              ) : (
                <><strong className="text-white/80">Multidisciplinary consulting firm</strong> specialized in <strong className="text-white/80">accounting</strong>, <strong className="text-white/80">tax</strong>, <strong className="text-white/80">administrative</strong> and <strong className="text-white/80">strategic support</strong> for businesses across <strong className="text-white/80">Africa</strong>.</>
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
              <Link to="/services" className="btn-accent text-center">
                {t("Demander un audit", "Request an audit")}
              </Link>
              <Link to="/contact" className="btn-outline-blue text-center">
                {t("Nous contacter", "Contact us")}
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 3 }}
          className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-0 rounded-2xl overflow-hidden shimmer"
          style={{
            background: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(220,53,69,0.12)",
          }}
        >
          {[
            { value: "3", label: t("Bureaux en Afrique", "Offices in Africa") },
            { value: "16+", label: t("Domaines d'expertise", "Areas of expertise") },
            { value: "5+", label: t("Associés experts", "Expert partners") },
            { value: "100%", label: t("Engagement client", "Client commitment") },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center py-6 md:py-8 px-4"
              style={{
                borderRight: i < 3 ? "1px solid rgba(59,130,220,0.08)" : "none",
              }}
            >
              <div className="text-2xl md:text-3xl font-heading font-bold mb-1 text-gradient-blue">
                {stat.value}
              </div>
              <div className="text-white/40 text-sm font-body">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 40C240 10 480 60 720 40C960 20 1200 50 1440 30V80H0V40Z"
            fill="hsl(220 25% 97%)"
          />
        </svg>
      </div>
    </section>
  );
}
