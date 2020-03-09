# tms-js
Lecture 
https://slides.com/andrewbogomolov/iterators

Homework
## 1. Покрасить абзацы по клику
- Даны 3 абзаца:

```
<p id="text1">Text 1</p>
<p id="text2">Text 2</p>
<p id="text3">Text 3</p>
```

- Даны цвета:

```
const colors = {
    data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
    [Symbol.iterator]() {
        // ваш код
    }
}
```

- По первому нажатию на абзац он должен покраситься в первый цвет из массива, по второму нажатию - во второй и так далее;
- Все абзацы работают независимо;
- Необходимо использовать итераторы (`Symbol.iterator`) и идентификаторы (`Symbol()`) для идентификации счетчика;
- Подсказка! Перебор `colors` должен должен быть бесконечным. Для вызова используйте `next()`. Т.е. ваш `listener` должен иметь примерно такой вид:
```
const changeStyle = id => event => {
  event.target.style.color = colors.next(id).value;
};
```

## 2. Отсортировать массив способом Пузырёк
- дан массив:
```
const data = [4, 56, 33, 42, 15]
```
- создать функцию `bubbleSort`, которая отсортирует массив способом Пузырёк
- [теория](https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0_%D0%BF%D1%83%D0%B7%D1%8B%D1%80%D1%8C%D0%BA%D0%BE%D0%BC)

## 3. Ознакомиться с методами массивов
- [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
- [indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
- [includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
- [sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

вспомнить:
- `shift`
- `unshift`
- `push`
- `pop`
- `slice`
- `splice`
- `join`
