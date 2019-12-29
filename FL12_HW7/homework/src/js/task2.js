let enterQuestion;
let contQuestion;
let randNumber;
let max = 8;
let userNumber;
let i = 1;
let j = 1;
let win = 100;
let sumWin = 0;
let attempts = 3;
let addRange = 4;


enterQuestion = confirm('Do you want to play a game?');
if(enterQuestion) {
    contQuestion = true;
    while(contQuestion) {
        randNumber = (Math.random() * max).toFixed(0);
        console.log(randNumber);
userNumber = prompt('Choose a roulette pocket number from 0 to ' + max + '\n' + 
'Attempt left: ' + i + '\n' + 'Total price: ' + win * j + '$\nPossible prize on current attempt: ' + win * j + '$');
        if(userNumber === randNumber) {
            sumWin += win * j;
contQuestion = confirm('Congratulation, you won!   Your prize is:  ' + win * j + '$. Do you want to continue?');
            if(contQuestion) {
                max += addRange;
                j++;
            } else {
                alert('Thank you for your participation. Your prize is: ' + sumWin + '$');
                contQuestion = confirm('Do you want to play a game again?');
                if(contQuestion) {
                    sumWin = 0;
                    j = 1;
                    max = 8;
                } else {
                    alert('You did not become a billionaire, but can.');
                }
            }
        } else {
            while(i <= 2) {    
                i++;
                win /= 2;             
    userNumber = prompt('Choose a roulette pocket number from 0 to ' + max + '\n' + 
    'Attempt left: ' + i + '\n' + 'Total price: ' + win * j + '$\nPossible prize on current attempt: ' + win * j + '$');
                if(userNumber === randNumber) {
                    sumWin += win * j;
    contQuestion = confirm('Congratulation, you won!   Your prize is:  ' + win * j + '$. Do you want to continue?');
                    if(contQuestion) {
                        max += addRange;
                        j++;
                        break;
                    } else {
                        alert('Thank you for your participation. Your prize is: ' + sumWin + '$');
                        contQuestion = confirm('Do you want to play a game again?');
                        if(contQuestion) {
                           sumWin = 0;
                            j = 1;
                            max = 8;
                            break;
                        } else {
                            alert('You did not become a billionaire, but can.');
                            contQuestion = false;
                            break;
                        }
                    }
                } else {
                    contQuestion = false;
                }                  
            }  
            if (i === 2 && randNumber === userNumber || i === attempts && randNumber === userNumber) {
                win = 100;
                i = 1;
            } else {
                alert('Thank you for your participation. Your prize is: ' + sumWin + '$');
            contQuestion = confirm('Do you want to play a game again?');
            if(contQuestion) {
                sumWin = 0;
                j = 1;
                max = 8;
                i = 1;
                win = 100;
            } else {
                alert('You did not become a billionaire, but can.');
                contQuestion = false;
                break;
            }           
            }        
            
        }
    }
} else {
    alert('You did not become a billionaire, but can.');
}