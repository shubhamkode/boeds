import React from "react";
import booksList from "@/data/sources/local/bookData.json";
import { SearchSection } from "@/components";
import Image from "next/image";
import { Balancer } from "react-wrap-balancer";
import Link from "next/link";

interface IBooksDetailsPageProps {
  params: {
    id: string;
  };
}

const BookDetailsPage: React.FC<IBooksDetailsPageProps> = ({
  params: { id },
}) => {
  const book = booksList.find((book) => book.id === id)!;

  return (
    <div className="container mx-auto pb-20">
      <SearchSection />

      <div className="w-full mt-10 flex items-center md:items-start justify-center flex-col md:flex-row p-2 md:gap-x-12">
        <div>
          <div className="relative w-full min-w-[300px] max-w-[340px] h-[400px]">
            <Image
              src={book.imageURL!}
              alt="bookImage"
              fill
              quality={70}
              className="rounded-xl object-fill"
            />
          </div>

          <div className="flex items-center mt-5 justify-end gap-x-5 py-">
            <p className="whitespace-nowrap rounded-full bg-red-100 px-2.5 py-0.5 text-sm text-red-700 font-[500]">
              {book.category}
            </p>
          </div>
        </div>
        <div className="mt-10 md:mt-0 max-w-lg">
          <Balancer
            as="h2"
            className="text-4xl font-[600] tracking-wide  bg-gradient-to-r from-red-400 via-red-600 to-red-900 bg-clip-text text-transparent"
          >
            {book.title}
          </Balancer>

          <div className="flex justify-end">
            <p className=" opacity-90 text-slate-300  duration-200 hover:text-transparent bg-gradient-to-r from-red-300 via-red-400 to-red-600 bg-clip-text w-min whitespace-nowrap cursor-pointer font-[600] text-lg">
              - {book.authorName}
            </p>
          </div>

          <Balancer as="p" className="text-base opacity-80 font-[500] mt-10">
            {book.bookDescription}
          </Balancer>

          <div className="mt-10 flex">
            <Link
              href={book.bookPDFURL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold w-full bg-gradient-to-r from-red-500 via-red-600 to-red-700 px-2 py-2.5 rounded-full text-center "
            >
              Get pdf
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookDetailsPage;
