/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
 * traverse array, for each element, traverse remainder of array, find smallest
 * switch current element with smallest at the end of the traversal
 * at the end of both traversals, you have sorted array
 */
var unSorted = [64, 25, 12, 22, 11];

//console.log(unSorted);
//console.log("answer: " + selectionSort(unSorted));
function selectionSort(array)
{
    for (var i = 0; i < array.length; i++)
    {

        var smallest = i;
        for (var j = (i + 1); j < array.length; j++)
        {
            if (array[smallest] > array[j])
                smallest = j;
        }
        if (smallest !== i)
            swap(smallest, i);
    }
    return array;



    function swap(index1, index2)
    {
        array[index1] = array[index1] + array[index2];
        array[index2] = array[index1] - array[index2];
        array[index1] = array[index1] - array[index2];
        /*
         * a = a + b;
         * b = a - b;
         * a = a - b;
         */
        console.log("swapped " + array[index1] + " and " + array[index2]);
        console.log(array);
//        var temp = array[index1];
//        array[index1] = array[index2];
//        array[index2] = temp;
    }
}

