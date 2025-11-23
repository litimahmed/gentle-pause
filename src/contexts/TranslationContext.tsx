/**
 * Translation Context
 * 
 * This context provides multi-language support for the entire application.
 * It manages the current language state and provides translation functions.
 * 
 * Supported Languages:
 * - English (en)
 * - French (fr)
 * - Arabic (ar)
 * 
 * Features:
 * - Centralized translation management
 * - Dynamic language switching
 * - Type-safe translation keys
 * - Persistent language selection (could be extended with localStorage)
 * 
 * Usage:
 * ```tsx
 * const { t, language, setLanguage } = useTranslation();
 * const title = t('hero.title'); // Returns translated text based on current language
 * setLanguage('fr'); // Switch to French
 * ```
 * 
 * Adding New Translations:
 * 1. Add new key to translations object
 * 2. Provide translations for all three languages
 * 3. Use the key with t() function in components
 * 
 * @module TranslationContext
 */

import React, { createContext, useContext, useState } from 'react';

/**
 * Translation entry structure
 * Each translation key maps to an object with en, fr, and ar properties
 */
interface Translations {
  [key: string]: {
    en: string;
    fr: string;
    ar: string;
  };
}

/**
 * Translation Dictionary
 * 
 * Contains all translations for the application organized by section.
 * Each key follows the pattern: section.item
 * 
 * Sections:
 * - nav: Navigation menu items
 * - hero: Hero section content
 * - partnerships: Partnership section
 * - about: About Us section
 * - privacy: Privacy policy section
 * - contact: Contact section
 * - features: Features section
 * - testimonials: Testimonials section
 * - integrations: Integrations section
 * - cta: Call-to-action section
 * - footer: Footer links and content
 * - aboutPage: About Us page content
 * - privacyPage: Privacy Policy page content
 * - contactPage: Contact Us page content
 */
const translations: Translations = {
  'hero.title': { en: 'Smart Queue Management', fr: 'Gestion intelligente des files', ar: 'إدارة قائمة الانتظار الذكية' },
  'hero.description': { en: 'Manage queues efficiently and improve customer experience with our smart queue management solutions.', fr: 'Gérez efficacement les files d\'attente et améliorez l\'expérience client grâce à nos solutions intelligentes de gestion des files d\'attente.', ar: 'قم بإدارة قوائم الانتظار بكفاءة وحسّن تجربة العملاء من خلال حلول إدارة قائمة الانتظار الذكية التي نقدمها.' },
  'hero.getStarted': { en: 'Get Started', fr: 'Commencer', ar: 'ابدأ' },

  'partnerships.title': { en: 'Strategic Partnerships', fr: 'Partenariats Stratégiques', ar: 'شراكات استراتيجية' },
  'partnerships.description': { en: 'We partner with leading companies to deliver comprehensive solutions.', fr: 'Nous collaborons avec des entreprises de premier plan pour fournir des solutions complètes.', ar: 'نتشارك مع الشركات الرائدة لتقديم حلول شاملة.' },

  'about.title': { en: 'About Us', fr: 'À Propos de Nous', ar: 'معلومات عنا' },
  'about.description': { en: 'Learn more about our company, mission, and the team behind our innovative solutions.', fr: 'Apprenez-en davantage sur notre entreprise, notre mission et l\'équipe derrière nos solutions innovantes.', ar: 'تعرف على المزيد حول شركتنا ورسالتنا والفريق الذي يقف وراء حلولنا المبتكرة.' },

  'privacy.title': { en: 'Privacy Policy', fr: 'Politique de Confidentialité', ar: 'سياسة الخصوصية' },
  'privacy.description': { en: 'Read our privacy policy to understand how we protect your information.', fr: 'Lisez notre politique de confidentialité pour comprendre comment nous protégeons vos informations.', ar: 'اقرأ سياسة الخصوصية الخاصة بنا لفهم كيف نحمي معلوماتك.' },

  'contact.title': { en: 'Contact Us', fr: 'Contactez-Nous', ar: 'اتصل بنا' },
  'contact.description': { en: 'Need assistance? Contact our support team for help with any questions or issues.', fr: 'Besoin d\'aide ? Contactez notre équipe de support pour toute question ou problème.', ar: 'هل تحتاج إلى مساعدة؟ اتصل بفريق الدعم لدينا للحصول على مساعدة في أي أسئلة أو مشاكل.' },

  'features.title': { en: 'Key Features', fr: 'Fonctionnalités Clés', ar: 'الميزات الرئيسية' },
  'features.description': { en: 'Explore the powerful features that make our queue management system stand out.', fr: 'Explorez les fonctionnalités puissantes qui distinguent notre système de gestion des files d\'attente.', ar: 'اكتشف الميزات القوية التي تجعل نظام إدارة قائمة الانتظار لدينا متميزًا.' },

  'testimonials.title': { en: 'What Our Clients Say', fr: 'Ce Que Disent Nos Clients', ar: 'ماذا يقول عملاؤنا' },
  'testimonials.description': { en: 'Read testimonials from our satisfied clients who have transformed their queue management.', fr: 'Lisez les témoignages de nos clients satisfaits qui ont transformé leur gestion des files d\'attente.', ar: 'اقرأ شهادات عملائنا الراضين الذين قاموا بتحويل إدارة قائمة الانتظار الخاصة بهم.' },

  'integrations.title': { en: 'Seamless Integrations', fr: 'Intégrations Faciles', ar: 'تكاملات سلسة' },
  'integrations.description': { en: 'Integrate our system with your existing tools for a streamlined workflow.', fr: 'Intégrez notre système à vos outils existants pour un flux de travail simplifié.', ar: 'ادمج نظامنا مع أدواتك الحالية للحصول على سير عمل مبسط.' },

  'cta.title': { en: 'Ready to Transform Your Queues?', fr: 'Prêt à Transformer Vos Files d\'Attente ?', ar: 'هل أنت مستعد لتحويل قوائم الانتظار الخاصة بك؟' },
  'cta.description': { en: 'Get started today and see the difference in your customer satisfaction.', fr: 'Commencez dès aujourd\'hui et constatez la différence dans la satisfaction de vos clients.', ar: 'ابدأ اليوم وشاهد الفرق في رضا عملائك.' },
  'cta.button': { en: 'Request a Demo', fr: 'Demander une Démo', ar: 'اطلب عرضًا تجريبيًا' },

  'footer.copyright': { en: '© 2024 Smart Queue. All rights reserved.', fr: '© 2024 Smart Queue. Tous droits réservés.', ar: '© 2024 Smart Queue. جميع الحقوق محفوظة.' },
  'footer.terms': { en: 'Terms of Service', fr: 'Conditions d\'Utilisation', ar: 'شروط الخدمة' },
  'footer.privacy': { en: 'Privacy Policy', fr: 'Politique de Confidentialité', ar: 'سياسة الخصوصية' },

  'aboutPage.title': { en: 'Our Mission', fr: 'Notre Mission', ar: 'مهمتنا' },
  'aboutPage.content': { en: 'To revolutionize queue management with innovative technology.', fr: 'Révolutionner la gestion des files d\'attente grâce à une technologie innovante.', ar: 'إحداث ثورة في إدارة قائمة الانتظار من خلال التكنولوجيا المبتكرة.' },

  'privacyPage.title': { en: 'Data Protection', fr: 'Protection des Données', ar: 'حماية البيانات' },
  'privacyPage.content': { en: 'We are committed to protecting your data and privacy.', fr: 'Nous nous engageons à protéger vos données et votre vie privée.', ar: 'نحن ملتزمون بحماية بياناتك وخصوصيتك.' },

  'contactPage.title': { en: 'Get in Touch', fr: 'Entrer en Contact', ar: 'تواصل معنا' },
  'contactPage.content': { en: 'Contact us for support, questions, or partnership opportunities.', fr: 'Contactez-nous pour obtenir de l\'aide, poser des questions ou discuter des opportunités de partenariat.', ar: 'اتصل بنا للحصول على الدعم أو لطرح الأسئلة أو لمناقشة فرص الشراكة.' },
  // Header
  'nav.partnerships': { en: 'Partnerships', fr: 'Partenariats', ar: 'الشراكات' },
  'nav.aboutUs': { en: 'About Us', fr: 'À propos', ar: 'من نحن' },
  'nav.privacy': { en: 'Privacy & Policy', fr: 'Confidentialité', ar: 'الخصوصية' },
  'nav.contact': { en: 'Contact Us', fr: 'Contact', ar: 'اتصل بنا' },
  'nav.clientPortal': { en: 'Client Portal', fr: 'Espace Client', ar: 'بوابة العميل' },
  'nav.signin': { en: 'Professional Access', fr: 'Accès Professionnel', ar: 'دخول المحترفين' },
  
  'aboutUS.title': { en: 'Our Story', fr: 'Notre Histoire', ar: 'قصتنا' },
  'aboutUS.content': { en: 'Founded in 2010, we set out to solve the challenges of queue management...', fr: 'Fondée en 2010, nous avons entrepris de résoudre les défis de la gestion des files d\'attente...', ar: 'تأسست في عام 2010، انطلقنا لحل تحديات إدارة قائمة الانتظار...' },

  'contactUS.title': { en: 'Reach Out', fr: 'Contactez-nous', ar: 'تواصل معنا' },
  'contactUS.address': { en: '123 Main Street, Anytown', fr: '123 Rue Principale, Ville', ar: '123 شارع رئيسي، أي مدينة' },

  'privacyPOlicy.title': { en: 'Our Commitment', fr: 'Notre Engagement', ar: 'التزامنا' },
  'privacyPOlicy.content': { en: 'We are dedicated to protecting your personal information...', fr: 'Nous nous engageons à protéger vos informations personnelles...', ar: 'نحن ملتزمون بحماية معلوماتك الشخصية...' },

  'translationCOntext.title': { en: 'Translation Context', fr: 'Contexte de Traduction', ar: 'سياق الترجمة' },
  'translationCOntext.description': { en: 'Providing multi-language support for the application.', fr: 'Fournir un support multilingue pour l\'application.', ar: 'توفير دعم متعدد اللغات للتطبيق.' },
};

/**
 * Translation Context Type Definition
 * Defines the shape of the translation context value
 */
interface TranslationContextType {
  /** Current active language code */
  language: 'en' | 'fr' | 'ar';
  /** Function to change the current language */
  setLanguage: (lang: 'en' | 'fr' | 'ar') => void;
  /** Translation function - returns translated text for given key */
  t: (key: string) => string;
}

/**
 * Translation Context
 * React context for managing and providing translation state
 */
const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

/**
 * Translation Provider Component
 * 
 * Wraps the application to provide translation functionality to all child components.
 * Manages language state and provides translation function.
 * 
 * @param children - Child components that will have access to translations
 */
export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Language state - default to English
  const [language, setLanguage] = useState<'en' | 'fr' | 'ar'>('en');

  /**
   * Translation Function
   * 
   * Retrieves the translated text for a given key in the current language.
   * Falls back to English if translation is missing for current language.
   * 
   * @param key - Translation key in dot notation (e.g., 'hero.title')
   * @returns Translated string in current language, or key itself if not found
   * 
   * @example
   * t('hero.title') // Returns "Smart Queue Management" (en) or "Gestion intelligente des files" (fr)
   */
  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key; // Return key itself if translation not found
    }
    return translation[language] || translation['en'] || key;
  };

  /**
   * Context Value
   * Provides current language, language setter, and translation function
   */
  const value = {
    language,
    setLanguage,
    t,
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};

/**
 * useTranslation Hook
 * 
 * Custom hook to access translation context in components.
 * Must be used within a TranslationProvider.
 * 
 * @returns Translation context value with language, setLanguage, and t function
 * @throws Error if used outside TranslationProvider
 * 
 * @example
 * const { t, language, setLanguage } = useTranslation();
 * const welcomeText = t('hero.title');
 */
export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within TranslationProvider');
  }
  return context;
};
