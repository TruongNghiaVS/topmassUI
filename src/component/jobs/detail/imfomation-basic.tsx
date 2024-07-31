import { BarChartStepBootstrapIcon } from "@/theme/icons/barChartStepBootstrapIcon";
import { CalendaPlusBootstrapIcon } from "@/theme/icons/calendaPlusBootstrapIcon";
import { HourClockSpitBootstrapICon } from "@/theme/icons/hourClockSpitBootstrapICon";
import { PersonArmUpBootstrapIcon } from "@/theme/icons/personArmUpBootstrapIcon";
import {
  PuzzlePieceIcon,
  BriefcaseIcon,
  RectangleGroupIcon,
} from "@heroicons/react/16/solid";

export const ImfomationBasic = () => {
  const data = [
    {
      label: "Ngày Đăng",
      title: "30/07/2024",
      icon: <CalendaPlusBootstrapIcon className="w-6 mr-4 text-[#F37A20]" />,
    },
    {
      label: "Kinh nghiệm",
      title: "2 năm",
      icon: <HourClockSpitBootstrapICon className="w-6 mr-4 text-[#F37A20]" />,
    },
    {
      label: "Cấp bậc",
      title: "Trưởng phòng",
      icon: <BarChartStepBootstrapIcon className="w-6 mr-4 text-[#F37A20]" />,
    },
    {
      label: "Số lượng",
      title: "20",
      icon: <PersonArmUpBootstrapIcon className="w-6 mr-4 text-[#F37A20]" />,
    },
    {
      label: "Ngành nghề",
      title: "Marketing",
      icon: <PuzzlePieceIcon className="w-6 mr-4 text-[#F37A20]" />,
    },
    {
      label: "Hình thức làm việc",
      title: "Full time",
      icon: <BriefcaseIcon className="w-6 mr-4 text-[#F37A20]" />,
    },
    {
      label: "Lĩnh vực",
      title: "Tài chính",
      icon: <RectangleGroupIcon className="w-6 mr-4 text-[#F37A20]" />,
    },
    {
      label: "Giới tính",
      title: "Không",
      icon: <PersonArmUpBootstrapIcon className="w-6 mr-4 text-[#F37A20]" />,
    },
  ];

  return (
    <div className="bg-white rounded-lg p-8 mb-8">
      <div className="text-base font-bold mb-2">Thông tin chung</div>
      <div className="xl:grid grid-cols-2 gap-4 sm:block grid">
        {data.map((item) => {
          return (
            <div key={item.title} className="col-span-1 mt-2 xl:mt-0">
              <div className="flex items-center">
                {item.icon}
                <div>
                  <div className="text-xs font-normal">{item.label}</div>
                  <div className="text-xs font-medium">{item.title}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
