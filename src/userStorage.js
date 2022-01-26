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
        password : 'Demo',
        projectTitles : ['Home Chores', 'Work', 'Food Prep'],

        item0:{
            taskList:['Laundry', 'Vacuum', 'Dishes'],
            tasks:{
                task0:{
                    dueDate:'11/26/22',
                    complete: false,
                },
                task1:{
                    dueDate:'11/26/22',
                    complete: false,
                },
                task2:{
                    dueDate:'11/26/22',
                    complete: false,
                }
            }
        },
        item1:{
            taskList:['Check E-mail', 'Update Project', 'Team Meeting'],
            tasks:{
                task0:{
                    dueDate:'11/26/22',
                    complete: false,
                },
                task1:{
                    dueDate:'11/26/22',
                    complete: false,

                },
                task2:{
                    dueDate:'11/26/22',
                    complete: false,
                }
            }
        },
        item2:{
            taskList:['Thaw Meat', 'Cut Vegetables', 'Cook Rice'],
            tasks:{
                task0:{
                    dueDate:'11/26/22',
                    complete: false,
                },
                task1:{
                    dueDate:'11/26/22',
                    complete: false,
                },
                task2:{
                    dueDate:'11/26/22',
                    complete: false,
                }
            }
        }, 
    }


    const defaultUserList = {
        userList:['default'],

        default:{
            password : '',
            userStorageInfo: 'defaultData'
        }
    };

    const defaultData = {
        password : '',
        projectTitles : ['Example Project'],

        item0:{
            taskList:['Example Task'],
            tasks:{
                task0:{
                    dueDate:'11/26/22',
                    complete: false,
                },
            }
        },
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
      return {demo:demo, users:users, checkUsername:checkUsername,checkPassword:checkPassword}
})()