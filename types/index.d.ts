import { CSSProperties, Dispatch, ReactNode, SetStateAction } from "react";

global {
  declare interface ButtonProps {
    link: string;
    children: ReactNode;
    className: string;
  }

  type ProductCategory =
    | "men's clothing"
    | "women's clothing"
    | "jewelery"
    | "electronics";

  declare interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: ProductCategory;
    image: string | null;
    rating: { rate: number; count: number };
  }

  declare interface ProductCardProps
    extends Pick<Product, "id" | "price" | "image" | "title"> {
    setProducts: Dispatch<SetStateAction<Product[]>>;
  }

  declare interface ProductDetailProps {
    productId: number;
  }

  declare interface DeleteButtonProps {
    onClick: (productId: number) => void;
    productId: number;
  }

  declare interface AddProductParam {
    title: string;
    price: number;
    description: string;
    category: ProductCategory;
  }

  declare interface ProductFormProps {
    type: "add" | "edit";
    productId?: number
  }
}
