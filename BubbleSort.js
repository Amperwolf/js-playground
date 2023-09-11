function bubbleSort(arrayToSort) {
    let unsortedSize = arrayToSort.length
    while (unsortedSize !== 0) {
        for (let i = 0; i < unsortedSize - 1; i++) {
            let leftElemet = arrayToSort[i];
            let rightElement = arrayToSort[i + 1];
            if (leftElemet > rightElement) {
                [arrayToSort[i], arrayToSort[i + 1]] = [arrayToSort[i + 1], arrayToSort[i]]
            }
        }
        unsortedSize--;
    }
    return arrayToSort
}

bubbleSort([4, 6, 1, 23, 456, 8, 23, 1, 2])