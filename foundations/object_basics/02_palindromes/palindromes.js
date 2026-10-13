const palindromes = function (string) {
    const cleanString = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
    
    const reverseString =  string.replace(/[^a-zA-Z0-9]/g, "").split("").reverse().join("").toLowerCase()

    return cleanString === reverseString
};

// Do not edit below this line
module.exports = palindromes;
