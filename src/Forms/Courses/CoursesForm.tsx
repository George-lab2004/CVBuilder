import { Label, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useFormField } from "../../Pages/CvBuilder/UseFormField";

type CoursesItem = {
  title: string;
  institution: string;
  date: string;
  description?: string[];
};

function Pill({ text, onClose }: { text: string; onClose: () => void }) {
  return (
    <div className="flex items-center mt-2 w-fit px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full shadow-sm border border-gray-300 dark:border-gray-600">
      <span className="text-sm">{text}</span>
      <button
        type="button"
        onClick={onClose}
        className="ml-2 text-red-500 hover:text-red-700"
        title="Remove"
      >
        <FaTimes className="w-4 h-4" />
      </button>
    </div>
  );
}

export default function CoursesForm({
  setCourses,
  courses = [] /* Assuming courses is passed as a prop, otherwise initialize it as an empty array if not provided. */,
}: {
  setCourses: React.Dispatch<React.SetStateAction<CoursesItem[]>>;
  courses?: CoursesItem[];
}) {
  const titleField = useFormField("", () => {}, "title");
  const institutionField = useFormField("", () => {}, "institution");
  const dateField = useFormField("", () => {}, "date");
  const descriptionField = useFormField("", () => {}, "desc");

  const [descList, setDescList] = useState<string[]>([]);

  const handleAddBullet = () => {
    if (descriptionField.value.trim()) {
      setDescList((prev) => [...prev, descriptionField.value.trim()]);
      descriptionField.setValue("");
    }
  };

  const handleRemoveBullet = (idx: number) => {
    setDescList((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleAddCourse = () => {
    if (titleField.value && institutionField.value && dateField.value) {
      setCourses((prev) => [
        ...prev,
        {
          title: titleField.value,
          institution: institutionField.value,
          date: dateField.value,
          description: descList.length > 0 ? descList : undefined,
        },
      ]);

      // Reset fields
      titleField.setValue("");
      institutionField.setValue("");
      dateField.setValue("");
      descriptionField.setValue("");
      setDescList([]);
    }
  };

  return (
    <div className="p-6 rounded-xl bg-white dark:bg-gray-900 shadow-md transition-colors duration-300 space-y-6">
      {/* Fields */}
      <div className="grid gap-4">
        <div>
          <Label htmlFor="course-title">Course Title</Label>
          <TextInput
            id="course-title"
            value={titleField.value}
            onChange={titleField.handleChange}
            placeholder="e.g. Frontend Developer Bootcamp"
          />
        </div>

        <div>
          <Label htmlFor="institution">Institution</Label>
          <TextInput
            id="institution"
            value={institutionField.value}
            onChange={institutionField.handleChange}
            placeholder="e.g. JSB Upskill"
          />
        </div>

        <div>
          <Label htmlFor="date">Date</Label>
          <TextInput
            id="date"
            value={dateField.value}
            onChange={dateField.handleChange}
            placeholder="e.g. Mar 2024 – May 2024"
          />
        </div>

        {/* Description bullets */}
        <div>
          <Label htmlFor="desc">Description Bullet</Label>
          <div className="flex gap-2 mb-2">
            <Textarea
              id="desc"
              value={descriptionField.value}
              onChange={descriptionField.handleChange}
              placeholder="Add what you learned, tools used, etc."
              className="flex-1"
              rows={2}
            />
            <button
              type="button"
              onClick={handleAddBullet}
              disabled={!descriptionField.value.trim()}
              className={`px-4 py-2 min-w-[80px] text-white rounded ${
                !descriptionField.value.trim()
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              Add
            </button>
          </div>

          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
            {descList.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                {item}
                <button
                  type="button"
                  title="Remove"
                  onClick={() => handleRemoveBullet(idx)}
                >
                  <FaTimes className="text-red-500 hover:text-red-700 w-4 h-4" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Final Submit Button */}
      <button
        onClick={handleAddCourse}
        disabled={
          !titleField.value || !institutionField.value || !dateField.value
        }
        className={`w-full py-2 rounded text-white font-medium ${
          !titleField.value || !institutionField.value || !dateField.value
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-600 hover:bg-green-700"
        }`}
      >
        Add Course
      </button>

      {/* Optional Pill Preview for Title */}
      {titleField.isBlocked && (
        <Pill
          text={titleField.value.split("\n")[0] + "..."}
          onClose={titleField.handleClose}
        />
      )}

      {/* Tip */}
      <div className="mt-4 flex items-start gap-2 bg-cyan-100 text-cyan-800 dark:bg-cyan-300/10 dark:text-cyan-200 border border-cyan-300 dark:border-cyan-500 rounded-lg px-4 py-3 shadow-sm text-sm max-w-md">
        <span className="text-xl">📚</span>
        <div>
          <strong className="font-semibold">Tip:</strong> Use this section to
          highlight extra training, bootcamps, or certificate programs that
          enhance your core degree or work experience.
        </div>
      </div>
      {courses.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {courses.map((course, index) => (
            <div
              key={index}
              className="flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full shadow-sm border border-gray-300 dark:border-gray-600"
            >
              <span className="text-sm truncate max-w-[120px]">
                {course.title}
              </span>
              <button
                type="button"
                onClick={() =>
                  setCourses((prev) => prev.filter((_, i) => i !== index))
                }
                className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
                title="Remove"
              >
                <FaTimes className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
