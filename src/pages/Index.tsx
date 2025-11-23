import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Partnerships from "@/components/Partnerships";
import AboutUs from "@/components/AboutUs";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1);
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Partnerships />
      <AboutUs />
      <PrivacyPolicy />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Index;
