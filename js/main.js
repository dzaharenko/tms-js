// classwork
const palindrome = str => {
    str = str.toLowerCase();
    return str === str.split('').reverse().join('');
}

console.log(palindrome('шалаш'));

// №1
function min(a,b) {
    return a < b ? a : b;
}
console.log(min(-2, 5));

function max(a,b) {
    return a > b ? a : b;
}
console.log(max(-2, 5));

function min(a,b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
console.log(min(-2, 5));

function max(a,b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
console.log(max(-2, 5));

// №2