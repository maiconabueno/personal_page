let letterSet = [];
let numSet = [];
let results = "";
const database = {
    countries: [],
    professions: [],
    hobbies: [],
    animals: [],
    animal_plurals: [],
    verbs: [],
    nouns: []
};

let pets;
let country;
let profession;
let age = 0;

//---------------to get the databases
function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

//---------------to make sure the app runs after the databases are loaded
function loadList(list_name, callback) {
    const dataUrlBase = '../db/';
    httpGetAsync(dataUrlBase + list_name + ".txt", function(responseText) {
        database[list_name].push(...responseText.split('\r\n'));
        callback();
    });
}

function setup() {
    let listsToLoad = Object.keys(database).length;

    for (const list_name of Object.keys(database)) {
        loadList(list_name, function() {
            --listsToLoad;
            if (0 == listsToLoad) {
                document.getElementById("submit-soulmate").onclick = findSoulmate;
            }
        });
    }
}

function findSoulmate() {
    letterSet = [];
    numSet = [];

    // get the name from the DOM
    let firstName = document.getElementById("firstName").value.trim();
    // document.getElementById("firstName").value = firstName;
    document.getElementById("form").style.display = "none";
    document.getElementById("grid").style.display = "block";
    results = document.getElementById("soulmate");

    if(firstName.length == 0) {
        results.innerHTML = "I don't think that's your real name... Give me your full name...";
        document.getElementById("form").style.display = "block";
    } 
    else {
        //Validation ok
        getLetters(firstName.toLowerCase());
        getResults(firstName);
    }
}

//START
setup();

// from: https://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
function hashString(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        var char = str.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

// Linear congruential pseudo-random number generator
class LinearCongruentialPRNG {
    constructor(seed) {
        // this.x is a pseudo-random number in the range [0..2³²-1]
        this.x = seed % 0x100000000;
    }

    /** Returns a pseudo-random number in the range [0..n-1] */
    get(n) {
        this.x = (1664525 * this.x + 1013904223) % 0x100000000;
        // max random number: 2³²-1, or 0xFFFFFFFF
        const result = Math.floor(this.x / 0xFFFFFFFF * n);
        return result < n ? result : n-1;
    }
}

//TO GET THE LETTERS
function getLetters(name) {
    let nameLength = name.length;

    letterSet.push(
    name[1], 
    name[3], 
    name[Math.floor(name.length/2)], 
    name[name.length-3], 
    name[name.length-2]);     
}  

//=====================================CALCULATION===================================
function getResults(name) {
    const seed2 = hashString(name.toLocaleLowerCase());
    const seed = Math.abs(seed2);

    console.log(seed2);
    console.log("Math abs seed:", seed);

    const randomGenerator = new LinearCongruentialPRNG(seed);

    const country = database.countries[randomGenerator.get(database.countries.length)];
    const country2 = database.countries[randomGenerator.get(database.countries.length)];
    const profession = database.professions[randomGenerator.get(database.professions.length)];
    const profession2 = database.professions[randomGenerator.get(database.professions.length)];
    const hobbies1 = database.hobbies[randomGenerator.get(database.hobbies.length)];
    const hobbies2 = database.hobbies[randomGenerator.get(database.hobbies.length)];
    const hobbies3 = database.hobbies[randomGenerator.get(database.hobbies.length)];
    const hobbies4 = database.hobbies[randomGenerator.get(database.hobbies.length)];
    const hobbies5 = database.hobbies[randomGenerator.get(database.hobbies.length)];
    const animal = database.animal_plurals[randomGenerator.get(database.animal_plurals.length)];
    const alphabet = "abcdefghijklmnopqrstuvxwyz";

    //============Transforming the array into integers
    for(let i=0; i <=4; i++) {
        numSet.push((alphabet.indexOf(letterSet[i])) + 1);
    }
    
    //============GET AGE (sum of all items of the array)
    age = numSet.reduce(add, 0);
    function add(accumulator, a) {
        return accumulator + a;
    }
    //============to make sure pets is plural
    if (numSet[2] <= 1) {
        pets = 3;
    } else {
        pets = numSet[2];
    }


    // ------------------------------------------RESULTS-------------------------------------------------------
    if (seed % 3 === 0) {
        results.innerHTML = `
        <h3>Who is my soulmate?</h3>
        <span class="resultEl">Age:</span> ${age} years-old.<br>
        <span class="resultEl">Location:</span> ${country}, but they have been thinking about moving to ${country2}.<br>
        <span class="resultEl">Profession:</span> ${profession}.<br>
        <span class="resultEl">Hobbies:</span> ${hobbies1}; ${hobbies2}; ${hobbies3}; ${hobbies4} and ${hobbies5}.<br>
        They have ${pets} pet ${animal}.
    `
    } else if(seed % 2 === 0) {
        results.innerHTML = `
        <h3>Who is my soulmate?</h3>
        <span class="resultEl">Age:</span> ${age} years-old.<br>
        <span class="resultEl">Location:</span> same country as you.<br>
        <span class="resultEl">Profession:</span> ${profession}.<br>
        <span class="resultEl">Hobbies:</span> ${hobbies1}; ${hobbies2}; ${hobbies3}; ${hobbies4} and ${hobbies5}.<br>
        They have ${pets} pet ${animal}.
    `
    } else {
        results.innerHTML = `
        <h3>Who is my soulmate?</h3>
        <span class="resultEl">Age:</span> ${age} years-old.<br>
        <span class="resultEl">Location:</span> ${country}.<br>
        <span class="resultEl">Profession:</span> ${profession}, but they want to change to ${profession2}.<br>
        <span class="resultEl">Hobbies:</span> ${hobbies1}; ${hobbies2}; ${hobbies3}; ${hobbies4} and ${hobbies5}.<br>
        They have ${pets} pet ${animal}.
    `
    }

}