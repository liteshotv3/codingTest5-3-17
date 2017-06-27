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
var myArray = [38, 27, 43, 3, 9, 82, 10];
console.log("myArray = [" + myArray + "]");
console.log("sorted: " + mergeSort(myArray));

function mergeSort(array)
{
    if (array.length > 1) {
        console.log("mergeSorting: [" + array + "]");
        firstHalf = array.slice(0, Math.floor(array.length / 2));
        secondHalf = array.slice(Math.floor(array.length / 2));
        //console.log("firstHalf = [" + firstHalf+"]");
        //console.log("secondHalf = [" + secondHalf+"]");
        console.log("splitting into [" + firstHalf + "] and [" + secondHalf + "]");
        return merge(mergeSort(firstHalf), mergeSort(secondHalf));
    } else
        return array;

    function merge(array1, array2)
    {
        var mergedArray = [];
        while (array1.length > 0 || array2.length > 0)
        {
            if (array1[0] > array2[0] || (typeof (array1[0]) === "undefined"))
                mergedArray.push(array2.shift());
            else if (array2[0] > array1[0] || (typeof (array2[0]) === "undefined"))
                mergedArray.push(array1.shift());
        }
        return mergedArray;
    }
//    else {
//        firstHalf = array.slice(0, Math.floor(array.length/2));
//        secondHalf = array.slice(Math.floor(array.length/2));
//        console.log("splitting into " + firstHalf + " and " + secondHalf);
////        if(firstHalf.length === 1 && secondHalf.length === 1)
////        {
////            if(firstHalf[0]<secondHalf[0])
////            {
////                console.log("returning: " + firstHalf.concat(secondHalf));
////                return firstHalf.concat(secondHalf);
////            }
////            else {
////                 console.log("returning: " + secondHalf.concat(firstHalf));
////                return secondHalf.concat(firstHalf);
////            }
////        }
//        
//        if(firstHalf[0] < secondHalf[0])
//        {   
//            console.log(firstHalf[0] + "  < " + secondHalf[0]);
//            return mergeSort(firstHalf).concat(mergeSort(secondHalf));
//        }
//        else
//            console.log(firstHalf[0] + "  > " + secondHalf[0]);
//            return mergeSort(secondHalf).concat(mergeSort(firstHalf));
//    }
//    
}