import { useState, useEffect } from "react";

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebounceValue(value), delay);

    return () => clearTimeout(handler);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return debouncedValue;
};
export default useDebounce;
