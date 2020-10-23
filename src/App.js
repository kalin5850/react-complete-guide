import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Pig", age: 30 },
    ],
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <br />
        <h1>test</h1>
        <button>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    /**
     *  same as upper return statement
     */
    // return React.createElement('div', {className: 'App'},
    //        React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
