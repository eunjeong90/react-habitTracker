import React, { Component } from "react";
import "./app.css";
import NavBar from "./components/NavBar";
import Habits from "./components/habits";
import Habit from "./components/habit";
import Button from "./components/button";
import InputArea from "./components/inputArea";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  handleReset = () => {
    const habits = [...this.state.habits];
    habits.splice(0);
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <NavBar habit={this.state.habits} />
        <InputArea />
        <Habits>
          {this.state.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
            />
          ))}
        </Habits>
        <Button className="habits-reset-btn" onClick={this.handleReset}>
          Reset All
        </Button>
      </>
    );
  }
}

export default App;
