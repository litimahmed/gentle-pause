import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Target, Eye, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/contexts/TranslationContext";

const AboutUs = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
              {t('aboutPage.backToHome')}
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('aboutPage.title')}
            </h1>
            
            <div className="space-y-12">
              <section>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('aboutPage.intro')}
                </p>
              </section>

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

              <section>
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-3">{t('aboutPage.valuesTitle')}</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{t('aboutPage.innovationTitle')}</h3>
                        <p className="leading-relaxed">
                          {t('aboutPage.innovationText')}
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{t('aboutPage.accessibilityTitle')}</h3>
                        <p className="leading-relaxed">
                          {t('aboutPage.accessibilityText')}
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{t('aboutPage.reliabilityTitle')}</h3>
                        <p className="leading-relaxed">
                          {t('aboutPage.reliabilityText')}
                        </p>
                      </div>
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

              <section className="pt-8 border-t border-border">
                <h2 className="text-2xl font-semibold mb-4">{t('aboutPage.getInTouchTitle')}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('aboutPage.getInTouchText')}
                </p>
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
