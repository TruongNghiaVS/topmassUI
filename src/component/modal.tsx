import { XMarkIcon } from "@heroicons/react/16/solid";
import React, { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  title?: any;
}

const Modal = ({ isOpen, onClose, children, className, title }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="relative z-[20]">
      <div className="modal-overlay rounded overflow-hidden ">
        <div className="bg-white rounded mb-4 mx-2 md:min-w-[600px]">
          <div className="modal-header p-4 pb-2 relative">
            {title && <div className="text-base font-bold">{title}</div>}
            <button className="modal-close" onClick={onClose}>
              <XMarkIcon className="w-4" />
            </button>
          </div>
          <div
            className={`modal-content md:min-w-[700px] md:max-w-[700px] w-full max-h-[60vh] overflow-auto relative ${
              className && className
            }`}
          >
            {children}
          </div>
        </div>
        <style jsx>{`
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1050;
          }
          .modal-content {
            padding: 20px;
            padding-top: 10px;
            border-radius: 5px;
            position: relative;
          }
          .modal-close {
            position: absolute;
            top: 10px;
            right: 10px;
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Modal;
