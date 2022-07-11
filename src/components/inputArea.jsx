import React, { Component } from "react";
import Button from "./button";

class InputArea extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "alignCenter",
          margin: "1.5em 0.2em",
        }}
      >
        <input type="text" value="Habit" className="habit-input" />
        <Button>Add</Button>
      </div>
    );
  }
}

export default InputArea;
