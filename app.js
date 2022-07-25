const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const generateBtn = document.querySelector(".generate-btn");
const passwordOne = document.querySelector(".password-one");
const passwordTwo = document.querySelector(".password-two");

const generatePassword = () => {
    console.log("paswword");
    passwordOne.textContent = "password";
    let firstPassword = "";
    let secondPassword= "";

    for (let i = 0; i < 15; i++) {
        firstPassword += characters[(Math.trunc(Math.random()*characters.length))];
        secondPassword += characters[(Math.trunc(Math.random()*characters.length))];
    }
    passwordOne.style.padding = "5px 45px";
    passwordTwo.style.padding = "5px 45px";
    
    passwordOne.textContent = firstPassword;
    passwordTwo.textContent = secondPassword;

}

generateBtn.addEventListener("click", generatePassword)