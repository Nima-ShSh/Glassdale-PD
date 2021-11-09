
//import stmts bc html wanna see  <0.0>

import { CriminalList } from "./Criminals/criminalList.js"
import { officerList } from "./Officers/officerList.js"
import { facList } from "./Fac/facList.js"
import { NoteForm } from "./notes/NoteForm.js"
import { ConvictionSelect } from "./Conviction/ConvictionSelect.js"


//**dark mode btn
const darkModeButton = document.querySelector("#dark-mode")
darkModeButton.addEventListener("click", function(){

    //  Select the entire body tag
    const bodyElement = document.querySelector("body")

    //  Add a class
    bodyElement.classList.toggle("dark-background")
})

