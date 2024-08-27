"use client";

import { InfomationUser } from "@/component/infomation-user-right";
import Modal from "@/component/modal";
import { ProfileCvNoInfomation } from "@/component/profile-cv-no-infomation";
import { EyeIcon, LinkIcon, PencilSquareIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { InfomationUserCv } from "./setting/infomation-form";
import { EducationUserCv } from "./setting/education-form";
import { ExperienceUserCv } from "./setting/experience-form";
import { ProjectUserCv } from "./setting/project-form";
import { SoftSkillInfomationCv } from "./setting/soft-skill-form";
import { SupportToolInfomationCv } from "./setting/support-tool-form";
import { PrizeInfomationCv } from "./setting/prize-form";
import { CertificateInfomationCv } from "./setting/certificate-form";

export default function ProfileCV() {
  const [selected, setSelected] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");

  const onClose = () => {
    setIsOpen(false);
  };

  const onOpen = () => {
    setIsOpen(true);
  };

  const lists = [
    {
      title: "Học vấn",
      numberSelect: 1,
    },
    {
      title: "Kinh nghiệm",
      numberSelect: 2,
    },
    {
      title: "Dự án",
      numberSelect: 3,
    },
    {
      title: "Kỹ năng mềm",
      numberSelect: 4,
    },
    {
      title: "Công cụ hỗ trợ",
      numberSelect: 5,
    },
    {
      title: "Giải thưởng",
      numberSelect: 6,
    },
    {
      title: "Chứng chỉ",
      numberSelect: 7,
    },
  ];

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
                  <div>
                    <div className="text-white uppercase text-base font-bold mb-4">
                      Phạm Nhật Minh
                    </div>
                    <div className="flex space-x-3 ">
                      <div
                        className="flex space-x-2 items-center bg-[#F37A20] py-1 px-3 rounded-lg text-white cursor-pointer"
                        onClick={() => (
                          onOpen(), setTitle("Thông tin cá nhân")
                        )}
                      >
                        <div>Thông tin giới thiệu</div>
                        <PencilSquareIcon className="w-4" />
                      </div>
                      <div className="flex space-x-2 items-center bg-[#F37A20] py-1 px-3 rounded-lg text-white">
                        <div className=" ">Chia sẽ trang cá nhân</div>
                        <LinkIcon className="w-4" />
                      </div>
                      <div className="flex space-x-2 items-center bg-[#F37A20] py-1 px-3 rounded-lg text-white">
                        <div className=" ">Xem</div>
                        <EyeIcon className="w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-20">
                {lists.map((item) => {
                  return (
                    <ProfileCvNoInfomation
                      key={item.title}
                      title={item.title}
                      setSelected={setSelected}
                      numberSelect={item.numberSelect}
                      onOpen={onOpen}
                      setTitle={setTitle}
                    />
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
          {selected === 5 && <SupportToolInfomationCv />}
          {selected === 6 && <PrizeInfomationCv />}
          {selected === 7 && <CertificateInfomationCv />}
        </Modal>
      </div>
    </div>
  );
}
