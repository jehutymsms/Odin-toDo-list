import { userStorage } from '../userStorage';
import { mainSectionCreation } from './mainSectionCreation';

export const mainFunction = (user = userStorage.demo) => {
    // Cache Dom List
    let pageGridContainer = document.getElementById('pageGridContainer')

    // This will be null of main section is not present
    console.log(document.getElementById('mainSection'))

    // Function List
    // Hide/Show Item Function
    const hideShowTask = (itemNumber, taskNumber) => {
        let taskElements = document.getElementsByClassName(`task${itemNumber}p${taskNumber}`)
        console.log(taskElements)
        for (let i = 0; i < taskElements.length; i++) {
            if (taskElements[i].style.display === 'none') {
                console.log('Element is hidden')
            }else{
                console.log('Element is Showing')
            }
        }

        

    }
    hideShowTask(0,0)
    // Edit Item

    // Delete Item

    // Event Binding 
    for (let i = 0; i < user.projectTitles.length; i++) {
        for (let x = 0; x < user[`item${i}`].taskList.length; x++) {
            let task = document.getElementById(`edit${x}p${i}`)
        }
    }
    
};
