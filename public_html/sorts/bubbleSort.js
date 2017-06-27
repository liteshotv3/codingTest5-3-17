//console.log("bubbleSort returns: [" + bubbleSort([2, 1, 3]) + "]");
//console.log("for array [" + array + "] bubbleSort(array) returns: " + bubbleSort(array));


/*
while the function has not completed a loop without one swap, continue the loop
    traverse thru the array up to array.length - 1
    if array[i] > array[i+1]
        swap i and i+1
        set loopAgain to true
 */
function bubbleSort(array){
    var count = 0;
    var loopAgain = true;
    var j = 0;
    while(loopAgain)
    {
        loopAgain = false;
        for (var i = 0; i < array.length-1-j; i++)
        {
            count++;
            console.log(count + ". Checking index " + i + " and " + (i+1));
            if(array[i] > array[i+1])
            {
                count++;
                console.log(count + ". swapping from " + array + swap(i) + "to " + array);
                //swap(i);
                //console.log(count + ". " + array);
                loopAgain = true;
                if(!loopAgain) console.log("sorted Array");
            }
        }
        j++;
    }
    return array;

    function swap(index)
    {
        var temp = array[index];
        array[index] = array[index+1];
        array[index + 1] = temp;
        return " ";
    }
}