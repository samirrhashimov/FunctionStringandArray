let text = prompt("Your Sentence: ");
let array = text.split("");
let character = prompt("Your Character: ");
let characterCount = 0;

for (let arrayItem of array) {
    if (arrayItem == character) {
        characterCount++
    }
}


console.log("same characters: " + characterCount);