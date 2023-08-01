const repeatString = function(stringToRepeat, numberOfIterations) {
    let res = '';
    if(numberOfIterations < 0) return "ERROR";
    for(let i = 0; i < numberOfIterations; i++){
        res += stringToRepeat;
    }

    return res;
};

// Do not edit below this line
module.exports = repeatString;
