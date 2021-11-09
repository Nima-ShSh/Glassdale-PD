let facs = []

export const useFacs  = () => {
    return facs.slice()
}

export const getFacs = () => {
    return fetch("https://criminals.glassdale.us/facilities")

    .then(response => response.json())
    .then(
        parsedFacs => {
        console.table(parsedFacs)
        facs = parsedFacs
    })
}

