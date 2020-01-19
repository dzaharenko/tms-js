// №1
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

const colors = {
    data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
    [Symbol.iterator]() {
        return this;
    },
    next(id) {
        if (this.id > undefined) {
            this.id = 0;
        }
        if (this.id < this.data.length) {
            return {
                done: false,
                value: this.data[this.id++]
            };
        } else {
            this.id = 0;
            return {
                done: true
            };

        }
    }
};


const changeStyle = id => event => {
    event.target.style.color = colors.next(id).value;
};


text1.addEventListener('click', changeStyle(Symbol()));
text2.addEventListener('click', changeStyle(Symbol()));
text3.addEventListener('click', changeStyle(Symbol()));

// №2
const data = [4, 56, 33, 42, 15];

function bubbleSort(arr) {
    for (let a = arr.length - 1; a > 0; a--) {
        for (let i = 0; i < a; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(data);
console.log(bubbleSort(data.slice()));




