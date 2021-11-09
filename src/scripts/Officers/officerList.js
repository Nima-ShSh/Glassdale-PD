import { officer } from "./officerCard.js"
import { getOfficers, useOfficers } from "./officerDataProvider.js"


const contentTarget = document.querySelector("#print-list")

export const officerList = () => {
    getOfficers()
        .then(() => {
            let officersArray = useOfficers()   // by itself useOfficers is an empty array but you need to use getOfficers to populate information in it

            let officerHTML = ""

            officersArray.forEach(singleOfficerObj => {

                officerHTML += officer(singleOfficerObj)

            }) //for each is the same as for of

            contentTarget.innerHTML = officerHTML

        })

}

document.querySelector("#officers-nav-link").addEventListener("click", () => {
    officerList()
})