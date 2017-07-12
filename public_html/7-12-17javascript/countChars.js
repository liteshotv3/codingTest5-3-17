
//var array = ['a', 'a', 'a', 'b', 'c', 'd', 'd', 'e', 'a', 'b', 'c', 'f', 'g', 'h', 'h', 'h', 'e', 'a'];
//console.log(array);
//countChars(['a', 'a', 'a', 'b', 'c', 'd', 'd', 'e', 'a', 'b', 'c', 'f', 'g', 'h', 'h', 'h', 'e', 'a']);

function countChars(array) {
    var counts = [];
    //counts.push({"character": array[0], "count": 1})

    for (var i = 0; i < array.length; i++) {
        var index = charExists(array[i]);
        if (index !== false) {
            counts[index].count++;
        } else {
            counts.push({"character": array[i], "count": 1})
        }
    }

    function charExists(character) {
        for (var i = 0; i < counts.length; i++) {
            if (counts[i].character === character) {
                return i;
            }
        }
        return false;
    }

    //Prints answer in the console
    for (var i = 0; i < counts.length; i++)
    {
        console.log(counts[i].character + " = " + counts[i].count);
    }
}