const Button = ({ onClick, className, children, href }) => {
  const classes = `rounded-[4px] inline-flex justify-center items-center gap-1.5 px-6 py-3.5 text-base lg:text-lg font-medium transition-colors ${className || ""}`;

  const renderButton = () => (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      {children}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
