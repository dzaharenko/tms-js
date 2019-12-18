// №1
// let manager = 'Вася';
// let name = 'Вася';
// let currentUser = 'Вася';
console.log(`Задание 1`);
let manager, name, currentUser;
name = 'Вася';
manager = name;
currentUser = manager;

console.log(currentUser);

// №2
console.log(`Задание 2`);
console.log( `hello ${1}` );
console.log( `hello ${"name"}` );
console.log( `hello ${name}` );

// №3
console.log(`Задание 3`);
console.log(" \n \n" - 2);
console.log(true + false);
console.log(false + false);
console.log(6 / "3");
console.log("2" * "3");
console.log(7 / 0);
console.log(4 + 5 + "px");
console.log("" + 3 + 0);
console.log("" - 4 + 0);
console.log("1" - 2);
console.log("3px" - 2);
console.log("  -9  " + 5);
console.log("  -9  " - 5);
console.log(null + 1);
console.log(undefined + 1);

// №4
console.log(`Задание 4`);
console.log(2 > 4);
console.log(undefined == null);
console.log(undefined === null);
console.log(false == 0);
console.log(false == "");
console.log(false === "");

// №5
console.log(`Задание 5`);
const animal = {
    typeof: 'dog',
    weight: '40',
    color: 'white',
    speed: '20',
}
delete animal.weight;

console.log(animal);