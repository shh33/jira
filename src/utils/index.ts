import { useEffect, useState } from "react";

interface objectProps {
  [propName: string]: any;
}
export const cleanObject = (obj: objectProps) => {
  const newObj = { ...obj };
  Object.keys(newObj).forEach((k) => {
    if (!newObj[k] && newObj[k] !== 0) delete newObj[k];
  });
  return newObj;
};

export const useMount = (fn: () => void) => {
  useEffect(() => {
    fn();
    // eslint-disable-next-line
  }, []);
};

export const useDebounce = <V>(value: V, delay?: number) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    let timeId = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => clearTimeout(timeId);
  }, [value, delay]);
  return debounceValue;
};

export const useArray = <V>(array: V[]) => {
  const [dealArr, setDealArr] = useState(array);
  const removeIndex = (removeIndex: number) => {
    for (let index = 0; index < array.length; index++) {
      if (index === removeIndex) delete array[index];
    }
  };

  const add = (data: V) => {
    setDealArr([...dealArr, data]);
  };

  const clear = () => {
    setDealArr([]);
  };

  return { dealArr, clear, removeIndex, add };
};
