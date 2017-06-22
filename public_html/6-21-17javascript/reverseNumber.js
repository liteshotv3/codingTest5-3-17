
var number = 12345;

function reverseNumber(number)
{
    var answer = 0;
    while (number > 0)
    {
        answer = answer * 10 + (number % 10);
        number = Math.floor(number / 10);
    }
    return answer;
}