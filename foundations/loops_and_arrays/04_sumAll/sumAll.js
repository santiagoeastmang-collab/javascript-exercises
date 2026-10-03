

const sumAll = function(start, end) {
    // para hacer que el primero siempre sea el mas pequeño
    if (start > end ) {
        [start, end] = [end, start];
    } else if (
        // para verificar si es un numero entero no float o si es String
        !Number.isInteger(start) ||
        !Number.isInteger(end) ||
        !Number(start) ||
        !Number(end)) {

        return 'ERROR'
    }

    const range = Array.from({ length: end - start + 1 }, (_, i) => start + i);
    if (range.every(num => num > 0 )) {
        return range.reduce((sum, current) => sum + current, 0);
    } else {
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = sumAll;
// && !Number.isInteger(num)