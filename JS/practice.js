console.log("Hello Students");
const today = new Date();
console.log(today);
//(0°C × 9/5) + 32 = 32°F

function convertTemp(cel) {
    return (cel * 9/5) + 32
}
const x = convertTemp(5);
console.log(x);
let val = document;

val = document.body;
val = document.domain;
val = document.URL;
val = document.title;
val = document.documentElement;
//val = document.lastModified;

console.log(val);

//const parentEl = document.getElementById("parent-id")

const listEl = document.querySelector(".ul-list");
// console.log(parentEl);
console.log(listEl);
//const parentEl = document.querySelector(".parent");
//const listItems = parentEl.getElementsByTagName("div");
//const listItems = parentEl.getElementsByClassName("child");
//const listItems = document.getElementsByClassName("child");
//console.log(listItems.length);
//console.log(listItems);
//listItems[0].style.color = "red";
// querySelectorAll
const liItems = document.querySelectorAll(".li-item");
console.log(liItems);
liItems[0].style.color = "red";
for(let i = 0; i < liItems.length; i++) {
liItems[i].style.backgroundColor = "#eee";
}
//console.log(document);
const parentEl = document.querySelector(".parent");
const child = document.querySelector(".child-2");

//let val = parentEl.childNodes;
val = parentEl.children;
val = parentEl.children[0];
val = parentEl.firstElementChild;
val = parentEl.lastElementChild;
console.log(val);
const text = document.querySelector(".child-2");
text.innerHTML = "<h3>Modified Child Two</h3>";
//text.textContent = "Modified Child Two again";
//text.innerText = "Modified Child Two yet again";
text.style.color = "red";
text.style.fontSize = "35px";
//const parentEl = document.querySelector(".parent");
const text = document.querySelector(".child-2");

const newEl = document.createElement("div");
newEl.classList.add("child");
//newEl.classList.remove("child");
console.log(newEl);
const newText = document.createTextNode("This is some New Text");
newEl.appendChild(newText);

console.log(newText);
parentEl.appendChild(newEl);
parentEl.insertBefore(newEl, text);

//const parentEl = document.querySelector(".parent");
const text = document.querySelector(".child-2");

//text.style.display = "none";
//text.remove();

const h2 = document.querySelector("h1");
const btn = document.querySelector(".btn");


//function declaration
//function myfunc() {
  //  h2.textContent = "Text changed";
    //h2.style.background = "#eee";

//}
//btn.addEventListener("click", myFunc);

//function expression
 const myFunc = function () {
    h2.textContent = "Text changed";
    h2.style.background = "#eee";
  
};
 // btn.addEventListener("click", myFunc);
  //btn.onclick = function () {
    //h2.textContent = "Text changed";
    //h2.style.background = "#eee";
  
//};
//   btn.addEventListener("click", function(){
    //h2.textContent = "Text changed";
    //h2.style.background = "#eee";
//});
const form = document.querySelector("form");
const username = document.querySelector(".username");
const password = document.querySelector(".password");

form.addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    //console.log("Form submitted");
    //e.target;
//console.log(e.target.className);
//console.log(e.target.classList);
const usernameVal = username.value;
const passwordVal = password.value;
console.log(usernameVal, passwordVal);
}
//Event Bubbling and Delegation
// Event Bubbling
//document.querySelector(".btn").addEventListener("click", function() {
  //  console.log("Button Clicked");
//});

//document.querySelector(".content").addEventListener("click", function() {
  //  console.log("Content Clicked");
//});

//document.querySelector(".container").addEventListener("click", function() {
  //  console.log(" Container Clicked");
//});

//Event Delegation
const text = document.querySelector(".text");
const content = document.querySelector(".content");

content.addEventListener("click", function(e) {
    if (e.target.classList.contains("btn")) {
        text.textContent = "button 1 was clicked";
    }

if (e.target.classList.contains("btn-1")) {
    text.textContent = "button 2 was clicked";
}

if (e.target.classList.contains("btn-2")) {
    text.textContent = "button 3 was clicked";
}
});




//const btn = document.querySelector(".btn");
//const btn1 = document.querySelector(".btn-1");
//const btn2 = document.querySelector(".btn-2");
// Adding the below event listeners can be cumbersome that's where the evenet delegation comes in
//btn.addEventListener("click", function() {
  //  text.textContent = "Button 1  was clicked";
//});

//btn1.addEventListener("click", function() {
  //  text.textContent = "Button 2  was clicked";
//});
//btn2.addEventListener("click", function() {
    text.textContent = "Button 3  was clicked";
//});
//console.log(window);
//let val;
val = window.innerHeight;
val = window.innerWidth;

val = window.location;
val = window.location.pathname;
val = window.location.href;
val = window.history;
val = window.history.forward;
val = window.history.back;
val = window.navigator;

console.log(val);
// setTimeOut

// const greet = setTimeout(function() {
//     alert("Hello User!!!")
// }, 3000);

// // 1000ms = 1s
// // If we don't want the setTimeout to work and don't want to remove everything under the setTimeout we can use the clear timeout.
// clearTimeout(greet);

// we can use a function together with the set timeout
// function greetUser() {
//     alert("Hello User!!!");
// }
// const greet = setTimeout(greetUser, 3000);
const greet = setInterval(function() {
  alert("Hello User!!!!!!!");

}, 3000);

// clearInterval(greet);
// we can aswell make the setInterval metod a bit neater by calling in a function like we did in setTimeout method
const newtime = document.querySelector(".time1");

function displayTime() {
    const date = new Date();
    newtime.innerHTML = date.toLocaleTimeString();

}
setInterval (displayTime, 1000);
// function add(a, b) {
//     return a + b;
// }
// const calc = add(2, 2);

// console.log(calc);

//callback
function add(functionTwo, b) {
  return functionTwo() + b;
}

function functionTwo() {
  return 2;
}

const calc = add(functionTwo, 5);
console.log(calc);

//console.log(window);

//console.log(Object.getOwnPropertyNames(window));
//LOCAL STORAGE METHODS
// setItem():
//getItem():
//removeItem():
//clear():

// window.localStorage.setItem("key", "value");
window.localStorage.setItem("firstName", "Zuwaira");
localStorage.setItem("lastName", "Sadiq");
//Note Local storage can ionly store string data type to store another data type tou will have to convertr it to string using stringify method.

const person = {
    fullName: "Zuwaira Sadiq",
    location: "Kaduna",
};
localStorage.setItem("user", JSON.stringify(person));

const fruits = [ "Pineapple", "Mango", "Pawpaw"];
localStorage.setItem("fruits", JSON.stringify(fruits));
// Get Item from Local Storage
console.log(localStorage.getItem("firstName"));

//Remove item from local storage
localStorage.removeItem("fruits");
//Clear Local Storage
localStorage.clear();

localStorage.setItem("name", "Zuwaira");
localStorage.setItem("age", "25");
console.log(localStorage.key(1));

// Use Strict Method
//"use strict";
//const x = 5;
x = 5;
console.log(x);
//   function user() {
//     //"use strict";  
// }

function add(a, b) {
   return a + b;
}

console.log(add(2, 2));
//Variables
//const x = 10;
const y = 5;

// Add function
function add(a, b) {
    return a + b;
}
 //let val;
 val = add(x, y);
 console.log(val);

 //OOP

 const calculate = {
    x: 10, //properties
    y: 10,

    add: function () { //method
        return this.x + this.y;
    },
 };

 val = calculate.add();
 console.log(val);

 //prototype
//object constructors.

function Person (firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.currentYear = new Date().getFullYear();
}

//Greet Prototype
Person.prototype.greet = function () {
  return `Hello, my name is ${this.firstName} ${this.lastName}` ;
};

// Birth year protoptype
//  
// Create another object
function User(firstName, lastName, username, password) {
  Person.call(this, firstName, lastName)
  this.username = username;
  this.password = password;
}
User.prototype = Object.create(Person.prototype)

const user1 = new User("John", "Doe", "MrJohn", "John123");
console.log(user1.greet());

//ES6 Classes
class Person{
  constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
  }
  greet() {
      return `Hello, my name is ${this.firstName} ${this.lastName}` ;
  }
  static hello() {
      return "Hello"
  }
}

  const zino = new Person("Zino", "Akpareva", 27);
  const mary = new Person("mary", "Doe", 25);

  // console.log(mary);
  // console.log(zino.greet());
console.log(Person.hello);
  

