function isBigger (num1, num2) {
    return num1 > num2;
}
let bigger = isBigger(2, 1);


function isSmaller(isBigger) {
    if(isBigger) {
        return false;
    }
    else {
        return true;
    }
}
let smaller = isSmaller(bigger);