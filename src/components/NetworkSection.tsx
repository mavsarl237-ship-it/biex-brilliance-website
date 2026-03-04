import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Clock } from "lucide-react";
import LazyMap from "@/components/LazyMap";

const openOffices = [
  {
    city: "Accra",
    country: "Ghana",
    address: "1st Floor, Noble & Noble House, Adjacent Zenith University College GL-036-6873",
    nameFr: "Biex Advisor Ghana",
    nameEn: "Biex Advisor Ghana",
    nameDe: "Biex Advisor Ghana",
    nameAr: "Biex Advisor غانا",
    mapEmbed: "https://maps.google.com/maps?width=100%25&height=600&hl=fr&q=Zenith+University+College,+Accra,+Ghana+(Biex+Advisor+Ghana)&t=&z=15&ie=UTF8&iwloc=B&output=embed",
  },
  {
    city: "Yaoundé",
    countryFr: "Cameroun", countryEn: "Cameroon", countryDe: "Kamerun", countryAr: "الكاميرون",
    address: "Bastos - Boulevard de l'URSS",
    nameFr: "Biex Conseils Cameroun",
    nameEn: "Biex Conseils Cameroon",
    nameDe: "Biex Conseils Kamerun",
    nameAr: "Biex Conseils الكاميرون",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.705!2d11.504!3d3.885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNTMnMDYuMCJOIDExwrAzMCcxNC40IkU!5e0!3m2!1sfr!2scm!4v1714088000000!5m2!1sfr!2scm",
  },
  {
    city: "Dakar",
    countryFr: "Sénégal", countryEn: "Senegal", countryDe: "Senegal", countryAr: "السنغال",
    address: "Keur Gorgui Immeuble Hermès I, 3e Étage N 22 BP 10723, Dakar Liberté",
    nameFr: "Biex Conseils Sénégal",
    nameEn: "Biex Conseils Senegal",
    nameDe: "Biex Conseils Senegal",
    nameAr: "Biex Conseils السنغال",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.742057395029!2d-17.46467022416805!3d14.727142074003265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18172b05b38ed6a5%3A0xb3cf51a444d32062!2sKeur%20Gorgui%2C%20Dakar%2C%20S%C3%A9n%C3%A9gal!5e0!3m2!1sfr!2scm!4v1714088000000!5m2!1sfr!2scm",
  },
];

const upcomingOffices = [
  { city: "Brazzaville", countryFr: "Congo", countryEn: "Congo", countryDe: "Kongo", countryAr: "الكونغو", statusFr: "Bientôt", statusEn: "Soon", statusDe: "Bald", statusAr: "قريباً", mapEmbed: "https://maps.google.com/maps?width=100%25&height=600&hl=fr&q=Brazzaville,%20Republic%20of%20the%20Congo&t=&z=12&ie=UTF8&iwloc=B&output=embed" },
  { city: "Libreville", countryFr: "Gabon", countryEn: "Gabon", countryDe: "Gabun", countryAr: "الغابون", statusFr: "Bientôt", statusEn: "Soon", statusDe: "Bald", statusAr: "قريباً", mapEmbed: "https://maps.google.com/maps?width=100%25&height=600&hl=fr&q=Libreville,+Gabon&t=&z=12&ie=UTF8&iwloc=B&output=embed" },
  { city: "Ouagadougou", countryFr: "Burkina Faso", countryEn: "Burkina Faso", countryDe: "Burkina Faso", countryAr: "بوركينا فاسو", statusFr: "Bientôt", statusEn: "Soon", statusDe: "Bald", statusAr: "قريباً", mapEmbed: "https://maps.google.com/maps?width=100%25&height=600&hl=fr&q=Ouagadougou,+Burkina+Faso&t=&z=12&ie=UTF8&iwloc=B&output=embed" },
  { city: "Niamey", countryFr: "Niger", countryEn: "Niger", countryDe: "Niger", countryAr: "النيجر", statusFr: "Bientôt", statusEn: "Soon", statusDe: "Bald", statusAr: "قريباً", mapEmbed: "https://maps.google.com/maps?width=100%25&height=600&hl=fr&q=Niamey,+Niger&t=&z=12&ie=UTF8&iwloc=B&output=embed" },
  { city: "Lomé", countryFr: "Togo", countryEn: "Togo", countryDe: "Togo", countryAr: "توغو", statusFr: "Bientôt", statusEn: "Soon", statusDe: "Bald", statusAr: "قريباً", mapEmbed: "https://maps.google.com/maps?width=100%25&height=600&hl=fr&q=Lome,+Togo&t=&z=12&ie=UTF8&iwloc=B&output=embed" },
];

export default function NetworkSection() {
  const { t } = useLang();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="network" className="section-padding pattern-grid" style={{ background: "hsl(220 25% 95%)" }} ref={ref}>
      <div className="container-biex">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="font-subheading font-semibold text-sm uppercase tracking-[0.2em]" style={{ color: "hsl(214 65% 52%)" }}>
            {t("Notre réseau", "Our network", "Unser Netzwerk", "شبكتنا")}
          </span>
          <h2 className="section-title mt-3 mb-4">
            {t("Bureaux du réseau Biex", "Biex Network Offices", "Biex Netzwerkbüros", "مكاتب شبكة Biex")}
          </h2>
          <div className="red-separator w-16 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {openOffices.map((office, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="rounded-2xl p-8 card-hover relative overflow-hidden blue-border-top shimmer text-center sm:text-left"
              style={{
                background: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto sm:mx-0"
                style={{ background: "rgba(59,130,220,0.08)" }}
              >
                <MapPin className="w-6 h-6" style={{ color: "hsl(358 73% 52%)" }} />
              </div>
              <h3 className="font-heading font-bold text-xl mb-1 text-foreground">{office.city}</h3>
              <p className="font-subheading font-semibold text-sm mb-3" style={{ color: "hsl(214 65% 52%)" }}>
                {"countryFr" in office
                  ? t(office.countryFr!, office.countryEn!, office.countryDe!, office.countryAr!)
                  : office.country}
              </p>
              <p className="text-sm font-subheading font-medium mb-2" style={{ color: "hsl(220 45% 30%)" }}>
                {t(office.nameFr, office.nameEn, office.nameDe, office.nameAr)}
              </p>
              <p className="text-sm text-muted-foreground font-body mb-5">{office.address}</p>

              {/* Google Map - lazy loaded */}
              <LazyMap
                src={office.mapEmbed}
                title={`Localisation Biex ${office.city}`}
                height="h-28 sm:h-40"
              />
            </motion.div>
          ))}
        </div>

        {/* Upcoming offices */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="rounded-2xl p-8"
          style={{
            background: "hsl(var(--card))",
            border: "1px solid hsl(var(--border))",
          }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-5 h-5" style={{ color: "hsl(358 73% 52%)" }} />
            <h3 className="font-heading font-bold text-lg text-foreground">
              {t("Bureaux à venir", "Upcoming Offices", "Kommende Büros", "مكاتب قادمة")}
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {upcomingOffices.map((office, i) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="rounded-2xl p-5 relative overflow-hidden bg-white hover:shadow-lg transition-all duration-300 group"
                style={{
                  border: "1px dashed rgba(220,53,69,0.4)",
                }}
              >
                <div className="flex flex-col items-center text-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3" style={{ background: "rgba(220,53,69,0.08)", color: "hsl(358 73% 52%)" }}>
                    {t(office.statusFr, office.statusEn, office.statusDe, office.statusAr)}
                  </span>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-foreground mb-1">{office.city}</h4>
                    <span className="text-xs font-subheading font-medium" style={{ color: "hsl(214 65% 52%)" }}>
                      {t(office.countryFr, office.countryEn, office.countryDe, office.countryAr)}
                    </span>
                  </div>
                </div>

                {/* Google Map pour Bureaux a venir */}
                <div
                  className="rounded-xl overflow-hidden h-24 sm:h-32 w-full grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none group-hover:pointer-events-auto"
                  style={{ border: "1px solid rgba(220,53,69,0.12)" }}
                >
                  <iframe
                    src={office.mapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Localisation Biex ${office.city}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
