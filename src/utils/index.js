export const cleanObject = (obj) => {
  const newObj = { ...obj };
  Object.keys(newObj).forEach((k) => {
    if (!newObj[k] && newObj[k] !== 0) delete newObj[k];
  });
  return newObj;
};
