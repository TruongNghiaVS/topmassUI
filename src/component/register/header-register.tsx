import Link from "next/link";

export const HeaderRegiser = () => {
  return (
    <div className="bg-bgHeaderJobCustom pt-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-3">
          <div className="xl:col-span-1 md:grid-col-2 grid-cold-3 bg-[url(/imgs/bg-logo-footer.png)] bg-no-repeat bg-[lenght:100% 100%] py-4">
            <Link href="/" className="inline-block">
              <img src="/imgs/logo-new.svg" alt="" className="w-[180px] " />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
