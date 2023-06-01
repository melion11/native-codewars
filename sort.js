const names = ['Donald', 'Bob', 'Alex']

// console.log(names.sort())

const names_2 = ['Donald', 'bOB', 'Alex', 'alex', 'Юрий', 'игорЬ', '01gke']

// console.log(names_2.sort())

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 22,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 24,
        isMarried: true,
        scores: 90
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
    {
        name: "alex",
        age: 22,
        isMarried: true,
        scores: 89
    },
];

console.log(students.sort((a,b)=>a.age - b.age))