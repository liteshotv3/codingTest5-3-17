
var array1 = [1, 2, 3, 4, 5];
var array2 = [2, 3, 1, 0, 5];

console.log("array1 is [" + array1 + "] and array2 [" +
        array2 + "] missing elements: [" +
        compareArrays(array1, array2) + "]");

function compareArrays(array1, array2)
{
    var missingElements = [];
    for (var i = 0; i < array1.length; i++)
    {
        var elementPresent = false;
        for (var j = 0; j < array2.length; j++)
        {
            if (array1[i] === array2[j])
                elementPresent = true;
        }
        if (!elementPresent)
            missingElements.push(array1[i]);
    }
    return missingElements;
}
                