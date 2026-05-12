const sumAll = function(start, end) {
    if ((!Number.isInteger(start) || !Number.isInteger(end)) || 
        (start < 0 || end < 0)) return 'ERROR';
    
    let result = 0;

    if (start > end) {
        let tmp = start;
        start = end;
        end = tmp;
    }

    for (let i = start; i <= end; i++) {
        result += i;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
