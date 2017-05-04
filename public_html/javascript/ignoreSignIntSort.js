/******************************************************************************\
 *Purpose: Sort through a numeric array and return an array sorted from lowest * 
 *         to highest but ignoring sign.                                       *
 *         Example:                                                            *
 *         Input: [2,10,-5]                                                    *
 *         Output:[2, -5, 10]                                                  *
 *Method:  Loop thru the array                                                 *
 *              for each element, loop thru remainder of array                 *
 *              set first element as SMALLEST, on each comparison, compare the *
 *              absolute value of the 2 elements, if current comparison is     *
 *              smaller than current element, set SMALLEST to the current      *
 *              element being compared.                                        *
 *          At the end of the inner loop, swap the current element with the    *
 *          recorded SMALLEST element.                                         *
 *Date:    5/3/2017                                                            *                      
 *Author: Artem Tolstov                                                        *
 *                                                                             *
 \*****************************************************************************/

var intArr1 = [2, 11, 10, 5, 1, -5, -12];
document.getElementById("input1").innerHTML = intArr1;
document.getElementById("output1").innerHTML = ignoreSignIntSort(intArr1);

function ignoreSignIntSort(intArray)
{
    console.log("presorted array intArr1 = " + intArr1);
    for (var i = 0; i < intArray.length; i++)
    {
        var smallest = i;
        for (var j = (i + 1); j < intArray.length; j++)
        {
            //console.log("i="+i+" j="+j);
            if (Math.abs(intArray[smallest]) > Math.abs(intArray[j]))
            {
                smallest = j;
                //console.log("smallest is intArray["+ smallest+"]");
            }
        }
        var temp = intArray[i];
        intArray[i] = intArray[smallest];
        intArray[smallest] = temp;
        //console.log("swapped " + i + " and " + smallest);
        //console.log("intArray = " + intArray);
    }
    console.log("sorted intArray = " + intArray);
    return intArray;

}