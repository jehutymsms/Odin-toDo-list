import { globaljs } from '../global';

export const signInSectionCreation = (() => {
    const cacheDom = (() => {
        let body = document.getElementsByTagName('body')
        return { body: body };
    })();

    //Sign in Object List
    const SignInObjectList = {
        signInTags : ['div', 'h2', 'form','label','input','button'],

        signInIds : ['signIn-Container-Outer', 'signIn-Container-Inner', 'appTitle','signIn-Form-Container','userInfo','userName','password','demoButton'],

        signInFors : ['userName', 'password'],

        signInTypes : ['text', 'button'],

        signInValues : ['Sign In', 'Sign Up'],

        signInHTMLs : ['Welcome to Checkist', 'Username','Password','Demo'],

      }
    
      //Fuction List

      //Return Form Element Contents as list
      const formElementContentList = (objectList) => {
        for(let i = 0; i<5;i++){
            console.log(i+1)
        }
      } 
      
      //Returns Form Element Section

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

    return{}
})()