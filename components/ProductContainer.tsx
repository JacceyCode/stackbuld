"use client";

import { getProducts } from "@/lib/action";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import LoaderIcon from "./Loader";
import {
  getProductsFromLocalStorage,
  saveProductsToLocalStorage,
} from "@/lib/utils";

const ProductContainer = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getProduct = async () => {
    setLoading(true);
    setError(null);
    try {
      const fetchedProducts = await getProducts();

      if (!fetchedProducts || fetchedProducts.length === 0)
        throw new Error("Failed to fetch products");

      setProducts(fetchedProducts);
      saveProductsToLocalStorage(fetchedProducts);
    } catch (error: any) {
      setError(error.message || "An unexpected error occured");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const storedProducts = getProductsFromLocalStorage();

    if (storedProducts) {
      setProducts(storedProducts);
      setLoading(false);
    } else {
      getProduct();
    }
  }, []);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
      {loading ? (
        <LoaderIcon />
      ) : error ? (
        <section className="w-screen flex items-center justify-center">
          <p className="text-lg font-semibold">{error}</p>
        </section>
      ) : products.length > 0 ? (
        products.map((product: Product) => (
          <ProductCard
            id={product.id}
            image={product.image}
            price={product.price}
            title={product.title}
            key={product.id}
            setProducts={setProducts}
          />
        ))
      ) : (
        <section className="w-screen flex items-center justify-center">
          <p className="text-lg font-semibold text-center">
            No products found.
          </p>
        </section>
      )}
    </section>
  );
};

export default ProductContainer;
