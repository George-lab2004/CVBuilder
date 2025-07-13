import { useState, useEffect } from "react";

// Custom hook to manage a form field with optional localStorage persistence and blocking
export function useFormField(
  initialValue: string, // default starting value
  onClear: () => void, // callback when cleared
  key?: string // unique key for localStorage (optional)
) {
  // State: value of the input
  const [value, setValue] = useState(() => {
    // On first load: get saved value from localStorage if key exists
    if (key) {
      const stored = localStorage.getItem(key);
      return stored !== null ? JSON.parse(stored) : initialValue;
    }
    return initialValue;
  });

  // State: whether the field is blocked (disabled)
  const [isBlocked, setIsBlocked] = useState(() => {
    if (key) {
      return localStorage.getItem(key + "_blocked") === "true";
    }
    return false;
  });

  // Effect: update localStorage whenever value changes
  useEffect(() => {
    if (key) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  // Effect: update localStorage whenever isBlocked changes
  useEffect(() => {
    if (key) {
      localStorage.setItem(key + "_blocked", JSON.stringify(isBlocked));
    }
  }, [key, isBlocked]);

  // Handle typing in the field
  function handleChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    setValue(e.target.value);
  }

  // Handle clearing the field (e.g., on close button)
  function handleClose() {
    setValue(""); // clear value
    setIsBlocked(false); // unblock
    onClear(); // call external clear function
  }

  // Handle submit: trim value, save it, then block further edits
  function handleSubmit(setter: (v: string) => void) {
    return (e: React.FormEvent) => {
      e.preventDefault();
      if (value.trim()) {
        const trimmed = value.trim();
        setter(trimmed); // send value outside
        setIsBlocked(true); // block editing
      }
    };
  }

  // Return everything needed by components
  return {
    value,
    isBlocked,
    handleChange,
    handleSubmit,
    handleClose,
    setValue,
  };
}
