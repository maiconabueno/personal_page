const mealsEl = document.getElementById('meals');
const favoriteContainer = document.getElementById('fav-meals');

const searchTerm = document.getElementById("search-term");
const searchBtn = document.getElementById("search");

const mealPopup = document.getElementById("popup");
const popupCloseBtn = document.getElementById("popupClose");
const mealInfoEl = document.querySelector('.meal-info-container');

getRandomMeal();
fetchFavMeals();

async function getRandomMeal() {
    const resp = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const respData = await resp.json();
    const randomMeal = respData.meals[0];


    // console.log(randomMeal);

    addMeal(randomMeal, true);

    
}

async function getMealById(id) {
    const resp = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id);

    const respData = await resp.json();

    const meal = respData.meals[0];

    return meal;
}

async function getMealsbySearch(term) {
    const resp = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + term);

    const respData = await resp.json();
    const meals = respData.meals;

    return meals;
}

function addMeal(mealData, random = false) {
    const meal = document.createElement('div');
    meal.classList.add('meal');

    meal.innerHTML = `
        <div class="meal-header">
        ${random ? `<span class="random">Spotlight</span>` : ''}
            <img src="${mealData.strMealThumb}" alt="${mealData.Meal}" />
        </div>
        <div class="meal-body">
            <h4>${mealData.strMeal}</h4>
            <button class="fav-btn">
                <i class="fas fa-heart"></i>
            </button>
        </div>
    `;

    const btn = meal.querySelector(".meal-body .fav-btn");
    const openPopup = meal.querySelector(".meal-header");

    btn.addEventListener("click", () => {
        // btn.classList.toggle("active");
        if (btn.classList.contains("fav-btn-red")) {
            btn.classList.remove("fav-btn-red");
            removeMealFromLS(mealData.idMeal);
        } else {
            btn.classList.add("fav-btn-red");
            addMealToLS(mealData.idMeal);
        }
        
        
        fetchFavMeals();
    });

    openPopup.addEventListener('click', () => {
        popupInfo(mealData);
    });

    mealsEl.appendChild(meal);
}

function addMealToLS(mealId) {
    const mealIds = getMealsFromLS();

    localStorage.setItem('mealIds', JSON.stringify([...mealIds, mealId]));
}

function removeMealFromLS(mealId) {
    const mealIds = getMealsFromLS();

    localStorage.setItem('mealIds', JSON.stringify(mealIds.filter((id) => id !== mealId)));
}

function getMealsFromLS() {
    const mealIds = JSON.parse(localStorage.getItem('mealIds'));

    return mealIds === null ? [] : mealIds;
}

async function fetchFavMeals() {
    // clear the container
    favoriteContainer.innerHTML = '';

    const mealIds = getMealsFromLS();

    const meals = [];

    for(let i=0; i<mealIds.length; i++) {
        const mealId = mealIds[i];

        meal = await getMealById(mealId);
        
        addMealToFav(meal);
    }
}

function addMealToFav(mealData) {
    // clear the container
    const favMeal = document.createElement('div');
    // const teste12 = document.querySelector(".fav-float img");

    favMeal.innerHTML = `
        <div class="fav-float">
	        <li>
                <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}" />
            </li>
	        <span>${mealData.strMeal}</span>
            <button class="clear"><i class="fas fa-times"></i></button>
        </div>
        
    `;

    const btn = favMeal.querySelector('.clear');

    btn.addEventListener("click", () => {
        removeMealFromLS(mealData.idMeal);

        fetchFavMeals();
        
    });

    favMeal.addEventListener("click", () => {
        popupInfo(mealData);
    });

    favoriteContainer.appendChild(favMeal);
    
}

searchBtn.addEventListener('click', async () => {
    mealsEl.innerHTML = '';
    const search = searchTerm.value;

    const meals = await getMealsbySearch(search);

    if (meals) {
        meals.forEach(meal => {
            addMeal(meal);
        });
    }

    mealsEl.classList.add("visible");
})



function popupInfo(mealData) {
    mealInfoEl.innerHTML = '';

    const mealEl = document.createElement('div');
    const ingredients = [];

    console.log(mealData);
    console.log(mealData['strIngredient1']);

    for(let i=1; i<=20; i++) {
        if(mealData['strIngredient'+i]) {
            ingredients.push(`
            ${mealData["strMeasure" + i]}
            - ${mealData["strIngredient" + i]}
            `);
        } else {
            break;
        }
    }

    console.log(ingredients);

    mealEl.innerHTML = `
        <div id="meal-info" class="meal-info">
        <h1>${mealData.strMeal}</h1>
        <img src="${mealData.strMealThumb}" alt="${mealData.strMeal} photo">
        <p>${mealData.strInstructions}</p>
        
        <h3>Ingredients</h3>
        <ul>
            ${ingredients.map((ing) => `<li>${ing}</li>
            `).join("")}
        </ul>
        <button class="exitBtn" id="popupClose" onclick="closeFn()"><i class="fas fa-times"></i></button>
        </div>
        `;

    mealPopup.appendChild(mealEl);

    mealPopup.classList.remove("hidden");
}

function closeFn() {
    mealPopup.classList.add("hidden");
}

//Enter key as submit for search
searchTerm.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("search").click();
    }
});

