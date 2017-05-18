/******************************************************************************\
*Purpose:  Write a program to find the number of times the pattern of the      *
*          letters “AB “ in the string ABDCABDEFGAB is repeating. The answer    *
*          is 3.                                                               *
*Method:   Write a seperate boolean function that compares the string from     *
*          the given index against the pattern, and returns true if it is a    *
*          match.                                                              *
*          Set COUNT to 0                                                      *
*          traverse array                                                      *
*            send index of current element to pattern, if it                   *
*          returns true, increment count by 1.                                 *
*          return count                                                        *
*Date:    5/17/2017                                                            *                      
*Author: Artem Tolstov                                                         *
*                                                                              *
\******************************************************************************/


var str1 = "ABDCABDEFGAB";

console.log(findPatternRepeat(str1, "AB"));

function findPatternRepeat(string, pattern)
{
    var count = 0;

    for (var i = 0; i < string.length; i++)
    {
        if (isPattern(i, pattern))
            count++;
    }
    return count;

    function isPattern(index, pattern)
    {
        for (var i = 0; i < pattern.length; i++)
        {
            if (string[index] !== pattern[i])
                return false;
            else
                index++;
        }
        return true;
    }
}
                    