import { InfomationJobDetail } from "@/component/infomation-job/infomation-job-detail";
import { IInfomationJobProps } from "@/interface/infomation-job";

export const JobLike = ({ item }: IInfomationJobProps) => {
  const list = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="bg-white rounded-lg p-8 mb-8">
      <div className="font-bold text-lg mb-2">Có thể bạn sẽ thích</div>
      {list.map((value) => {
        return (
          <div className="mt-2" key={value.toString() + item.title}>
            <InfomationJobDetail item={item} />
          </div>
        );
      })}
    </div>
  );
};
