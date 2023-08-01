const sumAll = function(iniNumber,finNumber) {
    let sum = 0;
    let i = Math.min(iniNumber,finNumber);
    let end = Math.max(iniNumber,finNumber);
    if(i < 0 || end < 0) return "ERROR";
    if(typeof iniNumber != "number" || typeof finNumber != "number") return "ERROR";
    for(i; i <= end; i++){
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
