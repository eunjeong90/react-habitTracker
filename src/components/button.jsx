import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button className="habits-green-btn" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
