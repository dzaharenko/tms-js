// №1
function sum(a) {
    return function(b) {
        return a + b;
    }
}

console.log(sum(5)(2));

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

function TextColor(el) {
    for (let i = 0; i <= colors.length; i++) {
    return function() {
        el.style.color = colors[i];
        i++;
        if (i == colors.length) {
            i = 0;
            }
        }
    }
}

text1.addEventListener('click', TextColor(text1));
text2.addEventListener('click', TextColor(text2));
text3.addEventListener('click', TextColor(text3));

