const repeatString = function(text, repeatAmount) {
    let string = '';
    if (repeatAmount < 0) {
        string = 'ERROR';
    }
    for (let i = 0; i < repeatAmount; i++) {
        string += text;
    }
    return string;
};




// Do not edit below this line
module.exports = repeatString;
