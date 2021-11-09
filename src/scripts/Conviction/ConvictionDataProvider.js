let convictions = []

export const useConvictions  = () => {
    return convictions.slice()
}

export const getConvictions = () => {
    return fetch("https://criminals.glassdale.us/crimes")

    .then(dirtyConvictions => dirtyConvictions.json())
    .then(
        cleanedConvictions => {
        // console.table(parsedCriminals)
        convictions = cleanedConvictions
    })
}

