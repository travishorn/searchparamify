export default params => {
  const result = new URLSearchParams();

  Object.entries(params).forEach(([key, val]) => {
    result.append(key, val);
  });

  return result;
};
