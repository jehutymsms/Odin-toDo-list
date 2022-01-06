import { globaljs } from '../global';

export const signInSectionCreation = (() => {
    const cacheDom = (() => {
        let body = document.getElementsByTagName('body');
        return { body: body };
    })();

    //Sign in Object List
    const SignInObjectList = {
        signInTags: ['signInContainerOuter', 'signInContainerInner', 'appTitle', 'signInFormContainer', 'signinForm', 'demoButton', 'userInfo'],

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
                html: 'Password',
            },
            passwordInput: {
                tag: 'input',
                id: 'password',
                type: 'text',
                name: 'password',
            },
            signinButton: {
                tag: 'input',
                type: 'button',
                value: 'Sign In',
            },
            signupButton: {
                tag: 'input',
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
    } 

    //Returns Sign In Form Container Section

    //Returns Sign In Container Inner Section

    //Returns Sign In Container Outer Section


    // Render to DOM
    const render = (() => {
        const bodyAppendChild = (element) =>{
            cacheDom.body[0].appendChild(element);
        };

        return {bodyAppendChild: bodyAppendChild };
    })();

    return{formElementSection:formElementSection,render:render};
})();