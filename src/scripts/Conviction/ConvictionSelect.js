/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { useConvictions, getConvictions } from "./ConvictionDataProvider.js"
import { CriminalList } from "../Criminals/criminalList.js"
import { saveNotes } from "../notes/NoteDataProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector("#filters-crime")

export const ConvictionSelect = () => {
    // Get all convictions from application state
        // The hint here is GET, in order to use something from DB you need to get it
    getConvictions()
        .then(() => {
            let convictionsArray = useConvictions()
            // let convictionHTML = ""
            render(convictionsArray)
        })
    
}

const render = ConvictionCollection => {
    /*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        Look back at the example provided above.
    */
    contentTarget.innerHTML = `
        <select class="dropdown" id="crime-dropdown">
            <option value="0">Please select a crime...</option>
            ${
                ConvictionCollection.map(crimeObject => {
                    const crimeType = crimeObject.name
                    return `<option>${crimeType}</option>`
                })
            }
        </select>
    `
}

document.querySelector("#notes-nav-link").addEventListener("click", () => {
    ConvictionSelect()
})



//filtering section


const filterEvent = document.querySelector("body")
filterEvent.addEventListener("change", (eventObject) => {
    //chnage is for dd

    const dropdownCrime = eventObject.target.value

    if(eventObject.target.id === "crime-dropdown"){
        CriminalList("crime", dropdownCrime)

        }
    })






