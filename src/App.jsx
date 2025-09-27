import React from "react";
import Navbar from "./Navbar";
import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiFlask,
  SiJupyter,
  SiGithub,
  SiHtml5,
  SiCss3,
  SiGit,
  SiHuggingface,
  SiDotnet,
} from "react-icons/si";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/404";

function App() {
  // Tracks whether dark mode is enabled and updates icon state
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  // Force dark mode on initial load
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  // Mobile formatting
  const [menuOpen, setMenuOpen] = useState(false);

  // Handles contact form submission status
  const [status, setStatus] = useState("idle");
  // Contact form submission logic
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/xjkwoqwa", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    const result = await response.json();

    if (result.ok || response.ok) {
      setStatus("success");
      e.target.reset(); // clear form
    } else {
      setStatus("error");
    }
  };

  // Controls visibility of scroll-to-top button
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Scrolls user to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Project tag filtering logic
  const allTags = [
    "All",
    ...new Set(projects.flatMap((proj) => proj.tags || [])),
  ];
  const [selectedTag, setSelectedTag] = useState("All");
  const filteredProjects =
    selectedTag === "All"
      ? projects
      : projects.filter((proj) => proj.tags?.includes(selectedTag));

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />

            <div
              className="min-h-screen bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/background.svg')" }}
            >
              <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="max-w-6xl mx-auto border-x border-gray-300 dark:border-gray-700 backdrop-blur-sm bg-gray-50/90 dark:bg-gray-900/70 shadow-md transition-colors">
                  <main className="px-6 py-10 bg-white/10 backdrop-blur-md border border-white/20 dark:border-gray-700 shadow-xl rounded-xl">
                    {/* 🏠 HOME SECTION */}
                    <section
                      aria-labelledby="home"
                      id="home"
                      className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen flex items-center justify-center px-4 pt-24 transition-colors"
                    >
                      <div className="max-w-2xl text-center space-y-6">
                        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-600">
                          Mark Fox
                        </h1>
                        <p
                          className="text-xl"
                          data-aos="fade-up"
                          data-aos-delay="100"
                        >
                          AI Engineer & Full-Stack Developer passionate about
                          building intelligent, useful tools.
                        </p>

                        <div className="flex justify-center gap-6 text-blue-600 dark:text-blue-400 text-lg">
                          <a
                            href="https://github.com/mark-fox"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            GitHub
                          </a>
                          <a
                            href="https://linkedin.com/in/markfox1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            LinkedIn
                          </a>
                          <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            Resume
                          </a>
                        </div>
                      </div>
                    </section>

                    {/* DIVIDER */}
                    <div className="h-20 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800" />

                    {/* PROJECTS SECTION */}
                    <section
                      aria-labelledby="projects"
                      id="projects"
                      className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100"
                    >
                      <div className="max-w-6xl mx-auto">
                        <h2
                          className="text-4xl font-extrabold tracking-tight text-center text-gray-800 dark:text-white mb-10"
                          data-aos="fade-up"
                        >
                          Projects
                        </h2>
                        <div className="flex flex-wrap justify-center gap-4 mb-10">
                          {allTags.map((tag) => (
                            <button
                              key={tag}
                              onClick={() => setSelectedTag(tag)}
                              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                                selectedTag === tag
                                  ? "bg-blue-600 text-white"
                                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                              }`}
                            >
                              {tag}
                            </button>
                          ))}
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                          {filteredProjects.map((proj, index) => (
                            <div
                              key={index}
                              data-aos="fade-up"
                              data-aos-delay={index * 100}
                            >
                              <ProjectCard key={index} {...proj} />
                            </div>
                          ))}
                        </div>
                      </div>
                    </section>

                    {/* SKILLS SECTION */}
                    <section
                      aria-labelledby="skills"
                      id="skills"
                      className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-16 px-4 transition-colors"
                    >
                      <div
                        className="max-w-4xl mx-auto text-center space-y-10"
                        data-aos="fade-up"
                      >
                        <h2 className="text-4xl font-extrabold tracking-tight">
                          Skills
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                          A selection of tools, libraries, and platforms I’ve
                          worked with or am currently exploring.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base">
                          {skills.map((skill, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm"
                            >
                              <span className="text-lg">{skill.icon}</span>
                              {skill.name}
                            </div>
                          ))}
                        </div>
                      </div>
                    </section>

                    {/* About section */}
                    <section
                      aria-labelledby="about"
                      id="about"
                      className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-16 px-4 transition-colors"
                    >
                      <div
                        className="max-w-3xl mx-auto text-center space-y-6"
                        data-aos="fade-up"
                      >
                        {/* 👤 Avatar */}
                        <div className="relative flex justify-center">
                          <div className="absolute w-60 h-60 bg-blue-500 blur-2xl opacity-30 rounded-full dark:opacity-50" />
                          <img
                            src="/avatar.png"
                            alt="Mark Fox"
                            className="w-48 h-48 rounded-full shadow-lg border-4 border-white dark:border-gray-700 animate-float relative"
                          />
                        </div>
                        <h2 className="text-4xl font-extrabold tracking-tight text-gray-800 dark:text-white">
                          About Me
                        </h2>
                        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
                          I'm a software engineer with a passion for building
                          smart, intuitive, and useful tools. While I enjoy the
                          frontend experience and visual design, I'm also
                          working toward mastering AI engineering through
                          hands-on learning and certification.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
                          I enjoy building solutions that are both practical and
                          intuitive, with a focus on real-world usability. While
                          I value structure and clarity, I also stay curious —
                          exploring new tools and technologies to improve the
                          way things work. Whether I’m refining a user interface
                          or simplifying a backend flow, my goal is always the
                          same: make it work, make it clear, and make it better.
                        </p>
                        <div className="mt-6">
                          <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow transition text-sm"
                          >
                            View My Resume
                          </a>
                        </div>
                      </div>
                    </section>

                    {/* Contact section */}
                    <section
                      aria-labelledby="contact"
                      id="contact"
                      className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-16 px-4 transition-colors"
                    >
                      <div
                        className="max-w-2xl mx-auto space-y-8 text-center"
                        data-aos="fade-up"
                      >
                        <h2 className="text-4xl font-extrabold tracking-tight">
                          Contact Me
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                          Interested in working together or just want to say hi?
                          Drop me a message below.
                        </p>

                        <form
                          onSubmit={handleSubmit}
                          className="space-y-6 text-left"
                        >
                          <input
                            type="text"
                            name="name"
                            required
                            placeholder="Your Name"
                            className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <input
                            type="email"
                            name="email"
                            required
                            placeholder="Your Email"
                            className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <textarea
                            name="message"
                            required
                            rows="5"
                            placeholder="Your Message"
                            className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded transition-colors w-full"
                          >
                            {status === "loading"
                              ? "Sending..."
                              : "Send Message"}
                          </button>
                          {status === "success" && (
                            <p className="text-green-600 dark:text-green-400 mt-2">
                              ✅ Message sent! I'll get back to you soon.
                            </p>
                          )}
                          {status === "error" && (
                            <p className="text-red-600 dark:text-red-400 mt-2">
                              ❌ Oops! Something went wrong. Please try again
                              later.
                            </p>
                          )}
                        </form>
                      </div>
                    </section>

                    {/* Footer section */}
                    <footer className="bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-sm py-6 px-4 transition-colors">
                      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
                        <p>
                          &copy; {new Date().getFullYear()} Mark Fox. All rights
                          reserved.
                        </p>
                        <div className="flex gap-4">
                          <a
                            href="mailto:mfox47@gmail.com"
                            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
                          >
                            Email
                          </a>
                          <a
                            href="https://github.com/mark-fox"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
                          >
                            GitHub
                          </a>
                          <a
                            href="https://linkedin.com/in/markfox1"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
                          >
                            LinkedIn
                          </a>
                        </div>
                      </div>
                    </footer>
                  </main>
                </div>
              </div>
            </div>

            {/* Scroll to top button */}
            {showButton && (
              <button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition transform hover:scale-110 dark:bg-blue-500 dark:hover:bg-blue-400"
                aria-label="Scroll to top"
              >
                ↑
              </button>
            )}
          </>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

// Static list of projects
const projects = [
  {
  title: "AI Document Analyzer",
  tags: ["AI", "NLP", "LangChain", "FastAPI", "React"],
  description:
    "Full-stack app that lets users upload PDFs, embed text into a FAISS index, and query them with extractive QA.",
  tech: "Python, FastAPI, LangChain, Hugging Face, React",
  image: "/doc_analyzer.PNG", 
  repo: "https://github.com/mark-fox/ai-doc-analyzer",
  demo: "", 
},
{
    title: "AI Sentiment & Image Classifier",
    tags: ["AI", "React", "Flask", "Hugging Face", "Tailwind"],
    description:
      "Full-stack app using React + Flask + Hugging Face to analyze sentiment and classify uploaded images.",
    tech: "React, Flask, Hugging Face, Tailwind",
    image: "/demo.gif",
    repo: "https://github.com/mark-fox/ai-certification-prep/tree/main/week5-final-project",
    demo: "",
  },
  {
    title: "Data Wrangling Notebook",
    tags: ["Python", "Pandas", "Jupyter"],
    description:
      "Exploratory data analysis using Pandas and Jupyter with markdown insights and visuals.",
    tech: "Python, Pandas, Jupyter",
    image: "/datawrangling.png",
    repo: "https://github.com/mark-fox/ai-certification-prep/tree/main/week2-data-wrangling",
    demo: "",
  },
  {
    title: "Pretrained Model Playground",
    tags: ["Python", "Jupyter"],
    description:
      "A Jupyter notebook exploring Hugging Face pipelines for text classification and image labeling.",
    tech: "Python, Transformers, Jupyter",
    image: "", // intentionally blank to show fallback
    repo: "https://github.com/mark-fox/ai-certification-prep/tree/main/week3-pretrained-models",
    demo: "",
  },
  {
    title: "Personal Portfolio Website",
    tags: ["React", "Tailwind"],
    description:
      "A responsive, dark-mode-enabled portfolio site built with React, Tailwind, and Vite to showcase projects and skills.",
    tech: "React, Tailwind CSS, Vite, AOS",
    image: "/preview.png",
    repo: "https://github.com/mark-fox/portfolio-site",
    demo: "",
  },
];

// Static list of icons
const skills = [
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React", icon: <SiReact /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Python", icon: <SiPython /> },
  { name: "Flask", icon: <SiFlask /> },
  { name: "C#/.NET", icon: <SiDotnet /> },
  { name: "Jupyter", icon: <SiJupyter /> },
  { name: "Hugging Face", icon: <SiHuggingface /> },
  { name: "Git", icon: <SiGit /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
];

export default App;
