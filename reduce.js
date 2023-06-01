const students = [
    {
        id: 1,
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        id: 2,
        name: 'Alex',
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        id: 3,
        name: 'Nick',
        age: 20,
        isMarried: false,
        scores: 120,
    },
    {
        id: 4,
        name: 'John',
        age: 19,
        isMarried: false,
        scores: 100,
    },
];

const getMarried = (student) => {
   return  student.isMarried;
}

const newFilter = (arr, conditionFn) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (conditionFn(arr[i])) {
            result.push(arr[i])
        }
    }
        return result;
}



