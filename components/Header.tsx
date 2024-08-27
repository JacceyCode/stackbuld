import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";

const Header = () => {
  return (
    <header className="bg-background2 px-4 py-2 flex flex-col sm:flex-row items-center justify-center gap-2">
      <section className="flex items-center justify-between w-full">
        <Link href={"/"} className="">
          <Logo />
        </Link>

        <h2 className="md:text-xl text-sm underline underline-offset-8 italic font-semibold sm:mx-auto">
          Product Catalogue
        </h2>
      </section>

      <Button link="/add" className="ml-auto text-nowrap">
        Add Product
      </Button>
    </header>
  );
};

export default Header;
