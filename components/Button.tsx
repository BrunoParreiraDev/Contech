// components/Button.tsx
import React from "react";
import Link from "next/link";

export interface ButtonProps {
  styles?: string;
  text?: string;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  styles = "",
  text = "Quero Começar!",
  href = "#",
}) => {
  return (
    <Link href={href}>
      <button
        type="button"
        className={`${styles} py-4 px-6 bg-yellow-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] hover:translate-x-2 transition-all ease-linear cursor-pointer`}
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
