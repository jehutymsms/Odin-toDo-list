import { userStorage } from '../userStorage';
import { navSectionCreation } from './navSectionCreation';

export const navSectionFunction = (() => {

    const navFunction = () => {
        // Cache Dom List
        let navSection = document.getElementById('navSection'),
            navSectionH1 = navSection.getElementsByTagName('h1'),
            navMenuSection = document.getElementById('navMenuSection'),
            username = document.getElementById('userName'),
            sectionEditDeleteProj = document.querySelectorAll(`[id^='sectionEditDeleteProj']`),
            editButtons = document.querySelectorAll(`[id^='editProj']`),
            deleteButtons = document.querySelectorAll(`[id^='deleteProj']`),
            matches = editButtons[0].id.match(/\d+/);
    

        //Function List
        const iconRotate = () =>{
            navSectionH1[0].classList.toggle('navSectionIndicatorActive')
            navMenuSection.classList.toggle('navMenuSectionHide')
        }


        //Event Binds
        navSectionH1[0].addEventListener('click', iconRotate)
        
        editButtons[0].addEventListener('click', function() {
            navSectionCreation.editProjectContainer(userStorage.getdataJSONStorage(username.innerHTML).projectTitles[0], 0)

            sectionEditDeleteProj[0].parentNode.insertBefore(navSectionCreation.editProjectContainer(userStorage.getdataJSONStorage(username.innerHTML).projectTitles[0], 0), sectionEditDeleteProj[0].nextSibling);
        })


        deleteButtons[0].addEventListener('click', function() {
            console.log('Delete clicked')
        })


    };

    return { navFunction};

})();