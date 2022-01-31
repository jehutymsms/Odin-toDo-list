import './style.css';
import { userStorage } from './userStorage';

import { signInSectionCreation } from './signInSectionFiles/signInSectionCreation';
import { signInSectionFunction } from './signInSectionFiles/signInSectionFunction';

import { signUpSectionFunction } from './signUpSectionFiles/signUpSectionFunction';
import { signUpSectionCreation } from './signUpSectionFiles/signUpSectionCreation';

import { navSectionCreation } from './NavSectionFiles/navSectionCreation';
import { navSectionFunction } from './NavSectionFiles/navSectionFunction';

import { mainSectionCreation } from './mainSectionFiles/mainSectionCreation';

import { globaljs } from './global';
// console.log('Now time for the JS')

// signInSectionCreation.createSection();

// signInSectionFunction.signInFunction();

// signUpSectionCreation.createSection();
// signUpSectionFunction.signUpFunction();

// navSectionCreation.createSection(Andrew);
// window.localStorage.setItem('Andrew', JSON.stringify(Andrew));

const Andrew = userStorage.demo

navSectionCreation.createSection(Andrew);
navSectionFunction.navFunction();
mainSectionCreation.createSection(Andrew)

let pageGridContainer = document.getElementById('pageGridContainer')
pageGridContainer.appendChild(mainSectionCreation.createSection(Andrew))
let taskRetrieval = document.getElementById('item0').querySelectorAll(`[class^='task']`)

// console.log(taskRetrieval)

let taskRetrieval1 = document.getElementById('projectSelector').querySelectorAll(`li`)

userStorage.testdataJSONStorage()

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
