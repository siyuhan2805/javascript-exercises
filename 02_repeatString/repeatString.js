const repeatString = function(word, num) {
    if (num < 0) {
        return "ERROR"
    }
    else {
        return word.repeat(num);
    }
    
};

console.log(repeatString("hey", -3))

// Do not edit below this line
module.exports = repeatString;
