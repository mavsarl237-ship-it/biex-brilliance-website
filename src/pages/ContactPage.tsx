import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import ContactSection from "@/components/ContactSection";
import { useLang } from "@/contexts/LanguageContext";

const ContactPage = () => {
    const { t } = useLang();
    return (
        <Layout>
            <PageBanner
                title={t("Contactez-nous", "Contact Us", "Kontaktieren Sie uns", "اتصل بنا")}
                subtitle={t(
                    "Parlons de votre projet et de vos ambitions.",
                    "Let's discuss your project and your ambitions.",
                    "Lassen Sie uns über Ihr Projekt und Ihre Ambitionen sprechen.",
                    "لنتحدث عن مشروعكم وطموحاتكم."
                )}
            />
            <ContactSection />
        </Layout>
    );
};

export default ContactPage;
