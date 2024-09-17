"use client";

import { InfomationUser } from "@/component/infomation-user-right";
import { ProfileCvNoInfomation } from "@/component/profile-cv-no-infomation";
import { EyeIcon, LinkIcon, PencilSquareIcon } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";
import { InfomationUserCv } from "./setting/infomation-form";
import { EducationUserCv } from "./setting/education-form";
import { ExperienceUserCv } from "./setting/experience-form";
import { ProjectUserCv } from "./setting/project-form";
import { SoftSkillInfomationCv } from "./setting/soft-skill-form";
import { SupportToolInfomationCv } from "./setting/support-tool-form";
import { PrizeInfomationCv } from "./setting/prize-form";
import { CertificateInfomationCv } from "./setting/certificate-form";
import { InfomationViewEdit } from "./infomation-edit/infomation-view-edit";
import { EducationView } from "./infomation-edit/education-view";
import {
  certificateViews,
  educations,
  experienceViews,
  prizeViews,
  projects,
  softSkills,
  supportTools,
} from "@/mockup-data/data";
import { ExperienceView } from "./infomation-edit/experience-view";
import { ProjectView } from "./infomation-edit/project-view";
import { SoftSkillView } from "./infomation-edit/soft-skill";
import { SupportToolView } from "./infomation-edit/support-tool-view";
import { PrizeView } from "./infomation-edit/prize-view";
import { CertificateView } from "./infomation-edit/certificate-view";
import Modal from "@/component/modal";
import { useSearchParams } from "next/navigation";

type IProps = {
  title: string;
  numberSelect: number;
  isShow: boolean;
  component?: JSX.Element;
};

export default function ProfileCV() {
  const [selected, setSelected] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const searchParams = useSearchParams();

  const onClose = () => {
    setIsOpen(false);
  };

  const onOpen = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    const statusCode = searchParams.get("status");
    if (statusCode) {
      setIsOpenModal(true);
    }
  }, [setIsOpenModal]);

  const lists: IProps[] = [
    {
      title: "Học vấn",
      numberSelect: 1,
      isShow: true,
      component: <EducationView data={educations} />,
    },
    {
      title: "Kinh nghiệm",
      numberSelect: 2,
      isShow: true,
      component: <ExperienceView data={experienceViews} />,
    },
    {
      title: "Dự án",
      numberSelect: 3,
      isShow: true,
      component: <ProjectView data={projects} />,
    },
    {
      title: "Kỹ năng",
      numberSelect: 4,
      isShow: true,
      component: <SoftSkillView data={softSkills} />,
    },
    {
      title: "Kỹ năng mềm",
      numberSelect: 5,
      isShow: true,
      component: <SoftSkillView data={softSkills} />,
    },
    {
      title: "Công cụ hỗ trợ",
      numberSelect: 6,
      isShow: true,
      component: <SupportToolView data={supportTools} />,
    },
    {
      title: "Giải thưởng",
      numberSelect: 7,
      isShow: true,
      component: <PrizeView data={prizeViews} />,
    },
    {
      title: "Chứng chỉ",
      numberSelect: 8,
      isShow: true,
      component: <CertificateView data={certificateViews} />,
    },
  ];

  const downloadPDF = async () => {
    const response = await fetch("/api/generate-pdf", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.target = "_blank";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      console.error("Failed to generate PDF");
    }
  };

  return (
    <div className="bg-[#EAE9E8]">
      <div className="container mx-auto">
        <div className="sm:grid grid-cols-12 gap-6 py-8 ">
          <div className="xl:col-span-8 md:col-span-7 sm:row-auto row-start-1 row-end-1">
            <div className="relative">
              <img
                src="/imgs/img-header-profile-cv.jpeg"
                className="w-full rounded-tl-lg rounded-tr-lg"
                alt=""
              />
              <div className="relative py-3 pl-[210px]">
                <div className="absolute top-[-75px] left-[30px] flex items-center">
                  <div className="w-[150px] h-[150px] rounded-full bg-[#F37A20] grid items-center justify-center mr-6  overflow-hidden">
                    <img src="/imgs/avatar-no.png" alt="" className="w-auto" />
                  </div>
                  <div className="relative top-[12px]">
                    <div className="text-white uppercase text-base font-bold">
                      Phạm Nhật Minh
                    </div>
                    <div className="">Chăm sóc khách hàng</div>
                    <div className="flex space-x-3 ">
                      <div
                        className="flex space-x-2 items-center bg-[#F37A20] py-1 px-3 rounded-lg text-white cursor-pointer"
                        onClick={() => (
                          onOpen(),
                          setTitle("Thông tin cá nhân"),
                          setSelected(0)
                        )}
                      >
                        <div>Thông tin giới thiệu</div>
                        <PencilSquareIcon className="w-4" />
                      </div>
                      <div className="flex space-x-2 items-center bg-[#F37A20] py-1 px-3 rounded-lg text-white">
                        <div className=" ">Chia sẽ trang cá nhân</div>
                        <LinkIcon className="w-4" />
                      </div>
                      <div
                        className="flex space-x-2 items-center bg-[#F37A20] cursor-pointer py-1 px-3 rounded-lg text-white"
                        onClick={downloadPDF}
                      >
                        <div className=" ">Xem</div>
                        <EyeIcon className="w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-20">
                <div className="px-6 py-2">
                  Tôi là một người tận tâm và kiên nhẫn với kinh nghiệm trong
                  lĩnh vực chăm sóc khách hàng. Tôi có khả năng giao tiếp hiệu
                  quả, lắng nghe và giải quyết vấn đề của khách hàng một cách
                  nhanh chóng và chuyên nghiệp. Mục tiêu của tôi là mang lại sự
                  hài lòng tối đa cho khách hàng, đồng thời xây dựng mối quan hệ
                  lâu dài dựa trên sự tin tưởng và tôn trọng.
                </div>
                {lists.map((item) => {
                  return (
                    <div key={item.title}>
                      {!item.isShow ? (
                        <ProfileCvNoInfomation
                          title={item.title}
                          setSelected={setSelected}
                          numberSelect={item.numberSelect}
                          onOpen={onOpen}
                          setTitle={setTitle}
                        />
                      ) : (
                        <InfomationViewEdit
                          title={item.title}
                          isOpenModal={() => (
                            onOpen(),
                            setSelected(item.numberSelect),
                            setTitle(item.title)
                          )}
                        >
                          {item.component}
                        </InfomationViewEdit>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="xl:col-span-4 md:col-span-5 sm:row-auto row-start-1 row-end-1">
            <InfomationUser />
            <div className="mt-4 rounded-lg overflow-hidden sm:block hidden">
              <img src="/imgs/img-no.png" className="w-full" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          title={title}
          className="md:min-w-[700px] max-h-[60vh] overflow-auto relative"
        >
          {selected === 0 && <InfomationUserCv />}
          {selected === 1 && <EducationUserCv />}
          {selected === 2 && <ExperienceUserCv />}
          {selected === 3 && <ProjectUserCv />}
          {selected === 4 && <SoftSkillInfomationCv />}
          {selected === 5 && <SoftSkillInfomationCv />}
          {selected === 6 && <SupportToolInfomationCv />}
          {selected === 7 && <PrizeInfomationCv />}
          {selected === 8 && <CertificateInfomationCv />}
        </Modal>
      </div>

      <Modal
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        className="text-center"
      >
        <div className="text-base font-medium text-[#F37A20]">
          Vui lòng điền thông tin để chúng tôi khởi tạo cv cho bạn
        </div>
        <div className="flex justify-center mt-3">
          <button
            className="px-3 py-2 bg-[#F37A20] text-white rounded-lg "
            onClick={() => setIsOpenModal(false)}
          >
            Đã hiểu
          </button>
        </div>
      </Modal>
    </div>
  );
}
