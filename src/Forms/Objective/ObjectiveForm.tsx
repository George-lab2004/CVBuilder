import React from "react";
import { useFormField } from "../../Pages/CvBuilder/UseFormField";
import { Label, Textarea, TextInput } from "flowbite-react";
import { FaTimes } from "react-icons/fa";

// Pill component
function Pill({ text, onClose }: { text: string; onClose: () => void }) {
  return (
    <div className="flex items-center mt-2 w-fit px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full shadow-sm border border-gray-300 dark:border-gray-600">
      <span className="text-sm">{text}</span>
      <button
        type="button"
        onClick={onClose}
        className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
        title="Remove"
      >
        <FaTimes className="w-4 h-4" />
      </button>
    </div>
  );
}

// Main form
export default function ObjectiveForm({
  setSummary,
  setSummaryTitle,
}: {
  setSummary: React.Dispatch<React.SetStateAction<string>>;
  setSummaryTitle: React.Dispatch<React.SetStateAction<string>>;
}) {
  const summaryField = useFormField("", () => setSummary(""));
  const summaryTitleField = useFormField("", () => setSummaryTitle(""));

  return (
    <div className="p-6 rounded-xl bg-white dark:bg-gray-900 shadow-md transition-colors duration-300 space-y-6">
      <form
        onSubmit={summaryTitleField.handleSubmit(setSummaryTitle)}
        className="space-y-4"
      >
        {/* Title Field */}
        <div>
          <Label
            htmlFor="summary-title"
            className="mb-1 block text-sm text-gray-700 dark:text-gray-200"
          >
            Summary Title (e.g., Objective)
          </Label>
          <TextInput
            id="summary-title"
            type="text"
            placeholder="Objective"
            value={summaryTitleField.value}
            onChange={summaryTitleField.handleChange}
            disabled={summaryTitleField.isBlocked}
          />

          {summaryTitleField.isBlocked && (
            <Pill
              text={summaryTitleField.value}
              onClose={summaryTitleField.handleClose}
            />
          )}
        </div>

        <button
          type="submit"
          disabled={summaryTitleField.isBlocked || !summaryTitleField.value}
          className={`px-4 py-2 min-w-[80px] text-white rounded transition-colors duration-300 ${
            summaryTitleField.isBlocked || !summaryTitleField.value
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          Add
        </button>
      </form>

      <form
        onSubmit={summaryField.handleSubmit(setSummary)}
        className="space-y-4"
      >
        {/* Summary Text Field */}
        <div>
          <Label
            htmlFor="summary-text"
            className="mb-1 block text-sm text-gray-700 dark:text-gray-200"
          >
            Summary Description
          </Label>
          <Textarea
            id="summary-text"
            placeholder="Brief description about your career goals..."
            rows={4}
            value={summaryField.value}
            onChange={summaryField.handleChange}
            disabled={summaryField.isBlocked}
            maxLength={301}
          />
          <small className="text-gray-500">
            {301 - summaryField.value.length} characters left
          </small>

          {/* Pill for Summary Text */}
          {summaryField.isBlocked && (
            <Pill
              text={summaryField.value.split("\n")[0] + "..."} // Show first line as pill text
              onClose={summaryField.handleClose}
            />
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={summaryField.isBlocked || !summaryField.value}
          className={`px-4 py-2 min-w-[80px] text-white rounded transition-colors duration-300 ${
            summaryField.isBlocked || !summaryField.value
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          Add
        </button>
      </form>
    </div>
  );
}
