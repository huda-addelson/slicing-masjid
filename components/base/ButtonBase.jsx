import React from "react";

const ButtonBase = ({
  children,
  onClick,
  type = "button",
  variant = "elevated",
  className = "",
  disabled = false,
}) => {
  const variantStyles = {
    elevated:
      "bg-[#F5F6F8] text-black hover:bg-transparent hover:text-white border border-white",
    outlined:
      "bg-transparent text-white hover:bg-[#fff] hover:text-black border border-white",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} ${variantStyles[variant]} text-[15px] py-[10px] px-4 rounded-xl font-medium duration-200 transition-all`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ButtonBase;
