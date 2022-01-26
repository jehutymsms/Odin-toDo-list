export const navSectionFunction = (() => {

    const navFunction = () => {
        // Cache Dom List
        let navSection = document.getElementById('navSection'),
            navSectionH1 = navSection.getElementsByTagName('h1'),
            navMenuSection = document.getElementById('navMenuSection'),
            editButton = document.querySelectorAll(`[id^='editProj']`),
            matches = editButton[0].id.match(/\d+/);
            console.log(editButton[0].id)
            console.log(matches[0])



        //Function List
        const iconRotate = () =>{
            navSectionH1[0].classList.toggle('navSectionIndicatorActive')

            navMenuSection.classList.toggle('navMenuSectionHide')
        }


        //Event Binds
        navSectionH1[0].addEventListener('click', iconRotate)
        
    };

    return { navFunction: navFunction };

})();