import { IInfomationSkillViewProps } from "@/app/interface/interface";
import { StarIcon } from "@heroicons/react/16/solid";

export const SkillView = ({ skills }: IInfomationSkillViewProps) => {
  const counts = Array.from({ length: 5 }, (_, i) => {
    return i + 1;
  });

  return (
    <div className="mt-4">
      {skills?.map((item, index) => {
        return (
          <div key={index} className="mt-4">
            <div className="mt-4">
              <div className="grid grid-cols-3 text-xs mt-2">
                <div className="col-span-1">{item.fullName}</div>
                <div className="col-span-2">
                  <div className="flex space-x-2">
                    {counts.map((value, idx) => {
                      return (
                        <StarIcon
                          key={idx}
                          className={`w-6 ${
                            value <= item.level
                              ? "text-default"
                              : "text-gray-400"
                          }`}
                        />
                      );
                    })}
                  </div>
                  <div
                    className="mt2"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
