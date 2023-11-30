import React from "react";
import { SearchSection } from "@/components";

const HomePage = () => {
  return (
    <div className="mt-20 flex justify-center container mx-auto flex-col px-3 py-5">
      <div className="w-full mb-4 p-1">
        <h2 className="text-center text-5xl md:text-6xl font-semibold bg-clip-text bg-gradient-to-r from-red-100  via-red-500 to-red-700 text-transparent">
          Boeds
        </h2>
        <h4 className="text-center text-lg md:text-xl font-light leading-loose tracking-wider">
          Your books search engine...
        </h4>
      </div>
      <SearchSection />
    </div>
  );
};

export default HomePage;
