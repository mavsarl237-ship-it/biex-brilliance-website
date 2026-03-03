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
    roleFr: "Fondateur / Associe - Gerant",
    roleEn: "Founder / Managing Partner",
    qualifications: [
      "Chartered Accountant | ACCA Fellow member, UK",
      "Membre ICAG (Institute of Chartered Accountants, Ghana)",
      "Expert in IFRS & US GAAP | Reporting Processes",
      "Financial Auditor, Risk & Compliance | Forensic | ERP",
      "Financial & Statement Analyst Expert | Investigator, Banking",
      "Projects Manager",
    ],
  },
  {
    name: "MAGNAN AWONO ATEMENGUE Bertrand",
    photo: team2,
    roleFr: "Manager - Associe",
    roleEn: "Manager - Partner",
    qualifications: [
      "Expert en Audit, evaluation, fiscalite",
      "M.Sc - Audit & Controle - UCAC",
      "Certificat int'l audit legal des comptes - CNAM INTEC",
    ],
  },
  {
    name: "AYANGMA Stanislas Yannick Richard",
    photo: team3,
    roleFr: "Manager - Associe",
    roleEn: "Manager - Partner",
    qualifications: [
      "Expert en elaboration et evaluation de projets",
      "Master en Analyse des projets - Universite Rennes I",
      "DESS en Analyse et evaluation des projets - U. Yde II",
      "Maitrise, Economie de gestion - UCAC",
    ],
  },
  {
    name: "BALEP BANGMBE Arnold",
    photo: team4,
    roleFr: "Manager - Associe",
    roleEn: "Manager - Partner",
    qualifications: [
      "Expert en elaboration, suivi, evaluation des projets de developpement - AFD",
      "Specialiste DD & RSE",
      "Accompagnement entrepreneurial",
    ],
  },
  {
    name: "MAVOUTIO Sulamithe Laure",
    photo: team5,
    roleFr: "Associee",
    roleEn: "Partner",
    qualifications: [
      "Juriste - Proceduriere",
      "Specialiste RH",
    ],
  },
];

export default function TeamSection() {
  const { t } = useLang();
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
            {t("Notre equipe", "Our team")}
          </span>
          <h2 className="section-title mt-3 mb-4">
            {t("Nos principaux intervenants", "Our Key Team Members")}
          </h2>
          <div className="red-separator w-16 mx-auto mb-6" />
          <p className="section-subtitle mx-auto">
            {t(
              "Une equipe d'experts pluridisciplinaires au service de votre reussite.",
              "A multidisciplinary team of experts dedicated to your success."
            )}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
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
              <div className="relative h-80 overflow-hidden bg-muted">
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
                    {t(member.roleFr, member.roleEn)}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-lg mb-3 text-foreground">{member.name}</h3>
                <ul className="space-y-1.5">
                  {member.qualifications.map((q, j) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
