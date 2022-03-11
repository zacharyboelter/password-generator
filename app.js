// DOM Elements

const lengthEl = document.getElementById('length');
const generateEl = document.getElementById('generate');
const firstEl = document.getElementById('first-password');
const secondEl = document.getElementById('second-password');
const thirdEl = document.getElementById('third-password');
const fourthEl = document.getElementById('fourth-password');

// console.log(fourthEl);


// Get random element from array of all characters

function getRandomChar() {
    const characters = ["+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^",
        "~", "*", "?", ":", "\"", "\\", 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let randomIndex = Math.floor(Math.random() * characters.length);  
    for (let i = 0; i < lengthEl.length; i++) {
        return randomIndex[i]
    }  
    firstEl.textContent =  characters[randomIndex]

}

// console.log(getRandomChar());

generateEl.addEventListener('click', getRandomChar())