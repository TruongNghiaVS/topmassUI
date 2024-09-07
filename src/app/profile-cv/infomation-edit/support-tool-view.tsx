import { StarIcon } from "@heroicons/react/16/solid";

interface ISoftSkill {
  tool_name: string;
  proficiency: number;
  description?: string;
}

interface IProps {
  data: ISoftSkill[];
}

export const SupportToolView = ({ data }: IProps) => {
  const counts = Array.from({ length: 5 }, (_, i) => {
    return i + 1;
  });

  return (
    <div className="mt-4">
      {data.map((item) => {
        return (
          <div key={item.tool_name} className="mt-4">
            <div className="mt-4">
              <div className="grid grid-cols-3 text-xs mt-2">
                <div className="col-span-1">{item.tool_name}</div>
                <div className="col-span-2">
                  <div className="flex space-x-2">
                    {counts.map((value) => {
                      return (
                        <StarIcon
                          key={value.toString() + item.tool_name}
                          className={`w-6 ${
                            value <= item.proficiency
                              ? "text-default"
                              : "text-gray-400"
                          }`}
                        />
                      );
                    })}
                  </div>
                  <div className="mt2">{item.description}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};