import { motion } from "framer-motion";
import { useTranslation } from "@/contexts/TranslationContext";
import AirAlgerieLogo from "@/assets/Air_Algérie_logo.png";
import BankOfAlgeriaLogo from "@/assets/Bank_of_Algeria.png";
import DjezzyLogo from "@/assets/Djezzy_Logo.png";
import SonatrachLogo from "@/assets/Flag_of_Sonatrach.png";
import MobilisLogo from "@/assets/Logo_Mobilis.png";
import OoredooLogo from "@/assets/Ooredoo_logo.svg";
import SonelgazLogo from "@/assets/Sonlgaz.png";
import CNASLogo from "@/assets/cnas.png";

const partnerships = [
  {
    id: 1,
    name: "Air Algérie",
    logo: AirAlgerieLogo,
    description: "National airline partnership"
  },
  {
    id: 2,
    name: "Bank of Algeria",
    logo: BankOfAlgeriaLogo,
    description: "Banking sector collaboration"
  },
  {
    id: 3,
    name: "Djezzy",
    logo: DjezzyLogo,
    description: "Telecommunications partner"
  },
  {
    id: 4,
    name: "Sonatrach",
    logo: SonatrachLogo,
    description: "Energy sector partnership"
  },
  {
    id: 5,
    name: "Mobilis",
    logo: MobilisLogo,
    description: "Mobile network operator"
  },
  {
    id: 6,
    name: "Ooredoo",
    logo: OoredooLogo,
    description: "Telecommunications partner"
  },
  {
    id: 7,
    name: "Sonelgaz",
    logo: SonelgazLogo,
    description: "Electricity and gas provider"
  },
  {
    id: 8,
    name: "CNAS",
    logo: CNASLogo,
    description: "Social security partner"
  }
];

const Partnerships = () => {
  const { t } = useTranslation();
  
  return (
    <section id="partnerships" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("partnerships.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("partnerships.subtitle")}
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="flex w-max gap-8 animate-scroll-infinite">
            {[...partnerships, ...partnerships].map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-32 h-24 border border-border/40 rounded-lg bg-background/50 backdrop-blur-sm"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-28 h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
