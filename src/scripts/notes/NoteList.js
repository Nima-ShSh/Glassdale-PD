//showcasing but not saving
import { getNotes, useNotes } from "./NoteDataProvider.js"
import { noteCard } from "./NoteCard.js"
import { NoteForm } from "./NoteForm.js"

const contentTarget = document.querySelector("#print-list")

export const noteList = () => {
    getNotes()
        .then(() => {
            let noteArray = useNotes()

            let noteHTML = ""

            noteArray.forEach(singleNoteObj => {

                noteHTML += noteCard(singleNoteObj)

            })

            contentTarget.innerHTML += `
            
            <h2>Notes</h2>
            ${noteHTML}
            `
        })
}

document.querySelector("#notes-nav-link").addEventListener("click", () => {
    NoteForm()
    noteList()
})