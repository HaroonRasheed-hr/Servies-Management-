import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Sparkles,
  Droplets,
  Wrench,
  PaintBucket,
  Truck,
  WashingMachine,
  ShowerHead,
  Hammer,
} from "lucide-react";

const services = [
  { icon: Sparkles, name: "Cleaning", desc: "Home & office deep cleaning", color: "28 95% 55%" },
  { icon: WashingMachine, name: "Washing", desc: "Laundry & fabric care", color: "200 80% 50%" },
  { icon: Wrench, name: "Plumbing", desc: "Pipe repairs & installation", color: "160 70% 42%" },
  { icon: ShowerHead, name: "Tank Washing", desc: "Water tank cleaning service", color: "260 60% 55%" },
  { icon: Droplets, name: "Water Supply", desc: "Tanker & purifier services", color: "210 85% 55%" },
  { icon: Truck, name: "House Shifting", desc: "Packing & moving services", color: "340 70% 55%" },
  { icon: PaintBucket, name: "Painting", desc: "Interior & exterior painting", color: "35 90% 52%" },
  { icon: Hammer, name: "Other Services", desc: "Carpentry, electrical & more", color: "220 50% 45%" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const ServiceCategoryGrid = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">Our Services</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
            What We Offer
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Professional services at your doorstep. Choose from a wide range of trusted providers.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-5"
        >
          {services.map((service) => (
            <motion.div
              key={service.name}
              variants={item}
              onClick={() => navigate("/services")}
              className="group relative bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 cursor-pointer border border-border hover:border-accent/30"
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: `hsl(${service.color} / 0.12)` }}
              >
                <service.icon className="w-6 h-6" style={{ color: `hsl(${service.color})` }} />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-1">{service.name}</h3>
              <p className="text-muted-foreground text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCategoryGrid;
