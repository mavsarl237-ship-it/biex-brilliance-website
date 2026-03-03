import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import Services from "@/components/Services";
import { useLang } from "@/contexts/LanguageContext";

const ServicesPage = () => {
    const { t } = useLang();
    return (
        <Layout>
            <PageBanner
                title={t("Nos Services", "Our Services")}
                subtitle={t(
                    "Un accompagnement complet pour securiser et developper vos activites.",
                    "Comprehensive support to secure and grow your business."
                )}
            />
            <Services />
        </Layout>
    );
};

export default ServicesPage;
