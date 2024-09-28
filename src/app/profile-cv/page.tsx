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
import { PrizeInfomationCv } from "./setting/reward-form";
import { CertificateInfomationCv } from "./setting/certificate-form";
import { InfomationViewEdit } from "./infomation-edit/infomation-view-edit";
import { EducationView } from "./infomation-edit/education-view";
import { certificateViews } from "@/mockup-data/data";
import { ExperienceView } from "./infomation-edit/experience-view";
import { ProjectView } from "./infomation-edit/project-view";
import { SoftSkillView } from "./infomation-edit/soft-skill";
import { SupportToolView } from "./infomation-edit/support-tool-view";
import { PrizeView } from "./infomation-edit/reward-view";
import { CertificateView } from "./infomation-edit/certificate-view";
import Modal from "@/component/modal";
import { useSearchParams } from "next/navigation";
import useSWR, { mutate } from "swr";
import { fetcher } from "@/utils/axios";
import { SkillView } from "./infomation-edit/skill-view";
import {
  GET_ALL_EDUCATION,
  GET_ALL_EXPERIENCES,
  GET_ALL_PROJECT,
  GET_ALL_SOFT_SKILL,
  GET_ALL_SKILL,
  GET_ALL_TOOL,
  GET_ALL_REWARD,
  GET_ALL_CERTIFI,
  GET_INFOMATION_USER_CV,
} from "@/utils/api-url";
import { SkillInfomationCv } from "./setting/skill-form";
import { AvatarCv } from "@/component/avatar-cv";
import { useLoading } from "../context/loading";
import { toast } from "react-toastify";

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
  const [avatarCv, setAvatarCv] = useState("");
  const { setLoading } = useLoading();
  const {
    data: infoEducation,
    error: errEducation,
    mutate: mutateEducation,
  } = useSWR(GET_ALL_EDUCATION, fetcher);

  const {
    data: infoExperiences,
    error: errExperiences,
    mutate: mutateExperiences,
  } = useSWR(GET_ALL_EXPERIENCES, fetcher);

  const {
    data: infoProject,
    error: errProject,
    mutate: mutateProject,
  } = useSWR(GET_ALL_PROJECT, fetcher);

  const { data: infoSkill, error: errSkill, mutate: mutateSkill } = useSWR(
    GET_ALL_SKILL,
    fetcher
  );

  const {
    data: infoSoftSkill,
    error: errSoftSkill,
    mutate: mutateSoftSkill,
  } = useSWR(GET_ALL_SOFT_SKILL, fetcher);

  const { data: infoTools, error: errTools, mutate: mutateTools } = useSWR(
    GET_ALL_TOOL,
    fetcher
  );

  const {
    data: infoRewards,
    error: errRewards,
    mutate: mutateRewards,
  } = useSWR(GET_ALL_REWARD, fetcher);

  const {
    data: infoCertificates,
    error: errCertificates,
    mutate: mutateCertificates,
  } = useSWR(GET_ALL_CERTIFI, fetcher);

  const { data: infoUser, error: errUser, mutate: mutateUser } = useSWR(
    GET_INFOMATION_USER_CV,
    fetcher
  );

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
    if (infoUser) {
      setAvatarCv(infoUser.avatarLink);
    }
  }, [infoUser, setIsOpenModal]);

  const lists: IProps[] = [
    {
      title: "Học vấn",
      numberSelect: 1,
      isShow: infoEducation?.data.length > 0 ? true : false,
      component: <EducationView educations={infoEducation?.data} />,
    },
    {
      title: "Kinh nghiệm",
      numberSelect: 2,
      isShow: infoExperiences?.data.length > 0 ? true : false,
      component: <ExperienceView experiences={infoExperiences?.data} />,
    },
    {
      title: "Dự án",
      numberSelect: 3,
      isShow: infoProject?.data.length > 0 ? true : false,
      component: <ProjectView projects={infoProject?.data} />,
    },
    {
      title: "Kỹ năng",
      numberSelect: 4,
      isShow: infoSkill?.data.length > 0 ? true : false,
      component: <SkillView skills={infoSkill?.data} />,
    },
    {
      title: "Kỹ năng mềm",
      numberSelect: 5,
      isShow: infoSoftSkill?.data.length > 0 ? true : false,
      component: <SoftSkillView skills={infoSoftSkill?.data} />,
    },
    {
      title: "Công cụ hỗ trợ",
      numberSelect: 6,
      isShow: infoTools?.data.length > 0 ? true : false,
      component: <SupportToolView tools={infoTools?.data} />,
    },
    {
      title: "Giải thưởng",
      numberSelect: 7,
      isShow: infoRewards?.data.length > 0 ? true : false,
      component: <PrizeView rewards={infoRewards?.data} />,
    },
    {
      title: "Chứng chỉ",
      numberSelect: 8,
      isShow: infoCertificates?.data.length > 0 ? true : false,
      component: <CertificateView certificates={infoCertificates?.data} />,
    },
  ];

  const downloadPDF = async () => {
    setLoading(true);
    try {
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
        toast.error("Tạo cv mẫu thất bại");
      }
    } catch (error) {
      toast.error("Tạo cv mẫu thất bại");
    } finally {
      setLoading(false);
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
                <div className="absolute top-[-60px] left-[30px] flex items-center">
                  <AvatarCv
                    avatarLink={avatarCv}
                    setAvatarLink={setAvatarCv}
                    user={infoUser}
                  />
                  <div className="relative top-[12px]">
                    <div className="text-white uppercase text-base font-bold min-h-6">
                      {infoUser?.fullName}
                    </div>
                    <div className="min-h-[21px]">{infoUser?.position}</div>
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
              <div className="mt-10">
                <div
                  className="px-3 line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: infoUser?.introduction }}
                ></div>
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
          {selected === 0 && (
            <InfomationUserCv
              user={infoUser}
              mutate={mutateUser}
              onClose={onClose}
            />
          )}
          {selected === 1 && (
            <EducationUserCv
              educations={infoEducation?.data}
              mutate={mutateEducation}
              onClose={onClose}
            />
          )}
          {selected === 2 && (
            <ExperienceUserCv
              experiences={infoExperiences?.data}
              mutate={mutateExperiences}
              onClose={onClose}
            />
          )}
          {selected === 3 && (
            <ProjectUserCv
              projects={infoProject?.data}
              mutate={mutateProject}
              onClose={onClose}
            />
          )}
          {selected === 4 && (
            <SkillInfomationCv
              skills={infoSkill?.data}
              mutate={mutateSkill}
              onClose={onClose}
            />
          )}
          {selected === 5 && (
            <SoftSkillInfomationCv
              skills={infoSoftSkill?.data}
              mutate={mutateSoftSkill}
              onClose={onClose}
            />
          )}
          {selected === 6 && (
            <SupportToolInfomationCv
              tools={infoTools.data}
              mutate={mutate}
              onClose={onClose}
            />
          )}
          {selected === 7 && (
            <PrizeInfomationCv
              rewards={infoRewards?.data}
              onClose={onClose}
              mutate={mutateRewards}
            />
          )}
          {selected === 8 && (
            <CertificateInfomationCv
              certificates={infoCertificates?.data}
              onClose={onClose}
              mutate={mutateCertificates}
            />
          )}
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
