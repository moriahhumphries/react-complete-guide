import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: "Moriah", age: 32},
            { name: "Andrew", age: 35},
            { name: "Kerrigan", age: 9}
        ]
    }

    switchNameHandler = () => {
        console.log("Was clicked!");
    }

  render() {
    return (
      <div className="App">
       <h1>Hi, I'm a React App</h1>
          <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>My hobbies: screaming</Person>
      </div>
    );
  }
}

export default App;
