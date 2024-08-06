export const BoxCV = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return list.map((value) => {
    return (
      <div
        key={value.toString()}
        className="w-full h-60 rounded-lg bg-[#555555]"
      ></div>
    );
  });
};
