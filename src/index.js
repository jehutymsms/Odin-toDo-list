import './style.css';
import { userStorage } from './userStorage';

import { signInSectionCreation } from './signInSectionFiles/signInSectionCreation';
import { signInSectionFunction } from './signInSectionFiles/signInSectionFunction';

import { signUpSectionFunction } from './signUpSectionFiles/signUpSectionFunction';
import { signUpSectionCreation } from './signUpSectionFiles/signUpSectionCreation';

import { navSectionCreation } from './NavSectionFiles/navSectionCreation';
import { navSectionFunction } from './NavSectionFiles/navSectionFunction';

import { mainSectionCreation } from './mainSectionFiles/mainSectionCreation';
import { mainSectionFunction } from './mainSectionFiles/mainSectionFunction';


import { globaljs } from './global';

// userStorage.initialJSONStorageData()
// const Andrew = userStorage.demo
// navSectionCreation.createSection(Andrew);
// navSectionFunction.navFunction();
// let pageGridContainer = document.getElementById('pageGridContainer')
// pageGridContainer.appendChild(mainSectionCreation.createSection(Andrew))
// mainSectionFunction.mainFunction(Andrew)

userStorage.initialJSONStorageData()
signInSectionCreation.createSection()
signInSectionFunction.signInFunction()
