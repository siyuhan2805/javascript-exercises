const sumAll = function(int1, int2) {
    //variable to hold the sum
    let sum = 0;

    //check data type of paramters and whether they are both non-zero
    if (int1 > 0 && int2 > 0 && typeof(int1) === "number" && typeof(int2) === "number") {
        
        //check to see which int is larger as that will determine which int is declared as i
        if (int1 < int2 ) {
            for (let i = int1; i <= int2; i++) {
                sum += i;
            }
            return sum;
        }
        else if (int1 > int2) {
            for (let i = int2; i <= int1; i++) {
                sum += i;
            }
            return sum;
        }
    }
    //catch-all for other data types and negative numbers
    else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;
