export const userStorage = (() =>{
    const Demo = {
        password : "Demo",
        projectTitles : ['Home Chores', 'Work', 'Food Prep'],

        item0:{
            taskList:['Check Email', 'Team Meeting','Daily Report'],
            tasks:{
                task0:{
                    dueDate:'Date',
                    complete: false,
                    notes:'See if E-mail to Frank has reply'

                }
            }
        },

        navTitles: ['aboutPage', 'projectPage', 'contactPage'],
        aboutPage: {
            id: 'aboutPage',
            text: 'About'
        },
        projectPage: {
            id: 'projectPage',
            text: 'Projects'
        },
        contactPage: {
            id: 'contactPage',
            text: 'Contact'
        },
        
      }
})()