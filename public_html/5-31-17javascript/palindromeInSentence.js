/*
 * Purpose: Write a function that determines if any words in your sentence 
 *          are palindromes.
 * Method:  Split your string into an array of words, using spaces as 
 *          breakpoints
 *          create an empty array of palindromes
 *              create a function isPalindrome, that goes to half the length of 
 *              the array and compares the first and last elements, decreasing 
 *              with each iteration
 *                  return false if there is ever a false comparison
 *           if you make it to the end return true
 *           for each word perform check isPalindrome
 *               if true, push the word to your array of palindromes
 *           return palindromes array
 *           
 * Date:    5/31/2017
 * Author:  Artem Tolstov      
 *          
 */
function palindromeInSentence(aString)
{
    var myWords = aString.split(" ");
    var palindromes = [];
    for(var i = 0; i < myWords.length; i++)
    {
        if(isPalindrome(myWords[i]))
            palindromes.push(myWords[i]);
    }
    
    
    return palindromes;
    
    function isPalindrome(word)
    {
        for (var i = 0; i < Math.floor(word.length/2); i++)
        {
            if (word[i] !== word[word.length - 1 - i])
                return false;
        }
        return true;
    }
}