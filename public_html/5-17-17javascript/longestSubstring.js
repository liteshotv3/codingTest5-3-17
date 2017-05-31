/******************************************************************************\
*Purpose: Given a string, find the longest substrings without repeating        *
*         characters. Iterate through the given string, find the longest       *
*         maximum substrings.                                                  *
*         input:java2novice, o/p: a2novice                                     *
*         input:java_language_is_sweet, o/p: uage_is                           * 
*                                                                              *
*Method:  traverse array                                                       *
*            for each element, traverse array again                            *
*            if current element is not a repeat of a character inside          *
*            tempString                                                        *
*               append current character to tempString                         *
*               check if tempString is longer than longest string, set         *
*               longestString to tempString if it is.                          *
*            if current element is a repeat                                    *
*               set tempString to empty string                                 *
*               break out of inner loop to outerloop                           *   
*          return longestString                                                *
*Date:    5/17/2017                                                            *                      
*Author: Artem Tolstov                                                         *
*                                                                              *
\******************************************************************************/

var string31 = "java2novice";
var string32 = "java_language_is_sweet";

console.log(string31);
console.log("Longest string in " + string31 + " is " + longestSubstring(string31));
console.log("Longest string in " + string32 + " is " + longestSubstring(string32));

function longestSubstring(string) {
    var longestString = "";
    var tempString = "";

    for (var i = 0; i < string.length; i++)
    {
        for (var j = i; j < string.length; j++)
        {
            console.log("tempString: " + tempString + " string[j]: " + string[j]);
            console.log(" isNotRepeat: " + isNotRepeatChar(tempString, string[j]));
            if (isNotRepeatChar(tempString, string[j])) {
                tempString = tempString + string[j];
                //tempString.push(string[j]);
                checkIfTempLongest();
            }
            else {
                tempString = "";
                break;
            }
        }
    }
    return longestString;


    function checkIfTempLongest()
    {
        if (tempString.length > longestString.length) {
            longestString = tempString;
            //console.log("longestString is now " + longestString);
        }
    }

    function isNotRepeatChar(str, char) {
        for (var i = 0; i < str.length; i++)
        {
            if (str[i] === char)
                return false;
        }
        return true;
    }
}
                    