import Image from "next/image";
import Button from "./Button";

const ProductCard = () => {
  return (
    <section className="bg-background2 rounded-md shadow-md shadow-background w-full justify-between flex flex-col max-w-96 border-background2">
      <section className="h-48 relative rounded-t-md">
        <Image
          src={"/logo.png"}
          fill
          alt="Product Image"
          className="object-contain"
        />
      </section>

      <section className="bg-white rounded-b-md p-2 space-y-4">
        <section className="flex items-center justify-between">
          <h3 className="font-semibold text-lg">Product</h3>
          <p className="font-bold text-xl">$100</p>
        </section>

        <section className="flex items-center justify-between flex-wrap gap-3">
          <Button
            link="/details"
            className="hover:bg-transparent hover:text-black text-white bg-background"
          >
            View
          </Button>

          <section className="flex items-center gap-2">
            <Button
              link="/details/123"
              className="hover:bg-background hover:text-white"
            >
              Edit
            </Button>
            <Button
              link="/"
              className="bg-transparent text-background hover:bg-background hover:text-white"
            >
              Delete
            </Button>
          </section>
        </section>
      </section>
    </section>
  );
};

export default ProductCard;
