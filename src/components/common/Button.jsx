
const Button = ({
  children,
  variant = "primary",
  className = "",
  href,
  ...props
}) => {
  const baseStyle =
    "inline-block rounded-lg px-6 py-3 font-semibold transition duration-300 hover:-translate-y-1";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-purple-500 text-white hover:bg-purple-700",
  };

  const styles = `${baseStyle} ${variants[variant]} ${className}`;

  // If href exists, render an anchor tag
  if (href) {
    return (
      <a href={href} className={styles} {...props}>
        {children}
      </a>
    );
  }

  // Otherwise, render a button
  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
};

export default Button;
