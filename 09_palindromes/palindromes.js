const palindromes = function (string) {
    //split each character into an array
    const chars = string.toLowerCase().split("");
    //filter the non-alphanumeric chars out for
    const filtered = chars.filter(char => {
        if (char.charCodeAt() >= 48 && char.charCodeAt() <= 57 || char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
            return char
        }
    })

    //recombine the filtered chars
    cleanedString = filtered.join("");
    //recombined reversed filtered chars
    revCleanedString = filtered.reverse().join("");
    if (cleanedString === revCleanedString) {
        return true
    }
    else {
        return false;
    }
};


// Do not edit below this line
module.exports = palindromes;
