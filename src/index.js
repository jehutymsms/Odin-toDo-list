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


const Andrew = userStorage.demo

navSectionCreation.createSection(Andrew);
navSectionFunction.navFunction();
// mainSectionCreation.createSection(Andrew)

let pageGridContainer = document.getElementById('pageGridContainer')
pageGridContainer.appendChild(mainSectionCreation.createSection(Andrew))
let taskRetrieval = document.getElementById('item0').querySelectorAll(`[class^='task']`)

// console.log(taskRetrieval)

let taskRetrieval1 = document.getElementById('projectSelector').querySelectorAll(`li`)
window.localStorage.clear()
userStorage.testdataJSONStorage()


