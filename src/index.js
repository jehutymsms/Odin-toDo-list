// This is just a place Holder
import './style.css';
import { userStorage } from './userStorage';
import { signUpSectionCreation } from './signUpSectionFiles/signUpSectionCreation';
import { signInSectionCreation } from './signInSectionFiles/signInSectionCreation';
// console.log('Now time for the JS')

signInSectionCreation.createSection();

let testValue = document.getElementById('userName'),
    testButton = document.getElementById('signInButton')

const testFunction = () => {
    console.log(testValue.value)
}


testButton.addEventListener('click', testFunction)