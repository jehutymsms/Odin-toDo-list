import { isEmpty } from 'lodash';
import { userStorage } from '../userStorage';
import { mainSectionCreation } from './mainSectionCreation';

export const mainSectionFunction = (() => {

    const mainFunction = (user = userStorage.demo) => {
        // Cache Dom List
        let pageGridContainer = document.getElementById('pageGridContainer'),
            username = document.getElementById('userName')

        // This will be null of main section is not present
        console.log(document.getElementById('mainSection'))

        // Function List
        // Hide/Show Item Function
        const hideShowTask = (itemNumber, taskNumber) => {
            let taskElements = document.getElementsByClassName(`task${itemNumber}p${taskNumber}`)

            if (taskElements[0].style.display === 'none') {
                for (let i = 0; i < 3; i++) {
                    taskElements[i].style.display = 'block'
                }
                taskElements[3].style.display = 'flex'

            } else {
                for (let i = 0; i < taskElements.length; i++) {
                    taskElements[i].style.display = 'none'
                }
            }

        }

        // remove Edit Task Element
        const removeEditElement = (taskNumber, itemID) => {
            document.getElementById(`editTaskContainerT${taskNumber}I${itemID}`).remove()

        }

        // Create a function that specifically updates the task based on the Project number and task number. Include all needed elements to retrieve in that function
        // Edit Item
        const updateItemInfo = (projectNumber, taskNumber) => {
            let taskElements = document.getElementsByClassName(`task${projectNumber}p${taskNumber}`),
                userInfo = userStorage.getdataJSONStorage(username.innerHTML)[`item${projectNumber}`],
                label = taskElements[1],
                date = taskElements[2]

            label.innerHTML = userInfo.taskList[taskNumber]
            date.innerHTML = userInfo.tasks[`task${taskNumber}`].dueDate
        }

        const updateStoredItemName = (projectNumber, taskNumber, updatedName) => {
            let user = userStorage.getdataJSONStorage(username.innerHTML),
                userInfo = user[`item${projectNumber}`]

            userInfo.taskList[taskNumber] = updatedName
            userStorage.storedataJSONStorage(user, username.innerHTML)
        }

         // The value Entered into this function needs to be corrected. It subtracts 1 day from what is input
        const updateStoredItemDueDate = (projectNumber, taskNumber, dueDate) => {
            let user = userStorage.getdataJSONStorage(username.innerHTML),
                userInfo = user[`item${projectNumber}`]

            userInfo.tasks[`task${taskNumber}`].dueDate = dueDate
            userStorage.storedataJSONStorage(user, username.innerHTML)
        }

        // Delete Item

        // Event Binding 
        for (let i = 0; i < user.projectTitles.length; i++) {
            for (let x = 0; x < user[`item${i}`].taskList.length; x++) {
                let editButton = document.getElementById(`edit${x}p${i}`),
                    deleteButton = document.getElementById(`delete${x}p${i}`)

                editButton.addEventListener('click', function () {
                    let inputElement = document.getElementById(`task${x}p${i}`),
                        parentElement = document.getElementById(`task${x}p${i}`).parentNode,
                        newEditTaskContainer = mainSectionCreation.editTaskElementCreation(x, i)

                    parentElement.insertBefore(newEditTaskContainer, inputElement)


                    let cancelButton = document.getElementById(`cancelI${x}`),
                        doneButton = document.getElementById(`doneI${x}`)


                    cancelButton.addEventListener('click', function () {
                        removeEditElement(x, i)
                        hideShowTask(x, i)
                    })

                    doneButton.addEventListener('click', function () {
                        let editTaskSelect = document.getElementById(`editTaskSelectT${x}I${i}`),
                            editDateSelect = document.getElementById(`editDateSelectT${x}I${i}`)


                        if (editTaskSelect.value.replace(/\s/g, '') !== '') {
                            updateStoredItemName(x, i, editTaskSelect.value)
                            updateItemInfo(x, i)
                        }

                       


                        if (editDateSelect.value.replace(/\s/g, '') !== '') {

                             // The value Entered into this function needs to be corrected. It subtracts 1 day from what is input
                            updateStoredItemDueDate(x, i, new Date(editDateSelect.value).toLocaleDateString(undefined, { day: 'numeric', month: 'numeric', year: '2-digit' }))
                            updateItemInfo(x, i)
                        }
                        removeEditElement(x, i)
                        hideShowTask(x, i)

                    })

                    hideShowTask(x, i)
                })

                deleteButton.addEventListener('click', function () {
                    let taskElements = document.getElementsByClassName(`task${x}p${i}`)

                    for (let i = 0; i < 4; i++) {
                        taskElements[0].remove()
                    }

                    userStorage.storedataJSONStorage(userStorage.userDataCollection(username.innerHTML), username.innerHTML)


                })
            }
        }
    };

    return { mainFunction }
})();