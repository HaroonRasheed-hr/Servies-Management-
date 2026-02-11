import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X, User, LogOut, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  user?: { name: string; type: "user" | "company" } | null;
  onLogout?: () => void;
}

const Header = ({ user, onLogout }: HeaderProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg accent-gradient flex items-center justify-center">
            <span className="text-accent-foreground font-heading font-bold text-sm">S</span>
          </div>
          <span className="font-heading font-bold text-xl text-foreground">Servico</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <Link to="/services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Services
          </Link>
          <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                  <User className="w-4 h-4" />
                  {user.name}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => navigate(user.type === "company" ? "/company-dashboard" : "/user-dashboard")}>
                  <LayoutDashboard className="w-4 h-4 mr-2" />
                  Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem onClick={onLogout}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button variant="ghost" size="sm" onClick={() => navigate("/login")}>
                Log In
              </Button>
              <Button size="sm" className="accent-gradient text-accent-foreground border-0" onClick={() => navigate("/login?mode=signup")}>
                Sign Up
              </Button>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
          <Link to="/" className="block text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link to="/services" className="block text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>Services</Link>
          {user ? (
            <>
              <Link to={user.type === "company" ? "/company-dashboard" : "/user-dashboard"} className="block text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>Dashboard</Link>
              <button className="block text-sm font-medium text-muted-foreground" onClick={() => { onLogout?.(); setMobileOpen(false); }}>Logout</button>
            </>
          ) : (
            <div className="flex gap-2 pt-2">
              <Button variant="ghost" size="sm" onClick={() => { navigate("/login"); setMobileOpen(false); }}>Log In</Button>
              <Button size="sm" className="accent-gradient text-accent-foreground border-0" onClick={() => { navigate("/login?mode=signup"); setMobileOpen(false); }}>Sign Up</Button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
