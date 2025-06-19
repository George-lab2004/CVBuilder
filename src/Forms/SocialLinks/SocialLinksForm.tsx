import { Label, TextInput } from "flowbite-react";
import { FaTimes } from "react-icons/fa";
import { useFormField } from "../../Pages/CvBuilder/UseFormField";
import { useState } from "react";

export function SocialLinksForm({
  setEmail,
  setGithub,
  setLinkedIn,
  setPortfolio,
  setCity,
  setPhone,
}: {
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setGithub: React.Dispatch<React.SetStateAction<string>>;
  setLinkedIn: React.Dispatch<React.SetStateAction<string>>;
  setPortfolio: React.Dispatch<React.SetStateAction<string>>;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
}) {
  const emailField = useFormField("", () => setEmail(""), "email");
  const githubField = useFormField("", () => setGithub(""), "github");
  const linkedInField = useFormField("", () => setLinkedIn(""), "linkedIn");
  const portfolioField = useFormField("", () => setPortfolio(""), "portfolio");
  const cityField = useFormField("", () => setCity(""), "city");
  const phoneField = useFormField("", () => setPhone(""), "phone");

  const [countryCode, setCountryCode] = useState("+20");

  return (
    <div className="p-6 rounded-xl bg-white dark:bg-gray-900 shadow-md transition-colors duration-300 space-y-4">
      {/* Email Field */}
      <form onSubmit={emailField.handleSubmit(setEmail)} className="space-y-1">
        <Label htmlFor="email">Email</Label>
        <div className="flex gap-3">
          <TextInput
            id="email"
            type="email"
            placeholder="George.Milad2@gmail.com"
            value={emailField.value}
            onChange={emailField.handleChange}
            disabled={emailField.isBlocked}
            required
            className="flex-1"
          />
          <button
            type="submit"
            disabled={emailField.isBlocked || !emailField.value}
            className={`px-4 py-2 min-w-[80px] text-white rounded ${
              emailField.isBlocked || !emailField.value
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Add
          </button>
        </div>
        {emailField.isBlocked && (
          <Pill text={emailField.value} onClose={emailField.handleClose} />
        )}
      </form>

      {/* Github Field */}
      <form
        onSubmit={githubField.handleSubmit(setGithub)}
        className="space-y-1"
      >
        <Label htmlFor="github">Github</Label>
        <div className="flex gap-3">
          <TextInput
            id="github"
            type="url"
            placeholder="https://github.com/George-lab2004"
            value={githubField.value}
            onChange={githubField.handleChange}
            disabled={githubField.isBlocked}
            className="flex-1"
          />
          <button
            type="submit"
            disabled={githubField.isBlocked || !githubField.value}
            className={`px-4 py-2 min-w-[80px] text-white rounded ${
              githubField.isBlocked || !githubField.value
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Add
          </button>
        </div>
        {githubField.isBlocked && (
          <Pill
            text={"..." + githubField.value.slice(-5)}
            onClose={githubField.handleClose}
          />
        )}
      </form>

      {/* LinkedIn Field */}
      <form
        onSubmit={linkedInField.handleSubmit(setLinkedIn)}
        className="space-y-1"
      >
        <Label htmlFor="linkedin">LinkedIn</Label>
        <div className="flex gap-3">
          <TextInput
            id="linkedin"
            type="url"
            placeholder="https://linkedin.com/in/..."
            value={linkedInField.value}
            onChange={linkedInField.handleChange}
            disabled={linkedInField.isBlocked}
            className="flex-1"
          />
          <button
            type="submit"
            disabled={linkedInField.isBlocked || !linkedInField.value}
            className={`px-4 py-2 min-w-[80px] text-white rounded ${
              linkedInField.isBlocked || !linkedInField.value
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Add
          </button>
        </div>
        {linkedInField.isBlocked && (
          <Pill
            text={"..." + linkedInField.value.slice(-5)}
            onClose={linkedInField.handleClose}
          />
        )}
      </form>

      {/* Portfolio Field */}
      <form
        onSubmit={portfolioField.handleSubmit(setPortfolio)}
        className="space-y-1"
      >
        <Label htmlFor="portfolio">Portfolio</Label>
        <div className="flex gap-3">
          <TextInput
            id="portfolio"
            type="url"
            placeholder="https://yourportfolio.com"
            value={portfolioField.value}
            onChange={portfolioField.handleChange}
            disabled={portfolioField.isBlocked}
            className="flex-1"
          />
          <button
            type="submit"
            disabled={portfolioField.isBlocked || !portfolioField.value}
            className={`px-4 py-2 min-w-[80px] text-white rounded ${
              portfolioField.isBlocked || !portfolioField.value
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Add
          </button>
        </div>
        {portfolioField.isBlocked && (
          <Pill
            text={"..." + portfolioField.value.slice(-5)}
            onClose={portfolioField.handleClose}
          />
        )}
      </form>

      {/* City Field */}
      <form onSubmit={cityField.handleSubmit(setCity)} className="space-y-1">
        <Label htmlFor="city">City</Label>
        <div className="flex gap-3">
          <TextInput
            id="city"
            type="text"
            placeholder="Cairo"
            value={cityField.value}
            onChange={cityField.handleChange}
            disabled={cityField.isBlocked}
            className="flex-1"
          />
          <button
            type="submit"
            disabled={cityField.isBlocked || !cityField.value}
            className={`px-4 py-2 min-w-[80px] text-white rounded ${
              cityField.isBlocked || !cityField.value
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Add
          </button>
        </div>
        {cityField.isBlocked && (
          <Pill text={cityField.value} onClose={cityField.handleClose} />
        )}
      </form>

      {/* Phone Field */}
      <form
        onSubmit={phoneField.handleSubmit((val) =>
          setPhone(`${countryCode}${val}`)
        )}
        className="space-y-1"
      >
        <Label htmlFor="phone">Phone</Label>
        <div className="flex gap-3 flex-wrap">
          <TextInput
            id="countryCode"
            type="text"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            disabled={phoneField.isBlocked}
            className="w-[100px]"
          />
          <TextInput
            id="phone"
            type="tel"
            placeholder="123456789"
            value={phoneField.value}
            onChange={phoneField.handleChange}
            disabled={phoneField.isBlocked}
            className="flex-1"
          />
          <button
            type="submit"
            disabled={phoneField.isBlocked || !phoneField.value || !countryCode}
            className={`px-4 py-2 min-w-[80px] text-white rounded ${
              phoneField.isBlocked || !phoneField.value || !countryCode
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Add
          </button>
        </div>
        {phoneField.isBlocked && (
          <Pill
            text={`${countryCode}${phoneField.value}`}
            onClose={phoneField.handleClose}
          />
        )}
      </form>
      <div className="mt-4 flex items-start gap-2 bg-green-100 text-green-800 dark:bg-green-300/10 dark:text-green-200 border border-green-300 dark:border-green-500 rounded-lg px-4 py-3 shadow-sm text-sm max-w-md">
        <span className="text-xl">💡</span>
        <div>
          <strong className="font-semibold">Tip:</strong> Adding links to
          GitHub, LinkedIn, or your portfolio boosts your credibility. Let
          employers explore your work with one click.
        </div>
      </div>
    </div>
  );
}

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
