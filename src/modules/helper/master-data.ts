import { IProfileInfomation } from "@/interface/interface";
import useSWR from "swr";
import {
  CURRENT_USER,
  GET_EDUCATION_LEVEL,
  GET_JOB_TYPE,
  GET_MASTER_DATA_CAREER,
  GET_MASTERDATA_EXPERIENCE,
  GET_MASTERDATA_RANK,
  GET_MASTERDATA_REALMS,
  GET_PROVINCE,
  GET_PROVINCE_SEARCH,
} from "@/utils/api-url";
import { fetcher } from "@/utils/axios";

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
      value: "-1",
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

export const ProvincesFilterJob = () => {
  const { data, error, mutate, isLoading } = useSWR(
    GET_PROVINCE_SEARCH,
    fetcher
  );

  let provincesFilterJob = data
    ? data.map((item: any) => {
        return {
          value: item.code,
          label: item.name,
        };
      })
    : [];
  const listProvincesFilterJob = [
    {
      label: "Tất cả",
      value: "-1",
    },
    ...provincesFilterJob,
  ];

  return {
    error,
    isLoading,
    provincesFilterJob,
    listProvincesFilterJob,
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
      value: "-1",
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

export const JobType = () => {
  const { data, error, mutate, isLoading } = useSWR(GET_JOB_TYPE, fetcher);

  const jobType = data
    ? data?.map((item: any) => {
        return {
          value: item.id.toString(),
          label: item.text,
        };
      })
    : [];
  const listJobType = [
    {
      label: "Tất cả",
      value: "-1",
    },
    ...jobType,
  ];
  return {
    error,
    isLoading,
    jobType,
    listJobType,
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
      value: "-1",
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
      value: "-1",
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

export const Rank = () => {
  const { data, error, mutate, isLoading } = useSWR(
    GET_MASTERDATA_RANK,
    fetcher
  );

  const ranks = data
    ? data?.map((item: any) => {
        return {
          value: item.id.toString(),
          label: item.text,
        };
      })
    : [];
  const listRanks = [
    {
      label: "Tất cả",
      value: "-1",
    },
    ...ranks,
  ];
  return {
    error,
    isLoading,
    ranks,
    listRanks,
    mutate,
  };
};

export const EducationLevel = () => {
  const { data, error, mutate, isLoading } = useSWR(
    GET_EDUCATION_LEVEL,
    fetcher
  );

  const educationLevels = data
    ? data?.map((item: any) => {
        return {
          value: item.id.toString(),
          label: item.text,
        };
      })
    : [];
  const listEducationLevels = [
    {
      label: "Tất cả",
      value: "",
    },
    ...educationLevels,
  ];
  return {
    error,
    isLoading,
    educationLevels,
    listEducationLevels,
    mutate,
  };
};

export const CurrentUser = () => {
  const { mutate, data: currentUser, error } = useSWR<IProfileInfomation>(
    CURRENT_USER,
    fetcher
  );

  return {
    currentUser,
  };
};
