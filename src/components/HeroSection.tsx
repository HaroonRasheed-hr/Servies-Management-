import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-illustration.png";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-gradient relative overflow-hidden min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold accent-gradient text-accent-foreground mb-6">
            #1 Services Marketplace
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            All Home Services,{" "}
            <span className="text-gradient">One Platform</span>
          </h1>
          <p className="text-primary-foreground/70 text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
            From cleaning to plumbing, painting to house shifting — find trusted professionals for every need.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="accent-gradient text-accent-foreground border-0 font-semibold px-8 gap-2 text-base"
              onClick={() => navigate("/services")}
            >
              Browse Services
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 text-base"
              onClick={() => navigate("/login?type=company")}
            >
              List Your Service
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block"
        >
          <img
            src={heroImage}
            alt="Home services illustration"
            className="w-full max-w-xl mx-auto animate-float"
          />
        </motion.div>
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-2xl" />
    </section>
  );
};

export default HeroSection;
