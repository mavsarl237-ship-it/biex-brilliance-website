import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";
import team5 from "@/assets/team-5.jpg";

const team = [
  {
    name: "NOUMBA BAYIHA II Sidoine Charlie",
    photo: team1,
    roleFr: "Fondateur / Associé - Gérant",
    roleEn: "Founder / Managing Partner",
    roleDe: "Gründer / Geschäftsführender Gesellschafter",
    roleAr: "المؤسس / الشريك المدير",
    qualFr: [
      "Expert-Comptable agréé | Membre Fellow ACCA, Royaume-Uni",
      "Membre ICAG (Institut des Experts-Comptables, Ghana)",
      "Expert en IFRS & US GAAP | Processus de reporting",
      "Auditeur financier, Risques & Conformité | Forensic | ERP",
      "Expert analyste financier & des états financiers | Investigateur, Banque",
      "Chef de projets",
    ],
    qualEn: [
      "Chartered Accountant | ACCA Fellow member, UK",
      "ICAG Member (Institute of Chartered Accountants, Ghana)",
      "Expert in IFRS & US GAAP | Reporting Processes",
      "Financial Auditor, Risk & Compliance | Forensic | ERP",
      "Financial & Statement Analyst Expert | Investigator, Banking",
      "Projects Manager",
    ],
    qualDe: [
      "Wirtschaftsprüfer | ACCA Fellow-Mitglied, Vereinigtes Königreich",
      "ICAG-Mitglied (Institut der Wirtschaftsprüfer, Ghana)",
      "Experte für IFRS & US GAAP | Berichterstattungsprozesse",
      "Finanzprüfer, Risiko & Compliance | Forensik | ERP",
      "Experte für Finanz- & Bilanzanalyse | Ermittler, Bankwesen",
      "Projektmanager",
    ],
    qualAr: [
      "محاسب قانوني معتمد | عضو زميل ACCA، المملكة المتحدة",
      "عضو ICAG (معهد المحاسبين القانونيين، غانا)",
      "خبير في IFRS و US GAAP | عمليات إعداد التقارير",
      "مدقق مالي، المخاطر والامتثال | التدقيق الجنائي | ERP",
      "خبير تحليل مالي وتحليل القوائم المالية | محقق، القطاع المصرفي",
      "مدير مشاريع",
    ],
  },
  {
    name: "MAGNAN AWONO ATEMENGUE Bertrand",
    photo: team2,
    roleFr: "Manager - Associé",
    roleEn: "Manager - Partner",
    roleDe: "Manager - Partner",
    roleAr: "مدير - شريك",
    qualFr: [
      "Expert en Audit, évaluation, fiscalité",
      "M.Sc - Audit & Contrôle - UCAC",
      "Certificat int'l audit légal des comptes - CNAM INTEC",
    ],
    qualEn: [
      "Expert in Audit, Valuation, Taxation",
      "M.Sc - Audit & Control - UCAC",
      "International Certificate in Statutory Audit - CNAM INTEC",
    ],
    qualDe: [
      "Experte für Audit, Bewertung, Steuerwesen",
      "M.Sc - Audit & Kontrolle - UCAC",
      "Internationales Zertifikat in gesetzlicher Abschlussprüfung - CNAM INTEC",
    ],
    qualAr: [
      "خبير في التدقيق والتقييم والضرائب",
      "ماجستير - التدقيق والرقابة - UCAC",
      "شهادة دولية في التدقيق القانوني للحسابات - CNAM INTEC",
    ],
  },
  {
    name: "AYANGMA Stanislas Yannick Richard",
    photo: team3,
    roleFr: "Manager - Associé",
    roleEn: "Manager - Partner",
    roleDe: "Manager - Partner",
    roleAr: "مدير - شريك",
    qualFr: [
      "Expert en élaboration et évaluation de projets",
      "Master en Analyse des projets - Université Rennes I",
      "DESS en Analyse et évaluation des projets - U. Yde II",
      "Maîtrise, Économie de gestion - UCAC",
    ],
    qualEn: [
      "Expert in Project Design and Evaluation",
      "Master's in Project Analysis - University of Rennes I",
      "Postgraduate Diploma in Project Analysis & Evaluation - U. Yde II",
      "Bachelor's in Management Economics - UCAC",
    ],
    qualDe: [
      "Experte für Projektentwicklung und -bewertung",
      "Master in Projektanalyse - Universität Rennes I",
      "Aufbaustudium in Projektanalyse & -bewertung - U. Yde II",
      "Bachelor in Wirtschaftsmanagement - UCAC",
    ],
    qualAr: [
      "خبير في إعداد وتقييم المشاريع",
      "ماجستير في تحليل المشاريع - جامعة رين الأولى",
      "دبلوم دراسات عليا في تحليل وتقييم المشاريع - جامعة ياوندي الثانية",
      "بكالوريوس في اقتصاد الإدارة - UCAC",
    ],
  },
  {
    name: "BALEP BANGMBE Arnold",
    photo: team4,
    roleFr: "Manager - Associé",
    roleEn: "Manager - Partner",
    roleDe: "Manager - Partner",
    roleAr: "مدير - شريك",
    qualFr: [
      "Expert en élaboration, suivi, évaluation des projets de développement - AFD",
      "Spécialiste DD & RSE",
      "Accompagnement entrepreneurial",
    ],
    qualEn: [
      "Expert in Development Project Design, Monitoring & Evaluation - AFD",
      "Sustainable Development & CSR Specialist",
      "Entrepreneurial Support",
    ],
    qualDe: [
      "Experte für Entwicklungsprojekte: Planung, Überwachung & Bewertung - AFD",
      "Spezialist für nachhaltige Entwicklung & CSR",
      "Unternehmerische Begleitung",
    ],
    qualAr: [
      "خبير في إعداد ومتابعة وتقييم مشاريع التنمية - AFD",
      "متخصص في التنمية المستدامة والمسؤولية الاجتماعية",
      "مرافقة ريادة الأعمال",
    ],
  },
  {
    name: "MAVOUTIO Sulamithe Laure",
    photo: team5,
    roleFr: "Associée",
    roleEn: "Partner",
    roleDe: "Partnerin",
    roleAr: "شريكة",
    qualFr: [
      "Juriste - Procédurière",
      "Spécialiste RH",
    ],
    qualEn: [
      "Legal Counsel - Procedural Specialist",
      "HR Specialist",
    ],
    qualDe: [
      "Juristin - Verfahrensspezialistin",
      "HR-Spezialistin",
    ],
    qualAr: [
      "مستشارة قانونية - متخصصة في الإجراءات",
      "متخصصة في الموارد البشرية",
    ],
  },
];

export default function TeamSection() {
  const { lang, t } = useLang();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="team" className="section-padding bg-background pattern-dots" ref={ref}>
      <div className="container-biex">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="font-subheading font-semibold text-sm uppercase tracking-[0.2em]" style={{ color: "hsl(214 65% 52%)" }}>
            {t("Notre équipe", "Our team", "Unser Team", "فريقنا")}
          </span>
          <h2 className="section-title mt-3 mb-4">
            {t("Nos principaux intervenants", "Our Key Team Members", "Unsere wichtigsten Mitarbeiter", "أعضاء فريقنا الرئيسيون")}
          </h2>
          <div className="red-separator w-16 mx-auto mb-6" />
          <p className="section-subtitle mx-auto">
            {lang === "fr" ? (
              <>Une équipe d'<strong className="text-foreground">experts pluridisciplinaires</strong> au service de votre <strong className="text-foreground">réussite</strong>.</>
            ) : lang === "de" ? (
              <>Ein Team von <strong className="text-foreground">multidisziplinären Experten</strong> für Ihren <strong className="text-foreground">Erfolg</strong>.</>
            ) : lang === "ar" ? (
              <>فريق من <strong className="text-foreground">الخبراء متعددي التخصصات</strong> في خدمة <strong className="text-foreground">نجاحكم</strong>.</>
            ) : (
              <>A <strong className="text-foreground">multidisciplinary team</strong> of experts dedicated to your <strong className="text-foreground">success</strong>.</>
            )}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => {
            const quals = lang === "fr" ? member.qualFr : lang === "de" ? member.qualDe : lang === "ar" ? member.qualAr : member.qualEn;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="rounded-2xl overflow-hidden card-hover group blue-border-top"
                style={{
                  background: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                }}
              >
                <div className="relative h-60 sm:h-80 overflow-hidden bg-muted">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(to top, rgba(10,22,40,0.8) 0%, rgba(10,22,40,0.2) 40%, transparent 100%)",
                    }}
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(to top, rgba(59,130,220,0.15) 0%, transparent 50%)",
                    }}
                  />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span
                      className="inline-block text-xs font-subheading font-semibold px-4 py-1.5 rounded-full text-white"
                      style={{
                        background: "linear-gradient(135deg, hsl(214 65% 55%), hsl(214 70% 42%))",
                      }}
                    >
                      {t(member.roleFr, member.roleEn, member.roleDe, member.roleAr)}
                    </span>
                  </div>
                </div>
                <div className="p-6 text-center sm:text-left">
                  <h3 className="font-heading font-bold text-lg mb-3 text-foreground">{member.name}</h3>
                  <ul className="space-y-1.5">
                    {quals.map((q, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span
                          className="w-1 h-1 rounded-full mt-2 shrink-0"
                          style={{ background: "hsl(214 65% 52%)" }}
                        />
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
