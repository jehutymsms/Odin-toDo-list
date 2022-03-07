import './style.css';
import { userStorage } from './userStorage';

import { signInSectionCreation } from './signInSectionFiles/signInSectionCreation';
import { signInSectionFunction } from './signInSectionFiles/signInSectionFunction';

userStorage.initialJSONStorageData()
signInSectionCreation.createSection()
signInSectionFunction.signInFunction()
   