//quick sort
/*
The purpose of this function is to sort an array via comparison with a 
time complexity of O(n log n) and in the worst case O(n^2).
The function arbitrarily chooses a pivot point(the first element in this example)
and compares all other elements against it. If the element is smaller it goes into
the less than category and if it is larger it goes into the greater that category.
At this point both category's are recursively sorted(assuming they already return
sorted arrays) we now have a sorted less than, pivot point and sorted greater than
array. We can simply concatenate the 3 in that order and return. At the start of 
the function we check if the incoming array is already sorted, if so we simply return
it to avoid infinitely checking recursively.

Method:
check if already sorted, return if it is.
create a pivot point (choose arbitrarily)
an empty less than, and empty greater than
iterate through array
	if element is less than pivot, push to less than
	if element is greater than pivot, push to greater than
quickSort less than, quickSort greater than (recursively)
concatenate less than, pivot, greater than and return

Artem Tolstov 6/26/17
*/
//unsortedArray = [3, 1, 0, 5, 11, 6, 9, 2, 8];
//console.log(quickSort(unsortedArray));

function quickSort(array) {
  var pivot = array[0];
  var less = [];
  var greater = [];
  
  //check if done already
  if(isSorted(array))
  return array;
  
  console.log("checking: " + array);
  for (var i = 1; i < array.length; i++) {
    if (pivot > array[i]) {
      less.push(array[i]);
    }
    if (pivot <= array[i]) {
      greater.push(array[i]);
    }
    console.log("less: [" + less + "] pivot: [" + pivot + "] greater: [" + greater + "]")
  }
  
  less = quickSort(less);
  greater = quickSort(greater);
  console.log("returning [" + less.concat(pivot, greater) + "]");
  return less.concat(pivot, greater);

  function isSorted(array) {
    for (var i = 0; i < array.length - 1; i++) {
      if (!(array[i] <= array[i + 1]))
        return false;
    }
    return true;
  }
}
