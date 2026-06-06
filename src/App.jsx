import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import {
  FiArrowUp,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import {
  SiCss3,
  SiDotnet,
  SiFastapi,
  SiFlask,
  SiGithub,
  SiGit,
  SiHuggingface,
  SiJavascript,
  SiJupyter,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import Navbar from "./Navbar";
import ProjectCard from "./ProjectCard";
import NotFound from "./pages/404";

function App() {
  const [status, setStatus] = useState("idle");
  const [showButton, setShowButton] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);

    try {
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
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-300 selection:text-slate-950 dark:bg-slate-950 dark:text-slate-100">
            <Navbar />

            <main>
              <section
                id="home"
                aria-labelledby="home-title"
                className="relative overflow-hidden border-b border-white/10"
              >
                <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
                  <div className="space-y-8" data-aos="fade-up">
                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100">
                      AI Backend Developer
                    </div>

                    <div className="space-y-5">
                      <h1
                        id="home-title"
                        className="max-w-4xl text-5xl font-black leading-tight tracking-normal text-white sm:text-6xl lg:text-7xl"
                      >
                        Mark Fox builds practical AI systems with reliable
                        backend foundations.
                      </h1>
                      <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                        Python, FastAPI, PostgreSQL, and LLM workflows for
                        tools that extract, retrieve, summarize, and organize
                        real-world information.
                      </p>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                      <a
                        href="#projects"
                        className="inline-flex items-center justify-center rounded-md bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
                      >
                        View Projects
                      </a>
                      <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:border-cyan-300/60 hover:text-cyan-100"
                      >
                        <FiDownload aria-hidden="true" />
                        Resume
                      </a>
                      <a
                        href="https://github.com/mark-fox"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:border-cyan-300/60 hover:text-cyan-100"
                      >
                        <FiGithub aria-hidden="true" />
                        GitHub
                      </a>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {heroStack.map((item) => (
                        <span
                          key={item}
                          className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div
                    className="rounded-lg border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-cyan-950/30"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                      <div>
                        <p className="text-sm font-semibold text-cyan-200">
                          Current Focus
                        </p>
                        <p className="text-sm text-slate-400">
                          Applied AI backend systems
                        </p>
                      </div>
                      <span className="rounded-md bg-emerald-300/10 px-3 py-1 text-xs font-bold text-emerald-200">
                        Available
                      </span>
                    </div>

                    <div className="space-y-4">
                      {focusItems.map((item) => (
                        <div
                          key={item.title}
                          className="rounded-md border border-white/10 bg-slate-950/60 p-4"
                        >
                          <p className="text-sm font-bold text-white">
                            {item.title}
                          </p>
                          <p className="mt-2 text-sm leading-6 text-slate-400">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <section
                id="projects"
                aria-labelledby="projects-title"
                className="bg-slate-50 px-6 py-20 text-slate-950 dark:bg-slate-950 dark:text-white"
              >
                <div className="mx-auto max-w-6xl">
                  <div className="mb-10 max-w-3xl" data-aos="fade-up">
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">
                      Selected Work
                    </p>
                    <h2
                      id="projects-title"
                      className="mt-3 text-4xl font-black tracking-normal sm:text-5xl"
                    >
                      AI backend projects with real product shape.
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
                      These projects emphasize APIs, data models, retrieval,
                      document processing, and LLM-assisted workflows rather
                      than surface-level demos.
                    </p>
                  </div>

                  <div className="grid gap-6">
                    {featuredProjects.map((project, index) => (
                      <ProjectCard
                        key={project.title}
                        featured
                        priority={index + 1}
                        {...project}
                      />
                    ))}
                  </div>
                </div>
              </section>

              <section
                id="skills"
                aria-labelledby="skills-title"
                className="border-y border-slate-200 bg-white px-6 py-20 text-slate-950 dark:border-white/10 dark:bg-slate-900 dark:text-white"
              >
                <div className="mx-auto max-w-6xl">
                  <div className="mb-10 max-w-3xl" data-aos="fade-up">
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">
                      Capabilities
                    </p>
                    <h2
                      id="skills-title"
                      className="mt-3 text-4xl font-black tracking-normal sm:text-5xl"
                    >
                      Backend-first AI development stack.
                    </h2>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    {skillGroups.map((group) => (
                      <div
                        key={group.title}
                        className="rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-slate-950/60"
                        data-aos="fade-up"
                      >
                        <h3 className="text-lg font-black">{group.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                          {group.description}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {group.items.map((skill) => (
                            <span
                              key={skill.name}
                              className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200"
                            >
                              <span className="text-cyan-700 dark:text-cyan-300">
                                {skill.icon}
                              </span>
                              {skill.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section
                id="more-work"
                aria-labelledby="more-work-title"
                className="bg-slate-50 px-6 py-20 text-slate-950 dark:bg-slate-950 dark:text-white"
              >
                <div className="mx-auto max-w-6xl">
                  <div className="mb-10 max-w-3xl" data-aos="fade-up">
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">
                      More Work
                    </p>
                    <h2
                      id="more-work-title"
                      className="mt-3 text-4xl font-black tracking-normal sm:text-5xl"
                    >
                      Supporting projects and learning artifacts.
                    </h2>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {additionalProjects.map((project) => (
                      <ProjectCard key={project.title} {...project} />
                    ))}
                  </div>
                </div>
              </section>

              <section
                id="about"
                aria-labelledby="about-title"
                className="border-y border-slate-200 bg-white px-6 py-20 text-slate-950 dark:border-white/10 dark:bg-slate-900 dark:text-white"
              >
                <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
                  <div className="relative w-fit" data-aos="fade-up">
                    <div className="absolute inset-0 rounded-lg bg-cyan-300/20 blur-2xl" />
                    <img
                      src="/avatar.png"
                      alt="Mark Fox"
                      className="relative h-56 w-56 rounded-lg border border-slate-200 object-cover shadow-xl dark:border-white/10"
                    />
                  </div>

                  <div className="max-w-3xl" data-aos="fade-up">
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">
                      About
                    </p>
                    <h2
                      id="about-title"
                      className="mt-3 text-4xl font-black tracking-normal sm:text-5xl"
                    >
                      I like turning messy information into useful systems.
                    </h2>
                    <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
                      <p>
                        I am a software engineer focused on AI backend
                        development: APIs, data flows, document ingestion,
                        retrieval, and LLM-assisted product workflows.
                      </p>
                      <p>
                        My recent work centers on full-stack AI tools with
                        practical backend concerns: schema design, async
                        processing, structured extraction, citation-aware
                        research, and interfaces that make complex outputs easy
                        to review.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section
                id="contact"
                aria-labelledby="contact-title"
                className="bg-slate-950 px-6 py-20 text-white"
              >
                <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                  <div data-aos="fade-up">
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                      Contact
                    </p>
                    <h2
                      id="contact-title"
                      className="mt-3 text-4xl font-black tracking-normal sm:text-5xl"
                    >
                      Let us talk about AI backend roles.
                    </h2>
                    <p className="mt-5 text-lg leading-8 text-slate-300">
                      The fastest path is email, LinkedIn, or a resume review.
                      The form is here too if that is easiest.
                    </p>

                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                      {contactLinks.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target={link.external ? "_blank" : undefined}
                          rel={link.external ? "noopener noreferrer" : undefined}
                          className="inline-flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-white transition hover:border-cyan-300/60 hover:text-cyan-100"
                        >
                          {link.icon}
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
                    data-aos="fade-up"
                  >
                    <div className="grid gap-4">
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your name"
                        className="w-full rounded-md border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
                      />
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Your email"
                        className="w-full rounded-md border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
                      />
                      <textarea
                        name="message"
                        required
                        rows="5"
                        placeholder="Message"
                        className="w-full resize-none rounded-md border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
                      />
                      <button
                        type="submit"
                        className="rounded-md bg-cyan-300 px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-cyan-200"
                      >
                        {status === "loading" ? "Sending..." : "Send Message"}
                      </button>
                      {status === "success" && (
                        <p className="text-sm font-medium text-emerald-300">
                          Message sent. I will get back to you soon.
                        </p>
                      )}
                      {status === "error" && (
                        <p className="text-sm font-medium text-red-300">
                          Something went wrong. Please try email instead.
                        </p>
                      )}
                    </div>
                  </form>
                </div>
              </section>
            </main>

            <footer className="border-t border-white/10 bg-slate-950 px-6 py-6 text-sm text-slate-400">
              <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
                <p>&copy; {new Date().getFullYear()} Mark Fox.</p>
                <div className="flex gap-4">
                  <a href="mailto:mfox47@gmail.com" className="hover:text-white">
                    Email
                  </a>
                  <a
                    href="https://github.com/mark-fox"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/markfox1"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </footer>

            {showButton && (
              <button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 z-50 rounded-full bg-cyan-300 p-3 text-slate-950 shadow-lg shadow-cyan-950/40 transition hover:bg-cyan-200"
                aria-label="Scroll to top"
              >
                <FiArrowUp aria-hidden="true" />
              </button>
            )}
          </div>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

const heroStack = [
  "Python",
  "FastAPI",
  "PostgreSQL",
  "LLM Workflows",
  "Document AI",
  "Async Systems",
];

const focusItems = [
  {
    title: "AI extraction pipelines",
    description:
      "Receipt, document, and text workflows that turn unstructured inputs into reviewable structured data.",
  },
  {
    title: "Retrieval and synthesis",
    description:
      "Research systems that plan searches, rank sources, summarize evidence, and return citation-aware answers.",
  },
  {
    title: "Production-minded APIs",
    description:
      "FastAPI services, relational models, migrations, and client-facing endpoints for useful AI products.",
  },
];

const featuredProjects = [
  {
    title: "ReturnRadar",
    subtitle: "AI Receipt Tracker",
    tags: ["AI", "FastAPI", "React Native", "PostgreSQL", "OpenAI Vision"],
    description:
      "Mobile app for scanning receipts, reviewing AI-extracted purchase details, tracking return and warranty deadlines, storing receipt images, and managing product support information.",
    impact:
      "Turns receipt images into structured purchase records with backend support for deadlines, storage, and product metadata.",
    architecture: [
      "FastAPI backend with PostgreSQL persistence",
      "OpenAI Vision extraction flow for receipt parsing",
      "Expo and React Native client for mobile review workflows",
    ],
    tech: "Python, FastAPI, PostgreSQL, Alembic, Expo, React Native, TypeScript, OpenAI Vision",
    image: "/returnradar-preview.gif",
    repo: "https://github.com/mark-fox/returnradar",
    demo: "/returnradar.mp4",
  },
  {
    title: "InquiryOS",
    subtitle: "AI Research Workspace",
    tags: ["AI", "LLM", "FastAPI", "React", "Async Systems"],
    description:
      "A full-stack AI research system that breaks down complex questions into a multi-stage pipeline. It plans research, retrieves and ranks web sources, summarizes content, and synthesizes structured answers with citations and recommendations.",
    impact:
      "Shows applied LLM orchestration across planning, retrieval, ranking, summarization, and answer synthesis.",
    architecture: [
      "Multi-stage research pipeline with async backend flow",
      "Source ranking and summarization before synthesis",
      "Structured outputs with citations and recommendations",
    ],
    tech: "Python, FastAPI, Async SQLAlchemy, PostgreSQL, React, TypeScript, Tailwind, Ollama",
    image: "/inquiryos.gif",
    repo: "https://github.com/mark-fox/inquiry-os",
    demo: "",
  },
  {
    title: "AI Document Analyzer",
    subtitle: "PDF QA and Embedding Workflow",
    tags: ["AI", "NLP", "LangChain", "FastAPI", "React"],
    description:
      "Full-stack app that lets users upload PDFs, embed text into a FAISS index, and query them with extractive QA.",
    impact:
      "Demonstrates document ingestion, vector search, and question answering over user-provided files.",
    architecture: [
      "PDF upload and text processing pipeline",
      "FAISS index for local semantic retrieval",
      "FastAPI and React flow for querying document content",
    ],
    tech: "Python, FastAPI, LangChain, Hugging Face, FAISS, React",
    image: "/doc_analyzer.PNG",
    repo: "https://github.com/mark-fox/ai-doc-analyzer",
    demo: "",
  },
];

const additionalProjects = [
  {
    title: "AI Sentiment & Image Classifier",
    tags: ["AI", "React", "Flask", "Hugging Face", "Tailwind"],
    description:
      "Full-stack app using React, Flask, and Hugging Face to analyze sentiment and classify uploaded images.",
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
    tags: ["Python", "Jupyter", "Transformers"],
    description:
      "A Jupyter notebook exploring Hugging Face pipelines for text classification and image labeling.",
    tech: "Python, Transformers, Jupyter",
    image: "",
    repo: "https://github.com/mark-fox/ai-certification-prep/tree/main/week3-pretrained-models",
    demo: "",
  },
  {
    title: "Personal Portfolio Website",
    tags: ["React", "Tailwind", "Vite"],
    description:
      "Responsive portfolio site built with React, Tailwind, and Vite to showcase AI backend projects.",
    tech: "React, Tailwind CSS, Vite, AOS",
    image: "/preview.png",
    repo: "https://github.com/mark-fox/portfolio-site",
    demo: "",
  },
];

const skillGroups = [
  {
    title: "AI and LLM Systems",
    description:
      "Applied workflows for extraction, retrieval, summarization, document analysis, and model-backed product features.",
    items: [
      { name: "Hugging Face", icon: <SiHuggingface /> },
      { name: "LangChain", icon: <SiPython /> },
      { name: "OpenAI Vision", icon: <SiPython /> },
      { name: "FAISS", icon: <SiPython /> },
    ],
  },
  {
    title: "Backend Engineering",
    description:
      "API-first development with Python services, typed data flows, migrations, and dependable application boundaries.",
    items: [
      { name: "Python", icon: <SiPython /> },
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "Flask", icon: <SiFlask /> },
      { name: "C#/.NET", icon: <SiDotnet /> },
    ],
  },
  {
    title: "Data and Storage",
    description:
      "Relational persistence, exploratory analysis, embedding indexes, and data preparation for AI workflows.",
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "SQLAlchemy", icon: <SiPython /> },
      { name: "Alembic", icon: <SiPython /> },
      { name: "Jupyter", icon: <SiJupyter /> },
    ],
  },
  {
    title: "Product Delivery",
    description:
      "Frontend and tooling experience for shipping usable interfaces around backend and AI capabilities.",
    items: [
      { name: "React", icon: <SiReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Git", icon: <SiGit /> },
      { name: "CSS", icon: <SiCss3 /> },
    ],
  },
];

const contactLinks = [
  {
    label: "Email",
    href: "mailto:mfox47@gmail.com",
    icon: <FiMail aria-hidden="true" />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/markfox1",
    external: true,
    icon: <FiLinkedin aria-hidden="true" />,
  },
  {
    label: "GitHub",
    href: "https://github.com/mark-fox",
    external: true,
    icon: <FiGithub aria-hidden="true" />,
  },
  {
    label: "Resume",
    href: "/resume.pdf",
    external: true,
    icon: <FiDownload aria-hidden="true" />,
  },
];

export default App;
