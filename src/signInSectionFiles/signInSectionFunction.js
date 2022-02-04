
  
// window.localStorage.setItem("Andrew", JSON.stringify(Andrew));

// let newObject = window.localStorage.getItem("Andrew");
// console.log(JSON.parse(newObject));


// let info = document.getElementById('userInfo')

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
import { userStorage } from '../userStorage';
import { signUpSectionCreation } from '../signUpSectionFiles/signUpSectionCreation.js';
import { signUpSectionFunction } from '../signUpSectionFiles/signUpSectionFunction';

import { navSectionCreation } from '../NavSectionFiles/navSectionCreation';

import { navSectionFunction } from '../NavSectionFiles/navSectionFunction';

import { mainSectionCreation } from '../mainSectionFiles/mainSectionCreation';

export const signInSectionFunction = (() => {

    const signInFunction = () => {
        // Cache Dom List
        let info = document.getElementById('userInfo'),
            userIdInput = document.getElementById('userName'),
            userPasswordInput = document.getElementById('password'),
            signInButton = document.getElementById('signInButton'),
            signUpButton = document.getElementById('signUpButton'),
            signInContainer = document.getElementById('signIn-Container-Outer'),
            userInfo = userStorage.getdataJSONStorage('users');

            
        //Function List
        const userValidation = (userToValidate) => {
            if (userInfo.userList.includes(userToValidate)) {
                return true
            } else {
                return false
            }
        };

        const passwordValidation = (user, passwordToValidate) => {
            if (userInfo[user].password == passwordToValidate) {
                return true
            } else {
                return false
            }
        };

        const signInValidation = () => {
            let user = info.elements['userName'].value,
                password = info.elements['password'].value


            if (userValidation(user)) {
                if (passwordValidation(user, password)) {

                    let userData = userStorage.getdataJSONStorage(user)

                    globaljs.render.removeElement(signInContainer)

                    navSectionCreation.createSection(userData);
                    navSectionFunction.navFunction();

                    let pageGridContainer = document.getElementById('pageGridContainer')
                        pageGridContainer.appendChild(mainSectionCreation.createSection(userData))
                }
                else{
                    alert('Password is Not Valid')
                }
            }else{
                alert('User ID is Not Valid')
            }
        };

        //Event Binds
        signInButton.addEventListener('click', signInValidation)

        signUpButton.addEventListener('click', function () {
            globaljs.render.removeElement(signInContainer);
            signUpSectionCreation.createSection();
            signUpSectionFunction.signUpFunction()
        });

        [userIdInput, userPasswordInput].forEach((element)=>{
            element.addEventListener('keydown', function (event) {
                if (event.code === 'Enter') {
                    event.preventDefault();
                    signInButton.click();
                }
            });
        })
        

        


        

    };

    return { signInFunction };

})();
