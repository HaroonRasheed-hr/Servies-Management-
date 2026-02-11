import { createContext, useContext, useState, ReactNode } from "react";

export type UserType = "user" | "company";

export interface AppUser {
  name: string;
  email: string;
  type: UserType;
}

interface AuthContextType {
  user: AppUser | null;
  login: (user: AppUser) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AppUser | null>(null);

  const login = (u: AppUser) => setUser(u);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
