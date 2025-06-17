import { Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

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
  const [tempEmail, setTempEmail] = useState("");
  const [tempGithub, setTempGithub] = useState("");

  const [tempLinkedIn, setTempLinkedIn] = useState("");
  const [tempPortfolio, setTempPortfolio] = useState("");
  const [tempCity, setTempCity] = useState("");
  const [tempPhone, setTempPhone] = useState("");
  const [email, setEmailState] = useState("");
  const [github, setGithubState] = useState("");
  const [linkedIn, setLinkedInState] = useState("");
  const [portfolio, setPortfolioState] = useState("");
  const [city, setCityState] = useState("");
  const [phone, setPhoneState] = useState("");
  const [blockEmail, setBlockEmail] = useState(false);
  const [blockGithub, setBlockGithub] = useState(false);
  const [blockLinkedIn, setBlockLinkedIn] = useState(false);
  const [blockPortfolio, setBlockPortfolio] = useState(false);
  const [blockCity, setBlockCity] = useState(false);
  const [blockPhone, setBlockPhone] = useState(false);

  const handlemailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempEmail(e.target.value);
  };

  const handleGithubChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempGithub(e.target.value);
  };

  const handleLinkedInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempLinkedIn(e.target.value);
  };

  const handlePortfolioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempPortfolio(e.target.value);
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempCity(e.target.value);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempPhone(e.target.value);
  };
  const [countryCode, setCountryCode] = useState("+20"); // default to Egypt

  const handleSubmitEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempEmail.trim()) {
      setEmail(tempEmail.trim());
      setTempEmail("");
      setEmailState(tempEmail.trim());
      setBlockEmail(true);
    }
  };

  const handleSubmitGithub = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempGithub.trim()) {
      setGithub(tempGithub.trim());
      setTempGithub("");
      setGithubState(tempGithub.trim());
      setBlockGithub(true);
    }
  };

  const handleSubmitLinkedIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempLinkedIn.trim()) {
      setLinkedIn(tempLinkedIn.trim());
      setTempLinkedIn("");
      setLinkedInState(tempLinkedIn.trim());
      setBlockLinkedIn(true);
    }
  };

  const handleSubmitPortfolio = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempPortfolio.trim()) {
      setPortfolio(tempPortfolio.trim());
      setTempPortfolio("");
      setPortfolioState(tempPortfolio.trim());
      setBlockPortfolio(true);
    }
  };

  const handleSubmitCity = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempCity.trim()) {
      setCity(tempCity.trim());
      setTempCity("");
      setCityState(tempCity.trim());
      setBlockCity(true);
    }
  };

  const handleSubmitPhone = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempPhone.trim()) {
      setPhone(`${countryCode}${tempPhone.trim()}`);
      setTempPhone("");
      setPhoneState(tempPhone.trim());
      setBlockPhone(true);
      setCountryCode("+20");
    }
  };

  const handleCloseEmail = () => {
    setBlockEmail(false);
    setEmailState("");
    setEmail("");
  };
  const handleCloseGithub = () => {
    setBlockGithub(false);
    setGithubState("");
    setGithub("");
  };
  const handleCloseLinkedIn = () => {
    setBlockLinkedIn(false);
    setLinkedInState("");
    setLinkedIn("");
  };
  const handleClosePortfolio = () => {
    setBlockPortfolio(false);
    setPortfolioState("");
    setPortfolio("");
  };
  const handleCloseCity = () => {
    setBlockCity(false);
    setCityState("");
    setCity("");
  };
  const handleClosePhone = () => {
    setBlockPhone(false);
    setPhoneState("");
    setPhone("");
  };
  return (
    <div className=" p-4 ">
      {/* Name Field */}
      <form onSubmit={handleSubmitEmail} className="space-y-1">
        <Label
          htmlFor="name"
          className="text-sm text-gray-700 dark:text-gray-200"
        >
          Email
        </Label>
        <div className="flex flex-wrap gap-3">
          <TextInput
            id="email"
            type="email"
            placeholder="e.g. George Milad"
            value={tempEmail}
            onChange={handlemailChange}
            className="flex-1 "
            required
            disabled={blockEmail}
          />
          <button
            type="submit"
            disabled={blockEmail || !tempEmail}
            className={`px-4 py-2 rounded min-w-[80px] text-white transition-colors duration-300 ${
              blockEmail || !tempEmail
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Add
          </button>
        </div>

        {blockEmail && (
          <div className="flex items-center mt-2 w-fit px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full shadow-sm border border-gray-300 dark:border-gray-600">
            <span className="text-sm">{email}</span>
            <button
              type="button"
              onClick={handleCloseEmail}
              className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
              title="Remove"
            >
              <FaTimes className="w-4 h-4" />
            </button>
          </div>
        )}
      </form>

      {/* Github Field */}
      <form onSubmit={handleSubmitGithub} className="space-y-1">
        <Label
          htmlFor="github"
          className="text-sm text-gray-700 dark:text-gray-200"
        >
          Github
        </Label>
        <div className="flex flex-wrap gap-3">
          <TextInput
            id="github"
            type="url"
            placeholder="e.g. George Milad"
            value={tempGithub}
            onChange={handleGithubChange}
            className="flex-1 "
            disabled={blockGithub}
          />

          <button
            type="submit"
            disabled={blockGithub || !tempGithub}
            className={`px-4 py-2 rounded min-w-[80px] text-white transition-colors duration-300 ${
              blockGithub || !tempGithub
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Add
          </button>
        </div>
        {blockGithub && (
          <div className="flex items-center mt-2 w-fit px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full shadow-sm border border-gray-300 dark:border-gray-600">
            <span className="text-sm">{"..." + github.slice(-5)}</span>
            <button
              type="button"
              onClick={handleCloseGithub}
              className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
              title="Remove"
            >
              <FaTimes className="w-4 h-4" />
            </button>
          </div>
        )}
      </form>

      {/* LinkedIn Field */}

      <form onSubmit={handleSubmitLinkedIn} className="space-y-1">
        <Label
          htmlFor="linkedin"
          className="text-sm text-gray-700 dark:text-gray-200"
        >
          LinkedIn
        </Label>
        <div className="flex flex-wrap gap-3">
          <TextInput
            id="linkedin"
            type="url"
            placeholder="e.g. George Milad"
            value={tempLinkedIn}
            onChange={handleLinkedInChange}
            className="flex-1 "
            disabled={blockLinkedIn}
          />

          <button
            type="submit"
            disabled={blockLinkedIn || !tempLinkedIn}
            className={`px-4 py-2 rounded min-w-[80px] text-white transition-colors duration-300 ${
              blockLinkedIn || !tempLinkedIn
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Add
          </button>
        </div>
        {blockLinkedIn && (
          <div className="flex items-center mt-2 w-fit px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full shadow-sm border border-gray-300 dark:border-gray-600">
            <span className="text-sm">{"..." + linkedIn.slice(-5)}</span>
            <button
              type="button"
              onClick={handleCloseLinkedIn}
              className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
              title="Remove"
            >
              <FaTimes className="w-4 h-4" />
            </button>
          </div>
        )}
      </form>

      {/* Portfolio Field */}

      <form onSubmit={handleSubmitPortfolio} className="space-y-1">
        <Label
          htmlFor="portfolio"
          className="text-sm text-gray-700 dark:text-gray-200"
        >
          Portfolio
        </Label>
        <div className="flex flex-wrap gap-3">
          <TextInput
            id="portfolio"
            type="url"
            placeholder="e.g. George Milad"
            value={tempPortfolio}
            onChange={handlePortfolioChange}
            className="flex-1 "
            disabled={blockPortfolio}
          />

          <button
            type="submit"
            disabled={blockPortfolio || !tempPortfolio}
            className={`px-4 py-2 rounded min-w-[80px] text-white transition-colors duration-300 ${
              blockPortfolio || !tempPortfolio
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Add
          </button>
        </div>
        {blockPortfolio && (
          <div className="flex items-center mt-2 w-fit px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full shadow-sm border border-gray-300 dark:border-gray-600">
            <span className="text-sm">{"..." + portfolio.slice(-5)}</span>
            <button
              type="button"
              onClick={handleClosePortfolio}
              className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
              title="Remove"
            >
              <FaTimes className="w-4 h-4" />
            </button>
          </div>
        )}
      </form>

      {/* City Field */}

      <form onSubmit={handleSubmitCity} className="space-y-1">
        <Label
          htmlFor="city"
          className="text-sm text-gray-700 dark:text-gray-200"
        >
          City
        </Label>
        <div className="flex flex-wrap gap-3">
          <TextInput
            id="city"
            type="text"
            placeholder="e.g. George Milad"
            value={tempCity}
            onChange={handleCityChange}
            className="flex-1 "
            disabled={blockCity}
          />

          <button
            type="submit"
            disabled={blockCity || !tempCity}
            className={`px-4 py-2 rounded min-w-[80px] text-white transition-colors duration-300 ${
              blockCity || !tempCity
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Add
          </button>
        </div>
        {blockCity && (
          <div className="flex items-center mt-2 w-fit px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full shadow-sm border border-gray-300 dark:border-gray-600">
            <span className="text-sm">{city}</span>
            <button
              type="button"
              onClick={handleCloseCity}
              className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
              title="Remove"
            >
              <FaTimes className="w-4 h-4" />
            </button>
          </div>
        )}
      </form>

      {/* Phone Field */}

      <form onSubmit={handleSubmitPhone} className="space-y-1">
        <Label
          htmlFor="phone"
          className="text-sm text-gray-700 dark:text-gray-200"
        >
          Phone
        </Label>

        <div className="flex flex-wrap gap-3">
          <TextInput
            id="countryCode"
            type="text"
            placeholder="+20"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className="w-[100px]"
            disabled={blockPhone}
          />

          <TextInput
            id="phone"
            type="number"
            placeholder="e.g. 123456789"
            value={tempPhone}
            onChange={handlePhoneChange}
            className="flex-1"
            disabled={blockPhone}
          />

          <button
            type="submit"
            disabled={blockPhone || !tempPhone || !countryCode}
            className={`px-4 py-2 rounded min-w-[80px] text-white transition-colors duration-300 ${
              blockPhone || !tempPhone || !countryCode
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Add
          </button>
        </div>

        {blockPhone && (
          <div className="flex items-center mt-2 w-fit px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full shadow-sm border border-gray-300 dark:border-gray-600">
            <span className="text-sm">{phone}</span>
            <button
              type="button"
              onClick={handleClosePhone}
              className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
              title="Remove"
            >
              <FaTimes className="w-4 h-4" />
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
