import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { useLang } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SecurePdfViewer from "@/components/SecurePdfViewer";
import { FileText, Eye, ShieldCheck, Download, Ban } from "lucide-react";

// @ts-ignore
import ficheTechniquePdf from "@/assets/documents/FICHE TECHNIQUE DE BIEX.pdf";
// @ts-ignore
import etudeVoipPdf from "@/assets/documents/ÉTUDE DE FAISABILITÉ PROJET DE SMS ET VOIP .pdf";

const documents = [
    {
        id: "fiche-technique",
        titleFr: "Fiche Technique de BIEX",
        titleEn: "BIEX Technical Data Sheet",
        titleDe: "BIEX Technisches Datenblatt",
        titleAr: "ورقة بيانات BIEX الفنية",
        descFr: "Présentation détaillée des spécifications techniques et de l'architecture de BIEX.",
        descEn: "Detailed presentation of BIEX's technical specifications and architecture.",
        descDe: "Detaillierte Präsentation der technischen Spezifikationen und Architektur von BIEX.",
        descAr: "عرض مفصل للمواصفات الفنية وبنية BIEX.",
        file: ficheTechniquePdf,
        pages: 12,
    },
    {
        id: "etude-voip",
        titleFr: "Étude de Faisabilité: Projet de SMS et VOIP",
        titleEn: "Feasibility Study: SMS and VOIP Project",
        titleDe: "Machbarkeitsstudie: SMS- und VOIP-Projekt",
        titleAr: "دراسة جدوى: مشروع الرسائل القصيرة و VOIP",
        descFr: "Analyse approfondie de la viabilité technique et commerciale du déploiement SMS/VOIP.",
        descEn: "In-depth analysis of the technical and commercial viability of SMS/VOIP deployment.",
        descDe: "Eingehende Analyse der technischen und kommerziellen Machbarkeit der SMS/VOIP-Bereitstellung.",
        descAr: "تحليل متعمق للجدوى الفنية والتجارية لنشر الرسائل القصيرة/VOIP.",
        file: etudeVoipPdf,
        pages: 45, // Approximation, numPages will be handled by the viewer
    }
];

export default function DocumentationPage() {
    const { lang, t } = useLang();
    const { ref, isVisible } = useScrollAnimation();
    const [activeDoc, setActiveDoc] = useState<{ file: string; title: string } | null>(null);

    return (
        <Layout>
            <PageBanner
                title={t("Documentation", "Documentation", "Dokumentation", "تخصيص")}
                subtitle={t(
                    "Ressources et études techniques à consulter de manière sécurisée.",
                    "Resources and technical studies to consult securely.",
                    "Sicher aufrufende Ressourcen und technische Studien.",
                    "الموارد والدراسات الفنية للتشاور بشكل آمن."
                )}
            />

            <section className="section-padding bg-background pattern-grid" ref={ref}>
                <div className="container-biex">

                    {/* Security Notice */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="max-w-3xl mx-auto mb-16 p-4 rounded-xl flex items-start gap-4"
                        style={{
                            background: "rgba(59,130,220,0.05)",
                            border: "1px solid rgba(59,130,220,0.2)"
                        }}
                    >
                        <ShieldCheck className="w-8 h-8 shrink-0" style={{ color: "hsl(214 65% 52%)" }} />
                        <div>
                            <h3 className="font-heading font-bold text-lg mb-1" style={{ color: "hsl(220 45% 30%)" }}>
                                {t("Visionneuse Sécurisée", "Secure Viewer", "Sicherer Viewer", "عارض آمن")}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed text-justify">
                                {t(
                                    "Afin de protéger notre propriété intellectuelle, ces documents sont en lecture seule. Le téléchargement, l'impression et la copie de texte sont techniquement désactivés.",
                                    "To protect our intellectual property, these documents are read-only. Downloading, printing, and text copying are technically disabled.",
                                    "Um unser geistiges Eigentum zu schützen, sind diese Dokumente schreibgeschützt. Herunterladen, Drucken und Textkopieren sind technisch deaktiviert.",
                                    "لحماية ملكيتنا الفكرية، هذه المستندات للقراءة فقط. التنزيل والطباعة ونسخ النص معطلة تقنيًا."
                                )}
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {documents.map((doc, i) => (
                            <motion.div
                                key={doc.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="rounded-2xl p-6 sm:p-8 card-hover group relative overflow-hidden bg-white hover:shadow-xl transition-all duration-500 border border-border"
                            >
                                {/* Decorative background element */}
                                <div
                                    className="absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none"
                                    style={{ background: "hsl(214 65% 52%)" }}
                                />

                                <div className="flex items-start justify-between mb-6 relative z-10">
                                    <div
                                        className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                                        style={{ background: "linear-gradient(135deg, rgba(59,130,220,0.1), rgba(59,130,220,0.05))" }}
                                    >
                                        <FileText className="w-7 h-7" style={{ color: "hsl(214 65% 52%)" }} />
                                    </div>

                                    {/* Anti-download badge */}
                                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-50 text-red-600 text-xs font-bold font-subheading">
                                        <Ban className="w-3 h-3" />
                                        <Download className="w-3 h-3" />
                                    </div>
                                </div>

                                <h3 className="font-heading font-bold text-xl mb-3 text-foreground group-hover:text-biex-blue transition-colors relative z-10">
                                    {t(doc.titleFr, doc.titleEn, doc.titleDe, doc.titleAr)}
                                </h3>

                                <p className="text-muted-foreground text-sm font-body leading-relaxed mb-8 text-justify relative z-10">
                                    {t(doc.descFr, doc.descEn, doc.descDe, doc.descAr)}
                                </p>

                                <div className="relative z-10 mt-auto pt-6 border-t border-border/50 flex items-center justify-between">
                                    <span className="text-xs font-medium text-muted-foreground">
                                        PDF format
                                    </span>

                                    <button
                                        onClick={() => setActiveDoc({ file: doc.file, title: t(doc.titleFr, doc.titleEn, doc.titleDe, doc.titleAr) })}
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-subheading font-semibold text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_8px_20px_-6px_rgba(59,130,220,0.5)] active:scale-95"
                                        style={{ background: "linear-gradient(135deg, hsl(214 65% 55%), hsl(214 70% 42%))" }}
                                    >
                                        <Eye className="w-4 h-4" />
                                        {t("Consulter en ligne", "View Online", "Online ansehen", "عرض عبر الإنترنت")}
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PDF Viewer Modal */}
            {activeDoc && (
                <SecurePdfViewer
                    file={activeDoc.file}
                    title={activeDoc.title}
                    onClose={() => setActiveDoc(null)}
                />
            )}
        </Layout>
    );
}
