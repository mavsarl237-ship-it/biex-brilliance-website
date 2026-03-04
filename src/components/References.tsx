import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Building2 } from "lucide-react";

import ref01 from "@/assets/References/ref01.jpg";
import ref02 from "@/assets/References/ref02.jpg";
import ref03 from "@/assets/References/ref03.jpg";
import ref04 from "@/assets/References/ref04.jpg";
import ref05 from "@/assets/References/ref05.jpg";
import ref06 from "@/assets/References/ref06.jpg";
import ref07 from "@/assets/References/ref07.jpg";
import ref08 from "@/assets/References/ref08.jpg";
import ref09 from "@/assets/References/ref09.png";
import ref10 from "@/assets/References/ref10.png";
import ref11 from "@/assets/References/ref11.webp";
import refImages from "@/assets/References/images.png";
import refKia from "@/assets/References/new-kia-logo-trademark.jpg";
import refPlan from "@/assets/References/Logo_Plan-de-travail-1.png";

const references = [
    ref01, ref02, ref03, ref04, ref05, ref06, ref07, ref08,
    ref09, ref10, ref11, refImages, refKia, refPlan,
];

export default function References() {
    const { t } = useLang();
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section className="section-padding bg-muted/30 pattern-dots" ref={ref}>
            <div className="container-biex">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <span
                        className="font-subheading font-semibold text-sm uppercase tracking-[0.2em]"
                        style={{ color: "hsl(214 65% 52%)" }}
                    >
                        {t("Ils nous font confiance", "They trust us", "Sie vertrauen uns", "يثقون بنا")}
                    </span>
                    <h2 className="section-title mt-3 mb-4">
                        {t("Nos Références", "Our References", "Unsere Referenzen", "مراجعنا")}
                    </h2>
                    <div className="red-separator w-16 mx-auto mb-6" />
                    <p className="section-subtitle mx-auto text-justify sm:text-center">
                        {t(
                            "Des entreprises et institutions qui nous ont fait confiance pour les accompagner dans leurs projets.",
                            "Companies and institutions that have trusted us to support their projects.",
                            "Unternehmen und Institutionen, die uns ihr Vertrauen für ihre Projekte geschenkt haben.",
                            "شركات ومؤسسات وثقت بنا لدعم مشاريعها."
                        )}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-6"
                >
                    {references.map((logo, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.3 + i * 0.04 }}
                            className="rounded-xl flex items-center justify-center p-5 bg-white hover:shadow-lg transition-all duration-300 group aspect-square"
                            style={{
                                border: "1px solid rgba(220,53,69,0.1)",
                            }}
                        >
                            <img
                                src={logo}
                                alt={`Référence ${i + 1}`}
                                className="max-h-full max-w-full object-contain grayscale-[0.7] group-hover:grayscale-0 transition-all duration-500 opacity-75 group-hover:opacity-100 group-hover:scale-110"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
