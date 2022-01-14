import { globaljs } from '../global';


export const navSectionCreation = (() => {

    //Sign in Object List
    const navObjectList = {

        pageGridContainer: {
            tag: 'div',
            id: 'pageGridContainer',
        },

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
        },

        defaultSelector: {
            tag: 'div',
            id: 'defaultSelector',
        },

        homeTitle: {
            tag: 'h2',
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

    //Fuction List

    //Return Nav Section Contents as list
    const NavSectionContentList = () => {
        let contentList = [];

        for (let i = 0; i < Object.keys(navObjectList.navSectionOptions).length; i++) {
            let element = globaljs.newElement(navObjectList.navSectionOptions[Object.keys(navObjectList.navSectionOptions)[i]]);
            contentList.push(element);
        };
        return contentList;
    };

    //Returns Nav Element Section
    const navElementSection = () => {
        let contentList = NavSectionContentList(),
            element = globaljs.newElement(navObjectList.navSection);

        for (let i = 0; i < contentList.length; i++) {
            element.appendChild(contentList[i]);
        };

        return element;
    };

    //Returns defaultSelector Section
    const defaultSelectorSection = () => {
        let element = globaljs.newElement(navObjectList.defaultSelector),
        item = globaljs.newElement(navObjectList.homeTitle);

        element.appendChild(item);

        return element;
    };

    // Edit/delete Section
    const edit_DeleteSection = () => {
        let element = globaljs.newElement(navObjectList.section),
        edit = globaljs.newElement(navObjectList.edit),
        deLete = globaljs.newElement(navObjectList.delete);

        element.append(edit,deLete);

        return element;
    };

    //Returns Project List Section elements
    const projectULSection = (list) => {
        let containerULElement = globaljs.newElement(navObjectList.projectList),
        edit_delete = edit_DeleteSection(),
        button = globaljs.newElement(navObjectList.button);
        
        for (let i = 0; i < list.projectTitles.length; i++) {
            let item = globaljs.newElement(navObjectList.projectInfo.item);
            item.innerHTML = list.projectTitles[i];
            containerULElement.append(item,edit_delete)
        };

        containerULElement.appendChild(button)
        return containerULElement;
    };

    //Returns projectSelector Section
    const projectSelectorSection = (item) => {
        let element = globaljs.newElement(navObjectList.projectSelector),
            projectTitle = globaljs.newElement(navObjectList.projectsTitle),
            projectContentList = projectULSection(item);

        element.append(projectTitle,projectContentList);

        return element;
    };




    // Sign In section Creation
    const createSection = () => {
        let element = signInContainerOuterSection();

        globaljs.render.bodyAppendChild(element);
    };

    return { createSection: createSection };
})();