const palindromes = function (str) {
    let cleaned = str.toLowerCase().split('').filter(isAlphaNumeric).join('');
    let reversed = str.toLowerCase().split('').filter(isAlphaNumeric).reverse().join('');
    return reversed === cleaned;
};

const isAlphaNumeric = (char) => {
    const code = char.charCodeAt(0);
    return (code >= 97 && code <= 122) || (code >= 48 && code <= 57);
};

// Do not edit below this line
module.exports = palindromes;
