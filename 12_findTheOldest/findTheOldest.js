const findAge = (yBirth, yDeath) => {
    //for people with no death date
    let age;
    if (!yDeath) {
        let todayDate = new Date().getFullYear();
        age = todayDate - yBirth;
    }
    //for people with death date
    else {
        age = yDeath - yBirth; 
    }
    return age;
}

const findTheOldest = function(arr) {
    const eldest = arr.reduce((oldestPerson, person) => {
        //getting the age of the oldestPerson
        const oldestAge = findAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
        const currAge = findAge(person.yearOfBirth, person.yearOfDeath);
        //make the new oldestPerson the current person if age is greater
        return currAge > oldestAge ? person : oldestPerson;
    });
    return eldest;
};


console.log(findTheOldest([
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]));

// Do not edit below this line
module.exports = findTheOldest;
