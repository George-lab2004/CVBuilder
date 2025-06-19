import { Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

type SkillItem = {
  dataformOne: { title: string; skills: string[] }[];
  dataformTwo: { title: string; skills: { name: string; level: number }[] }[];
};

export default function SkillsForm({
  setSkills,
  skills,
}: {
  setSkills: React.Dispatch<React.SetStateAction<SkillItem>>;
  skills: SkillItem;
}) {
  // Format One: Simple Title + Skills
  const [skillsTitleOne, setSkillsTitleOne] = useState("");
  const [skillsListOne, setSkillsListOne] = useState(""); // comma-separated
  const [simpleGroups, setSimpleGroups] = useState(skills.dataformOne);

  // Format Two: Title + name/level
  const [skillsTitleTwo, setSkillsTitleTwo] = useState("");
  const [skillName, setSkillName] = useState("");
  const [skillLevel, setSkillLevel] = useState("");
  const [ratedSkills, setRatedSkills] = useState<
    { name: string; level: number }[]
  >([]);
  const [ratedGroups, setRatedGroups] = useState(skills.dataformTwo);

  // --- Handlers ---

  const handleAddSimpleGroup = () => {
    if (!skillsTitleOne || !skillsListOne.trim()) return;
    const parsed = skillsListOne
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    const newGroup = { title: skillsTitleOne, skills: parsed };
    const updated = [...simpleGroups, newGroup];
    setSimpleGroups(updated);
    setSkills((prev) => ({ ...prev, dataformOne: updated }));
    setSkillsTitleOne("");
    setSkillsListOne("");
  };

  const handleRemoveSimpleGroup = (index: number) => {
    const updated = simpleGroups.filter((_, i) => i !== index);
    setSimpleGroups(updated);
    setSkills((prev) => ({ ...prev, dataformOne: updated }));
  };

  const handleAddRatedSkill = () => {
    if (!skillName || !skillLevel) return;
    const level = Number(skillLevel);
    if (isNaN(level) || level < 0 || level > 100) return;

    setRatedSkills((prev) => [...prev, { name: skillName.trim(), level }]);
    setSkillName("");
    setSkillLevel("");
  };

  const handleSaveRatedGroup = () => {
    if (!skillsTitleTwo || ratedSkills.length === 0) return;
    const newGroup = { title: skillsTitleTwo, skills: ratedSkills };
    const updated = [...ratedGroups, newGroup];
    setRatedGroups(updated);
    setSkills((prev) => ({ ...prev, dataformTwo: updated }));
    setSkillsTitleTwo("");
    setRatedSkills([]);
  };

  const handleRemoveRatedGroup = (index: number) => {
    const updated = ratedGroups.filter((_, i) => i !== index);
    setRatedGroups(updated);
    setSkills((prev) => ({ ...prev, dataformTwo: updated }));
  };

  return (
    <div className="p-6 rounded-xl bg-white dark:bg-gray-900 shadow-md transition-colors duration-300 space-y-6">
      {/* Simple Skills Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Simple Skills (Recommended)
        </h3>

        <div>
          <Label htmlFor="skills-title">Group Title</Label>
          <TextInput
            id="skills-title"
            value={skillsTitleOne}
            onChange={(e) => setSkillsTitleOne(e.target.value)}
            placeholder="e.g. Technical Skills"
          />
        </div>

        <div>
          <Label htmlFor="skills-list">Skills List</Label>
          <TextInput
            id="skills-list"
            value={skillsListOne}
            onChange={(e) => setSkillsListOne(e.target.value)}
            placeholder="e.g. React, Tailwind, Node.js"
          />
        </div>

        <button
          onClick={handleAddSimpleGroup}
          disabled={!skillsTitleOne.trim() || !skillsListOne.trim()}
          className={`px-4 py-2 rounded text-white ${
            !skillsTitleOne.trim() || !skillsListOne.trim()
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          Add Group
        </button>

        {simpleGroups.length > 0 && (
          <div className="mt-4 space-y-2">
            {simpleGroups.map((group, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-lg"
              >
                <div className="text-gray-800 dark:text-gray-200">
                  <strong className="font-medium">{group.title}</strong>:{" "}
                  {group.skills.join(", ")}
                </div>
                <button
                  onClick={() => handleRemoveSimpleGroup(idx)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTimes className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Rated Skills Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Rated Skills (Optional)
        </h3>

        <div>
          <Label htmlFor="rated-title">Group Title</Label>
          <TextInput
            id="rated-title"
            value={skillsTitleTwo}
            onChange={(e) => setSkillsTitleTwo(e.target.value)}
            placeholder="e.g. Programming Languages"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <Label htmlFor="skill-name">Skill Name</Label>
            <TextInput
              id="skill-name"
              value={skillName}
              onChange={(e) => setSkillName(e.target.value)}
              placeholder="e.g. JavaScript"
            />
          </div>

          <div>
            <Label htmlFor="skill-level">Skill Level (%)</Label>
            <TextInput
              id="skill-level"
              value={skillLevel}
              onChange={(e) => setSkillLevel(e.target.value)}
              type="number"
              placeholder="0-100"
              min={0}
              max={100}
            />
          </div>

          <div className="flex items-end">
            <button
              onClick={handleAddRatedSkill}
              disabled={!skillName.trim() || !skillLevel}
              className={`px-4 py-2 w-full rounded text-white ${
                !skillName.trim() || !skillLevel
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              Add Skill
            </button>
          </div>
        </div>

        {ratedSkills.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {ratedSkills.map((s, idx) => (
              <span
                key={idx}
                className="flex items-center bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
              >
                {s.name} ({s.level}%)
                <button
                  onClick={() =>
                    setRatedSkills((prev) => prev.filter((_, i) => i !== idx))
                  }
                  className="ml-2 text-red-500 hover:text-red-700"
                >
                  <FaTimes className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        )}

        <button
          onClick={handleSaveRatedGroup}
          disabled={!skillsTitleTwo.trim() || ratedSkills.length === 0}
          className={`px-4 py-2 rounded text-white ${
            !skillsTitleTwo.trim() || ratedSkills.length === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          Save Rated Group
        </button>

        {ratedGroups.length > 0 && (
          <div className="mt-4 space-y-2">
            {ratedGroups.map((group, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-lg"
              >
                <div className="text-gray-800 dark:text-gray-200">
                  <strong className="font-medium">{group.title}</strong>:{" "}
                  {group.skills
                    .map((s) => `${s.name} (${s.level}%)`)
                    .join(", ")}
                </div>
                <button
                  onClick={() => handleRemoveRatedGroup(idx)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTimes className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Tip */}
      <div className="mt-4 flex items-start gap-2 bg-blue-100 text-blue-800 dark:bg-blue-300/10 dark:text-blue-200 border border-blue-300 dark:border-blue-500 rounded-lg px-4 py-3 shadow-sm text-sm">
        <span className="text-xl">💡</span>
        <div>
          <strong className="font-semibold">Tip:</strong> Group related skills
          together. For rated skills, be honest about your proficiency level.
          Highlight skills most relevant to the job you're applying for.
        </div>
        <strong className="font-semibold">
          Its recommeded to add soft skills e.g. Communication, Team Player,
          Leadership, Time Management, etc.
        </strong>
      </div>
      <div className="mt-4 flex items-start gap-2 bg-yellow-100 text-yellow-900 dark:bg-yellow-200/10 dark:text-yellow-200 border border-yellow-300 dark:border-yellow-400 rounded-lg px-4 py-3 shadow-sm text-sm max-w-md">
        <span className="text-xl">⚠️</span>
        <div>
          <strong className="font-semibold">Note:</strong> It's recommended to
          use the <strong>first skill format</strong> (simple skills) for better{" "}
          <strong>ATS compatibility</strong> and cleaner structure. Recruiters
          and resume parsers often prefer clear groupings like:
          <br />
          <em>“Languages: HTML, CSS, JavaScript”</em> <br></br>
          <em>Frameworks: ReactJs Angular”</em>
          <br />
          Also, to keep your resume focused, consider using{" "}
          <strong>only one format</strong> — either the progress bards or rated
          skills.
        </div>
      </div>
    </div>
  );
}
