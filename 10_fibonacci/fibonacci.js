const fibonacci = function(index) {

    const seriesNum = parseInt(index);
    if (seriesNum < 0) {
        return "OOPS";
    }
    else if (seriesNum === 0) {
        return 0;
    }

    let curr = 1;
    let prev = 0;
    let temp;
    for (let i = 1; i < seriesNum; i++) {
        temp = curr;
        curr = curr + prev;
        prev = temp;
    }
    return curr;
};




// Do not edit below this line
module.exports = fibonacci;
