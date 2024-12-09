"use client";
import { useLoading } from "@/app/context/loading";
import { CURRENT_USER, UPDATE_MODE } from "@/utils/api-url";
import axiosInstance, { fetcher } from "@/utils/axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useSWR from "swr";
import { Avatar } from "./avatar";
import { AxiosError } from "axios";

export const InfomationUser = () => {
  const { setLoading } = useLoading();
  const [mode, setMode] = useState({ workMode: false, searchMode: false });
  const [avatarLink, setAvatarLink] = useState("");
  const { mutate, data: currentUser, error } = useSWR(CURRENT_USER, fetcher, {
    revalidateOnFocus: false,
  });

  useEffect(() => {
    if (currentUser) {
      setMode({
        workMode: currentUser.workMode,
        searchMode: currentUser.searchMode,
      });
      setAvatarLink(currentUser.avatarLink);
    }
  }, [currentUser]);

  const updateMode = async (value: number, checked: boolean) => {
    const newValue = {
      workMode: false,
      searchMode: false,
      isSwichSearchMode: false,
    };
    if (value === 1) {
      newValue.workMode = checked;
      newValue.searchMode = mode.searchMode;
      newValue.isSwichSearchMode = false;
    }
    if (value === 2) {
      newValue.workMode = mode.workMode;
      newValue.searchMode = checked;
      newValue.isSwichSearchMode = true;
    }
    setLoading(true);
    try {
      const response = await axiosInstance.post(UPDATE_MODE, newValue);
      if (response) {
        toast.success("Chuyển trạng thái thành công");
        mutate();
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl bg-white p-4 pb-10">
      <div></div>
      <div className="flex items-center">
        <Avatar avatarLink={avatarLink} setAvatarLink={setAvatarLink} />
        <div>
          <div>Chào bạn</div>
          <div>{currentUser?.firstName + " " + currentUser?.lastName}</div>
          <div className="text-xs inline-block px-2 py-1 bg-[#555555] text-white rounded">
            {currentUser?.authenticationLevelText}
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={mode.workMode}
              onChange={(e) => {
                updateMode(1, e.target.checked);
              }}
              className="sr-only peer "
            />
            <div className="relative w-11 h-6 bg-[#9A9A9B] peer-focus:outline-none min-w-11 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all after:duration-500 peer-checked:bg-gradient-to-r peer-checked:from-[#F89E1B] peer-checked:to-[#F37A20]"></div>
            <span className="ms-3 text-sm font-medium text-[#555555]">
              {mode.workMode ? "Đang bật tìm việc" : "Đang tắt tìm việc"}
            </span>
          </label>
        </div>
        <div className="text-xs mt-2 text-normal">
          Bật tìm việc giúp hồ sơ của bạn được đề xuất nhiều công việc phù hợp
          mỗi ngày.
        </div>
      </div>
      <div className="mt-5">
        <div>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={mode.searchMode}
              onChange={(e) => {
                updateMode(2, e.target.checked);
              }}
              className="sr-only peer "
            />
            <div className="relative w-11 h-6 bg-[#9A9A9B] peer-focus:outline-none min-w-11 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all after:duration-500 peer-checked:bg-gradient-to-r peer-checked:from-[#F89E1B] peer-checked:to-[#F37A20]"></div>
            <span className="ms-3 text-sm font-medium text-[#555555]">
              {mode.searchMode
                ? "Cho phép NTD tìm kiếm hồ sơ"
                : "Chưa cho phép NTD tìm kiếm hồ sơ"}
            </span>
          </label>
        </div>
        <div className="text-xs mt-2 text-normal">
          Nhà Tuyển Dụng có thể chủ động tìm kiếm và kết nối với bạn.
        </div>
      </div>
    </div>
  );
};
