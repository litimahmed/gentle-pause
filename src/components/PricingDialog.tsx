import { useState } from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Calculator,
  Mail,
  FileText,
  Palette,
  Globe,
  Smartphone,
  Shield,
  X,
  ChevronLeft,
  ChevronRight,
  Code,
  Database,
  Zap,
  Info,
} from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";

const PricingDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const { t, language } = useTranslation();

  const domains = [
    {
      title:
        language === "fr"
          ? "Spécifications de la plateforme et domaine système"
          : "Platform Specifications & System Domain",
      subtitle:
        language === "fr"
          ? "Fonctionnalités essentielles pour une expérience utilisateur fluide et accessible"
          : "Essential features for a seamless and accessible user experience",
      features: [
        {
          icon: Palette,
          name:
            language === "fr"
              ? "Système de thème sombre/clair"
              : "Dark/Light Theme System",
          description:
            language === "fr"
              ? "Système de thématisation complet avec modes sombre/clair et couleurs de marque personnalisées"
              : "Complete theming system with dark/light modes and custom brand colors",
          price: "3 000 DA",
        },
        {
          icon: Globe,
          name:
            language === "fr"
              ? "Support multi-langues"
              : "Multi-language Support",
          description:
            language === "fr"
              ? "Internationalisation complète avec support arabe, français et anglais"
              : "Full internationalization with Arabic, French, and English support",
          price: "4 000 DA",
        },
        {
          icon: Smartphone,
          name:
            language === "fr"
              ? "Système de design responsive"
              : "Responsive Design System",
          description:
            language === "fr"
              ? "Design mobile-first responsive avec optimisation tablette et desktop"
              : "Mobile-first responsive design with tablet and desktop optimization",
          price: "3 000 DA",
        },
        {
          icon: Shield,
          name:
            language === "fr"
              ? "Accessibilité et normes"
              : "Accessibility & Standards",
          description:
            language === "fr"
              ? "Conformité WCAG 2.1, navigation clavier et support lecteur d'écran"
              : "WCAG 2.1 compliance, keyboard navigation, and screen reader support",
          price: "2 500 DA",
        },
      ],
    },
    {
      title:
        language === "fr"
          ? "Fonctionnalités des pages statiques"
          : "Static Pages Features",
      subtitle:
        language === "fr"
          ? "Fonctionnalités pour des pages d'accueil, à propos et contact optimisées"
          : "Features for optimized homepage, about us, and contact pages",
      features: [
        {
          icon: Mail,
          name:
            language === "fr"
              ? "Formulaire de contact intégré"
              : "Integrated Contact Form",
          description:
            language === "fr"
              ? "Formulaire de contact avec validation et intégration email"
              : "Contact form with validation and email integration",
          price: "3 000 DA",
        },
        {
          icon: Info,
          name:
            language === "fr"
              ? "Contenu de la page À propos"
              : "About Us Page Content",
          description:
            language === "fr"
              ? "Page À propos professionnelle avec contenu personnalisable"
              : "Professional About Us page with customizable content",
          price: "2 000 DA",
        },
      ],
    },
  ];

  const currentDomain = domains[currentStep];
  const totalPrice = currentDomain.features.reduce((sum, feature) => {
    return sum + parseInt(feature.price.replace(/[^\d]/g, ""));
  }, 0);

  const nextStep = () => {
    if (currentStep < domains.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="p-2 hover:bg-accent/50"
          onClick={() => setIsOpen(true)}
        >
          <Calculator className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl bg-card border border-border/50 p-0 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-subtle p-6 border-b border-border/50 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <DialogTitle className="text-2xl font-bold text-foreground mb-2">
                {language === "fr"
                  ? "Plateforme de gestion des rendez-vous - Domaines complets"
                  : "Appointment Management Platform - Complete Domains"}
              </DialogTitle>
              <p className="text-muted-foreground">
                {language === "fr"
                  ? "Solutions professionnelles de gestion des rendez-vous - Tarification unique en Dinars Algériens (DA)"
                  : "Professional appointment management solutions - One-time pricing in Algerian Dinars (DA)"}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              {/* Navigation Controls */}
              <Button
                variant="ghost"
                size="sm"
                onClick={prevStep}
                disabled={currentStep === 0}
                className="hover:bg-background/10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <span className="text-sm text-muted-foreground px-2">
                {currentStep + 1} / {domains.length}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={nextStep}
                disabled={currentStep === domains.length - 1}
                className="hover:bg-background/10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="hover:bg-background/10 ml-2"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="p-6">
            {/* Current Domain Header */}
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center mb-8"
            >
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-4">
                <Calculator className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  {currentDomain.title}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {currentDomain.subtitle}
              </p>
              <div className="text-3xl font-bold text-primary mb-2">
                {totalPrice.toLocaleString()} DA
              </div>
            </motion.div>

            {/* Features List */}
            <motion.div
              key={`features-${currentStep}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="space-y-4 mb-8"
            >
              {currentDomain.features.map((feature, index) => (
                <motion.div
                  key={`${currentStep}-${index}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-4 rounded-lg border border-border/50 bg-background/50 hover:bg-accent/20 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                      {feature.price}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Progress indicators */}
            <div className="flex justify-center space-x-2 mb-6">
              {domains.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStep(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentStep
                      ? "bg-primary"
                      : "bg-border hover:bg-border/80"
                  }`}
                />
              ))}
            </div>

            {/* Bottom section */}
            <motion.div
              key={`bottom-${currentStep}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="bg-gradient-subtle rounded-lg p-4 border border-border/50"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {language === "fr"
                      ? `Domaine ${currentStep + 1} sur ${domains.length}`
                      : `Domain ${currentStep + 1} of ${domains.length}`}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {language === "fr"
                      ? "Solution complète pour votre établissement"
                      : "Complete solution for your establishment"}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">
                    {language === "fr"
                      ? "Investissement unique"
                      : "One-time Investment"}
                  </p>
                  <p className="text-lg font-bold text-primary">
                    {totalPrice.toLocaleString()} DA
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PricingDialog;
