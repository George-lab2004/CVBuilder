type ProjectItem = {
  title: string;
  date: string;
  description: string[];
  technologies?: string[];
  links: { platform: string; label: string; url: string }[];
};

export default function Projects({ projects }: { projects: ProjectItem[] }) {
  if (!projects.length) return null;

  return (
    <div className="w-[98%] mx-auto mt-1 text-left">
      <h2 className="text-lg font-semibold ">Projects</h2>
      <div className="border-t-2 border-gray-600 my-1" />

      {projects.map((proj, i) => (
        <div key={i} className="mb-2">
          {/* Title, Date, and Links in One Row */}
          <div className="flex flex-wrap justify-between items-center gap-x-6 gap-y-1 text-sm text-black ">
            <h3 className="text-base font-semibold">
              {proj.title}
              <span className="font-normal ms-1 text">{proj.date}</span>
            </h3>

            {proj.links?.length > 0 && (
              <div className="flex flex-wrap gap-4">
                {proj.links.map((link, idx) => (
                  <span key={idx} className="text-black  ">
                    {link.platform}:{" "}
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline  "
                    >
                      {link.label}
                    </a>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Description */}
          <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
            {proj.description.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>

          {/* Tech */}
          {(proj.technologies?.length ?? 0) > 0 && (
            <div className="text-sm mt-2 text-gray-800 ">
              <strong className="font-medium">Tech Used:</strong>{" "}
              {proj.technologies?.join(", ")}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
