import Preloader from "@/components/Preloader";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import TeamSection from "@/components/TeamSection";
import NetworkSection from "@/components/NetworkSection";
import Partners from "@/components/Partners";
import ContactSection from "@/components/ContactSection";

const HomePage = () => {
  return (
    <>
      <Preloader />
      <Layout>
        <Hero />
        <About />
        <Services />
        <TeamSection />
        <NetworkSection />
        <Partners />
        <ContactSection />
      </Layout>
    </>
  );
};

export default HomePage;
