import { globaljs } from '../global';

export const signInSectionCreation = (() => {
    const cacheDom = (() => {
        let body = document.getElementsByTagName('body');
        return { body: body };
    })();

    //Sign in Object List
    const SignInObjectList = {

        signInContainerOuter: {
            tag: 'div',
            id: 'signIn-Container-Outer',
        },

        signInContainerInner: {
            tag: 'div',
            id: 'signIn-Container-Inner',
        },

        appTitle: {
            tag: 'h2',
            id: 'appTitle',
            htmlString: 'Welcome to Checkist',
        },

        signInFormContainer: {
            tag: 'div',
            id: 'signIn-Form-Container',
        },

        signinForm: {
            tag: 'form',
            id: 'userInfo',
        },

        userInfo: {
            usernameLabel: {
                tag: 'label',
                for: 'userName',
                htmlString: 'Username',
            },
            usernameInput: {
                tag: 'input',
                id: 'userName',
                type: 'text',
                name: 'userName',
            },
            passwordLabel: {
                tag: 'label',
                for: 'password',
                htmlString: 'Password',
            },
            passwordInput: {
                tag: 'input',
                id: 'password',
                type: 'text',
                name: 'password',
            },
            signinButton: {
                tag: 'input',
                id:'signInButton',
                type: 'button',
                value: 'Sign In',
            },
            signupButton: {
                tag: 'input',
                id:'signUpButton',
                type: 'button',
                value: 'Sign Up',
            },
        },

        demoButton: {
            tag: 'button',
            id: 'demoButton',
            htmlString: 'Demo',
        },

    };
    
    //Fuction List

    //Return Form Element Contents as list
    const formElementContentList = () => {
        let contentList = [];

        for (let i = 0; i < Object.keys(SignInObjectList.userInfo).length; i++) {
            let element = globaljs.newElement(SignInObjectList.userInfo[Object.keys(SignInObjectList.userInfo)[i]]);
            contentList.push(element);
        };
        return contentList;
    };
      
    //Returns Form Element Section
    const formElementSection = () => {
        let contentList = formElementContentList(),
            element = globaljs.newElement(SignInObjectList.signinForm);

        for (let i = 0; i < contentList.length; i++) {
            element.appendChild(contentList[i]);
        };

        return element;
    };

    //Returns Sign In Form Container Section
    const signInFormContainerSection = () => {
        let element = globaljs.newElement(SignInObjectList.signInFormContainer);

        element.appendChild(formElementSection());

        return element;
    };

    //Returns Sign In Container Inner Section
    const signInContainerInnerSection = () => {
        let containerElement = globaljs.newElement(SignInObjectList.signInContainerInner),
            h2Element = globaljs.newElement(SignInObjectList.appTitle),
            buttonElement = globaljs.newElement(SignInObjectList.demoButton),
            signInFormContainer = signInFormContainerSection(),
            elementList = [h2Element, signInFormContainer, buttonElement];

        for (let i = 0; i < elementList.length; i++) {
            containerElement.appendChild(elementList[i]);
        };

        return containerElement;
    };

    //Returns Sign In Container Outer Section
    const signInContainerOuterSection = () => {
        let element = globaljs.newElement(SignInObjectList.signInContainerOuter),
        signInContainerInner = signInContainerInnerSection();

        element.appendChild(signInContainerInner);

        return element;
    };

    // Sign In section Creation
    const createSection = () =>{
        let element = signInContainerOuterSection();

        render.bodyAppendChild(element);
    };


    // Render to DOM
    const render = (() => {
        const bodyAppendChild = (element) =>{
            cacheDom.body[0].appendChild(element);
        };

        return {bodyAppendChild: bodyAppendChild };
    })();

    return{createSection:createSection,render:render};
})();