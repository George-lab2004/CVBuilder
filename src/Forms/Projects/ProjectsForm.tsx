import { useState } from "react";
import { TextInput, Textarea, Label } from "flowbite-react";
import { FaTimes } from "react-icons/fa";

type ProjectItem = {
  title: string;
  date: string;
  description: string[];
  technologies?: string[];
  links: { platform: string; label: string; url: string }[];
};

export default function ProjectForm({
  setProjects,
  projects = [],
}: {
  setProjects: React.Dispatch<React.SetStateAction<ProjectItem[]>>;
  projects: ProjectItem[];
}) {
  const [tempTitle, setTempTitle] = useState("");
  const [tempDate, setTempDate] = useState("");
  const [tempDesc, setTempDesc] = useState("");
  const [descList, setDescList] = useState<string[]>([]);
  const [tempTechnology, setTempTechnology] = useState("");
  const [technologyList, setTechnologyList] = useState<string[]>([]);

  const [linkPlatform, setLinkPlatform] = useState("");
  const [linkLabel, setLinkLabel] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [linkList, setLinkList] = useState<ProjectItem["links"]>([]);

  const handleAddBullet = () => {
    if (tempDesc.trim()) {
      setDescList((prev) => [...prev, ` ${tempDesc.trim()}`]);
      setTempDesc("");
    }
  };

  const handleRemoveBullet = (index: number) => {
    setDescList((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAddTechnology = () => {
    if (tempTechnology.trim()) {
      setTechnologyList((prev) => [...prev, tempTechnology.trim()]);
      setTempTechnology("");
    }
  };

  const handleRemoveTechnology = (index: number) => {
    setTechnologyList((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAddLink = () => {
    if (linkPlatform && linkLabel && linkUrl) {
      setLinkList((prev) => [
        ...prev,
        {
          platform: linkPlatform.trim(),
          label: linkLabel.trim(),
          url: linkUrl.trim(),
        },
      ]);
      setLinkPlatform("");
      setLinkLabel("");
      setLinkUrl("");
    }
  };

  const handleRemoveLink = (index: number) => {
    setLinkList((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAddProject = () => {
    if (tempTitle && tempDate && descList.length > 0) {
      setProjects((prev) => [
        ...prev,
        {
          title: tempTitle,
          date: tempDate,
          description: descList,
          technologies: technologyList,
          links: linkList,
        },
      ]);
      // Reset fields
      setTempTitle("");
      setTempDate("");
      setTempDesc("");
      setDescList([]);
      setTempTechnology("");
      setTechnologyList([]);
      setLinkPlatform("");
      setLinkLabel("");
      setLinkUrl("");
      setLinkList([]);
    }
  };

  return (
    <div className="p-6 rounded-xl bg-white dark:bg-gray-900 shadow-md transition-colors duration-300 space-y-4">
      {/* Title & Date */}
      <div>
        <Label htmlFor="title">Project Title</Label>
        <TextInput
          id="title"
          placeholder="e.g. Portfolio Website"
          value={tempTitle}
          onChange={(e) => setTempTitle(e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="date">Date</Label>
        <TextInput
          id="date"
          placeholder="e.g. 2024"
          value={tempDate}
          onChange={(e) => setTempDate(e.target.value)}
        />
      </div>

      {/* Description */}
      <div>
        <Label>Description</Label>
        <div className="flex gap-2">
          <Textarea
            value={tempDesc}
            onChange={(e) => setTempDesc(e.target.value)}
            className="flex-1"
            placeholder="Add a bullet point"
            rows={2}
          />
          <button
            type="button"
            onClick={handleAddBullet}
            disabled={!tempDesc.trim()}
            className={`px-4 py-2 rounded text-white ${
              !tempDesc.trim() ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Add
          </button>
        </div>

        <ul className="list-disc pl-6 mt-2 text-sm text-gray-700 dark:text-gray-300">
          {descList.map((desc, idx) => (
            <li key={idx} className="flex items-center gap-2">
              {desc}
              <button
                onClick={() => handleRemoveBullet(idx)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTimes />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies */}
      <div>
        <Label>Technologies</Label>
        <div className="flex gap-2">
          <TextInput
            value={tempTechnology}
            onChange={(e) => setTempTechnology(e.target.value)}
            placeholder="e.g. React, Tailwind"
          />
          <button
            type="button"
            onClick={handleAddTechnology}
            disabled={!tempTechnology.trim()}
            className={`px-4 py-2 text-white rounded ${
              !tempTechnology.trim()
                ? "bg-gray-400"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Add
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {technologyList.map((tech, idx) => (
            <span
              key={idx}
              className="flex items-center bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
            >
              {tech}
              <button
                onClick={() => handleRemoveTechnology(idx)}
                className="ml-2 text-red-500 hover:text-red-700"
              >
                <FaTimes className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div>
        <Label>Project Links</Label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-2">
          <TextInput
            placeholder="Platform e.g. GitHub"
            value={linkPlatform}
            onChange={(e) => setLinkPlatform(e.target.value)}
          />
          <TextInput
            placeholder="Label e.g. Quiz App"
            value={linkLabel}
            onChange={(e) => setLinkLabel(e.target.value)}
          />
          <TextInput
            placeholder="URL"
            type="url"
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
          />
        </div>

        <button
          type="button"
          onClick={handleAddLink}
          disabled={!linkPlatform || !linkLabel || !linkUrl}
          className={`px-4 py-2 rounded text-white ${
            !linkPlatform || !linkLabel || !linkUrl
              ? "bg-gray-400"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          Add Link
        </button>

        <div className="flex flex-wrap gap-2 mt-2">
          {linkList.map((link, idx) => (
            <span
              key={idx}
              className="flex items-center bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
            >
              {link.platform}: {link.label}
              <button
                onClick={() => handleRemoveLink(idx)}
                className="ml-2 text-red-500 hover:text-red-700"
              >
                <FaTimes className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Add Project Button */}
      <button
        onClick={handleAddProject}
        disabled={!tempTitle || !tempDate || descList.length === 0}
        className={`w-full py-2 rounded text-white font-medium ${
          !tempTitle || !tempDate || descList.length === 0
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-600 hover:bg-green-700"
        }`}
      >
        Add Project
      </button>

      {/* Preview as Bubbles */}
      {projects.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {projects.map((proj, index) => (
            <span
              key={index}
              className="flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm"
            >
              {proj.title}
              <button
                onClick={() =>
                  setProjects((prev) => prev.filter((_, i) => i !== index))
                }
                className="ml-2 text-red-500 hover:text-red-700"
              >
                <FaTimes className="w-4 h-4" />
              </button>
            </span>
          ))}
        </div>
      )}

      {/* Tip */}
      <div className="mt-4 flex items-start gap-2 bg-blue-100 text-blue-800 dark:bg-blue-300/10 dark:text-blue-200 border border-blue-300 dark:border-blue-500 rounded-lg px-4 py-3 shadow-sm text-sm max-w-md">
        <span className="text-xl">💡</span>
        <div>
          <strong className="font-semibold">Tip:</strong> Show your best work
          and provide links like <strong>GitHub, Live Demo</strong>. Use action
          words and measurable impact — e.g.{" "}
          <em>
            “Built a quiz app with 1,200+ active users using React & Firebase.”
          </em>
        </div>
      </div>
    </div>
  );
}
