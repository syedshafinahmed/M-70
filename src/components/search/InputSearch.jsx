"use client";
import { useRouter, useSearchParams } from "next/navigation";

const InputSearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.search.value;

    // search
    const params = new URLSearchParams(searchParams);
    value ? params.set("search", value) : params.delete("search");
    router.push(`?${params.toString()}`);
  }
  return (
    <form onSubmit={handleSubmit}
      className="flex items-center gap-3 max-w-md
                 rounded-2xl bg-[#0d0d0d] border border-white/10
                 px-4 py-2 shadow-md
                 focus-within:border-orange-400/40
                 focus-within:shadow-[0_0_0_1px_rgba(249,115,22,0.4)]
                 transition-all"
    >
      <input
        type="text" name="search"
        placeholder="Search food..."
        className="flex-1 bg-transparent text-sm text-white placeholder:text-gray-500
                   outline-none"
      />

      <button
        type="submit"
        className="rounded-xl bg-orange-500 px-4 py-2 text-xs font-light text-black
                   hover:bg-orange-400 active:scale-95 transition-all"
      >
        Search
      </button>
    </form>
  );
};

export default InputSearch;
