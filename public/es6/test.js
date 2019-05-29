'use strict';
const sentence = [
    {subject: 'Javascript', verb: 'is', object: 'great'},
    {subject: 'Tigers', verb: 'are', object: 'strong'},
];

function say({subject, verb, object}){
    console.log(`${subject} ${verb} ${object}`);
}

for(let s of sentence){
    say(s);
}