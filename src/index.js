// This is just a place Holder
import './style.css';
import { userStorage } from './userStorage';
import { signInSectionFunction } from './signInSectionFiles/signInSectionFunction';
import { signInSectionCreation } from './signInSectionFiles/signInSectionCreation';
// console.log('Now time for the JS')

signInSectionCreation.createSection();

signInSectionFunction.signInFunction()