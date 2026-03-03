import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Award, Handshake } from "lucide-react";

const partners = ["ACCA", "The Institute of Internal Auditors", "CNAM", "Project Management Institute"];
const certifications = [
  { name: "PMP", logoUrl: "https://icon.horse/icon/pmi.org" },
  { name: "PMP-ACP", logoUrl: "https://icon.horse/icon/pmi.org" },
  { name: "CIA", logoUrl: "https://icon.horse/icon/theiia.org" },
  { name: "DiplFR", logoUrl: "https://icon.horse/icon/accaglobal.com" },
  { name: "CICS", logoUrl: "https://icon.horse/icon/theiic.org" },
  { name: "Sage", logoUrl: "https://icon.horse/icon/sage.com" },
  { name: "SAP", logoUrl: "https://icon.horse/icon/sap.com" },
  { name: "FMVA", logoUrl: "https://icon.horse/icon/corporatefinanceinstitute.com" },
  { name: "CBCA", logoUrl: "https://icon.horse/icon/corporatefinanceinstitute.com" },
  { name: "FPAP", logoUrl: "https://icon.horse/icon/afponline.org" },
  { name: "CMSA", logoUrl: "https://icon.horse/icon/corporatefinanceinstitute.com" },
  { name: "LIBF", logoUrl: "https://icon.horse/icon/libf.ac.uk" },
];

export default function Partners() {
  const { t } = useLang();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-biex">
        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Handshake className="w-6 h-6" style={{ color: "hsl(358 73% 52%)" }} />
            <h2 className="font-heading font-bold text-2xl text-foreground">
              {t("Partenaires de formation", "Training Partners")}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {partners.map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="rounded-xl p-6 flex items-center justify-center text-center font-subheading font-semibold text-sm text-foreground card-hover shimmer"
                style={{
                  background: "hsl(var(--card))",
                  border: "1px solid rgba(220,53,69,0.12)",
                }}
              >
                {p}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Separator */}
        <div className="red-separator mb-16" />

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-6 h-6" style={{ color: "hsl(358 73% 52%)" }} />
            <h2 className="font-heading font-bold text-2xl text-foreground">
              {t("Nos Certifications", "Our Certifications")}
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.05 }}
                className="rounded-xl flex flex-col items-center justify-center p-4 bg-white hover:shadow-lg transition-all duration-300 group"
                style={{
                  border: "1px solid rgba(220,53,69,0.15)",
                }}
              >
                <div className="h-16 w-full flex items-center justify-center mb-3">
                  <img
                    src={cert.logoUrl}
                    alt={`Logo ${cert.name}`}
                    className="max-h-full max-w-full object-contain grayscale-[0.8] group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback text if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement?.classList.add('fallback-text');
                      if (target.parentElement) target.parentElement.innerHTML = `<span class="font-bold text-gray-400 opacity-60">${cert.name}</span>`;
                    }}
                  />
                </div>
                <span className="font-subheading text-xs font-semibold text-center mt-auto" style={{ color: "hsl(214 65% 48%)" }}>
                  {cert.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
