const reverseString = function(string = 'hello') {

    stringLength = string.length - 1;

    reversedString = '';
    
    for (i = stringLength; i >= 0; i--) {
        reversedString += string.slice(i, i + 1);
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;

// 4 34 234 1234 01234
// o lo llo ello hello