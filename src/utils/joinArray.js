export const joinArray = (arr) => {
  if (Array.isArray(arr)) {
    return arr.join(", ");
  }
  return arr;
};
