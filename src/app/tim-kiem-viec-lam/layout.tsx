import { ReactNode } from "react";

interface JobSearchLayoutProps {
  children: ReactNode;
}

const JobSearchLayout: React.FC<JobSearchLayoutProps> = ({ children }) => {
  return (
    <main>
      <div className="relative bg-[#EFEFEF]">
        <img
          src="/imgs/ab-left-header-job.png"
          alt=""
          className="absolute left-0 top-0 block z-[1] w-[100px]"
        />
        <img
          src="/imgs/ab-right-header-job.png"
          alt=""
          className="absolute right-0 top-0 block z-[1] w-[100px]"
        />
        <div>{children}</div>
      </div>
    </main>
  );
};

export default JobSearchLayout;
