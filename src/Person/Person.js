import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I'm {props.name} and I am {props.age}!</p>
            <p>{props.children}</p>
        </div>
    )
};

export default person;