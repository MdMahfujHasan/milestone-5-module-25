const person1 = {
    firstName: 'Mahfuj',
    lastName: 'Hasan',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, charity, tax){
        console.log(this);
        this.salary = this.salary - amount - charity - tax;
        return this.salary;
    }
}

console.log(person1);
console.log(person1.firstName);
person1.chargeBill(100);
console.log(person1.salary);

const  person2 = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 8000
}

const  person3 = {
    firstName: 'Raju',
    lastName: 'Ahmed',
    salary: 7000
}

person1.chargeBill();
const person2ChargeBill = person1.chargeBill.bind(person2);
person2ChargeBill(200);
console.log(person2.salary);
console.log(person1.salary);

const person3ChargeBill = person1.chargeBill.bind(person3);
person3ChargeBill(300);
console.log(person3.salary);

person1.chargeBill.call(person2, 400, 500, 600);
console.log(person2.salary);
// console.log(person2.salary);
person1.chargeBill.call(person3, 700, 800, 900);
console.log(person3.salary);

// person1.chargeBill.apply(*value of this*, [&chargeBill parameters*]);
person1.chargeBill.apply(person2, [1000, 1100, 400]);
console.log(person2);

person1.chargeBill.apply(person3, [1000, 1100, 400]);
console.log(person3);