import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { CalendarCheck, Clock, Star } from "lucide-react";

const UserDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user.type !== "user") navigate("/login");
  }, [user, navigate]);

  if (!user) return null;

  const stats = [
    { label: "My Bookings", value: "3", icon: CalendarCheck },
    { label: "Pending", value: "1", icon: Clock },
    { label: "Reviews Given", value: "5", icon: Star },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header user={user} onLogout={logout} />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h1 className="font-heading text-3xl font-bold text-foreground">My Dashboard</h1>
            <p className="text-muted-foreground mt-1">Welcome back, {user.name}</p>
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

          <div className="bg-card rounded-xl p-8 card-shadow border border-border text-center">
            <p className="text-muted-foreground">Your booking history and active services will appear here.</p>
            <p className="text-sm text-muted-foreground mt-1">Enable cloud for real data persistence.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserDashboard;
