"use client";

import { GET_PROFILE_SHARE_LINK } from "@/utils/api-url";
import { fetcher } from "@/utils/axios";
import {
  AcademicCapIcon,
  BeakerIcon,
  BoltIcon,
  CakeIcon,
  CogIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  PrinterIcon,
  WrenchIcon,
} from "@heroicons/react/16/solid";
import dayjs from "dayjs";
import useSWR from "swr";
import { ExperienceView } from "../../digital-cv/infomation-edit/experience-view";
import { InfomationViewEdit } from "../../digital-cv/infomation-edit/infomation-view-edit";
import { EducationView } from "../../digital-cv/infomation-edit/education-view";
import { ProjectView } from "../../digital-cv/infomation-edit/project-view";
import { SkillView } from "../../digital-cv/infomation-edit/skill-view";
import { SupportToolView } from "../../digital-cv/infomation-edit/support-tool-view";
import { PrizeView } from "../../digital-cv/infomation-edit/reward-view";
import { CertificateView } from "../../digital-cv/infomation-edit/certificate-view";
import Link from "next/link";
import { IShareLinkProps, ITOCShareLink } from "@/interface/interface";
import { useEffect, useState } from "react";
import { convertTocShareLink, scrollToId } from "@/utils/business/custom-hook";
import { TocShareLink } from "./toc-share-link";
import { HeadSetBootstrapIcon } from "@/theme/icons/headsetBootstrapIcon";

export default function ShareLink({ params }: { params: { slug: string } }) {
  const [tocShareLink, setTocShareLink] = useState<ITOCShareLink[]>([]);
  const { data } = useSWR(
    `${GET_PROFILE_SHARE_LINK}?slug=${params.slug}`,
    fetcher
  );

  useEffect(() => {
    if (data) {
      let arrItems: ITOCShareLink[] = [];
      arrItems.push(
        convertTocShareLink(
          data?.educations,
          "schoolName",
          "Học vấn",
          <AcademicCapIcon className="w-4 text-colorBase" />
        )
      );
      arrItems.push(
        convertTocShareLink(
          data?.experiences,
          "position",
          "Kinh nghiệm",
          <CogIcon className="w-4 text-colorBase" />
        )
      );
      arrItems.push(
        convertTocShareLink(
          data?.allProjects,
          "projectName",
          "Dự án",
          <BeakerIcon className="w-4 text-colorBase" />
        )
      );
      arrItems.push(
        convertTocShareLink(
          data?.allSkill,
          "fullName",
          "Kỹ năng",
          <BoltIcon className="w-4 text-colorBase" />
        )
      );
      arrItems.push(
        convertTocShareLink(
          data?.allTools,
          "fullName",
          "Công cụ hỗ trợ",
          <WrenchIcon className="w-4 text-colorBase" />
        )
      );
      arrItems.push(
        convertTocShareLink(
          data?.allReward,
          "fullName",
          "Giải thưởng",
          <AcademicCapIcon className="w-4 text-colorBase" />
        )
      );
      arrItems.push(
        convertTocShareLink(
          data?.allCertify,
          "fullName",
          "Chứng chỉ",
          <AcademicCapIcon className="w-4 text-colorBase" />
        )
      );

      setTocShareLink(arrItems);

      const handleLinkClick = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (
          target.tagName === "A" &&
          target.getAttribute("href")?.startsWith("#")
        ) {
          event.preventDefault(); // Prevent the default anchor behavior
          const id = target.getAttribute("href")?.substring(1);
          if (id) scrollToId(id, 200); // Adjust offset as needed
        }
      };

      // Add event listener to capture clicks on links
      document.addEventListener("click", handleLinkClick);

      // Cleanup listener on unmount
      return () => {
        document.removeEventListener("click", handleLinkClick);
      };
    }
  }, [data]);

  const lists: IShareLinkProps[] = [
    {
      title: "Học vấn",
      component: <EducationView educations={data?.educations} />,
    },
    {
      title: "Kinh nghiệm",
      component: <ExperienceView experiences={data?.experiences} />,
    },
    {
      title: "Dự án",
      component: <ProjectView projects={data?.allProjects} />,
    },
    {
      title: "Kỹ năng",
      component: <SkillView skills={data?.allSkill} />,
    },
    // {
    //   title: "Kỹ năng mềm",
    //   numberSelect: 5,
    //   isShow: infoSoftSkill?.data.length > 0 ? true : false,
    //   component: <SoftSkillView skills={infoSoftSkill?.data} />,
    // },
    {
      title: "Công cụ hỗ trợ",
      component: <SupportToolView tools={data?.allTools} />,
    },
    {
      title: "Giải thưởng",
      component: <PrizeView rewards={data?.allReward} />,
    },
    {
      title: "Chứng chỉ",
      component: <CertificateView certificates={data?.allCertify} />,
    },
  ];

  return (
    <div>
      <div className="container mx-auto max-1280:px-2 py-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <div className="relative pt-24 bg-white rounded-t-[120px] pb-4">
              <div className="absolute left-0 right-0 top-0 z-1">
                <img
                  src="/imgs/top-share-link.png"
                  className="w-full rounded-t-lg"
                  alt=""
                />
              </div>
              <div className="grid grid-cols-3 relative z-2 ">
                <div className="flex flex-col items-end justify-end">
                  <div className="flex space-x-2">
                    <div>
                      {dayjs(data?.profileCv.dateOfBirth).format("DD/MM/YYYY")}
                    </div>
                    <div>
                      <CakeIcon className="w-4" />
                    </div>
                  </div>
                  <div className="flex space-x-2 mt-2">
                    <div>{data?.profileCv.addressInfo}</div>
                    <div>
                      <MapPinIcon className="w-4" />
                    </div>
                  </div>
                </div>
                <div className="mx-auto">
                  <img
                    src={data?.profileCv.avatarLink}
                    alt=""
                    className="rounded-full w-52 h-52"
                  />
                </div>
                <div className="flex flex-col items-start justify-end">
                  <div className="flex space-x-2 mt-2">
                    <div>
                      <EnvelopeIcon className="w-4" />
                    </div>
                    <div>{data?.profileCv.email}</div>
                  </div>
                  <div className="flex space-x-2 mt-2">
                    <div>
                      <PhoneIcon className="w-4" />
                    </div>
                    <div>{data?.profileCv.phoneNumber}</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center text-colorBase font-bold text-xl">
                {data?.profileCv.fullName}
              </div>
              <div className="mt-4 text-center font-meidum uppercase text-3xl">
                {data?.profileCv.position}
              </div>
              <div
                className="mt-4 text-center px-4 text-xs "
                dangerouslySetInnerHTML={{
                  __html: data?.profileCv.introduction,
                }}
              />
            </div>
            <div className="my-2 flex justify-center relative before:absolute before:left-0 before:top-4 before:w-[45%] before:h-0.5 before:bg-colorBase after:absolute after:right-0 after:top-4 after:w-[45%] after:h-0.5 after:bg-colorBase">
              <img src="/imgs/favicon.png" alt="" className="w-8 h-8" />
            </div>
            {lists.map((item, index) => (
              <InfomationViewEdit
                key={index}
                title={item.title}
                isOpenModal={() => {}}
                edit={false}
              >
                {item.component}
              </InfomationViewEdit>
            ))}
          </div>
          <div className="col-span-1 ">
            <div className="sticky top-0 w-[390px] modal-overlay bg-white rounded">
              <div className="p-4 pb-8 h-screen overflow-y-scroll">
                <div className="mx-auto ">
                  <Link href="/" className="flex justify-center">
                    <img
                      src="/imgs/logo-contact.png"
                      className="w-[60%]"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="mt-4 px-4 text-xs text-center">
                  Truy cập{" "}
                  <Link
                    className="hover:text-colorBase"
                    href="https://topmass.vn"
                  >
                    Topmass.vn
                  </Link>{" "}
                  và tạo Trang Thông tin cá nhân. Chia sẻ hồ sơ năng lực của bạn
                  dễ dàng chỉ với một đường link duy nhất, giúp bạn ứng tuyển
                  mọi lúc, mọi nơi.
                </div>
                <div className="mt-4 flex space-x-4">
                  <button
                    className="py-2 w-full bg-colorBase rounded text-white flex justify-center items-center space-x-2 font-medium"
                    disabled
                  >
                    <PrinterIcon className="w-4 " />
                    <span>Lưu hồ sơ</span>
                  </button>
                  <button
                    className="py-2 w-full bg-colorBase rounded text-white flex justify-center items-center space-x-2 font-medium"
                    disabled
                  >
                    <PrinterIcon className="w-4 " />
                    <span>Xuất (in) PDF</span>
                  </button>
                </div>
                <div className="mt-4">
                  <div className="font-medium">Mục lục</div>
                  {tocShareLink.map((item, idx) => (
                    <TocShareLink data={item} key={idx} />
                  ))}
                </div>
                <div className="mt-6 flex justify-center">
                  <img src="/imgs/qr-zalo.png" alt="" />
                </div>
                <div className="text-xs text-center mt-4">
                  Hỗ trợ đăng tin tuyển dụng trên Topmass
                  <br />
                  và dịch vụ Mass headhunt
                </div>
                <div className="mt-4 flex space-x-1 justify-center">
                  <HeadSetBootstrapIcon className="w-4" />
                  <div>1900 255 836</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
