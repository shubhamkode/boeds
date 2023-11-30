"use client";
import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";

import { Search } from "lucide-react";

export default function SearchSection({
  defaultValue,
}: {
  defaultValue?: string;
}) {
  const router = useRouter();
  const [bookSearchValue, setBookSearchValue] = useState<string>(
    defaultValue ?? ""
  );

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    router.push(
      `/books/?${new URLSearchParams({ q: bookSearchValue.trim() })}`,
      { scroll: false }
    );
  };

  return (
    <form
      onSubmit={submitForm}
      className="max-w-4xl mx-auto w-full flex gap-x-4 items-center mt-5 px-4 md:px-2 py-1"
    >
      <input
        className="text-lg px-8 py-3 rounded-full focus:outline-none w-full placeholder:opacity-50"
        name="books"
        placeholder="Search anything..."
        value={bookSearchValue}
        onChange={(e) => {
          setBookSearchValue(e.target.value);
        }}
      />
      <button type="submit" className="text-white bg-red-500 rounded-full p-3">
        <Search size={28} />
      </button>
    </form>
  );
}
