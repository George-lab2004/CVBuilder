type ExperienceItem = {
  title: string;
  date: string;
  location: string;
  description: string[];
};

export default function Experience({
  experiences,
}: {
  experiences: ExperienceItem[];
}) {
  if (!experiences.length) return null;

  return (
    <div className="w-[90%] mx-auto my-6 text-left">
      <h2 className="text-2xl font-semibold mb-4">Experience</h2>
      <div className="border-t-2 border-gray-600 my-4" />

      {experiences.map((exp, i) => (
        <div key={i} className="mb-6">
          <div className="flex justify-between">
            <h3 className="font-semibold">{exp.title}</h3>
            <span className="text-sm text-gray-500">{exp.date}</span>
          </div>
          <div className="text-sm text-gray-600 mb-1">{exp.location}</div>
          <ul className="list-disc pl-5 space-y-1">
            {exp.description.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
