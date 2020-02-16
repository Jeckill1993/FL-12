let a = prompt('Enter a');
let b = prompt('Enter b');
let c = prompt('Enter c');

const TWO = 2;
const FOUR = 4;

if (isNaN(parseInt(a, 10)) === false && isNaN(parseInt(b, 10)) === false && isNaN(parseInt(c, 10)) === false) {
  let discriminant = Math.pow(b, TWO) - FOUR * a * c;
  if (discriminant > 0) {
    let value1 = Math.round((-b + Math.sqrt(discriminant)) / (TWO * a));
    let value2 = Math.round((-b - Math.sqrt(discriminant)) / (TWO * a));
    console.log(` value1 = ${value1} \n value2 = ${value2}`);
  } else if (discriminant === 0) {
    let value1 = Math.round(-b / (TWO * a));
    console.log(`value1 = ${value1}`);
  } else {
    console.log('No solution');
  }
} else {
  alert('You wrote incorrect value');
}
