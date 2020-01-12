
console.log(convert(1, '3'));

function convert(...args) {
    let result = [];

    for (let i = 0; i < args.length; i++) {
        if(typeof args[i] === 'string') {
            result.push(+args[i]);
        } else {
            result.push(String(args[i]));
        }
    }

      return result;
}


executeforEach([1, 2, 3], function(el) { 
    console.log(el * 2); 
});

function executeforEach(arr, func) {

    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}


console.log(mapArray([2, '3'], function(el) {
    return el + 3;
}));

function mapArray(arr, func) {
    let arrResult = [];

    executeforEach(arr, function(elem) {
        arrResult.push(func(+elem));
    })
    return arrResult;
}


console.log(filterArray([2, 3, 5], function(el){ 
    return el % 2 === 0
}));

function filterArray(arr, func) {
    let arrResult = [];

    executeforEach(arr, function(elem) {
        if(func(elem)) {
            arrResult.push(elem);
        }
    })
    return arrResult;
}
    

console.log(flipOver('hey world'));

function flipOver(str) {
    let result = '';

    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }

    return result;
}


console.log(makeListFromRange([2, 5]));

function makeListFromRange(arr) {
    let result = [];

    for (let i = arr[0]; i <= arr[1]; i++) {
        result.push(i);
    }

    return result;
}


const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
  ];
console.log(getArrayOfKeys(actors, 'name'));

function getArrayOfKeys(obj, key) {
    let arrResult = [];
    executeforEach(obj, function(elem) {
        arrResult.push(elem[key]);
    })
    return arrResult;
}
 

console.log(substitute([58, 14, 48, 2, 31, 29]));

function substitute(arr) {
    let arrResult = [];

    arrResult = mapArray(arr, function(elem) {
        if(elem < 30) {
            return '*';
        } else {
            return elem;
        }
    })

    return arrResult;
}


const date = new Date(2019, 0, 2); 
console.log(getPastDay(date, 2));

function getPastDay(date, days) {
    const Hours = 24;
    const Minutes = 60;
    const Seconds = 60;
    const milliSeconds = 1000;
    let result = date - days * Hours * Minutes * Seconds * milliSeconds;
    return new Date(result).getDate();
}


console.log(formatDate(new Date()));

function formatDate(date) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();

    function checkNumber(num) {
        if (num < 10) {
            return '0' + num;
        }
        return num;
    }
    return `${year}/${month}/${day} ${checkNumber(hour)}:${checkNumber(minute)}`;
}



  
  
  
