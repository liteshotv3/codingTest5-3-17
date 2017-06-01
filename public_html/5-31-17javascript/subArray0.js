/*
 * Purpose: How to find if there is a sub array in an array with sum of elements
 *          equal to zero?
 *          Examples
 *          Input: [4, 2, -3, 1, 6]
 *          Output: true
 *          There is a sub-array with zero sum from index 1 to 3
 * Method:  Creat a function that looks at a subset of your current array and
 *          determines if the sum is 0.
 *          Run a for loop that increments the size of the window every iteration
 *          and until the size of the window is equal to the length of the array
 *          if your function ever returns true, exit with true
 *          otherwise if your windowSize becomes equal to your array, there are
 *          no subSets that equal 0 and return false.
 * Date:    5/31/2017
 * Author:  Artem Tolstov
 */
function subArray0(array)
{
    windowSize = 1;
    while (windowSize <= array.length)
    {
        for (var i = 0; i < array.length; i++)
        {
            if (windowSize + i <= array.length)
            {
                if (windowSum(windowSize, i) === 0)
                    return true;
            }
        }

        windowSize++;
    }
    return false;

    function windowSum(sizeOfWindow, currentIndex)
    {
        var sumOfWindow = 0;
        for (var i = currentIndex; i < currentIndex + sizeOfWindow; i++)
        {
            //console.log("Window Size: " + sizeOfWindow + " starting element " + currentIndex);
            sumOfWindow += array[i];
        }
        //console.log("SumOfWindow returned: " + sumOfWindow);
        return sumOfWindow;
    }
}