import { GET_DINAMYC_SLUG_URL } from "../api-url";
import { axiosInstanceNotToken } from "../axios";

export const getDynamicPath = async () => {
  const response = await axiosInstanceNotToken.get(GET_DINAMYC_SLUG_URL); // Lấy danh sách đường dẫn động từ API hoặc cơ sở dữ liệu.
  const dynamicPaths = response.data;
  return dynamicPaths;
};

export const staticPaths = [
  "/",
  "/digital-cv",
  "/quan-ly-cv",
  "/viec-lam",
  "/tim-kiem-viec-lam",
  "/viec-lam-da-ung-tuyen",
  "/viec-lam-da-luu",
  "/cong-ty",
  "/tin-tuc",
  "/tin-tuc/bi-quyet-tim-viec",
  "/tin-tuc/thi-truong-xu-huong",
  "/tin-tuc/tien-ich",
  "/tin-tuc/cam-nang-nghe-nghiep",
  "/tin-tuc/ky-nang-phong-van",
  "/cong-cu/net-and-gross",
  "/cong-cu/thue-thu-nhap-ca-nhan",
  "/cong-cu/bao-hiem-xa-hoi-that-nghiep",
  "/cong-cu/bao-hiem-xa-hoi-1-lan",
  "/dang-ky",
  "/cai-dat-thong-tin-ca-nhan",
  "/xem-ho-so",
  "/cai-dat-goi-y-viec-lam",
  "/doi-mat-khau",
  "/tin-tuc/goc-thu-gian",
  "/tin-tuc/goc-bao-chi",
  "/tin-tuc/thi-truong-luong",
  "/dang-nhap",
  "/tim-kiem-viec-lam?Field=57",
  "/tim-kiem-viec-lam?Field=12",
  "/tim-kiem-viec-lam?Field=60",
  "/tim-kiem-viec-lam?Field=61",
  "/tim-kiem-viec-lam?Field=44",
  "/tim-kiem-viec-lam?Field=52",
  "/tim-kiem-viec-lam?Field=17",
  "/tim-kiem-viec-lam?Field=56",
  "/tim-kiem-viec-lam?Field=19",
  "/tim-kiem-viec-lam?Field=31",
  "/gioi-thieu",
  "/lien-he",
  "/chinh-sach-bao-mat",
  "/quy-dinh-ung-vien",
  "/quen-mat-khau",
];
