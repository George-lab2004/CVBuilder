const [tempEmail, setTempEmail] = useState("");
const [tempGithub, setTempGithub] = useState("");
// Used temporary states to handle input changes
// before submitting to avoid unnecessary re-renders
const [tempLinkedIn, setTempLinkedIn] = useState("");
const [tempPortfolio, setTempPortfolio] = useState("");
const [tempCity, setTempCity] = useState("");
const [tempPhone, setTempPhone] = useState("");
const [email, setEmailState] = useState(() => {
  return localStorage.getItem("email") || "";
});
//  initializing states with localStorage values and to display them on the page
const [github, setGithubState] = useState(() => {
  return localStorage.getItem("github") || "";
});
const [linkedIn, setLinkedInState] = useState(() => {
  return localStorage.getItem("linkedIn") || "";
});
const [portfolio, setPortfolioState] = useState(() => {
  return localStorage.getItem("portfolio") || "";
});
const [city, setCityState] = useState(() => {
  return localStorage.getItem("city") || "";
});
const [phone, setPhoneState] = useState(() => {
  return localStorage.getItem("phone") || "";
});
const [blockEmail, setBlockEmail] = useState(() => {
  return localStorage.getItem("blockEmail") === "true";
});
const [blockGithub, setBlockGithub] = useState(() => {
  return localStorage.getItem("blockGithub") === "true";
});

// Used to block the input fields after adding the data
// and to display the data on the page
const [blockLinkedIn, setBlockLinkedIn] = useState(() => {
  return localStorage.getItem("blockLinkedIn") === "true";
});
const [blockCity, setBlockCity] = useState(() => {
  return localStorage.getItem("blockCity") === "true";
});
const [blockPhone, setBlockPhone] = useState(() => {
  return localStorage.getItem("blockPhone") === "true";
});

const [blockPortfolio, setBlockPortfolio] = useState(() => {
  return localStorage.getItem("blockPortfolio") === "true";
});

useEffect(() => {
  localStorage.setItem("email", email);
}, [email]);

useEffect(() => {
  localStorage.setItem("github", github);
}, [github]);

useEffect(() => {
  localStorage.setItem("linkedIn", linkedIn);
}, [linkedIn]);

useEffect(() => {
  localStorage.setItem("portfolio", portfolio);
}, [portfolio]);

useEffect(() => {
  localStorage.setItem("city", city);
}, [city]);

useEffect(() => {
  localStorage.setItem("phone", phone);
}, [phone]);
useEffect(() => {
  localStorage.setItem("blockEmail", blockEmail.toString());
}, [blockEmail]);

useEffect(() => {
  localStorage.setItem("blockGithub", blockGithub.toString());
}, [blockGithub]);

useEffect(() => {
  localStorage.setItem("blockLinkedIn", blockLinkedIn.toString());
}, [blockLinkedIn]);

useEffect(() => {
  localStorage.setItem("blockCity", blockCity.toString());
}, [blockCity]);

useEffect(() => {
  localStorage.setItem("blockPhone", blockPhone.toString());
}, [blockPhone]);

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
