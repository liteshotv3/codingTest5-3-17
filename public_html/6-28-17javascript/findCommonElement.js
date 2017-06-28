var array1 = ["JavaScript", "AngularJs", "HTML5", "C#", "C++", "SQL"];
var array2 = ["MySQL", "SQLite", "Oracle", "PostgreSQL", "JavaScript", "AngularJs"];

console.log(findCommon(array1, array2));

function findCommon(array1, array2) {
    var common = [];

    for (var i = 0; i < array1.length; i++)
    {
        for (var j = 0; j < array2.length; j++)
        {
            if (array1[i] === array2[j]) {
                //console.log("pushing " + array1[i]);
                common.push(array1[i]);
            }
        }
    }
    return common;
}