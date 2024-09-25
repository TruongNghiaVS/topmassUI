import { UPLOAD_IMG } from "../api-url";
import { axiosInstanceImg } from "../axios";

export const upLoadImg = async (file: File) => {
  try {
    const res = await axiosInstanceImg.post(UPLOAD_IMG, { file: file });
    return res.data.fullLink;
  } catch (error) {}
};

export const uploadMutipleFile = async (files: File[]) => {
  try {
    if (files && files?.length > 0) {
      const dataUpload = files.map(async (file) => {
        const link = await upLoadImg(file);
        return link;
      });

      const data = await Promise.all(dataUpload);

      return data;
    } else {
      return [];
    }
  } catch (error) {}
};

export const getFileUpload = async (
  files: FileList | undefined,
  linkFile: string | undefined = ""
) => {
  let newLink = "";
  if (files && files.length > 0) {
    const arrFile = Array.from(files);
    const arrLink = linkFile.split(",");
    const listFileUpdate = arrFile.filter(
      (item: File) => !arrLink.some((link) => link.includes(item.name))
    );
    if (listFileUpdate.length > 0) {
      const data = await uploadMutipleFile(listFileUpdate);
      newLink = data ? data?.join(",") : "";
    } else {
      const listFileDup = arrLink.filter((link) =>
        arrFile.some((item) => link.includes(item.name))
      );
      newLink = listFileDup?.join(",");
    }
  }
  return newLink;
};
