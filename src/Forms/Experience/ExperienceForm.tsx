import { Label, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

type ExperienceItem = {
  title: string;
  date: string;
  location: string;
  description: string[];
};

export default function ExperienceForm({
  setExperiences,
  experiences = [],
}: {
  setExperiences: React.Dispatch<React.SetStateAction<ExperienceItem[]>>;
  experiences: ExperienceItem[];
}) {
  const [tempTitle, setTempTitle] = useState("");
  const [tempDate, setTempDate] = useState("");
  const [tempLocation, setTempLocation] = useState("");
  const [tempDesc, setTempDesc] = useState("");
  const [descList, setDescList] = useState<string[]>([]);

  const handleAddBullet = () => {
    if (tempDesc.trim()) {
      setDescList((prev) => [...prev, ` ${tempDesc.trim()}`]);
      setTempDesc("");
    }
  };

  const handleRemoveBullet = (index: number) => {
    setDescList((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAddExperience = () => {
    if (tempTitle && tempDate && tempLocation && descList.length > 0) {
      setExperiences((prev) => [
        ...prev,
        {
          title: tempTitle,
          date: tempDate,
          location: tempLocation,
          description: descList,
        },
      ]);
      setTempTitle("");
      setTempDate("");
      setTempLocation("");
      setTempDesc("");
      setDescList([]);
    }
  };

  return (
    <div className="p-6 rounded-xl bg-white dark:bg-gray-900 shadow-md transition-colors duration-300 space-y-4">
      {/* Company Title */}
      <div>
        <Label htmlFor="title">Company Title</Label>
        <TextInput
          id="title"
          placeholder="e.g. Microsoft"
          value={tempTitle}
          onChange={(e) => setTempTitle(e.target.value)}
        />
      </div>

      {/* Duration */}
      <div>
        <Label htmlFor="date">Duration</Label>
        <TextInput
          id="date"
          placeholder="e.g. 2021 - Present"
          value={tempDate}
          onChange={(e) => setTempDate(e.target.value)}
        />
      </div>

      {/* Location */}
      <div>
        <Label htmlFor="location">Location</Label>
        <TextInput
          id="location"
          placeholder="e.g. Cairo, Egypt"
          value={tempLocation}
          onChange={(e) => setTempLocation(e.target.value)}
        />
      </div>

      {/* Description Bullets */}
      <div>
        <Label htmlFor="desc">Description</Label>
        <div className="flex gap-3 mb-2">
          <Textarea
            id="desc"
            placeholder="e.g. Developed scalable React components"
            rows={2}
            value={tempDesc}
            onChange={(e) => setTempDesc(e.target.value)}
            className="flex-1"
          />
          <button
            onClick={handleAddBullet}
            type="button"
            disabled={!tempDesc.trim()}
            className={`px-4 py-2 min-w-[80px] text-white rounded ${
              !tempDesc.trim()
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Add
          </button>
        </div>

        {/* Bullet List Preview */}
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
          {descList.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {item}
              <button
                type="button"
                title="Remove"
                onClick={() => handleRemoveBullet(index)}
              >
                <FaTimes className="text-red-500 hover:text-red-700 w-4 h-4" />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Final Add Button */}
      <button
        onClick={handleAddExperience}
        disabled={
          !tempTitle.trim() ||
          !tempDate.trim() ||
          !tempLocation.trim() ||
          descList.length === 0
        }
        className={`w-full py-2 rounded text-white font-medium ${
          !tempTitle.trim() ||
          !tempDate.trim() ||
          !tempLocation.trim() ||
          descList.length === 0
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-600 hover:bg-green-700"
        }`}
      >
        Add Experience
      </button>
      {/** Experience Bubbles */}
      {experiences.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full shadow-sm border border-gray-300 dark:border-gray-600"
            >
              <span className="text-sm truncate max-w-[120px]">
                {exp.title}
              </span>
              <button
                type="button"
                onClick={() =>
                  setExperiences((prev) => prev.filter((_, i) => i !== index))
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
      <div className="mt-4 flex items-start gap-2 bg-blue-100 text-blue-800 dark:bg-blue-300/10 dark:text-blue-200 border border-blue-300 dark:border-blue-500 rounded-lg px-4 py-3 shadow-sm text-sm max-w-md">
        <span className="text-xl">💡</span>
        <div>
          <strong className="font-semibold">Tip:</strong> Quantify your impact
          when possible — say
          <em> “Increased traffic by 45%”</em> or{" "}
          <em>“Completed 20+ client projects”</em>. Numbers make your experience
          more convincing.
        </div>
      </div>
    </div>
  );
}
