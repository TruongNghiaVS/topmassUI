import { ReactNode } from "react";

interface JobsLayoutProps {
  children: ReactNode;
}

const JobsLayout: React.FC<JobsLayoutProps> = ({ children }) => {
  return (
    <main>
      <div className="relative">
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

export default JobsLayout;
