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

const  searchUser = function (lastName) {
    for (let i = 0; i < data.length; i++) {

        if (data[i].lastName.toLowerCase() === lastName.toLowerCase()){
            return `Пользователь ${data[i].firstName} ${data[i].lastName}, возраст ${data[i].age}`;
        }
    }
    return 'No results found for your request';
}

const form = document.getElementById('searchForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const input = document.getElementById('searchData');
    const paragraph = document.getElementById('searchResult');

    paragraph.innerText = searchUser(input.value);
})

// const f = data.find(el => el.lastName === 'Kutcher');
// console.log(f);