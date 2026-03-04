import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Award, Handshake } from "lucide-react";

import logoCnam from "@/assets/Partenaires de formation/Logo_cnam.gif";
import logoIntec from "@/assets/Partenaires de formation/PDFtoJPG.me-1.jpg";
import logoIia from "@/assets/Partenaires de formation/images.png";
import logoPmi from "@/assets/Partenaires de formation/project-management-institute.svg";

const partners = [
  { name: "CNAM", logo: logoCnam },
  { name: "ACCA", logo: logoIntec },
  { name: "The Institute of Internal Auditors", logo: logoIia },
  { name: "Project Management Institute", logo: logoPmi },
];
import certPmp from "@/assets/certifications/pmi-pmp.webp";
import certPmpAcp from "@/assets/certifications/pmi-acp-600px14274082391282612348.webp";
import certCia from "@/assets/certifications/images.png";
import certDiplFr from "@/assets/certifications/images.jpg";
import certCics from "@/assets/certifications/image.png";
import certSage from "@/assets/certifications/sage.jpg";
import certSap from "@/assets/certifications/SAP_2011_logo.svg.png";
import certFmva from "@/assets/certifications/fmva.png";
import certCbca from "@/assets/certifications/cbca.jpg";
import certFpap from "@/assets/certifications/1755056190971.jpg";
import certCmsa from "@/assets/certifications/1738539199052.jpg";
import certLibf from "@/assets/certifications/LIBF-black-002.png";

const certifications = [
  { name: "PMP", logo: certPmp },
  { name: "PMP-ACP", logo: certPmpAcp },
  { name: "CIA", logo: certCia },
  { name: "ACCA", logo: certDiplFr },
  { name: "CICS", logo: certCics },
  { name: "Sage", logo: certSage },
  { name: "SAP", logo: certSap },
  { name: "FMVA", logo: certFmva },
  { name: "CBCA", logo: certCbca },
  { name: "FPAP", logo: certFpap },
  { name: "CMSA", logo: certCmsa },
  { name: "LIBF", logo: certLibf },
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
              {t("Partenaires de formation", "Training Partners", "Schulungspartner", "شركاء التدريب")}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="rounded-xl p-6 flex flex-col items-center justify-center text-center card-hover shimmer group bg-white hover:shadow-lg transition-all duration-300"
                style={{
                  border: "1px solid rgba(220,53,69,0.12)",
                }}
              >
                <div className="h-20 w-full flex items-center justify-center mb-4">
                  <img
                    src={p.logo}
                    alt={`Logo ${p.name}`}
                    className="max-h-full max-w-full object-contain grayscale-[0.6] group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100 group-hover:scale-110"
                  />
                </div>
                <span className="font-subheading text-xs font-semibold text-center mt-auto" style={{ color: "hsl(214 65% 48%)" }}>
                  {p.name}
                </span>
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
              {t("Nos Certifications", "Our Certifications", "Unsere Zertifizierungen", "شهاداتنا")}
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
                    src={cert.logo}
                    alt={`Logo ${cert.name}`}
                    className="max-h-full max-w-full object-contain grayscale-[0.8] group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100 group-hover:scale-110"
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
