import { ReactNode } from "react";
import { SearchDetail } from "../../../modules/detail-jobs/search-detail";

interface JobsDetailtLayoutProps {
  children: ReactNode;
}

const JobsDetailtLayout: React.FC<JobsDetailtLayoutProps> = ({ children }) => {
  return (
    <main className="relative">
      <div className="bg-[#EFEFEF]">
        <SearchDetail />
        {children}
      </div>
    </main>
  );
};

export default JobsDetailtLayout;
