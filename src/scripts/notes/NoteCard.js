export const noteCard = (noteObject) => {
    return `
    <section>
    <div>${noteObject.dateOfNote}</div>
    <div>${noteObject.noteText}</div>
    <div>${noteObject.suspect}</div>
    </section>
    `
}



