/******************************************************************************\
 *Purpose: Given an array of positive integers. All numbers occur even number  *
 *         of times except one number which occurs odd number of times. write  *
 *         logic to meet O(n) time complexity.                                 *
 *         Example:                                                            *
 *          I/P = [10, 2, 3, 2, 3,45, 10, 3, 3, 45, 45]                        *
 *          O/P = 45                                                           *
 *Method:  Set our ANSWER to 0                                                 *
 *         traverse the array setting the value of ANSWER to the               *
 *         bitwise exclusive or (bitwise XOR) of answer and the current element*
 *         ie: answer ^ array[i]                                               *
 *         return ANSWER                                                       *
 *                                                                             *
 *         When XOR compares to itself( 5^5) it results in 0, since we have an *
 *         array with an even number of elements eventually they will all      *
 *         result in 0 with the only exception being our single odd element,   *
 *         so the answer will be the last occurence of the odd occuring element*
 *Date:    5/10/2017                                                           *                      
 *Author: Artem Tolstov                                                        *
 *                                                                             *
 \*****************************************************************************/


var arr1 = [10, 2, 3, 2, 3, 10, 3, 3, 45, 45, 45];
function oddOccuringElement(array)
{
    var answer = 0;
    for (var i = 0; i < array.length; i++)
    {
        //console.log(answer + " ^ " + array[i] + " = " + (answer ^ array[i]));
        answer = answer ^ array[i];
    }
    return answer;
}
                