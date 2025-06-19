type InternshipItem = {
  company: string;
  role: string;
  date: string;
  location?: string;
  description?: string[];
};

export default function Internship({
  internship,
}: {
  internship: InternshipItem[];
}) {
  if (!internship.length) return null;

  return (
    <div className="w-[98%] mx-auto mt-1 text-left">
      <h2 className="text-lg font-semibold">Internships</h2>
      <div className="border-t-2 border-gray-600 my-1" />

      {internship.map((item, i) => (
        <div key={i} className="mb-3 text-sm">
          {/* Company + Role + Date */}
          <div className="flex flex-wrap justify-between items-center gap-x-4 text-black">
            <h3 className="text-base font-semibold">
              {item.company} — {item.role}
            </h3>
            <span className="text-sm text-gray-700">{item.date}</span>
          </div>

          {/* Location (if available) */}
          {item.location && (
            <div className="text-gray-800 dark:text-gray-300 italic">
              {item.location}
            </div>
          )}

          {/* Description */}
          {item.description && item.description.length > 0 && (
            <ul className="list-disc pl-5 mt-1 text-gray-700 dark:text-gray-300 space-y-1">
              {item.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
