export const Image = () => {
  return (
    <div className="py-4 max-1280:px-2">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
          <div className="">
            <img
              src="/imgs/banner-1.png"
              alt=""
              className="w-full rounded-lg"
            />
          </div>
          <div className="">
            <img
              src="/imgs/banner-2.png"
              alt=""
              className="w-full rounded-lg"
            />
          </div>
          <div className="">
            <img
              src="/imgs/banner-3.png"
              alt=""
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
