import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, LogIn, Users } from "lucide-react";
import { LanguageToggle } from "@/components/LanguageToggle";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useTranslation } from "@/contexts/TranslationContext";
import ToorriiLogo from "@/assets/toorrii-logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const navItems = [
    { name: t('nav.partnerships'), href: '/#partnerships' },
    { name: t('nav.aboutUs'), href: '/about-us' },
    { name: t('nav.privacy'), href: '/privacy-policy' },
    { name: t('nav.contact'), href: '/contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="h-16">
            <div className="flex items-center h-full relative left-4 bottom-1">
              <img 
                src={ToorriiLogo} 
                alt="Toorrii Logo" 
                className="h-full w-auto object-contain scale-[2]"
              />
            </div> 
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
            {navItems.map((item, index) => (
              <motion.div key={item.name}>
                <Link
                  to={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors relative inline-block"
                >
                  <motion.span
                    className="block"
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.name}
                  </motion.span>
                  <motion.div
                    className="absolute -bottom-1 ltr:left-0 rtl:right-0 w-0 h-0.5 bg-primary"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.div
            className="flex items-center space-x-3 rtl:space-x-reverse"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <LanguageToggle />
            <Button variant="outline" size="lg" className="hidden sm:inline-flex gap-2 font-semibold">
              <Users className="w-4 h-4" />
              {t('nav.clientPortal')}
            </Button>
            <Button variant="default" size="lg" className="hidden lg:inline-flex gap-2 font-semibold shadow-elegant">
              <LogIn className="w-4 h-4" />
              {t('nav.signin')}
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5 text-primary" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-6 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-6 border-t border-border space-y-4">
                    <Button variant="outline" size="lg" className="w-full justify-center gap-2 font-semibold">
                      <Users className="w-4 h-4" />
                      {t('nav.clientPortal')}
                    </Button>
                    <Button variant="default" size="lg" className="w-full justify-center gap-2 font-semibold shadow-elegant">
                      <LogIn className="w-4 h-4" />
                      {t('nav.signin')}
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;