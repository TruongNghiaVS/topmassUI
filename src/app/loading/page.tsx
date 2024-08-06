export default function Loading() {
  return (
    <div className="absolute right-0 bottom-0 left-0 top-0 z-[9999] flex items-center justify-center bg-[#E8EDF2] opacity-20">
      <div className="border-gray-300 h-10 w-10 animate-spin rounded-full border-8 border-t-blue-600" />
    </div>
  );
}
