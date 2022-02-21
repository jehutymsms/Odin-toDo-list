import { userStorage } from '../userStorage';
import { mainSectionCreation } from './mainSectionCreation';

export const mainFunction = (user = userStorage.demo) => {
    // Cache Dom List
    let pageGridContainer = document.getElementById('pageGridContainer')

    // This will be null of main section is not present
    console.log(document.getElementById('mainSection'))

    // Function List
    // Hide/Show Item Function
    
    // Edit Item

    // Delete Item

    // Event Binding 
    for (let i = 0; i < user.projectTitles.length; i++) {
        for (let x = 0; x < user[`item${i}`].taskList.length; x++) {
            let task = document.getElementById(`edit${x}p${i}`)
        }
    }
    
};
