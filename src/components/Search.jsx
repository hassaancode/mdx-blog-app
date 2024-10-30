"use client"; // This makes the component a client component
import { X } from "lucide-react";
import { SearchIcon } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Search() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`?search=${query}`); // Use router to navigate
  };

  const handleClear = () => {
    setQuery("");
    router.push("/");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-slate-100 px-3 py-2 rounded-lg"
    >
      <input
        type="text"
        placeholder="Search blogs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="outline-none bg-inherit w-full"
      />
      {/* Add a button to clear the search query */}
      {query && (
        <button
          className="text-slate-600 p-1 hover:bg-slate-300 rounded-full"
          type="button"
          onClick={handleClear}
        >
          <X size={16} />
        </button>
      )}
      <button
        type="submit"
        className="group ml-2 p-2 text-white bg-blue-600 hover:bg-blue-800 rounded "
      >
        <SearchIcon
          size={20}
          className="group-hover:scale-110 transition-transform ease"
        />
      </button>
    </form>
  );
}
