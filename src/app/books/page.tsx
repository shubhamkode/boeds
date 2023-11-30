import { BookCard, SearchSection } from "@/components";
import bookList from "@/data/sources/local/bookData.json";
import Image from "next/image";

export default async function BooksPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const books = bookList.filter((book) =>
    book.title.toLowerCase().includes(searchParams.q!.toLowerCase())
  );

  return (
    <>
      <div className="container mx-auto px-3 py-2">
        <SearchSection defaultValue={searchParams.q as string} />
      </div>

      <main className=" container mx-auto sm:p-16 py-16 px-8 flex flex-col gap-10 mt-2">
        <section className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-10 py-5">
          {books.map((book, index) => (
            <BookCard key={index} book={book} />
          ))}
        </section>
      </main>
    </>
  );
}
