import { news } from "@/mockup-data/data";
import { New } from "./new";

export default function NewCategory() {
  return (
    <div className="bg-[#f0f0f0] pb-10 max-1280:px-2">
      <div className="mx-auto container">
        <div className="py-8 font-bold text-3xl">Bi quyet tim viec</div>
        <div className="grid grid-cols-4 gap-6">
          {news.map((item, index) => {
            return (
              <div key={index.toString() + item.title} className="col-span-1">
                <New item={item} slug="bi-quyet-tim-viec" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export const revalidate = 100;
