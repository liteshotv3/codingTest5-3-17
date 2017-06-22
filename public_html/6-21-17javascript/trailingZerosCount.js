function trailingZerosCount(number)
{
    var count = 0;
    while ((number > 0) && (number % 10) === 0) {
        count++;
        number = Math.floor(number / 10);
    }
    return count;
}
            