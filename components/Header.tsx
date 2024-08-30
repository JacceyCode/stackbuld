import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";

const Header = () => {
  return (
    <header className="bg-background2 px-4 py-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
      <Link href={"/"} className="sm:basis-2/5">
        <Logo />
      </Link>

      <section className="flex items-center justify-between w-full sm:basis-3/5">
        <h1 className="md:text-2xl text-base underline underline-offset-8 italic font-semibold">
          Product Catalogue
        </h1>

        <Button
          link="/add"
          className="ml-auto text-nowrap hover:bg-background hover:text-white"
        >
          Add Product
        </Button>
      </section>
    </header>
  );
};

export default Header;
