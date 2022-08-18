let number = Number(prompt('Digite um número de 1 a 10'));

let multiTable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


for (let i in multiTable) {
    console.log(`${number} * ${multiTable[i]} = ${number * multiTable[i]}`)
}
