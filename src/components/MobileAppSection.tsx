import { motion } from "framer-motion";
import { Smartphone, Download, ScanLine } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileAppSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="bg-card rounded-2xl card-shadow border border-border overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left: Content */}
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-accent/10 text-accent mb-6 w-fit">
                Mobile App
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
                Mobile App for<br />
                <span className="text-gradient">Human Escalation</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-md leading-relaxed">
                Jump in when needed and assist your customers—all from your phone with the Servico App.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="lg" className="accent-gradient text-accent-foreground border-0 font-semibold gap-2">
                  <Download className="w-4 h-4" /> Download Now!
                </Button>
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                  <span>or</span>
                  <div className="flex items-center gap-2 bg-muted rounded-lg px-4 py-2">
                    <ScanLine className="w-4 h-4" />
                    <span className="font-medium">Scan QR Code</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-3 uppercase tracking-wider">SERVICO APP</p>
            </div>

            {/* Right: Phone mockup */}
            <div className="relative flex items-center justify-center p-10 bg-muted/30">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="w-64 h-[480px] rounded-[2.5rem] bg-gradient-to-b from-foreground/90 to-foreground/70 p-3 shadow-2xl">
                  <div className="w-full h-full rounded-[2rem] bg-background overflow-hidden flex flex-col">
                    <div className="bg-accent/10 px-5 py-4 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                        <Smartphone className="w-4 h-4 text-accent-foreground" />
                      </div>
                      <span className="font-heading font-semibold text-sm text-foreground">Servico Agent</span>
                    </div>
                    <div className="flex-1 px-4 py-3 space-y-3">
                      <div className="bg-muted rounded-xl rounded-tl-sm px-3 py-2 text-xs text-foreground max-w-[85%]">
                        Hi! How can I help you today?
                      </div>
                      <div className="bg-accent/10 rounded-xl rounded-tr-sm px-3 py-2 text-xs text-foreground ml-auto max-w-[85%]">
                        I need plumbing help ASAP
                      </div>
                      <div className="bg-muted rounded-xl rounded-tl-sm px-3 py-2 text-xs text-foreground max-w-[85%]">
                        Connecting you to a specialist now! 🔧
                      </div>
                    </div>
                    <div className="px-4 pb-4">
                      <div className="bg-muted rounded-full px-4 py-2 text-xs text-muted-foreground">Type a message...</div>
                    </div>
                  </div>
                </div>
                {/* Decorative glow */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/15 rounded-full blur-3xl" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppSection;
