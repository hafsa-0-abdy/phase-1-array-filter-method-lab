const findMatching =(drivers,name) =>{
     return drivers.filter(driver=>
        driver.toLowerCase() ===
        name.toLowerCase());
};

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

console.log(findMatching(drivers, "Bobby")

);


const fuzzyMatch =(drivers,letters) =>{
    return drivers.filter(driver =>
        driver .toLowerCase().startsWith(letters.toLowerCase())
    );
};

const matchName =(drivers,name) =>{
    return drivers.filter(driver =>
        driver.name.toLowerCase()===
        name.toLowerCase()
    );
};

