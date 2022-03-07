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
                    userStorage.userDataCreation(userID);
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
