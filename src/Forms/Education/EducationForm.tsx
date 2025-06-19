import { Label, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useFormField } from "../../Pages/CvBuilder/UseFormField";

type educationItem = {
  degree: string;
  GPA?: string;
  major?: string;
  institution: string;
  location?: string;
  date: string;
  description?: string[];
};

// Pill component
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

export default function EducationForm({
  education,
  setEducation,
}: {
  education: educationItem[];
  setEducation: React.Dispatch<React.SetStateAction<educationItem[]>>;
}) {
  const degreeField = useFormField("", () => {}, "degree");
  const gpaField = useFormField("", () => {}, "gpa");
  const majorField = useFormField("", () => {}, "major");
  const institutionField = useFormField("", () => {}, "institution");
  const dateField = useFormField("", () => {}, "date");
  const locationField = useFormField("", () => {}, "location");
  const descriptionField = useFormField("", () => {}, "desc");
  const [descList, setDescList] = useState<string[]>([]);
  const [showPill, setShowPill] = useState(false);

  const handleAddBullet = () => {
    if (descriptionField.value.trim()) {
      setDescList((prev) => [...prev, descriptionField.value.trim()]);
      descriptionField.setValue("");
    }
  };

  const handleRemoveBullet = (index: number) => {
    setDescList((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAddEducation = () => {
    if (degreeField.value && institutionField.value && dateField.value) {
      const newEdu = {
        degree: degreeField.value,
        GPA: gpaField.value || undefined,
        major: majorField.value || undefined,
        institution: institutionField.value,
        date: dateField.value,
        location: locationField.value || undefined,
        description: descList.length > 0 ? descList : undefined,
      };
      setEducation((prev) => [...prev, newEdu]);
      setShowPill(true);

      // Reset
      degreeField.setValue("");
      gpaField.setValue("");
      majorField.setValue("");
      institutionField.setValue("");
      dateField.setValue("");
      locationField.setValue("");
      setDescList([]);
    }
  };

  return (
    <div className="p-6 rounded-xl bg-white dark:bg-gray-900 shadow-md transition-colors duration-300 space-y-6">
      <div className="grid gap-4">
        {/* Degree */}
        <div>
          <Label htmlFor="degree">Degree</Label>
          <TextInput
            id="degree"
            value={degreeField.value}
            onChange={degreeField.handleChange}
            placeholder="e.g. Bachelor of Business Technology"
          />
        </div>

        {/* Major */}
        <div>
          <Label htmlFor="major">Major (optional)</Label>
          <TextInput
            id="major"
            value={majorField.value}
            onChange={majorField.handleChange}
            placeholder="e.g. Business Analytics"
          />
        </div>

        {/* GPA */}
        <div>
          <Label htmlFor="gpa">GPA (optional)</Label>
          <TextInput
            id="gpa"
            value={gpaField.value}
            onChange={gpaField.handleChange}
            placeholder="e.g. 3.87"
          />
        </div>

        {/* Institution */}
        <div>
          <Label htmlFor="institution">Institution</Label>
          <TextInput
            id="institution"
            value={institutionField.value}
            onChange={institutionField.handleChange}
            placeholder="e.g. Canadian International College (CIC)"
          />
        </div>

        {/* Location */}
        <div>
          <Label htmlFor="location">Location</Label>
          <TextInput
            id="location"
            value={locationField.value}
            onChange={locationField.handleChange}
            placeholder="e.g. Cairo, Egypt"
          />
        </div>

        {/* Date */}
        <div>
          <Label htmlFor="date">Date</Label>
          <TextInput
            id="date"
            value={dateField.value}
            onChange={dateField.handleChange}
            placeholder="e.g. 2022 – 2026"
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
              placeholder="Academic projects, honors, exchange programs..."
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

      {/* Submit Button */}
      <button
        onClick={handleAddEducation}
        disabled={
          !degreeField.value || !institutionField.value || !dateField.value
        }
        className={`w-full py-2 rounded text-white font-medium ${
          !degreeField.value || !institutionField.value || !dateField.value
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-600 hover:bg-green-700"
        }`}
      >
        Add Education Entry
      </button>

      {/* Pill with summary of added education */}
      {showPill && education.length > 0 && (
        <Pill
          text={`${education[education.length - 1].institution} — ${
            education[education.length - 1].degree
          }`}
          onClose={() => {
            setEducation((prev) => prev.slice(0, -1));
            setShowPill(false);
          }}
        />
      )}

      {/* Tip */}
      <div className="mt-4 flex items-start gap-2 bg-yellow-100 text-yellow-800 dark:bg-yellow-300/10 dark:text-yellow-200 border border-yellow-300 dark:border-yellow-500 rounded-lg px-4 py-3 shadow-sm text-sm max-w-md">
        <span className="text-xl">🎓</span>
        <div>
          <strong className="font-semibold">Tip:</strong> Include joint degrees,
          academic honors, or international programs. If your GPA is above
          average, listing it can strengthen your profile.
        </div>
      </div>
    </div>
  );
}
