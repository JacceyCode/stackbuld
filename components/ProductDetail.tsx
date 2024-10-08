"use client";

import { deleteProduct, getProductsFromLocalStorage } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "./Button";
import DeleteButton from "./DeleteButton";
import LoaderIcon from "./Loader";

const ProductDetail = ({ productId }: ProductDetailProps) => {
  const router = useRouter();
  const [data, setData] = useState<Product | null>(null);

  useEffect(() => {
    const localProduct: Product[] = getProductsFromLocalStorage();

    if (localProduct) {
      const prod = localProduct.find((product) => product.id === +productId);

      !prod ? router.push("/") : setData(prod);
    } else {
      revalidatePath("/");
      router.push("/");
    }
  }, [productId, router]);

  if (!data) return <LoaderIcon />;

  return (
    <>
      <Head>
        <title>{data.title} - E-commerce Store</title>
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.description} />
        <meta
          property="og:url"
          content={`https://stackbuld-e-commerce.vercel.app/${data.id}`}
        />
        <meta property="og:type" content="product" />
      </Head>

      <section className="flex flex-col sm:flex-row p-4 items-center bg-background2 rounded-md shadow-black shadow-lg gap-6 sm:h-[30rem]">
        <section className="relative size-60 aspect-video sm:size-80 rounded-md sm:basis-2/5">
          <Image
            src={data.image || "/logo.png"}
            fill
            alt={`${data.title} Image`}
            className="object-contain"
            loading="lazy"
          />
        </section>

        <section className="flex flex-col sm:basis-3/5 gap-4">
          <h1 className="font-semibold text-xl">{data.title}</h1>

          <section className="flex items-center justify-between">
            <h3 className="font-bold text-xl">$ {data.price}</h3>
            <h3 className="font-medium text-lg">Rating: {data.rating.rate}</h3>
          </section>

          <span className="text-lg font-medium text-justify">
            {data.description}
          </span>

          <section className="flex items-center gap-2 mt-6">
            <Button
              link={`/${productId}/edit`}
              className="hover:bg-background hover:text-white"
            >
              Edit
            </Button>

            <DeleteButton
              onClick={async () => {
                await deleteProduct(data.id);
                router.push("/");
              }}
              productId={data.id}
            />
          </section>
        </section>
      </section>
    </>
  );
};

export default ProductDetail;
