const array1 = [
    {
        name: "nada",
        age: 80,
        part: "soft"
    },
    {
        name: "Jana",
        age: 30,
        part: "high"
    },
    {
        name: "Aya",
        age: 28,
        part: "soft"
    }
]
const array2 = [];
const myArray = (item) => {
    if (item.age > 28) {
        array2.push(array1)
        console.log(item.name);
        console.log(item)
    }

}
array1.forEach(myArray);