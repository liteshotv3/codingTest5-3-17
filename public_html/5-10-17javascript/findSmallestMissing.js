/******************************************************************************\
*Purpose: Given a sorted array of n distinct integers where each integer is   *
*         in the range from 0 to m-1 and m > n. Find the smallest number that *
*         is missing from the array.                                          *
*         Examples                                                            *
*         Input: {0, 1, 2, 6, 9}, n = 5, m = 10                               *
*         Output: 3                                                           *
*                                                                             *
*         Input: {4, 5, 10, 11}, n = 4, m = 12                                *
*         Output: 0                                                           *
*                                                                             *
*         Input: {0, 1, 2, 3}, n = 4, m = 5                                   *
*         Output: 4                                                           *
*                                                                             *
*         Input: {0, 1, 2, 3, 4, 5, 6, 7, 10}, n = 9, m = 11                  *
*         Output: 8                                                           *
*Method:  Go thru the sorted array from 0 to the value of n                   *
*           for each element compare if our counter I doesn't equal our       *
*           element, if it does not, that is our missing element.             *
*           return I                                                          *
*         if we have gone thru the array without finding our missing number   *
*         return n as that is our signal that no numbers, up to n are missing.*
*                                                                             *
*Date:    5/10/2017                                                           *                      
*Author: Artem Tolstov                                                        *
*                                                                             *
\*****************************************************************************/


var arr31 = [0, 1, 2, 6, 9], n1 = 5, m1 = 10;
var arr32 = [4, 5, 10, 11], n2 = 4, m2 = 12;
var arr33 = [0, 1, 2, 3], n3 = 4, m3 = 5;
var arr34 = [0, 1, 2, 3, 4, 5, 6, 7, 10], n4 = 9, m4 = 11;

function executeAll()
{
    console.log("In the following arrays, the smallest missing element less than \n\
n is given");
    console.log(arr31 ,n1, m1);
    console.log(findSmallestMissing(arr31, n1, m1));
    console.log(arr32, n2, m2);
    console.log(findSmallestMissing(arr32, n2, m2));
    console.log(arr33, n3, m3);
    console.log(findSmallestMissing(arr33, n3, m3));
    console.log(arr34, n4, m4);
    console.log(findSmallestMissing(arr34, n4, m4));
}

function findSmallestMissing(sortedNumArray, n, m)
{
    for (var i = 0; i < n; i++)
    {
        if (i !== sortedNumArray[i])
            return i;
    }
    return n;
}