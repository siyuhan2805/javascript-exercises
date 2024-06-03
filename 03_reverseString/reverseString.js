const reverseString = function(word) {
    //create an empty array for storing characters
    let reversedCharArr = []
    //iterate over the string
    for (let i = 0; i < word.length; i++) {
        //using array.unshift method we can add chars of the string to the start of the array
        reversedCharArr.unshift(word[i]);
    }

    //join each character in the arr together with the array.join method
    let reversedString = reversedCharArr.join("");

    return reversedString;

};

reverseString("hello there");

// Do not edit below this line
module.exports = reverseString;
