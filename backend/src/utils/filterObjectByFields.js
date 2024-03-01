export const filterObjectByFields = (baseObj, fields) => {
  // If no specific fields were requested, return the complete object
  if (fields.length === 0) return baseObj;
  // Creates a new object containing only the requested fields
  const filteredObj = {};
  fields.forEach((field) => {
    if (baseObj[field] !== undefined) {
      filteredObj[field] = baseObj[field];
    }
  });

  return filteredObj;
};
