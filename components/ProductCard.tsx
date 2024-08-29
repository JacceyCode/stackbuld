import { deleteProduct } from "@/lib/utils";
import Image from "next/image";
import Button from "./Button";
import DeleteButton from "./DeleteButton";

const ProductCard = ({
  id,
  image,
  price,
  title,
  setProducts,
}: ProductCardProps) => {
  return (
    <section className="bg-background2 rounded-md shadow-md shadow-background w-full justify-between flex flex-col max-w-96 border-background2">
      <section className="h-60 aspect-video relative rounded-t-md">
        <Image
          src={image || "/logo.png"}
          fill
          alt={`${title} Image`}
          className="object-contain"
          quality={80}
        />
      </section>

      <section className="bg-white rounded-b-md p-2 space-y-4 justify-between flex flex-col">
        <section className="flex items-end justify-between gap-4">
          <h3 className="font-medium text-lg">
            {title.slice(0, 8) || "Product name"}
          </h3>
          <p className="font-bold text-xl">${price || "0.00"}</p>
        </section>

        <section className="flex items-center justify-between flex-wrap gap-3">
          <Button
            link={`/${id}`}
            className="hover:bg-transparent hover:text-black text-white bg-background"
          >
            View
          </Button>

          <section className="flex items-center gap-2">
            <Button
              link={`/${id}/edit`}
              className="hover:bg-background hover:text-white"
            >
              Edit
            </Button>

            <DeleteButton
              onClick={async () => {
                const newProducts = await deleteProduct(id);
                setProducts(newProducts!);
              }}
              productId={id}
            />
          </section>
        </section>
      </section>
    </section>
  );
};

export default ProductCard;
