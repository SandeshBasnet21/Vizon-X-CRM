interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "text";
  showArrow?: boolean;
  disabled?: boolean;
  className?: string;
}

export default function Button({
  label,
  onClick,
  type = "button",
  variant = "primary",
  showArrow = false,
  disabled = false,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "flex items-center gap-2 font-medium transition-all duration-200 focus:outline-none";

  const variants = {
    primary: "px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700",
    text: " font-bold bg-transparent text-black px-3 py-1.5 rounded-full transition-all duration-200 hover:text-blue-600 hover:bg-blue-100 hover:rounded-full",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className} flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {label}
      {showArrow && <span className="text-lg">→</span>}
    </button>
  );
}
