// This is just a place Holder
import './style.css';


// console.log('Now time for the JS')

const Andrew = {
    password : "Andrew",
  }
  
window.localStorage.setItem("Andrew", JSON.stringify(Andrew));

let newObject = window.localStorage.getItem("Andrew");
// console.log(JSON.parse(newObject));


let info = document.getElementById('userInfo')

// console.log(info.elements['userName'].value)



let test = () => {
    if(window.localStorage.getItem(info.elements['userName'].value) == null){
        console.log('This is not a username')
    }else{
        console.log('This Matches')
        console.log(window.localStorage.getItem(info.elements['userName'].value))
        let test2 = JSON.parse(window.localStorage.getItem(info.elements['userName'].value))
        console.log(test2.password)
    }
}


let test2 = (x) => {
    if(window.localStorage.getItem(info.elements['userName'].value) == null){
        console.log('This is not a username')
    }else{
        console.log('This Matches')
        console.log(window.localStorage.getItem(info.elements['userName'].value))
    }
}

test()

window.localStorage.clear()