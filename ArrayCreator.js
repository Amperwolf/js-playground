function createArr(length, maxNumb){
const array = Array.from(Array(length), () => Math.floor(Math.random() * maxNumb))
return array
}
console.log( createArr(20, 15))