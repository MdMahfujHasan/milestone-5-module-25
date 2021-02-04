class Person {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const person1 = new Person('Md. Mahfuj', 'Hasan', 5000); // class --> new --> create an object form class
console.log(person1);
const person2 = new Person('Raju', 'Ahmed', 6000);
console.log(person2);

// function Person1(firstName, lastName, salary) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.salary = salary;
// }
// const oldPerson = new Person1('Grand', 'Father', 2000);
// console.log(oldPerson); --> *used before*