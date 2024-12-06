import { useLoading } from "@/app/context/loading";
import { IApplyCv, IApplyModal, ICv, ILogin } from "@/interface/interface";
import UploadFile from "@/component/hook-form/custom-upload";
import TmInput from "@/component/hook-form/input";
import TmTextArea from "@/component/hook-form/textarea";
import Modal from "@/component/modal";
import { CupHotFillBootstrapIcon } from "@/theme/icons/cupHotFillBootstrapIcon";
import { VectorPenBootstrapIcon } from "@/theme/icons/vectorPenBootstrapIcon";
import {
  APPLY_CV_WITH_CV,
  APPLY_CV_WITH_FILE,
  GET_ALL_CV,
  UPLOAD_IMG,
} from "@/utils/api-url";
import axiosInstance, { axiosInstanceImg } from "@/utils/axios";
import { getToken } from "@/utils/token";
import { FolderIcon } from "@heroicons/react/16/solid";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";
import { CurrentUser } from "@/modules/helper/master-data";

export const PopupApplyJob = ({
  isModalOpen,
  onClose,
  jobId,
  mutate,
}: IApplyModal) => {
  const { setLoading } = useLoading();
  const [cvValue, setCvValue] = useState(0);
  const [file, setFile] = useState<File | null>(null);
  const [listCv, setListCv] = useState<ICv[]>([]);

  const getAllCv = useCallback(async () => {
    const res = await axiosInstance.get(GET_ALL_CV);
    const data = res.data.map((item: any) => ({
      id: item.id,
      link: item.linkFile,
      label: getNameCv(item.linkFile),
    }));
    if (data.length > 0) {
      setListCv(data);
      setCvValue(data[0].id);
    }
  }, []);

  const getNameCv = (link: string) => {
    const arr = link.split("/");
    return arr[arr.length - 1];
  };
  const token = getToken();
  const { currentUser } = CurrentUser();

  useEffect(() => {
    if (token) {
      getAllCv();
    }
    if (currentUser) {
      reset({
        username: currentUser?.firstName + " " + currentUser?.lastName,
        phone_number: currentUser?.phone,
        email: currentUser?.email,
        description: "",
      });
    }
  }, [token, currentUser]);

  const schema = yup.object().shape({
    username: yup.string().required("Bắt buộc nhập họ và tên"),
    email: yup.string().required("Bắt buộc nhập Email"),
    phone_number: yup
      .string()
      .required("Bắt buộc nhập số điện thoại")
      .matches(/^[0-9]{10}$/, "Số điện thoại phải là 10 ký tự"),
    description: yup.string(),
  });

  const { handleSubmit, control, reset } = useForm<IApplyCv>({
    resolver: yupResolver(schema),
    defaultValues: {
      username: "",
      phone_number: "",
      email: "",
      description: "",
    },
  });
  const onSubmit: SubmitHandler<IApplyCv> = async (data) => {
    setLoading(true);
    try {
      const dataApply: any = {
        fullName: data.username,
        phone: data.phone_number,
        email: data.email,
        JobId: jobId,
        introduction: data.description,
      };
      if (file) {
        const response = await axiosInstanceImg.post(UPLOAD_IMG, {
          file: file,
        });
        dataApply.typeData = 2;
        dataApply.templateID = 0;
        dataApply.linkFile = response.data.fullLink;
      }

      if (cvValue > 0) {
        dataApply.cvId = cvValue;
      }
      debugger;
      const url = cvValue > 0 ? APPLY_CV_WITH_CV : APPLY_CV_WITH_FILE;
      const res = await axiosInstance.post(url, dataApply);
      if (listCv.length > 0) {
        setCvValue(listCv[0].id);
      }
      setFile(null);
      if (mutate) {
        mutate();
      }
      toast.success("Nộp CV thành công");
      onClose();
    } catch (error) {
      toast.error("Nộp hồ sơ thất bại");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative rounded-lg">
      <Modal
        isOpen={isModalOpen}
        onClose={onClose}
        className="md:min-w-[700px] max-h-[60vh] overflow-auto relative text-start"
      >
        <div className="">
          <div className="text-xl font-bold my-2">
            Ứng tuyển <span className="text-default">Performance Maketing</span>
          </div>
          <div className="flex items-center text-base font-medium mt-4">
            <FolderIcon className="w-4 mr-2" /> Chọn CV để ứng tuyển
          </div>
          <div className="px-6 py-4 ">
            <div className=" font-medium text-default">
              CV trong thư viện của tôi
            </div>
          </div>
          {listCv.length > 0 && (
            <div className="p-4 border border-[#F37A20] rounded">
              {listCv.map((cv) => (
                <div key={cv.id} className="flex justify-between my-2">
                  <div className="flex">
                    <input
                      type="radio"
                      value={cv.id}
                      name="cv"
                      checked={cv.id === cvValue}
                      onChange={() => (setCvValue(cv.id), setFile(null))}
                    />
                    <div className="mx-2">{cv.label}</div>
                  </div>
                  <Link
                    href={cv.link}
                    target="_blank"
                    className="font-medium text-default"
                  >
                    Xem
                  </Link>
                </div>
              ))}
            </div>
          )}

          {listCv.length === 0 && (
            <div className=" mb-6">
              <Link
                className="px-4 py-2 rounded-lg text-white bg-[#F37A20]"
                href="/profile-cv?status=true"
              >
                Vui lòng tạo CV
              </Link>
            </div>
          )}
          <div className="p-4 mt-4 border border-[#F37A20] rounded">
            <UploadFile
              file={file}
              setFile={setFile}
              setCvValue={setCvValue}
              cvValue={cvValue}
            />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="p-4 mt-4 border border-[#F37A20] rounded">
              <div className="mt-4">
                <label className="font-normal">
                  Họ và tên <span className="text-[#dc2f2f]">*</span>
                </label>
                <TmInput control={control} name="username" type="username" />
              </div>
              <div className="flex space-x-2">
                <div className="mt-4 flex-1">
                  <div className="font-normal">
                    Email <span className="text-[#dc2f2f]">*</span>
                  </div>
                  <TmInput control={control} name="email" type="email" />
                </div>
                <div className="mt-4 flex-1">
                  <div className="font-normal">
                    Số điện thoại <span className="text-[#dc2f2f]">*</span>
                  </div>
                  <TmInput control={control} name="phone_number" />
                </div>
              </div>
            </div>
            <div className="my-4 text-base flex items-center">
              <CupHotFillBootstrapIcon className="w-4 mr-2 text-default " />
              Đôi nét về bản thân
            </div>
            <div className="text-start">
              Hãy mô tả đôi nét về bản thân của bạn, điều này sẽ giúp cho nhà
              tuyển dụng đánh giá ở bước đầu lọc hồ sơ. Nên nhớ là ngắn ngọn
              thôi nhé!
            </div>
            <div className="relative">
              <VectorPenBootstrapIcon className="w-4 text-default absolute top-9 right-2.5" />
              <TmTextArea
                name="description"
                control={control}
                label="Mô tả"
                placeholder="Mô tả"
                rows={5}
              />
            </div>
            <div className="grid grid-cols-3 gap-4  mt-4 ">
              <button
                className="border border-[#F37A20] text-default col-span-1 rounded"
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                }}
              >
                Huỷ
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-[#F37A20] rounded text-white col-span-2 flex-2"
              >
                Nộp hồ sơ ứng tuyển
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};
