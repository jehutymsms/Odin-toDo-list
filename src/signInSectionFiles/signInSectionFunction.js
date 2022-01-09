const Andrew = {
    password : "Andrew",
  }
  
// window.localStorage.setItem("Andrew", JSON.stringify(Andrew));

let newObject = window.localStorage.getItem("Andrew");
// console.log(JSON.parse(newObject));


let info = document.getElementById('userInfo')

// console.log(info.elements['userName'].value)



// let test = () => {
//     if(window.localStorage.getItem(info.elements['userName'].value) == null){
//         console.log('This is not a username')
//     }else{
//         console.log('This Matches')
//         console.log(window.localStorage.getItem(info.elements['userName'].value))
//         let test2 = JSON.parse(window.localStorage.getItem(info.elements['userName'].value))
//         console.log(test2.password)
//     }
// }


// let test2 = (x) => {
//     if(window.localStorage.getItem(info.elements['userName'].value) == null){
//         console.log('This is not a username')
//     }else{
//         console.log('This Matches')
//         console.log(window.localStorage.getItem(info.elements['userName'].value))
//     }
// }

// test()

// window.localStorage.clear()



// This Sign in module has to handle:
//      -verification
//      -Sign-in using data from Local Storage or use Defaults from Demo
//      -Sign-up page creation/display when needed
//      -adding created Sign-in to storage (Most likely using a fuction in the userStorage Module)
//      -Demo Buttton needs to run a function from Main Section module using the Demo user data

import { globaljs } from '../global';

export const signInSectionFunction = (() => {
    const cacheDom = (() => {
        let body = document.getElementsByTagName('body')
        return { body: body };
    })();

    //Event Binds

    
    //Function List
    const newElement = (item) => {
        let element = document.createElement(item.tag);
        if (item.classId) { element.classList = item.classId; };
        if (item.id) { element.id = item.id; };
        if (item.htmlString) { element.innerHTML = item.htmlString; };
        return element;
    };

    // Render to DOM
    const render = (() => {
        const bodyAppendChild = (element) =>{
            cacheDom.body[0].appendChild(element);
        };

        return {bodyAppendChild: bodyAppendChild };
    })();
    return{render:render}
})()
