let letterSet = [];
let numSet = [];

//START
document.getElementById("submit-btn").onclick = function() {
    letterSet = [];
    numSet = [];

//=====================================VALIDATION + GET NAMES=============================================
    let firstName = document.getElementById("firstName").value;
    let secondName = document.getElementById("secondName").value;

    if(firstName.length <= 3) {
        console.log("I don't think that's your real name... Give me your full name...");
    } else if(secondName.length <= 3) {
        console.log("Are you sure that's their name? I've never seen somebody named \"" + secondName + "\"! Give me their full name!");
    }
//Validation ok
    if(firstName.length > 3 && secondName.length > 3) {
        main(firstName, secondName);
    }
}



function main(firstName, secondName) {
    getLetters(firstName.toLowerCase());
    getLetters(secondName.toLowerCase());
    getNumbers();
}

//TO GET THE LETTERS
function getLetters(name) {
    let nameLength = name.length;
    console.log(name);
    for(let i = 0; i<=2; i++) {
        if(i==0) {
        letterSet.push(name[0]);
        } else if(i==1) {
            letterSet.push(name[Math.floor(name.length/2)]);
        } else {
            letterSet.push(name[name.length-1]);
        }
    }
}  



//=====================================CALCULATION=============================================
function getNumbers() {

    let alpha1 = ["j", "s", "c", "k", "r", "t", "e"]; //5
    let alpha2 = ["m", "d", "b", "a", "l", "p", "g"]; //33
    let alpha3 = ["w", "h", "f", "i", "z", "u", " "]; //25
    let alpha4 = ["n", "v", "y", "o", "x", "q"]; //11
//creating the array from the names
    for(let i=0; i <=5; i++) {
        if (alpha1.includes(letterSet[i])) {
            numSet.push(5);
        } else if (alpha2.includes(letterSet[i])) {
            numSet.push(33.33);
        } else if (alpha3.includes(letterSet[i])) {
            numSet.push(25);
        } else if (alpha4.includes(letterSet[i])) {
            numSet.push(11);
        } else {
            numSet.push(3);
        }
    }
//to fix when the pair are on the same groups, totalizing 0 at the end
    for(let i=0; i<=5; i++) {
        if(numSet[0] == numSet[3] && numSet[1] == numSet[4] && numSet[2] == numSet[5]) {
            numSet[3] = 15;
            numSet[4] = 12;
            numSet[5] = 10;
        }
    }

    calc();
}

function calc() {
    
    lettersTotal = Math.abs(numSet[0]-numSet[3])+Math.abs(numSet[1]-numSet[4])+Math.abs(numSet[2]-numSet[5]);

    Math.abs(lettersTotal);

    if (lettersTotal < 67) {
        lettersTotal = lettersTotal*1.5;
    }
    // console.log("The total so far is: " + Math.ceil(lettersTotal) + "%");
    document.getElementById("result").innerHTML = Math.ceil(lettersTotal) + "%";
    // console.log(letterSet);

}




