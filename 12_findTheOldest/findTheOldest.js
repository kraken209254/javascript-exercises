const findTheOldest = function(array) {
    return array.reduce((oldest,currPerson ) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currAge = getAge(currPerson.yearOfBirth, currPerson.yearOfDeath);
        return oldestAge < currAge ? currPerson : oldest;
    })
};

const getAge = function (birth,death){
    if(!death){
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
