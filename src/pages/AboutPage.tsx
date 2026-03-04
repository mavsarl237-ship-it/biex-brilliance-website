import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import About from "@/components/About";
import { useLang } from "@/contexts/LanguageContext";

const AboutPage = () => {
    const { t } = useLang();
    return (
        <Layout>
            <PageBanner
                title={t("A propos de nous", "About Us", "Über uns", "من نحن")}
                subtitle={t(
                    "Decouvrez qui nous sommes et ce qui nous anime.",
                    "Learn about who we are and what drives us.",
                    "Erfahren Sie, wer wir sind und was uns antreibt.",
                    "اكتشفوا من نحن وما يحركنا."
                )}
            />
            <About />
        </Layout>
    );
};

export default AboutPage;
