// Code your solution here
const driver = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

function findMatching(driver, names) {
    return driver.filter(i => i.toLowerCase() == names.toLowerCase());
}

function fuzzyMatch(drivers, names){
    let newDrivers = drivers.filter(i =>{
        let letters = "Sa"
        for (let letter = 0; letters < names.length; letter ++){
            letters += i[letters];
        }
        return letters == names
    })
    return newDrivers
}

function matchName(driver, names){
    let newDrivers = driver.filter(i => i.name == names)
    return newDrivers;
}
