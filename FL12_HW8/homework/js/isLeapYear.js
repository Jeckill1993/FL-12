function isLeapYear(str) {
    let date = new Date(str);
    if(date.getFullYear % 4 === 0 && date.getFullYear / 100 === false || date.getFullYear % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(isLeapYear('2020-01-01 00:00:00'));