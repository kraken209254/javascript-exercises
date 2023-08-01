const reverseString = function(reverseString) {
    let res = '';
    for(let i = reverseString.length - 1; i >= 0; i--){
        res += reverseString[i];
    }
    return res;
};

// Do not edit below this line
module.exports = reverseString;
