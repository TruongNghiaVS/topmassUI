"use client";

import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";
import AOS from "aos";

export const AboutContent = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="flex items-center space-x-4 mt-4">
        <div className="flex-1 rounded-xl " data-aos="fade-right">
          <img src="/imgs/img-about-us.jpeg" alt="" className="w-full" />
        </div>
        <div data-aos="fade-left" className="flex-1">
          <h2 className="text-[#F37A20]">Về Topmass</h2>
          <div className="mt-4 text-justify	">
            topmass.vn là một nền tảng hàng đầu cung cấp giải pháp nhân sự toàn
            diện cho doanh nghiệp, giúp tối ưu hoá quá trình tuyển dụng và quản
            lý nhân sự. Với mục tiêu tạo ra sự kết nối hiệu quả giữa doanh
            nghiệp và ứng viên, Topmass không chỉ là một cầu nối thông tin tuyển
            dụng mà còn là đối tác tin cậy đồng hành cùng sự phát triển của
            doanh nghiệp
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-center text-[#F37A20] uppercase">
          Các ưu điểm nổi bật của topmass
        </h2>
        <div className="mt-4">
          <div className="flex flex-wrap justify-center">
            <div className="px-2 mt-2 w-1/3" data-aos="fade-right">
              <div className="text-start">
                <h2 className="text-[#F37A20] font-bold">01</h2>
                <h2 className="font-bold mt-1">Đa dạng về ngành nghề</h2>
                <div className="text-justify mt-1">
                  Topmass cung cấp hàng ngàn cơ hội việc làm trong nhiều lĩnh
                  vực khác nhau, từ sản xuất đến dịch vụ, từ công nghệ thông tin
                  đến tài chính, giúp doanh nghiệp dễ dàng tìm kiếm ứng viên phù
                  hợp với nhu cầu tuyển dụng của doanh nghiệp
                </div>
              </div>
            </div>
            <div className="px-2 mt-2 w-1/3" data-aos="fade-up">
              <h2 className="text-[#F37A20] font-bold">02</h2>
              <h2 className="font-bold mt-1">Tích hợp công nghệ</h2>
              <div className="text-justify mt-1">
                Với việc sử dụng công nghệ tiên tiến, Topmass tạo ra trải nghiệm
                tuyển dụng mượt mà và hiệu quả. Giao diện dễ sử dụng và tính
                năng sử dụng và tính năng tìm kiếm thông minh giúp doanh nghiệp
                tiết kiệm thời gian và năng lực trong quá trình tìm kiếm ứng
                viên
              </div>
            </div>
            <div className="px-2 mt-2 w-1/3" data-aos="fade-left">
              <h2 className="text-[#F37A20] font-bold">03</h2>
              <h2 className="font-bold mt-1">Hệ thống đánh giá và phản hồi</h2>
              <div className="text-justify mt-1">
                Topmass không chỉ giúp doanh nghiệp tìm kiếm ứng viên, mà còn hỗ
                trợ trong quá trình tham gia đánh giá chất lượng của họ. Hệ
                thống đã đánh giá và phản hồi từ người sử dụng giúp tạo ra một
                cộng đồng chia sẽ thông tin chân thực về các công ty và vị trí
                làm việc
              </div>
            </div>
            <div className="px-2 mt-2 w-1/3" data-aos="flip-left">
              <h2 className="text-[#F37A20] font-bold">04</h2>
              <h2 className="font-bold mt-1">Tư vấn và hỗ trợ</h2>
              <div className="text-justify mt-1">
                Đội ngũ tư vấn chuyên nghiệp của Topmass sẵn sàng hỗ trợ các
                doanh nghiệp trong quá trình tìm kiếm lựa chọn và giữ chân nhân
                sự. Họ cung cấp các giải pháp tuỳ chỉnh để đáp ứng nhu cầu cụ
                thể của từng doanh nghiệp
              </div>
            </div>
            <div className="px-2 mt-2 w-1/3" data-aos="flip-left">
              <h2 className="text-[#F37A20] font-bold">05</h2>
              <h2 className="font-bold mt-1">Bảo mật thông tin</h2>
              <div className="text-justify mt-1">
                Topmass cam kết bảo mật thông tin của doanh nghiệp và ứng viên
                một cách nghiêm túc. Hệ thống bảo mật thông tin cá nhân được xây
                dựng đồng bộ để đảm bảo an toàn và tin cậy.
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          Topmass không chỉ là một cầu nối tuyển dụng mà còn là đối tác chiến
          lược, hỗ trợ doanh nghiệp xây dựng <br /> đội ngũ nhân sự mạnh mẽ và
          linh hoạt để đối mặt với thách thức của thị trường lao động thay đổi
          liên tục.
        </div>
      </div>
    </div>
  );
};
