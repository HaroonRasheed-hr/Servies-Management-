import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth, UserType } from "@/context/AuthContext";
import { Building2, User } from "lucide-react";

const Login = () => {
  const [searchParams] = useSearchParams();
  const initialType = (searchParams.get("type") as UserType) || "user";
  const initialMode = searchParams.get("mode") === "signup" ? "signup" : "login";

  const [userType, setUserType] = useState<UserType>(initialType);
  const [mode, setMode] = useState<"login" | "signup">(initialMode);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const displayName = mode === "signup" ? name : email.split("@")[0];
    login({ name: displayName, email, type: userType });
    navigate(userType === "company" ? "/company-dashboard" : "/");
  };

  return (
    <div className="min-h-screen hero-gradient flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-card rounded-2xl p-8 card-shadow"
      >
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-xl accent-gradient flex items-center justify-center mx-auto mb-4">
            <span className="text-accent-foreground font-heading font-bold text-lg">S</span>
          </div>
          <h1 className="font-heading text-2xl font-bold text-foreground">
            {mode === "login" ? "Welcome Back" : "Create Account"}
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            {mode === "login" ? "Sign in to your account" : "Join Servico today"}
          </p>
        </div>

        {/* Type toggle */}
        <div className="flex bg-muted rounded-lg p-1 mb-6">
          <button
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-md text-sm font-medium transition-all ${
              userType === "user"
                ? "bg-card card-shadow text-foreground"
                : "text-muted-foreground"
            }`}
            onClick={() => setUserType("user")}
          >
            <User className="w-4 h-4" />
            User
          </button>
          <button
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-md text-sm font-medium transition-all ${
              userType === "company"
                ? "bg-card card-shadow text-foreground"
                : "text-muted-foreground"
            }`}
            onClick={() => setUserType("company")}
          >
            <Building2 className="w-4 h-4" />
            Company
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "signup" && (
            <div>
              <Label htmlFor="name">{userType === "company" ? "Company Name" : "Full Name"}</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={userType === "company" ? "Acme Services" : "John Doe"}
                required
                className="mt-1.5"
              />
            </div>
          )}
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="mt-1.5"
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="mt-1.5"
            />
          </div>

          <Button type="submit" className="w-full accent-gradient text-accent-foreground border-0 font-semibold">
            {mode === "login" ? "Sign In" : "Create Account"}
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-6">
          {mode === "login" ? "Don't have an account? " : "Already have an account? "}
          <button
            className="text-accent font-medium hover:underline"
            onClick={() => setMode(mode === "login" ? "signup" : "login")}
          >
            {mode === "login" ? "Sign Up" : "Sign In"}
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
