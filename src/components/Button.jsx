import React from "react";

const Button = ({ className = "", children, type = "button", onClick }) => {
  return (
    <button type={type} onClick={onClick} className={`${className} rounded-4`}>
      {children}
    </button>
  );
};

export default Button;
