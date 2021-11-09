
import { criminal } from "./criminalCard.js"
import { getCriminals, useCriminals } from "./criminalDataProvider.js"
import { OfficerSelect } from "../Officers/OfficerSelect.js";
import { ConvictionSelect } from "../Conviction/ConvictionSelect.js";


export const CriminalList = (typeOfDropdown, selectedOption) => {
    let criminalListContainer = document.querySelector("#print-list");

    criminalListContainer.innerHTML = ""
  
    getCriminals().then(() => {
      let criminals = useCriminals();
  
      // If we get input from the convictions filter, filter our criminals so that we only see ones with that conviction
      if(typeOfDropdown === "crime"){   //if crimeSelected exists
      
        criminals = criminals.filter(singleCriminalInLoop => {
            return singleCriminalInLoop.conviction === selectedOption
                    //.filter returns an empty array
                    //crimeSelected is a little party of all the peeps that like
                        //the same type of crime. Just hanging out

        // write the condition here to filter for criminals whose crime matches the convictionFilter value
        })
    } 
        
    else if(typeOfDropdown === "officer"){

        criminals = criminals.filter(officerCriminalObjInLoop => {
            
            return officerCriminalObjInLoop.arrestingOfficer === selectedOption
        })

    }


      // at this point, the value criminals will either be all of the criminals (if no convictionFilter was selected) or the criminals that match the crime selected 
      // either way, we want to print them!
      criminals.forEach((crimeSelected) => {
        criminalListContainer.innerHTML += criminal(crimeSelected);
      }); //end foreach


    //   criminals.forEach((officerSelected) => {
    //     officerListContainer.innerHTML += criminal(officerSelected);
    //   }) //end foreach




    }); //end getCriminals()
  }; //end main function



// //*********** fetch the names of criminals that have the same name of the officer in their array of objs
//       export const CriminalOfficerList = (officerSelected) => {
//           let officerListContainer = document.querySelector("#enter HTML class here")
//           officerListContainer.innerHTML = ""

//           getCriminals().then(() => {
//               let officerCriminals = useCriminals();

//         if(officerSelected){
//             officerCriminals = officerCriminals.filter(officerCriminalObjInLoop => {
//                 return officerCriminalObjInLoop.arrestingOfficer === officerSelected
//             })
//             } //end if

//             officerCriminals.forEach((officerSelected) => {
//                 officerListContainer.innerHTML += criminal(officerSelected);
//               }) //end foreach

//           }) //end getCriminals()
//         } //end main function


    

  
  document.querySelector("#criminals-nav-link").addEventListener("click", () => {
      CriminalList()
    })


















      // const contentTarget = document.querySelector("#print-list")
      
      // export const criminalList = () => {
      //     getCriminals()
      //         .then(() => {
      //             let criminalArray = useCriminals()
      
      //             let criminalHTML = ""
      
      //             criminalArray.forEach(singleCriminalObj => {
      
      //                 criminalHTML += criminal(singleCriminalObj)
      
      //             })
      
      //             contentTarget.innerHTML = criminalHTML
      
      //         })
      
      // }
