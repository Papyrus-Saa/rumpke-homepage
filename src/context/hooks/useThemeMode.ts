import { useState, useEffect } from "react";

export type Theme = "light" | "dark";

export function useThemeMode() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem("theme") as Theme | null;
      const systemPref: Theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      return saved || systemPref;
    }
    return "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };
  return { theme, toggleTheme };
}
