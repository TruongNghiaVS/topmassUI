"use client";
import { useLoading } from "@/app/context/loading";
import { IAvatarProps } from "@/interface/interface";
import { UPDATE_BASIC_INFO, UPLOAD_IMG } from "@/utils/api-url";
import axiosInstance, { axiosInstanceImg } from "@/utils/axios";
import { CameraIcon } from "@heroicons/react/16/solid";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

export const Avatar = ({ avatarLink = "", setAvatarLink }: IAvatarProps) => {
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
      console.log(selectedFiles);
      setLoading(true);
      try {
        const response = await axiosInstanceImg.post(UPLOAD_IMG, {
          file: selectedFiles,
        });
        if (response.data) {
          setAvatarLink(response.data.fullLink);
          await axiosInstance.post(UPDATE_BASIC_INFO, {
            avatarLink: response.data.shortLink,
          });

          toast.success("Cập nhật ảnh đại diện thành công");
        }
      } catch (error) {
        toast.error("Cập nhật ảnh đại diện thất bại");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="mr-6 relative">
      {avatarLink.length > 0 ? (
        <img src={avatarLink} alt="" className="w-24 rounded-full" />
      ) : (
        <img src="/imgs/no-img.png" alt="" className="" />
      )}
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
