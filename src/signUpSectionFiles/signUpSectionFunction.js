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
import { userStorage } from '../userStorage';
import { signInSectionCreation } from '../signInSectionFiles/signInSectionCreation';
import { signInSectionFunction } from '../signInSectionFiles/signInSectionFunction';

export const signUpSectionFunction = (() => {

    const signUpFunction = () => {
        // Cache Dom List
        let info = document.getElementById('userCreateInfo'),
            signUpCreate = document.getElementById('signUpCreate'),
            signUpCancel = document.getElementById('signUpCancel'),
            signUpContainer = document.getElementById('signUp-Container-Outer');


        //Function List
        const userCreateValidation = ( userToValidate ) =>{
            return userStorage.checkUsername(userToValidate)
        };

        const passwordCreateValidation = ( passwordToValidate ) =>{
            if (userStorage.checkPassword(passwordToValidate)) {
                return true
            }else{
                return false
            }
        };

        const signUpValidation = () =>{
            let userID = info.elements['userName'].value,
                password = info.elements['password'].value

            if (userCreateValidation(userID) == true) {
                if(passwordCreateValidation(password)){
                    userStorage.addUserLocalStorage(userID,password);
                    closeSignUp();
                }else{
                    alert('Password does not meet requirements')
                }

            }else if(userCreateValidation(userID) == false){
                alert('User ID does not meet requirements')
            }else{
                alert(userCreateValidation(userID)) 
            }
        }

        const closeSignUp = () => {
            globaljs.render.removeElement(signUpContainer);
            signInSectionCreation.createSection();
            signInSectionFunction.signInFunction();
        }

        //Event Binds
        signUpCreate.addEventListener('click', signUpValidation)
        signUpCancel.addEventListener('click', closeSignUp)
        
    };

    return{signUpFunction}
})()
