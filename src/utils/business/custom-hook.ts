import numeral from "numeral";

export const convertParams = (params: any) => {
  return Object.keys(params)
    .map((key) => key + "=" + params[key])
    .join("&");
};

export const converNumber = (value: number) => {
  return numeral(value).format("0,0");
};
