import React from "react";

interface ButtonProps {
  variant?: "primary" | "secondary";
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  onClick,
  children,
  className,
}) => {
  const baseClasses = "px-6 py-2 rounded font-medium transition-colors";
  const variantClasses =
    variant === "primary"
      ? "bg-[#006DDF] text-white hover:bg-blue-700"
      : "bg-white text-[#006DDF] border border-blue-600 hover:bg-blue-100";

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
