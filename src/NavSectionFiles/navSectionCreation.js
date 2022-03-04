import { globaljs } from '../global';
import { omit } from 'lodash'

export const navSectionCreation = (() => {

    // Navigation Object List
    const navObjectList = {


        navSection: {
            tag: 'div',
            id: 'navSection',
        },

        navSectionOptions: {
            item1: {
                tag: 'h1',
                htmlString: '+',
            },
            item2: {
                tag: 'h2',
                htmlString: 'Checkist',
            },
        },

        navMenuSection: {
            tag: 'div',
            id: 'navMenuSection',
            classId: 'navMenuSectionHide',
        },

        defaultSelector: {
            tag: 'div',
            id: 'defaultSelector',
        },

        homeTitle: {
            tag: 'h2',
            htmlString: 'Home',
        },

        projectSelector: {
            tag: 'div',
            id: 'projectSelector',
        },

        projectsTitle: {
            tag: 'h2',
            htmlString: 'Projects',
        },

        projectList: {
            tag: 'ul',
        },

        projectInfo: {
            item: {
                tag: 'li',
            },
        },

        section: {
            tag: 'section',
        },

        edit: {
            tag: 'div',
            id: 'editProj',
            classId: 'edit',
        },

        delete: {
            tag: 'div',
            id: 'deleteProj',
            classId: 'delete',
        },

        button: {
            tag: 'button',
            id: 'addProject',
            classId: 'addProject',
            htmlString: 'Add Project',
        },
        logout: {
            tag: 'button',
            id: 'logOut',
            htmlString: 'Log Out',
        },

    };

    // Edit Project Object List
    const editProjList = {
        editProjectContainer: {
            tag: 'div',
            id: 'editProjectContainer',
        },
        editTaskSelect: {
            tag: 'section',
            classId: 'editTaskSelect',
        },
        label: {
            tag: 'label',
            classId: 'editTaskSelect',
            for: 'editTaskSelect',
            htmlString: '',
        },
        input: {
            tag: 'input',
            id: 'editTaskSelect',
            classId: 'editTaskSelect',
            for: 'editTaskSelect',
            type: 'textarea',
            name: 'userName',
        },
        doneCancelSection: {
            tag: 'section',
            classId: 'done-cancelSection',
        },
        done: {
            tag: 'div',
            id: 'done',
            classId: 'done',
        },
        cancel: {
            tag: 'div',
            id: 'cancel',
            classId: 'cancel',
        },
    }

    // Fuction List

    // Edit Project Section
    const editProjectContainer = (projectTitle, projectNumber) => {
        let elementObject = {};

        for (const [key, value] of Object.entries(editProjList)) {
            elementObject[key] = globaljs.newElement(value)
        }

        elementObject.editProjectContainer.classList = `editProjectContainer${projectNumber}`
        elementObject.label.innerHTML = projectTitle
        elementObject.done.id = `doneProject${projectNumber}`
        elementObject.cancel.id = `cancelProject${projectNumber}`
        elementObject.input.id = `editTaskSelect${projectNumber}`

        elementObject.doneCancelSection.append(elementObject.done, elementObject.cancel);


        elementObject.editTaskSelect.append(elementObject.label, elementObject.input);

        elementObject.editProjectContainer.append(elementObject.editTaskSelect, elementObject.doneCancelSection)

        elementObject = omit(elementObject, ['done', 'cancel', 'label', 'editTaskSelect', 'doneCancelSection', 'input'])

        return elementObject.editProjectContainer
    }

    // Return Nav Section Contents as list
    const NavSectionContentList = () => {
        let contentList = [];

        for (let i = 0; i < Object.keys(navObjectList.navSectionOptions).length; i++) {
            let element = globaljs.newElement(navObjectList.navSectionOptions[Object.keys(navObjectList.navSectionOptions)[i]]);
            contentList.push(element);
        }
        return contentList;
    };

    // Returns Nav Element Section
    const navElementSection = () => {
        let contentList = NavSectionContentList(),
            element = globaljs.newElement(navObjectList.navSection);

        for (let i = 0; i < contentList.length; i++) {
            element.appendChild(contentList[i]);
        }

        return element;
    };

    // Returns defaultSelector Section
    const defaultSelectorSection = (user) => {
        let element = globaljs.newElement(navObjectList.defaultSelector),
            item1 = globaljs.newElement(navObjectList.homeTitle),
            item2 = globaljs.newElement(navObjectList.homeTitle);

        item2.innerHTML = user
        item2.id = 'userName'
        element.append(item1, item2);

        return element;
    };

    // Edit/delete Section
    const edit_DeleteSection = (projectNumber) => {
        let element = globaljs.newElement(navObjectList.section),
            edit = globaljs.newElement(navObjectList.edit),
            deLete = globaljs.newElement(navObjectList.delete);

        element.id = `sectionEditDeleteProj${projectNumber}`
        edit.id = `editProj${projectNumber}`
        deLete.id = `deleteProj${projectNumber}`

        element.append(edit, deLete);

        return element;
    };

    // Returns Project List Section elements
    const projectULSection = (list) => {
        let containerULElement = globaljs.newElement(navObjectList.projectList),
            button = globaljs.newElement(navObjectList.button);

        for (let i = 0; i < list.projectTitles.length; i++) {
            let item = globaljs.newElement(navObjectList.projectInfo.item),
                edit_delete = edit_DeleteSection(i);
            item.innerHTML = list.projectTitles[i];
            containerULElement.append(item, edit_delete)

        }

        containerULElement.appendChild(button)
        return containerULElement;
    };

    // Returns projectSelector Section
    const projectSelectorSection = (item) => {
        let element = globaljs.newElement(navObjectList.projectSelector),
            projectTitle = globaljs.newElement(navObjectList.projectsTitle),
            projectContentList = projectULSection(item);

        element.append(projectTitle, projectContentList);

        return element;
    };

    // Returns navMenuSection Section
    const navMenuSectionSection = (item) => {
        let element = globaljs.newElement(navObjectList.navMenuSection),
            logOutButton = globaljs.newElement(navObjectList.logout),
            defaultSection = defaultSelectorSection(item.user),
            projectSection = projectSelectorSection(item);

        element.append(defaultSection, projectSection, logOutButton);

        return element;
    };

    // Sign In section Creation
    const createSection = (info) => {
        let element = globaljs.pageGridContainer();
        element.append(navElementSection(), navMenuSectionSection(info))

        globaljs.render.bodyAppendChild(element);
    };

    return { createSection, editProjectContainer, navMenuSectionSection };
})();