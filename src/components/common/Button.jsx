const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyle =
    "inline-block rounded-lg px-6 py-3 text-lg font-semibold transition duration-300";

  const variants = {
    primary:
      "bg-red-500 text-white hover:bg-red-600",
    secondary:
      "bg-white text-gray-700 hover:bg-blue-600 hover:text-white",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;