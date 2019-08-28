/*console.log("hello world");
console.error("this is a error")
console.warn("this is a error")*/

// let , const  ---  pour les variale
// string, numbers boolean null, undefined 

let score = 10;
const name = 'John';
const string = 'Hello world';
const age =30
const isCool = true;
const rating = 4.3;
const x = null;
const y = undefined // let z; initialise a undefine

console.log("section of variables");
console.log(typeof y);

// concatenation

console.log("mon nom est " + name + "et mon age est "+ age);
 
// template string

console.log(`my name is ${name} et mon age est ${age}`)

console.log (name.length);
console.log (name.toUpperCase());
console.log (name.toLowerCase());
console.log (string.substring(0,5).toUpperCase());
console.log (string.split(''));  //string.split('')  (string to array)
const s = 'technology, computer, it, code'
console.log (s.split(', '));  


// array - variable that hold multiple values
console.log ("section of array");  
const number = new Array(1,2,3,4) // le mot "new" est un constructeur

const fruits = new Array('apple',null ,3,'orange')
console.log (number)
fruits.push("mangos")
console.log (fruits)
fruits.unshift("strawberrries")
fruits.pop()
console.log (fruits)
console.log (Array.isArray('fruits'))
console.log (Array.isArray(fruits))
console.log (fruits.indexOf('apple'))

console.log (fruits[0])
console.log (fruits[2])

const person = {
    firstname: 'john',
    lastname: 'Doe',
    ages: 30,
    Hobbies: ['music','movies',10],
    address :{
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}
console.log(person.Hobbies[1], person.address.city)


// pulling information of person object
const { firstname,ages,Hobbies, lastname, address:{city}} = person
console.log(ages)

person.email = 'john@ok.ca'
console.log(person.email)

const todos= [
    {
        id:1,
        text: 'take out trahs',
        isCompleted: true
    },
    {
        id:2,
        text: 'meeting with boss',
        isCompleted: true
    },
    {
        id:1,
        text: 'dentist appoitment',
        isCompleted: false
    },
]

console.log(todos[1].text)

// json format

const todosJSON= JSON.stringify(todos)
console.log(todosJSON)

// for loop
for (let i =0; i< 10; i++){
    console.log(`for loop number : ${i}`)
}

// while loop

let i=0 
while(i<10){
    console.log(`While loop number: ${i}`)
    i++
}


// for loop for and array
for (let i =0; i< todos.length; i++){
    console.log(`task ${i} is ${todos[i].text}`)
}
//      x     of  y    -----     x can be anything
for(let todo of todos){
    console.log(todo.id)
}
// foreach , map, filter
todos.forEach(function(todo){
    console.log(todo.text);

})
// retourn un element --map
const todoText = todos.map(function(todo){
    return todo.text;

})
console.log(todoText)
// retoune une structure ayant l'element voulu
//                          filter
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted ===true;
}).map(function(todo){
    return todo.text

})

console.log(todoCompleted)


const a ='10';

// == pour la valeur string ou numeric

// === pour la valeur et le type


if (a == 10){
    console.log("a is 10")
}else if (a> 10) {
    console.log('a is greater than 10')   
}else{
 console.log('a is less than 10')   
}

if (a === 10){
    console.log("a is numeric value")
}
//function


function addNUms(num1= 1 , num2 =2){
    return num1+num2
    
}

const addNums2 = (num1=1, num2= 2) => num1 +num2;

const addNums3 = (num1=1, num2= 2) => {
    return num1 +num2;
}
console.log(addNUms(5,4))
console.log(addNums2(5,4))
console.log(addNums3(5,4))

todos.forEach((todo) => console.log(todo))


// construction function
function people(firstname, lastname, dob){
    this.firstname =firstname
    this.lastname =lastname
    this.dob =new Date(dob)
}

people.prototype.getBirthYear = function () {
    return this.dob.getFullYear();
}

people.prototype.getFullName = function () {
    return `${this.firstname} ${this.lastname}`
}

const person1 = new people ('John', 'Doe','4-3-1980');
const person2 = new people ('Marie', 'Smith','6-4-1920');

console.log(person2.dob.getFullYear())
console.log(person2.getBirthYear())

console.log(person1)



