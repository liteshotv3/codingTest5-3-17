
var myString = ",whhello, welcozme to Star Wars World.";
console.log(myString);
console.log("first non repeated character: " + firstNonRepeatedChar(myString));

/*
 * check if character repeats in the string
 traverse the string
 for each character, traverse the whole string
 compare current character to other chracters (ignore if same character)
 set isUnique to false if match is found
 if you complete traversal without finding duplicate character, 
 that is the first character non-repeated
 return non-repeated character
 if outer loop is completed, return null (since all characters are a repeat)
 */
function firstNonRepeatedChar(string) {
    for (var i = 0; i < string.length; i++)
    {
        var isUnique = true;
        for (var j = 0; j < string.length; j++)
        {
            if (string[i] === string[j] && i !== j)
                isUnique = false;
        }
        if (isUnique) {
            return string[i];
        }
    }
    return null;
}


                