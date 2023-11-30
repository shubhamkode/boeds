import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="container px-4 py-1 mx-auto text-white border-b-[.5px] border-black shadow">
      <div className="flex items-center justify-between p-1">
        <Link href="/" className="flex items-center p-1 pr-2">
          <Image
            src="/logo.png"
            alt="Boeds"
            height={60}
            width={60}
            style={{ width: "auto", height: "auto" }}
          />
          <p className="text-red-500 text-xl font-[600] tracking-wide hidden sm:block ml-2">
            Boeds
          </p>
        </Link>
        <div className="flex ml-10 item-center gap-x-2">
          {/* <Link
            className="py-1 px-2.5 rounded  font-[500] leading-loose tracking-wider"
            href="/home"
          >
            Home
          </Link> */}
          <Link
            className="py-1  px-2.5 rounded  font-[500] leading-loose tracking-wider"
            href="/books?q="
          >
            Discover
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
