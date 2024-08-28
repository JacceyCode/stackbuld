"use server";

export const getProducts = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");

    // Check for response status
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const products = await res.json();

    // check for products
    if (!products || products.length === 0)
      throw new Error("Error fetching products, try again.");

    return products;
  } catch (error: any) {
    throw new Error(`Failed to fetch products: ${error.message}`);
  }
};
