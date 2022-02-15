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
            deleteButtons = document.querySelectorAll(`[id^='deleteProj']`)

        //Function List
        const iconRotate = () =>{
            navSectionH1[0].classList.toggle('navSectionIndicatorActive')
            navMenuSection.classList.toggle('navMenuSectionHide')
        }
        // Showing/Hiding Project Title -- Edit Delete Buttons
        const titleHide_Show = (projectNumber) =>{
            let edit_deleteSection = document.getElementById(`sectionEditDeleteProj${projectNumber}`),
                projectTitle = edit_deleteSection.previousElementSibling

            if (edit_deleteSection.style.display === 'none') {
                edit_deleteSection.style.display = 'flex';
                projectTitle.style.display = 'block';
            }else{
                edit_deleteSection.style.display = 'none';
                projectTitle.style.display = 'none';
            }
        }

        const title_Delete = (projectNumber) =>{
            document.getElementsByClassName(`editProjectContainer${projectNumber}`)[0].remove()
        }

        const titleUpdate = (projectNumber, updatedTitle) =>{
            let edit_deleteSection = document.getElementById(`sectionEditDeleteProj${projectNumber}`),
                projectTitle = edit_deleteSection.previousElementSibling

                projectTitle.innerHTML = updatedTitle
        }

        const getTitle = (projectNumber) => {
            return document.getElementById(`editTaskSelect${projectNumber}`).value
        }

        const projectDelete = (projectNumber) => {
            let edit_deleteSection = document.getElementById(`sectionEditDeleteProj${projectNumber}`),
                projectTitle = edit_deleteSection.previousElementSibling
                edit_deleteSection.remove()
                projectTitle.remove()
        }

        const editProjectBindings = (projectNumber) => {
            let done = document.getElementById(`doneProject${projectNumber}`),
                cancel = document.getElementById(`cancelProject${projectNumber}`)

                cancel.addEventListener('click',function(){
                    title_Delete(projectNumber)
                    titleHide_Show(projectNumber)
                })

                done.addEventListener('click',function(){
                    if (getTitle(projectNumber).replace(/\s/g,'') == '') {
                        title_Delete(projectNumber)
                        titleHide_Show(projectNumber)
                    }else{
                        titleUpdate(projectNumber,getTitle(projectNumber))
                        title_Delete(projectNumber)
                        titleHide_Show(projectNumber)
                        userStorage.storedataJSONStorage(userStorage.userDataCollection(username.innerHTML), username.innerHTML)
                    }
                })
        }


        //Event Binds
        navSectionH1[0].addEventListener('click', iconRotate)

        for (let i = 0; i < sectionEditDeleteProj.length; i++) {
            editButtons[i].addEventListener('click', function() {
                let edit_deleteSection = document.getElementById(`sectionEditDeleteProj${i}`),
                    projectTitle = edit_deleteSection.previousElementSibling
    
                navSectionCreation.editProjectContainer(userStorage.getdataJSONStorage(username.innerHTML).projectTitles[i], i)
    
                sectionEditDeleteProj[i].parentNode.insertBefore(navSectionCreation.editProjectContainer(projectTitle.innerHTML, i), sectionEditDeleteProj[i].nextSibling);
                edit_deleteSection.style.display = 'none';
                projectTitle.style.display = 'none';
                editProjectBindings(i)
            })
    
            deleteButtons[i].addEventListener('click', function() {
                projectDelete(i)
            })
            
        }


        


    };

    return { navFunction };

})();