"use client";
import { CircleChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
export const RouterButton = ({ btnText }) => {
  const router = useRouter();
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => router.push("?search=")}
    >
      {btnText}
    </button>
  );
};

export const BackButton = () => {
  const router = useRouter();
  return (
    <button
      className="group flex gap-2 text-slate-600 px-3 py-2 bg-slate-100 rounded-full w-fit"
      onClick={() => router.back()}
    >
      <CircleChevronLeft className="group-hover:scale-110 transition-transform" />
      Back
    </button>
  );
};

