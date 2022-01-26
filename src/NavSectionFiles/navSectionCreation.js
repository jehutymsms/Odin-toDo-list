import { globaljs } from '../global';


export const navSectionCreation = (() => {

    // Sign in Object List
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
            classId: 'addProject',
            htmlString: 'Add Project',
        },

    };

    // Fuction List

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
    const defaultSelectorSection = () => {
        let element = globaljs.newElement(navObjectList.defaultSelector),
            item = globaljs.newElement(navObjectList.homeTitle);

        element.appendChild(item);

        return element;
    };

    // Edit/delete Section
    const edit_DeleteSection = (projectNumber) => {
        let element = globaljs.newElement(navObjectList.section),
            edit = globaljs.newElement(navObjectList.edit),
            deLete = globaljs.newElement(navObjectList.delete);

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
            defaultSection = defaultSelectorSection(),
            projectSection = projectSelectorSection(item);

        element.append(defaultSection, projectSection);

        return element;
    };



    // Sign In section Creation
    const createSection = (info) => {
        let element = globaljs.pageGridConntainer();
        element.append(navElementSection(),navMenuSectionSection(info))

        globaljs.render.bodyAppendChild(element);
    };

    return { createSection };
})();