import DarkModeToggle from "./DarkModeToggle";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = ["home", "projects", "skills", "about", "contact"];

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-4 py-4 shadow-sm transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
        {/* Brand */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-70} // adjust based on your navbar height
          className="cursor-pointer text-2xl font-bold text-gray-800 dark:text-white transition-colors"
        >
          Mark Fox
        </Link>

        {/* Hamburger Menu Toggle - visible only on small screens */}
        <button
          className="sm:hidden text-2xl text-gray-800 dark:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col sm:flex sm:flex-row gap-4 items-center sm:items-start`}
        >
          <Link
            spy={true}
            activeClass="text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 font-semibold"
            to="home"
            smooth={true}
            duration={500}
            offset={-70} // adjust based on your navbar height
            className="cursor-pointer text-gray-600 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Home
          </Link>

          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-70} // adjust based on your navbar height
            className="cursor-pointer text-gray-600 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            spy={true}
            activeClass="text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 font-semibold"
          >
            Projects
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            offset={-70} // adjust based on your navbar height
            spy={true}
            activeClass="text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 font-semibold"
            className="cursor-pointer text-gray-600 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Skills
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-70} // adjust based on your navbar height
            spy={true}
            activeClass="text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 font-semibold"
            className="cursor-pointer text-gray-600 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
          >
            About
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70} // adjust based on your navbar height
            spy={true}
            activeClass="text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 font-semibold"
            className="cursor-pointer text-gray-600 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Contact
          </Link>
          <DarkModeToggle />
          <a
            aria-label="View resume PDF"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow transition text-sm text-center w-full sm:w-auto"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
