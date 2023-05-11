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
}

//Create another class //Subclass

class User extends Person{
    constructor(firstName, lastName, username, password) {
        super(firstName, lastName);
        this.username = username;
        this.password = password;
    }
}

const user1 = new User("John", "Doe", "MrJohn", "John123");

;console.log(user1.greet());