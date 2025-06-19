import { Label, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useFormField } from "../../Pages/CvBuilder/UseFormField";

type InternshipItem = {
  company: string;
  role: string;
  date: string;
  location?: string;
  description?: string[];
};

export default function InternshipForm({
  setInternships,
  internships = [] /* Assuming internships is passed as a prop, otherwise initialize it as an empty array if not provided. */,
}: {
  setInternships: React.Dispatch<React.SetStateAction<InternshipItem[]>>;
  internships?: InternshipItem[];
}) {
  const companyField = useFormField("", () => {}, "company");
  const roleField = useFormField("", () => {}, "role");
  const dateField = useFormField("", () => {}, "date");
  const locationField = useFormField("", () => {}, "location");
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

  const handleAddInternship = () => {
    if (companyField.value && roleField.value && dateField.value) {
      setInternships((prev) => [
        ...prev,
        {
          company: companyField.value,
          role: roleField.value,
          date: dateField.value,
          location: locationField.value || undefined,
          description: descList.length > 0 ? descList : undefined,
        },
      ]);

      // Reset
      companyField.setValue("");
      roleField.setValue("");
      dateField.setValue("");
      locationField.setValue("");
      descriptionField.setValue("");
      setDescList([]);
    }
  };

  return (
    <div className="p-6 rounded-xl bg-white dark:bg-gray-900 shadow-md transition-colors duration-300 space-y-6">
      {/* Fields */}
      <div className="grid gap-4">
        <div>
          <Label htmlFor="company">Company</Label>
          <TextInput
            id="company"
            value={companyField.value}
            onChange={companyField.handleChange}
            placeholder="e.g. Vodafone Egypt"
          />
        </div>

        <div>
          <Label htmlFor="role">Role</Label>
          <TextInput
            id="role"
            value={roleField.value}
            onChange={roleField.handleChange}
            placeholder="e.g. Frontend Intern"
          />
        </div>

        <div>
          <Label htmlFor="date">Date</Label>
          <TextInput
            id="date"
            value={dateField.value}
            onChange={dateField.handleChange}
            placeholder="e.g. Jul 2024 – Sep 2024"
          />
        </div>

        <div>
          <Label htmlFor="location">Location (optional)</Label>
          <TextInput
            id="location"
            value={locationField.value}
            onChange={locationField.handleChange}
            placeholder="e.g. Cairo, Egypt"
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
              placeholder="Add tasks, tools used, achievements, etc."
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
        onClick={handleAddInternship}
        disabled={!companyField.value || !roleField.value || !dateField.value}
        className={`w-full py-2 rounded text-white font-medium ${
          !companyField.value || !roleField.value || !dateField.value
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-600 hover:bg-green-700"
        }`}
      >
        Add Internship
      </button>

      {/* Tip */}
      <div className="mt-4 flex items-start gap-2 bg-violet-100 text-violet-800 dark:bg-violet-300/10 dark:text-violet-200 border border-violet-300 dark:border-violet-500 rounded-lg px-4 py-3 shadow-sm text-sm max-w-md">
        <span className="text-xl">👨‍💼</span>
        <div>
          <strong className="font-semibold">Tip:</strong> Focus on the
          contributions you made, technologies you used, and any specific
          achievements during the internship. Keep it short and impactful.
        </div>
      </div>
      {internships.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {internships.map((internship, index) => (
            <div
              key={index}
              className="flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full shadow-sm border border-gray-300 dark:border-gray-600"
            >
              <span className="text-sm truncate max-w-[120px]">
                {internship.company}
              </span>
              <button
                type="button"
                onClick={() =>
                  setInternships((prev) => prev.filter((_, i) => i !== index))
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
