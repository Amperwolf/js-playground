function selectionSort(arrayToSort){
   let firstUnsortedElemID = 0;
   let numOfUnsElements = arrayToSort.length;
   let minimum = arrayToSort[firstUnsortedElemID]
   let smallestElementID = 0
   while(numOfUnsElements !== 0){
       smallestElementID = firstUnsortedElemID;
       for(let i = firstUnsortedElemID; i < arrayToSort.length; i++){
            if (arrayToSort[i]< minimum){
                smallestElementID = i
                minimum = arrayToSort[smallestElementID]
            }
       }
       if (smallestElementID !== firstUnsortedElemID) {
           console.log("swap", firstUnsortedElemID, smallestElementID);
           [arrayToSort[firstUnsortedElemID], arrayToSort[smallestElementID]]=[arrayToSort[smallestElementID], arrayToSort[firstUnsortedElemID]]
       }
       firstUnsortedElemID++;
       minimum = arrayToSort[firstUnsortedElemID];
       numOfUnsElements --;
   }
   return arrayToSort
}

selectionSort([4, 6, 1, 23, 19, 8, 23, 1, 2,23,45,12,67,1,2,3,4545,67,45,324234,567567,234234,1,0,0,0,4,4,4,2,12,1,2,9])
// selectionSort([9,8,7,6,5,4,3,2,1,0])
// selectionSort([1,2,3,4,5,6,7,8,9,10])