let letterSet = [];
let numSet = [];
let future = "";
let firstName = "";

const database = {
    countries: [],
    professions: [],
    hobbies: [],
    animal_plurals: [],
    verbs: [],
    nouns: []
};

// const country_list = ["Greenland", "Morocco", "South Korea", "Dominica", "Togo", "Ethiopia", "China", "Iraq", "Afghanistan", "Uganda", "Bolivia", "Serbia", "Costa Rica", "Iceland", "Niger", "Mali", "Denmark", "Switzerland", "Brunei", "Barbados", "Cote D Ivoire", "Madagascar", "France", "Israel", "Turkmenistan", "Mexico", "Swaziland", "New Caledonia", "New Zealand", "Macedonia", "Haiti", "Malawi", "Slovenia", "Botswana", "Germany", "Mozambique", "Macau", "Fiji", "Seychelles", "Kyrgyz Republic", "Turks &amp; Caicos", "Zambia", "Peru", "San Marino", "Montserrat", "Moldova", "Malta", "Cyprus", "Netherlands Antilles", "United Arab Emirates", "Sudan", "French West Indies", "St Lucia", "India", "Hong Kong", "Kuwait", "Russia", "Liechtenstein", "Pakistan", "Portugal", "Yemen", "Palestine", "Jamaica", "Estonia", "Sweden", "Libya", "Netherlands", "Japan", "Spain", "Burkina Faso", "Bahamas", "Indonesia", "Angola", "Lebanon", "Trinidad &amp; Tobago", "Djibouti", "Nigeria", "Kazakhstan", "Jersey", "Hungary", "St Vincent", "Bhutan", "Slovakia", "Antigua &amp; Barbuda", "Paraguay", "Isle of Man", "Nepal", "Belize", "South Africa", "Namibia", "Guernsey", "Italy", "Guatemala", "Algeria", "Nicaragua", "Andorra", "Bulgaria", "Australia", "Grenada", "Anguilla", "Benin", "Qatar", "Guyana", "Austria", "Turkey", "Luxembourg", "Brazil", "Bosnia &amp; Herzegovina", "Belgium", "Czech Republic", "Venezuela", "Mongolia", "Chad", "Congo", "Latvia", "Guinea Bissau", "Kenya", "Dominican Republic", "Ukraine", "Ecuador", "Bahrain", "Cruise Ship", "Vietnam", "Burundi", "Faroe Islands", "Iran", "Saudi Arabia", "Guam", "Norway", "Mauritania", "Falkland Islands", "Reunion", "Liberia", "Belarus", "United Kingdom", "Laos", "Senegal", "Colombia", "Puerto Rico", "Rwanda", "Gambia", "Papua New Guinea", "Argentina", "El Salvador", "Taiwan", "Philippines", "Lithuania", "Tajikistan", "Saint Pierre &amp; Miquelon", "French Polynesia", "Tanzania", "Tonga", "Georgia", "Malaysia", "Equatorial Guinea", "Ghana", "Greece", "Ireland", "Cambodia", "Bangladesh", "Azerbaijan", "Timor L'Este", "Maldives", "Cuba", "Satellite", "Cameroon", "Uzbekistan", "Montenegro", "Romania", "Samoa", "Panama", "Armenia", "Aruba", "Tunisia", "Cayman Islands", "Gibraltar", "Zimbabwe", "Croatia", "Virgin Islands (US)", "Uruguay", "Singapore", "Mauritius", "Jordan", "Honduras", "Cape Verde", "Gabon", "Oman", "Albania", "St Kitts &amp; Nevis", "Sri Lanka", "Sierra Leone", "Egypt", "St. Lucia", "Guinea", "Syria", "Cook Islands", "Bermuda", "Suriname", "Poland", "Lesotho", "Chile", "Finland", "Thailand", "Monaco", "British Virgin Islands"];
// const profession_list = ["Clothing and textile technologist", "Manufacturing machine operator", "Programme researcher", "Waste disposal officer", "Airline cabin crew", "Doctor (hospital)", "Amenity horticulturist", "Clinical cytogeneticist", "Validation engineer", "UX designer", "Advertising account planner", "Data scientist", "Mental health nurse", "Metallurgist", "Customs officer", "Multimedia programmer", "Estate agent", "Learning mentor", "Video game designer", "Architect", "Agricultural manager", "Maintenance engineer", "Prison officer", "Technical sales engineer", "Tourist information manager", "Solicitor", "Public affairs consultant", "Speech and language therapist", "Commodity broker", "Warehouse manager", "Auditor", "Data analyst", "Recruitment consultant", "Design engineer", "Arts administrator", "Volunteer work organiser", "Communications engineer", "Retail buyer", "Colour technologist", "Nanoscientist", "Air traffic controller", "Technical author", "Video game developer", "Accountant", "Commercial horticulturist", "Agricultural consultant", "Toxicologist", "Museum/gallery exhibition officer", "Writer", "Network administrator", "Pharmacovigilance officer", "Veterinary surgeon", "Structural engineer", "Recycling officer", "Corporate banker", "Aromatherapist", "Adult nurse", "Psychologist", "Clinical research associate", "Paediatric nurse", "Credit analyst", "Insurance risk surveyor", "Police officer", "Laboratory technician", "Television production assistant", "Community education officer", "Investment banker", "Museum education officer", "Manufacturing toolmaker", "Clinical microbiologist", "Medical physicist", "Health promotion specialist", "Hydrologist", "Youth worker", "QA analyst", "Oceanographer", "Marketing executive", "Biomedical engineer", "Health and safety inspector", "Photographer", "Industrial/product designer", "Project manager", "Exhibition display designer", "Civil engineer", "Advertising account executive", "Scene of crime officer", "Higher education advice worker", "Quality assurance manager", "Public librarian", "Health visitor", "Catering manager", "Research scientist", "Web developer", "Trading standards officer", "Soil scientist", "Teacher special educational needs", "Diplomatic service", "Counsellor", "Clinical biochemist", "Multimedia specialists", "Sales manager", "Naval architect", "Environmental scientist", "Materials engineer", "Management accountant", "Leisure centre manager", "Aeronautical engineer", "Magazine journalist", "Marketing assistant", "Software developer", "Product development scientist", "Nature conservation officer", "Retail manager", "Employment advice worker", "Firefighter", "Dentist", "Social worker", "Child psychotherapist", "Chemical engineer", "Music therapist", "Interpreter", "Graphic designer", "Retail merchandiser", "Government lawyer", "Dance movement therapist", "Retail pharmacist", "Hotel manager", "Market research analyst", "Magazine features editor", "Brand manager", "Marketing account manager", "Legal executive", "Web designer", "Learning disability nurse", "Investment analyst", "Fitness centre manager", "Logistics/distribution manager", "Ergonomist", "Company secretary", "Geographical information systems manager", "Illustrator", "Systems analyst", "Equality and diversity officer", "Stockbroker", "Charities administrator", "Occupational therapist", "Horticultural consultant", "Veterinary nurse", "IT consultant", "Immunologist", "Production manager", "Court reporter", "Housing adviser", "Sports coach", "Town and country planner", "Biomedical scientist", "Editorial assistant", "Statistician", "Mechanical engineer", "Regulatory affairs officer", "Tour guide", "Dietitian", "Operational researcher", "Humanitarian worker", "Conference organiser", "Midwife", "Automotive engineer", "Teacher", "Marketing manager", "Consultant", "Research chemist", "Insurance claims inspector", "Nutritionist", "Meteorologist", "Trader", "Chiropractor", "Architectural technologist", "Food scientist", "Sales executive", "Animator", "Information scientist", "Political party agent", "Community arts worker", "Marine scientist", "Psychotherapist", "Computer scientist", "Archivist", "Pharmacist", "Packaging technologist", "Manufacturing engineer", "Physiotherapist", "Restaurant manager", "Insurance broker", "Landscape architect", "Children's nurse", "Data visualisation analyst", "Medical representative", "Commissioning engineer", "Analytical chemist", "Media planner", "Retail banker", "Energy conservation officer", "Computer sales support", "Archaeologist", "Heritage manager", "Probation officer", "Paramedic", "Lawyer", "Microbiologist", "Engineer", "Public relations (PR) officer", "Environmental health officer", "Secretary", "Public house manager", "Site engineer", "Systems developer", "Welfare rights adviser", "Dental hygienist", "Electrical engineer", "Consumer rights adviser", "Picture researcher", "Careers adviser", "IT support analyst", "Forensic scientist", "Investment banker", "Sports development officer", "Barrister", "Immigration officer", "Nutritional therapist", "Nurse", "Camera operator", "Cartographer", "Journalist", "Higher education administrator", "Mining engineer", "Health and safety adviser", "Exhibition organiser", "Market research executive", "Community worker", "Homeless worker", "Pharmacologist", "Psychologist", "Training and development officer", "Dramatherapist", "Mobile developer", "Barrister’s clerk", "Trade union research officer", "Pension scheme manager", "Tourism officer", "Tax inspector", "Environmental manager", "TV/film/theatre set designer", "Sports therapist", "Environmental education officer", "Lecturer (adult education)", "Transportation planner", "Herbalist", "Health service manager", "Physician", "Accounting technician", "Investment fund manager", "Social researcher", "Personal assistant", "Travel agent", "Charities fundraiser", "Academic librarian", "Human resources officer", "Translator", "Clinical molecular geneticist", "Records manager", "Animal nutritionist", "Careers consultant", "Geneticist", "Biotechnologist", "Practice nurse", "Engineering geologist", "Advertising copywriter", "Seismic interpreter", "Fisheries officer", "Art therapist", "Database administrator", "Petroleum engineer", "Education administrator", "Bilingual secretary", "Financial manager", "Armed forces officer", "Cyber security specialist", "Exploration geologist", "Orthoptist", "Electronics engineer", "TEFL/TESL teacher", "Debt/finance adviser", "Water engineer", "Media analyst", "Broadcasting presenter", "Private music teacher", "Food technologist", "Quantity surveyor", "Plant breeder", "Office manager", "Site manager", "Information systems manager", "Press photographer", "Economist"];
// const hobbies_list = ["Listening to music", "Horseback riding", "Sketching", "Ghost hunting", "Acting", "Genealogy", "Flower arranging", "Amateur radio", "Taxidermy", "Roller skating", "Origami", "Tai chi", "Woodworking", "Scuba diving", "Creative writing", "Shooting", "Sculling", "Table tennis", "Bodybuilding", "Pet", "Rugby", "Shopping", "Mountain biking", "Crocheting", "Handball", "Archery", "Scrapbook", "Sewing", "Skydiving", "Skateboarding", "Web surfing", "Jogging", "Blacksmithing", "Machining", "Wood carving", "Hunting", "Kite flying", "Drawing", "Swimming", "Flying disc", "Cooking", "Puzzles", "Gambling", "Brazilian jiu-jitsu", "Painting", "Role-playing games", "Netball", "Parkour", "Yo-yoing", "Book restoration", "Electronics", "Computer programming", "Taekwondo", "Surfing", "Drama", "Homebrewing", "Orienteering", "Hiking", "Snowboarding", "Scouting", "Gaming", "Mycology", "Magic", "Whittling", "Candle making", "Baseball", "Rafting", "Metalworking", "Cosplaying", "Water sports", "Macrame", "Embroidery", "World Building", "Nordic skating", "Lockpicking", "Larping", "Flag football", "Driving", "Coffee roasting", "Juggling", "Couponing", "Astronomy", "Baton twirling", "Lacemaking", "Fishing", "Watching movies", "Base jumping", "Fashion", "Air sports", "Gardening", "Sudoku", "Sculpting", "Inline skating", "Mushroom hunting", "Amateur radio", "Sailing", "Backpacking", "Lapidary", "Calligraphy", "Flying", "Glassblowing", "Running", "Metal detecting", "Basketball", "Foraging", "Bird watching", "Sports", "Poi", "Playing musical instruments", "Vehicle restoration", "Foreign language learning", "Motor sports", "Reading", "Letterboxing", "Knitting", "Knapping", "Hooping", "Dowsing", "Writing", "Cryptography", "Tabletop games", "Vacation", "Video gaming", "Skiing", "Kabaddi", "Singing", "Rappelling", "Skim Boarding", "Jigsaw puzzles", "Gunsmithing", "Pottery", "Sand art", "Rock climbing", "Board games", "Stand-up comedy", "Community", "Mountaineering", "Kitesurfing", "Paintball", "3D printing", "Beekeeping", "Cabaret", "Quilting", "Polo", "Slacklining", "Jewelry making", "Photography", "Geocaching", "Colouring", "Cycling", "Yoga", "Graffiti", "Rowing", "Scrapbooking", "Digital arts", "Model building", "Board sports", "Knife making", "Lego building", "Kayaking", "Dance", "Soapmaking", "Leather crafting", "Stone skipping", "Urban exploration", "Do it yourself", "Ice skating"];
// const animal_list = ["an eagle", "a swallow", "a tarantula", "a monkey", "a scorpion", "a rat", "a turkey", "a lobster", "a moose", "a fox", "a hamster", "a hornet", "a mouse", "a pig", "a red panda", "a jaguar", "a horse", "an octopus", "a bear", "a hawk", "a raven", "an anteater", "a turtle", "a squid", "a cobra", "an eel", "a stinkbug", "a caterpillar", "a pony", "a fish", "a parrot", "a mongoose", "a flamingo", "a boar", "a frog", "a snake", "a whale", "a worm", "a mink", "a buffalo", "a bee", "an alpaca", "a cockroach", "a swan", "a pelican", "a cow", "a leopard", "a hummingbird", "a salmon", "a sardine", "a gorilla", "a toad", "an alligator", "a wasp", "a red deer", "a woodpecker", "a fly", "an ostrich", "a seahorse", "a clam", "a koala", "a goose", "a sparrow", "a camel", "a dragonfly", "a falcon", "a cheetah", "an armadillo", "a lemur", "a rhinoceros", "a mole", "a wolf", "a duck", "a mule", "a salamander", "a lion", "a llama", "an oyster", "a seal", "a raccoon", "a goat", "a bat", "a chimpanzee", "a giraffe", "a reindeer", "a spider", "a deer", "a beaver", "an owl", "a penguin", "a cat", "a hyena", "a sheep", "a porcupine", "a butterfly", "a skunk", "a ferret", "a shark", "a donkey", "a snail", "a gazelle", "a woodcock", "a cod", "an emu", "an elephant", "a zebra", "a tiger", "a meerkat", "a capybara", "a panther", "a goldfish", "an ant", "an otter", "a mosquito", "a crocodile", "a pigeon", "a termite", "a viper", "a chicken", "a dolphin", "a chinchilla", "a jellyfish", "a squirrel", "a hedgehog", "a walrus", "a crab", "a coyote", "a baboon", "a kangaroo", "a dog", "a rabbit", "a badger", "a grasshopper", "a wolverine", "a crow", "a dinosaur", "a jackal", "a trout", "a hippopotamus"];
// const animal_plural = ["eagles", "tarantulas", "monkeys", "scorpions", "rats", "turkeys", "lobsters", "hamsters", "pigs", "pandas", "horses", "bears", "turtles", "fish", "flamingos", "frogs", "snakes", "whales", "bees", "alpacas", "pelicans", "cows", "leopards", "gorillas", "alligators", "flies", "clams", "rhinoceros", "elephants", "oysters", "racoons", "dinosaurs", "crabs", "coyotes"];
// const verb_list = ["running", "dancing", "singing", "yelling", "screaming", "looking", "flying", "going", "hiking", "wishing", "jumping", "laughing", "shopping"];
// const noun_list = ["trees", "broccoli", "cookies", "pasta", "cake", "icecream", "cheese", "pizza", "onions", "garlic", "strawberries", "yogurt", "water", "door frames", "dinosaurs", "toilet paper", "chewing gum", "mushrooms", "plants", "unicorns", "bikes", "pickles", "moldy cheese", "chocolate", "rain", "bananas", "frogs"];
let pets;
let country;
let profession;
// let age = 0;
// let language = "";

//--------------fetch databases
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
                document.getElementById("submit-soulmate").onclick = getFuture;
            }
        });
    }
}

//START
function getFuture() {
    letterSet = [];
    numSet = [];

//VALIDATION + GET NAME
    firstName = document.getElementById("firstName").value;
    document.getElementById("form").style.display = "none";
    document.getElementById("grid").style.display = "block";
    future = document.getElementById("future");

    if(firstName.length <= 5) {
        future.innerHTML = "I don't think that's your real name... Give me your full name...";
        document.getElementById("form").style.display = "block";
    } 

//Validation ok
    if(firstName.length > 5) {
        funfuture(firstName);
    }
}

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




function funfuture(firstName) {
    getLetters(firstName.toLowerCase());
    getNumbers(firstName.toLowerCase());
}

//====================================TO GET THE LETTERS FOR THE AGE=============================
function getLetters(name) {
    let nameLength = name.length;

    letterSet.push(
    name[2], 
    name[3], 
    name[Math.floor(name.length/2)], 
    name[name.length-3], 
    name[name.length-1]);     
}  

//=====================================RESULTS=============================================
function getNumbers(name) {

    const alphabet = "abcdefghijklmnopqrstuvxwyz";
//Transforming the array to integers
    for(let i=0; i <=4; i++) {
        numSet.push((alphabet.indexOf(letterSet[i])) + 1);
    }


//GET AGE (sum of all items of the array)
    const age = numSet.reduce(add, 0);
    function add(accumulator, a) {
        return accumulator + a;
    }

//Generate pseudo random
    const seed2 = hashString(name.toLocaleLowerCase());
    const seed = Math.abs(seed2);

    const randomGenerator = new LinearCongruentialPRNG(seed);

    const country = database.countries[randomGenerator.get(database.countries.length)];
    const profession = database.professions[randomGenerator.get(database.professions.length)];
    const profession2 = database.professions[randomGenerator.get(database.professions.length)];
    const hobbies1 = database.hobbies[randomGenerator.get(database.hobbies.length)];
    const hobbies2 = database.hobbies[randomGenerator.get(database.hobbies.length)];
    const hobbies3 = database.hobbies[randomGenerator.get(database.hobbies.length)];
    const hobbies4 = database.hobbies[randomGenerator.get(database.hobbies.length)];
    const hobbies5 = database.hobbies[randomGenerator.get(database.hobbies.length)];
    const hobbies6 = database.hobbies[randomGenerator.get(database.hobbies.length)];
    const animal = database.animal_plurals[randomGenerator.get(database.animal_plurals.length)];
    const animal2 = database.animal_plurals[randomGenerator.get(database.animal_plurals.length)];
    const verb = database.verbs[randomGenerator.get(database.verbs.length)];
    const noun = database.nouns[randomGenerator.get(database.nouns.length)];
    const noun2 = database.nouns[randomGenerator.get(database.nouns.length)];


//GET COUNTRY
    if (numSet[2] <= 1) {
        pets = 3;
    } else {
        pets = numSet[2];
    }

//RESULTS
    if(seed % 3 === 0) {
        future.innerHTML = `
        <h3>${firstName.toUpperCase()}</h3>
        <h3>FAQ</h3>
        <span class="resultEl">When will I die? </span>${age*3} years-old.<br>
        <span class="resultEl">Cause of death?</span> ${verb} ${noun}.<br>
        But, if you don't get yourself any ${animal2}, you'll live ${age} days longer.<br>
        <span class="resultEl">When will I meet the love of my life?</span> When you're ${(age*3)-6} years-old.<br>
        <span class="resultEl">Will I have children?</span> You will have ${(pets*1.2).toFixed(1)} children.<br>
        <span class="resultEl">Where will I live?</span> You will end up moving to</span> ${country}.<br>
        <span class="resultEl">Will I be rich?</span> I see ${randomGenerator.get(1000)} dollars in your account.<br>
        <span class="resultEl">What's the ideal profession for me?</span> ${profession}.<br>
        <span class="resultEl">What profession will I end up working with?</span> ${profession2}.<br>
        <span class="resultEl">What will be my favorite hobbies?</span> ${hobbies1}; ${hobbies2}; ${hobbies3}; ${hobbies4} and ${hobbies5}.<br>
        <span class="resultEl">Will I have any pets?</span> ${pets} pet ${animal}.
        `
    } else if (seed % 2 === 0) {
        future.innerHTML = `
        <h3>${firstName.toUpperCase()}</h3>
        <h3>FAQ</h3>
        <span class="resultEl">When will I die? </span>${age*3} years-old.<br>
        <span class="resultEl">Cause of death?</span> ${verb} ${noun}.<br>
        But, if you don't start ${hobbies6}, you'll live  ${age+12} days longer.<br>
        <span class="resultEl">When will I meet the love of my life?</span> When you're ${age*2} years-old.<br>
        <span class="resultEl">Will I have children?</span> You will have ${(pets*1.1).toFixed(1)} children.<br>
        <span class="resultEl">Where will I live?</span> You will move to </span> ${country}.<br>
        <span class="resultEl">Will I be rich?</span> I see ${randomGenerator.get(100)} cents in your account.<br>
        <span class="resultEl">What's the ideal profession for me?</span> ${profession}.<br>
        <span class="resultEl">What profession will I end up working with?</span> ${profession2}.<br>
        <span class="resultEl">What will be my favorite hobbies?</span> ${hobbies1}; ${hobbies2}; ${hobbies3}; ${hobbies4} and ${hobbies5}.<br>
        <span class="resultEl">Will I have any pets?</span> ${pets} pet ${animal}.
        `
    } else {
        future.innerHTML = `
        <h3>${firstName.toUpperCase()}</h3>
        <h3>FAQ</h3>
        <span class="resultEl">When will I die? </span>${age*3} years-old.<br>
        <span class="resultEl">Cause of death?</span> ${verb} ${noun}.<br>
        <span class="resultEl">Where will I live?</span> I see you moving to </span> ${country}.<br>
        <span class="resultEl">Will I be rich?</span> I see ${999}K dollars in your account.<br>
        <span class="resultEl">When will I meet the love of my life?</span> You've already met the love of your life: ${noun2}!<br>
        <span class="resultEl">Will I have children?</span> You will have ${pets} pets.<br>
        <span class="resultEl">What's the ideal profession for me?</span> ${profession}.<br>
        <span class="resultEl">What profession will I end up working with?</span> ${profession2}.<br>
        <span class="resultEl">What will be my favorite hobbies?</span> ${hobbies1}; ${hobbies2}; ${hobbies3}; ${hobbies4} and ${hobbies5}.<br>
        <span class="resultEl">Will I have any pets?</span> ${pets} pet ${animal}.
        `
    }
}


    // future.innerHTML = ``


    // future.innerHTML = firstName.toUpperCase() + "<br>You will live until you're " + age*3 + " years-old.<br> You will move to " + 
    // country + "<br>You are destined to be a " + 
    // profession + ".<br> Your favorite hobbies in the future: " + hobbies_list[numSet[0]] + ", " + 
    // hobbies_list[numSet[1]] + ", " + hobbies_list[numSet[2]] + ", " + 
    // hobbies_list[numSet[3]] + " and " + hobbies_list[numSet[4]] + ".<br>" +
    // "You will have " + pets + " pet " + animal_plural[Math.floor(age/3.8)] +
    // ".<br>In 5 months, if you see " + animal_list[numSet[2]] + " " + verb_list[Math.floor(numSet[3]/2)] + " for " + noun_list[numSet[1]] + ", be very careful!";

