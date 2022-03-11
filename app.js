// DOM Elements

const lengthEl = document.getElementById('length');
const generateEl = document.getElementById('generate');
const firstEl = document.getElementById('first-password');
const secondEl = document.getElementById('second-password');
const thirdEl = document.getElementById('third-password');
const fourthEl = document.getElementById('fourth-password');


const characters = ["+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^",
        "~", "*", "?", ":", 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

// Get random element from array of all characters


generateEl.addEventListener('click', () => {
    let passwordLength = lengthEl.value 
    let passWord1 = ''
    let passWord2 = ''
    let passWord3 = ''
    let passWord4 = ''

    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length) + 1;  
        passWord1 += characters[randomIndex]
    }  
    firstEl.textContent = passWord1
    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length) + 1;  
        passWord2 += characters[randomIndex]
    }  
    secondEl.textContent = passWord2
    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length) + 1;  
        passWord3 += characters[randomIndex]
    }  
    thirdEl.textContent = passWord3
    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length) + 1;  
        passWord4 += characters[randomIndex]
    }  
    fourthEl.textContent = passWord4
})

function copyText() {
    firstEl.select()
    navigator.clipboard.writeText(firstEl.value)
    alert(`Copied the password ${firstEl.value}`)
}

