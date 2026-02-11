import { motion } from "framer-motion";
import { Search, CalendarCheck, Star } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Find a Service",
    desc: "Browse through our wide range of home services and pick what you need.",
  },
  {
    icon: CalendarCheck,
    title: "Book Instantly",
    desc: "Choose your preferred time and date, and confirm your booking in seconds.",
  },
  {
    icon: Star,
    title: "Get It Done",
    desc: "Our verified professionals arrive on time and deliver quality work.",
  },
];

const HowItWorks = () => (
  <section className="py-24 bg-muted/50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-accent text-sm font-semibold uppercase tracking-wider">Simple Process</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
          How It Works
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-2xl accent-gradient flex items-center justify-center mx-auto mb-5">
              <step.icon className="w-7 h-7 text-accent-foreground" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{step.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
