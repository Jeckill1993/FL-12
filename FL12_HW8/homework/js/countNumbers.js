function makeNumber(str) {
    let strResult = '';
    for(let i = 0; i < str.length; i++) {
      if(isNaN(+str[i]) !== true && str[i] !== ' ') {
        strResult += str[i];
      }
    }
    return strResult;
  }
  let isNumber = makeNumber('5h7h9');
  console.log(isNumber);
  
  
  
  function countNumbers(str){
    let arr = str.split('');
    let obj = {};
    for(let i = 0; i < arr.length; i++){
      let num = arr[i];
      if(obj[num] !== undefined) {
        ++obj[num];
      } else {
        obj[num] = 1;
      }
    }
    return obj;
  }
  
  let objCountNumbers = countNumbers(makeNumber('5h7h9'));
  console.log(objCountNumbers);