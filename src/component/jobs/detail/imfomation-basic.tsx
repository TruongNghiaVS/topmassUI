import { IInfomationBasicJobProps } from "@/app/interface/interface";
import { BarChartStepBootstrapIcon } from "@/theme/icons/barChartStepBootstrapIcon";
import { CalendaPlusBootstrapIcon } from "@/theme/icons/calendaPlusBootstrapIcon";
import { HourClockSpitBootstrapICon } from "@/theme/icons/hourClockSpitBootstrapICon";
import { PersonArmUpBootstrapIcon } from "@/theme/icons/personArmUpBootstrapIcon";
import {
  PuzzlePieceIcon,
  BriefcaseIcon,
  RectangleGroupIcon,
} from "@heroicons/react/16/solid";
import dayjs from "dayjs";

export const ImfomationBasic = ({ infomation }: IInfomationBasicJobProps) => {
  const data = [
    {
      label: "Ngày đăng",
      title: dayjs(infomation?.publishDate).format("DD-MM-YYYY"),
      icon: <CalendaPlusBootstrapIcon className="w-6 mr-4 text-[#F37A20]" />,
    },
    {
      label: "Kinh nghiệm",
      title: infomation?.experienceText,
      icon: <HourClockSpitBootstrapICon className="w-6 mr-4 text-[#F37A20]" />,
    },
    {
      label: "Cấp bậc",
      title: infomation?.levelText,
      icon: <BarChartStepBootstrapIcon className="w-6 mr-4 text-[#F37A20]" />,
    },
    {
      label: "Số lượng",
      title: infomation?.numOfRecruits,
      icon: <PersonArmUpBootstrapIcon className="w-6 mr-4 text-[#F37A20]" />,
    },
    {
      label: "Ngành nghề",
      title: infomation?.professionText,
      icon: <PuzzlePieceIcon className="w-6 mr-4 text-[#F37A20]" />,
    },
    {
      label: "Hình thức làm việc",
      title: infomation?.formOfWork,
      icon: <BriefcaseIcon className="w-6 mr-4 text-[#F37A20]" />,
    },
    {
      label: "Lĩnh vực",
      title: infomation?.fieldText,
      icon: <RectangleGroupIcon className="w-6 mr-4 text-[#F37A20]" />,
    },
    {
      label: "Giới tính",
      title: infomation?.genderText,
      icon: <PersonArmUpBootstrapIcon className="w-6 mr-4 text-[#F37A20]" />,
    },
  ];

  return (
    <div className="bg-white rounded-lg p-8 mb-8">
      <div className="text-base font-bold mb-2">Thông tin chung</div>
      <div className="xl:grid grid-cols-2 gap-4 sm:block grid">
        {data.map((item, idx) => {
          return (
            <div key={idx} className="col-span-1 mt-2 xl:mt-0">
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
