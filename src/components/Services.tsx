import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  ClipboardCheck, Building2, ShieldCheck, BookOpen, Briefcase, Users,
  Calculator, Monitor, Scale, HeartHandshake, BarChart3, FileSearch,
  GraduationCap, UserPlus, Award, Rocket, ChevronDown, FileText,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: ClipboardCheck,
    titleFr: "Audit et Évaluation", titleEn: "Audit & Evaluation", titleDe: "Audit & Bewertung", titleAr: "التدقيق والتقييم",
    descFr: "Commissariat aux comptes, audit comptable et financier, audit interne, opérationnel, fiscal, stratégique, RSE, forensic et des systèmes d'information.",
    descEn: "Statutory audit, financial & accounting audit, internal audit, operational, tax, strategic, CSR, forensic and IT systems audit.",
    descDe: "Abschlussprüfung, Finanz- und Buchhaltungsprüfung, interne Revision, Betriebs-, Steuer-, Strategie-, CSR-, Forensik- und IT-Systemprüfung.",
    descAr: "تدقيق قانوني، تدقيق مالي ومحاسبي، تدقيق داخلي، تشغيلي، ضريبي، استراتيجي، مسؤولية اجتماعية، تدقيق جنائي ونظم المعلومات.",
    detailsFr: ["Commissariat aux comptes", "Audit comptable et financier (légal)", "Audit interne et opérationnel", "Audit fiscal et stratégique", "Audit RSE / extra-financier", "Audit forensic (lutte contre la fraude)", "Audit des SI", "Certification des comptes annuels", "Diagnostic financier et analyse des risques"],
    detailsEn: ["Statutory audit", "Financial & accounting audit", "Internal & operational audit", "Tax & strategic audit", "CSR / ESG audit", "Forensic audit (fraud prevention)", "IT systems audit", "Annual accounts certification", "Financial diagnosis & risk analysis"],
    detailsDe: ["Abschlussprüfung", "Finanz- und Buchhaltungsprüfung", "Interne und operative Prüfung", "Steuer- und Strategieprüfung", "CSR / ESG Prüfung", "Forensische Prüfung (Betrugsbekämpfung)", "IT-Systemprüfung", "Jahresabschluss-Zertifizierung", "Finanzdiagnose und Risikoanalyse"],
    detailsAr: ["تدقيق قانوني", "تدقيق مالي ومحاسبي", "تدقيق داخلي وتشغيلي", "تدقيق ضريبي واستراتيجي", "تدقيق المسؤولية الاجتماعية", "تدقيق جنائي (مكافحة الاحتيال)", "تدقيق نظم المعلومات", "اعتماد الحسابات السنوية", "التشخيص المالي وتحليل المخاطر"],
  },
  {
    icon: Building2,
    titleFr: "Restructuration d'entreprise", titleEn: "Corporate Restructuring", titleDe: "Unternehmensrestrukturierung", titleAr: "إعادة هيكلة الشركات",
    descFr: "Due diligence, évaluation d'entreprises, plans d'affaires, fusions-acquisitions, privatisation et liquidation.",
    descEn: "Due diligence, business valuation, business plans, mergers & acquisitions, privatization and liquidation.",
    descDe: "Due Diligence, Unternehmensbewertung, Geschäftspläne, Fusionen & Übernahmen, Privatisierung und Liquidation.",
    descAr: "العناية الواجبة، تقييم الشركات، خطط الأعمال، الاندماجات والاستحواذات، الخصخصة والتصفية.",
    detailsFr: ["Due diligence - Évaluation d'entreprises", "Plans d'affaires - Fusions et acquisitions", "Restructuration d'entreprises", "Privatisation - Liquidation"],
    detailsEn: ["Due diligence - Business valuation", "Business plans - Mergers & acquisitions", "Corporate restructuring", "Privatization - Liquidation"],
    detailsDe: ["Due Diligence - Unternehmensbewertung", "Geschäftspläne - Fusionen & Übernahmen", "Unternehmensrestrukturierung", "Privatisierung - Liquidation"],
    detailsAr: ["العناية الواجبة - تقييم الشركات", "خطط الأعمال - الاندماجات والاستحواذات", "إعادة هيكلة الشركات", "الخصخصة - التصفية"],
  },
  {
    icon: ShieldCheck,
    titleFr: "Audit Organisationnel et Qualité", titleEn: "Organizational & Quality Audit", titleDe: "Organisations- & Qualitätsaudit", titleAr: "التدقيق التنظيمي والجودة",
    descFr: "Évaluation des processus internes, efficacité opérationnelle, systèmes de management de la qualité (ISO).",
    descEn: "Internal process assessment, operational efficiency, quality management systems (ISO).",
    descDe: "Bewertung interner Prozesse, operative Effizienz, Qualitätsmanagementsysteme (ISO).",
    descAr: "تقييم العمليات الداخلية، الكفاءة التشغيلية، أنظمة إدارة الجودة (ISO).",
    detailsFr: ["Audit des processus et procédures internes", "Évaluation de l'efficacité opérationnelle", "Mise en place de systèmes de management de la qualité"],
    detailsEn: ["Internal process & procedure audit", "Operational efficiency evaluation", "Quality management system implementation"],
    detailsDe: ["Prüfung interner Prozesse und Verfahren", "Bewertung der operativen Effizienz", "Implementierung von Qualitätsmanagementsystemen"],
    detailsAr: ["تدقيق العمليات والإجراءات الداخلية", "تقييم الكفاءة التشغيلية", "تطبيق أنظمة إدارة الجودة"],
  },
  {
    icon: BookOpen,
    titleFr: "Comptabilité", titleEn: "Accounting", titleDe: "Buchhaltung", titleAr: "المحاسبة",
    descFr: "Organisation et tenue des comptes, budgets prévisionnels, consolidation, normes OHADA, IFRS, US GAAP.",
    descEn: "Account organization & management, budgets, consolidation, OHADA, IFRS, US GAAP standards.",
    descDe: "Kontenorganisation und -führung, Budgets, Konsolidierung, OHADA-, IFRS-, US-GAAP-Standards.",
    descAr: "تنظيم وإدارة الحسابات، الميزانيات التقديرية، التوحيد، معايير OHADA وIFRS وUS GAAP.",
    detailsFr: ["Organisation, tenue et consolidation des comptes", "Budgets prévisionnels", "Normes OHADA, IFRS, US GAAP", "Inventaires physiques", "Traduction des états financiers"],
    detailsEn: ["Account organization & consolidation", "Forecasting budgets", "OHADA, IFRS, US GAAP standards", "Physical inventories", "Financial statement translation"],
    detailsDe: ["Kontenorganisation und Konsolidierung", "Budgetplanung", "OHADA-, IFRS-, US-GAAP-Standards", "Physische Inventuren", "Übersetzung von Jahresabschlüssen"],
    detailsAr: ["تنظيم وتوحيد الحسابات", "الميزانيات التقديرية", "معايير OHADA وIFRS وUS GAAP", "الجرد المادي", "ترجمة القوائم المالية"],
  },
  {
    icon: Briefcase,
    titleFr: "Conseils en gestion", titleEn: "Management Consulting", titleDe: "Managementberatung", titleAr: "استشارات إدارية",
    descFr: "Business plans, tableaux de bord, investigation de fraudes, risk management, stratégie d'entreprise.",
    descEn: "Business plans, dashboards, fraud investigation, risk management, business strategy.",
    descDe: "Geschäftspläne, Dashboards, Betrugsermittlung, Risikomanagement, Unternehmensstrategie.",
    descAr: "خطط الأعمال، لوحات المعلومات، التحقيق في الاحتيال، إدارة المخاطر، استراتيجية الأعمال.",
    detailsFr: ["Business plans et bilans prévisionnels", "Tableaux de bords et KPI", "Investigation de fraudes", "Risk management", "Stratégie marketing et GRC"],
    detailsEn: ["Business plans & forecasts", "Dashboards & KPIs", "Fraud investigation", "Risk management", "Marketing strategy & CRM"],
    detailsDe: ["Geschäftspläne und Prognosen", "Dashboards und KPIs", "Betrugsermittlung", "Risikomanagement", "Marketingstrategie und CRM"],
    detailsAr: ["خطط الأعمال والتوقعات", "لوحات المعلومات ومؤشرات الأداء", "التحقيق في الاحتيال", "إدارة المخاطر", "استراتيجية التسويق وإدارة العلاقات"],
  },
  {
    icon: Users,
    titleFr: "Administration du personnel & Paie", titleEn: "HR Administration & Payroll", titleDe: "Personalverwaltung & Gehaltsabrechnung", titleAr: "إدارة شؤون الموظفين والرواتب",
    descFr: "Gestion administrative, élaboration des bulletins de paie, mise en conformité RH.",
    descEn: "Administrative management, payroll processing, HR compliance.",
    descDe: "Verwaltungsmanagement, Gehaltsabrechnung, HR-Compliance.",
    descAr: "الإدارة الإدارية، معالجة الرواتب، الامتثال لشؤون الموارد البشرية.",
    detailsFr: ["Gestion administrative du personnel", "Élaboration et contrôle des bulletins de paie", "Mise en conformité RH", "Procédures et outils RH"],
    detailsEn: ["Personnel administrative management", "Payroll processing & control", "HR compliance", "HR procedures & tools"],
    detailsDe: ["Personalverwaltung", "Gehaltsabrechnung und Kontrolle", "HR-Compliance", "HR-Verfahren und -Werkzeuge"],
    detailsAr: ["إدارة شؤون الموظفين", "إعداد ومراقبة كشوف الرواتب", "الامتثال لشؤون الموارد البشرية", "إجراءات وأدوات الموارد البشرية"],
  },
  {
    icon: Calculator,
    titleFr: "Fiscalité", titleEn: "Taxation", titleDe: "Steuerwesen", titleAr: "الضرائب",
    descFr: "Optimisation fiscale, déclarations sociales et fiscales, assistance en contrôle et redressements.",
    descEn: "Tax optimization, social & tax declarations, assistance with audits and adjustments.",
    descDe: "Steueroptimierung, Sozial- und Steuererklärungen, Unterstützung bei Prüfungen und Anpassungen.",
    descAr: "التحسين الضريبي، الإقرارات الاجتماعية والضريبية، المساعدة في المراجعات والتعديلات.",
    detailsFr: ["Optimisation fiscale réglementaire", "Déclarations sociales et fiscales", "Assistance en contrôle et redressements", "Conseil en obligations légales"],
    detailsEn: ["Regulatory tax optimization", "Social & tax declarations", "Audit assistance & adjustments", "Legal obligations advisory"],
    detailsDe: ["Gesetzliche Steueroptimierung", "Sozial- und Steuererklärungen", "Prüfungsunterstützung und Anpassungen", "Beratung zu gesetzlichen Pflichten"],
    detailsAr: ["التحسين الضريبي التنظيمي", "الإقرارات الاجتماعية والضريبية", "المساعدة في المراجعات والتعديلات", "الاستشارات في الالتزامات القانونية"],
  },
  {
    icon: Monitor,
    titleFr: "Digitalisation des processus", titleEn: "Process Digitalization", titleDe: "Prozessdigitalisierung", titleAr: "رقمنة العمليات",
    descFr: "Analyse et optimisation des processus, solutions digitales d'automatisation, amélioration de la productivité.",
    descEn: "Process analysis & optimization, digital automation solutions, productivity improvement.",
    descDe: "Prozessanalyse und -optimierung, digitale Automatisierungslösungen, Produktivitätssteigerung.",
    descAr: "تحليل وتحسين العمليات، حلول الأتمتة الرقمية، تحسين الإنتاجية.",
    detailsFr: ["Analyse et optimisation des processus métier", "Solutions digitales d'automatisation", "Amélioration de la productivité et réduction des coûts"],
    detailsEn: ["Business process analysis & optimization", "Digital automation solutions", "Productivity improvement & cost reduction"],
    detailsDe: ["Geschäftsprozessanalyse und -optimierung", "Digitale Automatisierungslösungen", "Produktivitätssteigerung und Kostenreduzierung"],
    detailsAr: ["تحليل وتحسين عمليات الأعمال", "حلول الأتمتة الرقمية", "تحسين الإنتاجية وخفض التكاليف"],
  },
  {
    icon: Scale,
    titleFr: "Juridique", titleEn: "Legal", titleDe: "Recht", titleAr: "القانونية",
    descFr: "Création d'entreprise, droit des affaires, audit juridique et social, planification fiscale.",
    descEn: "Business formation, business law, legal & social audit, tax planning.",
    descDe: "Unternehmensgründung, Wirtschaftsrecht, Rechts- und Sozialprüfung, Steuerplanung.",
    descAr: "تأسيس الشركات، قانون الأعمال، التدقيق القانوني والاجتماعي، التخطيط الضريبي.",
    detailsFr: ["Formalités de création d'entreprise", "Conseil en droit des affaires", "Audit juridique et social", "Secrétariat juridique", "Assistance au contentieux"],
    detailsEn: ["Business formation formalities", "Business law advisory", "Legal & social audit", "Legal secretariat", "Litigation assistance"],
    detailsDe: ["Unternehmensgründungsformalitäten", "Wirtschaftsrechtsberatung", "Rechts- und Sozialprüfung", "Rechtssekretariat", "Prozessunterstützung"],
    detailsAr: ["إجراءات تأسيس الشركات", "استشارات قانون الأعمال", "التدقيق القانوني والاجتماعي", "السكرتارية القانونية", "المساعدة في النزاعات"],
  },
  {
    icon: HeartHandshake,
    titleFr: "Sécurité sociale & Retraite", titleEn: "Social Security & Retirement", titleDe: "Sozialversicherung & Rente", titleAr: "الضمان الاجتماعي والتقاعد",
    descFr: "Conseil CNPS, constitution de dossiers retraite, simulation et optimisation des droits sociaux.",
    descEn: "CNPS advisory, retirement file management, social benefits simulation & optimization.",
    descDe: "CNPS-Beratung, Rentenantragsmanagement, Simulation und Optimierung der Sozialleistungen.",
    descAr: "استشارات CNPS، إدارة ملفات التقاعد، محاكاة وتحسين الحقوق الاجتماعية.",
    detailsFr: ["Conseil CNPS", "Constitution et suivi de dossiers retraite", "Simulation et optimisation des droits sociaux"],
    detailsEn: ["CNPS advisory", "Retirement file management", "Social benefits simulation & optimization"],
    detailsDe: ["CNPS-Beratung", "Rentenantragsmanagement und -verfolgung", "Simulation und Optimierung der Sozialleistungen"],
    detailsAr: ["استشارات CNPS", "إعداد ومتابعة ملفات التقاعد", "محاكاة وتحسين الحقوق الاجتماعية"],
  },
  {
    icon: BarChart3,
    titleFr: "Performance commerciale et financière", titleEn: "Commercial & Financial Performance", titleDe: "Kommerzielle & finanzielle Leistung", titleAr: "الأداء التجاري والمالي",
    descFr: "Analyse des performances commerciales, optimisation des processus, gestion financière.",
    descEn: "Commercial performance analysis, process optimization, financial management.",
    descDe: "Analyse der kommerziellen Leistung, Prozessoptimierung, Finanzmanagement.",
    descAr: "تحليل الأداء التجاري، تحسين العمليات، الإدارة المالية.",
    detailsFr: ["Analyse des performances commerciales", "Optimisation des processus de vente", "Amélioration de la gestion financière"],
    detailsEn: ["Commercial performance analysis", "Sales process optimization", "Financial management improvement"],
    detailsDe: ["Analyse der kommerziellen Leistung", "Verkaufsprozessoptimierung", "Verbesserung des Finanzmanagements"],
    detailsAr: ["تحليل الأداء التجاري", "تحسين عمليات البيع", "تحسين الإدارة المالية"],
  },
  {
    icon: FileSearch,
    titleFr: "Évaluation d'entreprises & projets", titleEn: "Business & Project Evaluation", titleDe: "Unternehmens- & Projektbewertung", titleAr: "تقييم الشركات والمشاريع",
    descFr: "Évaluation de valeur, faisabilité, études d'impact, montage de dossiers de financement.",
    descEn: "Business valuation, feasibility, impact studies, financing applications.",
    descDe: "Unternehmensbewertung, Machbarkeitsstudien, Wirkungsanalysen, Finanzierungsanträge.",
    descAr: "تقييم القيمة، دراسات الجدوى، دراسات الأثر، إعداد ملفات التمويل.",
    detailsFr: ["Évaluation de la valeur d'entreprise", "Études de faisabilité et d'impact", "Suivi-évaluation de projets", "Montage de dossiers de financement"],
    detailsEn: ["Business valuation", "Feasibility & impact studies", "Project monitoring & evaluation", "Financing file preparation"],
    detailsDe: ["Unternehmensbewertung", "Machbarkeits- und Wirkungsstudien", "Projektüberwachung und -bewertung", "Erstellung von Finanzierungsunterlagen"],
    detailsAr: ["تقييم قيمة الشركة", "دراسات الجدوى والأثر", "متابعة وتقييم المشاريع", "إعداد ملفات التمويل"],
  },
  {
    icon: GraduationCap,
    titleFr: "Formation & Renforcement des capacités", titleEn: "Training & Capacity Building", titleDe: "Schulung & Kapazitätsaufbau", titleAr: "التدريب وبناء القدرات",
    descFr: "Formations en management, développement des compétences, séminaires professionnels.",
    descEn: "Management training, skills development, professional seminars.",
    descDe: "Managementtraining, Kompetenzentwicklung, professionelle Seminare.",
    descAr: "تدريب إداري، تطوير المهارات، ندوات مهنية.",
    detailsFr: ["Formations en management d'entreprise", "Développement des compétences", "Séminaires de formation professionnels", "Services d'archivage électronique"],
    detailsEn: ["Business management training", "Skills development", "Professional training seminars", "Electronic archiving services"],
    detailsDe: ["Unternehmensmanagement-Training", "Kompetenzentwicklung", "Professionelle Schulungsseminare", "Elektronische Archivierungsdienste"],
    detailsAr: ["تدريب إدارة الأعمال", "تطوير المهارات", "ندوات التدريب المهني", "خدمات الأرشفة الإلكترونية"],
  },
  {
    icon: UserPlus,
    titleFr: "Mise à disposition du personnel", titleEn: "Staff Outsourcing", titleDe: "Personalbereitstellung", titleAr: "توفير الموظفين",
    descFr: "Recrutement, intérim professionnel, délégation de compétences spécialisées.",
    descEn: "Recruitment, professional staffing, specialized skills delegation.",
    descDe: "Rekrutierung, professionelle Zeitarbeit, Delegation spezialisierter Kompetenzen.",
    descAr: "التوظيف، العمالة المؤقتة المهنية، تفويض الكفاءات المتخصصة.",
    detailsFr: ["Recrutement", "Intérim professionnel", "Délégation de compétences spécialisée"],
    detailsEn: ["Recruitment", "Professional staffing", "Specialized skills delegation"],
    detailsDe: ["Rekrutierung", "Professionelle Zeitarbeit", "Spezialisierte Kompetenzdelegation"],
    detailsAr: ["التوظيف", "العمالة المؤقتة المهنية", "تفويض الكفاءات المتخصصة"],
  },
  {
    icon: Award,
    titleFr: "Coaching", titleEn: "Coaching", titleDe: "Coaching", titleAr: "التدريب المهني",
    descFr: "Coaching organisationnel, administratif, de dirigeants et cadres.",
    descEn: "Organizational, administrative, executive and management coaching.",
    descDe: "Organisations-, Verwaltungs-, Führungs- und Management-Coaching.",
    descAr: "تدريب تنظيمي، إداري، وتدريب المديرين التنفيذيين والإطارات.",
    detailsFr: ["Coaching organisationnel et administratif", "Coaching de dirigeants et cadres"],
    detailsEn: ["Organizational & administrative coaching", "Executive & management coaching"],
    detailsDe: ["Organisations- und Verwaltungscoaching", "Führungskräfte- und Managementcoaching"],
    detailsAr: ["التدريب التنظيمي والإداري", "تدريب المديرين التنفيذيين والإطارات"],
  },
  {
    icon: Rocket,
    titleFr: "Stratégies de croissance", titleEn: "Growth Strategies", titleDe: "Wachstumsstrategien", titleAr: "استراتيجيات النمو",
    descFr: "Stratégie d'entreprise, analyse de marché, planification stratégique, diagnostic et transformation.",
    descEn: "Business strategy, market analysis, strategic planning, diagnostics and transformation.",
    descDe: "Unternehmensstrategie, Marktanalyse, strategische Planung, Diagnose und Transformation.",
    descAr: "استراتيجية الأعمال، تحليل السوق، التخطيط الاستراتيجي، التشخيص والتحول.",
    detailsFr: ["Actualisation de la stratégie d'entreprise", "Analyse de marché et positionnement", "Planification stratégique", "Structuration et transformation"],
    detailsEn: ["Business strategy update", "Market analysis & positioning", "Strategic planning", "Structuring & transformation"],
    detailsDe: ["Aktualisierung der Unternehmensstrategie", "Marktanalyse und Positionierung", "Strategische Planung", "Strukturierung und Transformation"],
    detailsAr: ["تحديث استراتيجية الشركة", "تحليل السوق والتموضع", "التخطيط الاستراتيجي", "الهيكلة والتحول"],
  },
];

export default function Services() {
  const { lang, t } = useLang();
  const { ref, isVisible } = useScrollAnimation();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="services" className="section-padding pattern-grid" style={{ background: "hsl(220 25% 95%)" }} ref={ref}>
      <div className="container-biex">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="font-subheading font-semibold text-sm uppercase tracking-[0.2em]" style={{ color: "hsl(214 65% 52%)" }}>
            {t("Nos expertises", "Our expertise", "Unsere Fachgebiete", "خبراتنا")}
          </span>
          <h2 className="section-title mt-3 mb-4">
            {t("Domaines d'intervention stratégiques", "Strategic Areas of Expertise", "Strategische Fachbereiche", "مجالات التدخل الاستراتيجية")}
          </h2>
          <div className="red-separator w-16 mx-auto mb-6" />
          <p className="section-subtitle mx-auto text-justify sm:text-center">
            {lang === "fr" ? (
              <>Un accompagnement complet et sur mesure pour <strong className="text-foreground">sécuriser</strong> et <strong className="text-foreground">développer vos activités</strong>.</>
            ) : lang === "de" ? (
              <>Umfassende, maßgeschneiderte Begleitung zur <strong className="text-foreground">Sicherung</strong> und <strong className="text-foreground">Entwicklung Ihrer Aktivitäten</strong>.</>
            ) : lang === "ar" ? (
              <>دعم شامل ومخصص <strong className="text-foreground">لتأمين</strong> و<strong className="text-foreground">تطوير أنشطتكم</strong>.</>
            ) : (
              <>Comprehensive, tailored support to <strong className="text-foreground">secure</strong> and <strong className="text-foreground">grow your business</strong>.</>
            )}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.03 }}
              className="rounded-xl cursor-pointer group overflow-hidden card-hover"
              style={{
                background: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
              }}
              onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
            >
              <div className="p-6 relative">
                {/* Service number */}
                <span className="absolute top-4 right-4 font-heading text-3xl font-bold opacity-[0.04]">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-500"
                  style={{
                    background: expandedIndex === i
                      ? "linear-gradient(135deg, hsl(214 65% 55%), hsl(214 70% 42%))"
                      : "rgba(59,130,220,0.08)",
                  }}
                >
                  <service.icon
                    className="w-6 h-6 transition-colors duration-300"
                    style={{
                      color: expandedIndex === i ? "#fff" : "hsl(358 73% 52%)",
                    }}
                  />
                </div>
                <h3 className="font-heading font-bold text-base mb-2 text-foreground group-hover:text-biex-blue transition-colors">
                  {t(service.titleFr, service.titleEn, service.titleDe, service.titleAr)}
                </h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed text-justify">
                  {t(service.descFr, service.descEn, service.descDe, service.descAr)}
                </p>

                {/* Expand indicator */}
                <div className="flex items-center justify-end mt-3">
                  <ChevronDown
                    className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${expandedIndex === i ? "rotate-180" : ""
                      }`}
                  />
                </div>
              </div>

              <AnimatePresence>
                {expandedIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 pt-4 overflow-hidden"
                    style={{
                      borderTop: "1px solid rgba(220,53,69,0.1)",
                      background: "rgba(59,130,220,0.02)",
                    }}
                  >
                    <ul className="space-y-2 mb-4">
                      {(t(
                        service.detailsFr.join("||"),
                        service.detailsEn.join("||"),
                        service.detailsDe.join("||"),
                        service.detailsAr.join("||")
                      )).split("||").map((detail, j) => (
                        <li key={j} className="text-sm text-muted-foreground flex items-start gap-2.5">
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                            style={{ background: "hsl(214 65% 52%)" }}
                          />
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={`/contact?service=${encodeURIComponent(t(service.titleFr, service.titleEn, service.titleDe, service.titleAr))}`}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-subheading font-semibold text-white transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
                      style={{
                        background: "linear-gradient(135deg, hsl(214 65% 55%), hsl(214 70% 42%))",
                      }}
                    >
                      <FileText className="w-4 h-4" />
                      {t("Demander un devis", "Request a quote", "Angebot anfordern", "طلب عرض أسعار")}
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bottom blue line on hover */}
              <div
                className="h-[2px] w-0 group-hover:w-full transition-all duration-500"
                style={{
                  background: "linear-gradient(90deg, hsl(358 73% 52%), hsl(358 73% 42%))",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
