import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  ClipboardCheck, Building2, ShieldCheck, BookOpen, Briefcase, Users,
  Calculator, Monitor, Scale, HeartHandshake, BarChart3, FileSearch,
  GraduationCap, UserPlus, Award, Rocket, ChevronDown,
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: ClipboardCheck,
    titleFr: "Audit et Evaluation",
    titleEn: "Audit & Evaluation",
    descFr: "Commissariat aux comptes, audit comptable et financier, audit interne, operationnel, fiscal, strategique, RSE, forensic et des systemes d'information.",
    descEn: "Statutory audit, financial & accounting audit, internal audit, operational, tax, strategic, CSR, forensic and IT systems audit.",
    detailsFr: ["Commissariat aux comptes", "Audit comptable et financier (legal)", "Audit interne et operationnel", "Audit fiscal et strategique", "Audit RSE / extra-financier", "Audit forensic (lutte contre la fraude)", "Audit des SI", "Certification des comptes annuels", "Diagnostic financier et analyse des risques"],
    detailsEn: ["Statutory audit", "Financial & accounting audit", "Internal & operational audit", "Tax & strategic audit", "CSR / ESG audit", "Forensic audit (fraud prevention)", "IT systems audit", "Annual accounts certification", "Financial diagnosis & risk analysis"],
  },
  {
    icon: Building2,
    titleFr: "Restructuration d'entreprise",
    titleEn: "Corporate Restructuring",
    descFr: "Due diligence, evaluation d'entreprises, plans d'affaires, fusions-acquisitions, privatisation et liquidation.",
    descEn: "Due diligence, business valuation, business plans, mergers & acquisitions, privatization and liquidation.",
    detailsFr: ["Due diligence - Evaluation d'entreprises", "Plans d'affaires - Fusions et acquisitions", "Restructuration d'entreprises", "Privatisation - Liquidation"],
    detailsEn: ["Due diligence - Business valuation", "Business plans - Mergers & acquisitions", "Corporate restructuring", "Privatization - Liquidation"],
  },
  {
    icon: ShieldCheck,
    titleFr: "Audit Organisationnel et Qualite",
    titleEn: "Organizational & Quality Audit",
    descFr: "Evaluation des processus internes, efficacite operationnelle, systemes de management de la qualite (ISO).",
    descEn: "Internal process assessment, operational efficiency, quality management systems (ISO).",
    detailsFr: ["Audit des processus et procedures internes", "Evaluation de l'efficacite operationnelle", "Mise en place de systemes de management de la qualite"],
    detailsEn: ["Internal process & procedure audit", "Operational efficiency evaluation", "Quality management system implementation"],
  },
  {
    icon: BookOpen,
    titleFr: "Comptabilite",
    titleEn: "Accounting",
    descFr: "Organisation et tenue des comptes, budgets previsionnels, consolidation, normes OHADA, IFRS, US GAAP.",
    descEn: "Account organization & management, budgets, consolidation, OHADA, IFRS, US GAAP standards.",
    detailsFr: ["Organisation, tenue et consolidation des comptes", "Budgets previsionnels", "Normes OHADA, IFRS, US GAAP", "Inventaires physiques", "Traduction des etats financiers"],
    detailsEn: ["Account organization & consolidation", "Forecasting budgets", "OHADA, IFRS, US GAAP standards", "Physical inventories", "Financial statement translation"],
  },
  {
    icon: Briefcase,
    titleFr: "Conseils en gestion",
    titleEn: "Management Consulting",
    descFr: "Business plans, tableaux de bord, investigation de fraudes, risk management, strategie d'entreprise.",
    descEn: "Business plans, dashboards, fraud investigation, risk management, business strategy.",
    detailsFr: ["Business plans et bilans previsionnels", "Tableaux de bords et KPI", "Investigation de fraudes", "Risk management", "Strategie marketing et GRC"],
    detailsEn: ["Business plans & forecasts", "Dashboards & KPIs", "Fraud investigation", "Risk management", "Marketing strategy & CRM"],
  },
  {
    icon: Users,
    titleFr: "Administration du personnel & Paie",
    titleEn: "HR Administration & Payroll",
    descFr: "Gestion administrative, elaboration des bulletins de paie, mise en conformite RH.",
    descEn: "Administrative management, payroll processing, HR compliance.",
    detailsFr: ["Gestion administrative du personnel", "Elaboration et controle des bulletins de paie", "Mise en conformite RH", "Procedures et outils RH"],
    detailsEn: ["Personnel administrative management", "Payroll processing & control", "HR compliance", "HR procedures & tools"],
  },
  {
    icon: Calculator,
    titleFr: "Fiscalite",
    titleEn: "Taxation",
    descFr: "Optimisation fiscale, declarations sociales et fiscales, assistance en controle et redressements.",
    descEn: "Tax optimization, social & tax declarations, assistance with audits and adjustments.",
    detailsFr: ["Optimisation fiscale reglementaire", "Declarations sociales et fiscales", "Assistance en controle et redressements", "Conseil en obligations legales"],
    detailsEn: ["Regulatory tax optimization", "Social & tax declarations", "Audit assistance & adjustments", "Legal obligations advisory"],
  },
  {
    icon: Monitor,
    titleFr: "Digitalisation des processus",
    titleEn: "Process Digitalization",
    descFr: "Analyse et optimisation des processus, solutions digitales d'automatisation, amelioration de la productivite.",
    descEn: "Process analysis & optimization, digital automation solutions, productivity improvement.",
    detailsFr: ["Analyse et optimisation des processus metier", "Solutions digitales d'automatisation", "Amelioration de la productivite et reduction des couts"],
    detailsEn: ["Business process analysis & optimization", "Digital automation solutions", "Productivity improvement & cost reduction"],
  },
  {
    icon: Scale,
    titleFr: "Juridique",
    titleEn: "Legal",
    descFr: "Creation d'entreprise, droit des affaires, audit juridique et social, planification fiscale.",
    descEn: "Business formation, business law, legal & social audit, tax planning.",
    detailsFr: ["Formalites de creation d'entreprise", "Conseil en droit des affaires", "Audit juridique et social", "Secretariat juridique", "Assistance au contentieux"],
    detailsEn: ["Business formation formalities", "Business law advisory", "Legal & social audit", "Legal secretariat", "Litigation assistance"],
  },
  {
    icon: HeartHandshake,
    titleFr: "Securite sociale & Retraite",
    titleEn: "Social Security & Retirement",
    descFr: "Conseil CNPS, constitution de dossiers retraite, simulation et optimisation des droits sociaux.",
    descEn: "CNPS advisory, retirement file management, social benefits simulation & optimization.",
    detailsFr: ["Conseil CNPS", "Constitution et suivi de dossiers retraite", "Simulation et optimisation des droits sociaux"],
    detailsEn: ["CNPS advisory", "Retirement file management", "Social benefits simulation & optimization"],
  },
  {
    icon: BarChart3,
    titleFr: "Performance commerciale et financiere",
    titleEn: "Commercial & Financial Performance",
    descFr: "Analyse des performances commerciales, optimisation des processus, gestion financiere.",
    descEn: "Commercial performance analysis, process optimization, financial management.",
    detailsFr: ["Analyse des performances commerciales", "Optimisation des processus de vente", "Amelioration de la gestion financiere"],
    detailsEn: ["Commercial performance analysis", "Sales process optimization", "Financial management improvement"],
  },
  {
    icon: FileSearch,
    titleFr: "Evaluation d'entreprises & projets",
    titleEn: "Business & Project Evaluation",
    descFr: "Evaluation de valeur, faisabilite, etudes d'impact, montage de dossiers de financement.",
    descEn: "Business valuation, feasibility, impact studies, financing applications.",
    detailsFr: ["Evaluation de la valeur d'entreprise", "Etudes de faisabilite et d'impact", "Suivi-evaluation de projets", "Montage de dossiers de financement"],
    detailsEn: ["Business valuation", "Feasibility & impact studies", "Project monitoring & evaluation", "Financing file preparation"],
  },
  {
    icon: GraduationCap,
    titleFr: "Formation & Renforcement des capacites",
    titleEn: "Training & Capacity Building",
    descFr: "Formations en management, developpement des competences, seminaires professionnels.",
    descEn: "Management training, skills development, professional seminars.",
    detailsFr: ["Formations en management d'entreprise", "Developpement des competences", "Seminaires de formation professionnels", "Services d'archivage electronique"],
    detailsEn: ["Business management training", "Skills development", "Professional training seminars", "Electronic archiving services"],
  },
  {
    icon: UserPlus,
    titleFr: "Mise a disposition du personnel",
    titleEn: "Staff Outsourcing",
    descFr: "Recrutement, interim professionnel, delegation de competences specialisees.",
    descEn: "Recruitment, professional staffing, specialized skills delegation.",
    detailsFr: ["Recrutement", "Interim professionnel", "Delegation de competences specialisee"],
    detailsEn: ["Recruitment", "Professional staffing", "Specialized skills delegation"],
  },
  {
    icon: Award,
    titleFr: "Coaching",
    titleEn: "Coaching",
    descFr: "Coaching organisationnel, administratif, de dirigeants et cadres.",
    descEn: "Organizational, administrative, executive and management coaching.",
    detailsFr: ["Coaching organisationnel et administratif", "Coaching de dirigeants et cadres"],
    detailsEn: ["Organizational & administrative coaching", "Executive & management coaching"],
  },
  {
    icon: Rocket,
    titleFr: "Strategies de croissance",
    titleEn: "Growth Strategies",
    descFr: "Strategie d'entreprise, analyse de marche, planification strategique, diagnostic et transformation.",
    descEn: "Business strategy, market analysis, strategic planning, diagnostics and transformation.",
    detailsFr: ["Actualisation de la strategie d'entreprise", "Analyse de marche et positionnement", "Planification strategique", "Structuration et transformation"],
    detailsEn: ["Business strategy update", "Market analysis & positioning", "Strategic planning", "Structuring & transformation"],
  },
];

export default function Services() {
  const { t } = useLang();
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
            {t("Nos expertises", "Our expertise")}
          </span>
          <h2 className="section-title mt-3 mb-4">
            {t("Domaines d'intervention strategiques", "Strategic Areas of Expertise")}
          </h2>
          <div className="red-separator w-16 mx-auto mb-6" />
          <p className="section-subtitle mx-auto">
            {t(
              "Un accompagnement complet et sur mesure pour securiser et developper vos activites.",
              "Comprehensive, tailored support to secure and grow your business."
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
                  {t(service.titleFr, service.titleEn)}
                </h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">
                  {t(service.descFr, service.descEn)}
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
                    <ul className="space-y-2">
                      {(t(service.detailsFr.join("||"), service.detailsEn.join("||"))).split("||").map((detail, j) => (
                        <li key={j} className="text-sm text-muted-foreground flex items-start gap-2.5">
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                            style={{ background: "hsl(214 65% 52%)" }}
                          />
                          {detail}
                        </li>
                      ))}
                    </ul>
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
