import Link from "next/link";

export const CompanySeenCV = () => {
  return (
    <div className="rounded border p-4">
      <div className="flex justify-between">
        <div className="flex items-center">
          <img src="/imgs/logo-work.png" alt="" className="w-20 mr-4" />
          <div>
            <span className="text-default">Nguyễn Việt Hùng</span> giám đốc
            <div>
              <Link href="/cong-ty/abc">Tập đoàn cổ phần VietStar Group</Link>
            </div>
          </div>
        </div>
        <div>2 tháng trước</div>
      </div>
    </div>
  );
};
