/******************************************************************************\
 *Purpose:  Write a program to find the common elements in three seperate      *
 *          arrays.                                                            *
 *          Example:                                                           *
 *          input1 = [1, 5, 10, 20, 40, 80]                                    *
 *          input2 = [6, 7, 20, 80, 100]                                       *
 *          input3 = [3, 4, 15, 20, 30, 70, 80, 120]                           *
 *          Output: 20, 80                                                     *
 *Method:   Three arrays are passed to a function (preferably with the shortest*
 *          array as the first parameter                                       *
 *          a value of elementPresent and secondElementPresent are set to false*
 *          for each element in array1 compare to element in array2            *
 *              if elements are identical, and elementPresent is not already   *
 *              set to true(to avoid checking already confirmed element)       *
 *                  set elementPresent to true                                 *
 *                  traverse third array checking currentElement against all   *
 *                  elements in thrid array, and if present, set               *
 *                  secondElementPresent to true                               *
 *          if both elementPresent and secondElementPresent are set to true    *
 *              push element to commonElements[] array                         *
 *          return commonElements[]                                            *
 *Date:    5/31/2017                                                           *                      
 *Author: Artem Tolstov                                                        *
 *                                                                             *
 \*****************************************************************************/

function commonElements(array1, array2, array3) {
    //This if-elseif-else determines which array is the shortest, in order to 
    // only compare against the least number of elements
    if (array1.length < array2.length && array1.length < array3.length)
        return compareArrays(array1, array2, array3);
    else if (array2.length < array1.length && array2.length < array3.length)
        return compareArrays(array2, array1, array3);
    else
        return compareArrays(array3, array1, array2);


    function compareArrays(array1, array2, array3)
    {
        /*
         * Goes thru the first array
         * if element has not yet been marked present and element exists in
         * both array1 and array2
         *  element is compared against elements in array3
         *      if present in array3 as well then marked, secondElementPresent
         * if elementPresent and secondElementPresent are true, then element
         * exists in all 3 arrays, and is added to commonElements array
         * commonElements are returned
         */
        var commonElements = [];
        for (var i = 0; i < array1.length; i++)
        {
            var elementPresent = false;
            var secondElementPresent = false;
            for (var j = 0; j < array2.length; j++)
            {
                if (array1[i] === array2[j] && elementPresent === false)
                {
                    elementPresent = true;
                    for (var j = 0; j < array3.length; j++)
                    {
                        if (array1[i] === array3[j])
                            secondElementPresent = true;
                    }
                }
            }
            if (elementPresent && secondElementPresent)
                commonElements.push(array1[i]);
        }
        return commonElements;
    }
}