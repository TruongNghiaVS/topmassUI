import {
  CloudArrowUpIcon,
  DocumentTextIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";

interface IUploadFile {
  file: File | null;
  setFile: Dispatch<SetStateAction<File | null>>;
  setCvValue: Dispatch<SetStateAction<string>>;
  cvValue: string;
}

const UploadFile = ({ file, setFile, setCvValue, cvValue }: IUploadFile) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [dragActive, setDragActive] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      const selectedFile = files[0];
      if (
        [
          "application/pdf",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ].includes(selectedFile.type)
      ) {
        setFile(selectedFile);
        setCvValue("");
        setError(null);
        console.log("Selected file:", selectedFile);
      } else {
        setError("Please upload a PDF or DOCX file");
      }
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    setCvValue(cvValue);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragActive(false);

    const files = event.dataTransfer.files;
    if (files && files[0]) {
      const droppedFile = files[0];
      if (
        [
          "application/pdf",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ].includes(droppedFile.type)
      ) {
        setFile(droppedFile);
        setCvValue("");
        setError(null);
        console.log("Dropped file:", droppedFile);
      } else {
        setError("Please upload a PDF or DOCX file");
      }
    }
  };

  return (
    <div>
      <div
        style={{
          border: "2px dashed #F37A20",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
          marginBottom: "20px",
          cursor: "pointer",
        }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleButtonClick}
      >
        <div className="flex justify-center items-center">
          <CloudArrowUpIcon className="w-6 mr-2 text-default font-semibold" />
          Tải CV lên từ máy tính, chọn hoặc kéo thả
        </div>
        <div className="text-center mt-4">
          Hỗ trợ định dạng .doc, .docx, pdf có kích thước dưới 5MB
        </div>
      </div>
      {error !== null && error !== "" && (
        <div style={{ color: "red", margin: "8px 0" }}>{error}</div>
      )}
      <div className="text-center flex items-center justify-center mt-4">
        {file && (
          <div className="flex text-base items-center mr-4">
            <DocumentTextIcon className="w-6 text-default" />
            <div className="mx-2">{file.name}</div>
            <button
              type="button"
              onClick={handleRemoveFile}
              style={{ marginLeft: "10px" }}
            >
              <TrashIcon className="w-6 text-default" />
            </button>
          </div>
        )}

        <button
          type="button"
          className="px-3 py-2 bg-[#F37A20] text-white rounded-lg"
          onClick={handleButtonClick}
        >
          Chọn CV
        </button>
      </div>

      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
        accept=".pdf, .docx"
      />
    </div>
  );
};

export default UploadFile;
