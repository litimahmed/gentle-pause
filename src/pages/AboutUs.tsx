/**
 * About Us Page Component
 * 
 * This dedicated page provides comprehensive information about Toorrii,
 * including mission, vision, values, and services.
 * 
 * Page Sections:
 * - Introduction: Company overview and purpose
 * - Mission: Core objectives and goals
 * - Vision: Future direction and aspirations
 * - Values: Core principles (Innovation, Accessibility, Reliability, Local Expertise)
 * - Who We Serve: Target industries and sectors
 * - Why Choose Us: Competitive advantages
 * - Contact Information: Ways to get in touch
 * 
 * Features:
 * - Multi-language support (FR, AR, EN)
 * - Responsive design for all devices
 * - Animated entrances with framer-motion
 * - Icon-based section headers
 * - Back to home navigation
 * 
 * @component
 */

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Target, Eye, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/contexts/TranslationContext";

/**
 * AboutUs Page Component
 * 
 * Renders a full-page layout with header, footer, and detailed company information.
 */
const AboutUs = () => {
  // Get translation function from context
  const { t } = useTranslation();
  
  /**
   * Page Structure:
   * - Header: Global navigation
   * - Main Content: Company information sections
   * - Footer: Site links and information
   */
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back to home button */}
          <Link to="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
              {t('aboutPage.backToHome')}
            </Button>
          </Link>

          {/* Animated page header with fade-in effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('aboutPage.title')}
            </h1>
            
            <div className="space-y-12">
              {/* Introduction Section */}
              <section>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('aboutPage.intro')}
                </p>
              </section>

              {/* Mission Section with icon */}
              <section>
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-3">{t('aboutPage.missionTitle')}</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {t('aboutPage.missionText')}
                    </p>
                  </div>
                </div>
              </section>

              {/* Vision Section with icon */}
              <section>
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-3">{t('aboutPage.visionTitle')}</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {t('aboutPage.visionText')}
                    </p>
                  </div>
                </div>
              </section>

              {/* Core Values Section with icon and subsections */}
              <section>
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-3">{t('aboutPage.valuesTitle')}</h2>
                    <div className="space-y-4 text-muted-foreground">
                      {/* Innovation Value */}
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{t('aboutPage.innovationTitle')}</h3>
                        <p className="leading-relaxed">
                          {t('aboutPage.innovationText')}
                        </p>
                      </div>
                      {/* Accessibility Value */}
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{t('aboutPage.accessibilityTitle')}</h3>
                        <p className="leading-relaxed">
                          {t('aboutPage.accessibilityText')}
                        </p>
                      </div>
                      {/* Reliability Value */}
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{t('aboutPage.reliabilityTitle')}</h3>
                        <p className="leading-relaxed">
                          {t('aboutPage.reliabilityText')}
                        </p>
                      </div>
                      {/* Local Expertise Value */}
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{t('aboutPage.localExpertiseTitle')}</h3>
                        <p className="leading-relaxed">
                          {t('aboutPage.localExpertiseText')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Who We Serve Section - Target industries */}
              <section>
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-3">{t('aboutPage.whoWeServeTitle')}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {t('aboutPage.whoWeServeText')}
                    </p>
                    {/* List of target industries */}
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ltr:ml-4 rtl:mr-4">
                      <li>{t('aboutPage.service1')}</li>
                      <li>{t('aboutPage.service2')}</li>
                      <li>{t('aboutPage.service3')}</li>
                      <li>{t('aboutPage.service4')}</li>
                      <li>{t('aboutPage.service5')}</li>
                      <li>{t('aboutPage.service6')}</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Why Choose Us Section - Competitive advantages */}
              <section className="pt-8 border-t border-border">
                <h2 className="text-2xl font-semibold mb-4">{t('aboutPage.whyChooseTitle')}</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    <span className="font-semibold text-foreground">{t('aboutPage.provenTrackLabel')}</span> {t('aboutPage.provenTrackText')}
                  </p>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-foreground">{t('aboutPage.localSupportLabel')}</span> {t('aboutPage.localSupportText')}
                  </p>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-foreground">{t('aboutPage.complianceLabel')}</span> {t('aboutPage.complianceText')}
                  </p>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-foreground">{t('aboutPage.scalabilityLabel')}</span> {t('aboutPage.scalabilityText')}
                  </p>
                </div>
              </section>

              {/* Contact Information Section */}
              <section className="pt-8 border-t border-border">
                <h2 className="text-2xl font-semibold mb-4">{t('aboutPage.getInTouchTitle')}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('aboutPage.getInTouchText')}
                </p>
                {/* Contact details */}
                <div className="space-y-2 text-muted-foreground">
                  <p>{t('aboutPage.email')}</p>
                  <p>{t('aboutPage.phone')}</p>
                  <p>{t('aboutPage.address')}</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
