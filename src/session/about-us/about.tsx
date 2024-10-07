"use client";

import { useState } from "react";
import { AboutContent } from "./about-view";
import { Culture } from "./culture";

export const AboutUsView = () => {
  const [isActive, setIsActive] = useState(1);
  const styleActice =
    "after:absolute after:left-0 after:bottom-0 after:W-full after:h-1 after:bg-[#F37A20] after:right-0 ";
  return (
    <div className="bg-white">
      <img
        src="/imgs/banner-about-us.png"
        alt="Về chúng tôi"
        className="w-full"
      />
      <div className="pb-2 mt-4 border-b-2 flex justify-center space-x-6">
        <button onClick={() => setIsActive(1)}>
          <h1
            className={`text-[#F37A20] relative pb-2 ${
              isActive === 1 && styleActice
            }`}
          >
            Về chúng tôi
          </h1>
        </button>
        <button onClick={() => setIsActive(2)}>
          <h1
            className={`text-[#F37A20] relative pb-2 ${
              isActive === 2 && styleActice
            }`}
          >
            Về văn hoá
          </h1>
        </button>
      </div>
      <div className="container mx-auto max-1280:px-2">
        {isActive === 1 && <AboutContent />}
        {isActive === 2 && <Culture />}
      </div>
    </div>
  );
};
