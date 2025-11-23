/**
 * Privacy Policy Page Component
 * 
 * This dedicated page displays comprehensive privacy policy and data protection information.
 * It outlines how Toorrii collects, uses, and protects user data.
 * 
 * Policy Sections:
 * - Introduction: Overview of privacy commitment
 * - Information Collection: What data is collected
 * - Information Usage: How data is used
 * - Data Protection: Security measures
 * - User Rights: User control over their data
 * - Cookies: Cookie usage policy
 * - Third-party Services: External integrations
 * - Data Retention: How long data is kept
 * - International Transfers: Cross-border data handling
 * - Policy Updates: Change notification process
 * - Contact Information: How to reach privacy team
 * 
 * Features:
 * - Multi-language support (FR, AR, EN)
 * - RTL support for Arabic
 * - Responsive design
 * - Animated entrances with framer-motion
 * - Dynamic last updated date
 * - Structured content with headings and lists
 * 
 * @component
 */

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/contexts/TranslationContext";

/**
 * PrivacyPolicy Page Component
 * 
 * Renders a full privacy policy document with proper structure and formatting.
 */
const PrivacyPolicy = () => {
  const { t } = useTranslation();
  
  /**
   * Page Structure:
   * - Header: Global navigation
   * - Main Content: Privacy policy sections
   * - Footer: Site links and information
   * 
   * All content is internationalized using the translation system.
   */
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back to home navigation */}
          <Link to="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
              {t('privacyPage.backToHome')}
            </Button>
          </Link>

          {/* Animated page content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Page Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('privacyPage.title')}
            </h1>
            {/* Last Updated Date - Dynamically generated */}
            <p className="text-muted-foreground mb-8">
              {t('privacyPage.lastUpdated')} {new Date().toLocaleDateString('en-GB')}
            </p>
            {/* Introduction Text */}
            <p className="text-muted-foreground mb-12">
              {t('privacyPage.intro')}
            </p>

            {/* Policy Sections - Structured content */}
            <div className="space-y-12">
              {/* Section 1: Information Collection */}
              <section>
                <h2 className="text-2xl font-semibold mb-4">{t('privacyPage.section1Title')}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t('privacyPage.section1Text')}
                </p>
              </section>

              {/* Section 2: Information Usage */}
              <section>
                <h2 className="text-2xl font-semibold mb-4">{t('privacyPage.section2Title')}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('privacyPage.section2Intro')}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ltr:ml-4 rtl:mr-4">
                  <li>{t('privacyPage.section2Item1')}</li>
                  <li>{t('privacyPage.section2Item2')}</li>
                  <li>{t('privacyPage.section2Item3')}</li>
                  <li>{t('privacyPage.section2Item4')}</li>
                </ul>
              </section>

              {/* Section 3: Data Protection */}
              <section>
                <h2 className="text-2xl font-semibold mb-4">{t('privacyPage.section3Title')}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('privacyPage.section3Intro')}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ltr:ml-4 rtl:mr-4">
                  <li>{t('privacyPage.section3Item1')}</li>
                  <li>{t('privacyPage.section3Item2')}</li>
                  <li>{t('privacyPage.section3Item3')}</li>
                  <li>{t('privacyPage.section3Item4')}</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  {t('privacyPage.section3Text')}
                </p>
              </section>

              {/* Section 4: User Rights */}
              <section>
                <h2 className="text-2xl font-semibold mb-4">{t('privacyPage.section4Title')}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t('privacyPage.section4Text')}
                </p>
              </section>

              {/* Section 5: User Control and Rights */}
              <section>
                <h2 className="text-2xl font-semibold mb-4">{t('privacyPage.section5Title')}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('privacyPage.section5Intro')}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ltr:ml-4 rtl:mr-4">
                  <li>{t('privacyPage.section5Item1')}</li>
                  <li>{t('privacyPage.section5Item2')}</li>
                  <li>{t('privacyPage.section5Item3')}</li>
                  <li>{t('privacyPage.section5Item4')}</li>
                  <li>{t('privacyPage.section5Item5')}</li>
                  <li>{t('privacyPage.section5Item6')}</li>
                  <li>{t('privacyPage.section5Item7')}</li>
                  <li>{t('privacyPage.section5Item8')}</li>
                </ul>
              </section>

              {/* Section 6: Cookies */}
              <section>
                <h2 className="text-2xl font-semibold mb-4">{t('privacyPage.section6Title')}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t('privacyPage.section6Text')}
                </p>
              </section>

              {/* Section 7: Third-party Services */}
              <section>
                <h2 className="text-2xl font-semibold mb-4">{t('privacyPage.section7Title')}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t('privacyPage.section7Text')}
                </p>
              </section>

              {/* Section 8: Data Retention */}
              <section>
                <h2 className="text-2xl font-semibold mb-4">{t('privacyPage.section8Title')}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t('privacyPage.section8Text')}
                </p>
              </section>

              {/* Section 9: International Transfers */}
              <section>
                <h2 className="text-2xl font-semibold mb-4">{t('privacyPage.section9Title')}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t('privacyPage.section9Text')}
                </p>
              </section>

              {/* Section 10: Policy Updates */}
              <section>
                <h2 className="text-2xl font-semibold mb-4">{t('privacyPage.section10Title')}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t('privacyPage.section10Text')}
                </p>
              </section>

              {/* Contact Information Section */}
              <section className="pt-8 border-t border-border">
                <h2 className="text-2xl font-semibold mb-4">{t('privacyPage.contactTitle')}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('privacyPage.contactIntro')}
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p>{t('privacyPage.contactEmail')}</p>
                  <p>{t('privacyPage.contactPhone')}</p>
                  <p>{t('privacyPage.contactAddress')}</p>
                </div>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  {t('privacyPage.contactOutro')}
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
