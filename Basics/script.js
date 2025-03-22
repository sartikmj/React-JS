var root = document.querySelector('#root'); //select the element with root id

var h1 = document.createElement('h1'); //use to create any html element in js

// console.log(h1); // <h1></h1>


//to write something in that element
h1.innerHTML = 'Hello from JS';

root.appendChild(h1); //to add the element to the root element
