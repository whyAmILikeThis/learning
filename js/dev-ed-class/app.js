// video #1 hello world
// console.log('HIIIII');
//------------------------------------------------
//video #2 variables

//const num = 666;

// var life = 100;
// var name = "bleb";
// console.log(name, life)

// var person = {life: 100, name: 'bleb'}
// console.log(person.name, person.life)

// var ready = true;
// if (ready) {
//     console.log('ready')
// } else {
//     console.log('not ready')
// }

//------------------------------------------------
//video #3 functions

// const name = "My name";

// function adder(x1, x2){
//     return x1 + x2;
// }

// function toUpper(text) {
//     // const upperCased = text.toUpperCase();
//     // console.log(upperCased);
//     console.log(text.toUpperCase());

// }

// function logger(){
//     console.log('Party time');
// }


// console.log(adder(1,3));
// toUpper(name);
// logger();

//these examples below are the same
// // const toUpper = function(){
// //     function body
// // }
//shorter version of function
// // const toUpper = () => {
// //     function body
// // }

//------------------------------------------------
//video #4 strings

// const myAge = 27;
// const yourAge = 25;
// console.log(myAge + yourAge);

// const greeting = 'hello my name is ';
// const name = 'Pedro';
// console.log(greeting + name);
// console.log(`Hello it's me and my name is ${name}`);
// console.log(`Hello my name is ${name} and I am ${myAge} years old`);
// var par = `Hello my name is ${name} and I am ${myAge} years old`;

// function parFunction() {
//     parHTML = document.getElementById("par");
//     if (parHTML.innerHTML == 'click me!' || parHTML.innerHTML == 'click me again!') {
//         parHTML.style.color = "red";
//         document.getElementById("par").innerHTML = par;
//     } else {
//         document.getElementById("par").innerHTML = 'click me again!';
//         parHTML.style.color = "blue";
//     }
// }
//------------------------------------------------
// video #5 if statements

// const age = 18;

// if (age === 18) { //triple === are numbers, double == are strings
//     console.log('you are good to go');
// } else if (age <= 10) {
//     console.log('kkkkkiiiiidddddoooooo!!!!')
// }
// else {
//     console.log('you can skiddadle kiddo');
// }

// const dice1 = 6;
// const dice2 = 3;

// if (dice1 === 6 && dice2 === 6) {
//     console.log("wow you rolled double")
// }
//------------------------------------------------
// video #6 arrays

// const name = 'Pedro';
// const schedule = ['wake up', 'eat', 'run', 'netflix'];

// schedule.pop();
// schedule.push('nap time');
// schedule.shift();
// schedule.unshift('have more sleep');

// console.log(schedule.indexOf('run'));

// for (let i = 0; i < schedule.length; i++) {
//     console.log(schedule[i]);
// }
//------------------------------------------------
// video #7 objects and "this"

// const user = {
//     name: 'Pedro',
//     age: 27,
//     married: false,
//     purchases: ['phone', 'car', 'laptop'],

//     sayName: function() {
//         console.log(this.name);
//     },
//     sayAge: function() {
//         console.log(this.age);
//     }
// };

// user.sayName();
// user.sayAge();


// for (let i = 0; i < user.purchases.length; i++) {
//     console.log(user.purchases[i]);
// }

// for (stuff of user.purchases) {
//     console.log(stuff);
// }

// function apples() {
//     console.log('apple');
// }

// window.apples();

// console.log(this);
//------------------------------------------------
// video #8 for and while

// const names = ['Pedro', 'Maria', 'Isabela', 'Jose', 'Juan', 'Rodrigo'];

// for (name of names) {
//     if (name === 'Maria') {
//         console.log(`Hello ${name}`);
//         //break;
//         continue;
//     }
//     console.log(name);
// }

// let loading = 0;

// while (loading < 100) {
//     console.log('still loading');
//     loading++;
// }
//------------------------------------------------
// video #9 DOM manipulation

// const text = document.querySelector('h1');
const text = document.querySelector('h1');
// const changeColor = document.querySelector('.changeColor');

// text.style.color = 'red';
// text.style.backgroundColor = 'olive';

//text.classList.add('change');

//callback function
// changeColor.addEventListener('click', function() {
//     text.classList.toggle('change');
// })

const userList = document.querySelector('.name-list');
const userInput = document.querySelector('.list-input');
const addListBtn = document.querySelector('.addListBtn');
const removeListBtn = document.querySelector('.removeListBtn');

addListBtn.addEventListener('click', function() {
    //create an li oout of thin air
    const newLi = document.createElement('LI');
    const liContent = document.createTextNode(userInput.value);
    //add the input value inside that new li
    newLi.appendChild(liContent);
    //attaching the li to the user list
    userList.appendChild(newLi);
})

//remove given name from the list
removeListBtn.addEventListener('click', function() {
    const liContent = document.querySelectorAll('.name-list li');
    for (user of liContent) {
        if (user.innerHTML === userInput.value) {
            userList.removeChild(user);
        };
    };
})

// const userList = document.querySelectorAll('.name-list li');
// for (user of userList) {
//     user.addEventListener('click', function() {
//         this.style.color = 'red';
//     })
// }