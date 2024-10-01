export const convertParams = (params: any) => {
  return Object.keys(params)
    .map((key) => key + "=" + params[key])
    .join("&");
};
