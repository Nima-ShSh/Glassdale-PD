
import { fac } from "./facCard.js"
import { getFacs, useFacs } from "./facDataProvider.js"



const contentTarget = document.querySelector("#print-list")

export const facList = () => {
    getFacs()
        .then(() => {
            let facArray = useFacs()

            let facHTML = ""

            facArray.forEach(singleFacObj => {

                facHTML += fac(singleFacObj)

            })

            contentTarget.innerHTML = facHTML

        })

}

document.querySelector("#facilities-nav-link").addEventListener("click", () => {
    facList()
})