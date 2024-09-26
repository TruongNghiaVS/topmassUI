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
    value: "0",
  },
  {
    label: "+85",
    value: "1",
  },
  {
    label: "+86",
    value: "2",
  },
  {
    label: "+87",
    value: "3",
  },
  {
    label: "+88",
    value: "4",
  },
  {
    label: "+89",
    value: "5",
  },
];

export const optionsLocation = [
  { value: "binh-dinh", label: "Bình Định" },
  { value: "hcm", label: "TP.HCM" },
  { value: "ha-noi", label: "Hà Nội" },
];

export const optionsLocations = [
  { value: 1, label: "Bình Định" },
  { value: 2, label: "TP.HCM" },
  { value: 3, label: "Hà Nội" },
];

export const loations = [
  "Tất cả tỉnh/thành phố",
  "Bình Định",
  "TP.HCM",
  "Hà Nội",
];
export const optionsType = [
  { value: "it", label: "IT" },
  { value: "marketing", label: "Marketing" },
];
export const fields = [{ value: "test", label: "test" }];

export const ranks = [
  { value: "1", label: "Cấp bậc 1" },
  { value: "2", label: "Cấp bậc 2" },
];
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

export const months = [
  {
    label: "Tháng 1",
    value: 1,
  },
  {
    label: "Tháng 2",
    value: 2,
  },
  {
    label: "Tháng 3",
    value: 3,
  },
  {
    label: "Tháng 4",
    value: 4,
  },
  {
    label: "Tháng 5",
    value: 5,
  },
  {
    label: "Tháng 6",
    value: 6,
  },
  {
    label: "Tháng 7",
    value: 7,
  },
  {
    label: "Tháng 8",
    value: 8,
  },
  {
    label: "Tháng 9",
    value: 9,
  },
  {
    label: "Tháng 10",
    value: 10,
  },
  {
    label: "Tháng 11",
    value: 11,
  },
  {
    label: "Tháng 12",
    value: 12,
  },
];

export const educations = [
  {
    school: "Trường đại học sư phạm kỹ thuật",
    specialized: "Công nghệ thông tin",
    rank: "Đại học",
    date_from: "20-08-2020",
    date_to: "20-08-2024",
    isStudied: false,
    rating: "Khá",
    description: "Dự kiến tốt nghiệp tháng 12 năm nay! ",
  },
  {
    school: "Trường đại học sư phạm",
    specialized: "Công nghệ thông tin",
    rank: "Đại học",
    date_from: "20-08-2020",
    date_to: "20-08-2024",
    isStudied: true,
    rating: "Khá",
    description: "Dự kiến tốt nghiệp tháng 12 năm nay! ",
  },
];

export const experienceViews = [
  {
    company: "Công ty Cổ Phần Tập Đoàn Việt Star",
    position: "Quản lý team chăm sóc khách hàng",
    date_from: "01/09/2022",
    date_to: "01/09/2024",
    isStudied: true,
    description: "test",
  },
];

export const projects = [
  {
    project_name:
      "Tối ưu Website: Topmass (SEO/Performance Optimization Specialist)",
    customer: "Nhà tuyển dụng Topmass",
    count_member: 5,
    position: "Quản lý team và đánh giá tối ưu từ khoá",
    technology: "Google",
    date_from: "01-08-2023",
    date_to: "01-08-2024",
    isStudied: false,
    description: "test test",
  },
];

export const softSkills = [
  {
    skill_name: "Kỹ năng giao tiếp",
    proficiency: 3,
    description: "test",
  },
  {
    skill_name: "Làm việc nhóm",
    proficiency: 2,
    description: "test",
  },
];

export const supportTools = [
  {
    tool_name: "Photoshop",
    proficiency: 3,
    description: "test",
  },
  {
    tool_name: "Word",
    proficiency: 2,
    description: "test",
  },
];

export const prizeViews = [
  {
    prize_name: "Quản lý xuất sắc năm 2024",
    organization: "Công ty Cổ Phần Tập Đoàn Việt Star",
    date: "01/09/2024",
    description: "",
  },
];

export const certificateViews = [
  {
    certificate_name: "Tin học văn phòng MOS",
    organization: "Tin học Trường đại học Nguyễn Tất Thành",
    date_from: "01-09-2023",
    date_to: "01-09-2024",
    isStudied: false,
    description: "",
  },
  {
    certificate_name: "Tin học văn phòng MOS 1",
    organization: "Tin học Trường đại học Nguyễn Tất Thành",
    date_from: "01-09-2023",
    date_to: "01-09-2024",
    isStudied: false,
    description: "",
  },
];
