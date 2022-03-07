import { globaljs } from '../global';
import { userStorage } from '../userStorage';
import { signUpSectionCreation } from '../signUpSectionFiles/signUpSectionCreation.js';
import { signUpSectionFunction } from '../signUpSectionFiles/signUpSectionFunction';
import { navSectionCreation } from '../NavSectionFiles/navSectionCreation';
import { navSectionFunction } from '../NavSectionFiles/navSectionFunction';
import { mainSectionCreation } from '../mainSectionFiles/mainSectionCreation';
import { mainSectionFunction } from '../mainSectionFiles/mainSectionFunction';

export const signInSectionFunction = (() => {

    const signInFunction = () => {
        // Cache Dom List
        let info = document.getElementById('userInfo'),
            userIdInput = document.getElementById('userName'),
            userPasswordInput = document.getElementById('password'),
            signInButton = document.getElementById('signInButton'),
            signUpButton = document.getElementById('signUpButton'),
            signInContainer = document.getElementById('signIn-Container-Outer'),
            demoButton = document.getElementById('demoButton'),
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
                    mainSectionFunction.mainFunction(userData)
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
        
        demoButton.addEventListener('click', function () {
            let userData = userStorage.getdataJSONStorage('Demo')

            globaljs.render.removeElement(signInContainer)
            navSectionCreation.createSection(userData);
            navSectionFunction.navFunction();

            let pageGridContainer = document.getElementById('pageGridContainer')
                pageGridContainer.appendChild(mainSectionCreation.createSection(userData))
                mainSectionFunction.mainFunction(userData)
        })    

    };

    return { signInFunction };

})();
