"use client";

import { getProducts } from "@/lib/action";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import LoaderIcon from "./Loader";

const ProductContainer = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getProduct = async () => {
    setLoading(true);
    try {
      const fetchedProducts = await getProducts();

      if (!fetchedProducts) throw Error();

      setProducts(fetchedProducts);
      localStorage.setItem("products", JSON.stringify(fetchedProducts));
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    setError(null);
    try {
      const storedProducts = localStorage.getItem("products");

      if (storedProducts) {
        const parsedProducts = JSON.parse(storedProducts);
        setProducts(parsedProducts);
      } else {
        getProduct();
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
      {loading ? (
        <LoaderIcon />
      ) : products.length > 0 && !error ? (
        products.map(({ id, image, price, title }: ProductCardProps) => (
          <ProductCard
            id={id}
            image={image}
            price={price}
            title={title}
            key={id}
          />
        ))
      ) : (
        <p className="text-lg font-semibold">{error}</p>
      )}
    </section>
  );
};

export default ProductContainer;
