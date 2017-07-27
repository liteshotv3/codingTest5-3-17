//var aString = "1In 3bri45ght4est 7 day, i12n bl8709ack65est night34";
//console.log(removeNumbers(aString));
function removeNumbers(input) {
    input = input.split("");

    for (var i = 0; i < input.length; i++) {
        if (input[i].charCodeAt(0) >= 48 && input[i].charCodeAt(0) <= 57) {
            //removes character if ascii is both greater 
            //than 47 and less than 58
            input.splice(i, 1);
            i--;
            //input = input.splice(0, i) + input.splice(i);
        }
    }
    return input.join("");
}
                