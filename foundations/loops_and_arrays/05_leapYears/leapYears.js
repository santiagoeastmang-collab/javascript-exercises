// Leap years

// leap year is a year which is both evenly divisible by 4 and not divisible by 100 or just is evenly divisible by 400.

/**
* 
*  1800 year is not a leap year because it is divisible by 4, but also by 100 (and not by 400);
* 
* 
*   caso para 1800
*       si (numero % 4 === 0 && numero % 100 === 0 && numero % 400 != 0)
*           devuelve false
*       si no 
*           devuelve true
*
* 
1996 year is a leap year because it is divisible by 4 and not by 100;

1996 % 4 = 0
1996 / 100 = 19.96
1996 / 400 = 4,9

caso para 1996
*  si (numero % 4 === 0 && numero % 100 != 0 && numero % 400 != 0)
*      devuelve true
*  si no 
*      devuelve false
*
2000 year is a leap year because it is evenly divisible by 400.

2000 % 4   = 0
2000 % 100 = 0
2000 % 400 = 0

caso para 2000
*  si (numero % 4 === 0 && numero % 100 === 0 && numero % 400 === 0)
*      devuelve true
*  si no 
*      devuelve false
 */

const leapYears = function(numero) {
    if ((numero % 4 === 0 && numero % 100 === 0 && numero % 400 === 0) ||
        (numero % 4 === 0 && numero % 100 != 0 && numero % 400 != 0)) {
            return true
    } else if (
            (numero % 4 === 0 && numero % 100 === 0 && numero % 400 != 0) ||
            (numero % 4 != 0 && numero % 100 != 0 && numero % 400 != 0)) {
        return false
    } else {
        console.log("cant' say ")
    }

    // simplified version declarando las variables/reglas de los años
    // const divisibleByFour = numero % 4 === 0;
    // const divisibleByFourHundred = numero % 400 === 0;
    // const isCentury = numero % 100 === 0;

    // if (divisibleByFour && (divisibleByFourHundred || !isCentury )) {
    //         return true
    // } else {
    //     return false
    // }
};


// Do not edit below this line
module.exports = leapYears;
