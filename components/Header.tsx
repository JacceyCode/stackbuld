import Link from "next/link";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="bg-background2 px-4 py-2 flex items-center justify-center">
      <Link href={"/"} className="">
        <Logo />
      </Link>

      <h2 className="md:text-xl text-sm underline underline-offset-8 italic font-semibold mx-auto">
        Product Catalogue
      </h2>
    </header>
  );
};

export default Header;
