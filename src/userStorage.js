export const userStorage = (() =>{

    const users = {
        userList:['Andrew'],

        Andrew:{
            userID:'Andrew',
            password : 'Andrew',
            userStorageInfo: 'demo'
        }
    };

    const demo = {
        user: 'Andrew',
        projectTitles: ['Home Chores', 'Work', 'Food Prep'],

        item0: {
            taskList: ['Laundry', 'Vacuum', 'Dishes'],
            tasks: {
                task0: {
                    dueDate: '11/26/22',
                    complete: false,
                },
                task1: {
                    dueDate: '11/26/22',
                    complete: false,
                },
                task2: {
                    dueDate: '11/26/22',
                    complete: false,
                }
            }
        },
        item1: {
            taskList: ['Check E-mail', 'Update Project', 'Team Meeting'],
            tasks: {
                task0: {
                    dueDate: '11/26/22',
                    complete: false,
                },
                task1: {
                    dueDate: '11/26/22',
                    complete: false,

                },
                task2: {
                    dueDate: '11/26/22',
                    complete: false,
                }
            }
        },
        item2: {
            taskList: ['Thaw Meat', 'Cut Vegetables', 'Cook Rice'],
            tasks: {
                task0: {
                    dueDate: '11/26/22',
                    complete: false,
                },
                task1: {
                    dueDate: '11/26/22',
                    complete: false,
                },
                task2: {
                    dueDate: '11/26/22',
                    complete: false,
                }
            }
        },
    }

    const example = {
        user: 'example',
        projectTitles : ['Project Example'],

        item0:{
            taskList:['task Example'],
            tasks:{
                task0:{
                    dueDate:'11/26/22',
                    complete: false,
                },
            }
        },
    }


    const defaultUserList = {
        userList:['example'],

        example:{
            userID:'example',
            password : 'example',
            userStorageInfo: 'example'
        }
    };

    // Collect Project Names Function Store in New Object
    const createDefaultProjectStorage = (user, projectArray) => {
        let  defaultObject = {
            user: user,
            projectTitles: projectArray
        }
        return defaultObject
    }

    // Collect Item Names Store in Object Created by Project Function
    const itemStorageCreation = (object) => {
        for (let i = 0; i < object.projectTitles.length; i++) {
            object[`item${i}`] = {}
        }
        return object
    }

    // Collect Task List and Store in Object Created by Project Function
    // Collects Task List based on Item Number
    const taskArrayStorageCreation = (object, itemNumber) => {
        let taskRetrieval = document.getElementById(`item${itemNumber}`).querySelectorAll(`label`),
            taskArray = []
        
        for (let i = 0; i < taskRetrieval.length; i++) {
            taskArray.push(taskRetrieval[0].innerHTML)
        }

        object[`item${itemNumber}`].taskList = taskArray

        return object
    }

    // Collect Task Data and Store in Object Created by Project Function
    const taskDataCollection = (object, itemNumber) => {
        let itemElement = document.getElementById(`item${itemNumber}`).querySelectorAll(`p`),
            dueDate = itemElement.querySelectorAll(`p`),
            taskStatus = itemElement.querySelectorAll(`input`),
            item = object[`item${itemNumber}`]
        
        for (let i = 0; i < item.taskList.length; i++) {
            item.tasks[`task${i}`].dueDate = dueDate[i].innerHTML
            item.tasks[`task${i}`].complete = taskStatus[i].checked
        }


        return object
    }

    // Collect Project Title Names
    const projectCollection = () => {
        let projectRetrieval = document.getElementById('projectSelector').querySelectorAll(`li`),
        projectArray = []
        
        for (let i = 0; i < projectRetrieval.length; i++) {
            projectArray.push(projectRetrieval[i].innerHTML)
        }

        return projectArray
    }

    // Function List


    const checkUsername = (str) => {
        // at least one number, one lowercase and one uppercase letter
        // at least six characters
        var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        return re.test(str);
    }

    const checkPassword = (str) => {
        // at least one number, one lowercase and one uppercase letter
        // at least six characters that are letters, numbers or the underscore
        var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/;
        return re.test(str);
    }
    return { demo, users,example ,checkUsername, checkPassword }
})()