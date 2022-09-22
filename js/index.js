const objs = [
    {
        'name': 'Igor',
        'age': 24,
        'is_studying': true,
        'profession_details': {
            'profession': 'Programador',
            'company': 'Company X'
        },
        'hobbies': [
            'Progamar',
            'Jogar CS',
            'Academia'
        ],
    },
    {
        'name': 'Pedro',
        'age': 31,
        'is_studying': false,
        'profession_details': {
            'profession': null,
            'company': 'null'
        },
        'hobbies': [
            'Correr',
            'Jogar lol',
            'Assistir filme'
        ],
    },
]

//JSON
//Converter objeto para JSON
const jsonData = JSON.stringify(objs)
console.log(typeof jsonData)

//Converter JSON para objeto
const objData = JSON.parse(jsonData)
console.log(objData)
objData.map((people) => {
    console.log(people.name)
})

document.querySelector('body').innerHTML = jsonData