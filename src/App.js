import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: 'Moriah', age: 32 },
            { name: 'Kerrigan', age: 9 },
            { name: 'andrew', age: 35 }
        ],
        otherState: 'another value'
    }

    switchNameHandler = (newName) => {
        this.setState( {
            persons: [
                { name: newName, age: 32 },
                { name: 'Kerrigan', age: 9 },
                { name: 'Andrew', age: 35 }
            ]
        } )
    }

    nameChangedHandler = (event) => {
        this.setState( {
            persons: [
                { name: 'Moriah', age: 32 },
                { name: event.target.value, age: 9 },
                { name: 'Andrew', age: 35 }
            ]
        } )
    }

    render () {
        const style = {
            backgroundColor: 'grey',
            font: 'inherit',
            border: '1px solid black',
            padding: '5px',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This works!</p>
                <button
                    style={style}
                    onClick={() => this.switchNameHandler('Mo')}>Switch Name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age} />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, 'Max!')}
                    changed={this.nameChangedHandler} >My Hobbies: Screaming</Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age} />
            </div>
        );
    }
}

export default App;
