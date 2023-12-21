import { useEffect, useState } from "react";

export const cleanObject = (obj) => {
  const newObj = { ...obj };
  Object.keys(newObj).forEach((k) => {
    if (!newObj[k] && newObj[k] !== 0) delete newObj[k];
  });
  return newObj;
};

export const useMount = (fn) => {
  useEffect(() => {
    fn();
  }, []);
};

export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    let timeId = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => clearTimeout(timeId);
  }, [value, delay]);
  return debounceValue;
};
