import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import TeamSection from "@/components/TeamSection";
import { useLang } from "@/contexts/LanguageContext";

const TeamPage = () => {
    const { t } = useLang();
    return (
        <Layout>
            <PageBanner
                title={t("Notre Equipe", "Our Team")}
                subtitle={t(
                    "Une equipe d'experts pluridisciplinaires au service de votre reussite.",
                    "A multidisciplinary team of experts dedicated to your success."
                )}
            />
            <TeamSection />
        </Layout>
    );
};

export default TeamPage;
