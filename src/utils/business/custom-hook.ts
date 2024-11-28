import { IDetailShareLink } from "@/interface/interface";
import dayjs from "dayjs";
import numeral from "numeral";

export const convertParams = (params: any) => {
  return Object.keys(params)
    .map((key) => key + "=" + params[key])
    .join("&");
};

export const convertNumber = (value: number) => {
  return numeral(value).format("0,0");
};

export const convertToMillionDongFixed = (value: number, type: string) => {
  if (type === "0") {
    const millionDong = value / 1_000_000;
    // Trả về kết quả dưới dạng chuỗi với 2 chữ số thập phân
    if (millionDong % 1 !== 0) {
      // Nếu có dư, làm tròn lên 1 đơn vị
      return millionDong.toFixed(1);
    }
    return millionDong;
  }

  if (type === "1") {
    return numeral(value).format("0,0");
  }
};

export const getCategorySlug = (categoryName: string) => {
  let slug = "";
  switch (categoryName) {
    case "Bí Quyết Tìm Việc":
      slug = "bi-quyet-tim-viec";
      break;
    case "Thị Trường - Xu Hướng":
      slug = "thi-truong-xu-huong";
      break;
    case "Góc Thư Giản":
      slug = "goc-thu-gian";
      break;
    case "Tiện Ích":
      slug = "tien-ich";
      break;
    case "Góc Báo Chí":
      slug = "goc-bao-chi";
      break;
    case "Thị Trường Lương":
      slug = "thi-truong-luong";
      break;
    case "Cẩm Nang Nghề Nghiệp":
      slug = "cam-nang-nghe-nghiep";
      break;
    case "Kỹ Năng Phỏng Vấn":
      slug = "ky-nang-phong-van";
      break;
  }
  return slug;
};

export const slugify = (title: string): string => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-"); // Replace multiple hyphens with a single one
};

export const convertTocShareLink = (
  data: any,
  key: string,
  title: string,
  icon: JSX.Element
) => {
  const arrItem: IDetailShareLink[] = data?.map((item: any) => ({
    title: item[key],
    id: slugify(item[key]),
  }));

  return {
    title,
    icon,
    details: arrItem,
  };
};

export const scrollToId = (id: string, offset = 80) => {
  const element = document.getElementById(id);
  if (element) {
    const yOffset = -offset; // Adjust as needed
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

export const formatDateDifference = (date: string): string => {
  const now = dayjs(); // Current date
  const inputDate = dayjs(date); // Input date
  const diffInDays = now.diff(inputDate, "day");

  if (diffInDays === 0) {
    return "Vừa xem";
  }

  if (diffInDays < 30) {
    return `${diffInDays} ngày trước`;
  }

  if (diffInDays < 365) {
    const diffInMonths = now.diff(inputDate, "month");
    return `${diffInMonths} tháng trước`;
  }

  const diffInYears = now.diff(inputDate, "year");
  return `${diffInYears} năm trước`;
};
