
var array4 = [-1, 4, 0, 2, 7, -3];
var array5 = [-2, -1, 0];

console.log(array4);
console.log(remove2ndlargest(array4));

function remove2ndlargest(array) {
    array = quickSort(array);
    console.log(array);
    return array[array.length - 2];
}


function quickSort(array) {
    var pivot = array[0];
    var less = [];
    var greater = [];

    //check if done already
    if (isSorted(array))
        return array;

    //console.log("checking: " + array);
    for (var i = 1; i < array.length; i++) {
        if (pivot > array[i]) {
            less.push(array[i]);
        }
        if (pivot <= array[i]) {
            greater.push(array[i]);
        }
        //console.log("less: [" + less + "] pivot: [" + pivot + "] greater: [" + greater + "]")
    }

    less = quickSort(less);
    greater = quickSort(greater);
    //console.log("returning [" + less.concat(pivot, greater) + "]");
    return less.concat(pivot, greater);

    function isSorted(array) {
        for (var i = 0; i < array.length - 1; i++) {
            if (!(array[i] <= array[i + 1]))
                return false;
        }
        return true;
    }
}
            