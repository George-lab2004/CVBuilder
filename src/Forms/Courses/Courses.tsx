type CoursesItem = {
  title: string;
  institution: string;
  date: string;
  description?: string[];
};
export default function Courses({ courses }: { courses: CoursesItem[] }) {
  if (!courses.length) return null;

  return (
    <div className="w-[98%] mx-auto mt-1 text-left">
      <h2 className="text-lg font-semibold">Courses</h2>
      <div className="border-t-2 border-gray-600 my-1" />

      {courses.map((item, i) => (
        <div key={i} className="mb-3 text-sm">
          {/* Title and Date */}
          <div className="flex flex-wrap justify-between items-center gap-x-4 text-black">
            <h3 className="text-base font-semibold">{item.title}</h3>
            <span className="text-sm text-gray-700">{item.date}</span>
          </div>

          {/* Institution (optional) */}
          {item.institution && (
            <div className="text-gray-800  italic">{item.institution}</div>
          )}

          {/* Description Bullets (optional) */}
          {item.description && item.description.length > 0 && (
            <ul className="list-disc pl-5 mt-1 text-gray-700  space-y-1">
              {item.description.map((point: string, idx: number) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
