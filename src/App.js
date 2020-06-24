import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Hi, I'm a React App</h1>
        <Person name="Moriah" age="32"/>
          <Person name="Andrew" age="35"/>
          <Person name="Kerrigan" age="9">My hobbies: screaming</Person>
      </div>
    );
  }
}

export default App;
