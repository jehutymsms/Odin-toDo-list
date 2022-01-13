// This is just a place Holder
import './style.css';
import { userStorage } from './userStorage';

import { signInSectionCreation } from './signInSectionFiles/signInSectionCreation';
import { signInSectionFunction } from './signInSectionFiles/signInSectionFunction';

import { signUpSectionFunction } from './signUpSectionFiles/signUpSectionFunction';
import { signUpSectionCreation } from './signUpSectionFiles/signUpSectionCreation';

import { globaljs } from './global';
// console.log('Now time for the JS')

// signInSectionCreation.createSection();

// signInSectionFunction.signInFunction();

// signUpSectionCreation.createSection();
// signUpSectionFunction.signUpFunction();
const Andrew = userStorage.demo
  
window.localStorage.setItem("Andrew", JSON.stringify(Andrew));

// let newObject = window.localStorage.getItem("Andrew");
// console.log(JSON.parse(newObject));

// let info = document.getElementById('userInfo')

// let test = () => {
//     if(window.localStorage.getItem(info.elements['userName'].value) == null){
//         console.log('This is not a username')
//     }else{
//         console.log('This Matches')
//         let test2 = JSON.parse(window.localStorage.getItem(info.elements['userName'].value))
//         console.log(test2.projectTitles)
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
