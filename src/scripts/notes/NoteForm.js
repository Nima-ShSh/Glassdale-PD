import { saveNotes } from "./NoteDataProvider.js"
import { noteList } from "./NoteList.js"

const contentTarget = document.querySelector("#print-list")

// Handle browser-generated click event in component
contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        //another way is to store in a variable and then add it to the key/value pair
            // let entryText = document.querySelector("#noteText").value
            // noteText: entryText

        // Make a new object representation of a note
        const newNote = {
            // Key/value pairs here
            dateOfNote: document.querySelector("#date-text").value,
            noteText: document.querySelector("#note-text").value,
            suspect: document.querySelector("#suspect-text").value
        }
        console.log(newNote)

        //clearing the fields after the button is pressed and data is stored
        // document.querySelector("#date-text").value = ""
        // document.querySelector("#note-text").value = ""
        // document.querySelector("#suspect-text").value = ""


        // Change API state and application state
        saveNotes(newNote)
        .then(noteList) // Refresh your API json file
    }
})


 //Put some input fields and prompts here
export const NoteForm = () => {
    contentTarget.innerHTML = `    
        <input type="date" id="date-text" placeholder="DATE, INSERTT"></input>
        <input type="text" id="note-text" placeholder="NOTE, INSERTT"></input>
        <input type="text" id="suspect-text" placeholder="SUSPECT NAME, INSERTTTTTTT"></input>
        <button id="saveNote">Save Note</button>
    `
}


