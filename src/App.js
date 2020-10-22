import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <br />
        <h1>test</h1>
        <Person name="test1" age="20" />
        <Person name="test2" age="30">
          My hobbies: Racing
        </Person>
        <Person name="test3" age="40" />
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
