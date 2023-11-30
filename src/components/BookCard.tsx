import React, { Suspense } from "react";
import { Book } from "@/models";
import Image from "next/image";
import Link from "next/link";

const BookCard: React.FC<{ book: Book }> = ({ book }) => {
  return (
    <div className="w-min rounded relative  mx-auto flex items-center flex-col justify-center">
      <Link href={`/books/${book.id}`}>
        <div className="relative w-full min-w-[300px] max-w-[340px] h-[400px]">
          <Image
            src={book.imageURL}
            alt="bookImage"
            fill
            quality={70}
            className="rounded-xl"
          />
        </div>
      </Link>
      <div className="w-full mt-2 flex flex-col">
        <Link
          href={`/books/${book.id}`}
          className="px-1 font-[600]  tracking-wider text-lg "
        >
          {book.title}
        </Link>

        <Link
          href={`/books/${book.id}`}
          className="opacity-50 text-sm px-2 -mt-1 font-[500]"
        >
          {book.authorName}
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
