const array = [];

const toRemove = "";

const removeFromArray = function(array, ...toRemove) {

    newArray = array.filter(function(element) {
        return !toRemove.includes(element)
    })
    // newArray = array.filter(element => element != toRemove.includes(element))
    // este no funciona porque esta comparando un elemento con buleano true/false y no es posible
    
    // newArray = array.filter(element => !toRemove.includes(element))
    // por eso se compara directament 
    
    /**
     * toRemove.includes(element):

        Devuelve true si element está en toRemove.
        Devuelve false si element no está en toRemove.
        !toRemove.includes(element):

        Devuelve false si element está en toRemove (porque includes() devuelve true y !true es false).
        Devuelve true si element no está en toRemove (porque includes() devuelve false y !false es true).
     */

    return newArray;
};


// Do not edit below this line
module.exports = removeFromArray;
