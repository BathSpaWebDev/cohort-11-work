// const vehicles = [
//     {
//         wheels: 4,
//         colour: 'red',
//         make: 'Lamborghini',
//         model: 'X56',
//         type: 'tractor'
//     },
//     {
//         wheels: 2,
//         colour: 'blue',
//         make: 'Ducati',
//         model: 'X56',
//         type: 'Motorbike'
//     }
// ]


// object literal syntax
const place = {
    city: "Madrid",
    population: 122,
    greet: function() {
        // console.log(`Greetings from ${this.city}`);
        return `Greetings from ${this.city}. It has ${this.population} people`;
    },
};


const element = document.querySelector('.box');


// create the blueprint for the object
function Person(first, last, age, eye) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eye;
}

function createNewObject(event) {
    console.log(event.target)
    const firstName = document.getElementById('first').value;
    const lastName = document.getElementById('last').value; 
    const age = document.getElementById('age').value; 
    const eyeColor = document.getElementById('eye').value;  
    
    const newPerson = new Person(firstName, lastName, age, eyeColor);

    element.innerHTML = `
        <p>${newPerson.firstName}</p>
        <p>${newPerson.lastName}</p>
        <p>${newPerson.age}</p>
        <p>${newPerson.eyeColor}</p>
    `;
}

// const person1 = new Person('Diana', 'Jones', 33, 'Blue');
// const person2 = new Person('Muhammed', 'Ali', 26, 'Blue');
// const person3 = new Person('Sarah', 'Jessica-Parker', 42, 'Brown');
// const person4 = new Person('Enrique', 'Iglesias', 22, 'Grey');





// let inner;

// for (let i = 0; i < vehicles.length; i++) {
//     inner += `
//         <div class="box__inner bg-yellow-400">
//             <h1 class="text-4xl">${vehicles[i].make} ${vehicles[i].model}</h1>
//         </div>
//     `
// }

// element.innerHTML = place.greet();
// element.innerHTML = person1.eyeColor;


