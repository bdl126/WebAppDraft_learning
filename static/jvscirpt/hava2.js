// class


class Person {
    constructor(firstName, lastName, dob){
        this.firstname =firstname
        this.lastname =lastname
        this.dob =new Date(dob)
    }

    getBirthYear () {
        return this.dob.getFullYear();
    }
    
    getFullName () {
        return `${this.firstname} ${this.lastname}`
    }
    
}

console.log("hava2.js")

const person11 = new Person ('John', 'Doe','4-3-1980');
const person22 = new Person ('Marie', 'Smith','6-4-1920');

console.log(person22.dob.getFullYear())
console.log(person22.getBirthYear())

console.log(person11)