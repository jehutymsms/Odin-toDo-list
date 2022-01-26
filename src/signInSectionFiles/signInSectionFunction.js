
  
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

export const signInSectionFunction = (() => {

    const signInFunction = () => {
        // Cache Dom List
        let info = document.getElementById('userInfo'),
            signInButton = document.getElementById('signInButton'),
            signUpButton = document.getElementById('signUpButton'),
            signInContainer = document.getElementById('signIn-Container-Outer');

        //Function List
        const userValidation = (userToValidate) => {
            if (userStorage.users.userList.includes(userToValidate)) {
                return true
            } else {
                return false
            }
        };

        const passwordValidation = (user, passwordToValidate) => {
            if (userStorage.users[user].password == passwordToValidate) {
                return true
            } else {
                return false
            }
        };

        const signInValidation = () => {
            if (userValidation(info.elements['userName'].value)) {

                if (passwordValidation(info.elements['userName'].value, info.elements['password'].value)) {
                } else {
                    alert('Password does not match');
                }

            } else {
                alert('User ID does not match');
            }
        };

        //Event Binds
        signInButton.addEventListener('click', signInValidation)
        signUpButton.addEventListener('click', function () {
            globaljs.render.removeElement(signInContainer);
            signUpSectionCreation.createSection();
            signUpSectionFunction.signUpFunction()
        });

    };

    return { signInFunction };

})();
