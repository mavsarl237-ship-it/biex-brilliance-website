import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import TeamSection from "@/components/TeamSection";
import { useLang } from "@/contexts/LanguageContext";

const TeamPage = () => {
    const { t } = useLang();
    return (
        <Layout>
            <PageBanner
                title={t("Notre Equipe", "Our Team", "Unser Team", "فريقنا")}
                subtitle={t(
                    "Une equipe d'experts pluridisciplinaires au service de votre reussite.",
                    "A multidisciplinary team of experts dedicated to your success.",
                    "Ein multidisziplinäres Expertenteam für Ihren Erfolg.",
                    "فريق من الخبراء متعددي التخصصات في خدمة نجاحكم."
                )}
            />
            <TeamSection />
        </Layout>
    );
};

export default TeamPage;
