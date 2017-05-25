
/*
 * parameters should include character to remove
 traverse string
 compare to character to remove
 if same character, remove it from string using splice
 return changed string
 */
console.log("java");
console.log(removeCharacter('v', "javavvvvvavavav"));
var word = " ca r ";
console.log(word);
console.log(removeCharacter(' ', word));

function removeCharacter(character, string)
{
    for (var i = 0; i < string.length; i++)
    {
        if (string[i] === character)
        {
            string = string.slice(0, i) + string.slice(i + 1);
            i--;
        }
    }
    return string;
}
                