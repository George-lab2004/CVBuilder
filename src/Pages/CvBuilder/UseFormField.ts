// UseFormField.ts
import { useState, useEffect } from "react";

export function useFormField(
  initialValue: string,
  onClear: () => void,
  key?: string
) {
  const [value, setValue] = useState(() => {
    if (key) {
      const stored = localStorage.getItem(key);
      return stored !== null ? JSON.parse(stored) : initialValue;
    }
    return initialValue;
  });

  const [isBlocked, setIsBlocked] = useState(() => {
    if (key) {
      return localStorage.getItem(key + "_blocked") === "true";
    }
    return false;
  });

  useEffect(() => {
    if (key) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  useEffect(() => {
    if (key) {
      localStorage.setItem(key + "_blocked", JSON.stringify(isBlocked));
    }
  }, [key, isBlocked]);

  function handleChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    setValue(e.target.value);
  }

  function handleClose() {
    setValue("");
    setIsBlocked(false);
    onClear();
  }

  function handleSubmit(setter: (v: string) => void) {
    return (e: React.FormEvent) => {
      e.preventDefault();
      if (value.trim()) {
        const trimmed = value.trim();
        setter(trimmed);
        setIsBlocked(true);
      }
    };
  }

  return {
    value,
    isBlocked,
    handleChange,
    handleSubmit,
    handleClose,
    setValue,
  };
}
