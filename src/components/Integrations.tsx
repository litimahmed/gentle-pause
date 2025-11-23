import { motion } from "framer-motion";
import { Calendar, Smartphone, Mail, CreditCard, MessageSquare, Bell } from "lucide-react";

const integrations = [
  { name: "Google Calendar", icon: Calendar, color: "text-blue-500" },
  { name: "Mobile Apps", icon: Smartphone, color: "text-green-500" },
  { name: "Email Marketing", icon: Mail, color: "text-purple-500" },
  { name: "Payment Systems", icon: CreditCard, color: "text-orange-500" },
  { name: "SMS Notifications", icon: MessageSquare, color: "text-pink-500" },
  { name: "Push Alerts", icon: Bell, color: "text-indigo-500" }
];

const Integrations = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Seamless Integrations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with the tools you already use. Toorrii integrates with popular platforms to streamline your workflow.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                className="bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300 text-center"
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-primary/10 group-hover:bg-gradient-primary/20 transition-colors duration-300"
                  whileHover={{ rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <integration.icon 
                    className={`w-8 h-8 ${integration.color} group-hover:scale-110 transition-transform duration-300`} 
                  />
                </motion.div>
                <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors duration-300">
                  {integration.name}
                </h3>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm rounded-full px-6 py-3 border border-primary/20">
            <span className="text-sm font-medium text-primary">
              50+ integrations available
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Integrations;