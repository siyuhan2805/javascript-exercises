const leapYears = function(year) {
    
    //lea year conditions: years that are divisible by 4, however, years divisible by 100 are not leap years (unless they are also divisible by 400)

    //highest order conditional check for a leap year - years that dont pass are automatically non-leap years
    if (year % 4 === 0) {
        //edge case testing
        if (year % 100 === 0 && year % 400 != 0) {
            return false;
        }
        else if (year % 100 === 0 && year % 400 === 0) {
            return true;
        }
        //years that fail the edge case are leap years
        else {
            return true;
        }
    }
    else {
        return false;
    }
};


// Do not edit below this line
module.exports = leapYears;
