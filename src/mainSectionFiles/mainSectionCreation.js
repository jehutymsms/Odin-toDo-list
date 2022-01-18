export const navSectionCreation = (() => {   
   
   // Sign in Object List
    const navObjectList = {


        mainSection: {
            tag: 'div',
            id: 'mainSection',
        },

        mainSectionH2: {
            tag: 'h2',
            htmlString: 'All Tasks',
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


    // Returns Nav Element Section


    // Returns defaultSelector Section

    // Edit/delete Section


    // Returns Project List Section elements

    // Returns projectSelector Section



    // Returns navMenuSection Section




    // Sign In section Creation
    const createSection = (info) => {
        let element = globaljs.pageGridConntainer();
        element.append(navElementSection(),navMenuSectionSection(info))

        globaljs.render.bodyAppendChild(element);
    };

    return { createSection: createSection };

})();