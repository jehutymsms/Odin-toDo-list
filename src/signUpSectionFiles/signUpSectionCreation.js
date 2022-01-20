import { globaljs } from '../global';


export const signUpSectionCreation = (() => {

    //Sign in Object List
    const SignUpObjectList = {

        signUpContainerOuter: {
            tag: 'div',
            id: 'signUp-Container-Outer',
        },

        signUpContainerInner: {
            tag: 'div',
            id: 'signUp-Container-Inner',
        },

        appTitle: {
            tag: 'h2',
            id: 'appTitle',
            htmlString: 'Log-In Creation',
        },

        signUpFormContainer: {
            tag: 'div',
            id: 'signUp-Form-Container',
        },

        signUpForm: {
            tag: 'form',
            id:'userCreateInfo',
        },

        userInfo: {
            usernameLabel: {
                tag: 'label',
                for: 'userName',
                htmlString: 'Create Username',
            },
            userRequire: {
                tag: 'h2',
                id: 'userRequire',
                htmlString:'Requirements:',
            },
            userRequirements: {
                tag: 'h2',
                id: 'userRequirements',
                htmlString:'at least six characters long, one number, one lowercase and one uppercase letter',
            },
            usernameInput: {
                tag: 'input',
                id: 'createUserName',
                type: 'text',
                name: 'userName',
            },
            passwordLabel: {
                tag: 'label',
                for: 'password',
                htmlString: 'Create Password',
            },
            passwordRequire: {
                tag: 'h2',
                id: 'pwRequire',
                htmlString:'Requirements:',
            },
            passwordRequirements: {
                tag: 'h2',
                id: 'pwdRequirements',
                htmlString:'at least six characters long including underscore,  one number, one lowercase and one uppercase letter',
            },
            passwordInput: {
                tag: 'input',
                id: 'passwcreatePassword',
                type: 'text',
                name: 'password',
            },
            
            createButton: {
                tag: 'input',
                id:'signUpCreate',
                type: 'button',
                value: 'Create',
            },
            cancelButton: {
                tag: 'input',
                id:'signUpCancel',
                type: 'button',
                value: 'Cancel',
            },
        },
    };
    
    //Fuction List

    //Return Form Element Contents as list
    const formElementContentList = () => {
        let contentList = [];

        for (let i = 0; i < Object.keys(SignUpObjectList.userInfo).length; i++) {
            let element = globaljs.newElement(SignUpObjectList.userInfo[Object.keys(SignUpObjectList.userInfo)[i]]);
            contentList.push(element);
        }
        return contentList;
    };
      
    //Returns Form Element Section
    const formElementSection = () => {
        let contentList = formElementContentList(),
            element = globaljs.newElement(SignUpObjectList.signUpForm);

        for (let i = 0; i < contentList.length; i++) {
            element.appendChild(contentList[i]);
        }

        return element;
    };

    //Returns Sign In Form Container Section
    const signUpFormContainerSection = () => {
        let element = globaljs.newElement(SignUpObjectList.signUpFormContainer);

        element.appendChild(formElementSection());

        return element;
    };

    //Returns Sign In Container Inner Section
    const signUpContainerInnerSection = () => {
        let containerElement = globaljs.newElement(SignUpObjectList.signUpContainerInner),
            h2Element = globaljs.newElement(SignUpObjectList.appTitle),
            signInFormContainer = signUpFormContainerSection(),
            elementList = [h2Element, signInFormContainer];

        for (let i = 0; i < elementList.length; i++) {
            containerElement.appendChild(elementList[i]);
        }

        return containerElement;
    };

    //Returns Sign In Container Outer Section
    const signUpContainerOuterSection = () => {
        let element = globaljs.newElement(SignUpObjectList.signUpContainerOuter),
        signUpContainerInner = signUpContainerInnerSection();

        element.appendChild(signUpContainerInner);

        return element;
    };

    // Sign In section Creation
    const createSection = () =>{
        let element = signUpContainerOuterSection();

        globaljs.render.bodyAppendChild(element);
    };


    return{createSection:createSection};
})();