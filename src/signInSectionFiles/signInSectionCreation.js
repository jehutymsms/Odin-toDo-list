import { globaljs } from '../global';

export const signInSectionCreation = (() => {
    const cacheDom = (() => {
        let body = document.getElementsByTagName('body');
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

      };
    
      //Fuction List

      //Return Form Element Contents as list
      const formElementContentList = () => {
        let contentList = [];

        // for (let i = 0; i < 2; i++) {
        //     let label[`${x}`] = globaljs.newElement({
        //         tag:SignInObjectList.signInTags[3],
        //         for:SignInObjectList.signInFors[0],
        //         htmlString:SignInObjectList.signInHTMLs[1],
        //     })
        // }

        let label1 = globaljs.newElement({
            tag:SignInObjectList.signInTags[3],
            for:SignInObjectList.signInFors[0],
            htmlString:SignInObjectList.signInHTMLs[1],
        })

        let label2 = globaljs.newElement({
            tag:SignInObjectList.signInTags[3],
            for:SignInObjectList.signInFors[1],
            htmlString:SignInObjectList.signInHTMLs[2],
        })

        let input1 = globaljs.newElement({
            tag:SignInObjectList.signInTags[4],
            type:SignInObjectList.signInTypes[0],
            id:SignInObjectList.signInIds[5],
            name:SignInObjectList.signInIds[5],
        })

        let input2 = globaljs.newElement({
            tag:SignInObjectList.signInTags[4],
            type:SignInObjectList.signInTypes[0],
            id:SignInObjectList.signInIds[6],
            name:SignInObjectList.signInIds[6],
        })

        let input3 = globaljs.newElement({
            tag:SignInObjectList.signInTags[4],
            type:SignInObjectList.signInTypes[1],
            value:SignInObjectList.signInValues[0],
        })

        let input4 = globaljs.newElement({
            tag:SignInObjectList.signInTags[4],
            type:SignInObjectList.signInTypes[1],
            value:SignInObjectList.signInValues[1],
        })


        contentList.push(label1)
        contentList.push(input1)
        contentList.push(label2)
        contentList.push(input2)
        contentList.push(input3)
        contentList.push(input4)

        return contentList
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

    return{formElementContentList:formElementContentList,render:render};
})();