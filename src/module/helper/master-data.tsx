import {
  GET_MASTER_DATA_CAREER,
  GET_MASTERDATA_EXPERIENCE,
  GET_MASTERDATA_REALMS,
  GET_PROVINCE,
} from "@/utils/api-url";
import { fetcher } from "@/utils/axios";
import useSWR from "swr";

export const Provinces = () => {
  const { data, error, mutate, isLoading } = useSWR(GET_PROVINCE, fetcher);
  const provinces = data
    ? data?.data.map((item: any) => {
        return {
          value: item.code,
          label: item.name,
        };
      })
    : [];
  const listProvinces = [
    {
      label: "Tất cả",
      value: "",
    },
    ...provinces,
  ];
  return {
    error,
    isLoading,
    provinces,
    listProvinces,
    mutate,
  };
};

export const Experiences = () => {
  const { data, error, mutate, isLoading } = useSWR(
    GET_MASTERDATA_EXPERIENCE,
    fetcher
  );

  const experiences = data
    ? data?.map((item: any) => {
        return {
          value: item.id.toString(),
          label: item.text,
        };
      })
    : [];
  const listExperiences = [
    {
      label: "Tất cả",
      value: "",
    },
    ...experiences,
  ];
  return {
    error,
    isLoading,
    experiences,
    listExperiences,
    mutate,
  };
};

export const Career = () => {
  const { data, error, mutate, isLoading } = useSWR(
    GET_MASTER_DATA_CAREER,
    fetcher
  );

  const careers = data
    ? data?.map((item: any) => {
        return {
          value: item.id.toString(),
          label: item.text,
        };
      })
    : [];
  const listCareers = [
    {
      label: "Tất cả",
      value: "",
    },
    ...careers,
  ];
  return {
    error,
    isLoading,
    careers,
    listCareers,
    mutate,
  };
};

export const Realm = () => {
  const { data, error, mutate, isLoading } = useSWR(
    GET_MASTERDATA_REALMS,
    fetcher
  );

  const realms = data
    ? data?.map((item: any) => {
        return {
          value: item.id.toString(),
          label: item.text,
        };
      })
    : [];
  const listRealms = [
    {
      label: "Tất cả",
      value: "",
    },
    ...realms,
  ];
  return {
    error,
    isLoading,
    realms,
    listRealms,
    mutate,
  };
};
