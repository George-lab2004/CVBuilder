import { useEffect, useState } from "react";

// Hook to keep state synced with localStorage
export function usePersistentState<T>(key: string, initialValue: T) {
  // State: load from localStorage if found, otherwise use initialValue
  const [value, setValue] = useState<T>(() => {
    const stored = localStorage.getItem(key);
    return stored !== null ? JSON.parse(stored) : initialValue;
  });

  // Effect: save value to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  // Return value and setter, just like useState
  return [value, setValue] as const;
}
