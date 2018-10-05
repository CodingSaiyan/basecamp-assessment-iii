import React from 'react';
import './Profile.css';

var person = {
    name: 'Nick',
    about: "I'm just a really cool guy sitting here trying to learn react.",
    goal: "To be the best developer ever!",
    img: "https://vignette.wikia.nocookie.net/dragonball/images/7/70/Bardock_-_Episode_of_Bardock_-_002v2.png/revision/latest?cb=20170910171037"
}

export class Profile extends React.Component {
    render() {
        return (
            <div>
                <h1>{person.name}</h1>
                <img src={person.img} />`
                <h3>About: </h3>
                <p>{person.about}</p>
                <h3>Hobbies include: </h3>
                <ul>
                    <li>Coding</li>
                    <li>Play hockey</li>
                    <li>Cook</li>
                    <li>Eat</li>
                    <li>Sleep</li>
                </ul>

                <h3>Goal</h3>
                <p>{person.goal}</p>
            </div>
        )
    }
}

