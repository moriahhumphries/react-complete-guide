import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import person from "./Person/Person";

const app = props => {
    const [personsState, setPersonsState] = useState({
    persons: [
        { name: "Moriah", age: 32},
        { name: "Andrew", age: 35},
        { name: "Kerrigan", age: 9}
    ],
        otherState: "some other value;"
});
    const [otherState, setOtherState] = useState("another value");
    console.log(personsState, otherState);


    const switchNameHandler = () => {
        setPersonsState({
            persons: [
                {name: "Moriah Humphries", age: 32},
                {name: "Andrew", age: 35},
                {name: "Kerrigan", age: 10}
            ]
        });
    };

    return (
      <div className="App">
       <h1>Hi, I'm a React App</h1>
          <button onClick={switchNameHandler}>Switch Name</button>
        <Person
            name={personsState.persons[0].name} age={personsState.persons[0].age}/>
          <Person
              name={personsState.persons[1].name} age={personsState.persons[1].age}/>
          <Person
              name={personsState.persons[2].name} age={personsState.persons[2].age}>My hobbies: screaming</Person>
      </div>
    );
}


export default app;

// state = {
//     persons: [
//         { name: "Moriah", age: 32},
//         { name: "Andrew", age: 35},
//         { name: "Kerrigan", age: 9}
//     ]
// }
//
// switchNameHandler = () => {
//     // console.log("Was clicked!");
//     // DONT DO THIS this.state.persons[0].name = "Moriah Humphries";
//     this.setState({
//         persons: [
//             {name: "Moriah Humphries", age: 32},
//             {name: "Andrew", age: 35},
//             {name: "Kerrigan", age: 10}
//         ]
//     })
// }
