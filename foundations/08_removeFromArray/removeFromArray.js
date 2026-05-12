const removeFromArray = function(arr, ...args) {
    const newArr = [];

    for (const item of arr) {
        if (!args.includes(item)) {
            newArr.push(item);
        }
    }

    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;

// In this challenge I used for loop with index to go through the arr, and then arr.splice() to remove the item.

// ...args for one or more params