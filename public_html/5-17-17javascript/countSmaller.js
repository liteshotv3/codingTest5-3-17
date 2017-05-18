/******************************************************************************\
 *Purpose: Write a function to count number of smaller elements on right of    *
 *         each element in an array. Given an unsorted array arr[] of distinct *
 *         integers, construct another array countSmaller[] such that          *
 *         countSmaller[i] contains count of smaller elements on right side of *
 *         each element arr[i] in array.                                       *
 *         Examples:                                                           *
 *         Input:   arr[] =  {12, 1, 2, 3, 0, 11, 4}                           *
 *         Output:  countSmaller[]  =  {6, 1, 1, 1, 0, 1, 0}                   *
 *         (Corner Cases)                                                      *
 *         Input:   arr[] =  {5, 4, 3, 2, 1}                                   *
 *         Output:  countSmaller[]  =  {4, 3, 2, 1, 0}                         *
 *         Input:   arr[] =  {1, 2, 3, 4, 5}                                   *
 *         Output:  countSmaller[]  =  {0, 0, 0, 0, 0}                         *
 *                                                                             *
 *Method:  create countSmaller[] array                                         *
 *         traverse array                                                      *
 *         set count to 0                                                      *
 *         traverse remainder of array                                         *
 *          if element is less than current element, increment count           *
 *          push count as next element into countSmaller[] at the end of each  *
 *          inner loop.                                                        *
 *         At the end of both loops, return countSmaller[]                     *
 *Date:    5/17/2017                                                           *                      
 *Author:  Artem Tolstov                                                       *
 *                                                                             *
 \*****************************************************************************/

var arr21 = [12, 1, 2, 3, 0, 11, 4];
var arr22 = [5, 4, 3, 2, 1];
var arr23 = [1, 2, 3, 4, 5];

console.log(countSmaller(arr21));
console.log(countSmaller(arr22));
console.log(countSmaller(arr23));

function countSmaller(numArray)
{
    var countSmaller = [];
    for (var i = 0; i < numArray.length; i++)
    {
        var count = 0;

        for (var j = (i + 1); j < numArray.length; j++)
        {
            if (numArray[i] > numArray[j])
                count++;
        }
        countSmaller.push(count);
    }
    return countSmaller;
}
                    