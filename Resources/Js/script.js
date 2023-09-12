let cocktailName = document.getElementById('name');
let cocktailImage = document.getElementById('image');
let glass = document.getElementById('glass');
let method = document.getElementById('method');
let ice = document.getElementById('ice');
let garnish = document.getElementById('garnish');

let button = document.getElementById('btn');
let title = document.getElementById('title');
let srch = document.getElementById('search');
let ingredientsList = document.getElementById('ingredientsList');

let libraryButton = document.getElementById('librButton');
let libraryPanel = document.getElementById('librSide');
let classCocktLibr = document.getElementById('classCocktailLibrary');
let classicCocktLibraryButton = document.getElementById('classicCocktLibraryButton');
let signatureCocktLibr = document.getElementById('signatureCocktailLibrary');
let signatureCocktLibraryButton = document.getElementById('signatureCocktLibraryButton');

let classicCocktailsArr = [];
let signatureCocktailsArr = [];

let allCocktailsArr = [];

let newIngredients;

let isSideListFilled = false;

// Hides the whole content below the searchbar
document.getElementById('hidden').hidden = true;

const cocktail = (name, ingredients, glass, ice, method, garnish) => {
    return {
        name,
        ingredients,
        glass,
        method,
        ice,
        garnish,
    }
}


const iceCubes = 'cubes'

// SIGNATURE COCKTAILS
    const laIslaBonita = cocktail('La Isla Bonita', ['<span>15ml</span> Guava Syrup', '<span>30ml</span> Lemon juice', '<span>15ml</span> Chambord', '<span>20ml</span> Bonanto', '<span>60ml</span> Chaval Rosado', '<span>30ml</span> Veuve Clicquot'], 'Veuve Clicquot glass', '1 Ice ball', 'Roll', 'Lemon peel');
    signatureCocktailsArr.push(laIslaBonita);

    const carribeanQueen = cocktail('Carribean Queen', ['<span>1dash.</span> Angostura Bitters', '<span>2dash.</span> Creole bitters', '<span>20ml</span> Lime juice', '<span>40ml</span> Pink grapefruit juice', '<span>30ml</span> Pineapple chutney', '<span>15ml</span> Orgeat', '<span>20ml</span> Licor43 Horchata', '<span>20ml</span> Masticha', '<span>50ml</span> Dos Maderas 5+3', '<span>5ml</span> Plantation overproof rum'], 'Coconut mug', iceCubes + ', <br>Top crushed', 'Shake', 'Short straw, <br>Mint spring, <br>Dehyd. Pineapple, <br>Grapefruit slice, <br>Cherry');
    signatureCocktailsArr.push(carribeanQueen);

    //Adds all SIGNATURE cocktails into the allCocktailsArr.
    for (i = 0; i < signatureCocktailsArr.length; i++) {
        allCocktailsArr.push(signatureCocktailsArr[i]);
    }


// CLASSIC COCKTAILS 

    const aperolSpritz = cocktail('Aperol Spritz', ['<span>50ml</span> Aperol', '<span>100ml</span> Le Altane Prosecco'], 'Red Wine Glass', 'Ice cubes', 'Build', 'Orange peel');
    classicCocktailsArr.push(aperolSpritz);

    const amarettoSour = cocktail('Amaretto Sour', ['<span>2 dash.</span> Angostura Bitters', '<span>15ml</span> Simple Syrup', '<span>25ml</span> Lemon juice', '<span>50ml</span> Amaretto Disaronno', '<span>25ml</span> Egg white'], 'Double rocks glass', 'Ice balls', 'Dry shake / Shake', 'Dehyd. lemon wheel, <br>Cherry');
    classicCocktailsArr.push(amarettoSour);

    const caipirinha = cocktail('Caipirinha', ['<span>20ml</span> Demerara simple syrup', '<span>20ml</span> Lime juice', '<span>50ml</span> Velho Barrerio Cachaca'], 'Double rocks glass', 'Ice cubes, top crushed', 'Build', 'Dehyd. lime wheel, <br>Short straw');
    classicCocktailsArr.push(caipirinha);

    const cosmopolitan = cocktail('Cosmopolitan', ['<span>5ml</span> Simple Syrup', '<span>15ml</span> Lime juice', '<span>15ml</span> Cranberry juice', '<span>20ml</span> Cointreau', '<span>50ml</span> Roberto Cavalli Vodka'], 'Tall Coupe', 'Shake', 'No ice', 'Orange peel');
    classicCocktailsArr.push(cosmopolitan);

    const daiquiri = cocktail('Daiquiri', ['<span>20ml</span> Simple Syrup /Flavour', '<span>30ml</span> Lime juice', '<span>60ml</span> Hava Club 3yo Rum'], 'Short coupe', 'No ice', 'Shake', 'Dehyd. lime wheel');
    classicCocktailsArr.push(daiquiri);

    const espressoMartini = cocktail('Espresso Martini', ['<span>1</span> Double espresso shot', '<span>10ml</span> Simple Syrup', '<span>20ml</span> Coffee Liqueur', '<span>50ml</span> Vanilla inf. Roberto Cavalli vodka'], 'Short coupe', 'No ice', 'Shake', 'Grated tonka bean');
    classicCocktailsArr.push(espressoMartini);

    const ginBasilSmash = cocktail('Gin Basil Smash', ['<span>6-8</span> Basil leaves', '<span>20ml</span> Simple Syrup', '<span>20ml</span> Lemon juice', '<span>50ml</span> Larios gin'], 'Double rocks glass', 'Ice cubes', 'Shake', 'Basil spring');
    classicCocktailsArr.push(ginBasilSmash);

    const ginFizz = cocktail('Gin Fizz', ['<span>20ml</span> Simple Syrup', '<span>20ml</span> Lemon juice', '<span>50ml</span> Larios gin', '<span>25ml</span> Egg white', '<span>Top</span> Soda water'], 'Highball', 'Ice cubes', 'Shake', 'Lemon peel');
    classicCocktailsArr.push(ginFizz);

    const hugo = cocktail('Hugo', ['<span>6-8</span> Mint leaves', '<span>50ml</span> Elderflower liqueur', '<span>100ml</span> Le Altane prosecco'], 'Red wine glass', 'Ice cubes', 'Shake', 'Mint spring, <br>dehyd. lime wheel');
    classicCocktailsArr.push(hugo);

    const longIslandIcedTea = cocktail('Long Island Iced Tea', ['<span>5ml</span> Simple Syrup', '<span>25ml</span> Lemon juice', '<span>10ml</span> Cointreau', '<span>10ml</span> Larios gin', '<span>10ml</span> Roberto Cavalli vodka', '<span>10ml</span> Havanna Club 3yo', '<span>10ml</span> Sierra Antiguo Plata', '<span>Top</span> Coca Cola'], 'Highball', 'Ice cubes', 'Shake', 'Dehyd. lemon wheel');
    classicCocktailsArr.push(longIslandIcedTea);

    const maiTai = cocktail('Mai Tai', ['<span>10ml</span> Orgeat', '<span>20ml</span> Lime juice', '<span>15ml</span> Cointreau', '<span>45ml</span> Plantation Dark Rum'], 'Double rock glass', 'Ice balls', 'Shake', 'Mint spring, <br>dehyd. lime wheel');
    classicCocktailsArr.push(maiTai);

    const manhattanSweet = cocktail('Manhattan Sweet', ['<span>2 dash.</span> Angostura bitters', '<span>30ml</span> Antica Formula', '<span>60ml</span> Four Roses bourbon'], 'Tall coupe', 'No ice', 'Stir', 'Cherry');
    classicCocktailsArr.push(manhattanSweet);

    const manhattanDry = cocktail('Manhattan Dry', ['<span>2 dash.</span> Angostura bitters', '<span>30ml</span> Martini Extra Dry', '<span>60ml</span> Four Roses bourbon'], 'Tall coupe', 'No ice', 'Stir', 'Lemon peel');
    classicCocktailsArr.push(manhattanDry);

    const manhattanPerfect = cocktail('Manhattan Perfect', ['<span>2 dash.</span> Angostura bitters', '<span>15ml</span> Martini Extra Dry', '<span>15ml</span> Antica Formula'], 'Tall coupe', 'No ice', 'Stir', 'Orange peel');
    classicCocktailsArr.push(manhattanPerfect);

    const margarita = cocktail('Margarita', ['<span>1 brsp</span> Agave Nectar', '<br>/<span>20ml</span> Flavour', '<span>25ml</span> Lime juice', '<span>25ml</span> Cointreau', '<span>50ml</span> Sierra Antiquo Plata'], 'Double rocks glass', 'Ice balls', 'Shake', 'Dehyd. lime wheel');
    classicCocktailsArr.push(margarita);

    const martiniDry = cocktail('Martini Dry', ['<span>10ml</span> Martini Extra Dry', '<span>80ml</span> Gin Mare <br>/ Grey Goose vodka'], 'Tall coupe', 'No ice', 'Stir', 'Lemon peel or <br>3 olives on the side');
    classicCocktailsArr.push(martiniDry);

    const martiniExtraDry = cocktail('Martini Extra Dry', ['<span>5ml</span> Martini Extra Dry', '<span>85ml</span> Gin Mare <br>/ Grey Goose vodka'], 'Tall coupe', 'No ice', 'Stir', 'Lemon peel or <br>3 olives on the side');
    classicCocktailsArr.push(martiniExtraDry);

    const martiniWet = cocktail('Martini Wet', ['<span>30ml</span> Martini Extra Dry', '<span>60ml</span> Gin Mare <br>/ Grey Goose vodka'], 'Tall coupe', 'No ice', 'Stir', 'Lemon peel or <br>3 olives on the side');
    classicCocktailsArr.push(martiniWet);

    const martiniDirty = cocktail('Martini Dirty', ['<span>Pinch</span> Salt', '<span>15ml</span> Martini Extra Dry', '<span>75ml</span> Gin Mare <br>/ Grey Goose vodka'], 'Tall coupe', 'No ice', 'Stir', '3 olives on the side');
    classicCocktailsArr.push(martiniDirty);

    const mojito = cocktail('Mojito', ['<span>6-8</span> Mint leaves', '<span>20ml</span> Demerara simple syrup <br>/ Flavour', '<span>20ml</span> Lime juice', '<span>50ml</span> Havana Club 3yo', '<span>dash</span> Soda'], 'Highball', 'Ice cubes, <br>Top crushed', 'Build', 'Mint spring, <br>Dehyd. lime wheel <br>/Fruit according to flavour');
    classicCocktailsArr.push(mojito);

    const moscowMule = cocktail('Moscow Mule', ['<span>25ml</span> Lime juice', '<span>50ml</span> Roberto Cavalli vodka', '<span>Top</span> Ginger beer'], 'Highball', 'Ice cubes', 'Build', 'Dehyd. lime wheel');
    classicCocktailsArr.push(moscowMule);

    const negroni = cocktail('Negroni', ['<span>30ml</span> Larios', '<span>30ml</span> Antica Formula', '<span>30ml</span> Campari'], 'Clear shortball', 'Stir', 'Clear ice block', 'Orange peel'); 
    classicCocktailsArr.push(negroni);

    const oldFashioned = cocktail('Old Fashioned', ['<span>1 dash</span> Orange Bitters', '<span>2 dash.</span> Angostura bitters', '<span>10ml</span> Demerara simple syrup', '<span>60ml</span> Four Roses Bourbon'], 'Clear shortball', 'Clear ice block', 'Stir', 'Orange peel');
    classicCocktailsArr.push(oldFashioned);

    const pinaColada = cocktail('Pina Colada', ['<span>15ml</span> Lime juice', '<span>30ml</span> Coconut puree', '<span>60ml</span> Pineapple juice', '<span>50ml</span> Havana Club 3yo'], 'Red wine glass', 'Ice cubes, <br>Top crushed', 'Shake', 'Dehyd. pineapple, <br>Cherry');
    classicCocktailsArr.push(pinaColada);

    const whiskeySour = cocktail('Whiskey Sour', ['<span>2 dash.</span> Angostura bitters', '<span>20ml</span> Simple syrup', '<span>20ml</span> Lemon juice', '<span>50ml</span> Four Roses Bourbon', '<span>25ml</span> Egg white'], 'Double rocks glass', 'Ice balls', 'Dry shake, <br>Shake', 'Dehyd. lemon wheel, <br>Cherry');
    classicCocktailsArr.push(whiskeySour);

    //Adds all CLASSIC cocktails into the allCocktailsArr.
    for (i = 0; i < classicCocktailsArr.length; i++) {
        allCocktailsArr.push(classicCocktailsArr[i]);
    }

// RESETS EVERYTHING ON THE PAGE BACK TO NORMAL
let reset = () => {

        cocktailName.style.display = 'none';
        cocktailImage.style.display = 'none';

        // Removes ingredients
        for (i = newIngredients.length-1; i >= 0; i--) {
            newIngredients[i].remove();
        }

        glass.hidden = true;
        method.hidden = true;
        ice.hidden = true;
        garnish.hidden = true;
}

const sidebar = (cocktailArray, cocktailLibrary) => {
    for (let i = 0; i < cocktailArray.length; i++) {
        let cocktailOnTheList = document.createElement('li');
        cocktailOnTheList.innerHTML = cocktailArray[i].name;
        cocktailOnTheList.style.cursor = 'pointer';
        cocktailLibrary.appendChild(cocktailOnTheList);
    
        // CLICKING ON AN ITEM WITHIN THE SIDEBAR ------------------------------------------
        cocktailOnTheList.addEventListener('click', reset);
        cocktailOnTheList.addEventListener('click', function() {
            document.getElementById('hidden').hidden = false; //this is the whole content
        
            cocktailName.style.display = 'block';
            cocktailName.innerHTML = cocktailArray[i].name;
    
            //cocktailImage.style.display = 'block';
    
            for (let ii = 0; ii < cocktailArray[i].ingredients.length; ii++) {
                let ingredient = document.createElement('li');
                ingredient.innerHTML = cocktailArray[i].ingredients[ii];
                ingredientsList.appendChild(ingredient);
            }
            
            newIngredients = ingredientsList.children;
    
            glass.innerHTML = cocktailArray[i].glass;
            method.innerHTML = cocktailArray[i].method;
            ice.innerHTML = cocktailArray[i].ice;
            garnish.innerHTML = cocktailArray[i].garnish;
    
            glass.hidden = false;
            method.hidden = false;
            ice.hidden = false;
            garnish.hidden = false;    
    
            // CLOSING THE SIDEBAR, WHEN AN ITEM IS CLICKED ------------------------------
            openSide();

            cocktailLibrary.style.height = '0';
            isClassicsTabOpen = true;
    
        });
    }    
}

sidebar(classicCocktailsArr, classCocktLibr);
sidebar(signatureCocktailsArr, signatureCocktLibr);

/* SIDEBAR HARDCODE
// SIDEBAR ------------------------------------------------------------------------------
for (let i = 0; i < classicCocktailsArr.length; i++) {
    let cocktailOnTheList = document.createElement('li');
    cocktailOnTheList.innerHTML = classicCocktailsArr[i].name;
    cocktailOnTheList.style.cursor = 'pointer';
    classCocktLibr.appendChild(cocktailOnTheList);

    // CLICKING ON AN ITEM WITHIN THE SIDEBAR ------------------------------------------
    cocktailOnTheList.addEventListener('click', reset);
    cocktailOnTheList.addEventListener('click', function() {
        document.getElementById('hidden').hidden = false; //this is the whole content
    
        cocktailName.style.display = 'block';
        cocktailName.innerHTML = classicCocktailsArr[i].name;

        cocktailImage.style.display = 'block';

        for (let ii = 0; ii < classicCocktailsArr[i].ingredients.length; ii++) {
            let ingredient = document.createElement('li');
            ingredient.innerHTML = classicCocktailsArr[i].ingredients[ii];
            ingredientsList.appendChild(ingredient);
        }
        
        newIngredients = ingredientsList.children;

        glass.innerHTML = classicCocktailsArr[i].glass;
        method.innerHTML = classicCocktailsArr[i].method;
        ice.innerHTML = classicCocktailsArr[i].ice;
        garnish.innerHTML = classicCocktailsArr[i].garnish;

        glass.hidden = false;
        method.hidden = false;
        ice.hidden = false;
        garnish.hidden = false;    

        // CLOSING THE SIDEBAR, WHEN AN ITEM IS CLICKED ------------------------------
        libraryPanel.style.right = '-450px';
        isSideOut = false;

        classCocktLibr.style.height = '0';
        isClassicsTabOpen = true;

    });
}
*/ 

let isClassicsTabOpen = true;
let isSignitureTabOpen = true;

classicCocktLibraryButton.addEventListener('click', function () {
    if (isClassicsTabOpen) {
        classCocktLibr.style.height = 'fit-content';
        isClassicsTabOpen = false;
    } else if (!isClassicsTabOpen) {
        classCocktLibr.style.height = '0';
        isClassicsTabOpen = true;
    }
})

signatureCocktLibraryButton.addEventListener('click', function () {
    if (isSignitureTabOpen) {
        signatureCocktLibr.style.height = 'fit-content';
        isSignitureTabOpen = false;
    } else if (!isSignitureTabOpen) {
        signatureCocktLibr.style.height = '0';
        isSignitureTabOpen = true;
    }
})

let isSideOut = false;

const openSide = () => {
    if (!isSideOut) {
        libraryPanel.style.right = '0';
        isSideOut = true;
    } else if (isSideOut) {
        libraryPanel.style.right = '-55vw';
        isSideOut = false;
    }
}



let search = () => {

    for (i = 0; i < allCocktailsArr.length; i++) {
        if (srch.value === allCocktailsArr[i].name) {
            document.getElementById('hidden').hidden = false; //this is the whole content
    
            cocktailName.style.display = 'block';
            cocktailName.innerHTML = allCocktailsArr[i].name;
    
            //cocktailImage.style.display = 'block';
    
            for (let ii = 0; ii < allCocktailsArr[i].ingredients.length; ii++) {
                let ingredient = document.createElement('li');
                ingredient.innerHTML = allCocktailsArr[i].ingredients[ii];
                ingredientsList.appendChild(ingredient);
            }
            
            newIngredients = ingredientsList.children;
    
            glass.innerHTML = allCocktailsArr[i].glass;
            method.innerHTML = allCocktailsArr[i].method;
            ice.innerHTML = allCocktailsArr[i].ice;
            garnish.innerHTML = allCocktailsArr[i].garnish;
    
            glass.hidden = false;
            method.hidden = false;
            ice.hidden = false;
            garnish.hidden = false;    
        }
    }
}


button.addEventListener('click', reset);
button.addEventListener('click', search);

libraryButton.addEventListener('click', openSide);