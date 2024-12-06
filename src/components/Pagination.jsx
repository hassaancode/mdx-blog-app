"use client";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ currentPage, totalPages, searchQuery }) => {
  const router = useRouter();

  const handlePageChange = (page) => {
    const searchParams = new URLSearchParams();
    if (searchQuery) searchParams.set("search", searchQuery);
    searchParams.set("page", page);
    router.push(`?${searchParams.toString()}`);
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-8 mb-4">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-lg hover:bg-slate-100 disabled:opacity-50 disabled:hover:bg-transparent"
      >
        <ChevronLeft size={24} />
      </button>

      {[...Array(totalPages)].map((_, index) => {
        const pageNumber = index + 1;
        return (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={`px-4 py-2 rounded-lg ${
              currentPage === pageNumber
                ? "bg-blue-600 text-white"
                : "hover:bg-slate-100"
            }`}
          >
            {pageNumber}
          </button>
        );
      })}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-lg hover:bg-slate-100 disabled:opacity-50 disabled:hover:bg-transparent"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default Pagination;