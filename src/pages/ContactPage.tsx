import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import ContactSection from "@/components/ContactSection";
import { useLang } from "@/contexts/LanguageContext";

const ContactPage = () => {
    const { t } = useLang();
    return (
        <Layout>
            <PageBanner
                title={t("Contactez-nous", "Contact Us")}
                subtitle={t(
                    "Parlons de votre projet et de vos ambitions.",
                    "Let's discuss your project and your ambitions."
                )}
            />
            <ContactSection />
        </Layout>
    );
};

export default ContactPage;
