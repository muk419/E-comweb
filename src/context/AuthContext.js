"use client";
import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const AuthContext = createContext();
console.log("AuthContext", AuthContext);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    checkSession();
  }, []);

  const checkSession = () => {
    const token = Cookies.get("accessToken");
    if (token) {
      // In a real app, you might validate the token with an API here
      setUser({ token });
    }
    setLoading(false);
  };

  const login = (userData, token) => {
    // Set cookie using js-cookie
    // 30 minutes expiry to match previous logic (30/1440 days)
    Cookies.set("accessToken", token, {
      expires: 30 / 1440,
      sameSite: 'strict',
      path: '/'
    });

    // Set login time for potential client-side checks
    localStorage.setItem("loginTime", Date.now());

    setUser({ ...userData, token });
    router.push("/");
  };

  const logout = () => {
    Cookies.remove("accessToken");
    localStorage.removeItem("loginTime");
    setUser(null);
    router.push("/Login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
