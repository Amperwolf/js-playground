// function merge(left, right) {
//     let sortedArr = [];
//     // console.log("left: " + left + " right: " + right)
//     while (left.length && right.length) {
//         if (left[0] < right[0]) {
//             sortedArr.push(left.shift());
//         } else {
//             sortedArr.push(right.shift());
//         }
//     }
//     // console.log("sortedArr: " + sortedArr + " left: " + left + " right " + right)
//     return [...sortedArr, ...left, ...right];
// }
// function mergeSort(arr) {
//     const half = arr.length / 2;
//     if (arr.length <= 1) {
//         return arr;
//     }
//     const left = arr.splice(0, half);
//     const right = arr;
//     // console.log("mergesortLeft: " + left + " mergesortRight: " + right)
//     return merge(mergeSort(left), mergeSort(right));
// }

// console.log(mergeSort(arr))


// let left = []
// let right = []
// let sortedArr = []
// let stack = []
// let index = 0

// function merg(arr){

//     left = arr.slice(0,arr.length/2)
//     right = arr.slice(arr.length/2)
//     stack[index] = [left, right, sortedArr]

//     while(stack[index][0].length > 1){
//         left = stack[index][0].slice(0, stack[index][0].length / 2);
//         right = stack[index][0].slice(stack[index][0].length/2);
//         index++;
//         stack[index]=[left, right, sortedArr];
//     }
// console.log(stack)
// }
// merg(array)

function mergeSort(arr){

    if(arr.length <= 1){
        return arr
    }
    let half = Math.floor(arr.length/2);
    let left = arr.slice(0,half);
    let rigth = arr.slice(half);
    mergeSort(left);
    mergeSort(rigth);

    let leftId = 0;
    let rigthId = 0;
    let arrId = 0;
    while(left.length > leftId && rigth.length > rigthId){
        if(left[leftId]<rigth[rigthId]){
            arr[arrId]=left[leftId];
            leftId++;
        }else{
            arr[arrId] = rigth[rigthId];
            rigthId++;
        }
        arrId++;
    }
    while(left.length > leftId){
        arr[arrId]=left[leftId];
        leftId++;
        arrId++;
    }
    while(rigth.length > rigthId){
        arr[arrId] = rigth[rigthId];
        rigthId++;
        arrId++;
    }

    return arr
}

let array = [20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]
mergeSort(array);
console.log(array)