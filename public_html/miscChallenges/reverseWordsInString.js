                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     /*
Reverse all the words in a string, while preserving their order in a sentence
and preserving the number and location of all white spaces.
By Artem Tolstov 6/15/17
 */

var aSentence = "The    TajMahal is famous!";
console.log("The sentence is: " + aSentence);
console.log("  The output is: " + reverseAllWords(aSentence));

function reverseAllWords(aString){
    aString = aString.split(" ");
    for(var i = 0; i < aString.length; i++)
    {
        aString[i] = reverseString(aString[i]);
    }
    return aString.join(" ");

    function reverseString(string)
    {
        //console.log("received: " + string);
        string = string.split("");
        for(var i = 0; i < Math.floor(string.length/2); i++)
        {
            var temp = string[i];
            string[i] = string[string.length-1 - i];
            string[string.length-1-i] = temp;
        }
        //console.log("returning: " + string.join(""));
        return string.join("");
    }
}