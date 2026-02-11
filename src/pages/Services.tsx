import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useAuth } from "@/context/AuthContext";
import { motion } from "framer-motion";
import { Sparkles, Droplets, Wrench, PaintBucket, Truck, WashingMachine, ShowerHead, Hammer, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingDialog from "@/components/BookingDialog";

const serviceImages: Record<string, string> = {
  "Deep Home Cleaning": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400",
  "Laundry & Ironing": "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=400",
  "Pipe Repair & Fitting": "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400",
  "Water Tank Cleaning": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400",
  "Water Tanker Supply": "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400",
  "Home Relocation": "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=400",
  "Interior Painting": "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=400",
  "Furniture Assembly": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400",
  "Office Cleaning": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400",
  "Exterior Painting": "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400",
  "Drain Unclogging": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400",
  "Carpet Washing": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400",
};

const allServices = [
  { id: 1, name: "Deep Home Cleaning", category: "Cleaning", icon: Sparkles, price: "$50", rating: 4.8, duration: "3-4 hrs", provider: "CleanPro", color: "28 95% 55%" },
  { id: 2, name: "Laundry & Ironing", category: "Washing", icon: WashingMachine, price: "$25", rating: 4.6, duration: "1-2 hrs", provider: "FreshWash", color: "200 80% 50%" },
  { id: 3, name: "Pipe Repair & Fitting", category: "Plumbing", icon: Wrench, price: "$40", rating: 4.9, duration: "1-2 hrs", provider: "FixIt Plumbing", color: "160 70% 42%" },
  { id: 4, name: "Water Tank Cleaning", category: "Tank Washing", icon: ShowerHead, price: "$60", rating: 4.7, duration: "2-3 hrs", provider: "AquaClean", color: "260 60% 55%" },
  { id: 5, name: "Water Tanker Supply", category: "Water Supply", icon: Droplets, price: "$35", rating: 4.5, duration: "30 min", provider: "WaterWorks", color: "210 85% 55%" },
  { id: 6, name: "Home Relocation", category: "House Shifting", icon: Truck, price: "$150", rating: 4.8, duration: "Full day", provider: "SwiftMove", color: "340 70% 55%" },
  { id: 7, name: "Interior Painting", category: "Painting", icon: PaintBucket, price: "$200", rating: 4.9, duration: "2-3 days", provider: "ColorCraft", color: "35 90% 52%" },
  { id: 8, name: "Furniture Assembly", category: "Other", icon: Hammer, price: "$45", rating: 4.6, duration: "1-2 hrs", provider: "HandyMan Co.", color: "220 50% 45%" },
  { id: 9, name: "Office Cleaning", category: "Cleaning", icon: Sparkles, price: "$80", rating: 4.7, duration: "4-5 hrs", provider: "SparkleTeam", color: "28 95% 55%" },
  { id: 10, name: "Exterior Painting", category: "Painting", icon: PaintBucket, price: "$350", rating: 4.8, duration: "3-5 days", provider: "PaintPros", color: "35 90% 52%" },
  { id: 11, name: "Drain Unclogging", category: "Plumbing", icon: Wrench, price: "$30", rating: 4.5, duration: "1 hr", provider: "DrainMaster", color: "160 70% 42%" },
  { id: 12, name: "Carpet Washing", category: "Washing", icon: WashingMachine, price: "$40", rating: 4.4, duration: "2-3 hrs", provider: "FreshWash", color: "200 80% 50%" },
];

const categories = ["All", "Cleaning", "Washing", "Plumbing", "Tank Washing", "Water Supply", "House Shifting", "Painting", "Other"];

const Services = () => {
  const { user, logout } = useAuth();
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();
  const [bookingService, setBookingService] = useState<typeof allServices[0] | null>(null);

  const filtered = activeCategory === "All" ? allServices : allServices.filter((s) => s.category === activeCategory);

  const handleBook = (service: typeof allServices[0]) => {
    if (!user) {
      navigate("/login");
      return;
    }
    setBookingService(service);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header user={user} onLogout={logout} />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Browse Services</h1>
            <p className="text-muted-foreground mt-2">Find the perfect professional for your needs</p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "accent-gradient text-accent-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-card rounded-xl overflow-hidden card-shadow border border-border hover:border-accent/30 hover:card-shadow-hover transition-all"
              >
                <img
                  src={serviceImages[service.name] || "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400"}
                  alt={service.name}
                  className="w-full h-44 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `hsl(${service.color} / 0.12)` }}
                    >
                      <service.icon className="w-4 h-4" style={{ color: `hsl(${service.color})` }} />
                    </div>
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-foreground text-lg mb-1">{service.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">by {service.provider}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-5">
                    <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 text-accent fill-accent" /> {service.rating}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {service.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-xl font-bold text-foreground">{service.price}</span>
                    <Button
                      size="sm"
                      className="accent-gradient text-accent-foreground border-0 font-medium"
                      onClick={() => handleBook(service)}
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />

      {bookingService && (
        <BookingDialog
          open={!!bookingService}
          onOpenChange={(open) => !open && setBookingService(null)}
          serviceName={bookingService.name}
          servicePrice={bookingService.price}
          providerName={bookingService.provider}
        />
      )}
    </div>
  );
};

export default Services;
