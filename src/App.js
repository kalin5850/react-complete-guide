import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = (props) => {
  const [personStat, setPersonsState] = useState({
    persons: [
      { name: "Test", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Pig", age: 130 },
    ],
    otherStat: "other value",
  });

  const [otherStat, setOtherStat] = useState("other value");

  // user arrow function instead of normal function
  const switchNameHandler = () => {
    // console.log("Was clicked");
    // Don't this: this.state.persons[0].name = "test1";
    setPersonsState({
      persons: [
        { name: "Max", age: 28 },
        { name: "Manu", age: 29 },
        { name: "Pig", age: 30 },
      ],
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <br />
      <h1>test</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personStat.persons[0].name}
        age={personStat.persons[0].age}
      />
      <Person name={personStat.persons[1].name} age={personStat.persons[1].age}>
        My hobbies: Racing
      </Person>
      <Person
        name={personStat.persons[2].name}
        age={personStat.persons[2].age}
      />
    </div>
  );
  /**
   *  same as upper return statement
   */
  // return React.createElement('div', {className: 'App'},
  //        React.createElement('h1', null, 'Does this work now?'));
};

export default app;
