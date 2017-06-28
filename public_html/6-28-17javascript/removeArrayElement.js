
array3 = ['AngularJS', 'JavaScript', 'BackboneJS']
console.log(array3);
console.log(remove(array3, "BackboneJS"));

function remove(array, removeThis)
{
    for (var i = 0; i < array.length; i++)
    {
        if (array[i] === removeThis)
        {
            //array = array.splice(0, i);
            array = array.splice(0, i) + array.splice(i);
        }
    }
    return array;
}