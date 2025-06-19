type educationItem = {
  degree: string;
  GPA?: string;
  major?: string;
  institution: string;
  location?: string;
  date: string;
  description?: string[];
};

export default function Education({
  education,
}: {
  education: educationItem[];
}) {
  if (!education.length) return null;

  return (
    <div className="w-[98%] mx-auto mt-1 text-left">
      <h2 className="text-lg font-semibold">Education</h2>
      <div className="border-t-2 border-gray-600 my-1" />

      {education.map((edu, i) => (
        <div key={i} className="mb-2 text-sm text-gray-800 ">
          {/* First Line */}
          <div className="flex flex-wrap justify-between items-center gap-x-6 gap-y-1">
            <h3 className="font-medium">
              {edu.institution}
              {edu.GPA && <span className="ms-2">— GPA: {edu.GPA}</span>}
            </h3>
            <span className="text-gray-600 dark:text-gray-400">{edu.date}</span>
          </div>

          {/* Second Line */}
          <div className="mt-1 text-sm flex justify-between text-gray-800 ">
            <div>
              {" "}
              {edu.degree}
              {edu.major && (
                <span className="ms-2 font-semibold">in {edu.major}</span>
              )}
            </div>
            {edu.location && (
              <span className="ms-2 text-gray-500 ">• {edu.location}</span>
            )}
          </div>

          {/* Description Bullets */}
          {edu.description && edu.description.length > 0 && (
            <ul className="list-disc pl-5 mt-1 space-y-1 text-gray-700 ">
              {edu.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
