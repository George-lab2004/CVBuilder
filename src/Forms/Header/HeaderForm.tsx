import { Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export function HeaderForm({
  setName,
  setRole,
}: {
  setName: React.Dispatch<React.SetStateAction<string>>;
  setRole: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [tempName, setTempName] = useState("");
  const [tempRole, setTempRole] = useState("");
  const [name, setname] = useState("");
  const [role, setrole] = useState("");
  const [block, setblock] = useState(false);
  const [blockRole, setBlockRole] = useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempName(e.target.value);
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempRole(e.target.value);
  };

  const handleSubmitName = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempName.trim()) {
      const trimmed = tempName.trim();
      setName(trimmed);
      setTempName("");
      setname(trimmed);
      setblock(true);
    }
  };

  const handleSubmitRole = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempRole.trim()) {
      const trimmed = tempRole.trim();
      setRole(trimmed);
      setTempRole("");
      setrole(trimmed);
      setBlockRole(true);
    }
  };

  const handleCloseName = () => {
    setblock(false);
    setname("");
    setName("");
  };

  const handleCloseRole = () => {
    setBlockRole(false);
    setrole("");
    setRole("");
  };

  return (
    <div className="p-4">
      {/* Name Field */}
      <form onSubmit={handleSubmitName} className="space-y-1">
        <Label
          htmlFor="name"
          className="text-sm text-gray-700 dark:text-gray-200"
        >
          Name
        </Label>
        <div className="flex-col">
          <div className="flex flex-wrap gap-3">
            <TextInput
              id="name"
              type="text"
              placeholder="e.g. George Milad"
              value={tempName}
              onChange={handleNameChange}
              className="flex-1"
              disabled={block}
            />
            <button
              type="submit"
              disabled={block || !tempName}
              className={`px-4 py-2 rounded min-w-[80px] text-white transition-colors duration-300 ${
                block || !tempName
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              Add
            </button>
          </div>
          {block && (
            <div className="flex items-center mt-2 w-fit px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full shadow-sm border border-gray-300 dark:border-gray-600">
              <span className="text-sm">{name}</span>
              <button
                type="button"
                onClick={handleCloseName}
                className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
                title="Remove"
              >
                <FaTimes className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </form>
      {/* Role Field */}
      <form
        onSubmit={handleSubmitRole}
        className="space-y-1 mt-
      2"
      >
        <Label
          htmlFor="role"
          className="text-sm text-gray-700 dark:text-gray-200"
        >
          Role
        </Label>
        <div className="flex-col">
          <div className="flex flex-wrap gap-3">
            <TextInput
              id="role"
              type="text"
              placeholder="e.g. Software Engineer"
              value={tempRole}
              onChange={handleRoleChange}
              className="flex-1"
              disabled={blockRole}
            />
            <button
              type="submit"
              disabled={blockRole || !tempRole}
              className={`px-4 py-2 rounded min-w-[80px] text-white transition-colors duration-300 ${
                blockRole || !tempRole
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              Add
            </button>
          </div>
          {blockRole && (
            <div className="flex items-center mt-2 w-fit px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full shadow-sm border border-gray-300 dark:border-gray-600">
              <span className="text-sm">{role}</span>
              <button
                type="button"
                onClick={handleCloseRole}
                className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
                title="Remove"
              >
                <FaTimes className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
