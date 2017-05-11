/******************************************************************************\
 *Purpose: Two pairs (a, b) and (c, d) are said to be symmetric if c is equal  *
 *         to b and a is equal to d. For example (10, 20) and (20, 10) are     *
 *         symmetric.                                                          *
*          Given an array of pairs find all symmetric pairs in it. It may be   *
*          assumed that first elements of all pairs are distinct.              *
*          Example:                                                            *
*          Input: arr[] = {{11, 20}, {30, 40}, {5, 10}, {40, 30}, {10, 5}}     *
*          Output: Following pairs have symmetric pairs                        *
*          (30, 40)                                                            *
*          (5, 10)                                                             * 
 *Method:  Creat an empty array called answer.
 *         Do two nested loops thru the array                                  *
 *         The first loop traverses the whole array                            *
 *          For each element, compare to all other elements in the array       *
 *              if our current pair swapped is equal to the pair we are        *
 *              comparing then push that pair into our answer array            *
 *         return answer array                                                 *
 *                                                                             * 
 *Date:    5/10/2017                                                           *                      
 *Author: Artem Tolstov                                                        *
 *                                                                             *
 \*****************************************************************************/

var arr2 = [[11, 20], [30, 40], [5, 10], [40, 30], [10, 5]];
//console.log(...arr2);
//console.log(...findSymmetricPairs(arr2));

function findSymmetricPairs(pairArray)
{
    var answer = [];
    for (var i = 0; i < pairArray.length; i++)
    {
        for (var j = (i + 1); j < pairArray.length; j++)
        {
            if ((pairArray[i][1], pairArray[i][0]) === (pairArray[j][0], pairArray[j][1]))
            {
                //console.log([pairArray[i][1], pairArray[i][0]] + " === " + [pairArray[j][0], pairArray[j][1]]);
                answer.push([pairArray[i][0], pairArray[i][1]]);
            }
        }
    }
    return answer;
}