const removeFromArray = function(array, ...numbersToRemove) {
    for(const number of numbersToRemove){
        array.forEach((element,index) => {
            console.log(element);
            console.log(index);
            console.log(number);
            if(element === number){
                array.splice(index,1);

            }
        })
    }
    return array;
};
console.log(removeFromArray([1,2,3,4],4));
// Do not edit below this line
module.exports = removeFromArray;
