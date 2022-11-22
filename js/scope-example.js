// console.log(myName);

 const myName = '14';

 console.log( typeof(myName) );

const elementsToChange = document.querySelectorAll('.box__inner h1');

function changeText(el) {
    el.innerHTML = `Some random ${myName}\'s text`; // String literals
}

for (let i = 0; i <elementsToChange.length; i++){
    // const random = 'some random string inside the for loop';
    changeText(elementsToChange[i]);
}

// if (document) {
//     // console.log('hello');
//     var myName = 'Olly';
// }

// console.log(myName);



// elementToChange.innerHTML = 'Bla bla';

