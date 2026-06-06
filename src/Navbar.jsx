import { useState } from "react";
import { Link } from "react-scroll";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import DarkModeToggle from "./DarkModeToggle";

const navItems = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 px-4 py-3 text-white shadow-lg shadow-slate-950/20 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <Link
          to="home"
          smooth
          duration={500}
          offset={-72}
          onClick={closeMenu}
          className="cursor-pointer text-lg font-black tracking-normal text-white"
        >
          Mark Fox
        </Link>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-xl text-white sm:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <div
          className={`absolute left-4 right-4 top-[64px] rounded-lg border border-white/10 bg-slate-950 p-4 shadow-xl sm:static sm:flex sm:items-center sm:gap-2 sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none ${
            menuOpen ? "block" : "hidden sm:flex"
          }`}
        >
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth
                spy
                duration={500}
                offset={-72}
                onClick={closeMenu}
                activeClass="text-cyan-200 bg-white/10"
                className="cursor-pointer rounded-md px-3 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mt-3 flex flex-col gap-2 border-t border-white/10 pt-3 sm:ml-2 sm:mt-0 sm:flex-row sm:items-center sm:border-0 sm:pt-0">
            <DarkModeToggle />
            <a
              aria-label="View resume PDF"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-300 px-4 py-2 text-sm font-black text-slate-950 transition hover:bg-cyan-200"
            >
              <FiDownload aria-hidden="true" />
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
