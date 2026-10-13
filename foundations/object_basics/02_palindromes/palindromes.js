const palindromes = function (string) {
    const cleanString = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
    
    const reverseString =  string.replace(/[^a-zA-Z0-9]/g, "").split("").reverse().join("").toLowerCase()

    if(cleanString == reverseString){
       return true;
    } else {
       return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
