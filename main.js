// Recursion

function pow(num, degree) {
    if (degree === 0) {
        return 1;
    } else if (degree < 0) {
        return 1 / pow(num, -degree);
    } else {
        return num * pow(num, degree - 1);
    }
}

const num = prompt("Enter a number:");
const degree = prompt("Enter degree:");

(isNaN(num) || isNaN(degree)) ? console.log("ERROR") : console.log(pow(num, degree));

// removeElement function

const arr = [1, 2, 3, 4, 5, 6, 7];
function removeElement(arr, item) {
    let newArr = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            continue;
        }
        newArr.push(arr[i]);
    }
    return newArr;
}

const newArr = removeElement(arr, 5);
console.log(newArr);

// generateKey function

function generateKey(length, characters) {
    let result = "";
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        result += characters.charAt(randomIndex);
    }
    return result;
}

const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

const key = generateKey(16, characters);
console.log(key);