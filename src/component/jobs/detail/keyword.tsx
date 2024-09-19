import { BellIcon } from "@heroicons/react/16/solid";

export const KeyWord = ({ hagtags = "" }: { hagtags: string }) => {
  const data = hagtags.split(",");
  return (
    <div className="bg-white rounded-lg p-8 mb-8">
      <div className="mx-auto container">
        <div className="flex items-center">
          <BellIcon className="w-4 mr-2" />
          Từ khoá
        </div>
        <div className="text-sm px-[0.65em] flex items-center whitespace-nowrap flex-wrap">
          {data.map((item, index) => {
            return (
              <button
                key={item + index.toString()}
                className=" px-4 py-2 mt-2 mr-2 font-normal text-sx border-[#EFEFEF] border-[1px] border-solid rounded"
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
