export const saveProductsToLocalStorage = (products: Product[]) => {
  localStorage.setItem("products", JSON.stringify(products));
};

export const getProductsFromLocalStorage = () => {
  const products = localStorage.getItem("products");

  if (products) return JSON.parse(products);
};

export const deleteProduct = async (id: number) => {
  if (localStorage) {
    const products: Product[] = getProductsFromLocalStorage();

    const newProducts = products.filter((product) => product.id !== id);

    saveProductsToLocalStorage(newProducts);

    return newProducts;
  }
};
