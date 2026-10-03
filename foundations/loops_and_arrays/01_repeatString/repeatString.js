const text = "hey";

// repetir un texto

const repeatString = function(text, a) {
    let result = ""
    if(a < 0){
        return 'ERROR'
    } else {
        for (let index = 0; index < a; index++) {
            result += text
        }
    }

    return result
};



// Do not edit below this line
module.exports = repeatString;
