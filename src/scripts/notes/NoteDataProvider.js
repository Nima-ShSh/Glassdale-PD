
let notesArray = []

export const useNotes  = () => {
    return notesArray.slice()
}


export const getNotes = () => {
    return fetch('http://localhost:8088/notes')
        .then(dirtyNotes => dirtyNotes.json())
        .then(cleanedNotes => {
            notesArray = cleanedNotes
        })

}

export const saveNotes = (note) => {
    return fetch('http://localhost:8088/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })

    .then(getNotes)
    //wait.. and then refresh & get getNotes ^
    //getNotes shows the notes and saveNotes saves.. duh
            // After we add a note, get them all again so our new note appears in our collection
}


