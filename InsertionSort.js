function insertionSort(arrayToSort) {

    for (let i = 1; i < arrayToSort.length; i++) {
        let sortedElemID = i - 1
        let currentElem = arrayToSort[i]
        while (sortedElemID > -1 && currentElem < arrayToSort[sortedElemID]) {
            arrayToSort[sortedElemID+1] = arrayToSort[sortedElemID];
            sortedElemID--
        }
        arrayToSort[sortedElemID+1]=currentElem;
    }
    console.log(arrayToSort)
}

// insertionSort( [4, 6, 1, 23, 19, 8, 23, 1, 2,23,45,12,67,1,2,3,4545,67,45,324234,567567,234234,1,0,0,0,4,4,4,2,12,1,2,9])
insertionSort2( [4, 6, 1, 23, 19, 8, 23, 1, 2,23,45,12,67,1,2,3,4545,67,45,324234,567567,234234,1,0,0,0,4,4,4,2,12,1,2,9])
// insertionSort2([5,4,3,2,1]);

/**
 * @param {number[]} array
 */
function insertionSort2(array) {
    for(let index=1; index < array.length; index+=1) {
        const currentValue = array[index];
        let leftIndex = index-1;
        let leftValue = array[leftIndex];
        while (leftIndex>=0 && leftValue > currentValue) {
            leftIndex--;
            leftValue = array[leftIndex];
        }
        if (leftIndex+1 === index) {
            continue;
        }
        console.log("insert", index, "at", leftIndex+1);
        const sortedPart = array.slice(0,leftIndex+1);
        const unsortedPart = [...array.slice(leftIndex+1, index), ...array.slice(index+1, array.length)];
        array = [...sortedPart, currentValue, ...unsortedPart];
    }
    return array
}
