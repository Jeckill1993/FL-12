let a = parseFloat(prompt('Enter value'));
let b = parseFloat(prompt('Enter value'));
let c = parseFloat(prompt('Enter value'));

if (isNaN(a) || isNaN(b) || isNaN(c)) {
  alert('input values should be ONLY numbers');
} else {
  if (a === 0 || b === 0 || c === 0) {
    alert('A triangle must have 3 sides with a positive definite length');
  } else if (a + b <= c || a + c <= b || b + c <= a) {
    alert('Triangle doesn’t exist');
  } else {
    if (a === b && b === c) {
      alert('Equilateral triangle');
    } else if (a === b || b === c || a === c) {
      alert('Isosceles triangle');
    } else {
      alert('Scalene triangle');
    }
  }
}
