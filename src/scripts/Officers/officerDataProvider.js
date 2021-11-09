let officers = []
//we're going to reach out to a database to get our raw data - API

export const useOfficers  = () => {
    return officers.slice()
}

export const getOfficers = () => {
    return fetch("https://criminals.glassdale.us/officers")
    //go to this place and fetch me the raw data, thank you :)
    //.then(response => response.json()) //promises us that the previous tasks has been completed
    .then(dirtyMoney => dirtyMoney.json()) //cleaned!, the string coming in was dirty money
        //this outputs something and next lines uses it, automatically knows the output on next declared variable
    .then(cleanMoney => {
        console.table(cleanMoney)
        officers = cleanMoney
    })
}