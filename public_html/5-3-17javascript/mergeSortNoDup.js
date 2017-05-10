/******************************************************************************\
 *Purpose: Take 2 numeric arrays and combine them without any duplicated,      * 
 *         returning one sorted array.                                         *
 *         Example:                                                            *
 *         Input: arr1= [2,5,1,10] arr2 = [1,2,3,4,5,10]                       *
 *         Output:[1,2,3,4,5,10]                                               *
 *Method:  Concatenate the 2 arrays                                            *
 *         remove duplicates                                                   *
 *              go thru array, for each element go thru array and compare      *
 *              values, if the values are identical, use splice() to remove    *
 *              the later element                                              *
 *          sort the array from smallest to greatest                           *
 *              go thru array, for each element set it to SMALLEST and go thru *
 *              the rest of the array, after nested loop at the end of outer   *
 *              loop, swap current element with SMALLEST element               *
 *          return a merged, sorted array, with no duplicates                  *
 *Date:    5/3/2017                                                            *                      
 *Author: Artem Tolstov                                                        *
 *                                                                             *
 \*****************************************************************************/



var arr1 = [2, 5, 1, 10];
var arr2 = [4, 3, 5, 10];
console.log("given " + arr1 + " and " + arr2);
console.log("mergeSortNoDup returns " + mergeSortNoDup(arr1, arr2));

function mergeSortNoDup(array1, array2)
{
    var mergedArr = array1.concat(array2);
    removeDups(mergedArr);
    sortNumArray(mergedArr);
    //console.log(mergedArr);
    return mergedArr;
}

function removeDups(array)
{
    for (var i = 0; i < array.length; i++)
    {
        for (var j = (i + 1); j < array.length; j++)
        {
            if (array[i] === array[j])
            {
                array.splice(j, 1);
                j--;
            }
        }
    }
    return array;
}

function sortNumArray(numArray)
{
    for (var i = 0; i < numArray.length; i++)
    {
        var smallest = i;
        for (var j = (i + 1); j < numArray.length; j++)
        {
            if (numArray[smallest] > numArray[j])
                smallest = j;
        }
        var temp = numArray[i];
        numArray[i] = numArray[smallest];
        numArray[smallest] = temp;
    }
}