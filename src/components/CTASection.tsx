import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="hero-gradient rounded-2xl p-12 md:p-16 text-center relative overflow-hidden"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/70 max-w-lg mx-auto mb-8">
            Join thousands of happy customers and service providers on Servico.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="accent-gradient text-accent-foreground border-0 font-semibold px-8 gap-2"
              onClick={() => navigate("/login?mode=signup")}
            >
              Sign Up as User
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8"
              onClick={() => navigate("/login?type=company&mode=signup")}
            >
              Register as Company
            </Button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
