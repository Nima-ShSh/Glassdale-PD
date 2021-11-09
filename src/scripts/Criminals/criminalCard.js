export const criminal = (Object) => {
    return `
    <section>
    <div>${Object.name}</div>
    <div>${Object.age}</div>
    <div>${Object.conviction}</div>
    <div>
    ${new Date(Object.incarceration.start).toLocaleDateString('en-US')}</div>
    <div>
    ${new Date(Object.incarceration.end).toLocaleDateString('en-US')} </div>
    <div>${Object.arrestingOfficer}</div>
    </section>
    `
}
//print to DOM


