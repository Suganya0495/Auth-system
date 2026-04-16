import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [message, setMessage] = useState([]);

  // LOGIN
  const login = (username) => {
    if (!username) {
      setMessage(["Enter username"]);
      return;
    }

    localStorage.setItem("user", username);
    setUser(username);
    setMessage(["Login successful"]);
  };

  // REGISTER WITH FULL VALIDATION
  const register = (username, password) => {
    let errors = [];

    if (!username) {
      errors.push("Username is required");
    }

    if (password.length < 6) {
      errors.push("At least 6 characters");
    }

    if (!/[0-9]/.test(password)) {
      errors.push("At least 1 number");
    }

    if (!/[!@#$%^&*]/.test(password)) {
      errors.push("At least 1 special character");
    }

    if (errors.length > 0) {
      setMessage(errors);
      return;
    }

    localStorage.setItem("user", username);
    setUser(username);
    setMessage(["Registered successfully"]);
  };

  // LOGOUT
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setMessage(["Logged out successfully"]);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, message }}>
      {children}
    </AuthContext.Provider>
  );
}