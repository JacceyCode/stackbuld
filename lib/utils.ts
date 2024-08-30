import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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

export const addProduct = async (values: AddProductParam) => {
  if (localStorage) {
    const products: Product[] = await getProductsFromLocalStorage();

    const length = products.length;
    const newId = products[length - 1].id + 1;

    const newProduct: Product = {
      id: newId,
      image: null,
      rating: {
        rate: 0,
        count: 0,
      },
      ...values,
    };

    products.push(newProduct);

    saveProductsToLocalStorage(products);
  }
};

export const editProduct = async (product: Product) => {
  if (localStorage) {
    const products: Product[] = await getProductsFromLocalStorage();

    const productId = product.id;

    const productIndex = products.findIndex(
      (product) => product.id === productId
    );

    if (productIndex !== -1) {
      products[productIndex] = product;
    }

    saveProductsToLocalStorage(products);
  }
};
