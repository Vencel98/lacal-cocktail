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

// SIGNATURE COCKTAILS
    const laIslaBonita = cocktail('La Isla Bonita', ['15ml Guava Syrup', '30ml Lemon juice', '15ml Chambord', '20ml Bonanto', '60ml Chaval Rosado', '30ml Veuve Clicquot'], 'Veuve Clicquot glass', '1 Ice ball', 'Roll', 'Lemon peel');
    signatureCocktailsArr.push(laIslaBonita);

    const carribeanQueen = cocktail('Carribean Queen', ['1dash. Angostura Bitters', '2dash. Creole bitters', '20ml Lime juice', '40ml Pink grapefruit juice', '30ml Pineapple chutney', '15ml Orgeat', '20ml Licor43 Horchata', '20ml Masticha', '50ml Dos Maderas 5+3', '5ml Plantation overproof rum'], 'Coconut mug', 'Ice cubes, <br>Top crushed', 'Shake', 'Short straw, <br>Mint spring, <br>Dehyd. Pineapple, <br>Grapefruit slice, <br>Cherry');
    signatureCocktailsArr.push(carribeanQueen);

    //Adds all SIGNATURE cocktails into the allCocktailsArr.
    for (i = 0; i < signatureCocktailsArr.length; i++) {
        allCocktailsArr.push(signatureCocktailsArr[i]);
    }


// CLASSIC COCKTAILS 
    const aperolSpritz = cocktail('Aperol Spritz', ['50ml Aperol', '100ml Le Altane Prosecco'], 'Red Wine Glass', 'Ice cubes', 'Build', 'Orange peel');
    classicCocktailsArr.push(aperolSpritz);

    const amarettoSour = cocktail('Amaretto Sour', ['2 dash. Angostura Bitters', '15ml Simple Syrup', '25ml Lemon juice', '50ml Amaretto Disaronno', '25ml Egg white'], 'Double rocks glass', 'Ice balls', 'Dry shake / Shake', 'Dehyd. lemon wheel, <br>Cherry');
    classicCocktailsArr.push(amarettoSour);

    const caipirinha = cocktail('Caipirinha', ['20ml Demerara simple syrup', '20ml Lime juice', '50ml Velho Barrerio Cachaca'], 'Double rocks glass', 'Ice cubes, top crushed', 'Build', 'Dehyd. lime wheel, <br>Short straw');
    classicCocktailsArr.push(caipirinha);

    const cosmopolitan = cocktail('Cosmopolitan', ['5ml Simple Syrup', '15ml Lime juice', '15ml Cranberry juice', '20ml Cointreau', '50ml Roberto Cavalli Vodka'], 'Tall Coupe', 'Shake', 'No ice', 'Orange peel');
    classicCocktailsArr.push(cosmopolitan);

    const daiquiri = cocktail('Daiquiri', ['20ml Simple Syrup /Flavour', '30ml Lime juice', '60ml Hava Club 3yo Rum'], 'Short coupe', 'No ice', 'Shake', 'Dehyd. lime wheel');
    classicCocktailsArr.push(daiquiri);

    const espressoMartini = cocktail('Espresso Martini', ['Double espresso shot', '10ml Simple Syrup', '20ml Coffee Liqueur', '50ml Vanilla inf. Roberto Cavalli vodka'], 'Short coupe', 'No ice', 'Shake', 'Grated tonka bean');
    classicCocktailsArr.push(espressoMartini);

    const ginBasilSmash = cocktail('Gin Basil Smash', ['6-8 Basil leaves', '20ml Simple Syrup', '20ml Lemon juice', '50ml Larios gin'], 'Double rocks glass', 'Ice cubes', 'Shake', 'Basil spring');
    classicCocktailsArr.push(ginBasilSmash);

    const ginFizz = cocktail('Gin Fizz', ['20ml Simple Syrup', '20ml Lemon juice', '50ml Larios gin', '25ml Egg white', 'Top Soda water'], 'Highball', 'Ice cubes', 'Shake', 'Lemon peel');
    classicCocktailsArr.push(ginFizz);

    const hugo = cocktail('Hugo', ['6-8 Mint leaves', '50ml Elderflower liqueur', '100ml Le Altane prosecco'], 'Red wine glass', 'Ice cubes', 'Shake', 'Mint spring, <br>dehyd. lime wheel');
    classicCocktailsArr.push(hugo);

    const longIslandIcedTea = cocktail('Long Island Iced Tea', ['5ml Simple Syrup', '25ml Lemon juice', '10ml Cointreau', '10ml Larios gin', '10ml Roberto Cavalli vodka', '10ml Havanna Club 3yo', '10ml Sierra Antiguo Plata', 'Top Coca Cola'], 'Highball', 'Ice cubes', 'Shake', 'Dehyd. lemon wheel');
    classicCocktailsArr.push(longIslandIcedTea);

    const maiTai = cocktail('Mai Tai', ['10ml Orgeat', '20ml Lime juice', '15ml Cointreau', '45ml Plantation Dark Rum'], 'Double rock glass', 'Ice balls', 'Shake', 'Mint spring, <br>dehyd. lime wheel');
    classicCocktailsArr.push(maiTai);

    const manhattanSweet = cocktail('Manhattan Sweet', ['2 dash. Angostura bitters', '30ml Antica Formula', '60ml Four Roses bourbon'], 'Tall coupe', 'No ice', 'Stir', 'Cherry');
    classicCocktailsArr.push(manhattanSweet);

    const manhattanDry = cocktail('Manhattan Dry', ['2 dash. Angostura bitters', '30ml Martini Extra Dry', '60ml Four Roses bourbon'], 'Tall coupe', 'No ice', 'Stir', 'Lemon peel');
    classicCocktailsArr.push(manhattanDry);

    const manhattanPerfect = cocktail('Manhattan Perfect', ['2 dash. Angostura bitters', '15ml Martini Extra Dry', '15ml Antica Formula'], 'Tall coupe', 'No ice', 'Stir', 'Orange peel');
    classicCocktailsArr.push(manhattanPerfect);

    const margarita = cocktail('Margarita', ['1 brsp Agave Nectar', '/20ml Flavour', '25ml Lime juice', '25ml Cointreau', '50ml Sierra Antiquo Plata'], 'Double rocks glass', 'Ice balls', 'Shake', 'Dehyd. lime wheel');
    classicCocktailsArr.push(margarita);

    const martiniDry = cocktail('Martini Dry', ['10ml Martini Extra Dry', '80ml Gin Mare <br>/85ml Grey Goose vodka'], 'Tall coupe', 'No ice', 'Stir', 'Lemon peel or <br>3 olives on the side');
    classicCocktailsArr.push(martiniDry);

    const martiniExtraDry = cocktail('Martini Extra Dry', ['5ml Martini Extra Dry', '85ml Gin Mare <br>/85ml Grey Goose vodka'], 'Tall coupe', 'No ice', 'Stir', 'Lemon peel or <br>3 olives on the side');
    classicCocktailsArr.push(martiniExtraDry);

    const martiniWet = cocktail('Martini Wet', ['30ml Martini Extra Dry', '60ml Gin Mare <br>/60ml Grey Goose vodka'], 'Tall coupe', 'No ice', 'Stir', 'Lemon peel or <br>3 olives on the side');
    classicCocktailsArr.push(martiniWet);

    const martiniDirty = cocktail('Martini Dirty', ['Pinch Salt', '15ml Martini Extra Dry', '75ml Gin Mare <br>/75ml Grey Goose vodka'], 'Tall coupe', 'No ice', 'Stir', '3 olives on the side');
    classicCocktailsArr.push(martiniDirty);

    const mojito = cocktail('Mojito', ['6-8 Mint leaves', '20ml Demerara simple syrup <br>/20ml Flavour', '20ml Lime juice', '50ml Havana Club 3yo', 'dash Soda'], 'Highball', 'Ice cubes, <br>Top crushed', 'Build', 'Mint spring, <br>Dehyd. lime wheel <br>/Fruit according to flavour');
    classicCocktailsArr.push(mojito);

    const moscowMule = cocktail('Moscow Mule', ['25ml Lime juice', '50ml Roberto Cavalli vodka', 'Top up Ginger beer'], 'Highball', 'Ice cubes', 'Build', 'Dehyd. lime wheel');
    classicCocktailsArr.push(moscowMule);

    const negroni = cocktail('Negroni', ['30ml Larios', '30ml Antica Formula', '30ml Campari'], 'Clear shortball', 'Stir', 'Clear ice block', 'Orange peel'); 
    classicCocktailsArr.push(negroni);

    const oldFashioned = cocktail('Old Fashioned', ['1 dash Orange Bitters', '2 dash. Angostura bitters', '10ml Demerara simple syrup', '60ml Four Roses Bourbon'], 'Clear shortball', 'Clear ice block', 'Stir', 'Orange peel');
    classicCocktailsArr.push(oldFashioned);

    const pinaColada = cocktail('Pina Colada', ['15ml Lime juice', '30ml Coconut puree', '60ml Pineapple juice', '50ml Havana Club 3yo'], 'Red wine glass', 'Ice cubes, <br>Top crushed', 'Shake', 'Dehyd. pineapple, <br>Cherry');
    classicCocktailsArr.push(pinaColada);

    const whiskeySour = cocktail('Whiskey Sour', ['2 dash. Angostura bitters', '20ml Simple syrup', '20ml Lemon juice', '50ml Four Roses Bourbon', '25ml Egg white'], 'Double rocks glass', 'Ice balls', 'Dry shake, <br>Shake', 'Dehyd. lemon wheel, <br>Cherry');
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
            libraryPanel.style.right = '-450px';
            isSideOut = false;
    
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
        libraryPanel.style.right = '-450px';
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