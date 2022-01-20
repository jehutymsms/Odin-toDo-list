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
    const taskElementCreation = (taskNumber, taskDueDate, taskName, taskComplete) => {

    }



    // Default Item Creation

    // Footer Section


    // Sign In section Creation
    const createSection = (info) => {
        let element = globaljs.pageGridConntainer();
        

        globaljs.render.bodyAppendChild(element);
    };

    return { createSection: createSection };

})();