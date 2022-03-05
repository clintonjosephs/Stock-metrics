export const fetchApiCall = async (url) => {
  const response = await fetch(url).then((data) => data.json());
  return response;
};
