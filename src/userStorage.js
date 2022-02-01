export const userStorage = (() => {

    const users = {
        userList: ['Andrew'],

        Andrew: {
            userID: 'Andrew',
            password: 'Andrew',
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
                    dueDate: '11/27/22',
                    complete: false,
                },
                task2: {
                    dueDate: '11/28/22',
                    complete: false,
                }
            }
        },
        item1: {
            taskList: ['Check E-mail', 'Update Project', 'Team Meeting'],
            tasks: {
                task0: {
                    dueDate: '11/22/22',
                    complete: false,
                },
                task1: {
                    dueDate: '11/23/22',
                    complete: false,

                },
                task2: {
                    dueDate: '11/24/22',
                    complete: false,
                }
            }
        },
        item2: {
            taskList: ['Thaw Meat', 'Cut Vegetables', 'Cook Rice'],
            tasks: {
                task0: {
                    dueDate: '11/10/22',
                    complete: false,
                },
                task1: {
                    dueDate: '11/11/22',
                    complete: false,
                },
                task2: {
                    dueDate: '11/12/22',
                    complete: false,
                }
            }
        },
    }

    const example = {
        user: 'example',
        projectTitles: ['Project Example'],

        item0: {
            taskList: ['task Example'],
            tasks: {
                task0: {
                    dueDate: '11/26/22',
                    complete: false,
                },
            }
        },
    }


    const defaultUser = {
        user: 'example',

        example: {
            userID: 'example',
            password: 'example',
            userStorageInfo: 'example'
        }
    };

    // Collect Project Names Function Store in New Object
    const createDefaultProjectStorage = (user, projectArray) => {
        let defaultObject = {
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
            taskArray.push(taskRetrieval[i].innerHTML)
        }

        object[`item${itemNumber}`].taskList = taskArray

        return object
    }

    // Collect Task Data and Store in Object Created by Project Function
    const taskDataCollection = (object, itemNumber) => {
        let itemElement = document.getElementById(`item${itemNumber}`),
            dueDate = itemElement.querySelectorAll(`p`),
            taskStatus = itemElement.querySelectorAll(`input`),
            item = object[`item${itemNumber}`]
        item.tasks = {}

        for (let i = 0; i < item.taskList.length; i++) {

            item.tasks[`task${i}`] = {}

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

    // Collect Data Object Creation
    const dataObjectCreation = (user = defaultUser) => {
        let projectArray = projectCollection(),
            NewDefaultObject = createDefaultProjectStorage(user.user, projectArray),
            ObjectItemsCreated = itemStorageCreation(NewDefaultObject),
            ObjectItemTasksCreated = {},
            ObjectItemTaskDataCollected = {};

        //Task Collection and Storage

        for (let i = 0; i < ObjectItemsCreated.projectTitles.length; i++) {
            ObjectItemTasksCreated = taskArrayStorageCreation(ObjectItemsCreated, i)
        }

        for (let i = 0; i < ObjectItemTasksCreated.projectTitles.length; i++) {
            ObjectItemTaskDataCollected = taskDataCollection(ObjectItemsCreated, i)
        }

        return ObjectItemTaskDataCollected
    }

    // Collect Username
    const userNameCollection = () => {
        let usernameRetrieval = document.getElementById('defaultSelector').querySelectorAll(`h2`)

        return usernameRetrieval[1].innerHTML
    }


    // Store Data as JSOn
    const storedataJSONStorage = (object) => {
        window.localStorage.setItem(object.user, JSON.stringify(object))
    }

    // Get Data from JSON Storage as an object
    const getdataJSONStorage = (item) => {
        return JSON.parse(window.localStorage.getItem(item))
    }

    // This was a test function to see about how to Store an Object using the User ID in the Object as a title from DataJSONStorage
    const testdataJSONStorage = () => {
        console.log(dataObjectCreation(example))
        storedataJSONStorage(dataObjectCreation(example))
        console.log('Data Stored')
        console.log(getdataJSONStorage(example.user))
        console.log('Data retrieved')
        console.log(getdataJSONStorage(example))
        console.log('False Name given to test what data is retrieved')
        console.log(userNameCollection())
        console.log('Test Username Retreival')
        return console.log('Test Function')
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
    return { demo, users, example, checkUsername, checkPassword, testdataJSONStorage }
})()