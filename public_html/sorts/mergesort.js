
/*
 * split the array into 2 arrays, down the middle
 * compare first element of both arrays
 *  recombine and return with first element, being smaller than second element
 * if array length is 1, return element
 * 
 * What methods will I need to work with this array in this particular language?
 * I will need to be able to pass partial parts of an array
 * Look up these methods:
 * 
 *  merging 2 arrays together: Concatenating
 *  usage example: var combinedArray = array1.concat(array2);
 *  
 *  take out part of an array, producing a smaller array sliced off the end: slice
 *  usage example: var slicedArray = array1.slice(1);
 *  var myArray = [1, 2, 3, 4, 5, 6];
 *  arrayHalf1 = myArray.slice(0, 3);
 *  arrayHalf2 = myArray.slice(3);
 *  arrayHalf1 will be [1,2,3]
 *  arrayHalf2 will be [4,5,6]
 */

//use mergeSort( <comparablearray>, <optional - "trace">)
//if second parameter is set to true, mergeSort will 
//print what it is doing
var myArray = [38, 27, 43, 3, 9, 82, 10];
var myArray2 = [4, 1, 3, 2];
//console.log("sorted: " + mergeSort(myArray2, "trace"));
//console.log("myArray = " + myArray);
//console.log("sorted: " + mergeSort(myArray));
function mergeSort(array, showConsole)
{
    var firstHalf, secondHalf;
    var trace;
    if (showConsole === "trace") {
        trace = true;
    } else {
        trace = false;
    }

    //checks if array is sorted, an array of length 1 is considered 
    //sorted
    if (isSorted(array)) {
        if (trace)
            console.log("isSorted: [" + array + "]");
        return array;
    } else {
        if (trace)
            console.log("mergeSorting: [" + array + "]");
        firstHalf = array.slice(0, Math.floor(array.length / 2));
        secondHalf = array.slice(Math.floor(array.length / 2));
        if (trace)
            console.log("splitting into [" + firstHalf + "] and [" + secondHalf + "]");
        //console.log("initiating firstHalf recursive mergeSort");
        if (trace)
            firstHalf = mergeSort(firstHalf, "trace");
        firstHalf = mergeSort(firstHalf);
        //console.log("initiating secondHalf recursive mergeSort");
        if (trace)
            secondHalf = mergeSort(secondHalf, "trace");
        secondHalf = mergeSort(secondHalf);
        return merge(firstHalf, secondHalf);
    }


    function merge(array1, array2)
    {
        var mergedArray = [];
        while (array1.length > 0 || array2.length > 0)
        {
            if (trace)
                console.log("merging - left: [" + array1 + "] right: [" + array2 + "]" + " mergedArray: [" + mergedArray + "]");
            if (array1[0] > array2[0] || (typeof (array1[0]) === "undefined"))
                mergedArray.push(array2.shift());
            else if (array2[0] > array1[0] || (typeof (array2[0]) === "undefined"))
                mergedArray.push(array1.shift());
        }
        if (trace)
            console.log("merge() created: [" + mergedArray + "] going up a layer");
        return mergedArray;
    }

    function isSorted(array) {
        for (var i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1])
                return false;
        }
        return true;
    }
}
        