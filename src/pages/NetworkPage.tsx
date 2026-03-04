import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import NetworkSection from "@/components/NetworkSection";
import Partners from "@/components/Partners";
import { useLang } from "@/contexts/LanguageContext";

const NetworkPage = () => {
    const { t } = useLang();
    return (
        <Layout>
            <PageBanner
                title={t("Notre Reseau", "Our Network", "Unser Netzwerk", "شبكتنا")}
                subtitle={t(
                    "Bureaux et partenaires a travers l'Afrique.",
                    "Offices and partners across Africa.",
                    "Büros und Partner in ganz Afrika.",
                    "مكاتب وشركاء عبر أفريقيا."
                )}
            />
            <NetworkSection />
            <Partners />
        </Layout>
    );
};

export default NetworkPage;
