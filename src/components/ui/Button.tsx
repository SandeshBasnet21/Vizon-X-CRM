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
    "flex items-center gap-2 font-medium transition-colors duration-200 focus:outline-none";

  const variants = {
    // CTA button → NO hover border change
    primary:
      "bg-blue-600 text-white px-5 py-2.5 rounded-full hover:bg-blue-700",

    // Login button → hover text blue + border
    text: " font-bold bg-transparent text-black px-3 py-1.5 rounded-full transition-all duration-200 hover:text-blue-600 hover:bg-blue-100 hover:rounded-full",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {label}
      {showArrow && <span className="text-lg">→</span>}
    </button>
  );
}
