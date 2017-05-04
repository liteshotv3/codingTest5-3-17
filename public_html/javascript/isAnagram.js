
/******************************************************************************\
 *Purpose: Sort through a numeric array and return an array sorted from lowest * 
 *         to highest but ignoring sign.                                       *
 *         Example:                                                            *
 *         Input: [2,10,-5]                                                    *
 *         Output:[2, -5, 10]                                                  *
 *Method:  Loop thru the array                                                 *
 *              for each element, loop thru remainder of array                 *
 *              set first element as SMALLEST, on each comparison, compare the *
 *              absolute value of the 2 elements, if current comparison is     *
 *              smaller than current element, set SMALLEST to the current      *
 *              element being compared.                                        *
 *          At the end of the inner loop, swap the current element with the    *
 *          recorded SMALLEST element.                                         *
 *Date:    5/3/2017                                                            *                      
 *Author: Artem Tolstov                                                        *
 *                                                                             *
 \*****************************************************************************/
//True anagram
var s1 = "silent";
var s2 = "listen";
console.log(s1);
console.log(s2);
console.log(isAnagram(s1, s2));

//One letter off
var s1 = "silenz";
var s2 = "listen";
console.log(s1);
console.log(s2);
console.log(isAnagram(s1, s2));

//True anagram
var s1 = "bsilent";
var s2 = "blisten";
console.log(s1);
console.log(s2);
console.log(isAnagram(s1, s2));

var s1 = "silbent";
var s2 = "blisten";
console.log(s1);
console.log(s2);
console.log(isAnagram(s1, s2));

var s1 = "listen";
var s2 = "listen";
console.log(s1);
console.log(s2);
console.log(isAnagram(s1, s2));


function isAnagram(string1, string2)
{
    string1 = string1.split("");
    string2 = string2.split("");

    //if one string has more elements, then they are not anagrams
    if (string1.length !== string2.length)
        return false;

    for (var i = 0; i < string2.length; i++)
    {
        if (string1[0] == string2[i])
        {
            string1.splice(0, 1);
            string2.splice(i, 1);
            i = -1;
        }
        if (string1.length === 0)
        {
            return true;
        }
    }
    return false;
}