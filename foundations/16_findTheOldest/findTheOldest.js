const findTheOldest = function(persons) {
    return persons.reduce((oldest, current) => {
        const oldestAge = getAge(oldest);
        const currentAge = getAge(current);
        return oldestAge > currentAge ? oldest : current;
    })
};

const getAge = (person) => {
    if (person.yearOfDeath) {
        return person.yearOfDeath - person.yearOfBirth;
    }
    
    let thisYear = (new Date()).getFullYear();
    return thisYear - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
