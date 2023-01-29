
let num = 4;

function selectElement(num) {
    var selectedElement = document.querySelector(`:nth-child(${num})`);
    console.log(selectedElement);
    return selectedElement;
  }
console.log(num)