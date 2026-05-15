import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext(null);

const defaultUsers = {
  employee1: { username: "employee1", password: "employee1", role: "employee" },
  admin: { username: "admin", password: "admin1", role: "admin" },
};

function loadUsers() {
  try {
    const stored = window.localStorage.getItem("authUsers");
    return stored ? JSON.parse(stored) : defaultUsers;
  } catch {
    return defaultUsers;
  }
}

function loadCurrentUser() {
  try {
    const stored = window.localStorage.getItem("authCurrentUser");
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [users, setUsers] = useState(loadUsers());
  const [currentUser, setCurrentUser] = useState(loadCurrentUser());

  useEffect(() => {
    window.localStorage.setItem("authUsers", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    if (currentUser) {
      window.localStorage.setItem(
        "authCurrentUser",
        JSON.stringify(currentUser),
      );
    } else {
      window.localStorage.removeItem("authCurrentUser");
    }
  }, [currentUser]);

  const login = (username, password) => {
    const normalized = username.trim().toLowerCase();
    const user = users[normalized];
    if (!user) {
      return {
        success: false,
        message: "No account found with that username.",
      };
    }
    if (user.password !== password) {
      return { success: false, message: "Password is incorrect. Try again." };
    }
    setCurrentUser(user);
    return { success: true, user };
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const signup = (username, password) => {
    const normalized = username.trim().toLowerCase();
    if (!normalized || !password.trim()) {
      return {
        success: false,
        message: "Please provide both a username and password.",
      };
    }
    if (users[normalized]) {
      return { success: false, message: "That username is already taken." };
    }

    const newUser = {
      username: normalized,
      password,
      role: "customer",
    };

    setUsers((prev) => ({
      ...prev,
      [normalized]: newUser,
    }));

    return { success: true };
  };

  const value = useMemo(
    () => ({ currentUser, login, logout, signup }),
    [currentUser],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
}
