import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLang, LANG_FLAGS, LANG_LABELS, Lang } from "@/contexts/LanguageContext";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.jpeg";

const navItems: Record<Lang, { label: string; href: string }[]> = {
  fr: [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Équipe", href: "/team" },
    { label: "Réseau", href: "/network" },
    { label: "Documentation", href: "/documentation" },
    { label: "Contact", href: "/contact" },
  ],
  en: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Team", href: "/team" },
    { label: "Network", href: "/network" },
    { label: "Documentation", href: "/documentation" },
    { label: "Contact", href: "/contact" },
  ],
  de: [
    { label: "Startseite", href: "/" },
    { label: "Über uns", href: "/about" },
    { label: "Leistungen", href: "/services" },
    { label: "Team", href: "/team" },
    { label: "Netzwerk", href: "/network" },
    { label: "Dokumentation", href: "/documentation" },
    { label: "Kontakt", href: "/contact" },
  ],
  ar: [
    { label: "الرئيسية", href: "/" },
    { label: "من نحن", href: "/about" },
    { label: "خدماتنا", href: "/services" },
    { label: "الفريق", href: "/team" },
    { label: "الشبكة", href: "/network" },
    { label: "توثيق", href: "/documentation" },
    { label: "اتصل بنا", href: "/contact" },
  ],
};

const langs: Lang[] = ["fr", "en", "de", "ar"];

function LanguageDropdown({ onSelect }: { onSelect?: () => void }) {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white/90 transition-colors font-subheading px-2 py-1.5 rounded-lg hover:bg-white/5"
      >
        <img
          src={LANG_FLAGS[lang]}
          alt={lang}
          className="w-5 h-[14px] object-cover rounded-sm shadow-sm"
        />
        <span>{lang.toUpperCase()}</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full mt-2 right-0 rounded-xl overflow-hidden shadow-xl z-50 min-w-[160px]"
            style={{
              background: "rgba(10, 22, 40, 0.95)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(220,53,69,0.15)",
            }}
          >
            {langs.map((l) => (
              <button
                key={l}
                onClick={() => {
                  setLang(l);
                  setOpen(false);
                  onSelect?.();
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-subheading transition-all duration-200 ${lang === l
                  ? "text-white bg-white/10"
                  : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
              >
                <img
                  src={LANG_FLAGS[l]}
                  alt={l}
                  className="w-6 h-[17px] object-cover rounded shadow-sm"
                />
                <span className="font-medium">{LANG_LABELS[l]}</span>
                {lang === l && (
                  <span
                    className="ml-auto w-1.5 h-1.5 rounded-full"
                    style={{ background: "hsl(358 73% 52%)" }}
                  />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useLang();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const items = navItems[lang];
  const isHome = location.pathname === "/";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || !isHome
        ? "backdrop-blur-xl shadow-lg border-b"
        : "bg-transparent"
        }`}
      style={
        scrolled || !isHome
          ? {
            background: "rgba(10, 22, 40, 0.92)",
            borderColor: "rgba(220, 53, 69, 0.1)",
          }
          : {}
      }
    >
      <div className="container-biex flex items-center justify-between h-16 md:h-20 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Biex Conseils"
            className="h-14 sm:h-10 md:h-12 w-auto object-contain rounded-lg transition-all duration-300 group-hover:shadow-lg"
            style={{ boxShadow: "0 0 0 1px rgba(220,53,69,0.15)" }}
          />
          <div className="hidden sm:block">
            <span className="font-heading font-bold text-lg leading-none" style={{ color: "hsl(214 60% 70%)" }}>
              Biex
            </span>
            <span className="font-heading font-bold text-lg leading-none ml-1 text-white/80">
              Conseils
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {items.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`font-subheading text-sm font-medium transition-all duration-300 relative group ${isActive ? "text-white" : "text-white/60 hover:text-white"
                  }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] transition-all duration-300 rounded-full ${isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  style={{ background: "linear-gradient(90deg, hsl(358 73% 52%), hsl(358 73% 42%))" }}
                />
                {/* Red dot indicator for active */}
                {isActive && (
                  <span
                    className="absolute -top-1 -right-2 w-1.5 h-1.5 rounded-full"
                    style={{ background: "hsl(358 73% 52%)" }}
                  />
                )}
              </Link>
            );
          })}

          {/* Separator */}
          <div className="w-px h-6" style={{ background: "rgba(220,53,69,0.2)" }} />

          <LanguageDropdown />

          <Link
            to="/contact"
            className="btn-primary text-sm py-2.5 px-6"
          >
            {t("Nous contacter", "Contact us", "Kontakt", "اتصل بنا")}
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="flex lg:hidden items-center gap-3">
          <LanguageDropdown onSelect={() => setMobileOpen(false)} />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white/80"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden"
            style={{
              background: "rgba(10, 22, 40, 0.95)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(220,53,69,0.1)",
            }}
          >
            <div className="px-6 py-4 space-y-1">
              {items.map((item, idx) => {
                const isActive = location.pathname === item.href;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      to={item.href}
                      className={`block font-subheading text-sm font-medium py-4 transition-colors ${isActive ? "text-white" : "text-white/70 hover:text-white"
                        }`}
                      style={{ borderBottom: "1px solid rgba(220,53,69,0.06)", minHeight: "44px" }}
                    >
                      <span className="flex items-center gap-2">
                        {isActive && (
                          <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ background: "hsl(358 73% 52%)" }}
                          />
                        )}
                        {item.label}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  to="/contact"
                  className="btn-primary block text-center text-sm py-3 mt-4"
                >
                  {t("Nous contacter", "Contact us", "Kontakt", "اتصل بنا")}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
