import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Calendar, Clock } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";
import queueManagement from "@/assets/queue-management.png";
const Hero = () => {
  const {
    t
  } = useTranslation();
  return <section className="min-h-screen flex items-center bg-gradient-subtle pt-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }} className="space-y-8">
            

            <motion.h1 initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.3
          }} className="text-4xl lg:text-6xl font-bold leading-tight text-foreground">
              {t("hero.title")}
            </motion.h1>

            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.5
          }} className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              {t("hero.subtitle")}
            </motion.p>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.7
          }} className="flex gap-4 rtl:flex-row-reverse">
              <Button variant="hero" size="xl" className="group shadow-elegant">
                {t("hero.cta")}
                <motion.div className={`${t("hero.cta").length > 20 ? 'mr-2 rtl:ml-2 rtl:mr-0' : 'ml-2 rtl:mr-2 rtl:ml-0'}`} animate={{
                x: [0, 5, 0]
              }} transition={{
                duration: 1.5,
                repeat: Infinity
              }}>
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Button>
              <Button variant="outline" size="xl" className="group">
                {t("hero.demo")}
              </Button>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.9
          }} className="grid grid-cols-3 gap-6 pt-8">
              <div className="flex flex-col items-start space-y-1">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-2xl font-bold text-foreground">25K+</span>
                </div>
                <span className="text-xs text-muted-foreground">
                  {t("hero.stat1")}
                </span>
              </div>
              <div className="flex flex-col items-start space-y-1">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <Calendar className="w-5 h-5 text-secondary" />
                  <span className="text-2xl font-bold text-foreground">500+</span>
                </div>
                <span className="text-xs text-muted-foreground">
                  {t("hero.stat2")}
                </span>
              </div>
              <div className="flex flex-col items-start space-y-1">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-2xl font-bold text-foreground">45min</span>
                </div>
                <span className="text-xs text-muted-foreground">
                  {t("hero.stat3")}
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 1,
          delay: 0.4,
          ease: "easeOut"
        }} className="relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden">
              <img src={queueManagement} alt="Queue Management Dashboard" className="w-[800px] h-auto rounded-3xl mx-auto" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Hero;