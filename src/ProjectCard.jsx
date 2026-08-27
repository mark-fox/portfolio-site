import { FiExternalLink, FiGithub, FiPlayCircle } from "react-icons/fi";

function ProjectCard({
  title,
  subtitle,
  description,
  impact,
  architecture,
  tech,
  image,
  imageAlt,
  repo,
  demo,
  tags,
  featured = false,
  priority,
}) {
  if (featured) {
    return (
      <article
        className="grid overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-slate-900 lg:grid-cols-[0.9fr_1.1fr]"
        data-aos="fade-up"
      >
        <ProjectImage image={image} title={title} imageAlt={imageAlt} large />

        <div className="flex flex-col gap-6 p-6 lg:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">
                Featured Project {priority}
              </p>
              <h3 className="mt-3 text-3xl font-black tracking-normal text-slate-950 dark:text-white">
                {title}
              </h3>
              {subtitle && (
                <p className="mt-1 text-base font-semibold text-slate-500 dark:text-slate-400">
                  {subtitle}
                </p>
              )}
            </div>
          </div>

          <p className="text-base leading-7 text-slate-600 dark:text-slate-300">
            {description}
          </p>

          {impact && (
            <div className="rounded-md border border-cyan-200 bg-cyan-50 p-4 text-sm leading-6 text-cyan-950 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-100">
              <strong>Why it matters:</strong> {impact}
            </div>
          )}

          {architecture?.length > 0 && (
            <div>
              <h4 className="text-sm font-black uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                Backend / AI Notes
              </h4>
              <ul className="mt-3 grid gap-2">
                {architecture.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <TagList tags={tags} />

          <p className="text-sm leading-6 text-slate-500 dark:text-slate-400">
            {tech}
          </p>

          <ProjectLinks demo={demo} repo={repo} />
        </div>
      </article>
    );
  }

  return (
    <article
      className="flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-slate-900"
      data-aos="fade-up"
    >
      <ProjectImage image={image} title={title} imageAlt={imageAlt} />

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <h3 className="text-xl font-black tracking-normal text-slate-950 dark:text-white">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
            {description}
          </p>
        </div>

        <TagList tags={tags} />

        <p className="mt-auto text-sm leading-6 text-slate-500 dark:text-slate-400">
          {tech}
        </p>

        <ProjectLinks demo={demo} repo={repo} />
      </div>
    </article>
  );
}

function ProjectImage({ image, title, imageAlt, large = false }) {
  const height = large ? "h-64 lg:h-full" : "h-48";

  if (!image) {
    return (
      <div
        className={`${height} flex items-center justify-center bg-slate-100 text-sm font-semibold text-slate-400 dark:bg-slate-800 dark:text-slate-500`}
      >
        Project preview
      </div>
    );
  }

  return (
    <div className={`${height} overflow-hidden bg-slate-100 dark:bg-slate-800`}>
      <img
        src={image}
        alt={imageAlt || `${title} preview`}
        className="h-full w-full object-cover transition duration-500 hover:scale-105"
      />
    </div>
  );
}

function TagList({ tags }) {
  if (!tags?.length) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-600 dark:bg-white/[0.06] dark:text-slate-300"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function ProjectLinks({ demo, repo }) {
  return (
    <div className="flex flex-wrap gap-3 pt-1 text-sm font-bold">
      {demo && (
        <a
          href={demo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-cyan-700 transition hover:text-cyan-900 dark:text-cyan-300 dark:hover:text-cyan-100"
        >
          <FiPlayCircle aria-hidden="true" />
          Demo
        </a>
      )}
      {repo && (
        <a
          href={repo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-cyan-700 transition hover:text-cyan-900 dark:text-cyan-300 dark:hover:text-cyan-100"
        >
          <FiGithub aria-hidden="true" />
          GitHub
        </a>
      )}
      {repo && (
        <a
          href={repo}
          target="_blank"
          rel="noreferrer"
          aria-label="Open project repository"
          className="inline-flex items-center gap-2 text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
        >
          <FiExternalLink aria-hidden="true" />
        </a>
      )}
    </div>
  );
}

export default ProjectCard;
