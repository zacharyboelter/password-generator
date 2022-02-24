// DOM Declarations

const lengthEl = document.getElementById('length');
const generateEl = documant.getElementById('generate');




function getRandomChar() {
    const characters = ["+", "-", "&", "||", "!", "(", ")", "{", "}", "[", "]", "^",
        "~", "*", "?", ":", "\"", "\\", 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let randomIndex = Math.floor(Math.random() * characters.length);    
    return characters[randomIndex]

}

console.log(getRandomChar());

