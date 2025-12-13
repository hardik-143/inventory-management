import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode; // Button text or content
  size?: "sm" | "md" | "lg"; // Button size
  variant?: "primary" | "outline" | "primaryOutlineLight" | "primaryOutline" | "danger"; // Button variant
  startIcon?: ReactNode; // Icon before the text
  endIcon?: ReactNode; // Icon after the text
  onClick?: () => void; // Click handler
  disabled?: boolean; // Disabled state
  className?: string; // Disabled state
  type?: "button" | "submit" | "reset"; // Button type for forms
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = "md",
  variant = "primary",
  startIcon,
  endIcon,
  onClick,
  className = "",
  disabled = false,
  type = "button",
}) => {
  // Size Classes
  const sizeClasses = {
    sm: "px-3 py-[9px] text-sm",
    md: "px-5 py-3.5 !text-sm",
    lg: "px-6 py-4 !text-[20px]",
  };

  // Variant Classes
  const variantClasses = {
    primary:
      "bg-brand-500 !text-white shadow-theme-xs enabled:hover:bg-brand-600 disabled:bg-brand-300",
    outline:
      "bg-white text-gray-700 border border-gray-300 enabled:hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700 dark:enabled:hover:bg-white/[0.03] dark:enabled:hover:text-gray-300",
    primaryOutlineLight:
      "bg-transparent !text-brand-500 border border-brand-500 enabled:hover:bg-brand-50 dark:bg-gray-800 disabled:text-brand-300 disabled:ring-brand-200",
    primaryOutline:
      "bg-transparent !text-brand-500 border border-brand-500 enabled:hover:bg-brand-500 enabled:hover:!text-white disabled:text-brand-300 disabled:ring-brand-200",
    danger:
      "bg-transparent text-error-500 border border-error-500 enabled:hover:bg-error-500 enabled:hover:!text-white disabled:text-error-300 disabled:ring-error-200",
  };

  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 rounded-lg transition ring-0! ${className} ${
        sizeClasses[size]
      } ${variantClasses[variant]} ${
        disabled ? "cursor-not-allowed opacity-50" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {startIcon && <span className="flex items-center">{startIcon}</span>}
      {children}
      {endIcon && <span className="flex items-center">{endIcon}</span>}
    </button>
  );
};

export default Button;
