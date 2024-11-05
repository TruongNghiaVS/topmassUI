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
