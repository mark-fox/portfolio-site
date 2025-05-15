import React, { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

function DarkModeToggle() {
  const [isDark, setIsDark] = useState(() => {
    return (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  // 🧠 Sync DOM class with localStorage and state
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDark]);

  // 🎯 Toggle handler
  const toggleDark = () => setIsDark((prev) => !prev);

  return (
    <button
      onClick={toggleDark}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 dark:bg-gray-800/70 shadow hover:scale-105 transition-all duration-200"
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <FiSun className="text-yellow-400 drop-shadow-sm" />
      ) : (
        <FiMoon className="text-gray-800 dark:text-white" />
      )}
      <span className="text-sm font-medium text-gray-800 dark:text-gray-100">
        {isDark ? "Light" : "Dark"}
      </span>
    </button>
  );
}

export default DarkModeToggle;
