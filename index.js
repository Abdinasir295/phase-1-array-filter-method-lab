const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
    function findMatching(drivers,name){    
        const  matches=[]   
        for(const driver of drivers){   
            if(driver.toLowerCase()===name.toLowerCase()){  
                matches.push(driver);
            }
        }   
        return matches;

}   
function fuzzyMatch(drivers, letters) {
    const matches = [];
    
    for (const driver of drivers) {   
        if (driver.toLowerCase().startsWith(letters.toLowerCase())) {
            matches.push(driver);   
        }
    }   

    return matches;
}
function matchName(drivers, name) {
    const matches = [];
  
    for (const driver of drivers) {
      if (driver.name.toLowerCase() === name.toLowerCase()) {
        matches.push(driver);
      }
    }
  
    return matches;
  }
  