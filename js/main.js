'use strict';

const data = [
    {
        firstName: 'Ashton',
        lastName: 'Kutcher',
        age: 40,
    },
    {
        firstName: 'Bradley',
        lastName: 'Pitt',
        age: 54,
    },
    {
        firstName: 'Hannah',
        lastName: 'Dakota',
        age: 24,
    },
];

// const f = data.find(el => el.lastName === 'Kutcher');
// console.log(f);

document.getElementById('input').addEventListener('change', onChange);

function onChange() {
    const text = document.getElementsByTagName("input")[0];
    const val = text.value;

    data.forEach(function(item) {
        if (item.lastName.includes(val)) {
            console.log(`${item.firstName} ${item.lastName}, ${item.age} лет`);
        } else {
            console.log('No results found for your request');
        }
    });
}