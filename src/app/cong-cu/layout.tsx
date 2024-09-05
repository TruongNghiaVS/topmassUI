import { ReactNode } from "react";
import { RightIncome } from "./right-income";

interface ITool {
  children: ReactNode;
}

const JobSearchLayout: React.FC<ITool> = ({ children }) => {
  return (
    <div className="container mx-auto">
      <div className="sm:grid grid-cols-12 gap-6 py-8 ">
        <div className="xl:col-span-8 md:col-span-7 sm:row-auto row-start-1 row-end-1">
          {children}
        </div>
        <div className="xl:col-span-4 md:col-span-5 sm:row-auto row-start-1 row-end-1">
          <RightIncome />
        </div>
      </div>
    </div>
  );
};

export default JobSearchLayout;
