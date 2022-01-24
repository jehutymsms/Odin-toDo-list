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
            htmlString: 'All Tasks',
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

    // Fuction List

    // Input Element
    const inputElementCreation = (taskNumber) => {
        let element = globaljs.newElement(mainObjectList.items.item0)

        element.setAttribute('class', `task${taskNumber}`)
        element.setAttribute('id', `task${taskNumber}`)
        element.setAttribute('name', `task${taskNumber}`)

        return element
    }

    // Label Element
    const labelElementCreation = (taskNumber, htmlString) => {
        let element = globaljs.newElement(mainObjectList.items.item1)

        element.setAttribute('class', `task${taskNumber}`)
        element.setAttribute('for', `task${taskNumber}`)
        element.innerHTML = htmlString;

        return element
    }

    // Date Element
    const dateElementCreation = (taskNumber, htmlString) => {
        let element = globaljs.newElement(mainObjectList.items.item2)

        element.setAttribute('class', `task${taskNumber}`)
        element.innerHTML = htmlString;

        return element
    }

    // Edit/delete Section
    const edit_DeleteSection = (className) => {
        let element = globaljs.newElement(mainObjectList.section),
            edit = globaljs.newElement(mainObjectList.edit),
            deLete = globaljs.newElement(mainObjectList.delete);

        element.setAttribute('class', `task${className}`)
        element.append(edit, deLete);

        return element;
    };

    // Default Task Creation
    const taskElementCreation = (taskNumber, taskDueDate, taskName, taskComplete = false) => {
        let elementList = [],
            input = inputElementCreation(taskNumber),
            label = labelElementCreation(taskNumber, taskName),
            pTag = dateElementCreation(taskNumber, taskDueDate),
            section = edit_DeleteSection(taskNumber)

        label.checked = taskComplete
        elementList.push(input, label, pTag, section)
        return elementList
    }

    // Tasks Section Default Creation
    const tasksDefaultSection = (taskName, userData = userStorage.demo) => {
        let element = globaljs.newElement(mainObjectList.tasksSection),
            tasks = taskElementObjectList(taskName, userData)

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
            tasks = tasksDefaultSection(h2Title, userData),
            addTask = globaljs.newElement(mainObjectList.addTaskBtton)

        taskH2.innerHTML = h2Title
        element.id = itemID

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

    const taskElementObjectList = (itemName, userData = userStorage.demo) => {
        let taskObjectList = {},
            taskNumber = userData.projectTitles.indexOf(itemName)

        for (let i = 0; i < userData[`item${taskNumber}`].taskList.length; i++) {
            let dueDate = userData[`item${taskNumber}`].tasks[`task${i}`].dueDate,
                taskName = userData[`item${taskNumber}`].taskList[i],
                taskComplete = userData[`item${taskNumber}`].tasks[`task${i}`].complete

            taskObjectList[`task${i}`] = taskElementCreation(i, dueDate, taskName, taskComplete);
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

    return { createSection: createSection };

})();