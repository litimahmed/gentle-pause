/**
 * Contact Us Page Component
 * 
 * This dedicated page provides multiple ways for users to contact Toorrii,
 * including a contact form and company information.
 * 
 * Page Sections:
 * - Contact Information Cards: Email, Phone, Location, Business Hours
 * - Contact Form: Name, Email, Subject, Message fields
 * 
 * Features:
 * - Multi-language support (FR, AR, EN)
 * - RTL (Right-to-Left) support for Arabic
 * - Form validation (required fields, email format)
 * - Toast notifications for form submission feedback
 * - Responsive design with mobile-friendly layout
 * - Animated card entrances with framer-motion
 * - Icon-based contact information display
 * 
 * Form Behavior:
 * - Client-side validation
 * - Form reset after successful submission
 * - Success message via toast notification
 * 
 * @component
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, ArrowLeft, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "@/contexts/TranslationContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

/**
 * ContactUsPage Component
 * 
 * Manages contact form state and renders the contact page layout.
 */
const ContactUsPage = () => {
  const { t, language } = useTranslation();
  
  /**
   * Form State
   * Manages all form field values
   */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  /**
   * Contact Information Configuration
   * Array of contact methods with icons, titles, and values
   */
  const contactInfo = [
    {
      icon: Mail,
      title: t("contact.email"),
      value: "contact@toorrii.com",
      color: "text-primary",
    },
    {
      icon: Phone,
      title: t("contact.phone"),
      value: "+213 (0) 123 456 789",
      color: "text-secondary",
    },
    {
      icon: MapPin,
      title: t("contact.location"),
      value: "Algiers, Algeria",
      color: "text-primary",
    },
    {
      icon: Clock,
      title: t("contact.hours"),
      value: t("contact.hoursValue"),
      color: "text-secondary",
    },
  ];

  /**
   * Form Submission Handler
   * 
   * Processes form submission and shows success notification.
   * In production, this would send data to a backend API.
   * 
   * @param e - Form submit event
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Show success toast notification
    toast.success(t("contactPage.successMessage"));
    // Reset form to initial state
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  /**
   * Form Input Change Handler
   * 
   * Updates form state when user types in input fields.
   * 
   * @param e - Input change event
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /**
   * Render contact page with:
   * - Header with global navigation
   * - Back to home button
   * - Page title and subtitle
   * - Contact information cards
   * - Contact form
   * - Footer with site links
   * 
   * RTL support is enabled via dir attribute based on language
   */
  return (
    <div className="min-h-screen bg-background" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Header />
      
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back Button - Animated entrance from left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link to="/">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                {t("aboutPage.backToHome")}
              </Button>
            </Link>
          </motion.div>

          {/* Page Header - Animated fade in from top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t("contact.title")}
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("contact.subtitle")}
            </p>
          </motion.div>

          {/* Contact Info Cards - Grid layout with staggered animation */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }} // Staggered animation delay
              >
                <Card className="h-full hover:shadow-card transition-shadow">
                  <CardContent className="pt-6 text-center">
                    {/* Icon container with background color */}
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <info.icon className={`w-6 h-6 ${info.color}`} />
                    </div>
                    <h3 className="font-semibold mb-2">{info.title}</h3>
                    <p className="text-sm text-muted-foreground">{info.value}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Form - Animated entrance with delay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email - Grid layout for desktop */}
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Name Field */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        {t("contactPage.name")}
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder={t("contactPage.namePlaceholder")}
                      />
                    </div>
                    {/* Email Field */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        {t("contactPage.email")}
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder={t("contactPage.emailPlaceholder")}
                      />
                    </div>
                  </div>
                  
                  {/* Subject Field */}
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      {t("contactPage.subject")}
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder={t("contactPage.subjectPlaceholder")}
                    />
                  </div>
                  
                  {/* Message Field - Textarea for longer content */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      {t("contactPage.message")}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder={t("contactPage.messagePlaceholder")}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" size="lg" className="w-full gap-2">
                    <Send className="w-4 h-4" />
                    {t("contactPage.submit")}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUsPage;
