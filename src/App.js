import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Bro", age: "23" },
      { name: "Bro2", age: "24" },
      { name: "Bro3", age: "25" },
    ],
    otherProps: "otherProps",
  };

  changeHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: "23-1" },
        { name: "Bro2-1", age: "24-1" },
        { name: "Bro3-1", age: "25-1" },
      ],
    });
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: "23-1" },
        { name: "Bro2-1", age: "24-1" },
        { name: "Bro3-1", age: "25-1" },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.switchNameHandler.bind(this, "MaBro")}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          change={this.changeHandler}
        >
          My hobby is dancing
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          change={this.changeHandler}
        >
          My hobby is dancing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          change={this.changeHandler}
        >
          My hobby is dancing
        </Person>
      </div>
    );
  }
}

export default App;
