import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Package, BarChart3, Settings, Trash2, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import AddServiceDialog, { ServiceListing } from "@/components/AddServiceDialog";

const CompanyDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [services, setServices] = useState<ServiceListing[]>([
    { id: 1, name: "Deep Home Cleaning", description: "Professional deep cleaning for your entire home", category: "Cleaning", price: "$50", duration: "3-4 hrs", imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400", available: true },
    { id: 2, name: "Pipe Repair & Fitting", description: "Expert plumbing repairs and new installations", category: "Plumbing", price: "$40", duration: "1-2 hrs", imageUrl: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400", available: true },
  ]);

  useEffect(() => {
    if (!user || user.type !== "company") navigate("/login?type=company");
  }, [user, navigate]);

  if (!user) return null;

  const stats = [
    { label: "Listed Services", value: String(services.length), icon: Package },
    { label: "Total Bookings", value: "48", icon: BarChart3 },
    { label: "Active Jobs", value: "5", icon: Settings },
  ];

  const handleAdd = (service: ServiceListing) => setServices((prev) => [...prev, service]);
  const handleDelete = (id: number) => setServices((prev) => prev.filter((s) => s.id !== id));
  const toggleAvailability = (id: number) => setServices((prev) => prev.map((s) => s.id === id ? { ...s, available: !s.available } : s));

  return (
    <div className="min-h-screen bg-background">
      <Header user={user} onLogout={logout} />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h1 className="font-heading text-3xl font-bold text-foreground">Company Dashboard</h1>
              <p className="text-muted-foreground mt-1">Welcome back, {user.name}</p>
            </div>
            <AddServiceDialog onAdd={handleAdd} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-card rounded-xl p-6 card-shadow border border-border">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-2xl font-heading font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-heading text-xl font-bold text-foreground mb-4">Your Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.id} className={`bg-card rounded-xl overflow-hidden card-shadow border border-border transition-all ${!service.available ? "opacity-60" : ""}`}>
                <img src={service.imageUrl} alt={service.name} className="w-full h-40 object-cover" />
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-heading font-semibold text-foreground">{service.name}</h3>
                      <span className="text-xs text-muted-foreground">{service.category}</span>
                    </div>
                    <span className="font-heading font-bold text-accent">{service.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{service.description}</p>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline" onClick={() => toggleAvailability(service.id)} className="gap-1 text-xs">
                      {service.available ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                      {service.available ? "Hide" : "Show"}
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => handleDelete(service.id)} className="gap-1 text-xs text-destructive hover:text-destructive">
                      <Trash2 className="w-3 h-3" /> Remove
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CompanyDashboard;
