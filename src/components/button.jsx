import React from "react";

const Button = ({ children, onClick, className }) => {
  console.log("button~");
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
