function ProjectCard({ title, description, tech, image, repo, demo, tags }) {
  return (
    <div
      className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:-translate-y-1 hover:shadow-xl"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      {image ? (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-sm text-gray-500 dark:text-gray-300">
          No image
        </div>
      )}

      <div className="p-4 space-y-2">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-200">{description}</p>
        {/* 🔖 Tags */}
        {tags && (
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <p className="text-sm text-gray-500 dark:text-gray-400 italic border border-gray-200 dark:border-gray-600 rounded px-2 py-1 inline-block w-fit">
          {tech}
        </p>
        <div className="flex gap-4 pt-2 text-blue-600 dark:text-blue-400 text-sm">
          {demo && (
            <a href={demo} target="_blank" rel="noreferrer">
              Live Demo
            </a>
          )}
          {repo && (
            <a href={repo} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
