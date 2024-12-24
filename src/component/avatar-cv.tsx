"use client";
import { useLoading } from "@/app/context/loading";
import { IAvatarCvProps } from "@/interface/interface";
import { SAVE_USER_CV, UPLOAD_IMG } from "@/utils/api-url";
import axiosInstance, { axiosInstanceImg } from "@/utils/axios";
import { CameraIcon } from "@heroicons/react/16/solid";
import { useRef } from "react";
import { toast } from "react-toastify";

export const AvatarCv = ({
  avatarLink = "",
  setAvatarLink,
  user,
  mutate,
}: IAvatarCvProps) => {
  const { setLoading } = useLoading();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleOpenFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files?.length > 0) {
      const selectedFiles = event.target.files[0];
      setLoading(true);
      try {
        const response = await axiosInstanceImg.post(UPLOAD_IMG, {
          file: selectedFiles,
        });
        if (response.data) {
          setAvatarLink(response.data.fullLink);
          await axiosInstance.post(SAVE_USER_CV, {
            ...user,
            avatarLink: response.data.fullLink,
          });
          mutate();
          toast.success("Cập nhật ảnh đại diện cv thành công");
        }
      } catch (error) {
        toast.error("Cập nhật ảnh đại diện cv thất bại");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className=" mr-6 relative bg-[#F37A20] rounded-full">
      <img
        src={avatarLink.length > 0 ? avatarLink : "/imgs/no-img.png"}
        alt=""
        className="w-[115px] h-[115px] object-cover rounded-full"
      />
      <div className="absolute right-0 bottom-0 ">
        <button
          className=" p-1 rounded-full bg-gradient-to-r from-[#F89E1B] to-[#F37A20]"
          onClick={handleOpenFile}
        >
          <CameraIcon className="w-4 text-white" />
        </button>
      </div>
      <input
        type="file"
        className="hidden"
        ref={fileInputRef}
        accept=".jpeg, .jpg, .png"
        onChange={handleFileChange}
      />
    </div>
  );
};
