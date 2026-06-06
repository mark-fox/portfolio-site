import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

function DarkModeToggle() {
  const [isDark, setIsDark] = useState(() => {
    return (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark((prev) => !prev)}
      className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 px-3 py-2 text-sm font-bold text-slate-200 transition hover:bg-white/10 hover:text-white"
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <FiSun className="text-amber-300" aria-hidden="true" />
      ) : (
        <FiMoon className="text-slate-200" aria-hidden="true" />
      )}
      <span>{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}

export default DarkModeToggle;
