import { ButtonProps } from "@/types";
import Link from "next/link";

const Button = ({ link, children, className }: ButtonProps) => {
  return (
    <Link
      href={link}
      role="button"
      className={`px-3 py-1 rounded-lg text-sm lg:text-lg font-medium transition-all border-background border-2 ${className}`}
    >
      {children}
    </Link>
  );
};

export default Button;
