let a = +prompt('Enter first side');
let b = +prompt('Enter second side');
let c = +prompt('Enter third side');

if(isNaN(a) === true || isNaN(b) === true || isNaN(c) === true) {
    alert('input values should be ONLY numbers');
  }

if(a <= 0 || b <= 0 || c <= 0) {
  alert('A triangle must have 3 sides with a positive definite length');
} else {
    let exist = true;
    if(a + b < c || a + c < b || b + c < a) {
    exist = false;
    console.log('Triangle doesn’t exist');
    }
    if(a === b && a !== c || b === c && b !== a || a === c && b !== c) {
    console.log('Equilateral triangle');
    }
    if(a === b && a === c || a === b && b === c) {
    console.log('Isosceles triangle');
    }
    if (exist === true && a !== b && a !== c && b !== c) {
    console.log('Scalene triangle');
    }
  }
