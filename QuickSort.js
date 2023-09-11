const arr = [1, 0, 6, 12, 6, 8, 5,
    7, 5, 2, 13, 14, 8, 2,
    3, 9, 14, 7, 12, 12];

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let controlId = Math.floor(arr.length / 2);
    let more = [];
    let less = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === controlId) {
            continue
        }
        if (arr[i] < arr[controlId]) {
            less.push(arr[i])
        } else {
            more.push(arr[i])
        }
    }

    return [...quickSort(less), arr[controlId], ...quickSort(more)]
}
console.log(quickSort(arr))