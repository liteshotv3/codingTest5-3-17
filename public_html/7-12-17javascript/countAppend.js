
//stringArray = ['hi', 'hello', 'hi', 'world', 'hi', 'hello', 'hello'];
//
//console.log(countAppend(stringArray));
//console.log(countAppend(['hi', 'hi', 'hi', 'bye', 'hi', 'bye']));
//console.log(countAppend(['he', 'hello', 'he', 'hello', 'hello', 'he']));

function countAppend(array) {
    answer = [];
    for (var i = 0; i < array.length; i++)
    {
        var exists = 0;
        for (var j = 0; j < i; j++) {
            if (array[i] === array[j]) {
                exists++;
            }
        }
        if (exists > 0) {
            answer.push(array[i] + "(" + exists + ")");
        } else
            answer.push(array[i]);
    }
    return answer;
}