import moment from 'moment';
import { userStorage } from '../userStorage';
import { mainSectionCreation } from './mainSectionCreation';

export const mainSectionFunction = (() => {

    const mainFunction = (user = userStorage.demo) => {
        // Cache Dom List
        let pageGridContainer = document.getElementById('pageGridContainer'),
            username = document.getElementById('userName')

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

        const hideShowAddButton = (itemNumber) => {
            let addElement = document.getElementById(`addItem${itemNumber}`)

            if (addElement.style.display === 'none') {
                addElement.style.display = 'block'
            } else {
                addElement.style.display = 'none'
            }
        }

        // remove Edit Task Element
        const removeEditElement = (taskNumber, itemID) => {
            document.getElementById(`editTaskContainerT${taskNumber}I${itemID}`).remove()
        }

        // Create a function that specifically updates the task based on the Project number and task number. Include all needed elements to retrieve in that function
        // Edit Item
        const updateItemInfo = (projectNumber, taskNumber) => {
            let taskElements = document.getElementsByClassName(`task${taskNumber}p${projectNumber}`),
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

        const updateStoredItemComplete = (projectNumber, taskNumber, CompleteBoolean) => {
            let user = userStorage.getdataJSONStorage(username.innerHTML),
                userInfo = user[`item${projectNumber}`].tasks[`task${taskNumber}`]

            userInfo.complete = CompleteBoolean
            userStorage.storedataJSONStorage(user, username.innerHTML)
        }
        // Delete Item
        const addStoredItem = (projectNumber, taskNumber, itemInfo) => {
            let user = userStorage.getdataJSONStorage(username.innerHTML)

            user[`item${projectNumber}`].taskList.push(itemInfo.itemName)
            user[`item${projectNumber}`].tasks[`task${taskNumber}`] = {
                dueDate: itemInfo.itemDueDate,
                complete: false,
            }
            userStorage.storedataJSONStorage(user, username.innerHTML)
        }

        // Event Binding 
        for (let i = 0; i < user.projectTitles.length; i++) {
            let addItemElement = document.getElementById(`addItem${i}`),
                taskList = user[`item${i}`].taskList

            addItemElement.addEventListener('click', function () {

                let newTaskContainer = mainSectionCreation.editTaskElementCreation(taskList.length, i),
                    parentElement = addItemElement.parentNode, mainSection = document.getElementById('mainSection')

                parentElement.insertBefore(newTaskContainer, addItemElement)
                let cancelButton = document.getElementById(`cancelI${taskList.length}`),
                    doneButton = document.getElementById(`doneI${taskList.length}`)

                cancelButton.addEventListener('click', function () {
                    removeEditElement(taskList.length, i)
                    hideShowAddButton(i)
                })

                doneButton.addEventListener('click', function () {
                    let editTaskSelect = document.getElementById(`editTaskSelectT${taskList.length}I${i}`),
                        editDateSelect = document.getElementById(`editDateSelectT${taskList.length}I${i}`)

                    let itemObject = {
                        itemName: editTaskSelect.value,
                        itemDueDate: moment(editDateSelect.value).format('M/D/YY'),
                    }


                    if (editTaskSelect.value.replace(/\s/g, '') !== '') {
                        if (editDateSelect.value.replace(/\s/g, '') === '') {
                            itemObject.itemDueDate = moment(new Date()).format('M/D/YY')
                        }
                        addStoredItem(i, taskList.length, itemObject)
                    }

                    removeEditElement(taskList.length, i)
                    hideShowAddButton(i)

                    mainSection.remove()
                    pageGridContainer.appendChild(mainSectionCreation.createSection(userStorage.getdataJSONStorage(username.innerHTML)))
                    mainFunction(userStorage.getdataJSONStorage(username.innerHTML))

                })
                hideShowAddButton(i)
            })


            for (let x = 0; x < taskList.length; x++) {
                let editButton = document.getElementById(`edit${x}p${i}`),
                    deleteButton = document.getElementById(`delete${x}p${i}`),
                    inputElement = document.getElementById(`task${x}p${i}`)

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
                            updateStoredItemName(i, x, editTaskSelect.value)
                            updateItemInfo(i, x)
                        }

                        if (editDateSelect.value.replace(/\s/g, '') !== '') {

                            updateStoredItemDueDate(i, x, moment(editDateSelect.value).format('M/D/YY'))
                            updateItemInfo(i, x)
                        }
                        removeEditElement(x, i)
                        hideShowTask(x, i)
                    })
                    hideShowTask(x, i)
                })

                deleteButton.addEventListener('click', function () {
                    let taskElements = document.getElementsByClassName(`task${x}p${i}`),
                        mainSection = document.getElementById('mainSection')

                    for (let i = 0; i < 4; i++) {
                        taskElements[0].remove()
                    }

                    userStorage.storedataJSONStorage(userStorage.userDataCollection(username.innerHTML), username.innerHTML)
                    mainSection.remove()
                    pageGridContainer.appendChild(mainSectionCreation.createSection(userStorage.getdataJSONStorage(username.innerHTML)))
                    mainFunction(userStorage.getdataJSONStorage(username.innerHTML))
                })
                inputElement.addEventListener('click', function () {
                    updateStoredItemComplete(i, x, inputElement.checked)
                })
            }
        }
    };

    return { mainFunction }
})();