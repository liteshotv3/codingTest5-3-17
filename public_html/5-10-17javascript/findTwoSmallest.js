/******************************************************************************\
 *Purpose: Write an efficient program to find the smallest and second smallest * 
 *         elements in an array.                                               *
 *         Example:                                                            *
 *         Input: [12, 13, 1, 10, 34]                                          *
 *         Output:[1, 10]                                                      *
 *Method:  Designate the first element as SMALLEST, second element as          *
 *         SECONDSMALLEST                                                      *
 *         Create function that swaps SMALLEST and SECONDSMALLEST if the       *
 *         SECONDSMALLEST is larger then SMALLEST                              *
 *         execute sortSmallest                                                *
 *              go thru array starting with third element(since first 2 are    *
 *              already sorted, comparing if current element is smallest that  *
 *              SECONDSMALLEST and if so, making that element the new          *
 *              SECONDSMALLEST.                                                *
 *              sortSmallest                                                   *
 *          return an array of SMALLEST and SECONDSMALLEST                     *
 *Date:    5/10/2017                                                           *                      
 *Author: Artem Tolstov                                                        *
 *                                                                             *
 \*****************************************************************************/


var arr = [-12, 13, 1, 10, -34, 12];
document.getElementById("sample4").innerHTML = arr;
document.getElementById("answer4").innerHTML = findTwoSmallest(arr);
function findTwoSmallest(numArray) {
    var smallest = numArray[0];
    var secondSmallest = numArray[1];
    sortSmallest();

    for (var i = 2; i < numArray.length; i++)
    {
        if (secondSmallest > numArray[i])
            secondSmallest = numArray[i];
        sortSmallest();
    }
    return [smallest, secondSmallest];

    function sortSmallest() {
        if (smallest > secondSmallest)
        {
            var temp = smallest;
            smallest = secondSmallest;
            secondSmallest = temp;
        }
    }
}