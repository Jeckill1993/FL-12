let a = prompt('Enter number for a');
let b = prompt('Enter number for b');
let c = prompt('Enter number for c');
let discriminant;
let value1, value2;
const four = 4;
const two = 2;

if(isNaN(+a + +b + +c) === true || +a + +b + +c === 0 || +a === 0) {
  alert('Invalid input data');
} else {
  discriminant = Math.pow(b, two) - four * a * c;
}

if(discriminant === 0) {
 value2 = Math.round(-b / (two * a));
 value1 = value2;
 console.log('x = ' + value1);
}

if(discriminant > 0) {
  value1 = Math.round((-b + Math.sqrt(discriminant)) / (two * a));
  value2 = Math.round((-b - Math.sqrt(discriminant)) / (two * a));
  console.log('x1 = ' + value1);
  console.log('x2 = ' + value2);
}

if(discriminant < 0) {
  console.log('no solution');
}
