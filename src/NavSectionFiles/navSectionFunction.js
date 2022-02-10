import { userStorage } from '../userStorage';

export const navSectionFunction = (() => {

    const navFunction = () => {
        // Cache Dom List
        let navSection = document.getElementById('navSection'),
            navSectionH1 = navSection.getElementsByTagName('h1'),
            navMenuSection = document.getElementById('navMenuSection'),
            username = document.getElementById('userName'),
            editButtons = document.querySelectorAll(`[id^='editProj']`),
            deleteButtons = document.querySelectorAll(`[id^='deleteProj']`),
            matches = editButtons[0].id.match(/\d+/);
            console.log(editButtons.length)
            console.log(editButtons)
            console.log(username)
            

        //Function List
        const iconRotate = () =>{
            navSectionH1[0].classList.toggle('navSectionIndicatorActive')
            navMenuSection.classList.toggle('navMenuSectionHide')
        }


        //Event Binds
        navSectionH1[0].addEventListener('click', iconRotate)
        
        editButtons[0].addEventListener('click', function() {
            console.log(userStorage.getdataJSONStorage(username.innerHTML))
        })
        deleteButtons[0].addEventListener('click', function() {
            console.log('Delete clicked')
        })


    };

    return { navFunction};

})();