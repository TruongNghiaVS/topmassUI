import React from "react";

interface PopupProps {
  position: { top: number; left: number };
  children: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({ position, children }) => {
  return (
    <div className="absolute bg-white border p-2.5 shadow-popup z-[1000] min-w-80 max-w-80 right-0 top-0 min-h-96 max-h-96">
      {children}
    </div>
  );
};

export default Popup;
