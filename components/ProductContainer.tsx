"use client";

import { getProducts } from "@/lib/action";
import {
  filterProductsByCategory,
  saveProductsToLocalStorage,
} from "@/lib/utils";
import { useEffect, useState } from "react";
import FilteredProductButton from "./FilterProductButton";
import LoaderIcon from "./Loader";
import ProductCard from "./ProductCard";

const ProductContainer = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [category, setCategory] = useState<string>("");

  const getProduct = async () => {
    setLoading(true);
    setError(null);
    try {
      const fetchedProducts = await getProducts();

      saveProductsToLocalStorage(fetchedProducts);

      setProducts(fetchedProducts.reverse());
    } catch (error: any) {
      setError(error.message || "An unexpected error occured");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getProducts = async () => {
      const storedProducts = await filterProductsByCategory(category);

      if (storedProducts && storedProducts.length > 0) {
        setProducts(storedProducts);
        setLoading(false);
      } else {
        getProduct();
      }
    };

    getProducts();
  }, [category]);

  return (
    <section className="space-y-6 flex flex-col items-center">
      <section className="self-end">
        <FilteredProductButton setCategory={setCategory} />
      </section>
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
              category={category}
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
    </section>
  );
};

export default ProductContainer;
