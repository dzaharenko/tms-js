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
let arr = [12, 53, 20, 18, 22, 100, 43, 57, 50, 1];
let newArr = [];

function ThisArr(arr) {
    arr.forEach(function (item, i, array) {
        if (item == 0) {
            newArr.push('zero');
        } else if (item % 100 == 0) {
            newArr.push(item / 100 + 'zerozero');
        } else if (item % 10 == 0) {
            newArr.push(item / 10 + 'zero');
        } else {
            newArr.push(item);
        }
    });
    return newArr;
}

ThisArr(arr);
console.log(arr);
console.log(newArr);