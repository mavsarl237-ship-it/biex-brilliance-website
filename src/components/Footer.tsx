import { useLang } from "@/contexts/LanguageContext";
import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpeg";

export default function Footer() {
  const { lang, t } = useLang();

  const links = [
    { labelFr: "Accueil", labelEn: "Home", href: "/" },
    { labelFr: "À propos", labelEn: "About", href: "/about" },
    { labelFr: "Services", labelEn: "Services", href: "/services" },
    { labelFr: "Équipe", labelEn: "Team", href: "/team" },
    { labelFr: "Réseau", labelEn: "Network", href: "/network" },
    { labelFr: "Contact", labelEn: "Contact", href: "/contact" },
  ];

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(222 50% 8%) 0%, hsl(222 55% 5%) 100%)",
      }}
    >
      {/* Blue animated separator at top */}
      <div
        className="h-[2px] animate-gradient"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(358 73% 52%), hsl(358 73% 42%), hsl(358 73% 52%), transparent)",
          backgroundSize: "200% 100%",
        }}
      />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.015] pattern-grid pointer-events-none" />

      {/* Red decorative circle */}
      <div
        className="absolute top-20 right-20 w-32 h-32 rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(358 73% 52%), transparent 70%)" }}
      />

      <div className="container-biex section-padding pb-8 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <img
                src={logo}
                alt="Biex Conseils"
                className="h-16 sm:h-12 w-auto object-contain rounded-lg transition-all duration-300 group-hover:shadow-lg"
                style={{ boxShadow: "0 0 0 1px rgba(59,130,220,0.15)" }}
              />
              <div>
                <div className="font-heading font-bold text-lg">
                  <span style={{ color: "hsl(214 60% 68%)" }}>Biex</span>
                  <span className="text-white/80 ml-1">Conseils</span>
                </div>
                <div className="hidden sm:block text-white/40 text-xs font-body">
                  {t("Expertise Comptable & Commissariat aux Comptes", "Accounting Expertise & Statutory Audit")}
                </div>
              </div>
            </Link>
            <p className="text-white/50 text-sm font-body leading-relaxed max-w-md mb-4">
              {lang === "fr" ? (
                <>
                  <strong className="text-white/80">Cabinet d'audit et de conseils</strong> en gestion, <strong className="text-white/80">partenaire polyvalent</strong> qui apporte <strong className="text-white/80">expertise technique</strong> et <strong className="text-white/80">conseil stratégique</strong> pour <strong className="text-white/80">sécuriser</strong> et <strong className="text-white/80">développer</strong> les activités de toute structure.
                </>
              ) : (
                <>
                  <strong className="text-white/80">Audit and management consulting firm</strong>, a <strong className="text-white/80">versatile partner</strong> providing <strong className="text-white/80">technical expertise</strong> and <strong className="text-white/80">strategic advice</strong> to <strong className="text-white/80">secure</strong> and <strong className="text-white/80">grow</strong> the activities of any organization.
                </>
              )}
            </p>
            <p className="text-white/30 text-xs font-body">
              SARL au capital de 2.500.000 FCFA
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-bold text-sm mb-4" style={{ color: "hsl(214 60% 68%)" }}>
              {t("Liens rapides", "Quick links")}
            </h4>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/50 text-sm font-body transition-all duration-300 relative group inline-block"
                  >
                    {t(link.labelFr, link.labelEn)}
                    <span
                      className="absolute -bottom-0.5 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full"
                      style={{ background: "hsl(358 73% 52%)" }}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-sm mb-4" style={{ color: "hsl(214 60% 68%)" }}>
              {t("Coordonnées", "Contact info")}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "hsl(358 73% 52%)" }} />
                <span className="text-white/50 font-body">+237 622 169 546<br />+237 672 741 295</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "hsl(358 73% 52%)" }} />
                <span className="text-white/50 font-body">biexadvisor@gmail.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "hsl(358 73% 52%)" }} />
                <span className="text-white/50 font-body">Bld de l'URSS, Bastos<br />Yaoundé - Cameroun</span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(220,53,69,0.08)" }}
        >
          <p className="text-white/30 text-xs font-body">
            &copy; {new Date().getFullYear()} Biex Conseils. {t("Tous droits réservés.", "All rights reserved.")}
          </p>
          <p className="text-white/20 text-xs font-body">
            {t("Mentions légales", "Legal notice")}
          </p>
        </div>
      </div>
    </footer>
  );
}
