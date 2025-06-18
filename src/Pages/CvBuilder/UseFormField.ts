import { useState } from "react";

export function useFormField(initialValue: string, onClear?: () => void) {
  const [value, setValue] = useState(initialValue);
  const [isBlocked, setIsBlocked] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setValue(e.target.value);
  }

  function handleSubmit(callback: (val: string) => void) {
    return (e: React.FormEvent) => {
      e.preventDefault();
      if (!value.trim()) return;
      callback(value);
      setIsBlocked(true);
    };
  }

  function handleClose() {
    setValue("");
    setIsBlocked(false);
    if (onClear) onClear(); // 🔥 clear parent state too
  }

  return {
    value,
    isBlocked,
    handleChange,
    handleSubmit,
    handleClose,
  };
}
