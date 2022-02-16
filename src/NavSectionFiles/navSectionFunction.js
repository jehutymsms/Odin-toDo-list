import { userStorage } from '../userStorage';
import { navSectionCreation } from './navSectionCreation';
import { mainSectionCreation } from '../mainSectionFiles/mainSectionCreation';

export const navSectionFunction = (() => {

    const navFunction = () => {
        // Cache Dom List
        let pageGridContainer = document.getElementById('pageGridContainer'), 
            navSection = document.getElementById('navSection'),
            navSectionH1 = navSection.getElementsByTagName('h1'),
            navMenuSection = document.getElementById('navMenuSection'),
            username = document.getElementById('userName'),
            sectionEditDeleteProj = document.querySelectorAll(`[id^='sectionEditDeleteProj']`),
            editButtons = document.querySelectorAll(`[id^='editProj']`),
            deleteButtons = document.querySelectorAll(`[id^='deleteProj']`),
            addProjectButton = document.getElementById('addProject')

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
                projectTitle = edit_deleteSection.previousElementSibling,
                mainSection = document.getElementById('mainSection')
                
                edit_deleteSection.remove()
                projectTitle.remove()
                userStorage.deleteProject(username.innerHTML,projectTitle.innerHTML)
                mainSection.remove()
                pageGridContainer.appendChild(mainSectionCreation.createSection(userStorage.getdataJSONStorage(username.innerHTML)))
                
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
                        let mainSection = document.getElementById('mainSection')
                        titleUpdate(projectNumber,getTitle(projectNumber))
                        title_Delete(projectNumber)
                        titleHide_Show(projectNumber)
                        userStorage.storedataJSONStorage(userStorage.userDataCollection(username.innerHTML), username.innerHTML)
                        mainSection.remove()
                        pageGridContainer.appendChild(mainSectionCreation.createSection(userStorage.getdataJSONStorage(username.innerHTML)))
                    }
                })
        }

        const addProjectBindings = (projectNumber) => {
            let done = document.getElementById(`doneProject${projectNumber}`),
                cancel = document.getElementById(`cancelProject${projectNumber}`),
                userData = userStorage.getdataJSONStorage(username.innerHTML)

                cancel.addEventListener('click',function(){
                    title_Delete(projectNumber)
                })

                done.addEventListener('click',function(){
                    if (getTitle(projectNumber).replace(/\s/g,'') == '') {
                        title_Delete(projectNumber)
                    }else{
                        let mainSection = document.getElementById('mainSection')
                        userData.projectTitle.push(getTitle(projectNumber))
                        userData[`item${projectNumber}`] = {}
                        
                        mainSection.remove()
                        pageGridContainer.appendChild(mainSectionCreation.createSection(userData))
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


        addProjectButton.addEventListener('click', function(){
            let newProjectNumber = userStorage.getdataJSONStorage(username.innerHTML).projectTitles.length

            console.log('Function Run')
            addProjectButton.parentNode.insertBefore(navSectionCreation.editProjectContainer('New Project', newProjectNumber),addProjectButton)
            addProjectBindings(newProjectNumber)
        })


    };

    return { navFunction };

})();