
import { useOfficers, getOfficers } from "./officerDataProvider.js"
import { CriminalList } from "../Criminals/criminalList.js"
import { saveNotes } from "../notes/NoteDataProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector("#filters-officer-criminal")

export const OfficerSelect = () => {
    // Get all convictions from application state
        // The hint here is GET, in order to use something from DB you need to get it
    getOfficers()
        .then(() => {
            let officersArray = useOfficers()
            // let convictionHTML = ""
            render(officersArray)
        })
    
}

const render = OfficerCollection => {
    /*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        Look back at the example provided above.
    */
    contentTarget.innerHTML = `
        <select class="dropdown" id="officer-crime-dropdown">
            <option value="0">Please select a an officer...</option>
            ${
                OfficerCollection.map(officerObject => {
                    const officerType = officerObject.name
                    return `<option>${officerType}</option>`
                })
            }
        </select>
    `
}

document.querySelector("#notes-nav-link").addEventListener("click", () => {
    OfficerSelect()
})



//filtering section


const filterEvent = document.querySelector("body")
filterEvent.addEventListener("change", (eventObject) => {
    //chnage is for dd

    const dropdownOfficerCrime = eventObject.target.value

    if(eventObject.target.id === "officer-crime-dropdown"){
        CriminalList("officer", dropdownOfficerCrime)

        }
    })






