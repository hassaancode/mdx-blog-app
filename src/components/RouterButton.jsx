"use client";
import { useRouter } from "next/navigation";
const RouterButton = ({ btnText }) => {
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

export default RouterButton;
