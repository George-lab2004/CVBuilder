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
    <div className="w-[98%] mx-auto mt-1 text-left">
      <h2 className="text-lg font-semibold">Experience</h2>
      <div className="border-t-2 border-gray-600 my-1" />

      {experiences.map((exp, i) => (
        <div key={i}>
          <div className="flex justify-between">
            <h3 className="font-semibold">{exp.title}</h3>
            <span className="text-sm text-gray-500">{exp.date}</span>
          </div>
          <div className="text-sm text-gray-600 mb-1">{exp.location}</div>
          <ul className=" text-sm space-y-1">
            {exp.description.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
