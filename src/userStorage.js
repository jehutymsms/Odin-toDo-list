export const userStorage = (() =>{

    const users = {
        userList:['Andrew'],

        Andrew:{
            userID:'Andrew',
            password : "Andrew",
            userStorageInfo: 'Demo'
        }
        
    };

    const demo = {
        password : "Demo",
        projectTitles : ['Home Chores', 'Work', 'Food Prep'],

        item0:{
            taskList:['Laundry', 'Vacuum', 'Dishes'],
            tasks:{
                task0:{
                    dueDate:'11/26/22',
                    complete: false,
                    notes:'Gather sheets as Well'
                },
                task1:{
                    dueDate:'11/26/22',
                    complete: false,
                    notes:'Be sure to get under Bed'
                },
                task2:{
                    dueDate:'11/26/22',
                    complete: false,
                    notes:'Gather dishes from Desk'
                }
            }
        },
        item1:{
            taskList:['Check E-mail', 'Update Project', 'Team Meeting'],
            tasks:{
                task0:{
                    dueDate:'11/26/22',
                    complete: false,
                    notes:'See if Frank replied'
                },
                task1:{
                    dueDate:'11/26/22',
                    complete: false,
                    notes:'Be sure to include updates from previous Team meeting'
                },
                task2:{
                    dueDate:'11/26/22',
                    complete: false,
                    notes:'Clarify any new Update During meeting'
                }
            }
        },
        item2:{
            taskList:['Thaw Meat', 'Cut Vegetables', 'Cook Rice'],
            tasks:{
                task0:{
                    dueDate:'11/26/22',
                    complete: false,
                    notes:'Set Meet in fridge for next day'
                },
                task1:{
                    dueDate:'11/26/22',
                    complete: false,
                    notes:'Potatoes cut in fourths'
                },
                task2:{
                    dueDate:'11/26/22',
                    complete: false,
                    notes:'Be sure mostt water is evaporated'
                }
            }
        }, 
    }
      return {demo:demo, users:users}
})()