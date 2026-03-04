import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import Services from "@/components/Services";
import { useLang } from "@/contexts/LanguageContext";

const ServicesPage = () => {
    const { t } = useLang();
    return (
        <Layout>
            <PageBanner
                title={t("Nos Services", "Our Services", "Unsere Leistungen", "خدماتنا")}
                subtitle={t(
                    "Un accompagnement complet pour securiser et developper vos activites.",
                    "Comprehensive support to secure and grow your business.",
                    "Umfassende Unterstützung zur Sicherung und Entwicklung Ihres Unternehmens.",
                    "دعم شامل لتأمين وتطوير أنشطتكم."
                )}
            />
            <Services />
        </Layout>
    );
};

export default ServicesPage;
