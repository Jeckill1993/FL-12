function makeNumber(str) {
    let strResult = '';
    for(let i = 0; i < str.length; i++) {
      if(isNaN(+str[i]) !== true && str[i] !== ' ') {
        strResult += str[i];
      }
    }
    return strResult;
  }
  let isNumber = makeNumber('fsf1hh3lknj67f5m4xz9vs0kda1xm7mx8');