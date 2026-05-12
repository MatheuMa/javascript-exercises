const repeatString = function(str, num) {
    // If num is a negative number, return the string 'ERROR' instead.
    if (num < 0) return 'ERROR';
    
    let result = '';

    for (let i = 0; i < num; i++) {
        result += str;
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;
