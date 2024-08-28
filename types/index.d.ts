import { CSSProperties, ReactNode } from "react";

global {
  declare interface ButtonProps {
    link: string;
    children: ReactNode;
    className: string;
  }

  declare interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: { rate: number; count: number };
  }

  declare interface ProductCardProps
    extends Pick<Product, "id" | "price" | "image" | "title"> {}

  declare interface ProductDetailProps {
    productId: number;
  }
}
