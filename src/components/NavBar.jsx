import React, { Component } from "react";

class NavBar extends Component {
  state = {
    count: 0,
  };
  
  render() {
    const { count } = this.props.habit;
    return (
      <div className="habit-navBox">
        <h1 className="habit-nav">🌈Habit Tracker</h1>
        <span className="habit-count">{count}</span>
      </div>
    );
  }
}

export default NavBar;
