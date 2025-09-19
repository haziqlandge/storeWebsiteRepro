const emailEle = document.getElementById(`email`)
const passwordEle = document.getElementById(`password`);
const formEle = document.getElementById(`loginForm`);
const loginDiv = document.getElementById(`loginDiv`)
const welcome = document.getElementById(`welcome`);
const person = document.getElementById(`person`)
function spCheck(password){
    const spList = ['!', '@', '#', '$', '&']
    for(let sp of spList){
        if (password.includes(sp)){
            return true;
        }
    }
    return false;
}

function dgCheck(password){
    const dgList = [1,2,3,4,5,6,7,8,9,0];
    for(let dg of dgList){
        if(password.includes(dg)){
            return true;
        }
    }
    return false;
}

function upCheck(password){
    for(let char of password){
        if(char === char.toUpperCase() && !dgCheck(char) && !spCheck(char)){
            return true;
        }
    }
    return false;
}
function display(name, email, password){
    console.log(`Name is ${name}`);
    console.log(`Email is ${emailEle.value}`);
    console.log(`password is ${password}`);
}

formEle.addEventListener(`submit`, function(e){
    e.preventDefault();
    
    let password = passwordEle.value;
    let email = emailEle.value;
    const name = ((email).split('@'))[0];
    if(dgCheck(password) && spCheck(password) && upCheck(password) && password.length >=6){
        display(name, email, password);
        formEle.reset();
        loginDiv.style.display = `none`;
        welcome.style.display = `block`;
        person.textContent = name;
    }
    else{
        display(name, email, password);
        window.alert(`Invalid Email or Password\nplease make sure password contains \n1 special character, digit, uppercase, and is atleast length 6`)
        console.log(`please make sure password contains \n1 special character,1 digit,1 uppercase, and is of atleast length 6`)
    }
});