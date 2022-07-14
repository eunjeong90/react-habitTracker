import React, { useCallback, useState } from "react";

const SimpleHabit = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });
  const handleDecrement = () => {
    setCount(count - 1);
    if (count > 0) {
      return 0;
    }
  };

  return (
    <li className="habit">
      <span className="habit-name">Reading</span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
      <button className="habit-button habit-decrease" onClick={handleDecrement}>
        <i className="fas fa-minus-square"></i>
      </button>
      {/* <button className="habit-button habit-delete" onClick={this.handleDelete}>
        <i className="fas fa-trash"></i>
      </button> */}
    </li>
  );
};

export default SimpleHabit;
