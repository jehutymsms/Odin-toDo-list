import { globaljs } from '../global';
import { userStorage } from '../userStorage';

export const navSectionCreation = (() => {   
   
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

        element.setAttribute('class', taskNumber)
        element.setAttribute('id', taskNumber)
        element.setAttribute('name', taskNumber)

        return element
    }

    // Label Element
    const labelElementCreation = (taskNumber, htmlString) => {
        let element = globaljs.newElement(mainObjectList.items.item1)

        element.setAttribute('class', taskNumber)
        element.setAttribute('for', taskNumber)
        element.innerHTML = htmlString;

        return element
    }

    // Date Element
    const dateElementCreation = (taskNumber, htmlString) => {
        let element = globaljs.newElement(mainObjectList.items.item2)

        element.setAttribute('class', taskNumber)
        element.innerHTML = htmlString;

        return element
    }

    // Edit/delete Section
    const edit_DeleteSection = (className) => {
        let element = globaljs.newElement(mainObjectList.section),
            edit = globaljs.newElement(mainObjectList.edit),
            deLete = globaljs.newElement(mainObjectList.delete);
            
        element.setAttribute('class', className)
        element.append(edit, deLete);

    return element;
    };

    // Default Task Creation
    const taskElementCreation = (taskNumber, taskDueDate, taskName, taskComplete = false) => {
        let elementList = [],
            input = inputElementCreation(taskNumber),
            label = labelElementCreation(taskNumber, taskName),
            pTag = dateElementCreation(taskNumber, taskDueDate),
            section = edit_DeleteSection()

            label.checked = taskComplete
        elementList.append(input,label,pTag,section)

    }

    // Tasks Section Default Creation
    const tasksDefaultSection = () => {
        let element = globaljs.newElement(mainObjectList.tasksSection)

        for (let i = 0; i < Object.keys(mainObjectList.taskDefaultItems).length; i++) {
            let defaultItem = globaljs.newElement(mainObjectList.taskDefaultItems[`item${i}`]);

            element.appendChild(defaultItem)
        }

        return element
    }

    // Item Section Creation
    const itemSectionCreation = (itemID, h2Title) =>{
        let element = globaljs.newElement(mainObjectList.taskItem),
            taskH2 = globaljs.newElement(mainObjectList.taskItemH2),
            addTask = globaljs.newElement(mainObjectList.addTaskBtton)

        taskH2.innerHTML = h2Title
        element.id = itemID

        element.append(taskH2, addTask)

        return element
    }

    // Footer Section
    const footerSection = () =>{
        let element = globaljs.newElement(mainObjectList.footerSection),
            content = globaljs.newElement(mainObjectList.footerContent)

        element.appendChild(content)

        return element
    }


    // Main Section Items

    const mainSectionCreate = (userData = userStorage.demo) =>{
        let itemObjectList = {}

        for (let i = 0; i < userData.projectTitles.length; i++) {
            itemObjectList[`item${i}`] = itemSectionCreation(`item${i}`,userData.projectTitles[i]);

            
            
        }





        return itemObjectList
    }





    // Main Section Creation
    const mainSectionCreate = () =>{
        let element = globaljs.newElement(mainObjectList.mainSection),
            sectionH2 = globaljs.newElement(mainObjectList.mainSectionH2),
            footer = footerSection()

        element.append(sectionH2, footer)

        return element
    }




    // Sign In section Creation
    const createSection = (info) => {
        let element = globaljs.pageGridConntainer();
        

        globaljs.render.bodyAppendChild(element);
    };

    return { createSection: createSection };

})();