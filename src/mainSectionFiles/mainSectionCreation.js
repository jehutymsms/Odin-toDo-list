import { globaljs } from '../global';
import { userStorage } from '../userStorage';

export const mainSectionCreation = (() => {

    // Sign in Object List
    const mainObjectList = {

        mainSection: {
            tag: 'div',
            id: 'mainSection',
        },

        mainSectionH2: {
            tag: 'h2',
            htmlString: 'All Projects',
        },

        taskItem: {
            tag: 'div',
            id: '',
            classId: 'items',
        },

        taskItemH2: {
            tag: 'h2',
            htmlString: '',
        },

        tasksSection: {
            tag: 'div',
            classId: 'tasks',
        },

        taskDefaultItems: {
            item0: {
                tag: 'h1',
                htmlString: 'Complete',
            },
            item1: {
                tag: 'h2',
                htmlString: 'Tasks',
            },
            item2: {
                tag: 'h2',
                htmlString: 'Due Date',
            },
            item3: {
                tag: 'h2',
                htmlString: 'Edit',
            },
        },

        items: {
            item0: {
                tag: 'input',
                classId: '',
                type: 'checkbox',
                id: '',
                name: '',
            },
            item1: {
                tag: 'label',
                classId: '',
                for: '',
                htmlString: '',
            },
            item2: {
                tag: 'p',
                classId: '',
                htmlString: '',
            }
        },

        section: {
            tag: 'section',
            classId: '',
        },

        edit: {
            tag: 'div',
            id: 'edit',
            classId: 'edit',
        },

        delete: {
            tag: 'div',
            id: 'delete',
            classId: 'delete',
        },

        addTaskBtton: {
            tag: 'button',
            classId: 'addTask',
            htmlString: 'Add Task',
        },

        footerSection: {
            tag: 'div',
            id: 'footerSection',
        },

        footerContent: {
            tag: 'h2',
            htmlString: 'Made by Andrew Humphries',
        },

    };

    // Edit Task Object List
    const editTaskList = {
        editTaskContainer: {
            tag: 'div',
            classId: 'editTaskContainer',
        },
        editTask: {
            tag: 'div',
            classId: 'editTask',
        },
        editTaskSelectSection: {
            tag: 'section',
            classId: 'editTaskSelect',
        },
        editTaskSelectLabel: {
            tag: 'label',
            for: 'editTaskSelect',
            htmlString: 'Task',
        },
        editTaskSelectTextArea: {
            tag: 'textarea',
            name: 'Task',
            cols: '10',
            rows: '1',
        },
        editDateSelect: {
            tag: 'section',
            classId: 'editDateSelect',
        },

        editDateSelectLabel: {
            tag: 'label',
            for: 'editDateSelect',
            htmlString: 'Date',
        },
        editDateSelectInput: {
            tag: 'input',
            type: 'date',
            name: 'editDateSelect',
        },
        doneCancelSection: {
            tag: 'section',
            classId: 'done-cancelSection',
        },
        done: {
            tag: 'div',
            classId: 'done',
        },
        cancel: {
            tag: 'div',
            classId: 'cancel',
        },
    }
    // Fuction List


// Main Task Edit Creation Elements

    // Edit Task Container Element
    const editTaskContainerElement = (taskNumber, itemID) => {
        let element = globaljs.newElement(editTaskList.editTaskContainer)

        element.setAttribute('id', `editTaskContainerT${taskNumber}I${itemID}`)

        return element
    }

    const editTaskElement = (taskNumber, itemID) => {
        let element = globaljs.newElement(editTaskList.editTask)

        element.setAttribute('id', `editTaskT${taskNumber}I${itemID}`)

        return element
    }

    const editTaskSelectSectionElement = () => {
        let element = globaljs.newElement(editTaskList.editTaskSelectSection)

        return element
    }

    const editTaskSelectLabelElement = () => {
        let element = globaljs.newElement(editTaskList.editTaskSelectLabel)

        return element
    }

    const editTaskSelectTextAreaElement = (taskNumber, itemID) => {
        let element = globaljs.newElement(editTaskList.editTaskSelectTextArea)

        element.setAttribute('id', `editTaskSelectT${taskNumber}I${itemID}`)

        return element
    }

    const editDateSelectSectionElement = () => {
        let element = globaljs.newElement(editTaskList.editDateSelect)

        return element
    }

    const editDateSelectLabelElement = () => {
        let element = globaljs.newElement(editTaskList.editDateSelectLabel)

        return element
    }

    const editDateSelectInputElement = (taskNumber, itemID) => {
        let element = globaljs.newElement(editTaskList.editDateSelectInput)

        element.setAttribute('id', `editDateSelectT${taskNumber}I${itemID}`)

        return element
    }

    const doneCancelSectionElement = () => {
        let element = globaljs.newElement(editTaskList.doneCancelSection)
        return element
    }

    const doneElement = (itemID) => {
        let element = globaljs.newElement(editTaskList.done)
        element.id = `doneI${itemID}`
        return element
    }

    const cancelElement = (itemID) => {
        let element = globaljs.newElement(editTaskList.cancel)
        element.id = `cancelI${itemID}`
        return element
    }


    const editTaskElementCreation = (taskNumber, itemID) => {
        let containerElement = editTaskContainerElement(taskNumber, itemID),
            editTask = editTaskElement(taskNumber, itemID),
            editTaskSelect = editTaskSelectSectionElement(),
            editDateSelect = editDateSelectSectionElement(),
            doneCancelSection = doneCancelSectionElement()

            editTaskSelect.append(editTaskSelectLabelElement(),editTaskSelectTextAreaElement(taskNumber, itemID))

            editDateSelect.append(editDateSelectLabelElement(),editDateSelectInputElement(taskNumber, itemID))

            doneCancelSection.append(doneElement(taskNumber), cancelElement(taskNumber))

            editTask.append(editTaskSelect, editDateSelect, doneCancelSection)

            containerElement.append(editTask)

        return containerElement
    }

// Main Task Creation Elements

    // Input Element
    const inputElementCreation = (taskNumber, itemID) => {
        let element = globaljs.newElement(mainObjectList.items.item0)

        element.setAttribute('class', `task${taskNumber}p${itemID}`)
        element.setAttribute('id', `task${taskNumber}p${itemID}`)
        element.setAttribute('name', `task${taskNumber}p${itemID}`)

        return element
    }

    // Label Element
    const labelElementCreation = (taskNumber, htmlString, itemID) => {
        let element = globaljs.newElement(mainObjectList.items.item1)

        element.setAttribute('class', `task${taskNumber}p${itemID}`)
        element.setAttribute('for', `task${taskNumber}p${itemID}`)
        element.innerHTML = htmlString;

        return element
    }

    // Date Element
    const dateElementCreation = (taskNumber, htmlString, itemID) => {
        let element = globaljs.newElement(mainObjectList.items.item2)

        element.setAttribute('class', `task${taskNumber}p${itemID}`)
        element.innerHTML = htmlString;

        return element
    }

    // Edit/delete Section
    const edit_DeleteSection = (className, itemID) => {
        let element = globaljs.newElement(mainObjectList.section),
            edit = globaljs.newElement(mainObjectList.edit),
            deLete = globaljs.newElement(mainObjectList.delete);

        element.setAttribute('class', `task${className}p${itemID}`)
        edit.setAttribute('id', `edit${className}p${itemID}`)
        deLete.setAttribute('id', `delete${className}p${itemID}`)
        element.append(edit, deLete);

        return element;
    };

    // Default Task Creation
    const taskElementCreation = (taskNumber, taskDueDate, taskName, itemID, taskComplete = false) => {
        let elementList = [],
            input = inputElementCreation(taskNumber, itemID),
            label = labelElementCreation(taskNumber, taskName, itemID),
            pTag = dateElementCreation(taskNumber, taskDueDate, itemID),
            section = edit_DeleteSection(taskNumber, itemID)

        label.checked = taskComplete
        elementList.push(input, label, pTag, section)
        return elementList
    }

    // Tasks Section Default Creation
    const tasksDefaultSection = (taskName, itemID, userData = userStorage.demo) => {
        let element = globaljs.newElement(mainObjectList.tasksSection),
            tasks = taskElementObjectList(taskName, itemID, userData)

        for (let i = 0; i < Object.keys(mainObjectList.taskDefaultItems).length; i++) {
            let defaultItem = globaljs.newElement(mainObjectList.taskDefaultItems[`item${i}`]);

            element.appendChild(defaultItem)
        }

        for (let i = 0; i < Object.keys(tasks).length; i++) {
            let task = tasks[`task${i}`]

            for (let x = 0; x < task.length; x++) {
                element.appendChild(task[x]);
                
            }
        }

        return element
    }

    // Item Section Creation
    const itemSectionCreation = (itemID, h2Title, userData = userStorage.demo) => {
        let element = globaljs.newElement(mainObjectList.taskItem),
            taskH2 = globaljs.newElement(mainObjectList.taskItemH2),
            tasks = tasksDefaultSection(h2Title, itemID, userData),
            addTask = globaljs.newElement(mainObjectList.addTaskBtton)

        taskH2.innerHTML = h2Title
        element.id = `item${itemID}`
        element.append(taskH2, tasks, addTask)

        return element
    }

    // Footer Section
    const footerSection = () => {
        let element = globaljs.newElement(mainObjectList.footerSection),
            content = globaljs.newElement(mainObjectList.footerContent)

        element.appendChild(content)

        return element
    }


    // Task Element List
    const taskElementObjectList = (itemName, itemID,userData = userStorage.demo) => {
        let taskObjectList = {},
            taskNumber = userData.projectTitles.indexOf(itemName)

        for (let i = 0; i < userData[`item${taskNumber}`].taskList.length; i++) {
            let dueDate = userData[`item${taskNumber}`].tasks[`task${i}`].dueDate,
                taskName = userData[`item${taskNumber}`].taskList[i],
                taskComplete = userData[`item${taskNumber}`].tasks[`task${i}`].complete

            taskObjectList[`task${i}`] = taskElementCreation(i, dueDate, taskName, itemID, taskComplete);
        }
        return taskObjectList
    }

    // Item Section Element List
    const itemSectionElementList = (userData = userStorage.demo) => {
        let itemListObject = {}

        for (let i = 0; i < userData.projectTitles.length; i++) {
            let itemName = userData.projectTitles[i]

            itemListObject[`item${i}`] = itemSectionCreation(i, itemName, userData);

        }

        return itemListObject
    }



    // Main Section Creation
    const createSection = (userData = userStorage.demo) => {
        let element = globaljs.newElement(mainObjectList.mainSection),
            sectionH2 = globaljs.newElement(mainObjectList.mainSectionH2),
            items = itemSectionElementList(userData),
            footer = footerSection()

        element.appendChild(sectionH2)

        for (let i = 0; i < Object.keys(items).length; i++) {
            element.appendChild(items[`item${i}`])
        }

        element.appendChild(footer)

        return element
    }

    return { createSection, editTaskElementCreation };

})();