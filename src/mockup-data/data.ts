import numeral from "numeral";

export const locations = [
  { value: 0, label: "TP.HCM" },
  { value: 1, label: "Quận 1" },
  { value: 2, label: "Quận 2" },
  { value: 3, label: "Quận 3" },
  { value: 4, label: "Quận 4" },
  { value: 5, label: "Quận 5" },
  { value: 6, label: "Quận 6" },
  { value: 7, label: "Quận 7" },
  { value: 8, label: "Quận 8" },
  { value: 9, label: "Quận 9" },
  { value: 10, label: "Quận 10" },
  { value: 11, label: "TP.Thủ Đức" },
  { value: 12, label: "TP.HCM" },
  { value: 13, label: "TP.HCM" },
  { value: 14, label: "TP.HCM" },
  { value: 15, label: "TP.HCM" },
  { value: 16, label: "TP.HCM" },
  { value: 17, label: "TP.HCM" },
  { value: 18, label: "TP.HCM" },
  { value: 19, label: "TP.HCM" },
  { value: 20, label: "TP.HCM" },
];

export const prices = [
  { value: 0, label: numeral(1000000).format("0,0") },
  { value: 1, label: numeral(1000000).format("0,0") },
  { value: 2, label: numeral(1000000).format("0,0") },
  { value: 3, label: numeral(1000000).format("0,0") },
  { value: 4, label: numeral(1000000).format("0,0") },
  { value: 5, label: numeral(1000000).format("0,0") },
  { value: 6, label: numeral(1000000).format("0,0") },
  { value: 7, label: numeral(1000000).format("0,0") },
  { value: 8, label: numeral(1000000).format("0,0") },
  { value: 9, label: numeral(1000000).format("0,0") },
  { value: 10, label: numeral(1000000).format("0,0") },
  { value: 11, label: numeral(1000000).format("0,0") },
  { value: 12, label: numeral(1000000).format("0,0") },
  { value: 13, label: numeral(1000000).format("0,0") },
  { value: 14, label: numeral(1000000).format("0,0") },
  { value: 15, label: numeral(1000000).format("0,0") },
  { value: 16, label: numeral(1000000).format("0,0") },
  { value: 17, label: numeral(1000000).format("0,0") },
  { value: 18, label: numeral(1000000).format("0,0") },
  { value: 19, label: numeral(1000000).format("0,0") },
  { value: 20, label: numeral(1000000).format("0,0") },
];

export const experiences = [
  { value: 0, label: "1 năm" },
  { value: 1, label: "1 năm" },
  { value: 2, label: "1 năm" },
  { value: 3, label: "1 năm" },
  { value: 4, label: "1 năm" },
  { value: 5, label: "1 năm" },
  { value: 6, label: "1 năm" },
  { value: 7, label: "1 năm" },
  { value: 8, label: "1 năm" },
  { value: 9, label: "1 năm" },
  { value: 10, label: "1 năm" },
  { value: 11, label: "1 năm" },
  { value: 12, label: "1 năm" },
  { value: 13, label: "1 năm" },
  { value: 14, label: "1 năm" },
  { value: 15, label: "1 năm" },
  { value: 16, label: "1 năm" },
  { value: 17, label: "1 năm" },
  { value: 18, label: "1 năm" },
  { value: 19, label: "1 năm" },
  { value: 20, label: "1 năm" },
];

export const jobSlider = {
  title: "Nhân viên tư vấn Telesale",
  slug: "nhan-vien-tu-van-telesale",
  company: "Công ty cổ phần tập đoàn VietStar",
  price: "10 - 15 triệu",
  city: "Hồ Chí Minh",
};

export const jobSame = {
  title: "Nhân viên tư vấn Telesale",
  slug: "nhan-vien-tu-van-telesale",
  company: "Công ty cổ phần tập đoàn VietStar",
  price: "10 - 15 triệu",
  city: "Hồ Chí Minh",
  status: "Cập nhật 3 ngày trước",
  groupType: [
    "IT",
    "Maketing",
    "Quản trị kinh doanh",
    "Công việc khác",
    "Công việc khác",
  ],
};

export const jobSave = {
  title: "Nhân viên tư vấn Telesale",
  slug: "nhan-vien-tu-van-telesale",
  company: "Công ty cổ phần tập đoàn VietStar",
  price: "10 - 15 triệu",
  city: "Hồ Chí Minh",
  status: "Cập nhật 3 ngày trước",
  day: "24",
  groupType: [
    "IT",
    "Maketing",
    "Quản trị kinh doanh",
    "Công việc khác",
    "Công việc khác",
  ],
  date: "27/7/2024",
  time: "13:22",
};

export const jobCV = {
  title: "Nhân viên tư vấn Telesale",
  slug: "nhan-vien-tu-van-telesale",
  company: "Công ty cổ phần tập đoàn VietStar",
  price: "10 - 15 triệu",
  city: "Hồ Chí Minh",
  date: 10,
  time: 50,
};

export const companys = {
  img: "img-company.png",
  img_small: "logo-work.png",
  slug: "cong-ty-co-phan-tap-doan-vietstar",
  title: "Công ty cổ phần tập đoàn VietStar Group",
  follow: 1000,
  data: [
    {
      title: "Performance Marketing",
      slug: "nhan-vien-tu-van-telesale",
      price: "10 - 20 triệu",
      city: "Hồ Chí Minh",
    },
    {
      title: "Performance Marketing",
      slug: "nhan-vien-tu-van-telesale",
      price: "10 - 20 triệu",
      city: "Hồ Chí Minh",
    },
  ],
};

export const areaCode = [
  {
    label: "+84",
    value: 0,
  },
  {
    label: "+85",
    value: 1,
  },
  {
    label: "+86",
    value: 2,
  },
  {
    label: "+87",
    value: 3,
  },
  {
    label: "+88",
    value: 4,
  },
  {
    label: "+89",
    value: 5,
  },
];

export const optionsLocation = [
  "Địa điểm làm việc",
  "Bình Định",
  "TP.HCM",
  "Hà Nội",
];

export const loations = [
  "Tất cả tỉnh/thành phố",
  "Bình Định",
  "TP.HCM",
  "Hà Nội",
];
export const optionsType = ["Ngành nghề", "IT", "Marketing"];
export const fields = ["Tất cả lĩnh vực", "test"];
export const ranks = ["Tất cả cấp bậc", "Cấp bậc 1", "Cấp bậc 2"];
export const news = [
  {
    img: "nhung-cong-viec-lam-tai-nha-anh-dai-dien_626.png",
    title: "Những công việc làm tại nhà kiếm tiền nhanh trong 2023",
    slug: "nhung-cong-viec",
  },
  {
    img: "nhung-cong-viec-lam-tai-nha-anh-dai-dien_626.png",
    title: "Những công việc làm tại nhà kiếm tiền nhanh trong 2023",
    slug: "nhung-cong-viec",
  },
  {
    img: "nhung-cong-viec-lam-tai-nha-anh-dai-dien_626.png",
    title: "Những công việc làm tại nhà kiếm tiền nhanh trong 2023",
    slug: "nhung-cong-viec",
  },
  {
    img: "nhung-cong-viec-lam-tai-nha-anh-dai-dien_626.png",
    title: "Những công việc làm tại nhà kiếm tiền nhanh trong 2023",
    slug: "nhung-cong-viec",
  },
  {
    img: "nhung-cong-viec-lam-tai-nha-anh-dai-dien_626.png",
    title: "Những công việc làm tại nhà kiếm tiền nhanh trong 2023",
    slug: "nhung-cong-viec",
  },
  {
    img: "nhung-cong-viec-lam-tai-nha-anh-dai-dien_626.png",
    title: "Những công việc làm tại nhà kiếm tiền nhanh trong 2023",
    slug: "nhung-cong-viec",
  },
  {
    img: "nhung-cong-viec-lam-tai-nha-anh-dai-dien_626.png",
    title: "Những công việc làm tại nhà kiếm tiền nhanh trong 2023",
    slug: "nhung-cong-viec",
  },
  {
    img: "nhung-cong-viec-lam-tai-nha-anh-dai-dien_626.png",
    title: "Những công việc làm tại nhà kiếm tiền nhanh trong 2023",
    slug: "nhung-cong-viec",
  },
  {
    img: "nhung-cong-viec-lam-tai-nha-anh-dai-dien_626.png",
    title: "Những công việc làm tại nhà kiếm tiền nhanh trong 2023",
    slug: "nhung-cong-viec",
  },
  {
    img: "nhung-cong-viec-lam-tai-nha-anh-dai-dien_626.png",
    title: "Những công việc làm tại nhà kiếm tiền nhanh trong 2023",
    slug: "nhung-cong-viec",
  },
  {
    img: "nhung-cong-viec-lam-tai-nha-anh-dai-dien_626.png",
    title: "Những công việc làm tại nhà kiếm tiền nhanh trong 2023",
    slug: "nhung-cong-viec",
  },
];
