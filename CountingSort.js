function countSort(arr){
    let k = Math.max(...arr) + 1
    let counter = Array.from(Array(k), ()=> 0)
    let sortedArr = []
    for(let i = 0; i < arr.length; i++){
        counter[arr[i]]++
    }
    for(let i = 0; i < counter.length; i++){
        while(counter[i] !== 0){
            sortedArr.push(i)
            counter[i]--
        }
    }
   return sortedArr
}
var arr = [2,1,5,6,3,2,9,10000000]
countSort(arr)