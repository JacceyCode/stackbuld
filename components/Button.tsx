import { ButtonProps } from "@/types";
import Link from "next/link";

const Button = ({ link, children, className }: ButtonProps) => {
  return (
    <Link
      href={link}
      className={`bg-background px-3 py-1 rounded-md text-sm lg:text-lg font-medium transition-all border-background border-2 text-white ${className}`}
    >
      {children}
    </Link>
  );
};

export default Button;
