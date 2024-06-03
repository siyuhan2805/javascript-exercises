const removeFromArray = function(arr, ...args) {
    //array to hold filtered items from arr that are not in args
    const filteredArr = [];
    //iterate over each item in arr and check if args has said item 
    arr.forEach((item) => {;
        //items from arr not present in args are pushed to filteredArr 
        if (!args.includes(item)) {
            filteredArr.push(item);
        }
    })

    return filteredArr;
    
};

// Do not edit below this line
module.exports = removeFromArray;
